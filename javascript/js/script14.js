window.onload = function ()
{
	var oBtn = document.getElementsByTagName("button")[0];
	var oInput = document.getElementsByTagName("input")[0]
	var oStrong = document.getElementsByTagName("strong")[0];
		
	oBtn.onclick = function ()
	{
		var sum = 0;
		var oInput = document.getElementsByTagName("input")[0].value.split(",");
		for (var i in oInput)
		{
			sum += parseInt(oInput[i])
		}
		oStrong.innerHTML = sum
	}
}