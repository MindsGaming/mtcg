var trading = "0.00001";

function takeTour() {
  var hide = document.getElementById("m1");
  hide.classList.toggle("hide");
  var show = document.getElementById("m2");
  show.className = "messageBlock";
  var tour = document.getElementById("tour");
  tour.className = "touring";
}

function openMenu() {
  var openmenu = document.getElementById("imagineMenu");
  openmenu.classList.toggle("showMenu");
}

function walletMenu() {
  var wallet = document.getElementById("walletTab");
  wallet.classList.toggle("hide");
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var hide = document.getElementById("home");
  hide.className = "hide";
  openMenu();
}

function tradingMenu() {
  var trading = document.getElementById("tradingTab");
  trading.classList.toggle("hide");
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var hide = document.getElementById("home");
  hide.className = "hide";
  openMenu();
}

function logoTick() {
  var home = document.getElementById("home");
  home.className = "trading";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
}

function justPlay() {
  var hide = document.getElementById("tour");
  hide.className = "hide";
}

function listTokens() {
  var list = document.getElementById("airdrip");
  list.className = "greyButton";
}

function airDrops(){
  var airdrop = document.getElementById("airdr")
}

function m3() {
  justPlay()
  var m2 = document.getElementById("m2");
  m2.className = "hide";
  var m3 = document.getElementById("m3");
  m3.className = "marketTokens";
}
