let player1 = Math.floor(Math.random()*6); 
let player2 = Math.floor(Math.random()*6) ; 
player1++ ; 
player2++ ; 
let attr = "images/dice"; 
document.querySelector(".img1").setAttribute("src",attr+player1+".png") ;
document.querySelector(".img2").setAttribute("src",attr+player2+".png") ; 

if(player1==player2){
    document.querySelector("h1").innerText = " Draw !! " ; 
} 
else if(player1<player2){
    document.querySelector("h1").innerHTML = "🚩 Player2 Won!!" ; 
}
else{
    document.querySelector("h1").innerHTML = "Player1 Wins!! 🚩" ; 
}