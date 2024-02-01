let a = ["purple","pink","blue","aqua","black","violet","grey"] ; 
let i = 0 ; 
let flag = false ; 

function colorchange(){
    $("h1").css("color",a[i]) ;
    i++ ; 
    i%=a.length; 
}
$(document).keydown(function (event){
    if(event.key=='Backspace'){
        if(!flag)return ; 
        let temp = $("h1").text() ; 
        $("h1").text(temp.slice(0,temp.length-1)) ;
        return ;  
    }
    if(event.key.length>1)return ; 
    if(!flag){
        flag = true ; 
        $("h1").text(event.key) ; 
    }
    else{
        $("h1").text($("h1").text()+event.key) ; 
    }
    colorchange(); 
}) ; 
$(".btn1").click(colorchange) ; 
$(".btn").click(function(){
    $("h1").toggleClass("enhance") ; 
})