var num1 = '', num2 = '', op = '0';
var result;

function output(boom){
	if( op == '0' ){
		num1 += boom;
		document.getElementById('result').innerHTML = num1;
	}else if( op != '0'){
		num2 += boom;
		document.getElementById('result').innerHTML = num2;
	}
};
function operator(panes){
	op = panes;

	if ( op == 'a'){
		document.getElementById('result').innerHTML = '+';
	}else if ( op == 'b'){
		document.getElementById('result').innerHTML = '-';
	}else if ( op == 'c'){
		document.getElementById('result').innerHTML = 'x';
	}else if ( op == 'd'){
		document.getElementById('result').innerHTML = '/';
	}
}
function result(){
	if ( op == 'a'){
		result = parseFloat(num1) + parseFloat(num2);
		document.getElementById('result').innerHTML = result;
	}else if ( op == 'b'){
		result = parseFloat(num1) - parseFloat(num2);
		document.getElementById('result').innerHTML = result;
	}else if ( op == 'c'){
		result = parseFloat(num1) * parseFloat(num2);
		document.getElementById('result').innerHTML = result;
	}else if ( op == 'd'){
		result = parseFloat(num1) / parseFloat(num2);
		document.getElementById('result').innerHTML = result;
	}
}

function c(val){
	document.getElementById('result').innerHTML=val;
}