<?php
	$page = array('title' => 'TEST TITLE'); // Just for debug
	
	$countries_list = json_decode(file_get_contents('config/countries.json'), true); // Countries' JSON file to associative PHP array
	$pages_list = str_replace('.tpl', '', array_slice(scandir('tpl/pages'), 2)); // List of clean page's template's names
	$current_page = substr($_SERVER['REQUEST_URI'], 1); // Contains clean current page name
	
	include 'tpl/index.tpl'; // Include index.tpl