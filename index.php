<?php
	$request = explode('/', $_GET['q']); // 'q' is URL after domain, e.g. 'catalogue/accessories/gloves'
	switch($request[0]) {
		case 'data': echo json_encode(get_data_response(array_slice($request, 1))); break; // If this is client-side data request
		case 'sitemap.xml': include 'private/sitemap.php'; break;
		case 'robots.txt': include 'private/robots.php'; break;
		case 'admin': include 'admin/admin.php'; break;
		default: include 'private/index.php';
	}
	
	function get_data_response($request) {
		switch($request[0]) {
			case 'database': 
				header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 60 * 60) . ' GMT'); // 1-hour caching
				return process_database(array_slice($request, 1));
			default:
				header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 60 * 60 * 24) . ' GMT'); // 1-day caching
				switch($request[0]) {
					case 'pages_list': return get_pages_list();
				}
		}
	}
	
	function process_database($request) {
		$db = new SQLite3('private/mariole.sqlite3');
		$language = $db->escapeString($request[1]);
		$response;
		switch($request[0]) {
			case 'product_query': // For multiple products, contains only first of images and only 'name' language's field
				$response = get_product_query($db, $language, array_slice($request, 2));
				break;
			case 'product_info': // For single product, contains all images and full language fields
				$response = get_product_info($db, $language, array_slice($request, 2));
				break;
			case 'language_file':
				$response = get_language_file($db, $language);
				break;
			case 'countries_list':
				$response = get_countries_list($db);
				break;
		}
		$db->close();
		return $response;
	}
	
	function get_product_query($db, $language, $request) {
		// Wraps all products' fields into interact-convenient object
		return wrap_products_info($db, $language, get_product_query_sql($db, $language, $request));
	}
	
	function get_product_query_sql($db, $language, $request) { // Returns valid SQL request with given parameters
		$sql = "
			SELECT * FROM products
				JOIN ( SELECT article, name FROM products_lang_$language ) USING(article)
		";
		switch($request[0]) {
			case 'cart': // Multiple products for cart, e.g. '1-2-3-4', where 1, 2, 3 and 4 - products' articles
				$products_list = str_replace('-', ', ', $db->escapeString($request[1]));
				return $sql . " WHERE products.article IN ({$products_list})";
			default: // Another cases, selecting by type (e.g. clothes) and class (e.g. gloves)
				$type = $db->escapeString($request[0]);
				$class = $db->escapeString($request[1]);
				return $sql . ($type ? " WHERE products.type = '$type'" . ($class ? " AND products.class = '$class'" : '') : '');
		}
	}
	
	function get_product_info($db, $language, $request) {
		$article = $db->escapeString($request[0]);
		$sql = "
			SELECT * FROM products
				JOIN products_lang_$language USING(article)
			WHERE products.article = '$article'
		";
		return wrap_products_info($db, $language, $sql, true)[0]; // Wrap with saving products' parameters
	}
	
	function wrap_products_info($db, $language, $sql, $has_params = false) {
		$result = $db->query($sql);
		$response = [];
		while($row = $result->fetchArray(SQLITE3_ASSOC)) {
			foreach([ // Category name => category's values
				'data' => ['article', 'type', 'class'], // Wrap article, type and class in field 'data'
				'language' => ['name', 'description'], // Wrap name and description in field 'language'
				'prices' => ['EUR', 'USD', 'RUB', 'CZK'] // Wrap all prices in field 'prices'
			] as $type => $columns) { // $type = category name, $columns = category's values
				$row[$type] = []; // Make new wrapper for category
				foreach($columns as $column_name) { // For all category's values
					if(isset($row[$column_name])) $row[$type][$column_name] = $row[$column_name]; // If DB's response has this value then wrap it...
					unset($row[$column_name]); // ... and remove from DB's response
				}
				if(count($row[$type]) == 0) unset($row[$type]); // If wrapper has no values then remove it
			}
			
			$row['images'] = json_decode($row['images']); // Transform JSON images' list into an indexed array
			
			if($has_params) { // If need to save product's parameters
				$row['params'] = get_product_params( // Translate parameters and wrap them
					$db, $language,
					array_merge(json_decode($row['uni_params'], true), json_decode($row['params'], true) ?? []) // Combine unified and common parameters
				);
			} else unset($row['params']); // If don't need to save parameters then remove this field
			unset($row['uni_params']); // Remove unified parameters' array
			
			$response[] = $row;
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
			if($row['is_uni']) { // If parameter's value is unified for all languages
				$exploded_name = explode(':', $row[$language]); // Splice parameter's name (e.g. 'Width:cm')
				$row['name'] = $exploded_name[0];
				$row['unit'] = $exploded_name[1];
			} else $row['name'] = $row[$language];
			$row['value'] = $params[$row['id']];
			unset($row[$language], $row['id'], $row['is_uni']);
			$response[] = $row;
		}
		return $response;
	}
	
	function get_countries_list($db) {
		$sql = "SELECT * FROM app_countries";
		$result = $db->query($sql);
		$response = [];
		while($row = $result->fetchArray(SQLITE3_ASSOC)) {
			$response[$row['latin']] = [
				'currency' => $row['currency'],
				'area' => $row['area']
			];
		}
		return $response;
	}
	
	function get_language_file($db, $language) {
		$sql = "SELECT langid, $language FROM app_languages";
		$result = $db->query($sql);
		$response = [];
		while($row = $result->fetchArray(SQLITE3_ASSOC)) {
			$response[$row['langid']] = $row[$language];
		}
		return $response;
	}
	
	function get_pages_list() {
		return array_slice(scandir('public/templates/rootpages'), 2);
	}