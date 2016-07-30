$(document).ready(function(){
	
var next = $("#next"),
    prev = $("#prev"),
    currentIndex = 0,
    imgNumber = $(".slider").find("div").length,
    img = $(".slider").find("div"),
    width = $(".slider").width();
    
    //console.log(imgNumber);
    
  
    
//NEXT    
    next.on("click", function(event){
      img.eq(currentIndex).css("display", "none") 
      img.eq(currentIndex+1).css("display", "inline-block");
		currentIndex++;
        //console.log(currentIndex);
        if (currentIndex > (imgNumber-1)) {
            currentIndex = 0;
			//console.log("po przeładowaniu " + currentIndex);
        }
			img.eq(currentIndex).css("display", "inline-block");
		
  })
//PREV   
    prev.on("click", function(event){
      img.eq(currentIndex).css("display", "none") 
      currentIndex--;
		//console.log(currentIndex);
		if (currentIndex < 0) {
			currentIndex = imgNumber-1;
			//console.log(currentIndex);
		}
      img.eq(currentIndex).css("display", "inline-block");
  })

});