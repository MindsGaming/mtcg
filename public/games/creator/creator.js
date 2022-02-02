var card = document.getElementById("newcard");
var newcard = document.createElement("img");
newcard.src = card.value;
newcard.id = "newcard";
var background = document.getElementById("newcard");
var backgroundImage = document.createElement("img");
backgroundImage.src = "/images/coins.png";

if (newcard.value == ""){
  newcard.src = "/"
}