function c(val){
	document.getElementById("show").value=val;
}

function v(val){
	document.getElementById("show").value+=val;
}

function e(){
	try{
		c(eval(document.getElementById("show").value))
	}

	catch(e){
		c('Error')
	}
}