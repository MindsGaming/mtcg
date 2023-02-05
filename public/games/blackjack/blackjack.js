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
  var suit = Math.floor(Math.random() * suits.length);
  var value = Math.floor(Math.random() * values.length);
  var card = suit ;

  var log = document.createElement("txt");
  log.txt = card;
  log.id = card;
  log.style = "color: red, font-size: 42px";
  var LOG = document.getElementById("log").appendChild(log);
  alert(log.txt);
}
