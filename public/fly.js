const click = document
  .getElementById("playername")
  .addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      enterWallet();
    }
  });

function enterWallet() {
  var a = document.getElementById("username");
  a.className = "hide";
  var b = document.getElementById("rewardtoken");
  b.className = "";
  var c = document.getElementById("username");
  var d = document.getElementById("myName");
  d.innerHTML = c.value;
  var e = document.getElementById("playerBTN");
  e.className = "hide";
}

function gamertokens() {
  var a = document.getElementById("rewardtoken");
  a.className = "hide";
  var b = document.getElementById("wallet");
  b.className = "";
  var c = "GAMER";
  var d = document.getElementById("myToken");
  d.innerHTML = c;
  var e = document.getElementById("REWARDTOKEN");
  e.value = c;
}

function doobettertokens() {
  var a = document.getElementById("rewardtoken");
  a.className = "hide";
  var b = document.getElementById("wallet");
  b.className = "form";
  var c = "DooBetter";
  var d = document.getElementById("myToken");
  d.innerHTML = c;
  var e = document.getElementById("REWARDTOKEN");
  e.value = c;
}

function eclipsetokens() {
  var a = document.getElementById("rewardtoken");
  a.className = "hide";
  var b = document.getElementById("wallet");
  b.className = "form";
  var c = "ECLIPSE";
  var d = document.getElementById("myToken");
  d.innerHTML = c;
  var e = document.getElementById("REWARDTOKEN");
  e.value = c;
}

function viewReward() {
  var a = document.getElementById("REWARDS");

  if (a.title == "closed") {
    a.className = "userView";
    a.title = "Rewards";
  } else {
    a.className = "hide";
    a.title = "closed";
  }
  var b = document.getElementById("myRewards");
  b.innerHTML = minutesLabel.innerHTML + "." + secondsLabel.innerHTML;
}

function update() {
  var x = document.getElementBYId("life");
  x.value = "1";
}

function guest()
{
  alert("Login To Earn Rewards");
  var createHUB = document.createElement("iframe");
  createHUB.src = "https://hubs.mozilla.com/8hYMRnN?embed_token=338fcf3b8fcd2312c3be7556ccf5e37e";
  createHUB.className = "SuperSplash";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);
}