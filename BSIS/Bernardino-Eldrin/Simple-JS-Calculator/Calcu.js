var firstnum= '', secondnum='', arithmetic='0';
var answer = '', temporary, secondnum2;
var repeat = '0';
var limit = '0', limit2 = '0', limit3 = '0';
var forlength1, size,another;
var fake = '', fake2 = '';
var use = 'off';
var temporary2;
var negaSwitch = 'off';
var memory = 0;
window.addEventListener("keydown", function(e){
	var q = e.keyCode;
	var w = String.fromCharCode(q);
	if(arithmetic == '0'){
		if(firstnum.length	< 16){
			if(w=='1'||w=='2'||w=='3'||w=='4'||w=='5'||w=='6'||w=='7'||w=='8'||w=='9'||w=='0'){
			output(w);
			}else if(q == '190'){
				output('.');
			}
		}	
	}else if(arithmetic != '0'){
		if(secondnum.length	< 16){
			if(w=='1'||w=='2'||w=='3'||w=='4'||w=='5'||w=='6'||w=='7'||w=='8'||w=='9'||w=='0'){
			output(w);	
			}else if(q == '190'){
				output('.');
			}
		}
	}
	if(q == '13'){
		show();
	}if(q == '8'){
		del();
	}if(q == '67' ||q == '46'){
		ac();
	}if(q == '78'){
		negative();
	}

	if(w=='1'){
		document.getElementById('button11').style.background = "#ffffff";
	}else if(w=='2'){
		document.getElementById('button12').style.background = "#ffffff";
	}else if(w=='3'){
		document.getElementById('button13').style.background = "#ffffff";
	}else if(w=='4'){
		document.getElementById('button6').style.background = "#ffffff";
	}else if(w=='5'){
		document.getElementById('button7').style.background = "#ffffff";
	}else if(w=='6'){
		document.getElementById('button8').style.background = "#ffffff";
	}else if(w=='7'){
		document.getElementById('button1').style.background = "#ffffff";
	}else if(w=='8'){
		document.getElementById('button2').style.background = "#ffffff";
	}else if(w=='9'){
		document.getElementById('button3').style.background = "#ffffff";
	}else if(w=='0'){
		document.getElementById('button16').style.background = "#ffffff";
	}else if(q == '190'){// output('.');
		document.getElementById('button17').style.background = "#ffffff";
	}else if(q == '8'){// del();
		document.getElementById('button4').style.background = "red";
	}else if(q == '67' ||q == '46'){// ac();
		document.getElementById('button5').style.background = "#ffffff";
	}else if(q == '78'){// negative();
		document.getElementById('button19').style.background = "#ffffff";
	}else if(q == '13'){// show();
		document.getElementById('button18').style.background = "#ffffff";
	}
	if(q == '187'){// operator('1');
		document.getElementById('button14').style.background = "#ffffff";
		operator('1');
	}else if(q == '189'){// operator('2');
		document.getElementById('button15').style.background = "#ffffff";
		operator('2');
	}else if(q == '88'){// operator('3');
		document.getElementById('button9').style.background = "#ffffff";
		operator('3');
	}else if(q == '191'){// operator('4');
		document.getElementById('button10').style.background = "#ffffff";
		operator('4');
	}

});
window.addEventListener("keyup", function(e){
	var r = e.keyCode;
	var t = String.fromCharCode(r);
			if(t=='1'){
				document.getElementById('button11').style.background = "#393939";
			}else if(t=='2'){
				document.getElementById('button12').style.background = "#393939";
			}else if(t=='3'){
				document.getElementById('button13').style.background = "#393939";
			}else if(t=='4'){
				document.getElementById('button6').style.background = "#393939";
			}else if(t=='5'){
				document.getElementById('button7').style.background = "#393939";
			}else if(t=='6'){
				document.getElementById('button8').style.background = "#393939";
			}else if(t=='7'){
				document.getElementById('button1').style.background = "#393939";
			}else if(t=='8'){
				document.getElementById('button2').style.background = "#393939";
			}else if(t=='9'){
				document.getElementById('button3').style.background = "#393939";
			}else if(t=='0'){
				document.getElementById('button16').style.background = "#393939";
			}else if(r == '190'){// output('.');
				document.getElementById('button17').style.background = "#393939";
			}else if(r == '8'){// del();
				document.getElementById('button4').style.background = "#d88842";
			}else if(r == '67' ||r == '46'){// ac();
				document.getElementById('button5').style.background = "#393939";
			}else if(r == '78'){// negative();
				document.getElementById('button19').style.background = "#393939";
			}else if(r == '13'){// show();
				document.getElementById('button18').style.background = "#393939";
			}else if(r == '187'){// operator('1');
				document.getElementById('button14').style.background = "#393939";
			}else if(r == '189'){// operator('2');
				document.getElementById('button15').style.background = "#393939";
			}else if(r == '88'){// operator('3');
				document.getElementById('button9').style.background = "#393939";
			}else if(r == '191'){// operator('4');
				document.getElementById('button10').style.background = "#393939";
			}
});

function output(value){
	if(value == '0'){
		if(arithmetic == '0'){
			if(limit2 == '0'){
				firstnum += value;
				document.getElementById('display').innerHTML= firstnum;	
				limit2 = '1';
				if(use == 'on'){
				limit2 = '0';
				}
			}
		}else if (arithmetic != '0'){
			if(limit3 == '0'){
				secondnum += value;
				document.getElementById('display').innerHTML= secondnum;
				limit3 = '1';
				if(use == 'on'){
					limit3 = '0';
				}
		}
	}

	}
	if(value != '.'){
		if(value != '0'){
			if(arithmetic == '0'){
				if(firstnum.length < 16)	{
					firstnum += value;
					document.getElementById('display').innerHTML= firstnum;
					limit2 = '0';
				}
			}else{
				if(secondnum.length < 16)	{
					document.getElementById('display').innerHTML = '';
					secondnum += value;
					document.getElementById('display').innerHTML= secondnum;
					limit3 = '0';
				}
			}
		}

				use = 'on';
	}else{
		if(arithmetic == '0'){
			if(limit == '0'){
				firstnum += '.';
				document.getElementById('display').innerHTML = firstnum;
				limit = '1';
			}else{}
		}else if(arithmetic != '0'){
			if(limit == '2'){
				secondnum += '.';
				document.getElementById('display').innerHTML = secondnum;
				limit = '3';
			}else{}
		}
		limit2 = '1';
	}

}
/*function eldrin(){
	var x;
	x = document.getElementById('button1');
	x.style.background = 'white';
}*/
function operator(value1){
	if(firstnum != ''){
		arithmetic = value1;
	}
	// if(arithmetic != '0'){
		if(arithmetic == '1'){
			document.getElementById('arithmetic').innerHTML= '+';
		}else if(arithmetic == '2'){
			document.getElementById('arithmetic').innerHTML= '-';
		}else if(arithmetic == '3'){
			document.getElementById('arithmetic').innerHTML= '&times';
		}else if(arithmetic == '4'){
			document.getElementById('arithmetic').innerHTML= '&divide';
		}else if(arithmetic == '0'){
			document.getElementById('arithmetic').innerHTML= '';
		}
	// }
	repeat = '0';
	limit = '2';
	limit2 = '1';
	use = 'off';
	negaSwitch = 'off';
	
	document.getElementById('firstnum').innerHTML = firstnum;
	document.getElementById('firstnum').innerHTML = firstnum.toFixed(1);
}
function show(){
	if(arithmetic != '0'){
	if(repeat == '0'){
		if(arithmetic == '1'){
			answer = parseFloat(firstnum) + parseFloat(secondnum);
			fordecimal(answer);
		}else if(arithmetic == '2'){
			answer = parseFloat(firstnum) - parseFloat(secondnum);
			fordecimal(answer);
		}else if(arithmetic == '3'){
			answer = parseFloat(firstnum) * parseFloat(secondnum);
			fordecimal(answer);
		}else if(arithmetic == '4'){
			answer = parseFloat(firstnum) / parseFloat(secondnum);
			fordecimal(answer);
		}
		document.getElementById('firstnum').innerHTML = secondnum;
		temporary = answer;
		secondnum2 = secondnum;
		secondnum = '';
	}
	if(repeat == '1'){
		if(arithmetic == '1'){
			answer = temporary + parseFloat(secondnum2);
			fordecimal(answer);
		}else if(arithmetic == '2'){
			answer = temporary - parseFloat(secondnum2);
			fordecimal(answer);
		}else if(arithmetic == '3'){
			answer = temporary * parseFloat(secondnum2);
			fordecimal(answer);
		}else if(arithmetic == '4'){
			answer = temporary / parseFloat(secondnum2);
			fordecimal(answer);
		}
		document.getElementById('firstnum').innerHTML = temporary;
		temporary = answer;
	}
	limit = '0';
	repeat = '1'
	firstnum = answer;
	document.getElementById('arithmetic').innerHTML= '';
}else if(arithmetic == '0'){
	fordecimal(firstnum);
}
}

function fordecimal(a){
	forlength1 = a.toString();
	size = forlength1.length;
	if(size < 14){
		another = answer.toFixed(1);
		document.getElementById('display').innerHTML= another;
	}else if(size >= 14){
		another = answer.toExponential(10);
		document.getElementById('display').innerHTML= another;
	}
	document.getElementById('firstnum').innerHTML = another;
}
function del(){
	if(arithmetic == 0){
		fake = firstnum;
		fake = fake.split('');
		fake[fake.length-1] = '';
		fake = fake.join('');
		firstnum = fake;
		document.getElementById('display').innerHTML= firstnum;
	}else if(arithmetic != 0){
		fake = secondnum;
		fake = fake.split('');
		fake[fake.length-1] = '';
		fake = fake.join('');
		secondnum = fake;
		document.getElementById('display').innerHTML= secondnum;
	}
}
function negative(){
	if(negaSwitch == 'off'){
		if(arithmetic == '0'){
			firstnum += '-';
			fake2 = firstnum;
			fake2 = fake2.split('');
			temporary2 = fake2[(fake2.length)-1];
			for(var m = fake2.length-1; m > 0; m--){
				var n = m;
				if(n > 0){
					fake2[n] = fake2[n-1];
				}
			}
			fake2[0]=temporary2;
			fake2 = fake2.join('');
			firstnum = fake2;
			document.getElementById('display').innerHTML= firstnum;

		}else if(arithmetic != '0'){
			secondnum += '-';
			fake2 = secondnum;
			fake2 = fake2.split('');
			temporary2 = fake2[(fake2.length)-1];
			for(var m = fake2.length-1; m > 0; m--){
				var n = m;
				if(n > 0){
					fake2[n] = fake2[n-1];
				}
			}
			fake2[0]=temporary2;
			fake2 = fake2.join('');
			secondnum = fake2;
			document.getElementById('display').innerHTML= secondnum;
		}
		negaSwitch = 'on';
	}else if(negaSwitch == 'on'){
		if(arithmetic == '0'){
			fake2 = firstnum;
			fake2 = fake2.split('');
			fake2[0]='';
			fake2 = fake2.join('');
			firstnum = fake2;
			document.getElementById('display').innerHTML= firstnum;
		}else if(arithmetic != '0'){
			fake2 = secondnum;
			fake2 = fake2.split('');
			fake2[0]='';
			fake2 = fake2.join('');
			secondnum = fake2;
			document.getElementById('display').innerHTML= secondnum;
		}
		negaSwitch = 'off';
	}
}
function memoryP(){
	if(answer != ''){
		memory = answer;
	}else if(firstnum != '' && secondnum == ''){
		firstnum = memory;
	}else if(secondnum != '' && firstnum != ''){
		secondnum = memory;
	}else{
		
	}
}
function memoryM(){
	memory = '';
}
function memoryR(){
	if(memory == ''){

	}else if(firstnum != '' && secondnum == ''){
		secondnum = memory;
		document.getElementById('display').innerHTML = secondnum;
	}
}

function sin(){
	if(arithmetic == '0'){
		answer = Math.sin(parseFloat(firstnum));
		firstnum = answer;
	}else if(answer != ''){
		answer = Math.sin(answer);
	}
	show();
}
function cos(){
	if(arithmetic == '0'){
		answer = Math.cos(parseFloat(firstnum));
		firstnum = answer;
	}else if(answer != ''){
		answer = Math.cos(answer);
	}
	show();
}
function tan(){
	if(arithmetic == '0'){
		answer = Math.tan(parseFloat(firstnum));
		firstnum = answer;
	}else if(answer != ''){
		answer = Math.tan(answer);
	}
	show();
}
function square(){
	if(answer != ''){
		answer = Math.sqrt(answer);
		document.getElementById('display').innerHTML = answer;
	}else if(firstnum != ''){
		firstnum = Math.sqrt(firstnum);
		document.getElementById('display').innerHTML = firstnum;
	}else{}
}
function squared(){
	if(answer != ''){
		answer = answer*answer;
		show();
	}else if(firstnum != '' && secondnum == ''){
		answer = firstnum * firstnum;
		show();
	}else{}
}
function pi(){
	if(firstnum == '' && secondnum == ''){
		firstnum = Math.PI;
		document.getElementById('display').innerHTML = Math.PI;
	}else if(secondnum == '' && firstnum != ''){
		secondnum = Math.PI;
		document.getElementById('display').innerHTML = secondnum;
	}else{
		
	}
}

function ac(){
	document.getElementById('display').innerHTML = '0';
	document.getElementById('firstnum').innerHTML = '';
	document.getElementById('arithmetic').innerHTML = '';
	firstnum= '', secondnum='', arithmetic='0';
	answer = 0, temporary = 0, secondnum2 = 0;
	repeat = '0';
	limit = '0', limit2 = '0';
	forlength1 = 0, size = 0,another = 0;
	fake = '';
	fake2 = '';
	use = 'off';
	temporary2 = '';
	negaSwitch = 'off';

}

