// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("hello world :o");

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];
const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector("#clear-dreams");
const currentUser = document.getElementById("current-user");
const POINTS = document.getElementById("hatched-points");
const currenteggs = document.getElementById("current-eggs");
const hatchedeggs = document.getElementById("hatched-eggs");
const userAccount = document.getElementById("user-account");
const userAlert = document.getElementById("user-alert");
const loginform = document.getElementById("login-form");
const gamerpointsBTN = document.getElementById("farmer-GAMERBTN");
const farmBackground = document.getElementById("farm-background");
const chicken = document.getElementById("chicken");
const feed = document.getElementById("farmer-feed");
var logininfo = document.getElementById("login-info");
var readyUp = document.getElementById("ready-up");
var energy = document.getElementById("farmer-energy");

// request the dreams from our app's sqlite database
fetch("/getDreams", {})
  .then((res) => res.json())
  .then((response) => {
    response.forEach((row) => {
      appendNewDream(row.dream);
    });
  });

// a helper function that creates a list item for a given dream
const appendNewDream = (dream) => {
  const newListItem = document.createElement("li");
  let numb = dreamsList.getElementsByTagName("li").length;
  let randomWarp = Math.floor(Math.random() * numb) + 1;
  newListItem.innerText = dream;
  newListItem.title = "DreamEGG";
  newListItem.id = numb;
  newListItem.value = randomWarp;
  newListItem.className = "";
  dreamsList.appendChild(newListItem);
};

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = (event) => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  const data = { dream: dreamInput.value };

  fetch("/addDream", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(JSON.stringify(response));
    });
  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form
  userCHECK();
  dreamInput.value = "";
  dreamInput.focus();
  loginform.className = "hide";
};

clearButton.addEventListener("click", (event) => {
  fetch("/clearDreams", {})
    .then((res) => res.json())
    .then((response) => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
});

/* EGG Creation */

function layEGGS() {
  if (userAccount.innerHTML == "Login") {
    userAlert.innerHTML = "Login To Play";
  } else {
    // Request dreams from the app's SQLite database
    fetch("/getDreams", {})
      .then((res) => res.json())
      .then((response) => {
        response.forEach((row) => {
          appendNewDream(row.dream);
        });
      });

    // Helper function to create a list item for a given dream
    let numb = dreamsList.getElementsByTagName("li").length;
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

    const appendNewDreamss = (dream) => {
      const newListItem = document.createElement("li");
      const randomWarp = Math.floor(Math.random() * numb) + 1;
      newListItem.innerText = "Laid EGG";
      newListItem.title = "DreamEGG";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: dreamInput.value,
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
    dreams.push(dreamInput.value);
    appendNewDream(dreamInput.value);
    PlayChicken();
  }
}

function counteggs() {
  let numb = dreamsList.getElementsByTagName("li").length;
  let randomWarp = Math.floor(Math.random() * numb) + 1;
  currenteggs.innerHTML = numb;
  let blockchecker = document.getElementById("current-eggs");
  if (blockchecker.innerHTML == "0") {
    counteggs();
  }
}

function hatchEGG() {
  if (userAccount.innerHTML == "Login") {
    userAlert.innerHTML = "Login To Play";
  } else {
    if (currenteggs.innerHTML == 0) {
      userAlert.innerHTML = "No Eggs Found :(";
    } else {
      // Calculate the total points after hatching
      let numb = dreamsList.getElementsByTagName("li").length;
      let randomWarp = Math.floor(Math.random() * numb) + 1;
      let foundEgg = document.getElementById(randomWarp);
      let hatchedPOINTS = parseFloat(foundEgg.value);
      let currentPOINTS = parseFloat(POINTS.innerHTML);
      let EGGmath = currentPOINTS + hatchedPOINTS;
      POINTS.innerHTML = EGGmath;

      // Update the cracked egg count
      let craked = parseFloat(hatchedeggs.innerHTML);
      let goodegg = 1;
      let crakedegg = goodegg + craked;
      hatchedeggs.innerHTML = crakedegg;

      // Calculate the adjusted cooked egg count
      let cooked = parseFloat(currenteggs.innerHTML) - 1;
      currenteggs.innerHTML = cooked;
      userAlert.innerHTML = "";

      if (foundEgg.innerHTML == "") {
      } else {
        if (foundEgg.innerHTML == userAccount.innerHTML) {
        } else {
          userAlert.innerHTML = foundEgg.innerHTML;
        }
      }
    }
    pullENERGY();
  }
}

/* Tasks */

function pullENERGY() {
  let hatchBTN = document.getElementById("hatchBTN");
  let sleepBTN = document.getElementById("sleepBTN");
  let foundEnergy = parseFloat(energy.value);
  let sleepmath = foundEnergy - 1;
  energy.value = sleepmath;

  if (sleepmath == 0) {
    hatchBTN.className = "hide";
    userAlert.innerHTML = "You're To Tired.";
  }
  if (sleepmath < 0) {
    hatchBTN.className = "hide";
  }
}

function sleepBTN() {
  let hatchBTN = document.getElementById("hatchBTN");
  let sleepBTN = document.getElementById("sleepBTN");
  let foundEnergy = parseFloat(energy.value);
  let sleepmath = foundEnergy + 0.5;
  energy.value = sleepmath;
  sleepBTN.className = "hide";

  if (sleepmath == 50) {
    hatchBTN.className = "hatchBTN";
  } else if (sleepmath > 50) {
    hatchBTN.className = "hatchBTN";
  }
  setTimeout(flashBTN, 1000);
  function flashBTN() {
    sleepBTN.className = "meterbuttons";
  }
}

function fetchLoginForm() {
  loginform.className = "game-article";
  logininfo.className = "hide";
  readyUp.className = "hide";
}

function fetchGameabout() {
  readyUp.className = "game-article";
}

function userCHECK() {
  if (userAccount.innerHTML == "Login") {
    userAccount.innerHTML = dreamInput.value;
  }
  greatJOB();
}

function greatJOB() {
  var greatJob = document.getElementById("great-job");
  greatJob.className = "game-article";
  loginform.className = "hide";
}

function gotIt() {
  var tabmenu = document.getElementById("tab-menu");
  var gotitBTN = document.getElementById("gotitBTN");
  var gotit = document.getElementById("got-it");
  gotit.className = "creator-badge";
  tabmenu.className = "tab-menu";
  gotitBTN.className = "hide";
  gotit.src =
    "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/GOt-it.webp";
}

function fillEnergy() {
  let yolkstofeed = parseFloat(POINTS.innerHTML);
  if (yolkstofeed < 2000) {
    userAlert.innerHTML = "Not Enough Yolks";
    if (energy.value == 0) {
      userAlert.innerHTML = "Game Over, You Died Exhaustion";
    }
  } else {
    let feedmath = yolkstofeed - 2000;
    POINTS.innerHTML = feedmath;
    energy.value = 50;
    userAlert.innerHTML = "Charged Up!";
  }
}

/* pagenation */
var pagenation = document.getElementById("pagenation");
var playerfarm = document.getElementById("farm-home");
var playermarket = document.getElementById("farmers-market");
var playerarcade = document.getElementById("farmers-arcade");

function playersFarm() {
  pagenation.innerHTML = "FARM";
  checkPage();
}

function playersMarket() {
  pagenation.innerHTML = "MARKET";
  checkPage();
}

function playerGames() {
  pagenation.innerHTML = "GAMES";
  checkPage();
}

function checkPage() {
  let sleepBTN = document.getElementById("sleepBTN");
  if (energy.value == 0) {
    userAlert.innerHTML = "You're To Tired To Travel..";
  } else if (energy.value > 0) {
    let checkpage = pagenation.innerHTML;
    if (checkpage == "FARM") {
      playerfarm.className = "game-home";
      playermarket.className = "hide";
      playerarcade.className = "hide";
      farmBackground.src =
        "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/henhouse.webp";
      sleepBTN.className = "meterbuttons";
    } else {
      if (checkpage == "MARKET") {
        playerfarm.className = "hide";
        playermarket.className = "game-home";
        playerarcade.className = "hide";
        farmBackground.src =
          "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/Farmersmarket.webp";
        sleepBTN.className = "hide";
      } else {
        if (checkpage == "GAMES") {
          playerarcade.className = "game-home";
          playerfarm.className = "hide";
          playermarket.className = "hide";
          farmBackground.src =
            "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/Arcade%20ONE.webp";
          sleepBTN.className = "hide";
        }
      }
    }
    pullENERGY();
  }
}

/* Market Throttels */

function GAMERchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const checkPOINTS = parseFloat(POINTS.innerHTML);
  const removePOINTS = 2000;
  const trackers = document.getElementById("farming-rewards");

  if (checkPOINTS < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
    const EGGmath = Math.round(checkPOINTS - removePOINTS);
    POINTS.innerHTML = EGGmath;
    const request = document.getElementById("GAMER-change");
    let currentchange = parseInt(request.innerHTML);
    let boostrequest = 5;
    let requestmath = currentchange + boostrequest;
    request.innerHTML = requestmath;
    trackers.className = "game-article";
    pullENERGY();
  }
}

function ECLIPSEchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const checkPOINTS = parseFloat(POINTS.innerHTML);
  const removePOINTS = 2000;
  const trackers = document.getElementById("farming-rewards");

  if (checkPOINTS < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
    const EGGmath = Math.round(checkPOINTS - removePOINTS);
    POINTS.innerHTML = EGGmath;
    const request = document.getElementById("ECLIPSE-change");
    let currentchange = parseInt(request.innerHTML);
    let boostrequest = 7;
    let requestmath = currentchange + boostrequest;
    request.innerHTML = requestmath;
    trackers.className = "game-article";
    pullENERGY();
  }
}

function DooBetterchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const checkPOINTS = parseFloat(POINTS.innerHTML);
  const removePOINTS = 2000;
  const trackers = document.getElementById("farming-rewards");

  if (checkPOINTS < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
    const EGGmath = Math.round(checkPOINTS - removePOINTS);
    POINTS.innerHTML = EGGmath;
    const request = document.getElementById("DOOBETTER-change");
    let currentchange = parseInt(request.innerHTML);
    let boostrequest = 5;
    let requestmath = currentchange + boostrequest;
    request.innerHTML = requestmath;
    trackers.className = "game-article";
    pullENERGY();
  }
}

function GTPCchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const checkPOINTS = parseFloat(POINTS.innerHTML);
  const removePOINTS = 2000;
  const trackers = document.getElementById("farming-rewards");

  if (checkPOINTS < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
    const EGGmath = Math.round(checkPOINTS - removePOINTS);
    POINTS.innerHTML = EGGmath;
    const request = document.getElementById("GTPC-change");
    let currentchange = parseInt(request.innerHTML);
    let boostrequest = 6;
    let requestmath = currentchange + boostrequest;
    request.innerHTML = requestmath;
    trackers.className = "game-article";
    pullENERGY();
  }
}

function PINNchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const checkPOINTS = parseFloat(POINTS.innerHTML);
  const removePOINTS = 2000;
  const trackers = document.getElementById("farming-rewards");

  if (checkPOINTS < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
    const EGGmath = Math.round(checkPOINTS - removePOINTS);
    POINTS.innerHTML = EGGmath;
    const request = document.getElementById("PINN-change");
    let currentchange = parseInt(request.innerHTML);
    let boostrequest = 5;
    let requestmath = currentchange + boostrequest;
    request.innerHTML = requestmath;
    trackers.className = "game-article";
    pullENERGY();
  }
}

function WTVchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const checkPOINTS = parseFloat(POINTS.innerHTML);
  const removePOINTS = 2000;
  const trackers = document.getElementById("farming-rewards");

  if (checkPOINTS < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
    const EGGmath = Math.round(checkPOINTS - removePOINTS);
    POINTS.innerHTML = EGGmath;
    const request = document.getElementById("WTV-change");
    let currentchange = parseInt(request.innerHTML);
    let boostrequest = 8;
    let requestmath = currentchange + boostrequest;
    request.innerHTML = requestmath;
    trackers.className = "game-article";
    pullENERGY();
  }
}

function DARKMARKchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const checkPOINTS = parseFloat(POINTS.innerHTML);
  const removePOINTS = 2000;
  const trackers = document.getElementById("farming-rewards");

  if (checkPOINTS < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
    const EGGmath = Math.round(checkPOINTS - removePOINTS);
    POINTS.innerHTML = EGGmath;
    const request = document.getElementById("DARKMARK-change");
    let currentchange = parseInt(request.innerHTML);
    let boostrequest = 9;
    let requestmath = currentchange + boostrequest;
    request.innerHTML = requestmath;
    trackers.className = "game-article";
    pullENERGY();
  }
}

function DRAGONchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const checkPOINTS = parseFloat(POINTS.innerHTML);
  const removePOINTS = 2000;
  const trackers = document.getElementById("farming-rewards");

  if (checkPOINTS < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
    const EGGmath = Math.round(checkPOINTS - removePOINTS);
    POINTS.innerHTML = EGGmath;
    const request = document.getElementById("DRAGONTOKEN-change");
    let currentchange = parseInt(request.innerHTML);
    let boostrequest = 10;
    let requestmath = currentchange + boostrequest;
    request.innerHTML = requestmath;
    trackers.className = "game-article";
    pullENERGY();
  }
}

function CANDYSchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const checkPOINTS = parseFloat(POINTS.innerHTML);
  const removePOINTS = 2000;
  const trackers = document.getElementById("farming-rewards");

  if (checkPOINTS < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
    const EGGmath = Math.round(checkPOINTS - removePOINTS);
    POINTS.innerHTML = EGGmath;
    const request = document.getElementById("CANDYS-change");
    let currentchange = parseInt(request.innerHTML);
    let boostrequest = 5;
    let requestmath = currentchange + boostrequest;
    request.innerHTML = requestmath;
    trackers.className = "game-article";
    pullENERGY();
  }
}

/* Market */

function GamerPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("GAMER-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 GAMER to send requests";
  } else {
    // Request dreams from the app's SQLite database
    fetch("/getDreams", {})
      .then((res) => res.json())
      .then((response) => {
        response.forEach((row) => {
          appendNewDream(row.dream);
        });
      });

    // Helper function to create a list item for a given dream
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

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
      dream: userAccount.innerHTML + "GAMER: " + currentchange,
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
    dreams.push(userAccount.innerHTML + "GAMER: " + currentchange);
    appendNewDream(userAccount.innerHTML + "GAMER: " + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
  }
}

function ECLIPSEPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("ECLIPSE-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 ECLIPSE to send requests";
  } else {
    // Request dreams from the app's SQLite database
    fetch("/getDreams", {})
      .then((res) => res.json())
      .then((response) => {
        response.forEach((row) => {
          appendNewDream(row.dream);
        });
      });

    // Helper function to create a list item for a given dream
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

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
      dream: userAccount.innerHTML + "ECLIPSE: " + currentchange,
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
    dreams.push(userAccount.innerHTML + "ECLIPSE: " + currentchange);
    appendNewDream(userAccount.innerHTML + "ECLIPSE: " + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
  }
}

function DOOBETTERPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("DOOBETTER-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 DooBetter to send requests";
  } else {
    // Request dreams from the app's SQLite database
    fetch("/getDreams", {})
      .then((res) => res.json())
      .then((response) => {
        response.forEach((row) => {
          appendNewDream(row.dream);
        });
      });

    // Helper function to create a list item for a given dream
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

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
      dream: userAccount.innerHTML + "DooBetter: " + currentchange,
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
    dreams.push(userAccount.innerHTML + "DooBetter: " + currentchange);
    appendNewDream(userAccount.innerHTML + "DooBetter: " + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
  }
}

function GTPCPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("GTPC-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 GTPC to send requests";
  } else {
    // Request dreams from the app's SQLite database
    fetch("/getDreams", {})
      .then((res) => res.json())
      .then((response) => {
        response.forEach((row) => {
          appendNewDream(row.dream);
        });
      });

    // Helper function to create a list item for a given dream
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

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
      dream: userAccount.innerHTML + "GTPC: " + currentchange,
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
    dreams.push(userAccount.innerHTML + "GTPC: " + currentchange);
    appendNewDream(userAccount.innerHTML + "GTPC: " + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
  }
}

function PINNPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("PINN-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 PINN to send requests";
  } else {
    // Request dreams from the app's SQLite database
    fetch("/getDreams", {})
      .then((res) => res.json())
      .then((response) => {
        response.forEach((row) => {
          appendNewDream(row.dream);
        });
      });

    // Helper function to create a list item for a given dream
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

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
      dream: userAccount.innerHTML + "PINN: " + currentchange,
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
    dreams.push(userAccount.innerHTML + "PINN: " + currentchange);
    appendNewDream(userAccount.innerHTML + "PINN: " + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
  }
}

function WTVPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("WTV-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 88) {
    userAlert.innerHTML = "88 WTV to send requests";
  } else {
    // Request dreams from the app's SQLite database
    fetch("/getDreams", {})
      .then((res) => res.json())
      .then((response) => {
        response.forEach((row) => {
          appendNewDream(row.dream);
        });
      });

    // Helper function to create a list item for a given dream
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

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
      dream: userAccount.innerHTML + "WTV: " + currentchange,
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
    dreams.push(userAccount.innerHTML + "WTV: " + currentchange);
    appendNewDream(userAccount.innerHTML + "WTV: " + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
  }
}

function DARKMARKPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("DARKMARK-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 DarkMark to send requests";
  } else {
    // Request dreams from the app's SQLite database
    fetch("/getDreams", {})
      .then((res) => res.json())
      .then((response) => {
        response.forEach((row) => {
          appendNewDream(row.dream);
        });
      });

    // Helper function to create a list item for a given dream
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

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
      dream: userAccount.innerHTML + "DarkMark: " + currentchange,
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
    dreams.push(userAccount.innerHTML + "DarkMark: " + currentchange);
    appendNewDream(userAccount.innerHTML + "DarkMark: " + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
  }
}

function DRAGONTOKENPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("DRAGONTOKEN-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 DragonToken to send requests";
  } else {
    // Request dreams from the app's SQLite database
    fetch("/getDreams", {})
      .then((res) => res.json())
      .then((response) => {
        response.forEach((row) => {
          appendNewDream(row.dream);
        });
      });

    // Helper function to create a list item for a given dream
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

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
      dream: userAccount.innerHTML + "DragonToken: " + currentchange,
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
    dreams.push(userAccount.innerHTML + "DragonToken: " + currentchange);
    appendNewDream(userAccount.innerHTML + "DragonToken: " + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
  }
}

function CANDYSPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("CANDYS-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 Candys to send requests";
  } else {
    // Request dreams from the app's SQLite database
    fetch("/getDreams", {})
      .then((res) => res.json())
      .then((response) => {
        response.forEach((row) => {
          appendNewDream(row.dream);
        });
      });

    // Helper function to create a list item for a given dream
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

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
      dream: userAccount.innerHTML + "CANDYS: " + currentchange,
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
    dreams.push(userAccount.innerHTML + "CANDYS: " + currentchange);
    appendNewDream(userAccount.innerHTML + "CANDYS: " + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
  }
}

/* Chicken */

function feedCHICKEN() {
  let yolkstofeed = parseFloat(POINTS.innerHTML);

  if (yolkstofeed < 1000) {
    userAlert.innerHTML = "Not Enough Yolks";
  } else {
    if (yolkstofeed > 500) {
      let feedmath = yolkstofeed - 500;
      POINTS.innerHTML = feedmath;
      let farmerfeed = parseFloat(feed.value);
      let morefeedmath = farmerfeed + 1;
      feed.value = morefeedmath;
      userAlert.innerHTML = "Cluck!";
      pullENERGY();
    }
  }
}

function PlayChicken() {
  chicken.className = "hide";
  setTimeout(newChicken, 20000);
  let farmerfeed = parseFloat(feed.value);
  let morefeedmath = farmerfeed - 1;
  feed.value = morefeedmath;
  userAlert.innerHTML = "";
  function newChicken() {
    if (feed.value == 0) {
      userAlert.innerHTML = "Your Chicken Is Hungry";
    } else {
      if (feed.value > 0) {
        chicken.className = "chicken";
        userAlert.innerHTML = "Cluck!";
      }
    }
  }
}

/* GAMES */

function playPacman() {
  var gameframe = document.getElementById("playPacman");
  var iframe = document.getElementById("pacmanFrame");

  var pacfeed = document.getElementById("pacmanfeedBTN");
  let yolkstofeed = parseFloat(POINTS.innerHTML);

  if (yolkstofeed < 1000) {
    userAlert.innerHTML = "Not Enough Yolks";
  } else {
    let feedmath = yolkstofeed - 1000;
    POINTS.innerHTML = feedmath;
    let farmerfeed = parseFloat(feed.value);
    let morefeedmath = farmerfeed + 1;
    feed.value = morefeedmath;
    userAlert.innerHTML = "Cluck!";
    pullENERGY();
    gameframe.className = "pacman";
    pacfeed.className = "gamebuttons";
    iframe.src = "/games/pacman";
    layEGGS();
    pullENERGY();
  }
}

function pacmanFEED() {
  var gameframe = document.getElementById("playPacman");
  var pacfeed = document.getElementById("pacmanfeedBTN");
  const pushfeed = document.getElementById("pacman-score");
  let farmerfeed = parseFloat(feed.value);
  let morefeedmath = farmerfeed + 1.2;
  feed.value = morefeedmath;
  userAlert.innerHTML = "Cluck!";
  gameframe.className = "hide";
  pacfeed.className = "hide";
}

function EggMaker() {
  if (userAccount.innerHTML == "Login") {
    userAlert.innerHTML = "Login To Play";
  } else {
    if (POINTS.innerHTML < 1000) {
      userAlert.innerHTML = "Not Enough Yolks";
    } else {
      var customEgg = document.getElementById("egg-maker");
      const numb = dreamsList.getElementsByTagName("li").length;

      // Request dreams from the app's SQLite database
      fetch("/getDreams", {})
        .then((res) => res.json())
        .then((response) => {
          response.forEach((row) => {
            appendNewDream(row.dream);
          });
        });

      const appendNewDreamss = (dream) => {
        const newListItem = document.createElement("li");
        const randomWarp = Math.floor(Math.random() * numb) + 1;
        newListItem.innerText = customEgg.value;
        newListItem.title = "DreamEGG";
        newListItem.id = numb;
        newListItem.value = randomWarp;
        newListItem.className = "hide";
        dreamsList.appendChild(newListItem);
      };

      const data = {
        dream: customEgg.value,
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
      userAlert.innerHTML = "Your Message: " + customEgg.value;
      customEgg.value = "";
      dreams.push(customEgg.value);
      appendNewDream(customEgg.value);
    }
  }
}

function recoveryHack() {
  if (userAccount.innerHTML == "Login") {
    userAlert.innerHTML = "Login To Play";
  } else {
    if (POINTS.innerHTML < 1000) {
      userAlert.innerHTML = "Not Enough Yolks";
    } else {
      var hackID = document.getElementById("recover-account");
      const numb = dreamsList.getElementsByTagName("li").length;
      const buildstring = userAccount.innerHTML + POINTS.innerHTML;

      if (hackID.value == "") {
        // Request dreams from the app's SQLite database
        fetch("/getDreams", {})
          .then((res) => res.json())
          .then((response) => {
            response.forEach((row) => {
              appendNewDream(row.dream);
            });
          });

        const appendNewDreamss = (dream) => {
          const newListItem = document.createElement("li");
          const randomWarp = Math.floor(Math.random() * numb) + 1;
          newListItem.innerText = buildstring;
          newListItem.title = "DreamEGG";
          newListItem.id = numb;
          newListItem.value = randomWarp;
          newListItem.className = "hide";
          dreamsList.appendChild(newListItem);
        };

        const data = {
          dream: buildstring,
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
        userAlert.innerHTML = "Your Recover Id: " + numb;
        hackID.value = "";
        dreams.push(buildstring);
        appendNewDream(buildstring);
        POINTS.innerHTML = 0;
      } else {
        var foundEgg = document.getElementById(hackID.value);
        let hack = foundEgg.innerHTML;
        let current = userAccount.innerHTML;
        POINTS.innerHTML = hack.replace(current, "");
        const data = {
          dream:
            userAccount.innerHTML + "Recovered:" + hack.replace(current, ""),
        };
      }
    }
  }
}
