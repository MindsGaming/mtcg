let newcard = document.getElementById("newcard");
var card = document.createElement("img");
card.src = "https://cdn.glitch.com/c7248de5-f10d-4345-bfbd-d33f86010870%2FZomboMeme%2030032021045454.jpg";
card.id= "MTCG"
document.getElementById("newcard").appendChild(card);


function background(){
  let newcard = document.getElementById("newcard").value;
var card = document.createElement("img");
card.src = newcard;
card.id= "MTCG"
document.getElementById("newcard").appendChild(card);
}