const command = document.getElementById("commands");
document.getElementById("command").addEventListener("enter", paste); 
const dreams = document.getElementById("dreams");

function paste(){
  command.value = dreams.value;
}

function Rplaceholder() {
  if (dream.placeholder == "Type A Command") {
    dream.placeholder = "";
  } else {
    dream.placeholder = "Type A Command.";
  }
}

function commands() {
  var fetchcommand = dreamInput.value;
  var fetchlogin = document.getElementById("fetchlogin");

  if (fetchcommand == "hello") {
    dreamInput.value = "I am not a chatbot, please enter a command.";
  } else {
    if (fetchcommand == "help") {
      dreamInput.value =
        "MTCG Game Terminal Is A Gamerfied Way To Earn Rewards! Commands: {'help', 'login','refresh','remix','chess'..}";
    } else {
      if (fetchcommand == "login") {
        layout();
      } else {
        if (fetchcommand == "refresh") {
          refresh();
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
          if (fetchcommand == "chess") {
            window.open("https://testnet.chesspolygon.com/", "_blank");
            dreamInput.value = "";
          } else {
            if (dreamInput.value == "hubs") {
              dreamInput.value = "Loading Hubs...";
              openhubs();
              termframe.className = "hide";
            } else {
              if (dreamInput.value == fetchcommand) {
                dreamInput.value = "Logged; " + fetchcommand;
              }
            }
          }
        }
      }
    }
  }
}

function layout() {
  var preview = document.getElementById("l-preview");
  var buttons = document.getElementById("l-buttons");
  if (preview.title == "@MTCG") {
    preview.innerHTML = "Login";
    buttons.className = "show";
    preview.title = "Login";
    dreamsList.minlength = "42";
    dreamInput.value = "Enter Your Wallet Receiver Adderess...";
  } else {
    preview.innerHTML = "?@MTCG";
    buttons.className = "hide";
    preview.title = "@MTCG";
  }
}

function refresh() {
  dreamsList.innerHTML = "";
  dreamInput.value = "";
}

function desktopOnly() {
  dreamInput.value = "Desktop Feature;";
  dream.value = "";
}

function clearposts() {
  fetch("/clearDreams", {})
    .then((res) => res.json())
    .then((response) => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
}
