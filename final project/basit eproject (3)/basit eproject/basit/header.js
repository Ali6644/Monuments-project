window.addEventListener("scroll",function(){
		var scrl=document.getElementById("tbl")
		if(window.pageYOffset>0	)
			{
				scrl.classList.add("scroll")
				
			}
		else{
			
			scrl.classList.remove('scroll');
			
		}
	})