$(document).ready(function() {
  
// click redbox fade to 30% opacity
   $(".redbox").click(function() { 
       $(this).fadeTo(500, 0.3);
   })

// click id:red2 add alert
    $("#red2").click(function() {
        alert("Red 2 was clicked!");
    })

// click id:yellow2 replaceWith blue box white text
    $("#yellow1").click(function() {
        $(this).replaceWith("<div class='bluebox'>Turned blue!</div>");
    })
  
// create variable and fade on mouseenter/leave
    var orangeBox = $(".orangebox");
    orangeBox.mouseenter(function() {
        $(this).stop().fadeTo(200, 0.3);
    });
    
    orangeBox.mouseleave(function() {
        $(this).stop().fadeTo(200, 1);
    })

// change from blue to yellow on mouse enter/leave
    var yellow2 = $("#yellow2");
    yellow2.mouseenter(function() {
        $(this).stop().css("background-color", "blue");
    })
    
    yellow2.mouseleave(function() {
        $(this).stop().css("background-color", "#c9c901");
    })
    
    
    
    
    
    
    
    
    
    
   
    
    
    
    
    
    
    
});