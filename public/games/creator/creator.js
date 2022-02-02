let newcard = document.getElementById("newcard");
var card = document.createElement("img");
card.src =
  "https://cdn.glitch.global/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28/MTCGblank.jpg";
card.style = "width: 30%; height: 70%; display: none;";
card.id = "MTCG";
document.getElementById("newcard").appendChild(card);

function background() {
card.style = "width: 30%; height: 70%; display: block;";

  let backgroundImage = document.getElementById("newcard").value;
  var cardBackground = document.createElement("img");
  cardBackground.src = newcard;
  cardBackground.style = "background-color: white; width: 30%; height: 70%; dispaly: block; opacity: 0.8;";
  cardBackground.id = "Printed";

  document.getElementById("MTCG").appendChild(cardBackground);
}
