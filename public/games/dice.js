var token = document.getElementById("myWallet");
var superToken = token.innerHTML;

function oopsLogin() {
  var x = document.getElementById("oopsLogin");
  x.className = "SuperSplash";
}

function classicLogin() {
  selectToken();
  token.innerHTML = dreamInput.value;
  oppsLogin.className = "hide";
}

function classicGuest() {
  oppsLogin.className = "hide";
}

function gametest() {
  window.open("http://gametestplay.com/ball.html", "_blank");
}

function burgersLoad() {
  var createHUB = document.createElement("iframe");
  createHUB.src = "/games/pinn";
  createHUB.className = "SuperSplash";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("burgers").appendChild(createHUB);
}

function soundsLoad() {
  var createHUB = document.createElement("iframe");
  createHUB.src = "/games/eclipse";
  createHUB.className = "SuperSplash";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("sounds").appendChild(createHUB);
}

function bombsLoad() {
  var createHUB = document.createElement("iframe");
  createHUB.src = "/games/bombs";
  createHUB.className = "SuperSplash";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("bombs").appendChild(createHUB);
}

function claimbountyEGG() {
  var egg = document.getElementById("bWrap");
  egg.className = "hide";
  var close = document.getElementById("closeEGG");
  close.style = "display: block; cursor: pointer;";
  alert("Claimed When Loged In!");
  var lifeScore = 5;
  var REWARDS = lifeScore;
  const data = {
    dream: dreamInput.value + " Bounty Hunter EGG: " + REWARDS
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
  dreams.push(dreamInput.value + " Bounty Hunter EGG: " + REWARDS);
  appendNewDream(dreamInput.value + " Bounty Hunter EGG: " + REWARDS);
}

function closeEGG() {
  window.close("#");
}
