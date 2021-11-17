var trading = "0.00001";

function takeTour() {
  var hide = document.getElementById("m1");
  hide.classList.toggle("hide");
  var show = document.getElementById("m2");
  show.className = "messageBlock";
  var tour = document.getElementById("tour");
  tour.className = "touring";
}

function justPlay() {
  var hide = document.getElementById("tour");
  hide.className = "hide";
}

function openMenu() {
  var openmenu = document.getElementById("imagineMenu");
  openmenu.classList.toggle("showMenu");
}

function walletMenu() {
  var hide = document.getElementById("home");
  hide.classList.toggle("hide");
  var wallet = document.getElementById("walletTab");
  wallet.classList.toggle("hide");
  openMenu();
}

function logoTick() {
  justPlay();
  var hide = document.getElementById("home");
  hide.classList.toggle("trading");
  var wallet = document.getElementById("walletTab");
  wallet.classname = "hide";
}
