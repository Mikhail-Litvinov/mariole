User-agent: *
Allow: /

Disallow: /config/
Disallow: /css/
Disallow: /fonts/
Disallow: /img/
Disallow: /js/
Disallow: /tpl/

<?php
	$host = "{$_SERVER['REQUEST_SCHEME']}://{$_SERVER['SERVER_NAME']}";
	echo 'Host: ' . $host . "\n";
	echo 'Sitemap: ' . $host . '/sitemap.xml';
?>