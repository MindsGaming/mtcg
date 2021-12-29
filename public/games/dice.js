var wallet = document.getElementById("walletCheck");

if (wallet.title == "wallet") {
  wallet.title = "Checking...";
  poof = setTimeout(poof, 5000);
  poof();
  function poof() {
    wallet.className = "offline";
  }
}

function classicLogin() {
  var x = document.getElementById("myWallet");
  x.innerHTML = dreamInput.value;
  wallet.className = "hide";
}
