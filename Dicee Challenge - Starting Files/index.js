

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 & 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // string between images dice 1 and dice 6

var randomImageSource1 = "images/" + randomDiceImage1 //creates the correct link for the images

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

//image 2 random image + make above shorter

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//change the H1 to say winner/tie

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins!"; 
    // do not use ".container" (class name). it changes it from h1 to p
} 
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩 ";
} 
else{
    document.querySelector("h1").innerHTML = "🚩 It's a Draw! 🚩 ";
}




// document.getElementsByClassName("img1").setAttribute("src", "randomImageSource");




// document.getElementsByClassName("img1").setAttribute('src', randomDiceImage);



// var randomNumber1 = Math.floor(Math.random()* (6 - 1) + 1);
// console.log(randomNumber1);

// function randomNumber1(){
//     return Math.floor(Math.random()* (6 - 1) + 1);
// }
// randomNumber1();


// var img1 = document.querySelector("img1");
// img1.setAttribute(



// document.getElementsByClassName("img1").attribute = "'dice'+randomNumber1()";


// function() {
//     var imgs = ["images\dice1.png", "images\dice2.png", "images\dice3.png", "images\dice4.png", "images\dice5.png", "images\dice6.png"];
//     function swap() {
//         document.getElementsByClassName("img1").setAttribute('src', imgs[Math.floor(Math.random()*imgs.length)]+".png");
//     }
// }




// var dice1 = "images\dice1.png"
// var dice2 = "images\dice2.png"
// var dice3 = "images\dice3.png"
// var dice4 = "images\dice4.png"
// var dice5 = "images\dice5.png"
// var dice6 = "images\dice6.png"


// var dice = [dice1. dice2,dice3, dice4, dice5, dice6]

