(function() {
window.onload = function () {
	var answer = document.getElementById('keyAns');
	var clear = document.getElementById("clear");
	answer.onclick = function(){
 			var equation = eval(result.innerHTML)
 			result.innerHTML = equation;
 		};

 	clear.onclick = function(){
			result.innerHTML = "";
		};	

}

}());
 

function one() {
	document.getElementById('result').innerHTML += 1;
}
function two() {
	document.getElementById('result').innerHTML += 2;
}
function three() {
	document.getElementById('result').innerHTML += 3;
}
function four() {
	document.getElementById('result').innerHTML += 4;
}
function five() {
	document.getElementById('result').innerHTML += 5;
}
function six() {
	document.getElementById('result').innerHTML += 6;
}
function seven() {
	document.getElementById('result').innerHTML += 7;
}
function eight() {
	document.getElementById('result').innerHTML += 8;
}
function nine() {
	document.getElementById('result').innerHTML += 9;
}
function zero() {
	document.getElementById('result').innerHTML += 0;
}
function plus() {
	document.getElementById('result').innerHTML += '+';
}
function sub() {
	document.getElementById('result').innerHTML += '-';
}
function multi() {
	document.getElementById('result').innerHTML += '*';
}
function divi() {
	document.getElementById('result').innerHTML += '/';
}
function dot() {
	document.getElementById('result').innerHTML += '.';
}
function clear() {
	document.getElementById('result').innerHTML += "";
}



