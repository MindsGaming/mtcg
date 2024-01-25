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
        "MTCG Game Terminal Is A Gamerfied Way To Earn Rewards! Commands: {'help', 'login','refresh',...}";
    } else {
      if (fetchcommand == "login") {
        dreamInput.value = "Enter Your Wallet Reciver Adderess...";
      } else {
        if (fetchcommand == "refresh") {
          dreamInput.value = "";
          clearposts();
        } else {
          if (fetchcommand == "rewards") {
            dreamInput.value = "Coming Soon...";
          } else {
            if (fetchcommand == "git clone" + "") {
              dreamInput.value = "Remix The Project To Clone";
              dreamInput.value = "building MTCG";
              dreamInput.value =
                "const path = 'absolute/path/to/folder' shell.cd(path) shell.exec('git clone https://github.com/atomicptr/dauntless-builder')";
              dreamInput.value =
                "git clone https://glitch.com/edit/#!/remix/mtcg";
            } else {
              dreamInput.value = "Command Not Found :( type 'help' for help.";
            }
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
