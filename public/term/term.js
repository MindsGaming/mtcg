function Rplaceholder() {
  if (dream.placeholder == "|") {
    dream.placeholder = "";
  } else {
    dream.placeholder = "|";
  }
}

function commands() {
  var fetchcommand = dreamInput.value;
  var fetchlogin = document.getElementById("fetchlogin");
  var fetchcpureply = document.getElementById("fetch-cpu-reply");
  dreamsList.innerHTML = "";
  if (fetchcommand == "help") {
    dreamInput.value =
      "Welcome To The Game Terminal. A Gamerfied Way To Earn Rewards, You Can Enter Commands Like: 'help', 'login',";
  }
  if (fetchcommand == "login") {
    dreamInput.value = "Enter Your Wallet Reciver Adderess...";
  } else {
    validateForm();
    function validateForm() {
      dreamInput.value = fetchcommand;
      dreamInput.minlength = "42";
      dreamInput.maxlength = "43";
      appendNewDream;
      fetchcpureply.className = "hide";
    }
    dreamsList.innerHTML = "";
  }
}
