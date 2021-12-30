var x = document.getElementById("myWallet");
var token = x.innerHTML;
if (x.innerHTML == "LOGIN") {
  x.innerHTML = dreamInput.value;
  poof = setTimeout(poof, 5000);
  poof();
  function poof() {
    if (x.innerHTML == "LOGIN") {
      var x = document.getElementById("oopsLogin");
      x.className = "SuperSplash";
    }
  }
}

function classicLogin() {
  selectToken();
  x.innerHTML = dreamInput.value;
}

function classicGuest() {
  var x = document.getElementById("myWallet");
}

function pinnBurgers() {
  var sticker = document.getElementById("myWallet");
  var stick = sticker.HTML;
  var game = document.getElementById("gameWrap");
  var superGame = document.getElementById("superGame");
  superGame.className = "SuperSplash";
  if (token.innerHTML == "LOGIN") {
    poof = setTimeout(poof, 5000);
    poof();
    function poof() {
      sticker.innerHTML = stick;
    }
  }
}
