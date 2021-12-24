// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("Welcome To #MindsGaming Blockchain Rewards");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
var dreamToken = document.getElementById("myToken");

var totalSeconds = 0;
setInterval(setTime, 3141);

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
const myName = document.getElementById("username");
const myToken = document.getElementById("REWARDTOKEN");
const myReward = document.getElementById("myRewards");

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
    dream: myName.value + "-" + dreamInput.value + " " + dreamToken.innerHTML
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
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value + ":Loged In");

  // reset form

  alert("Do Not Close Or Refresh This Page Or You May Lose Your Rewards");
  var createHUB = document.createElement("iframe");
  createHUB.src = "https://mtcg.glitch.me/games";
  createHUB.className = "SuperSplash";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);
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
  } else {
    var lifeScore = minutesLabel.innerHTML + "." + secondsLabel.innerHTML;
    var REWARDS = lifeScore;
    const data = {
      dream:
        myName.value +
        "-" +
        dreamInput.value +
        " " +
        dreamToken.innerHTML +
        ":" +
        REWARDS
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
      myName.value +
        "-" +
        dreamInput.value +
        " " +
        dreamToken.innerHTML +
        ":" +
        REWARDS
    );
    appendNewDream(
      myName.value +
        "-" +
        dreamInput.value +
        " " +
        dreamToken.innerHTML +
        ":" +
        REWARDS
    );
  }
  reset();
}

function reset() {
  var zero = "00";
  document.getElementById("minutes").innerHTML = zero;
  document.getElementById("seconds").innerHTML = zero;
  totalSeconds = "0";
}
