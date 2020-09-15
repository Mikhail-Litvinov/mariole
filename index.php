<?php
	$page = array('title' => 'TEST TITLE'); // Just for debug
	
	$countries_list = json_decode(file_get_contents('config/countries.json'), true); // Countries' JSON file to associative PHP array
	$pages_list = scandir('tpl/pages'); // List of page's templates
	
	include 'tpl/index.tpl'; // Include index.tpl