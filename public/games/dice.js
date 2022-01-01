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


