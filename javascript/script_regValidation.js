var formLabels = document.getElementsByTagName("label");

function validation(){
	var valid = true;
	
	var firstName = document.regForm.firstName.value;
	if(firstName == ""){
	formLabels[0].innerHTML = "First Name: * [Required]";
	formLabels[0].style.color = "red";
	valid = false;
	}
	else if(isNaN(firstName) == false){
		formLabels[0].innerHTML = "First Name: * [Text Only]";
		formLabels[0].style.color = "red";
	valid = false;
	}
	else {
		formLabels[0].innerHTML = "First Name: *";
		formLabels[0].style.color = "black";
	valid = valid = (valid) ? true : false;
	}
		
	
	var lastName = document.regForm.lastName.value;
	if(lastName == ""){
	formLabels[1].innerHTML = "Last Name: * [Required]";
	formLabels[1].style.color = "red";
	valid = false;
	}
	else if(isNaN(lastName) == false){
		formLabels[1].innerHTML = "Last Name: * [Text Only]";
		formLabels[1].style.color = "red";
	valid = false;
	}
	else {
		formLabels[1].innerHTML = "Last Name: *";
		formLabels[1].style.color = "black";
	valid = (valid) ? true : false;
	}

var email = document.regForm.email.value;
var at = email.indexOf("@");
var dot = email.indexOf(".");
	if(email == ""){
	formLabels[2].innerHTML = "E-mail: * [Required]";
	formLabels[2].style.color = "red";
	valid = false;
	}
	else if(at == -1 || dot == -1 || dot < at){
	formLabels[2].innerHTML = "E-mail: * [Incorrect E-mail]";
	formLabels[2].style.color = "red";
	valid = false;
	}
	else {
		formLabels[2].innerHTML = "E-mail: *";
		formLabels[2].style.color = "black";
	valid = (valid) ? true : false;
	}

var password = document.regForm.password.value;
	if(password == ""){
	formLabels[3].innerHTML = "Password: * [Required]";
	formLabels[3].style.color = "red";
	valid = false;
	}
	else if(password.length<8){
		formLabels[3].innerHTML = "Password: * [Must be > 8]";
		formLabels[3].style.color = "red";
	valid = false;
	}
	else {
		formLabels[3].innerHTML = "Password: *";
		formLabels[3].style.color = "black";
	valid = (valid) ? true : false;
	}
	
	var age = document.regForm.age.value;
	 if(age < 0 || age > 100 ){
		formLabels[4].innerHTML = "Age:  [Must be between 0 and 100]";
		formLabels[4].style.color = "red";
	valid = false;
	}
	else {
		formLabels[4].innerHTML = "Age: ";
		formLabels[4].style.color = "black";
	valid = (valid) ? true : false;
	}
	
		var mobile = document.regForm.mobile.value;
	 if(isNaN(mobile)){
		formLabels[5].innerHTML = "Mobile:  [Numbers Only]";
		formLabels[5].style.color = "red";
	valid = false;
	}
	else {
		formLabels[5].innerHTML = "Mobile: ";
		formLabels[5].style.color = "black";
	valid = (valid) ? true : false;
	}
	
	return valid;
}

function clear2(){
	var myLabels = new Array();
	myLabels[0] = "First Name: *";
	myLabels[1] = "Last Name: * ";
	myLabels[2] = "Email: * ";
	myLabels[3] = "Password: * ";
	myLabels[4] = "Age:";
	myLabels[5] = "Mobile: ";
	
	for(var i=0; i< myLabels.length ; i++){
		formLabels[i].innerHTML = myLabels[i];
		formLabels[i].style.color = "black";
}
}