const transferForm = document.getElementById("transfer-form");
const getTransferToken = document.getElementById("get-transferToken");
const transferTokenAccount = document.getElementById("transfer-tokenaccount");
const transferTokenAmount = document.getElementById("transfer-tokenamount");
const transferTokenName = document.getElementById("transfer-tokenname");
const piggybank = document.getElementById("piggy-bank");

function sendGamerTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "GAMER";
  transferTokenName.title = "GAMER";
  transferTokenName.value = "GAMER";
  piggybank.className = "hide";
}

function sendWtvTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "WTV";
  transferTokenName.title = "WTV";
  transferTokenName.value = "WTV";
  piggybank.className = "hide";
}

function sendDoobetterTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "DooBetter";
  transferTokenName.title = "DooBetter";
  transferTokenName.value = "DooBetter";
  piggybank.className = "hide";
}

function sendEclipseTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "ECLIPSE";
  transferTokenName.title = "ECLIPSE";
  transferTokenName.value = "ECLIPSE";
  piggybank.className = "hide";
}

function sendGtpcTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "GTPC";
  transferTokenName.title = "GTPC";
  transferTokenName.value = "GTPC";
  piggybank.className = "hide";
}

function sendPinnTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "PINN";
  transferTokenName.title = "PINN";
  transferTokenName.value = "PINN";
  piggybank.className = "hide";
}

function sendDragonTokenTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "DragonToken";
  transferTokenName.title = "DragonToken";
  transferTokenName.value = "DragonToken";
  piggybank.className = "hide";
}

function sendDarkmarkTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "DarkMark";
  transferTokenName.title = "DarkMark";
  transferTokenName.value = "DarkMark";
  piggybank.className = "hide";
}

function sendCandysTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "Candys";
  transferTokenName.title = "Candys";
  transferTokenName.value = "Candys";
  piggybank.className = "hide";
}

function sendTransfer() {
  if (
    transferTokenAccount.value == "" ||
    transferTokenName.value == "" ||
    transferTokenAmount.value == ""
  ) {
    userAlert.innerHTML = "Complete The Form";
  } else {
    if (transferTokenAmount.value < 50) {
      userAlert.innerHTML = "Transfer 50 or More";
    } else {
      let tCost = parseFloat(currenteggs.innerHTML);

      if (tCost < 5) {
        userAlert.innerHTML = "5 Eggs Reqired";
      } else {
        const appendNewDreamss = (dream) => {
          const newListItem = document.createElement("li");
          const randomWarp = Math.floor(Math.random() * numb) + 1;
          newListItem.innerText = dream;
          newListItem.title = "Request";
          newListItem.id = numb;
          newListItem.value = randomWarp;
          newListItem.className = "hide";
          dreamsList.appendChild(newListItem);
        };

        const data = {
          dream:
            "Transfer:" +
            transferTokenAccount.value +
            transferTokenName.value +
            transferTokenAmount.value,
        };

        fetch("/addDream", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(JSON.stringify(response));
          });

        // Add the dream value to the list
        dreams.push(
          "Transfer:" +
            transferTokenAccount.value +
            transferTokenName.value +
            transferTokenAmount.value
        );
        appendNewDream(
          "Transfer:" +
            transferTokenAccount.value +
            transferTokenName.value +
            transferTokenAmount.value
        );

        if (transferTokenName.value == "GAMER") {
          let currentGAMER = document.getElementById("GAMER-change");
          let phaseChange = parseFloat(currentGAMER.innerHTML);
          let phasemath = phaseChange - transferTokenAmount.value;
          currentGAMER.innerHTML = phasemath;
          transferTokenAmount.value = "";
          transferTokenAccount.value = "";
          transferTokenName.value = "";
          transferForm.className = "hide";
          userAlert.innerHTML = "Transfer Sent!";
        }

        if (transferTokenName.value == "WTV") {
          let currentGAMER = document.getElementById("WTV-change");
          let phaseChange = parseFloat(currentGAMER.innerHTML);
          let phasemath = phaseChange - transferTokenAmount.value;
          currentGAMER.innerHTML = phasemath;
          transferTokenAmount.value = "";
          transferTokenAccount.value = "";
          transferTokenName.value = "";
          transferForm.className = "hide";
          userAlert.innerHTML = "Transfer Sent!";
        }

        if (transferTokenName.value == "DooBetter") {
          let currentGAMER = document.getElementById("DOOBETTER-change");
          let phaseChange = parseFloat(currentGAMER.innerHTML);
          let phasemath = phaseChange - transferTokenAmount.value;
          currentGAMER.innerHTML = phasemath;
          transferTokenAmount.value = "";
          transferTokenAccount.value = "";
          transferTokenName.value = "";
          transferForm.className = "hide";
          userAlert.innerHTML = "Transfer Sent!";
        }

        if (transferTokenName.value == "GTPC") {
          let currentGAMER = document.getElementById("GTPC-change");
          let phaseChange = parseFloat(currentGAMER.innerHTML);
          let phasemath = phaseChange - transferTokenAmount.value;
          currentGAMER.innerHTML = phasemath;
          transferTokenAmount.value = "";
          transferTokenAccount.value = "";
          transferTokenName.value = "";
          transferForm.className = "hide";
          userAlert.innerHTML = "Transfer Sent!";
        }

        if (transferTokenName.value == "ECLIPSE") {
          let currentGAMER = document.getElementById("ECLIPSE-change");
          let phaseChange = parseFloat(currentGAMER.innerHTML);
          let phasemath = phaseChange - transferTokenAmount.value;
          currentGAMER.innerHTML = phasemath;
          transferTokenAmount.value = "";
          transferTokenAccount.value = "";
          transferTokenName.value = "";
          transferForm.className = "hide";
          userAlert.innerHTML = "Transfer Sent!";
        }

        if (transferTokenName.value == "PINN") {
          let currentGAMER = document.getElementById("PINN-change");
          let phaseChange = parseFloat(currentGAMER.innerHTML);
          let phasemath = phaseChange - transferTokenAmount.value;
          currentGAMER.innerHTML = phasemath;
          transferTokenAmount.value = "";
          transferTokenAccount.value = "";
          transferTokenName.value = "";
          transferForm.className = "hide";
          userAlert.innerHTML = "Transfer Sent!";
        }

        if (transferTokenName.value == "DragonToken") {
          let currentGAMER = document.getElementById("DragonToken-change");
          let phaseChange = parseFloat(currentGAMER.innerHTML);
          let phasemath = phaseChange - transferTokenAmount.value;
          currentGAMER.innerHTML = phasemath;
          transferTokenAmount.value = "";
          transferTokenAccount.value = "";
          transferTokenName.value = "";
          transferForm.className = "hide";
          userAlert.innerHTML = "Transfer Sent!";
        }

        if (transferTokenName.value == "DarkMark") {
          let currentGAMER = document.getElementById("DARKMARK-change");
          let phaseChange = parseFloat(currentGAMER.innerHTML);
          let phasemath = phaseChange - transferTokenAmount.value;
          currentGAMER.innerHTML = phasemath;
          transferTokenAmount.value = "";
          transferTokenAccount.value = "";
          transferTokenName.value = "";
          transferForm.className = "hide";
          userAlert.innerHTML = "Transfer Sent!";
        }

        if (transferTokenName.value == "Candys") {
          let currentGAMER = document.getElementById("CANDYS-change");
          let phaseChange = parseFloat(currentGAMER.innerHTML);
          let phasemath = phaseChange - transferTokenAmount.value;
          currentGAMER.innerHTML = phasemath;
          transferTokenAmount.value = "";
          transferTokenAccount.value = "";
          transferTokenName.value = "";
          transferForm.className = "hide";
          userAlert.innerHTML = "Transfer Sent!";
        }
        hidebank();

        let removetCost = 5;
        let tmath = tCost - 5;
        currenteggs.innerHTML = tmath;
      }
    }
  }

  pullENERGY();
}

function hidebank() {
  if (piggybank.className == "piggybank") {
    piggybank.className = "hide";
  } else {
    piggybank.className = "piggybank";
  }
}

function cancelTransfer() {
  transferForm.className = "hide";
  piggybank.className = "piggybank";
}

function chekIncomingTransfers() {
  let mylist = document.getElementById("ul");
  let listcount = document.getElementsByTagName("li");
  let numb = listcount.length;
  let targetWords = [
    "GAMER",
    "ECLIPSE",
    "DOOBETTER",
    "GTPC",
    "PINN",
    "WTV",
    "DARKMARK",
    "DRAGONTOKEN",
    "CANDYS",
  ];
  let userAccountContent = userAccount.innerHTML;
  let targetWordss = [
    "Gamer",
    "Eclipse",
    "DooBetter",
    "Gtpc",
    "Pinn",
    "Wtv",
    "DarkMark",
    "DragonToken",
    "Candys",
  ];
  let calc = "";

  for (let j = 0; j < targetWords.length; j++) {
    let concatenatedString = userAccountContent + targetWords[j];
    for (let i = 0; i < listcount.length; i++) {
      let listItemText = listcount[i].textContent;
      if (listItemText.includes(concatenatedString)) {
        let newAlert = listItemText.replace(
          "Transfer:" + userAccount.innerHTML + targetWords[j],
          ""
        );
        let tack = parseFloat(newAlert);
        let piggy = targetWords[j] + "-change";
        let fetchpiggy = document.getElementById(piggy);
        let targetpiggy = parseFloat(fetchpiggy.innerHTML);
        let piggyMath = tack + targetpiggy;
        fetchpiggy.innerHTML = piggyMath;

        //
        function deductrequests() {
          for (let j = 0; j < targetWordss.length; j++) {
            let concatenatedStrings =
              userAccountContent + "Request:" + targetWordss[j];
            for (let i = 0; i < listcount.length; i++) {
              let listItemText = listcount[i].textContent;
              if (listItemText.includes(concatenatedStrings)) {
                let newAlert = listItemText.replace(
                  userAccount.innerHTML + "Request:" + targetWordss[j] + ":",
                  ""
                );

                let tack = parseFloat(newAlert);
                let piggy = targetWords[j] + "-change";
                let fetchpiggy = document.getElementById(piggy);
                let targetpiggy = parseFloat(fetchpiggy.innerHTML);
                let piggyMath = targetpiggy - tack;

                if (piggyMath == 0 || piggyMath < 0) {
                  fetchpiggy.innerHTML = 0;
                } else {
                  fetchpiggy.innerHTML = piggyMath;
                  let openPIGGY = document.getElementById("farming-rewards");
                  openPIGGY.className = "game-article";
                }
              } else {
                // Open Tabs
                let openPIGGY = document.getElementById("farming-rewards");
                openPIGGY.className = "game-article";
              }
            }
          }
        }
        deductrequests();
        //
      }
    }
  }
  getMyEggs();
}

function getMyEggs() {
  let targetWordss = userAccount.innerHTML;
  const newCurrent = document.getElementById("current-eggs");
  newCurrent.id = "player-eggs";
  let playerEGGS = document.getElementById("player-eggs");
  let piggy = 0;
  let mylist = document.getElementById("ul");
  let listcount = document.getElementsByTagName("li");

  let concatenatedStrings = targetWordss;
  for (let i = 0; i < listcount.length; i++) {
    let listItemText = listcount[i].textContent;
    if (listItemText.includes(concatenatedStrings)) {
      let targetpiggy = piggy + 1;
      let piggyMath = targetpiggy;
      piggy = piggyMath;
    }
  }
  if (piggy > 25 || piggy == 25) {
    let yourHatchedEggs = document.getElementById("yourHatched-eggs");
    yourHatchedEggs.style = "color: gold; font-size: 15px;";
    playerEGGS.innerHTML = piggy;
    yourHatchedEggs.innerHTML =
      "Your Magic Chicken Started You With: " + piggy + " Eggs" + "<br>";
    let gotitText = document.getElementById("gotit-text");
    gotitText.innerHTML = "We Found Your Account! <br>";
    gotIt();
  } else {
    if (piggy < 25) {
      playerEGGS.innerHTML = "25";
      let yourHatchedEggs = document.getElementById("yourHatched-eggs");
      yourHatchedEggs.style = "color: gold; font-size: 15px;";
      yourHatchedEggs.innerHTML =
        "Your Magic Chicken Only Found: " + "25" + " Eggs" + "<br>";
      let gotitText = document.getElementById("gotit-text");
      gotitText.innerHTML = "We Found Your Account! <br>";
      gotIt();
    } else {
      if (piggy > 0 || piggy == 0) {
        playerEGGS.innerHTML = "15";
        let yourHatchedEggs = document.getElementById("yourHatched-eggs");
        yourHatchedEggs.style = "color: gold; font-size: 15px;";
        yourHatchedEggs.innerHTML =
          "You Start The Game With: " + "25" + " Eggs" + "<br>";
      }
    }
  }
}
