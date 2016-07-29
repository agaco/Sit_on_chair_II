$(document).ready(function(){
	
var next = $("#next"),
    prev = $("#prev"),
    currentIndex = 0,
    imgNumber = $(".slider").find("div").length,
    img = $(".slider").find("div"),
    width = $(".slider").width();
    
    console.log(width);
    
  
    
//NEXT    
    next.on("click", function(event){
      img.eq(currentIndex).css("display", "none") 
      img.eq(currentIndex+1).css("display", "inline-block").css("width", width);
      currentIndex++;
        console.log(currentIndex);
        if (img.eq(currentIndex) > imgNumber) {
            currentIndex = 0;
        }
  })
//PREV   
    prev.on("click", function(event){
      img.eq(currentIndex).css("display", "none") 
      img.eq(currentIndex+1).css("display", "inline-block");
      currentIndex--;
  })

});