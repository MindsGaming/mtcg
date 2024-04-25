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
  transferForm.focus();
}

function sendWtvTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "WTV";
  transferTokenName.title = "WTV";
  transferTokenName.value = "WTV";
  piggybank.className = "hide";
  transferForm.focus();
}

function sendDoobetterTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "DooBetter";
  transferTokenName.title = "DooBetter";
  transferTokenName.value = "DooBetter";
  piggybank.className = "hide";
  transferForm.focus();
}

function sendEclipseTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "ECLIPSE";
  transferTokenName.title = "ECLIPSE";
  transferTokenName.value = "ECLIPSE";
  piggybank.className = "hide";
  transferForm.focus();
}

function sendGtpcTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "GTPC";
  transferTokenName.title = "GTPC";
  transferTokenName.value = "GTPC";
  piggybank.className = "hide";
  transferForm.focus();
  transferForm.focus();
}

function sendPinnTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "PINN";
  transferTokenName.title = "PINN";
  transferTokenName.value = "PINN";
  piggybank.className = "hide";
  transferForm.focus();
}

function sendDragonTokenTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "DragonToken";
  transferTokenName.title = "DragonToken";
  transferTokenName.value = "DragonToken";
  piggybank.className = "hide";
  transferForm.focus();
}

function sendDarkmarkTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "DarkMark";
  transferTokenName.title = "DarkMark";
  transferTokenName.value = "DarkMark";
  piggybank.className = "hide";
  transferForm.focus();
}

function sendCandysTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "Candys";
  transferTokenName.title = "Candys";
  transferTokenName.value = "Candys";
  piggybank.className = "hide";
  transferForm.focus();
}

function sendDWMWTransfer() {
  transferForm.className = "display";
  getTransferToken.innerHTML = "DWMW";
  transferTokenName.title = "DWMW";
  transferTokenName.value = "DWMW";
  piggybank.className = "hide";
  transferForm.focus();
}

function sendTransfer() {
  if (
    transferTokenAccount.value == "" ||
    transferTokenName.value == "" ||
    transferTokenAmount.value == ""
  ) {
    userAlert.innerHTML = "Complete The Form";
  } else {
    if (transferTokenAmount.value < 5) {
      userAlert.innerHTML = "Transfer 5 or More";
    } else {
      let catchOverdraft = transferTokenName.value + "-change";
      let draftView = document.getElementById(catchOverdraft);
      let phaseView = parseFloat(draftView.innerHTML);
      let phaseRequesting = transferTokenAmount.value;
      let draftOutcome = phaseView - phaseRequesting;
      if (draftOutcome < 0) {
        userAlert.innerHTML = "More Than Current Stock";
      } else {
        catchOverdraft = "";
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

          let data = "";

          data = {
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

          function touchback() {
            data = {
              dream:
                "Sent:" +
                userAccount.innerHTML +
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
          }
          touchback();

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

          let removetCost = 5;
          let tmath = tCost - 5;
          currenteggs.innerHTML = tmath;
        }
      }
    }
  }
  hidebank();
  pullENERGY();
}

function cancelTransfer() {
  let transformForm = document.getElementById("transfer-form");

  if (transformForm.className == "display") {
    transformForm.className = "hide";
    piggybank.className = "piggybank";
  } else {
    if (transformForm.className == "hide") {
      transformForm.className = "display";
      transformForm.focus();
    }
  }
}

function hidebank() {
  if (piggybank.className == "piggybank") {
    piggybank.className = "hide";
  } else {
    piggybank.className = "piggybank";
  }
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

  let calc = "";

  for (let j = 0; j < targetWords.length; j++) {
    let concatenatedString = "Transfer:" + userAccountContent + targetWords[j];
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
        if (piggyMath == 0 || piggyMath < 0) {
          fetchpiggy.innerHTML = 0;
        } else {
          fetchpiggy.innerHTML = piggyMath;
          let openPIGGY = document.getElementById("farming-rewards");
          openPIGGY.className = "game-article";
        }
      }
    }
  }
  checkSentTransfers();
}

function checkSentTransfers() {
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
  let calc = "";
  for (let j = 0; j < targetWords.length; j++) {
    let concatenatedString = "Sent:" + userAccountContent + targetWords[j];
    for (let i = 0; i < listcount.length; i++) {
      let listItemText = listcount[i].textContent;
      if (listItemText.includes(concatenatedString)) {
        let newAlert = listItemText.replace(
          "Sent:" + userAccount.innerHTML + targetWords[j],
          ""
        );

        let tack = parseFloat(newAlert);
        let piggy = targetWords[j] + "-change";
        let fetchpiggy = document.getElementById(piggy);
        let targetpiggy = parseFloat(fetchpiggy.innerHTML);
        let piggyMath = targetpiggy - tack;
        fetchpiggy.innerHTML = piggyMath;

        let openPIGGY = document.getElementById("farming-rewards");
        if (openPIGGY) {
          openPIGGY.className = "game-article";
        }

        if (piggyMath == 0 || piggyMath < 0) {
          fetchpiggy.innerHTML = 0;
        } else {
          fetchpiggy.innerHTML = piggyMath;

          let openPIGGY = document.getElementById("farming-rewards");

          if (openPIGGY) {
            openPIGGY.className = "game-article";
          }
        }
      }
    }
  }
  getMyImageEggs();
}

////Image Transfers
function sendImageTransfer() {
  let tCost = parseFloat(currenteggs.innerHTML);

  if (tCost < 1) {
    userAlert.innerHTML = "5 Eggs Reqired";
  } else {
    let imageURL = document.getElementById("eggform-image");
    let musicURL = document.getElementById("eggform-music");
    let imageGoing = document.getElementById("transfer-myeggimage");
    let musicGoing = document.getElementById("transfer-mymusicimage");

    if (imageURL.value == "") {
      imageURL.value = musicURL.value;
    } else {
      imageURL.value = imageURL.value;
    }
    if (imageGoing.value == "") {
      imageGoing.value = musicGoing.value;
    } else {
      imageGoing.value = imageGoing.value;
    }

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
      dream: "Transfer:" + imageGoing.value + imageURL.value,
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

    let deductEggs = document.getElementById("player-eggs");
    let removetack = parseFloat(deductEggs.innerHTML);
    let transferCost = 5;
    let transferMath = removetack - transferCost;
    let mymusicTransfer = document.getElementById("transfer-mymusicimage");
    mymusicTransfer.value = "";
    deductEggs.innerHTML = transferMath;

    // Add the dream value to the list
    dreams.push("Transfer:" + imageGoing.value + imageURL.value);
    appendNewDream("Transfer:" + imageGoing.value + imageURL.value);
    imageURL.value = "";
    imageGoing.value = "";
    cancelImageTransfer();
    createDreamblock();
    userAlert.innerHTML = "You Sent An Image Egg! 🎉";
  }
}

let addedImages = [];

function getMyImageEggs() {
  let userAccount = document.getElementById("user-account");
  let userAccountContent = userAccount.innerHTML;
  let listItems = document.getElementsByTagName("li");
  let targetWords = ["http", "https", "HTTP", "HTTPS"];

  for (let j = 0; j < targetWords.length; j++) {
    let keyword = targetWords[j];
    for (let i = 0; i < listItems.length; i++) {
      let listItemText = listItems[i].textContent;
      if (listItemText.includes(userAccountContent + keyword)) {
        let startIndex = listItemText.indexOf(userAccountContent + keyword);
        let extractedWord = listItemText.substring(
          startIndex + userAccountContent.length
        );

        if (!addedImages.includes(extractedWord)) {
          addedImages.push(extractedWord);

          let extensionVideo = extractedWord.substring(
            extractedWord.lastIndexOf(".")
          );
          if (
            extensionVideo == ".mp3" ||
            extensionVideo == ".ogg" ||
            extensionVideo == ".wav"
          ) {
          } else {
            let placeholderId = "placeholder-" + i;
            let placeholder = document.createElement("div");
            placeholder.id = placeholderId;
            document.getElementById("myegg-images").appendChild(placeholder);

            const buildWrapIMG = document.createElement("img");
            buildWrapIMG.src = extractedWord;
            buildWrapIMG.style.width = "60px";
            buildWrapIMG.style.height = "60px";
            buildWrapIMG.id = "image-" + i;
            buildWrapIMG.addEventListener("click", function () {
              myImageDownloads(extractedWord);
            });
            placeholder.appendChild(buildWrapIMG);

            const buildImgButton = document.createElement("button");
            buildImgButton.className = "piggybuttons";
            buildImgButton.innerHTML = "Transfer";
            buildImgButton.addEventListener("click", function () {
              transferMyImage(extractedWord);
            });
            placeholder.appendChild(buildImgButton);

            let eggimageform = document.getElementById("farmerimages");
            eggimageform.className = "game-article";
          }
        }
      }
    }
  }
  getMyMusicEggs();
}

let addedMusic = [];
let sources = "";
function getMyMusicEggs() {
  let userAccount = document.getElementById("user-account");
  let userAccountContent = userAccount.innerHTML;
  let listItems = document.getElementsByTagName("li");
  let targetWords = ["http", "https", "HTTP", "HTTPS"];

  for (let j = 0; j < targetWords.length; j++) {
    let keyword = targetWords[j];
    for (let i = 0; i < listItems.length; i++) {
      let listItemText = listItems[i].textContent;
      if (listItemText.includes(userAccountContent + keyword)) {
        let startIndex = listItemText.indexOf(userAccountContent + keyword);
        let extractedWord = listItemText.substring(
          startIndex + userAccountContent.length
        );

        if (!addedMusic.includes(extractedWord)) {
          addedMusic.push(extractedWord);

          let musicURL = extractedWord.substring(
            extractedWord.lastIndexOf(".")
          );

          if (musicURL == ".ogg" || musicURL == ".mp3" || musicURL == ".wav") {
            let placeholderId = "placeholder-" + i;
            let placeholder = document.createElement("div");
            placeholder.id = placeholderId;
            document.getElementById("myegg-music").appendChild(placeholder);

            const pushpreview = document.getElementById("sourceOne");
            const pushpreviewTwo = document.getElementById("sourceTwo");

            pushpreview.src = extractedWord;
            pushpreview.id = "sourceOne" + listItems.length;
            pushpreviewTwo.src = extractedWord;
            pushpreviewTwo.id = "sourceTwo" + listItems.length;

            sources = listItems.length;

            const embedpreview = document.getElementById("audio-float");
            let embed = embedpreview.innerHTML;
            const createLabel = document.createElement("label");
            createLabel.innerHTML = embed;
            createLabel.id = listItems.length + "?";
            const layerEmbed = document.getElementById("myegg-music");
            layerEmbed.className = "myegg-music";
            embedpreview.className = "";
            layerEmbed.appendChild(createLabel);

            const buildImgButton = document.createElement("button");
            buildImgButton.className = "piggybuttons";
            buildImgButton.innerHTML = "Transfer";
            buildImgButton.addEventListener("click", function () {
              transferMyMusic(extractedWord);
            });
            placeholder.appendChild(buildImgButton);

            let eggimageform = document.getElementById("farmermusic");
            eggimageform.className = "game-article";
            musicURL = extractedWord;
            pushpreview.id = "sourceOne";
            pushpreviewTwo.id = "sourceTwo";
          }
        }
      }
    }
  }
}
