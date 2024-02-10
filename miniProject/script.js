$(document).scroll(function(){j()}); 


function j(){
    var scrollAmount = $(window). scrollTop();
    if(scrollAmount>220 && scrollAmount<window.innerWidth/2-40){
        $(".second-inside").css("width",scrollAmount*2) ; 
        $(".second-inside").css("border-radius",((scrollAmount-220)/15)+'%') ; 
        $(".catchy").css("font-size",((scrollAmount+250)/15)+'px') ;
    }
}

var ar = [true,true,true,true,true,true,true,true] ;
var count = 0; 
$('button').click(function(){
    let temp = this.id ; 
    if(ar[temp]===true){
        count++ ;
        ar[temp] = !ar[temp] ; 
        $(this).text('Remove From Cart') ; 
    }
    else{
        count-- ; 
        ar[temp] = !ar[temp] ; 
        $(this).text('Add to Cart') ; 
    }
    if(count==0)$('#cart-no').text('') ; 
    else $('#cart-no').text(count) ;
}) ; 