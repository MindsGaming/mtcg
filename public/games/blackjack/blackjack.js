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

  var cardprinter = document.getElementById("cardprinter");
  var currentprints = cardprinter.value;
  var addprint = 1;
  var printmath = cardprinter + printmath;
  var cardprinterR = document.getElementById("cardprinter").value;
  cardprinterR = printmath;
  var printid = "card" + printmath;

  var createprint = document.getElementByI("deck").appendChild(cardprinter);

  var printValue = document.getElementById(printid).appendChild(printvalue);
  var printSuit = document.getElementById(printid).appendChild(printsuit);

  var restyle = document.getElementById("card1");
  restyle.className = "card";
  log();
  function log() {
    var logcard = value + suit;
    var log = document.createElement("li");
    log.innerHTML = logcard;
    log.id = logcard;
    var LOG = document.getElementById("log").appendChild(log);
    log.style = "";

    var currentlog = document.getElementById("log");
    if (currentlog.innerHTML == "") {
    } else {
      var countcards = document.getElementById("cardmeter");
      var count = value;
      if ((count == "A", "K", "Q", "K")) {
        count = 10;
      }

      var current = countcards.value;
      var currentcount = current + count;
      countcards.value = currentcount;

      if (currentcount > 21) {
        alert("You Busted");
      }
    }
  }
}
