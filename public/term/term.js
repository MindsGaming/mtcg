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
  dreamsList.innerHTML = "";
  if (fetchcommand == "help") {
    dreamInput.value =
      "Welcome To The Game Terminal. A Gamerfied Way To Earn Rewards, You Can Enter Commands Like: 'help', 'login','refresh'";
  }
  if (fetchcommand == "login") {
    dreamInput.value = "Enter Your Wallet Reciver Adderess...";
  }

  if (fetchcommand == "refresh") {
    dreamInput.value = "Enter Your Wallet Reciver Adderess...";
  }
}
