var firstNum='', secondNum=''; var answer;
function numberDisplay (num) {
	firstNum+=num;		document.getElementById('resultbar').innerHTML=firstNum;
}
function operator (a) {
	firstNum+=a;	document.getElementById('resultbar').innerHTML=firstNum;
}
function show() {
	answer=	eval(firstNum);		document.getElementById('resultbar').innerHTML=answer;
}
function clear1() {
  firstNum=''; secondNum=''; answer=null; document.getElementById('resultbar').innerHTML='';
}