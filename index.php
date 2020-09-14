<?php
	$page = array("title" => "TEST TITLE"); // Just for debug
	
	$countries_list = json_decode(file_get_contents("data/countries.json"), true); // JSON file to associative PHP array
	
	include_once "tpl/index.tpl"; // Include index.tpl