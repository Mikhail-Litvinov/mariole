<?php
	$login = null;
	$password = null;
	$is_cookied = false;
	
	if(isset($_COOKIE['admin-login']) && isset($_COOKIE['admin-password'])) {
		$is_cookied = true;
		$login = $_COOKIE['admin-login'];
		$password = $_COOKIE['admin-password'];
	} else if(isset($_POST['login']) && isset($_POST['password']) && isset($_POST['session']) && time() <= $_POST['session']) {
		$login = $_POST['login'];
		$password = $_POST['password'];
	}
	
	if(check_admin($login, $password)) {
		if(!$is_cookied) {
			$cookie_data = '; Max-Age=3600; Path=/admin/';
			header('Set-Cookie: admin-login=' . $login . $cookie_data);
			header('Set-Cookie: admin-password=' . $password . $cookie_data, false);
		}
		header('Expires: ' . gmdate('D, d M Y H:i:s', time() - 1) . ' GMT', false); // No caching
		include 'admin/private/pages/' . ($request[1] ?? 'index') . '.html';
	} else include 'admin/private/login.php';
	
	function check_admin($login, $password) {
		$admins_config = json_decode(file_get_contents('admin/private/config/admins.json'), true);
		return $admins_config[$login] === hash_password($password);
	}
	
	function hash_password($raw) {
		$algorithm = 'sha512';
		return implode('y#tIpoVIy~3yq}eZ', [
			hash($algorithm, 'cbL#S|Pe9~XM7~dF' . $raw . '@Ohafz}#Md~JJnxp'),
			hash($algorithm, 'k#1R2ra1eN$GMgG|' . $raw . '2pPM1%rtMSjKCdEV'),
			hash($algorithm, 'RLh1#CfruhFM{N*c' . $raw . '%8~hk*PjWlq2gIW5'),
			hash($algorithm, 'uN#NEhds|m$|}}SI' . $raw . 'OH#8Z34|x30|mAiX')
		]);
	}
?>