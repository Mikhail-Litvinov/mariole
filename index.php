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
		$response;
		switch($request[0]) {
			case 'product_query':
			case 'product_info':
				$language = $db->escapeString($request[1]);
				$sql = "
					SELECT * FROM products 
						JOIN products_lang_$language ON products.article = products_lang_$language.article 
						JOIN products_photos ON products.article = products_photos.article
				";
				switch($request[0]) {
					case 'product_query': $response = get_product_query($db, $sql, $language, array_slice($request, 2)); break;
					case 'product_info': $response = get_product_info($db, $sql, $language, array_slice($request, 2)); break;
				}
				break;
			case 'forexample_news_query':
				break;
		}
		$db->close();
		return $response;
	}
	
	function get_product_query($db, $sql, $language, $request) {
		$type = $db->escapeString($request[0]);
		$class = $db->escapeString($request[1]);
		if($type) $sql .= " WHERE products.type = '$type'";
		if($class) $sql .= " AND products.class = '$class'";
		$result = $db->query($sql);
		$response = [];
		while($row = $result->fetchArray(SQLITE3_ASSOC)) $response[] = $row;
		return $response;
	}
	
	function get_product_info($db, $sql, $language, $request) {
		$article = $db->escapeString($request[0]);
		$sql .= " WHERE products.article = '$article'";
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