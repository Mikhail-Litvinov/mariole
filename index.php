<?php
	$request = explode('/', $_GET['q']);
	if($request[0] == 'data') {
		echo json_encode(response_data($request));
	} else {
		include 'tpl/index.tpl';
	}
	
	function response_data($request) {
		switch($request[1]) {
			case 'countries_list': return get_countries_list();
			case 'language_file': return get_language_file($request[2]);
			case 'pages_list': return get_pages_list();
			case 'database': return process_database(array_slice($request, 2));
		}
	}
	
	function process_database($request) {
		$db = new SQLite3('mariole.db');
		$language = $db->escapeString(empty($request[1]) ? 'en' : $request[1]);
		$response;
		switch($request[0]) {
			case 'product_query':
			case 'product_info':
				switch($request[0]) {
					case 'product_query': $response = get_product_query($db, $language, array_slice($request, 2)); break;
					case 'product_info': $response = get_product_info($db, $language, array_slice($request, 2)); break;
				}
				break;
			case 'forexample_news_query':
				break;
		}
		$db->close();
		return $response;
	}
	
	function get_product_query($db, $language, $request) {
		$result = $db->query(get_product_query_sql($db, $language, $request));
		$response = [];
		while($row = $result->fetchArray(SQLITE3_ASSOC)) $response[] = $row;
		return $response;
	}
	
	function get_product_query_sql($db, $language, $request) {
		$sql = "
			SELECT * FROM products
				JOIN ( SELECT article, i0 FROM products_photos ) USING(article)
				JOIN ( SELECT article, name FROM products_lang_$language ) USING(article)
		";
		switch($request[0]) {
			case 'cart':
				$products_list = implode(', ', explode('-', $db->escapeString($request[1])));
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
		return $db->query($sql)->fetchArray(SQLITE3_ASSOC);
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