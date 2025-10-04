var formLabels = document.getElementsByTagName("label");

function validation(){
	var valid = true;
	
	

var email = document.regForm.email.value;
var at = email.indexOf("@");
var dot = email.indexOf(".");
	if(email == ""){
	formLabels[0].innerHTML = "E-mail: * [Required]";
	formLabels[0].style.color = "red";
	valid = false;
	}
	else if(at == -1 || dot == -1 || dot < at){
	formLabels[0].innerHTML = "E-mail: * [Incorrect E-mail]";
	formLabels[0].style.color = "red";
	valid = false;
	}
	else {
		formLabels[0].innerHTML = "E-mail: *";
		formLabels[0].style.color = "black";
	valid = (valid) ? true : false;
	}

var password = document.regForm.password.value;
	if(password == ""){
	formLabels[1].innerHTML = "Password: * [Required]";
	formLabels[1].style.color = "red";
	valid = false;
	}
	else if(password.length<8){
		formLabels[1].innerHTML = "Password: * [Must be > 8]";
		formLabels[1].style.color = "red";
	valid = false;
	}
	else {
		formLabels[1].innerHTML = "Password: *";
		formLabels[1].style.color = "black";
	valid = (valid) ? true : false;
	}
	
	
	
	return valid;
}

function clear2(){
	var myLabels = new Array();
	myLabels[0] = "Email: * ";
	myLabels[1] = "Password: * ";	
	for(var i=0; i< myLabels.length ; i++){
		formLabels[i].innerHTML = myLabels[i];
		formLabels[i].style.color = "black";
}
}