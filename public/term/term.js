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

  if (fetchcommand == "hello") {
    dreamInput.value = "I am not a chatbot, please enter a command.";
  } else {
    if (fetchcommand == "help") {
      dreamInput.value =
        "Welcome To The Game Terminal. A Gamerfied Way To Earn Rewards, You Can Enter Commands Like: 'help', 'login','refresh'";
    } else {
      if (fetchcommand == "login") {
        dreamInput.value = "Enter Your Wallet Reciver Adderess...";
      } else {
        if (fetchcommand == "refresh") {
          dreamInput.value = "";
          clearposts();
        } else {
          if (fetchcommand == "games") {
            dreamInput.value = "Coming Soon...";
          } else {
            dreamInput.value = "Command Not Found :( type 'help' for help.";
          }
        }
      }
    }
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
