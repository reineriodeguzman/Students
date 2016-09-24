var firstnum;
var secondnum;
var answer;
var operation;
var click=1;
function plus(){
	operation = '+';
}

function menus(){
	operation = '-';
};
function multiply(){
	operation = '*';
};
function divid(){
	operation = '/';
};
function n1(){
	if(click==1){
	firstnum = 1;
	click++;	
}
	if (click==2) {

		secondnum = 1;
	}
};
function n2(){
	if(click==1){
	firstnum = 2;
	click++;	
}
	if (click==2) {

		secondnum = 2;
	}
};
function n3(){
	if(click==1){
	firstnum = 3;
	click++;	
}
	if (click==2) {

		secondnum = 3;
	}
};
function n4(){
	if(click==1){
	firstnum = 4;
	click++;	
}
	if (click==2) {

		secondnum = 4;
	}
};
function n5(){
	if(click==1){
	firstnum = 5;
	click++;	
}
	if (click==2) {

		secondnum = 5;
	}
};
function n6(){
	if(click==1){
	firstnum = 6;
	click++;	
}
	if (click==2) {

		secondnum = 6;
	}
};
function n7(){
	if(click==1){
	firstnum = 7;
	click++;	
}
	if (click==2) {

		secondnum = 7;
	}
};
function n8(){
	if(click==1){
	firstnum = 8;
	click++;	
}
	if (click==2) {

		secondnum = 8;
	}
};
function n9(){
	if(click==1){
	firstnum = 9;
	click++;	
}
	if (click==2) {

		secondnum = 9;
	}
};
function n0(){
	if(click==1){
	firstnum = 0;
	click++;	
}
	if (click==2) {

		secondnum = 0;
	}
}

function equals(){
	if(operation='+'){
		answer = firstnum + secondnum;
		ducument.getElementById('display').innerHTML = answer;
	}
	if(operation='-'){
		answer = firstnum - secondnum;
		ducument.getElementById('display').innerHTML = answer;
	}
	if(operation='*'){
		answer = firstnum * secondnum;
		ducument.getElementById('display').innerHTML = answer;
	}
	if(operation='/'){
		answer = firstnum / secondnum;
		ducument.getElementById('display').innerHTML = answer;
	}

}; 	