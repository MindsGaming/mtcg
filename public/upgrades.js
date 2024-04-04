function farmerChickenSupply() {
  let yolkCheck = document.getElementById("hatched-points");
  let checking = parseFloat(yolkCheck.innerHTML);
  var farmerstage = document.getElementById("farmer-stage");

  if (checking < 10000) {
    userAlert.innerHTML = "Not Enough Yolks";
  } else {
    if (farmerstage.title == "FARM") {
      userAlert.innerHTML = "You Need A Castle";
    } else {
      let upgradeFarm = checking - 10000;
      yolkCheck.innerHTML = upgradeFarm;

      const upgrade = document.getElementById("supplyfeedBTN");
      upgrade.className = "meterbuttons";

      let stockSupply = document.getElementById("farmer-feed");

      let currentSupply = parseFloat(stockSupply.value);
      let addSupply = Math.floor(Math.random() * 50);

      let supplyMath = currentSupply + addSupply;

      if (supplyMath > 50) {
        stockSupply.value = 50;
      } else {
        stockSupply.value = supplyMath;
      }
    }
  }
}

function supplyFeed() {
  const feedmyChicken = document.getElementById("supplyfeedBTN");
  feedmyChicken.className = "hide";
  let gatherSeeds = document.getElementById("hatched-points");
  let gatherCost = 1;
  let gather = parseFloat(gatherSeeds.innerHTML);

  if (gather < 10000) {
    userAlert.innerHTML = "Not Enough Yolks";
  } else {
    let gathering = gather - 10000;
    gatherSeeds.innerHTML = gathering;

    let stockSupply = document.getElementById("farmer-feed");
    let currentSupply = parseFloat(stockSupply.value);
    let addSupply = Math.floor(Math.random() * 50);

    let supplyMath = currentSupply + addSupply;

    if (supplyMath > 50) {
      stockSupply.value = 50;
    } else {
      stockSupply.value = supplyMath;
    }
  }

  function togglefeedbtn() {
    if (feedmyChicken.className == "meterbuttons") {
      feedmyChicken.className = "hide";
    } else if (feedmyChicken.className == "hide") {
      feedmyChicken.className = "meterbuttons";
    }
  }
  setTimeout(togglefeedbtn, 5000);
}

function farmerStages() {
  var farmerstage = document.getElementById("farmer-stage");
  var levelText = document.getElementById("stage-text");
  var farmerstageBracket = document.getElementById("farmerstage-bracket");
  let yolkCheck = document.getElementById("hatched-points");
  let checking = parseFloat(yolkCheck.innerHTML);

  if (checking < 10000) {
    userAlert.innerHTML = "Not Enough Yolks";
  } else {
    if (farmerstage.title == "FARM") {
      let upgradeFarm = checking - 10000;
      yolkCheck.innerHTML = upgradeFarm;

      farmerstage.title = "CASTLE";
      levelText.innerHTML = "SPACE";
    } else if (farmerstage.title == "CASTLE") {
      let upgradeFarm = checking - 10000;
      yolkCheck.innerHTML = upgradeFarm;
      farmerstage.title = "SPACE";
      farmerstageBracket.className = "hide";
    }
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
  } else {
    closeImgForm.className = "display";
    let closeImgTransfer = document.getElementById("myegg-images");
    closeImgTransfer.className = "";
  }
}
