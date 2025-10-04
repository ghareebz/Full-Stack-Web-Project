<?php
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$password = $_POST["password"];
$age = $_POST["age"];
$mobile = $_POST["mobile"];

include "config.php";

$insertUser = "INSERT INTO users(firstName,lastName,email,password,age,mobile)
values('$firstName','$lastName','$email','$password',$age,$mobile)";
$result = mysqli_query($con,$insertUser);
if($result){
	echo "<h1>User Created Successfully</h1>";
	echo "<a href='login.php'>Click here to login</a>";
}
else {
	echo "Error:".mysql_error($con);
}
?>