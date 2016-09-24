
var fnum,snum,operator,answer;
var click=0;
//numbers

function point(){
		document.getElementById('result').innerHTML+='.';
}
function n1(){
		document.getElementById('result').innerHTML+=1;
		}
function n2(){
		document.getElementById('result').innerHTML+=2;
}
function n3(){
		document.getElementById('result').innerHTML+=3;
}
function n4(){
		document.getElementById('result').innerHTML+=4;
}
function n5(){
		document.getElementById('result').innerHTML+=5;
}
function n6(){
		document.getElementById('result').innerHTML+=6;
}
function n7(){
		document.getElementById('result').innerHTML+=7;
}
function n8(){
		document.getElementById('result').innerHTML+=8;
}
function n9(){
		document.getElementById('result').innerHTML+=9;
}
function n0(){
		document.getElementById('result').innerHTML+=0;
}
function plus(){
		document.getElementById('result').innerHTML+='+';
}
function minus(){
		document.getElementById('result').innerHTML+='-';
}
function divid(){
		document.getElementById('result').innerHTML+='/';
}
function multiply(){
		document.getElementById('result').innerHTML+='*';
}
function c(){
		document.getElementById('result').innerHTML=(" ");
}
function del(){
		document.getElementById('result').innerHTML=result-1;
}
function equal(){
	var eq= eval(document.getElementById('result').innerHTML)
	result.innerHTML=eq;
}
