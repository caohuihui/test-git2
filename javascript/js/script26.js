var h2=document.getElementsByTagName("h2")[0];
	var ul=document.getElementsByTagName('ul')[0];
	h2.onclick=function(){
		ul.style.display=ul.style.display=="none"?"block":"none";
		h2.className=ul.style.display=="none"?"open":""
	}