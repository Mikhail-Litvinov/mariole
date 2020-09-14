<!DOCTYPE html>
<html lang="ru">
	<head>
		<?php include_once "head.tpl"; ?>
	</head>
	<body>
		<header>
			<?php include_once "header.tpl"; ?>
		</header>
		<main>
			<div id="content"></div>
		</main>
		<?php
			include_once "modal-countries.tpl";
			include_once "modal-search.tpl";
			include_once "scripts.tpl";
		?>
	</body>
</html>