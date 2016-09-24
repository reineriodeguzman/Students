function c(val)
{
document.getElementById("ans").value=val;
}
function v(val)
{
document.getElementById("ans").value+=val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("ans").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}  
