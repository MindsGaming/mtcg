// Music

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

      // Extract the file extension from the URL
      let url = dreamURL.value;
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

        const pushpreview = document.getElementById("audioPreview-one");
        const pushpreviewTwo = document.getElementById("audioPreview-two");
        pushpreview.src = url.toString();
        pushpreviewTwo.src = url.toString();
        const embedpreview = document.getElementById("audio-float");
        let embed = embedpreview.innerHTML;
        const createLabel = document.createElement("label");
        createLabel.innerHTML = embed;
        const layerEmbed = document.getElementById("myegg-music");
        layerEmbed.appendChild(createLabel);
        const buildImgButton = document.createElement("button");
        buildImgButton.className = "piggybuttons";
        buildImgButton.innerHTML = "Transfer";
        buildImgButton.addEventListener("click", transferMyMusic);
        createLabel.appendChild(buildImgButton);

        let eggimageform = document.getElementById("farmerimages");
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

function getMyMusicEggs() {
  let userAccount = document.getElementById("user-account");
  let userAccountContent = userAccount.innerHTML;
  let listItems = document.getElementsByTagName("li");
  let targetWords = ["http", "https", "HTTP", "HTTPS"];

  for (let j = 0; j < targetWords.length; j++) {
    let keyword = targetWords[j];
    for (let i = 0; i < listItems.length; i++) {
      let listItemText = listItems[i].textContent;
      if (listItemText.includes("Music:" + userAccountContent + keyword)) {
        let startIndex = listItemText.indexOf(userAccountContent + keyword);
        let extractedWord = listItemText.substring(
          startIndex + userAccountContent.length
        );

        if (!addedMusic.includes(extractedWord)) {
          addedMusic.push(extractedWord);

          let placeholderId = "placeholder-" + i;
          let placeholder = document.createElement("div");
          placeholder.id = placeholderId;
          document.getElementById("myegg-music").appendChild(placeholder);

          const pushpreview = document.getElementById("audioPreview-one");
          const pushpreviewTwo = document.getElementById("audioPreview-two");
          pushpreview.src = extractedWord;
          pushpreviewTwo.src = extractedWord;
          const embedpreview = document.getElementById("audio-float");
          let embed = embedpreview.innerHTML;
          const createLabel = document.createElement("label");
          createLabel.innerHTML = embed;
          const layerEmbed = document.getElementById("myegg-music");
          layerEmbed.appendChild(createLabel);

          const buildImgButton = document.createElement("button");
          buildImgButton.className = "piggybuttons";
          buildImgButton.innerHTML = "Transfer";
          buildImgButton.addEventListener("click", function () {
            transferMyMusic(extractedWord);
          });
          placeholder.appendChild(buildImgButton);

          let eggimageform = document.getElementById("farmerimages");
          eggimageform.className = "game-article";
        }
      }
    }
  }
}

function transferMyMusic(imageSrc) {
  const openForm = document.getElementById("eggimage-form");
  openForm.className = "display";
  let eggformImage = document.getElementById("eggform-image");
  eggformImage.value = imageSrc;

  let hideImages = document.getElementById("myegg-images");
  hideImages.className = "hide";

  let previewIMG = document.getElementById("eggimageform-preview");
  previewIMG.src = imageSrc;
  previewIMG.style = "width: 32px; height: 32px; border-raduis: 50%;";
}
