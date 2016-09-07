new function (){
			   document.documentElement.style.fontSize = innerWidth/10 + "px";
			   window.addEventListener("resize",function(){
			   		document.documentElement.style.fontSize = innerWidth/10 + "px";
			   },false);
			};