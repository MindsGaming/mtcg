var token = document.getElementById("myWallet");

if (token.innerHTML == "LOGIN"){
  alert("test")
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
