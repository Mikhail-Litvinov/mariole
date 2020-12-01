<?php
	exit(json_encode([
		'page' => $_GET['page'] ? get_page($_GET['page_name']) : [],
		'translation' => $_GET['language'] ? get_translation($_GET['page_name'], $_GET['language']) : []
	]));
	
	function get_page($page_name) {
		return $page_name ? file_get_contents("./$page_name/page.tpl") : [];
	}
	
	function get_translation($page_name, $language) {
		return ($page_name && $language) ? json_decode(file_get_contents("./$page_name/translation.json"), true)[$language] : [];
	}
?>