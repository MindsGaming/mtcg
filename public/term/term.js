function Rplaceholder() {
  if (dream.placeholder == "|") {
    dream.placeholder = "";
    dreamsList.innerHTML = "";
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
      "Welcome To The Game Terminal. A Gamerfied Way To Earn Rewards, You Can Enter Commands Like: 'help', 'login',";
  }
  if (fetchcommand == "login") {
    dreamInput.value = "undefined " + "is not a valid user";
  }
}
