var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImagesource1 = "./img/" + randomImage1;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImagesource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImagesource2 = "./img/" + randomImage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
} 
else {
    document.querySelector("h1").innerHTML = "DRAWWW !";
}


 







