<?php
	function process_admin($request) {
		switch($request[0]) {
			case 'database': return process_admin_database(array_slice($request, 1));
			case 'load': return process_admin_load(array_slice($request, 1));
		}
	}
	
	function process_admin_database($request) {
		$db = new SQLite3('private/mariole.sqlite3');
		$response;
		switch($request[0]) {
			case 'edit_product':
				$response = edit_product($db, array_slice($request, 1), json_decode($_POST['product_data'], true));
				break;
			case 'edit_post':
				$reponse = edit_post($db, array_slice($request, 1), json_decode($_POST['post_data'], true));
				break;
		}
		$db->close();
		return $response;
	}
	
	function edit_product($db, $request, $data) {
		$sql;
		switch($data['action']) {
			case 'create':
				$uni_params = [];
				foreach($data['uni_params'] as $param) $uni_params[$param['name']] = $param['value'];
				$uni_params = json_encode($uni_params);
				$images = json_encode($data['images']);
				$db->query("
					INSERT INTO products (type, class, EUR, USD, RUB, CZK, uni_params, images)
					VALUES (
						'{$data['data']['type']}',
						'{$data['data']['class']}',
						{$data['prices']['EUR']},
						{$data['prices']['USD']},
						{$data['prices']['RUB']},
						{$data['prices']['CZK']},
						'{$uni_params}',
						'{$images}'
					);
				");
				foreach(['ru', 'en', 'cs', 'it', 'zh'] as $language) {
					$lang_data = $data['languages'][$language];
					$params = [];
					foreach($lang_data['params'] as $param) $params[$param['name']] = $param['value'];
					$params = json_encode($params);
					$db->query("
						INSERT INTO products_lang_$language (name, description, params)
						VALUES ('{$lang_data['name']}', '{$lang_data['description']}', '{$params}');
					");
				}
				// $result = $db->query($sql);
				// echo '<pre>', print_r($result), '</pre>';
				break;
			case 'edit':
				// ...
				break;
			case 'delete':
				break;
		}
	}
	
	function edit_post($db, $request, $data) {
		
	}
	
	function process_admin_load($request) {
		switch($request[0]) {
			case 'img': return admin_load_img($request[1], $request[2]);
			default: /* ... */ break;
		}
	}
	
	function admin_load_img($extension, $type) {
		$path = 'public/images/products-images';
		$previewPath = 'public/images/products-previews';
		
		$done_files = [];
		foreach($_FILES as $index => $file) {
			$filename = hash('sha1', $file['name'] . $file['type'] . $file['size']);
			move_uploaded_file($file['tmp_name'], "$path/$filename.$extension");
			copy("$path/$filename.$extension", "$previewPath/$filename.$extension");
			$done_files[] = "$path/$filename.$extension";
		}
		//echo '<pre>', print_r($done_files), '</pre>';
		return json_encode($done_files);
	}
?>