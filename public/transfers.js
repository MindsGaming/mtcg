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
    if (transferTokenAmount.value < 5) {
      userAlert.innerHTML = "Transfer 5 or More";
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
      if (piggy == 0) {
      } else {
        playerEGGS.innerHTML = "25";
        let yourHatchedEggs = document.getElementById("yourHatched-eggs");
        yourHatchedEggs.style = "color: gold; font-size: 15px;";
        yourHatchedEggs.innerHTML =
          "Your Magic Chicken Found: " + "25" + " Eggs" + "<br>";
      }
    } else {
      if (piggy == 0) {
        playerEGGS.innerHTML = "25";
        let yourHatchedEggs = document.getElementById("yourHatched-eggs");
        yourHatchedEggs.style = "color: gold; font-size: 15px;";
        yourHatchedEggs.innerHTML =
          "You Start The Game With: " + "25" + " Eggs" + "<br>";
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

      let yourHatchedEggs = document.getElementById("yourHatched-eggs");
      yourHatchedEggs.style = "color: gold; font-size: 15px;";
      let refferalPhase = parseFloat(playerEGGS.innerHTML);
      let rMath = refferalPhase + piggy;
      playerEGGS.innerHTML = rMath;
      yourHatchedEggs.innerHTML =
        "Your Magic Chicken Started You With: " + "25" + " Eggs" + "<br>";
      let gotitText = document.getElementById("gotit-text");
      gotitText.innerHTML =
        "Your Refferal Gave You: " +
        piggy +
        " Eggs" +
        "<br> You Start With: " +
        rMath +
        " Eggs <br>";
    }
  }
  getMyImageEggs();
}

function openRefferal() {
  const openRefferal = document.getElementById("my-refferal");

  if (openRefferal.className == "hide") {
    openRefferal.className = "display";
    let eggimageform = document.getElementById("eggimage-form");
    eggimageform.className = "game-article";
  } else {
    openRefferal.className = "hide";
  }
}

////Image Transfers

function sendImageTransfer() {
  let tCost = parseFloat(currenteggs.innerHTML);

  if (tCost < 5) {
    userAlert.innerHTML = "5 Eggs Reqired";
  } else {
    const imageURL = document.getElementById("eggform-image");
    const imageReciver = document.getElementById("transfer-myeggimage");

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
      dream: "Transfer:" + imageReciver.value + imageURL.value,
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
    dreams.push("Transfer:" + imageReciver.value + imageURL.value);
    appendNewDream("Transfer:" + imageReciver.value + imageURL.value);
    imageURL.value = "";
    imageReciver.value = "";
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

          /*
          //transfer Image
          function transferMyImage() {
            let textmerge = placeholder.id;
            const image = document.getElementById(textmerge);
            let imageURL = image.title;

            const openForm = document.getElementById("eggimage-form");
            openForm.className = "display";
            let eggformImage = document.getElementById("eggform-image");
            eggformImage.value = imageURL;
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
          */
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
        createDreamblock();
      } else {
        userAlert.innerHTML = acceptedImageExtensions + " Only";
      }
    }
  }
}

// Define transferMyImage and myImageDownloads functions outside of getMyImageEggs
function transferMyImage(placeholderId) {
  let textmerge = placeholderId;
  const image = document.getElementById(textmerge);
  let imageURL = image.title;

  const openForm = document.getElementById("eggimage-form");
  openForm.className = "display";
  let eggformImage = document.getElementById("eggform-image");
  eggformImage.value = imageURL;
}

function myImageDownloads() {
  let textmerge = this.parentElement.id;
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
  let numb = dreamsList.getElementsByTagName("li").length;
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
          addedImages.push(numb + "?");

          let placeholderId = numb + "?";
          let placeholder = document.createElement("div");
          placeholder.id = placeholderId;
          document.getElementById("myegg-images").appendChild(placeholder);

          const buildWrapIMG = document.createElement("img");
          buildWrapIMG.src = extractedWord;
          buildWrapIMG.style.width = "60px";
          buildWrapIMG.style.height = "60px";
          buildWrapIMG.id = placeholderId;
          buildWrapIMG.addEventListener("click", myImageDownloads);
          placeholder.appendChild(buildWrapIMG);

          const buildImgButton = document.createElement("button");
          buildImgButton.className = "piggybuttons";
          buildImgButton.innerHTML = "Transfer";
          buildImgButton.addEventListener("click", function () {
            transferMyImage(placeholderId);
          });
          placeholder.appendChild(buildImgButton);

          let eggimageform = document.getElementById("farmerimages");
          eggimageform.className = "game-article";
        }
      }
    }
  }
}
