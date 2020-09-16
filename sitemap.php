<?php
	function getSitemapData($file) {
		$last_file_modify = date_timestamp_set(date_create(), filemtime('tpl/pages/' . $file));
		$delta_days = date_diff(date_create(), $last_file_modify)->days;
		
		$data = [
			'lastmod' => date_format($last_file_modify, "Y-m-d"),
			'changefreq' => 0,
			'priority' => 0
		];
		
		if($delta_days <= 1) {
			$data['changefreq'] = 'daily';
			$data['priority'] = 1.0;
		} else if($delta_days <= 7) {
			$data['changefreq'] = 'weekly';
			$data['priority'] = 0.75;
		} else {
			$data['changefreq'] = 'monthly';
			$data['priority'] = 0.5;
		}
		
		return $data;
	}
	
	header('Content-type: text/xml');
	
	$xml = new SimpleXMLElement(
		'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"/>'
	);
	
	$pages = array_slice(scandir('tpl/pages'), 2);
	$host = "{$_SERVER['REQUEST_SCHEME']}://{$_SERVER['SERVER_NAME']}/";
	
	foreach($pages as $key => $page) {
		$data = getSitemapData($page);
		
		$url = $xml->addChild('url');
		$url->addChild('loc', $host . str_replace('.tpl', '', $page));
		$url->addChild('lastmod', $data['lastmod']);
		$url->addChild('changefreq', $data['changefreq']);
		$url->addChild('priority', $data['priority']);
	}
	
	echo $xml->asXML();
?>