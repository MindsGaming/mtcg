var token = document.getElementById("myWallet");
var superToken = token.innerHTML;

var imageOne = document.getElementById("rewardicon");
var imageTwo = document.getElementById("profileicon");

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
  var bombsGame = document.getElementById("bombs");
  if (bombsGame.title == "Closed") {
    var quitGame = document.getElementById("quitgameBombs");
    quitGame.style =
      "position: fixed; top:0; right: 0;  margin-right: 30px; border-style: solid; width: 20px; cursor: pointer; z-index: 5;";
    bombsGame.title = "Open";
    var createHUB = document.createElement("iframe");
    createHUB.src = "/games/bombs";
    createHUB.className = "SuperSplash";
    createHUB.allow = "microphone; camera; vr; speaker;";
    var CREATEHUB = document.getElementById("bombs").appendChild(createHUB);

    imageOne.className = "hide";
    imageTwo.className = "hide";
  } else {
    bombsGame.style = "display: none";
    imageOne.className = "rewardicon";
    imageTwo.className = "profileicon";
  }
}

function slotsLoad() {
  var slotGame = document.getElementById("slots");
  if (slotGame.title == "Closed") {
    var quitGame = document.getElementById("quitgameSlots");
    quitGame.style =
      "position: fixed; top:0; right: 0;  margin-right: 30px; border-style: solid; width: 20px; cursor: pointer; z-index: 5;";
    slotGame.title = "Open";
    var createHUB = document.createElement("iframe");
    createHUB.src = "/games/slots";
    createHUB.className = "SuperSplash";
    createHUB.allow = "microphone; camera; vr; speaker;";
    var CREATEHUB = document.getElementById("slots").appendChild(createHUB);

    imageOne.className = "hide";
    imageTwo.className = "hide";
  } else {
    slotGame.style = "display: none;";
    imageOne.className = "rewardicon";
    imageTwo.className = "profileicon";
  }
}


function emojiLoad() {
 var notice = document.getElementById("NOTICE")
 notice.
}