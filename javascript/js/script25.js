var as=document.getElementsByTagName("a");
		var uls=document.getElementsByTagName("ul");

		for(var i=0;i<as.length;i++){
			as[i].index=i
			as[i].onmouseover=function(){
				for(var x=0;x<as.length;x++){
					as[x].className=""
					this.className="active"
				}
				for(var x=0;x<uls.length;x++){
					uls[x].style.display = "none";
					uls[this.index].style.display = "block"
				}
				
			}

			
			


		}
