User-agent: *
Allow: /
Disallow: /private/

<?php
	$host = "{$_SERVER['REQUEST_SCHEME']}://{$_SERVER['SERVER_NAME']}";
	echo 'Host: ' . $host . "\n";
	echo 'Sitemap: ' . $host . '/sitemap.xml';
?>