var output = document.getElementById('result');

function AddToScreen(key){
	output.value += key;

	if (key == 'C'){
		output.value = '';
	}
}


function Answer(){

	key = output.value;
	key = eval(key);
	output.value = key;
}