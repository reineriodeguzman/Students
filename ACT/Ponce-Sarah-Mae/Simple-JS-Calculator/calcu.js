var screen = document.getElementById('screen');

function seven(){
	screen.innerHTML += "7";
}
function eight(){
	screen.innerHTML += "8";
}
function nine(){
	screen.innerHTML += "9";
}
function four(){
	screen.innerHTML += "4";
}
function five(){
	screen.innerHTML += "5";
}
function six(){
	screen.innerHTML += "6";
}
function one(){
	screen.innerHTML += "1"; 
}
function two(){
	screen.innerHTML += "2";
}
function three(){
	screen.innerHTML += "3";
}


function del(){
	screen.innerHTML = "del";
}
function zero(){
	screen.innerHTML += "0";
}
function decimal(){
	if(screen.innerHTML===""){
		screen.innerHTML += "0.";
	}
	else {
		screen.innerHTML += ".";
	}
}
function equals(){
	if(screen.innerHTML===""){
		screen.innerHTML += "";
	}
	else {
		screen.innerHTML += "=" +eval(screen.innerHTML);
	}
}


function addition(){
	screen.innerHTML += "+";
}
function subtraction(){
	screen.innerHTML += "-";
}
function multiplication(){
	screen.innerHTML += "*";
}
function division(){
	screen.innerHTML += "/";
}

function clear() {
	screen.innerHTML += "C";
}