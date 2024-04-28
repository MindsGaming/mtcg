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
  if (currenteggs.innerHTML == "0") {
    counteggs();
  }

  userCHECK();
  dreamInput.value = "";
  dreamInput.focus();
  loginform.className = "hide";
  chekIncomingTransfers();
  myChain();
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
      dream: userAccount.innerHTML,
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
    dreams.push(userAccount.innerHTML);
    appendNewDream(userAccount.innerHTML);
    PlayChicken();
  }
}

function counteggs() {
  let numb = dreamsList.getElementsByTagName("li").length;
  let randomWarp = Math.floor(Math.random() * numb) + 1;
  currenteggs.innerHTML = numb;
  let blockchecker = document.getElementById("current-eggs");
  if (blockchecker.innerHTML == "0") {
    currenteggs.innerHTML = numb;
  }
}

let crackedWrap = "";
let inkTest = "";
function hatchEGG() {
  if (userAccount.innerHTML == "Login") {
    userAlert.innerHTML = "Login To Play";
  } else {
    if (currenteggs.innerHTML == 0) {
      userAlert.innerHTML = "No Eggs Found :(";
    } else {
      if (inkTest == true) {
        userAlert.innerHTML = "Incubating Egg...";
      } else {
        function eggIncubation() {
          let incubation = document.getElementById("hatchBTN");
          let Qincubation = Math.floor(Math.random() * 15);
          let effect = Math.floor(Math.random() * 15);
          let Qchance = parseFloat(Qincubation);
          let effectChance = parseFloat(effect);
          let clickCrack = "hatchEGG()";
          if (Qchance == effect) {
            incubation.innerHTML = "Incubation";
            incubation.style = "background-color:grey;";
            userAlert.innerHTML = "Egg Incubation...";
            inkTest = true;
            setTimeout(eggIncubation, 5000);
          } else {
            incubation.innerHTML = "Crack";
            incubation.style = "background-color:gold;";
            inkTest = "";

            // Calculate the total points after hatching
            let numb = dreamsList.getElementsByTagName("li").length;
            let randomWarp = Math.floor(Math.random() * numb) + 1;
            let foundEgg = document.getElementById(randomWarp);
            let wrapedIMG = document.getElementById("wraped-images");
            wrapedIMG.innerHTML = "";
            userAlert.innerHTML = "";
            let hatchedPOINTS = parseFloat(foundEgg.value);
            let currentPOINTS = parseFloat(POINTS.innerHTML);
            let catchEGGS = parseFloat(currenteggs.innerHTML);

            if (hatchedPOINTS > catchEGGS) {
              let softenEgg = hatchedPOINTS % catchEGGS;
              let softegg = Math.round(softenEgg);
              hatchedPOINTS = softegg;

              if (softegg == 0) {
                let harder = catchEGGS % 2;
                let harderegg = Math.round(catchEGGS);
                hatchedPOINTS = harderegg + 1;
              }
            }

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

            if (
              foundEgg.innerHTML.length == 42 ||
              foundEgg.innerHTML.length > 42 ||
              !foundEgg.innerHTML
            ) {
              userAlert.innerHTML = "You Cracked: " + hatchedPOINTS + " Yolks";
              userAlert.style = "color:gold;";
            } else {
              userAlert.innerHTML =
                foundEgg.innerHTML +
                " You Cracked: " +
                hatchedPOINTS +
                " Yolks";
              userAlert.style = "color:gold;";
            }
            let liText = foundEgg.textContent.trim();
            if (liText.startsWith("https://")) {
              let createIMG = document.createElement("img");
              createIMG.src = foundEgg.innerHTML;
              createIMG.className = "creator-wrap";
              document.getElementById("wraped-images").appendChild(createIMG);
              createIMG.id = hatchedPOINTS + "‽";

              crackedWrap = foundEgg.innerHTML;
              downloadImg();
            }
          }
        }
        eggIncubation();
      }
    }
  }
  pullENERGY();
}
/* Chicken */

function feedCHICKEN() {
  let yolkstofeed = parseFloat(POINTS.innerHTML);

  if (yolkstofeed < 1000) {
    userAlert.innerHTML = "Not Enough Yolks";
  } else {
    let feedmath = yolkstofeed - 1000;
    POINTS.innerHTML = feedmath;
    let farmerfeed = parseFloat(feed.value);
    let morefeedmath = farmerfeed + 5;
    feed.value = morefeedmath;
    userAlert.innerHTML = "Cluck!";
    pullENERGY();
  }
}

function PlayChicken() {
  var playerupgrades = document.getElementById("farmers-upgrades");

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
  if (yolkstofeed < 1000) {
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
var playerupgrades = document.getElementById("farmers-upgrades");
var playerstage = document.getElementById("farmer-stage");

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
function playerUpgrades() {
  pagenation.innerHTML = "UPGRADES";
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
      playerupgrades.className = "hide";
      if (playerstage.title == "FARM") {
        farmBackground.src =
          "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/henhouse.webp";
      } else if (playerstage.title == "CASTLE") {
        farmBackground.src =
          "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/Castle.webp";
      } else if (playerstage.title == "SPACE") {
        farmBackground.src =
          "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/sapce.webp";
      }
      sleepBTN.className = "meterbuttons";
    } else {
      if (checkpage == "MARKET") {
        playerfarm.className = "hide";
        playermarket.className = "game-home";
        playerarcade.className = "hide";
        playerupgrades.className = "hide";

        if (playerstage.title == "FARM") {
          farmBackground.src =
            "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/Farmersmarket.webp";
        } else if (playerstage.title == "CASTLE") {
          farmBackground.src =
            "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/Farmersmarket.webp";
        }
        sleepBTN.className = "hide";
      } else {
        if (checkpage == "GAMES") {
          playerarcade.className = "game-home";
          playerfarm.className = "hide";
          playermarket.className = "hide";
          playerupgrades.className = "hide";

          farmBackground.src =
            "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/Arcade%20ONE.webp";
          sleepBTN.className = "hide";
        } else {
          if (checkpage == "UPGRADES") {
            playerupgrades.className = "game-home";
            playerarcade.className = "hide";
            playerfarm.className = "hide";
            playermarket.className = "hide";
            farmBackground.src =
              "https://cdn.glitch.global/558f6dbc-00e1-4ebb-b404-7bcb911067fc/upgradezone.webp";
            sleepBTN.className = "hide";
          }
        }
      }
    }
    pullENERGY();
  }
}

/* Market Throttels */

function GAMERchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("GAMER-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "GAMER" + "4",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "GAMER" + "4");
    appendNewDream("Transfer:" + userAccount.innerHTML + "GAMER" + "4");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 4;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function ECLIPSEchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("ECLIPSE-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "ECLIPSE" + "7",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "ECLIPSE" + "7");
    appendNewDream("Transfer:" + userAccount.innerHTML + "ECLIPSE" + "7");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 7;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function DooBetterchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("DOOBETTER-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "DOOBETTER" + "5",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "DOOBETTER" + "5");
    appendNewDream("Transfer:" + userAccount.innerHTML + "DOOBETTER" + "5");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 5;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function GTPCchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("GTPC-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "GTPC" + "6",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "GTPC" + "6");
    appendNewDream("Transfer:" + userAccount.innerHTML + "GTPC" + "6");

    let pushchange = parseInt(request.innerHTML);
    let addchange = 6;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function PINNchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("PINN-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "PINN" + "7",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "PINN" + "7");
    appendNewDream("Transfer:" + userAccount.innerHTML + "PINN" + "7");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 7;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function WTVchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("WTV-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "WTV" + "8",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "WTV" + "8");
    appendNewDream("Transfer:" + userAccount.innerHTML + "WTV" + "8");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 8;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function DARKMARKchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("DARKMARK-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "GAMER" + "9",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "DARKMARK" + "9");
    appendNewDream("Transfer:" + userAccount.innerHTML + "DARKMARK" + "9");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 9;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function DRAGONchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("DRAGONTOKEN-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "DRAGONTOKEN" + "10",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "DRAGONTOKEN" + "10");
    appendNewDream("Transfer:" + userAccount.innerHTML + "DRAGONTOKEN" + "10");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 10;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function CANDYSchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("CANDYS-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "CANDYS" + "8",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "CANDYS" + "8");
    appendNewDream("Transfer:" + userAccount.innerHTML + "CANDYS" + "8");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 8;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function Bdbchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("BDB-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "BDB" + "4",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "BDB" + "4");
    appendNewDream("Transfer:" + userAccount.innerHTML + "BDB" + "4");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 4;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function Dwmwchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("DWMW-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "DWMW" + "1",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "DWMW" + "1");
    appendNewDream("Transfer:" + userAccount.innerHTML + "DWMW" + "1");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 1;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function WWOWchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("WWOW-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "WWOW" + "4",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "WWOW" + "4");
    appendNewDream("Transfer:" + userAccount.innerHTML + "WWOW" + "4");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 4;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
    pullENERGY();
  }
}

function OTTOKENchange() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("OTTOKEN-change");
  let currentchange = parseInt(POINTS.innerHTML);
  let removePOINTS = 1000;

  if (currentchange < removePOINTS) {
    userAlert.innerHTML = "Not enough Yolks";
  } else {
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
      newListItem.innerText = dream;
      newListItem.title = "Request";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: "Transfer:" + userAccount.innerHTML + "OTTOKEN" + "3",
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
    dreams.push("Transfer:" + userAccount.innerHTML + "OTTOKEN" + "3");
    appendNewDream("Transfer:" + userAccount.innerHTML + "OTTOKEN" + "3");

    let transferCost = 1000;
    let transferMath = currentchange - 1000;
    POINTS.innerHTML = transferMath;

    let pushchange = parseInt(request.innerHTML);
    let addchange = 3;
    let mathChange = pushchange + addchange;
    request.innerHTML = mathChange;
    userAlert.innerHTML = "Sent To Your Farm!";

    let farmingrewards = document.getElementById("farming-rewards");
    farmingrewards.className = "game-article";
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
      dream: "Sent:" + userAccount.innerHTML + "GAMER" + currentchange,
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

    dreams.push("Sent:" + userAccount.innerHTML + "GAMER" + currentchange);
    appendNewDream("Sent:" + userAccount.innerHTML + "GAMER" + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
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
      dream: "Sent:" + userAccount.innerHTML + "ECLIPSE" + currentchange,
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
    dreams.push("Sent:" + userAccount.innerHTML + "ECLIPSE" + currentchange);
    appendNewDream("Sent:" + userAccount.innerHTML + "ECLIPSE" + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
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
      dream: "Sent:" + userAccount.innerHTML + "DOOBETTER" + currentchange,
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
    dreams.push("Sent:" + userAccount.innerHTML + "DOOBETTER" + currentchange);
    appendNewDream(
      "Sent:" + userAccount.innerHTML + "DOOBETTER" + currentchange
    );
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
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
      dream: "Sent:" + userAccount.innerHTML + "GTPC" + currentchange,
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
    dreams.push("Sent:" + userAccount.innerHTML + "GTPC" + currentchange);
    appendNewDream("Sent:" + userAccount.innerHTML + "GTPC" + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
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
      dream: "Sent:" + userAccount.innerHTML + "PINN" + currentchange,
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
    dreams.push("Sent:" + userAccount.innerHTML + "PINN" + currentchange);
    appendNewDream("Sent:" + userAccount.innerHTML + "PINN" + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
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
      dream: "Sent:" + userAccount.innerHTML + "WTV" + currentchange,
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
    dreams.push("Sent:" + userAccount.innerHTML + "WTV" + currentchange);
    appendNewDream("Sent:" + userAccount.innerHTML + "WTV" + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
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
      dream: "Sent:" + userAccount.innerHTML + "DARKMARK" + currentchange,
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
    dreams.push("Sent:" + userAccount.innerHTML + "DARKMARK" + currentchange);
    appendNewDream(
      "Sent:" + userAccount.innerHTML + "DARKMARK" + currentchange
    );
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
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
      dream: "Sent:" + userAccount.innerHTML + "DRAGONTOKEN" + currentchange,
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
      "Sent:" + userAccount.innerHTML + "DRAGONTOKEN" + currentchange
    );
    appendNewDream(
      "Sent:" + userAccount.innerHTML + "DRAGONTOKEN" + currentchange
    );
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
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
      dream: "Sent:" + userAccount.innerHTML + "CANDYS" + currentchange,
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
    dreams.push(userAccount.innerHTML + "Candys" + currentchange);
    appendNewDream(userAccount.innerHTML + "Candys" + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
  }
}

function BDBPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("BDB-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 BDB to send requests";
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
      dream: "Sent:" + userAccount.innerHTML + "BDB" + currentchange,
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
    dreams.push(userAccount.innerHTML + "BDB" + currentchange);
    appendNewDream(userAccount.innerHTML + "BDB" + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
  }
}

function DWMWPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("DWMW-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 DWMW to send requests";
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
      dream: "Sent:" + userAccount.innerHTML + "DWMW" + currentchange,
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
    dreams.push(userAccount.innerHTML + "DWMW" + currentchange);
    appendNewDream(userAccount.innerHTML + "DWMW" + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
  }
}

function WOWWPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("WOWW-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 WOW to send requests";
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
      dream: "Sent:" + userAccount.innerHTML + "WWOW" + currentchange,
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
    dreams.push(userAccount.innerHTML + "WWOW" + currentchange);
    appendNewDream(userAccount.innerHTML + "WWOW" + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
  }
}

function OTTOKENPOINTS() {
  const numb = dreamsList.getElementsByTagName("li").length;
  const request = document.getElementById("OTTOKEN-change");
  let currentchange = parseInt(request.innerHTML);

  if (currentchange < 100) {
    userAlert.innerHTML = "100 OTTOKEN to send requests";
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
      dream: "Sent:" + userAccount.innerHTML + "OTTOKEN" + currentchange,
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
    dreams.push(userAccount.innerHTML + "OTTOKEN" + currentchange);
    appendNewDream(userAccount.innerHTML + "OTTOKEN" + currentchange);
    request.innerHTML = "0";
    userAlert.innerHTML = "Request Sent!";
    pullENERGY();
    createDreamblock();
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
      layEGGS();
    }
  }
}

function recoveryHack() {
  if (userAccount.innerHTML == "Login") {
    userAlert.innerHTML = "Login To Play";
  } else {
    if (POINTS.innerHTML < 1) {
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
        let phaseRecovery = parseFloat(POINTS.innerHTML);
        let phaseTwo = hack.replace(current, "");
        let phasetwoRecovery = parseFloat(phaseTwo);
        let phasemath = phasetwoRecovery + phaseRecovery;
        POINTS.innerHTML = phasemath;
        foundEgg.remove();
        hackID.value = "";
        userAlert.innerHTML = "You Recovered: " + phasemath + " Yolks!";
        const data = {
          dream: userAccount.innerHTML + "Recovered:" + phasemath,
        };
      }
    }
  }
}
