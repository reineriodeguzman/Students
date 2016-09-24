(function() {

	window.onload = function() {



	var res = document.getElementById("result"); 
	var one = document.getElementById("k1");
	var k2 = document.getElementById("k2");
	var k3 = document.getElementById("k3");
	var k4 = document.getElementById("k4");
	var k5 = document.getElementById("k5");
	var k6 = document.getElementById("k6");
	var k7 = document.getElementById("k7");
	var k8 = document.getElementById("k8");
	var k9 = document.getElementById("k9");
	var k0 = document.getElementById("k0");
	var ka = document.getElementById("ka");
	var km = document.getElementById("km");
	var ks = document.getElementById("ks");
	var ke = document.getElementById("ke");
	var kd = document.getElementById("kd");
	var kc = document.getElementById("kc");
	var kv = document.getElementById("kv");
	var kmod = document.getElementById("kmod");
	var kexp = document.getElementById("kexp");
    var kpleft = document.getElementById("kpleft");
    var kpright = document.getElementById("kpright");

	
	one.onclick = function(){
		subresult.innerHTML += "1";
	};

	k2.onclick = function(){
		subresult.innerHTML += "2";
	};

	k3.onclick = function(){
		subresult.innerHTML += "3";
	};

	k4.onclick = function(){
		subresult.innerHTML += "4";
	};

	k5.onclick = function(){
		subresult.innerHTML += "5";
	};

	k6.onclick = function(){
		subresult.innerHTML += "6";
	};

	k7.onclick = function(){
		subresult.innerHTML += "7";
	};

	k8.onclick = function(){
		subresult.innerHTML += "8";
	};

	k9.onclick = function(){
		subresult.innerHTML += "9";
	};

	k0.onclick = function(){
		subresult.innerHTML += "0";
	};

	ka.onclick = function(){
		subresult.innerHTML += "+";
	};

	ks.onclick = function(){
		subresult.innerHTML += "-";
	};

	km.onclick = function(){
		subresult.innerHTML += "*";
	};

	kv.onclick = function(){
		subresult.innerHTML += "/";

	};

	kc.onclick = function(){
		result.innerHTML = "";
        subresult.innerHTML = "";

	};

	kd.onclick = function(){
		subresult.innerHTML += ".";

	};

	ke.onclick = function(){
		var eq = eval(subresult.innerHTML)

		result.innerHTML = eq;
	};

	kmod.onclick = function(){
		subresult.innerHTML += "%";
	};

        
    kpleft.onclick = function(){
        subresult.innerHTML += "(";
    };
        
    kpright.onclick = function(){
        subresult.innerHTML += ")";
    };

}
}());
