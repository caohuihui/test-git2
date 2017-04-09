var change=document.getElementById("change");
		var input=document.getElementsByTagName("input");
		var label=document.getElementsByTagName("label")[0];

		function auto(){
			for(var i=1,n=0;i<input.length;i++){
				input[i].checked&&n++
			}
			input[0].checked=n==input.length-1;
			label.innerHTML=input[0].checked ? "全选":"全不选";

		}
		//全选
		input[0].onclick=function(){
			for(var i=1;i<input.length;i++){
				input[i].checked=this.checked
			}
			auto()
		}
		//反选
		change.onclick=function(){
			for(var i=1;i<input.length;i++){
				input[i].checked=!input[i].checked
			}
			auto()

		}
		for(var i=1;i<input.length;i++){
			input[i].onclick=function(){
				auto()
			}
		}