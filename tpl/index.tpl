<!DOCTYPE html>
<html lang="ru">
	<head>
		<?php include 'tpl/head.tpl'; ?>
	</head>
	<body>
		<header>
			<?php
				include 'tpl/header.tpl';
				if(!($current_page == '' || in_array($current_page, $pages_list))) { include 'tpl/404.tpl'; }
			?>
		</header>
		<main>
			<div id="content"></div>
		</main>
		<?php
			include 'tpl/modal-countries.tpl';
			include 'tpl/modal-search.tpl';
			include 'tpl/scripts.tpl';
		?>
	</body>
</html>