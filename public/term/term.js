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
      "Welcome To The Game Terminal. A Gamerfied Way To Earn Rewards, You Can Enter Commands Like: 'help', 'login',";
  }
  if (fetchcommand == "login") {
    dreamInput.value = "undefined " + "is not a valid user";
  }
  if (fetchcommand == "login" + undefined) {
    checkwallet();
  } else {
    dreamInput.value = "Command Not Found :(";
    dreamsList.innerHTML = "";
  }
}

function validateForm() {
  var fetchcommand = dreamInput.value;
  var dream = document.getElementById("dream");
  dream.value = fetchcommand;
  appendNewDream;
}
