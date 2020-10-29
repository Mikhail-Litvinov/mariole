<!DOCTYPE html>
<html>
	<head>
		<style>
			.login-form-wrapper {
				width: 20%;
				height: 10%;
				margin: 15% 40%;
				padding: 1em;
				border: 0.15em solid black;
			}

			.login-form {
				margin: 5%;
			}
		</style>
	</head>
	<body>
		<div class="login-form-wrapper">
			<form class="login-form" method="POST">
				<label>
					Логин:
					<input type="text" name="login"/>
				</label><br/><br/>
				<label>
					Пароль:
					<input type="password" name="password"/>
				</label><br/><br/>
				<input type="hidden" name="session" value="<?= time() + 60; ?>"/>
				<input type="submit" name="submit" value="Войти"/>
			</form>
		</div>
	</body>
</html>