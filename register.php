<html>
<head>
	<title>Registeration</title>
	<meta charset="UTF-8" />
	<link rel="stylesheet" type="text/css" href="style.css" >
	<link rel="stylesheet" href="styles/myStyle.css">
	<script src="javascript/script_regValidation.js"></script>
</head>

<body>
<img src="images/menu.png" width="30px" onclick="openMenu();">
<div id="header">
Nasa Official Website !

</div>
<div id="sideMenu">
<ul>
<li><a href="#" class="closeBtn" onclick="closeMenu()">&times;</a></li>
<li><a href="index.html">Home</a></li>
<li><a href="about.html">About Us</a></li>
<li><a href="join.html">Join Us</a></li>
<li><a href="important.html">Apollo 11</a></li>
<li><a href="earth.html">Our Planet</a></li>
<li><a href="register.php">Register</a></li>
<li><a href="login.php">Login</a></li>
</ul>
</div>
<div id="menu">
<ul>
<li><a href="index.html">Home</a></li>
<li><a href="about.html">About Us</a></li>
<li><a href="join.html">Join Us</a></li>
<li><a href="important.html">Apollo 11</a></li>
<li><a href="earth.html">Our Planet</a></li>
<li><a href="register.php">Register</a></li>
<li><a href="login.php">Login</a></li>
</ul>
</div>
<div id="myDiv">
  <h3 align="center">Registeration</h3>
  <form onsubmit="return validation()" method="post" name="regForm" action="register_handler.php">
		<label>First Name: *</label>
		<input type="text" name="firstName" placeholder="Your First Name" size="25" />
		<label>Last Name: *</label>
		<input type="text" name="lastName" placeholder="Your Last Name" size="25" />
		<label>Email: *</label>
		<input type="text" name="email" size="25" placeholder="Your Email" />
		<label>Password: *</label>
		<input type="password" name="password" placeholder="Your Password" size="25" />
		<label>Age:</label>
		<input type="text" name="age" size="25" placeholder="Your Age" />
		<label>Mobile:</label>
		<input type="text" name="mobile" size="25" placeholder="Your Mobile" />

		<div align="center">
		<input type="submit" value="Register" />
		<input type="reset" value="Clear" onclick="clear2();" />
		<div>
  </form>
</div>
</body>

</html>