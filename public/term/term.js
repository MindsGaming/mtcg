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
    dreamInput.value = "";
    clearposts();
  } else {
    dreamInput.value = "Command Not Found :( 'refresh' to clear the terminal";
  }
}

function clearposts() {
  fetch("/clearDreams", {})
    .then((res) => res.json())
    .then((response) => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
}
