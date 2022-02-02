// Version
const version = document.createElement("p");
version.id = "V0.21";
version.innerHTML = version.id;
version.title = version.id;
const VERSION = document.getElementById("version");
VERSION.innerHTML = version.id;
VERSION.title = version.id;
version.required;

/// Client & Timer

console.log("Welcome To #MindsGaming Blockchain Rewards");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
var superToken = document.getElementById("myToken");
var dreamToken = document.getElementById("myToken");
var dreamWallet = document.getElementById("myWallet");

selectToken();

var totalSeconds = 0;
setInterval(setTime, 10000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

  var levelups = document.getElementById("levelUp");

  if (minutesLabel.innerHTML == "11") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "10";
      levelupPop();
    }
  }
  if (minutesLabel.innerHTML == "21") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "20";
      levelupPop();
    }
  }
  if (minutesLabel.innerHTML == "31") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "30";
      levelupPop();
    }
  }
  if (minutesLabel.innerHTML == "41") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "40";
      levelupPop();
    }
  }
  if (minutesLabel.innerHTML == "51") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "50";
      levelupPop();
    }
  }

  if (minutesLabel.innerHTML == "61") {
    alert("You Maxed Out Rewards, Are You Still Active?");
    claimUpdate();
    if (secondsLabel.innerHTML == "01") {
    }
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];
const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector("#clear-dreams");
const myToken = document.getElementById("REWARDTOKEN");

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
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
};

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = (event) => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  const data = {
    dream: dreamInput.value + ":" + version.innerHTML,
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
  // get dream value and add it to the list
  dreams.push(dreamInput.value + " :Loged In");
  appendNewDream(dreamInput.value + " :Loged In");

  // reset form
  alert(
    "You're Loged In! Do Not Close Or Refresh This Page Or You May Lose Your Rewards"
  );
  var hubs = document.getElementById("hubs");
  var login = document.getElementById("login");
  login.className = "hide";
  hubs.title = "HUBS";
  hubs.className = "SuperSplash";
  var games = document.getElementById("games");
  games.className = "hide";
  games.title = "CLOSED";
  var createHUB = document.createElement("iframe");
  createHUB.src =
    "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
  createHUB.className = "SuperSplash";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);
  var classic = document.getElementById("classicMode");
  var VR = document.getElementById("vrMode");

  classic.className = "downarrow";
  VR.className = "downarrowG";
  walletChange();
};

clearButton.addEventListener("click", (event) => {
  fetch("/clearDreams", {})
    .then((res) => res.json())
    .then((response) => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
});

// Claim

function claimUpdate() {
  if (dreamInput.value == "") {
    alert("Login To Earn Rewards");
    otherSound();
  } else {
    if (minutesLabel.innerHTML == "00") {
      alert("You Need A Full Token To Claim Rewards");
      oopsSound();
    } else {
      var REWARDS = minutesLabel.innerHTML + "." + secondsLabel.innerHTML;

      const data = {
        dream:
          dreamInput.value +
          " " +
          version.innerHTML +
          dreamToken.innerHTML +
          ":" +
          REWARDS,
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
      // get dream value and add it to the list
      dreams.push(
        dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS
      );
      appendNewDream(
        dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS
      );

      levelUp();
      reset();
      rewardSound();
    }
  }
}

function reset() {
  var zero = "00";
  document.getElementById("minutes").innerHTML = zero;
  document.getElementById("seconds").innerHTML = zero;
  totalSeconds = "0";
}

// LevelUp

function levelUp() {
  var tackCount = document.getElementById("levelUp").value;
  var tackcount = tackCount + 1;
  document.getElementById("levelUp").value = tackcount;

  if (tackcount == "11") {
    dreamToken.innerHTML = "ECLIPSE";
    dreamToken.title = "ECLIPSE";
    dreamToken.className = "eclipseIMG";
    tackCount.value = "12";
  }

  if (tackcount == "21") {
    dreamToken.innerHTML = "DooBetter";
    dreamToken.title = "DooBetter";
    dreamToken.className = "doobetterIMG";
    tackCount.value = "22";
  }

  if (tackcount == "31") {
    dreamToken.innerHTML = "GTPC";
    dreamToken.title = "GTPC";
    dreamToken.className = "gtpcIMG";
    tackCount.value = "32";
  }

  if (tackcount == "41") {
    dreamToken.innerHTML = "GAMER";
    dreamToken.title = "GAMER";
    dreamToken.className = "gamerIMG";
    tackCount.value = "42";
  }

  if (tackcount == "51") {
    dreamToken.innerHTML = "DragonToken";
    dreamToken.title = "DragonToken";
    dreamToken.className = "dragontokenIMG";
    tackCount.value = "0";
  }
}

function walletChange() {
  var x = document.getElementById("myWallet");
  x.innerHTML = dreamInput.value;
}

function selectToken() {
  var tokens = ["DragonToken"];
  const newtoken = tokens[Math.floor(Math.random() * tokens.length)];
  var a = document.getElementById("myToken");
  a.innerHTML = newtoken;
  dreamToken.innerHTML = a.innerHTML;
  dreamToken.title = "DragonToken";
  dreamToken.className = "dragontokenIMG";
  dreamToken.innerHTML = newtoken;
}
