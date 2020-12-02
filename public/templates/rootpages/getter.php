<?php
	$response = [
		'page' => null,
		'translation' => null
	];
	$page_name = $_GET['page_name'];
	if($page_name) {
		if($_GET['page']) $response['page'] = get_page($page_name);
		if($_GET['language']) $response['translation'] = get_translation($page_name, $_GET['language']);
	}
	exit(json_encode($response));
	
	function get_page($page_name) {
		$page = file_get_contents("./$page_name/page.tpl");
		return $page ?? null;
	}
	
	function get_translation($page_name, $language) {
		$translation = json_decode(file_get_contents("./$page_name/translation.json"), true)[$language];
		return count($translation) ? $translation : null;
	}
?>