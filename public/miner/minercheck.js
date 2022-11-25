setTimeout(function () {
  if (typeof _client === "undefined" || _client === null) {
    var alertuser = document.getElementById("rewards-intro");
    var loginform = document.getElementById("form");
    var claimBTN = document.getElementById("claimBTN");
    var minerarticle = document.getElementById("my-miner");
    var pending = document.getElementById("PENDING");
    var yourLevel = document.getElementById("yourlevel");
    yourLevel.innerHTML = "Connect Miner";
    alertuser.innerHTML = "Allow Our Miner To Start Earning Rewards";
    claimBTN.className = "hide";
    loginform.className = "hide";
    pending.className = "hide";
    minerarticle.className = "";
    walletTools();
  }
}, 1000);
