<?php
	$request = explode('/', $_GET['q']); // Explode query by /
	switch($request[0]) {
		case 'data': echo json_encode(get_data_response(array_slice($request, 1))); break; // If this is client-side data request
		case 'sitemap.xml': include 'sitemap.php'; break;
		case 'robots.txt': include 'robots.php'; break;
		default: include 'tpl/index.tpl';
	}
	
	function get_data_response($request) {
		switch($request[0]) {
			case 'database': 
				header('Expires: ' . gmdate('D, d M Y H:i:s', time() - 1) . ' GMT'); // Force no caching
				return process_database(array_slice($request, 1));
			default:
				header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 60*60*24) . ' GMT'); // 1-day caching
				switch($request[0]) {
					case 'language_file': return get_language_file($request[1]);
					case 'countries_list': return get_countries_list();
					case 'pages_list': return get_pages_list();
				}
		}
	}
	
	function process_database($request) {
		$db = new SQLite3('mariole.db'); // Open connection to DB
		$language = $db->escapeString(empty($request[1]) ? 'en' : $request[1]); // Use provided or english language
		$response; // Deslacation of finish response var
		switch($request[0]) {
			case 'product_query': $response = get_product_query($db, $language, array_slice($request, 2)); break; // For multiple products
			case 'product_info': $response = get_product_info($db, $language, array_slice($request, 2)); break; // For single product
		}
		$db->close(); // Close connection to DB
		return $response;
	}
	
	function get_product_query($db, $language, $request) {
		return wrap_products_info($db, $language, get_product_query_sql($db, $language, $request)); // Format response in pretty-use style
	}
	
	function get_product_query_sql($db, $language, $request) { // Returns valid SQL request with given parameters
		$sql = "
			SELECT * FROM products
				JOIN ( SELECT article, i0 FROM products_photos ) USING(article)
				JOIN ( SELECT article, name FROM products_lang_$language ) USING(article)
		";
		switch($request[0]) {
			case 'cart':
				$products_list = str_replace('-', ', ', $db->escapeString($request[1]));
				return $sql . " WHERE products.article IN ({$products_list})";
			default:
				$type = $db->escapeString($request[0]);
				$class = $db->escapeString($request[1]);
				return $sql . ($type ? " WHERE products.type = '$type'" . ($class ? " AND products.class = '$class'" : '') : '');
		}
	}
	
	function get_product_info($db, $language, $request) {
		$article = $db->escapeString($request[0]);
		$sql = "
			SELECT * FROM products
				JOIN products_photos USING(article)
				JOIN products_lang_$language USING(article)
			WHERE products.article = '$article'
		";
		return wrap_products_info($db, $language, $sql, true)[0]; // Format response in pretty-use style with saving products' parameters
	}
	
	function wrap_products_info($db, $language, $sql, $has_params = false) {
		$result = $db->query($sql);
		$response = [];
		while($row = $result->fetchArray(SQLITE3_ASSOC)) {
			foreach([ // Category name => category's values
				'data' => ['article', 'type', 'class'], // Wrap article, type and class in field 'data'
				'language' => ['name', 'description'], // Wrap name and description in field 'language'
				'prices' => ['euro', 'dollar', 'rouble', 'koruna'], // Wrap all prices in field 'prices'
				'images' => ['i0', 'i1', 'i2', 'i3', 'i4', 'i5'] // Wrap all images in field 'images'
			] as $type => $columns) { // $type = category name, $columns = category's values
				$row[$type] = []; // Make new wrapper for category
				foreach($columns as $column_name) { // For all category's values
					if(isset($row[$column_name])) $row[$type][$column_name] = $row[$column_name]; // If DB's response has this value then wrap it...
					unset($row[$column_name]); // ... and remove from DB's response
				}
				if(count($row[$type]) == 0) unset($row[$type]); // If wrapper has no values then remove it
			}
			
			$row['images'] = array_values($row['images']); // Remove keys of field 'images'
			
			if($has_params) { // If need to save product's parameters
				$row['params'] = get_product_params( // Translate parameters and wrap them
					$db, $language,
					array_merge(json_decode($row['uni_params'], true), json_decode($row['params'], true) ?? []) // Combine universal and common parameters
				);
			} else unset($row['params']); // If don't need to save parameters then remove this field
			unset($row['uni_params']); // Remove universal parameter's array
			
			$response[] = $row; // Add wrapper product to the response
		}
		return $response;
	}
	
	function get_product_params($db, $language, $params) {
		$sql = "
			SELECT priority, is_uni, id, $language FROM products_params
			WHERE id IN
		(" . implode(', ', array_map(fn($param) => "'{$param}'", array_keys($params))) . ')'; // Wrap parameters' names with single quotes (wow arrow func)
		$result = $db->query($sql);
		
		$response = [];
		while($row = $result->fetchArray(SQLITE3_ASSOC)) {
			if($row['is_uni']) { // If parameter's value shouldn't be translated (width, for example)
				$exploded_name = explode(':', $row[$language]);
				$row['name'] = $exploded_name[0];
				$row['unit'] = $exploded_name[1];
			} else $row['name'] = $row[$language]; 
			$row['value'] = $params[$row['id']];
			unset($row[$language], $row['id'], $row['is_uni']);
			$response[] = $row;
		}
		return $response;
	}
	
	function get_countries_list() {
		return json_decode(file_get_contents('config/countries.json'), true);
	}
	
	function get_language_file($language) {
		return json_decode(file_get_contents('config/lang/' . ($language ?? 'en') . '.json', true));
	}
	
	function get_pages_list() {
		return str_replace('.tpl', '', array_slice(scandir('tpl/pages/roots'), 2));
	}