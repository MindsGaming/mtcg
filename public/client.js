// Version
const version = document.getElementById("version");
version.innerHTML = "V0.07";
version.required;
version.title = version.innerHTML;
version.id = version;

/// Client & Timer

console.log("Welcome To #MindsGaming Blockchain Rewards");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
var superToken = document.getElementById("myToken");
var dreamToken = document.getElementById("myToken");
var dreamWallet = document.getElementById("myWallet");

selectToken();

var totalSeconds = 0;

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
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
  var createHUB = document.createElement("iframe");
  createHUB.src =
    "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
  createHUB.className = "SuperSplash";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);
  var closeLogin = document.getElementById("login");
  closeLogin.className = "hide";
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
      var tokens = ["ECLIPSE"];
      const newtoken = tokens[Math.floor(Math.random() * tokens.length)];
      dreamToken.innerHTML = newtoken;
      superToken.innerHTML = newtoken;

      levelUp();
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

  if (tackcount == "50") {
    dreamToken.innerHTML = "DragonToken";
    document.getElementById("levelUp").value = "2";
  }
  if (tackcount == "5") {
    dreamToken.innerHTML = "ECLIPSE";
    document.getElementById("levelUp").value = "6";
  }

  if (tackcount == "10") {
    dreamToken.innerHTML = "DooBetter";
    document.getElementById("levelUp").value = "11";
  }
  if (tackcount == "25") {
    dreamToken.innerHTML = "GAMER";
    document.getElementById("levelUp").value = "26";
  }
  tokenTimer();
  reset();
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
  dreamToken.id = "DragonToken";
  dreamToken.title = "DragonToken";
  superToken.innerHTML = newtoken;
  tokenTimer();
}

// Token Timer

function tokenTimer() {
  if (superToken.innerHTML == "DragonToken") {
    if (superToken.innerHTML == "DooBetter") {
      superToken.className = "doobetterIMG";
      superToken.id = "DooBetter";
    }
    if (superToken.innerHTML == "GAMER") {
      superToken.className = "gamerIMG";
      superToken.id = "GAMER";
    }
    if (superToken.innerHTML == "ECLIPSE") {
      superToken.className = "eclipseIMG";
      superToken.id = "ECLIPSE";
    } else {
      superToken.className = "dragontokenIMG";
      superToken.id = "DragonToken";
    }
  }
  setInterval(setTime, 10000);
}
