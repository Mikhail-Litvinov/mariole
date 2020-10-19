<!DOCTYPE html>
<html lang="ru">
	<head>
		<?php include 'tpl/head.tpl'; ?>
	</head>
	<body>
		<header class="animated">
			<?php include 'tpl/404.tpl'; ?>
			<?php include 'tpl/header.tpl'; ?>
		</header>
		<main>
			<div id="content"></div>
		</main>
		<footer>
			<?php include 'tpl/footer.tpl'; ?>
		</footer>
		<?php include 'tpl/modal-countries.tpl'; ?>
		<?php include 'tpl/modal-search.tpl'; ?>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script id="ymaps-placeholder"></script>
		<script src="/js/app.js"></script>
	</body>
</html>