alert("WELCOME TO MY CALCULATOR!");
function plus(){
	document.calculator.display.value += "+";
}
function minus(){
	document.calculator.display.value += "-";
}
function divide(){
	document.calculator.display.value += "/";
}
function multiply(){
	document.calculator.display.value += "*";
}
function dot(){
	document.calculator.display.value += ".";
}
function c(){
	document.calculator.display.value = "";
}
function e(){
	var equal = eval(calculator.display.value)
	document.calculator.display.value = equal;
}
