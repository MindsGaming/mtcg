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
  var burgers = window.open("/games/pinn", "_self");
  game.innerHTML = burgers;
  game.className = "gameSplash";
  game.id = "PINN";
  game.allow = "microphone; camera; vr; speaker;";
}

function soundsLoad() {
  var game = document.getElementById("sounds");
  var sounds = window.open("/games/eclipse", "_self");
  game.innerHTML = sounds;
  game.className = "gameSplash";
  game.id = "ECLIPSE";
  game.allow = "microphone; camera; vr; speaker;";
}

function gametest() {
  var game = document.getElementById("gametest");
  var open = window.open("http://gametestplay.com/ball.html", "_blank");
  game.innerHTML = open;
  game.className = "gameSplash";
  game.id = "GTM";
  game.allow = "microphone; camera; vr; speaker;";
}
