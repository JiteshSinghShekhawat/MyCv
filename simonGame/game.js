var buttonColours = ["red","blue","green","yellow"] ; 
var gamePattern = []; 
var userClickedPattern = [] ; 
var level = 0 ; 
var flag = true ; 

 
$(document).keypress(function(){
    if(flag)gameStart() ; 
    flag = false ; 
}) ; 

var gameStart = function(){
    level = 0 ; 
    userClickedPattern = [] ; 
    gamePattern = [] ; 
    nextSequence() ; 
}

var nextSequence = function(){
    level++ ; 
    $("#level-title").text("Level "+level) ; 
    var randomNumber = Math.random()*4 ;
    randomNumber = Math.floor(randomNumber) ; 
    var randomchosenColour = buttonColours[randomNumber] ; 
    flashSound(randomchosenColour) ; 
    gamePattern.push(randomchosenColour); 
}
var flashSound = function(name){
    $("#"+name).delay().fadeOut(60).fadeIn() ; 
    playSound(name) ; 
    animatePress(name) ; 
}
var playSound = function(name){
    var ad = new Audio("sounds/"+name+".mp3") ; 
    ad.play() ; 
}
var animatePress = function(currCol){
    $("#"+currCol).addClass("pressed"); 
    setTimeout(function () {
        $("#"+currCol).removeClass("pressed");
      }, 300);
}
$(".btn").click(function(){
    var userChosenColour = this.id ; 
    flashSound(userChosenColour) ; 
    userClickedPattern.push(userChosenColour) ; 
    comparator(); 
}) ; 
var gameOver = function(){
    var overAudio = new Audio('sounds/wrong.mp3') ; 
    overAudio.play() ; 
    $("body").addClass("game-over") ; 
    setTimeout(function(){
        $("body").removeClass("game-over")
    },500) ;
    setTimeout(function(){
        $("#level-title").text("Press A Key to Start") ; 
    },200) ;
    flag = true ;
}
function comparator(){
    var g = gamePattern.length ; 
    var u = userClickedPattern.length ; 
    console.log(gamePattern) ; 
    console.log(userClickedPattern) ; 
    if(g==u){
        if(gamePattern[u-1]!==userClickedPattern[u-1]){
            gameOver() ;
            return ; 
        }
        userClickedPattern = [] ; 
        setTimeout(nextSequence,1000) ; 
    } 
    else if(u<g){
        if(gamePattern[u-1]!==userClickedPattern[u-1]){
            gameOver() ;
            return ; 
        }
    }
    else {
        gameOver() ;
        return ; 
    }
    return ; 
}