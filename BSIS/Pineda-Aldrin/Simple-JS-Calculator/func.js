	function back(bura)
				{
					document.getElementById("score").innerHTML=bura;
				}
				function press(val)
				{
					document.getElementById("score").innerHTML+=val;
				}
				function equal() 
				{ 
					try 
					{ 
					  back(eval(document.getElementById("score").innerHTML)) 
					} 
					catch(ans) 
					{
					  back('Error') 
					} 
				}