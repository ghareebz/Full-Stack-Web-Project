function openMenu(){
	document.getElementById("sideMenu").style.width = "200px";
}
function closeMenu(){
	document.getElementById("sideMenu").style.width = "0px";
}

var counter = 1;

function next(){
	if(counter == 5){
		counter = 1;
	}
	else{
	counter++;
	}
	document.getElementById("slideshow").src= "images/"+counter+".jpg";
}

function prev(){
	if(counter == 1){
		counter = 5;
	}
	else{
	counter--;
	}
	document.getElementById("slideshow").src= "images/"+counter+".jpg";
}

setInterval(next,5000);