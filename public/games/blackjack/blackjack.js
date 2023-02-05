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
  var printsuit = document.createElement("label");
  printsuit.innerHTML = suit;
  printsuit.className = "suit";
  var printvalue = document.createElement("label");
  printvalue.innerHTML = value;
  printvalue.className = "value";
  var printValue = document.getElementById("deck").appendChild(printvalue);
  var printSuit = document.getElementById("deck").appendChild(printsuit);

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
