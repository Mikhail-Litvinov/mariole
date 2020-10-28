<?php
	switch(hash_password($_POST['password']) === hash_password('test')) {
		case false: include 'admin/login.php'; break;
		default: include 'admin/panel.php';
	}
	
	function hash_password($raw) {
		return hash('sha512', 'vA?j%DpmJpTx' . $raw . 'dY{#rkOs?CGm');
	}
?>