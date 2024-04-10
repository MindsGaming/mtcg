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
        openPIGGY.className = "game-article";

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
      if (piggy == 0) {
      } else {
        let yourHatchedEggs = document.getElementById("yourHatched-eggs");
        yourHatchedEggs.style = "color: gold; font-size: 15px;";
        playerEGGS.innerHTML = piggy + 24;
        yourHatchedEggs.innerHTML =
          "Your Magic Chicken Started You With: " +
          playerEGGS.innerHTML +
          " Eggs" +
          "<br>";
        let gotitText = document.getElementById("gotit-text");
        gotitText.innerHTML =
          "You Start The Game With 25 Eggs, <br> When You Hatch 25, We Will Take The Starting Eggs back :) <br>";
        gotIt();
        PlayChicken();
        createDreamblock();
      }
    }
  }
  getMyRefferal();
}

function getMyRefferal() {
  let refferal = document.getElementById("my-refferal");

  if (refferal.value == "") {
  } else {
    if (refferal.value == userAccount.innerHTML) {
      userAlert.innerHTML = "You Can't Refer Yourself :(";
    } else {
      let targetWordss = refferal.value;
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

      let refferalPhase = parseFloat(playerEGGS.innerHTML);
      let rMath = refferalPhase + piggy;
      playerEGGS.innerHTML = rMath;

      let tackRefferal = refferalPhase - 2;
      let magicChikenstring =
        "Your Magic Chicken Found: " + tackRefferal + " Eggs" + "<br>";
      let gotitText = document.getElementById("gotit-text");
      gotitText.innerHTML =
        "Your Refferal Gave You: " +
        piggy +
        " Eggs <br>" +
        magicChikenstring +
        "<br> You Start With: " +
        rMath +
        " Eggs <br>";

      let farmingrewards = document.getElementById("farming-rewards");
      farmingrewards.className = "game-article";
      refferal.value = "";
    }
  }
  getMyImageEggs();
}

function openRefferal() {
  const openRefferal = document.getElementById("my-refferal");

  if (openRefferal.className == "hide") {
    openRefferal.className = "display";
  } else {
    openRefferal.className = "hide";
  }
}

////Image Transfers
function sendImageTransfer() {
  let tCost = parseFloat(currenteggs.innerHTML);

  if (tCost < 1) {
    userAlert.innerHTML = "5 Eggs Reqired";
  } else {
    let imageURL = "";
    let goingTo = "";

    if (imageURL.value == "") {
      imageURL = document.getElementById("eggform-music");
    } else {
      imageURL = document.getElementById("eggform-image");
    }
    if (goingTo.value == "") {
      goingTo = document.getElementById("transfer-mymusicimage");
    } else {
      goingTo = document.getElementById("transfer-myeggimage");
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
      dream: "Transfer:" + goingTo.value + imageURL.value,
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
    dreams.push("Transfer:" + goingTo.value + imageURL.value);
    appendNewDream("Transfer:" + goingTo.value + imageURL.value);
    imageURL.value = "";
    goingTo.value = "";
    cancelImageTransfer();
    createDreamblock();
    userAlert.innerHTML = "You Sent An Image Egg! 🎉";
  }
}

function wrapImage() {
  if (userAccount.innerHTML == "Login") {
    userAlert.innerHTML = "Login To Play";
  } else {
    if (POINTS.innerHTML < 1000) {
      userAlert.innerHTML = "Not Enough Yolks";
    } else {
      let dreamCatcher = document.getElementsByTagName("li");
      let dreamvalue = dreamCatcher.length - 1;
      let dreamID = document.getElementById(dreamvalue);
      let dreamURL = document.getElementById("image-wrapper");

      // Extract the file extension from the URL
      let url = dreamURL.value;
      const extension = url.substring(url.lastIndexOf("."));
      const acceptedImageExtensions = [
        ".png ",
        ".jpg ",
        ".gif ",
        ".jpeg ",
        "webp ",
      ];
      if (
        extension == ".png" ||
        extension == ".jpg" ||
        extension == ".gif" ||
        extension == ".jpeg" ||
        extension == ".jpeg" ||
        extension == ".webp"
      ) {
        const appendNewDreamss = (dream) => {
          const newListItem = document.createElement("a");
          newListItem.innerText = dreamURL.value;
          newListItem.title = "Dream Block";
          newListItem.id = dreamvalue;
          newListItem.value = dreamURL.value;
          newListItem.className = "hide";
          newListItem.href = dreamURL.value;
          dreamsList.appendChild(newListItem);
        };

        const data = {
          dream: userAccount.innerHTML + dreamURL.value,
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

        //Transfer
        function transferImageEgg() {
          const theWrapper = document.getElementById("image-wrapper");
          const placeholder = document.createElement("label");
          let wrapperString = theWrapper.value;
          placeholder.id = dreamvalue + "?";
          placeholder.title = wrapperString;
          document.getElementById("myegg-images").appendChild(placeholder);
          const buildWrapIMG = document.createElement("img");
          buildWrapIMG.src = theWrapper.value;
          buildWrapIMG.style = "width: 60px; height: 60px;";
          buildWrapIMG.addEventListener("click", myImageDownloads);
          document.getElementById(placeholder.id).appendChild(buildWrapIMG);
          const buildImgButton = document.createElement("button");
          buildImgButton.className = "piggybuttons";
          buildImgButton.innerHTML = "Transfer";
          buildImgButton.addEventListener("click", transferMyImage);
          document.getElementById(placeholder.id).appendChild(buildImgButton);

          //transfer Image
          let imageSRC = dreamURL.value;

          function transferMyImage() {
            const buildImgButton = document.createElement("button");
            buildImgButton.className = "piggybuttons";
            buildImgButton.innerHTML = "Transfer";

            const openForm = document.getElementById("eggimage-form");
            openForm.className = "display";
            let eggformImage = document.getElementById("eggform-image");
            eggformImage.value = imageSRC.toString();

            let previewIMG = document.getElementById("eggimageform-preview");
            previewIMG.src = imageSRC.toString();

            let hideImages = document.getElementById("myegg-images");
            hideImages.className = "hide";

            let closeVideos = document.getElementById("myegg-music");
            closeVideos.className = "hide";
          }

          // self Downloads
          function myImageDownloads() {
            let textmerge = placeholder.id;
            const image = document.getElementById(textmerge);
            let imageURL = image.title;

            function build(blob) {
              const link = document.createElement("a");
              link.href = URL.createObjectURL(blob);
              link.download = "image.jpg";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }

            fetch(imageURL)
              .then((response) => response.blob())
              .then(build);
          }
        }
        transferImageEgg();
        let yourdisplay = document.getElementById("farmerimages");
        yourdisplay.className = "game-article";
        let createIMG = document.createElement("img");
        createIMG.src = dreamURL.value;
        createIMG.className = "creator-wrap";
        document.getElementById("wraped-images").appendChild(createIMG);
        createIMG.id = dreamvalue + "‽";
        // Add the dream value to the list
        userAlert.innerHTML =
          "You Wrapped Block #" +
          dreamCatcher.length +
          " with: " +
          dreamURL.value;
        const checkPOINTS = parseFloat(POINTS.innerHTML);
        const removePOINTS = 1000;
        const EGGmath = Math.round(checkPOINTS - removePOINTS);
        POINTS.innerHTML = EGGmath;
        dreams.push(dreamURL.value);
        appendNewDream(dreamURL.value);
        dreamURL.value = "";
      } else {
        userAlert.innerHTML = acceptedImageExtensions + " Only";
      }
    }
  }
}

function downloadImg() {
  const request = document.getElementById("img-grabber");

  if (request.value == "") {
  } else {
    let requestIMG = request.value;
    const image = document.getElementById(requestIMG);
    let imageURL = image.innerHTML;

    function build(blob) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    fetch(imageURL)
      .then((response) => response.blob())
      .then(build);

    request.value = "";
  }
}

function cancelImageTransfer() {
  let closeImgForm = document.getElementById("eggimage-form");

  if (closeImgForm.className == "display") {
    closeImgForm.className = "hide";
    let hideImages = document.getElementById("myegg-images");
    hideImages.className = "display";
  } else {
    closeImgForm.className = "display";
  }
}

function hideEggImages() {
  let hiding = document.getElementById("myegg-images");

  if (hiding.className == "") {
    hiding.className = "hide";
  } else {
    hiding.className = "";
  }
}

let hideEggImageEye = document.getElementById("eggimage-eye");
hideEggImageEye.addEventListener("click", hideEggImages);

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

function transferMyImage(imageSrc) {
  const openForm = document.getElementById("eggimage-form");
  openForm.className = "display";
  let eggformImage = document.getElementById("eggform-image");
  eggformImage.value = imageSrc;

  let hideImages = document.getElementById("myegg-images");
  hideImages.className = "hide";

  let previewIMG = document.getElementById("eggimageform-preview");
  previewIMG.src = imageSrc;
  previewIMG.style = "width: 32px; height: 32px; border-raduis: 50%;";

  let closeVideos = document.getElementById("myegg-music");
  closeVideos.className = "hide";
}

function myImageDownloads(imageSrc) {
  function build(blob) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  fetch(imageSrc)
    .then((response) => response.blob())
    .then(build);
}

// Music
let musicURL = "";
function wrapMusic() {
  if (userAccount.innerHTML == "Login") {
    userAlert.innerHTML = "Login To Play";
  } else {
    if (POINTS.innerHTML < 1) {
      userAlert.innerHTML = "Not Enough Yolks";
    } else {
      let dreamCatcher = document.getElementsByTagName("li");
      let dreamvalue = dreamCatcher.length - 1;
      let dreamID = document.getElementById(dreamvalue);
      let dreamURL = document.getElementById("music-wrapper");
      sources = dreamvalue.toString();

      // Extract the file extension from the URL
      let url = dreamURL.value;
      musicURL = url.toString();
      const Musicextension = url.substring(url.lastIndexOf("."));
      const acceptedImageExtensions = [".ogg ", ".mp3 ", ".wav "];

      if (
        Musicextension == ".ogg" ||
        Musicextension == ".mp3" ||
        Musicextension == ".wav"
      ) {
        const appendNewDreamss = (dream) => {
          const newListItem = document.createElement("a");
          newListItem.innerText = dreamURL.value;
          newListItem.title = "Dream Block";
          newListItem.id = dreamvalue;
          newListItem.value = dreamURL.value;
          newListItem.className = "hide";
          newListItem.href = dreamURL.value;
          dreamsList.appendChild(newListItem);
        };

        const data = {
          dream: userAccount.innerHTML + dreamURL.value,
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

        const pushpreview = document.getElementById("sourceOne");
        const pushpreviewTwo = document.getElementById("sourceTwo");
        let forceSave = dreamURL.value;
        pushpreview.src = forceSave.toString();
        pushpreviewTwo.src = forceSave.toString();
        const embedpreview = document.getElementById("audio-float");
        let embed = embedpreview.innerHTML;
        const createLabel = document.createElement("label");
        createLabel.innerHTML = embed;
        createLabel.className = "audio-file";
        const layerEmbed = document.getElementById("myegg-music");
        layerEmbed.appendChild(createLabel);
        const buildImgButton = document.createElement("button");
        buildImgButton.className = "piggybuttons";
        buildImgButton.innerHTML = "Transfer";
        buildImgButton.addEventListener("click", transferMyMusic);
        createLabel.appendChild(buildImgButton);

        let eggimageform = document.getElementById("farmermusic");
        eggimageform.className = "game-article";
        // Add the dream value to the list
        userAlert.innerHTML =
          "You Wrapped Block #" +
          dreamCatcher.length +
          " with: " +
          dreamURL.value;
        const checkPOINTS = parseFloat(POINTS.innerHTML);
        const removePOINTS = 1000;
        const EGGmath = Math.round(checkPOINTS - removePOINTS);
        POINTS.innerHTML = EGGmath;
        dreams.push(dreamURL.value);
        appendNewDream(dreamURL.value);
        dreamURL.value = "";
      } else {
        userAlert.innerHTML = acceptedImageExtensions + " Only";
      }
    }
  }
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
          }
        }
      }
    }
  }
}

function transferMyMusic(musicURL) {
  const openForm = document.getElementById("eggmusic-form");
  openForm.className = "display";

  let eggformImage = document.getElementById("eggform-music");
  eggformImage.value = musicURL;

  let previewIMG = document.getElementById("eggimageform-preview");
  previewIMG.className = "hide";
  previewIMG.style.width = "32px";
  previewIMG.style.height = "32px";
  previewIMG.style.borderRadius = "50%";

  let closeVideos = document.getElementById("myegg-music");
  closeVideos.className = "hide";

  let dreamCatcher = document.getElementsByTagName("li");
  let replaceviewid = "sourceOne" + sources;
  let replaceviewidTwo = "sourceTwo" + sources;
  let replaceView = document.getElementById(replaceviewid);
  let replaceViewtwo = document.getElementById(replaceviewidTwo);
  replaceView.src = musicURL;
  replaceViewtwo.src = musicURL;

  let openAudio = document.getElementById("audio-float");
  openAudio.className = "display";
}

function cancelMusicTransfer() {
  let closeImgForm = document.getElementById("eggmusic-form");

  if (closeImgForm.className == "display") {
    closeImgForm.className = "hide";
    let hideImages = document.getElementById("myegg-music");
    hideImages.className = "display";
  } else {
    closeImgForm.className = "display";
  }
}
