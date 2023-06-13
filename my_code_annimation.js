$(document).ready(function(){
 
   $(".fontsize").click(function(){
     $("h2").animate({

           "left": "100px"           
			}, 1000); 
   });


 $(".four").click(function(){
     $("h3").animate({

           "font-size": "toggle",
	   "width": "60%",
           "top": "20px"            
			}, 1000); 
   });



   

});
