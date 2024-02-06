$(document).scroll(function(){j()}); 


function j(){
    var scrollAmount = $(window). scrollTop();
    if(scrollAmount>220 && scrollAmount<window.innerWidth/2 -40){
        $(".second-inside").css("width",scrollAmount*2) ; 
        $(".second-inside").css("border-radius",((scrollAmount-220)/15)+'%') ; 
    }
    
}


// 220->530 ;