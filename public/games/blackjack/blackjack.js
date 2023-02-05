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
  var printsuit = document.createElement("div");
  printsuit.innerHTML = suit;
  printsuit.className = "suit";
  var printvalue = document.createElement("div");
  printvalue.innerHTML = value;
  printvalue.className = "value";
  var printValue = document.getElementById("card1").appendChild(printvalue);
  var printSuit = document.getElementById("card1").appendChild(printsuit);

  var restyle = document.getElementById("card1");
  restyle.className = "card";
  log();
  function log() {
    var logcard = suit + value;
    var log = document.createElement("li");
    log.innerHTML = logcard;
    log.id = logcard;
    var LOG = document.getElementById("log").appendChild(log);
    log.style = "";
  }
}
