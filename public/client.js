// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("Welcome To #MindsGaming Blockchain Rewards");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
var dreamToken = document.getElementById("myToken");
var dreamWallet = document.getElementById("myWallet");
selectToken();

var totalSeconds = 0;
if (dreamToken.innerHTML == "GAMER") {
  setInterval(setTime, 8981);
}

if (dreamToken.innerHTML == "DooBetter") {
  setInterval(setTime, 5000);
}

if (dreamToken.innerHTML == "ECLIPSE") {
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
const myToken = document.getElementById("REWARDTOKEN");

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
    dream: dreamInput.value + ": Loged In"
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
  dreams.push(dreamInput.value + "Loged In");
  appendNewDream(dreamInput.value + ":Loged In");

  // reset form
  alert(
    "You're Loged In! Do Not Close Or Refresh This Page Or You May Lose Your Rewards"
  );
  var createHUB = document.createElement("iframe");
  createHUB.src =
    "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
  createHUB.className = "SuperSplash";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);
  var openHub = document.getElementById("hubs");
  openHub.style = "display:block";
  walletChange();
};

clearButton.addEventListener("click", event => {
  fetch("/clearDreams", {})
    .then(res => res.json())
    .then(response => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
});

function claimUpdate() {
  if (dreamInput.value == "") {
    alert("Login To Earn Rewards");
    otherSound();
  } else {
    if (minutesLabel.innerHTML == "00") {
      alert("You Need A Full Token To Claim Rewards");
      oopsSound();
    } else {
      var lifeScore = minutesLabel.innerHTML + "." + secondsLabel.innerHTML;
      var REWARDS = lifeScore;
      const data = {
        dream: dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS
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
      dreams.push(
        dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS
      );
      appendNewDream(
        dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS
      );
      reset();

      if (dreamToken.innerHTML == "GAMER") {
        dreamToken.innerHTML = "DooBetter";
        setInterval(setTime, 15000);
      }

      if (dreamToken.innerHTML == "DooBetter") {
        dreamToken.innerHTML = "ECLIPSE";
        setInterval(setTime, 13141);
      }

      if (dreamToken.innerHTML == "ECLIPSE") {
        dreamToken.innerHTML = "GAMER";
        setInterval(setTime, 18981);
      }
      selectToken();
      rewardSound();
    }
  }
}

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
  dreamToken.innerHTML = newtoken;
}
