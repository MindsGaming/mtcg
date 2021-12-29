var token = document.getElementById("myWallet");
var wallet = document.getElementById("walletCheck");

if (token.innerHTML == "LOGIN") {
  poof = setTimeout(poof, 5000);
  poof();
  function poof() {
    wallet.className = "offline";
    wallet.title = "LOGED";
  }
}

function classicLogin() {
  var x = document.getElementById("myWallet");
  selectToken();

  x.innerHTML = dreamInput.value;
  wallet.className = "hide";
}

function classicGuest() {
  var x = document.getElementById("myWallet");
  wallet.className = "hide";
}

function pinnBurgers() {
  var game = document.getElementById("gameWrap");
  var superGame = document.getElementById("superGame");

  superGame.className = "SuperSplash";
}
