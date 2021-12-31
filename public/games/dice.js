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


function burgersLoad() {
  var game = document.getElementById("burgers");
  var createHUB = document.createElement("iframe");
  createHUB.src = "/games/pinn";
  createHUB.className = "gameSplash";
  createHUB.id = "PINN";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("pinnBurgers").appendChild(createHUB);
}

function soundsLoad() {
  var game = document.getElementById("burgers");
  var createHUB = document.createElement("iframe");
  createHUB.src = "/games/pinn";
  createHUB.className = "gameSplash";
  createHUB.id = "PINN";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("pinnBurgers").appendChild(createHUB);
}

