var start = document.getElementById("start");
var menu = document.getElementById("menu");
var sidemenu = document.getElementById("side-menu");
var tokens = document.getElementById("tokens");
var wallets = document.getElementById("wallets");
var traders = document.getElementById("traders");
var groups = document.getElementById("groups");
var infinity = document.getElementById("Infinity");
var splash = document.getElementById("splash");
var info = document.getElementById("info");
var rewards = document.getElementById("rewards");
var launchgroup = document.getElementById("launchgroup");
var learnhow = document.getElementById("learn-how");
var learnbtn = document.getElementById("learnBTN");
var cards = document.getElementById("APP");
var hooks = document.getElementById("hooks");
var dreamslist = document.getElementById("dream");
var termframe = document.getElementById("termframe");

function startview() {
  closeside();
  if (start.title == "Start Here") {
    start.title = "menu";
    menu.className = "start-menu";
    tokens.className = "hide";
    wallets.className = "hide";
    infinity.className = "hide";
    groups.className = "show";
    splash.className = "hide";
  } else {
    start.title = "Start Here";
    menu.className = "hide";
    tokens.className = "hide";
    wallets.className = "hide";
    infinity.className = "hide";
    groups.className = "show";
  }
}

function tokensview() {
  if (tokens.className == "hide") {
    tokens.className = "show";
    wallets.className = "hide";
    sidemenu.className = "side-menu";
  } else {
    tokens.className = "hide";
    wallets.className = "hide";
    sidemenu.className = "hide";
  }
}

function walletsview() {
  if (wallets.className == "hide") {
    wallets.className = "show";
    tokens.className = "hide";
    sidemenu.className = "side-menu";
  } else {
    tokens.className = "hide";
    wallets.className = "hide";
    sidemenu.className = "hide";
  }
}

function tradersview() {
  if (traders.className == "hide") {
    traders.className = "show";
    wallets.className = "hide";
    tokens.className = "hide";
    sidemenu.className = "side-menu";
  } else {
    traders.className = "hide";
    tokens.className = "hide";
    wallets.className = "hide";
    sidemenu.className = "hide";
  }
}

function hooksview() {
  if (hooks.className == "hide") {
    hooks.className = "show";
    traders.className = "hide";
    wallets.className = "hide";
    tokens.className = "hide";
    sidemenu.className = "side-menu";
  } else {
    hooks.className = "hide";
    traders.className = "hide";
    tokens.className = "hide";
    wallets.className = "hide";
    sidemenu.className = "hide";
  }
}

function openhubs() {
  if (infinity.title == "Infinity") {
    infinity.title = "Hubs";
    infinity.src =
      "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
    groups.className = "hide";
    splash.className = "splash";
    infinity.className = "apps";
    info.className = "hide";
    dreamslist.innerHTML = "Loading Hubs...";
  } else {
    infinity.title = "Infinity";
    infinity.src = "https://mindsgaming.glitch.me";
    groups.className = "show";
    splash.className = "hide";
    infinity.className = "hide";
    info.className = "hide";
  }
}

function cardsview() {
  window.open("/cards", "_self");
}

function chatbotview() {
  if (infinity.title == "Infinity") {
    infinity.title = "AI";
    infinity.src =
      "https://opengpts-example-vz4y4ooboq-uc.a.run.app/?shared_id=f8e255b1-6ac6-4b5b-af4c-5a00afad18bc?shared_id=a27e9bc2-50ff-4106-bfcc-e609e0ca62b3";
    groups.className = "hide";
    splash.className = "splash";
    infinity.className = "apps";
    info.className = "hide";
  } else {
    infinity.title = "Infinity";
    infinity.src =
      "https://opengpts-example-vz4y4ooboq-uc.a.run.app/?shared_id=f8e255b1-6ac6-4b5b-af4c-5a00afad18bc?shared_id=a27e9bc2-50ff-4106-bfcc-e609e0ca62b3";
    groups.className = "show";
    infinity.className = "hide";
    splash.className = "hide";
    info.className = "hide";
  }
}

function infoview() {
  if (info.title == "Information") {
    info.title = "Info";
    info.className = "apps";
    groups.className = "hide";
    splash.className = "hide";
  } else {
    info.title = "Information";
    info.className = "hide";
    groups.className = "show";
    splash.className = "hide";
  }
}

function learnHow() {
  if (learnhow.className == "hide") {
    learnhow.className = "show";
    learnbtn.innerHTML = "Close";
  } else {
    learnhow.className = "hide";
    learnbtn.innerHTML = "Learn How";
  }
}

function rewardsview() {
  if (rewards.title == "Closed") {
    rewards.title = "Rewards";
    rewards.className = "splash";
    groups.className = "hide";
    splash.className = "hide";
    info.className = "hide";
  } else {
    rewards.title = "Closed";
    rewards.className = "hide";
    groups.className = "show";
    splash.className = "hide";
  }
}

function launchgroupview() {
  if (launchgroup.title == "Closed") {
    launchgroup.title = "Launching A Group";
    launchgroup.className = "notepad";

    groups.className = "hide";
    splash.className = "hide";
  } else {
    launchgroup.title = "Closed";
    launchgroup.className = "hide";
  }
}

function closeside() {
  infinity.title = "Infinity";
  info.title = "Information";
  rewards.title = "Closed";
  launchgroup.title = "Closed";
  termframe.title = "Login";
  tokens.className = "hide";
  wallets.className = "hide";
  groups.className = "show";
  sidemenu.className = "hide";
  traders.className = "hide";
  wallets.className = "hide";
  splash.className = "hide";
  info.className = "hide";
  rewards.className = "hide";
  launchgroup.className = "hide";
  groups.className = "show";
  hooks.className = "hide";
  termframe.className = "hide";
}

function comingsoon() {
  alert("Coming Soon!");
}

function Communityview() {
  var txt;
  if (confirm("Switch To MindsGaming?")) {
    window.open("https://MindsGaming.glitch.me", "_self");
  } else {
  }
}

function viewLOGIN() {
  if (termframe.title == "Login") {
    termframe.title = "Terminal";
    termframe.className = "terminalframe";
    groups.className = "hide";
    infinity.className = "hide";
    info.className = "hide";
  } else {
    termframe.title = "Login";
    termframe.className = "hide";
    groups.className = "show";
    info.className = "hide";
  }
}

function createDreamblock() {
  let dreamCatcher = document.getElementsByTagName("li");

  let numb = Math.floor(Math.random() * 5000);
  let fish = numb + Math.floor(Math.random() * 10);

  let dreamvalue = dreamCatcher.length - 1;
  let dreamID = document.getElementById(dreamvalue);

  let theDate = new Date();
  const dreamBlock = document.createElement("block");
  dreamBlock.id =
    numb + "‽" + fish + "‽" + document.getElementsByTagName("li").length;
  dreamBlock.innerHTML =
    "DreamBlock: #" + dreamBlock.id + "‽" + theDate + "‽" + dreamID.value;
  dreamBlock.value = dreamBlock.innerHTML;

  const appendNewDreamss = (dream) => {
    const newListItem = document.createElement("block");
    newListItem.innerText = dreamBlock.value;
    newListItem.title = "Dream Block";
    newListItem.id = dreamBlock.id;
    newListItem.value = dreamBlock.value;
    newListItem.className = "hide";
    dreamsList.appendChild(newListItem);
  };

  const data = {
    dream: dreamBlock.value,
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
  dreams.push(dreamBlock.value);
  appendNewDream(dreamBlock.value);
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
      const acceptedImageExtensions = [".png", ".jpg", ".gif", ".jpeg", "webp"];
      if (
        extension == ".png" ||
        extension == ".jpg" ||
        extension == ".gif" ||
        extension == ".jpeg" ||
        extension == ".jpeg" ||
        extension == ".webp"
      ) {
        const appendNewDreamss = (dream) => {
          const newListItem = document.createElement("block");
          newListItem.innerText = dreamURL.value;
          newListItem.title = "Dream Block";
          newListItem.id = dreamvalue;
          newListItem.value = dreamURL.value;
          newListItem.className = "hide";
          dreamsList.appendChild(newListItem);
        };

        const data = {
          dream: dreamURL.value,
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


function downloadIMG(){
 const imgGrabber = document.getElementById("img-grabber");
  let download = imgGrabber.value;
  window.open(download, "_blank") 
}

function HOME() {
  window.open("/", "_self");
}

/* HTTPS */

var loc = window.location.href + "";
if (loc.indexOf("http://") == 0) {
  window.location.href = loc.replace("http://", "https://");
}
