const dreamsID = document.getElementById("dream");

function Rplaceholder() {
  if (dream.placeholder == "|") {
    dream.placeholder = "";
  } else {
    dream.placeholder = "|";
  }
}

function commands() {
  var fetchcommand = dreamInput.value;

  if (fetchcommand == "hello") {
    dreamInput.value = "I am not a chatbot, please enter a command.";
  } else {
    if (fetchcommand == "help") {
      dreamInput.value =
        "MTCG Game Terminal Is A Gamerfied Way To Earn Rewards! Commands: {'help', 'login','refresh','remix',...}";
    } else {
      if (fetchcommand == "login") {
        dreamInput.value = "Enter Your Token Contact Adderess...";
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
          let fun = dreamInput.innerHTML;
          fun.innerHTML = "Your Remix";
        } else {
          if (fetchcommand == "0xDA7F833675D2F90E3Df02c36bad3ECc1417B93dD") {
            dreamInput.value = "GAMER";
          } else {
            if (fetchcommand == "0xCbc63Dcc51679aDf0394AB2be1318034193003B6") {
              dreamInput.value = "ECLIPSE";
            } else {
              if (
                fetchcommand == "0x936e08736F882144Efd53813Ee9805701A5f4dC3"
              ) {
                dreamInput.value = "DooBetter";
              } else {
                if (
                  fetchcommand == "0x7f0A21Dd46a87C3cEA64A36D771B13257b345324"
                ) {
                  dreamInput.value = "GTPC";
                } else {
                  if (
                    fetchcommand == "0xD44bf50dc440a38bF76499cC854EACe4d6e350F4"
                  ) {
                    dreamInput.value = "PINN";
                  } else {
                    if (
                      fetchcommand ==
                      "0xD44bf50dc440a38bF76499cC854EACe4d6e350F4"
                    ) {
                      dreamInput.value = "PINN";
                    }
                  }
                }
              }
            }

            if (dreamInput.value == fetchcommand) {
              dreamInput.value = "Command Not Found :(";
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

function viewLOGIN() {
  if (infinity.title == "Infinity") {
    infinity.title = "Terminal";
    infinity.src = "/term/index.html";
    groups.className = "hide";
    splash.className = "splash";
    infinity.className = "apps";
    info.className = "hide";
    clearposts();
  } else {
    infinity.title = "Infinity";
    infinity.src =
      "https://opengpts-example-vz4y4ooboq-uc.a.run.app/?shared_id=f8e255b1-6ac6-4b5b-af4c-5a00afad18bc?shared_id=a27e9bc2-50ff-4106-bfcc-e609e0ca62b3";
    groups.className = "show";
    splash.className = "hide";
    infinity.className = "hide";
    info.className = "hide";
  }
}
