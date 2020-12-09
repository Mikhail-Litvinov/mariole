<?php
	$response = [
		'success' => false,
		'warning' => false,
		'error' => false
	];
	$data = $_POST;
	
	$response['warning'] = !validate_data($data);
	
	if(register_order($data, $response['warning'])) $response['success'] = true;
	else $response['error'] = true;
	
	exit(json_encode($response));
	
	function validate_data($data) {
		unset($data['comment']);
		
		$validators = [
			'currency' => fn($currency) => in_array($currency, ['USD', 'EUR', 'RUB', 'CZK']),
			'sum' => fn($sum) => intval($sum, 10) > 0,
			'cart' => fn($cart) => json_decode($cart, true) && count(json_decode($cart, true)) > 0,
			'full_name' => fn($full_name) => true,
			'email' => fn($email) => preg_match('/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i', $email) ? true : false,
			'phone_number' => fn($phone_number) => preg_match('/^\+?[ 0-9_-]+$/', $phone_number) ? true : false,
			'address' => fn($address) => true,
			'postal_code' => fn($postal_code) => preg_match('/^[0-9 ]+$/', $postal_code) ? true : false,
			'delivery_type' => fn($delivery_type) => in_array($delivery_type, ['pickup', 'courier', 'ems']),
			'payment_type' => fn($payment_type) => in_array($payment_type, ['card', 'cash']),
		];
		
		foreach($data as $field => $value) if(!(strlen($value) > 0 && $validators[$field]($value))) return false;
		return true;
	}
	
	function register_order($data, $warning) {
		$db = new SQLite3($_SERVER['DOCUMENT_ROOT'] . '/private/mariole.sqlite3');
		
		$fields = [
			'currency', 'sum', 'cart', 'full_name', 'email', 'phone_number',
			'address', 'postal_code', 'delivery_type', 'payment_type', 'comment'
		];
		$sql_fields = [];
		$sql_values = [];
		foreach($fields as $field) {
			$sql_fields[] = $field;
			$sql_values[] = "'" . $db->escapeString($data[$field]) . "'";
		}
		
		$sql_fields = implode(', ', $sql_fields);
		$sql_values = implode(', ', $sql_values);
		$warning = $warning ? 1 : 0;
		$sql = "INSERT INTO orders ($sql_fields, warning) VALUES ($sql_values, '$warning');";
		echo $sql;
		$db->query($sql);
		
		$db->close();
		
		return true;
	}
?>