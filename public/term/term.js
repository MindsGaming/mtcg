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
  dreamsForm.pattern = "{4,100}";

  if (fetchcommand == "hello") {
    dreamInput.value = "I am not a chatbot, please enter a command.";
  } else {
    if (fetchcommand == "help") {
      dreamInput.value =
        "MTCG Game Terminal Is A Gamerfied Way To Earn Rewards! Commands: {'help', 'login','refresh','remix',...}";
    } else {
      if (fetchcommand == "login") {
        dreamInput.value = "Enter Your Token Wallet Reciver Adderess...";
      } else {
        if (fetchcommand == "create" + "") {
          dreamInput.value =
            fetchcommand +
            "Account Request;" +
            "'create' again if not a vaild reciver wallet";
        } else {
          if (fetchcommand == "refresh") {
            dreamInput.value = "";
            clearposts();
          }
        }

        if (fetchcommand == "rewards") {
          dreamInput.value = "Coming Soon...";
        } else {
          if (fetchcommand == "remix") {
            var remix = document.getElementById("remix");
            remix.className = "remix";
            remix.src = "https://glitch.com/edit/#!/remix/mtcg";
            dreamInput.value = remix.outterHTMl;
          } else {
            if (dreamInput.pattern == "{42,43}") {
            } else {
              if (dreamInput.value == fetchcommand) {
                dreamInput.value = "Command Not Found :(";
              }
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
