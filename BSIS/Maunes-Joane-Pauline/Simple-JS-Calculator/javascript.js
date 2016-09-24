
var keys = document.querySelectorAll('#calculator button');
var operators = ['+', '-', 'x', '/'];

	for(var i = 0; i < keys.length; i++) {

		keys[i].onclick = function(compute) {
		var input = document.querySelector('.result');
		var inputVal = input.innerHTML;
		var buttonValue = this.innerHTML;
		
		if(buttonValue == 'C') {
			input.innerHTML = '';
		}
		

		else if(operators.indexOf(buttonValue) > -1) {
			
			var lastChar = inputVal[inputVal.length - 1];
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += buttonValue;
			
			else if(inputVal == '' && buttonValue == '-') 
				input.innerHTML += buttonValue;
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, buttonValue);
			}
			
		}



		else if(buttonValue == '=') {

			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			equation = equation.replace(/x/, '*');
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
		}
		
		
		else {
			input.innerHTML += buttonValue;
		}
		 
		compute.preventDefault();

	} 
}