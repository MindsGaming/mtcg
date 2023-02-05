const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

function hitme() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  var card = suit + value;
  var log = document.createElement("li");
  log.innerHTML = newcard;
  log.id = newcard;
  var LOG = document.getElementById("log").appendChild(log);
  log.style = "";
  var newCard = document.createElement("div");
  newCard.id = "print";
  var print = document.getElementById("deck").appendChild(newCard);
}
