

function c(val)
{
	document.getElementById ("d").value=val;
}
function l(val)
{
document.getElementById("d").value+=val;
}
function e()
{
try
{
c(eval(document.getElementById("d").value))
}
catch(e)
{
c('Error')
}
}