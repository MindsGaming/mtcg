// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("Welcome To #MindsGaming Blockchain Rewards");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
var superToken = document.getElementById("myToken");
var dreamToken = document.getElementById("myToken");
var dreamWallet = document.getElementById("myWallet");
selectToken();

var totalSeconds = 0;
if (superToken.innerHTML == "GAMER") {
  setInterval(setTime, 8981);
}

if (superToken.innerHTML == "DooBetter") {
  setInterval(setTime, 5000);
}

if (superToken.innerHTML == "ECLIPSE") {
  setInterval(setTime, 3141);
}

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];
const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector("#clear-dreams");
const base = document.getElementById("base");

// request the dreams from our app's sqlite database
fetch("/getDreams", {})
  .then(res => res.json())
  .then(response => {
    response.forEach(row => {
      appendNewDream(row.dream);
    });
  });

// a helper function that creates a list item for a given dream
const appendNewDream = dream => {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
};

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = event => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  const data = {
    dream: dreamInput.value + " EGG Reward: " + base.title
  };

  fetch("/addDream", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(response => {
      console.log(JSON.stringify(response));
    });
  // get dream value and add it to the list
  dreams.push(dreamInput.value + " EGG Reward:" + base.title);
  appendNewDream(dreamInput.value + " EGG Reward:" + base.title);

  // reset form
  dreamInput.value = "";
  dreamInput.focus();
  alert("You Claimed Your Reward! You cCan Only Claim It Once");
  const claim = document.getElementById("claimMe");
  claim.style = "display: none";
  rewardSound();
};

clearButton.addEventListener("click", event => {
  fetch("/clearDreams", {})
    .then(res => res.json())
    .then(response => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
});

function reset() {
  var zero = "00";
  document.getElementById("minutes").innerHTML = zero;
  document.getElementById("seconds").innerHTML = zero;
  totalSeconds = "0";
}

function walletChange() {
  var x = document.getElementById("myWallet");
  x.innerHTML = dreamInput.value;
}

function selectToken() {
  var tokens = [
    "GAMER",
    "DooBetter",
    "ECLIPSE",
    "DooBetter",
    "ECLIPSE",
    "GAMER"
  ];
  const newtoken = tokens[Math.floor(Math.random() * tokens.length)];
  var a = document.getElementById("myToken");
  a.innerHTML = newtoken;
  dreamToken.innerHTML = a.innerHTML;
  superToken.innerHTML = newtoken;
}

function moMint() {
  const egg = document.getElementById("EGG");
  egg.placeholder = "Momint User";
  const momint = document.getElementById("moMint");
  momint.style = "display: none";
  const button = document.getElementById("submit-dream");
  button.innerHTML = "Claim Momint NFT";
  const base = document.getElementById("base");
  base.title = "Virtual Bounty Hunter EGG Momint";
}
