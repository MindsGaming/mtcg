setTimeout(function () {
  if (typeof _client === "undefined" || _client === null) {
    var alertuser = document.getElementById("miner-alert");
    alertuser.className = "ALERT";
    var claimBTN = document.getElementById("claimBTN");
    claimBTN.className = "hide";
    var loginform = document.getElementById("login-form");
    loginform.className = "hide";
  }
}, 1000);

function closealert() {
  var closealert = document.getElementById("miner-alert");
  closealert.className = "hide";
}

function learnMORE() {
  userview();
  var myMINER = document.getElementById("my-miner");
  myMINER.className = "WRAP";
  closealert();
}
