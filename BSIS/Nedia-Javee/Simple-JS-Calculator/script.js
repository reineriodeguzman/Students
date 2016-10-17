var output=document.getElementById('display');
var secondoutput=document.getElementById('second_display');
var operate=document.getElementById('third_display');
var count_operator=0;
var operator='';
var firstnum='';
var secondnum='';
var number_count=0;
var pow='';
var last='';
var save='';
var temp='0';
output.value='0';
function show(x){
	if(pow=='pow'){
		if(x!='+'&&x!='-'&&x!='*'&&x!='/'&&x!='C'&&x!='^'&&x!='.'&&number_count!=2&&output.value.length<21){
			secondnum+=x;
			output.value+=x;
		}
		if(x!='+'&&x!='-'&&x!='*'&&x!='/'&&x!='C'&&x!='^'&&x!='.'&&number_count==2&&secondoutput.value.length<21){
			secondnum+=x;
			secondoutput.value+=x;
		}
		else if(x=='.'){
			for(var i=output.value.length;i>0;i--){
				last=output.value.substring(i-1,i);
				if(last!='.'){
					output.value+=x;
				}
			}
		}
		else if(x=='C'){
			output.value='0';
			operator=0;
			count_operator=0;
			number_count=0;
			secondnum='';
			secondoutput.value='';
			operate.value='';
		}
		else if((x=='+'||x=='-'||x=='*'||x=='/')&&x!='^'){
			if(x=='/'&&number_count!=2){
				output.value=Math.pow(firstnum,secondnum);
				operator='div';
				count_operator=1;
				number_count=1;
				secondoutput.value='';
				firstnum='0';
				secondnum='0';
				operate.value=x;
				pow='';
			}
			else if(x!='/'&&number_count!=2){
				output.value=Math.pow(firstnum,secondnum);
				operator='';
				count_operator=1;
				number_count=1;
				secondoutput.value='';
				firstnum='0';
				secondnum='0';
				operate.value=x;
				pow='';
			}
			else if(x=='/'&&number_count==2){
				secondnum=Math.pow(firstnum,secondnum);
				secondoutput.value=secondnum;
				output.value=eval(output.value+operate.value+secondoutput.value);
				operator='div';
				count_operator=1;
				number_count=1;
				secondoutput.value='';
				firstnum='0';
				secondnum='0';
				operate.value=x;
				pow='';
			}
			else if(x!='/'&&number_count==2){
				secondnum=Math.pow(firstnum,secondnum);
				secondoutput.value=secondnum;
				output.value=eval(output.value+operate.value+secondoutput.value);
				operator='';
				count_operator=1;
				number_count=1;
				secondoutput.value='';
				firstnum='0';
				secondnum='0';
				operate.value=x;
				pow='';
			}
		}
	}
	else if(x=='C'){
		output.value='0';
		operator=0;
		count_operator=0;
		number_count=0;
		secondnum='';
		secondoutput.value='';
		operate.value='';
	}
	else if(x=='^'){
		if(number_count!=2&&count_operator==0){
			firstnum=output.value;
			number_count=1;
			pow='pow';
			output.value+=x;
		}
		if(number_count==2){
			firstnum=secondoutput.value;
			number_count=2;
			pow='pow';
			secondoutput.value+=x;
		}
	}
	
	else if(x=='.'){
		if(number_count==0){
			output.value+=x;
			number_count=1;
		}
		else if(number_count==1&&count_operator==1){
			secondnum=x;
			secondoutput.value='0'+x;
			number_count=2;
		}
	}
	
	else if(x!='+'&&x!='-'&&x!='*'&&x!='/'&&x!='C'&&x!='^'&&x!='.'){
		if(secondoutput.value=='0'){
			secondoutput.value=x;
			number_count=2;
		}
		else if(count_operator==1&&secondoutput.value.length<21){
			secondoutput.value+=x;
			number_count=2;
		}
		else if(x==0&&number_count==0){
			output.value='0';
		}
		else if(x!=0&&number_count==0){
			output.value='';
			output.value=x;
			number_count=1;
		}
		else if(number_count>0&&output.value.length<21){
			output.value+=x;
		}
	}
	else if(x=='+'||x=='-'||x=='*'||x=='/'){
		var last=output.value.substring(output.value.length-1,output.value.length);
		if(last=='.'){
			output.value=output.value.substring(0,output.value.length-1);
		}
		if(operator=='div'&&count_operator==1&&number_count==2){
			output.value='Error';
			count_operator=0;
			number_count=0;
			secondoutput.value='';
			secondnum='';
			operate.value='';
		}
		else if(operator=='div'&&count_operator==1&&number_count==2){
			output.value=eval(output.value+operate.value+secondoutput.value);
			number_count=1;
			secondoutput.value='';
			secondnum='';
			operate.value=x;
		}
		else if(operator!='div'&&count_operator==1&&number_count==2){
			output.value=eval(output.value+operate.value+secondoutput.value);
			number_count=1;
			secondoutput.value='';
			secondnum='';
			operate.value=x;
		}
		else if(x=='-'&&count_operator==0&&number_count==0){
			output.value=x;
			number_count=1;
		}
		else if(x=='-'&&count_operator==1&&number_count==1){
			secondoutput.value=x;
			number_count=2;
		}
		else if(x=='/'&&count_operator==1&&number_count==1){
			operator='div';
			operate.value=x;
			count_operator=1;
		}
		else if(x!='/'&&count_operator==1&&number_count==1){
			operator='';
			operate.value=x;
			count_operator=1;
		}
		else if(x=='/'&&count_operator==0){
			operator='div';
			operate.value=x;
			count_operator=1;
			number_count=1;
		}
		else if(x!='/'&&count_operator==0){
			operator='';
			operate.value=x;
			count_operator=1;
			number_count=1;
		}
	}
}

function answer(){
	if(pow=='pow'&&number_count!=2){
		output.value=Math.pow(firstnum,secondnum);
		operator='';
		pow='';
		count_operator=0;
		number_count=0;
		firstnum='';
		secondnum='';
		operate.value='';
	}
	else if(pow=='pow'&&number_count==2){
		secondnum=Math.pow(firstnum,secondnum);
		output.value=eval(output.value+operate.value+secondnum);
		secondoutput.value='';
		operator='';
		count_operator=0;
		number_count=0;
		pow='';
		firstnum='';
		secondnum='';
		operate.value='';
	}
	else if(operator=='div'&&(secondoutput.value=='0')||secondoutput.value==''){
		output.value='Error';
		operator='';
		count_operator=0;
		number_count=0;
		secondoutput.value='';
		secondnum='';
		operate.value='';
	}
	else if(operator=='div'&&secondnum!='0'){
		output.value=eval(output.value+operate.value+secondoutput.value);
		count_operator=0;
		number_count=0;
		secondoutput.value='';
		firstnum='';
		secondnum='';
		operate.value='';
	}
	else if(operator!='div'){
		output.value=eval(output.value+operate.value+secondoutput.value);
		count_operator=0;
		number_count=0;
		secondoutput.value='';
		firstnum='';
		secondnum='';
		operate.value='';
	}
}
function del(){
	var numbertwo=secondoutput.value;

	if(numbertwo.length>0){
	var lentwo=numbertwo.length-1;
	last=numbertwo.substring(secondoutput.value.length-1,secondoutput.value.length);
		if(last=='^'){
			pow='';
		}
	var newnumbertwo=numbertwo.substring(0,lentwo);
	secondoutput.value=newnumbertwo;
	secondnum=newnumbertwo;
		if(numbertwo.length-1==0){
			secondnum='';
			number_count=1;
		}
	}
	else if(numbertwo.length==0&&count_operator==1){
		operate.value='';
		count_operator=0;
		operator='';
	}
	else if(numbertwo.length==0&&count_operator==0){
		last=output.value.substring(output.value.length-1,output.value.length);
			if(last=='^'){
				pow='';
			}
		var number=output.value;
		var len=number.length;
		var newnumber=number.substring(len-1,len);
		last=newnumber;
		len=number.length-1;
		newnumber=number.substring(0,len);
		output.value=newnumber;
	}
	number=output.value;
	len=number.length;
	if(number==''||len==0){
		output.value='0';
		number_count=0;
	}
	if(number_count!=2){
		for(var i=output.value.length;i>0;i--){
			last=output.value.substring(i-1,i);
			if(last=='^'){
				firstnum=output.value.substring(0,i-1);
				secondnum=output.value.substring(i,output.value.length);
			}
		}
	}
	if(number_count==2){
		for(var i=secondoutput.value.length;i>0;i--){
			last=secondoutput.value.substring(i-1,i);
			if(last=='^'){
				firstnum=secondoutput.value.substring(0,i-1);
				secondnum=secondoutput.value.substring(i,secondoutput.value.length);
			}
		}
	}
	
}

function m(b){
	if(b=='MS'&&number_count!=2){
		save=output.value;
		temp=save;
	}
	else if(b=='MS'&&number_count==2){
		save=secondoutput.value;
		temp=save;
	}
	else if(b=='MC'){
		save='';
		temp='';
	}
	else if(b=='MR'&&save==''&&count_operator==0){
		output.value='0';
	}
	else if(b=='MR'&&count_operator==1&&save==''){
		secondoutput.value='0';
	}
	else if(b=='MR'&&number_count!=2&&count_operator==0){
		output.value=save;
	}
	else if(b=='MR'&&count_operator==1&&save==''){
		secondoutput.value='0';
	}
	else if(b=='MR'&&count_operator==1&&save!=''){
		secondoutput.value=save;
	}
	else if(b=='Mplus'){
		save=eval(save+'+'+temp);
	}
	else if(b=='Mminus'){
		save=eval(save+'-'+temp);
	}
}