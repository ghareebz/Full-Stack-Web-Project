<?php
$email = $_POST["email"];
$password = $_POST["password"];

include "config.php";

$login = "SELECT email,password FROM users WHERE email = '$email' and password='$password'";

$result = mysqli_query($con,$login);
$count = mysqli_num_rows($result);

if($count == 1){
	header('Location: index.html');
}
else{
	echo "Invalid Email and Password";
}
?>