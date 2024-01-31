
let noOfDrumBtn = document.querySelectorAll(".drum") ; 

function playSound(buttonPressed){
    switch(buttonPressed){
        case "w" : 
        buttonAnimation("w") ; 
            var tom1 = new Audio("sounds/tom-1.mp3") ; 
            tom1.play() ; 
            break; 
        case "a" : 
            buttonAnimation("a") ; 
            var tom2 = new Audio("sounds/tom-2.mp3") ; 
            tom2.play() ; 
            break; 
        case "s" : 
            buttonAnimation("s") ; 
            var tom3 = new Audio("sounds/tom-3.mp3") ; 
            tom3.play() ; 
            break; 
        case "d" : 
            buttonAnimation("d") ; 
            var tom4 = new Audio("sounds/tom-4.mp3") ; 
            tom4.play() ; 
            break; 
        case "j" : 
            buttonAnimation("j") ; 
            var snare = new Audio("sounds/snare.mp3") ; 
            snare.play() ; 
            break; 
        case "k" : 
            buttonAnimation("k") ; 
            var crash = new Audio("sounds/crash.mp3") ; 
            crash.play() ; 
            break; 
        case "l" : 
            buttonAnimation("l") ; 
            var kickBass = new Audio("sounds/kick-bass.mp3") ; 
            kickBass.play() ; 
            break;
    }
}
// Detecting Mouse click on button :
for(let i=0;i<noOfDrumBtn.length ; i++){
    noOfDrumBtn[i].addEventListener("click",function (){
        playSound(this.innerHTML) ; 
    }) ;
}
// Detecting keyBoard button press : 
document.addEventListener("keypress",function(event){
    playSound(event.key) ; 
    console.log(event) ; 
}
) ; 

// var last = -1 ; 

function buttonAnimation(currKey){ 
    var activeButton = document.querySelector("."+currKey) ; 
    activeButton.classList.toggle("pressed") ; 
    // if(last!=-1){
    //     last.classList.toggle("pressed") ; 
    // }
    // last = activeButton ;
    setTimeout(function(){activeButton.classList.toggle("pressed") ; },300) ; 
}