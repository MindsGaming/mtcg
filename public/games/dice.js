var token = document.getElementById("myWallet");
if (token.innerHTML == "LOGIN") {
  var oppsLogin = document.getElementById("oopsLogin");
  if (token.innerHTML == "LOGIN") {
    poof = setTimeout(poof, 5000);
    poof();
    function poof() {
      if (token.innerHTML == "LOGIN") {
        oppsLogin.className = "SuperSplash";
      }
    }
  }
}

function classicLogin() {
  selectToken();
  token.innerHTML = dreamInput.value;
  oppsLogin.className = "hide";
}

function classicGuest() {
  oppsLogin.className = "hide";
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
