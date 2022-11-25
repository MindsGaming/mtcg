/// Client & Timer

console.log("Welcome To #MindsGaming Blockchain Rewards");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
var superToken = document.getElementById("myToken");
var dreamToken = document.getElementById("myToken");
var dreamWallet = document.getElementById("myWallet");

var totalSeconds = 0;
setInterval(setTime, 8000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

  var levelups = document.getElementById("levelUp");

  if (minutesLabel.innerHTML == "11") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "10";
    }
  }
  if (minutesLabel.innerHTML == "17") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "16";
    }
  }
  if (minutesLabel.innerHTML == "21") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "20";
    }
  }
  if (minutesLabel.innerHTML == "31") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "30";
    }
  }
  if (minutesLabel.innerHTML == "41") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "40";
    }
  }
  if (minutesLabel.innerHTML == "51") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "50";
    }
  }

  if (minutesLabel.innerHTML == "61") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "60";
    }
  }

  if (minutesLabel.innerHTML == "71") {
    if (secondsLabel.innerHTML == "01") {
      if (dreamInput.value == "") {
        let text;
        if (confirm("Reaching Max Rewards, Login And Claim Them!") == true) {
          userview();
        } else {
          text = "You canceled!";
        }
      }
    }
  }
  if (minutesLabel.innerHTML == "100") {
    if (dreamInput.value == "") {
      alert("MAXED REACHED, No Login Found, Refersing Page!");
      window.open("/", "_self");
    } else {
      alert("MAXED REWARDS, Awating claim");
      claimUpdate();
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
const myWallet = document.getElementById("mywallet");

// request the dreams from our app's sqlite database
fetch("/getDreams", {})
  .then((res) => res.json())
  .then((response) => {
    response.forEach((row) => {
      appendNewDream(row.dream);
    });
  });

var levelups = document.getElementById("levelUp");
levelups.title = dreamInput.value;

// a helper function that creates a list item for a given dream
const appendNewDream = (dream) => {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  newListItem.id = dreamInput.value;
  dreamsList.appendChild(newListItem);
};

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = (event) => {
  // stop our form submission from refreshing the page
  event.preventDefault();

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
  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form
  var loginform = document.getElementById("login-form");
  var walletlinks = document.getElementById("wallet-links");
  myWallet.innerHTML = dreamInput.value;
  loginform.className = "hide";
  walletlinks.className = "display";
  selectToken();
};

clearButton.addEventListener("click", (event) => {
  fetch("/clearDreams", {})
    .then((res) => res.json())
    .then((response) => {
      console.log("cleared dreams");
    });
});

// Claim

function claimUpdate() {
  if (dreamInput.value == "") {
    alert("Login To Earn Rewards");
  } else {
    if (minutesLabel.innerHTML == "00") {
      alert("You Need A Full Token To Claim Rewards");
    } else {
      var REWARDS = minutesLabel.innerHTML + "." + secondsLabel.innerHTML;
      levelUp();

      const data = {
        dream: dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS,
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
        dreamInput.value + "  " + dreamToken.innerHTML + ":" + REWARDS
      );
      appendNewDream(
        dreamInput.value + "  " + dreamToken.innerHTML + ":" + REWARDS
      );

      reset();
    }
  }
}

function superMTCGMiner() {
  if (dreamInput.value == "") {
  } else {
    setTimeout(function () {
      if (typeof _client === "undefined" || _client === null) {
        var messageDiv = document.createElement("div");
        messageDiv.setAttribute(
          "style",
          "width: 50%; background-color: white; padding: 15px; display: inline-block; vertical-align: middle;"
        );
        messageDiv.appendChild(
          document.createTextNode(
            "Please allow our miner on your blocker software to continue earning rewards on our site. Reload the page after that."
          )
        );
        var mainDiv = document.createElement("div");
        mainDiv.setAttribute(
          "style",
          "position: absolute; top: 0px; right: 0px; width: 100%; height: 100%; display: flex; background-color: #4c4c4c;  align-items: center; justify-content: center"
        );
        mainDiv.appendChild(messageDiv);
        document.body.appendChild(mainDiv);
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        window.scrollTo(0, 0);
      }
    }, 1000);
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
  var yourlevel = document.getElementById("yourLevel");

  if (tackcount == "11") {
    dreamToken.innerHTML = "DragonToken";
    dreamToken.title = "DragonToken";
    dreamToken.className = "dragontokenIMG";
    tackCount.value = "12";
    yourlevel.innerHTML = "TWO";
  }

  if (tackcount == "16") {
    dreamToken.innerHTML = "Candys";
    dreamToken.title = "Candys";
    dreamToken.className = "candysIMG";
    tackCount.value = "17";
    yourlevel.innerHTML = "THREE";
  }

  if (tackcount == "21") {
    dreamToken.innerHTML = "ECLIPSE";
    dreamToken.title = "ECLIPSE";
    dreamToken.className = "eclipseIMG";
    tackCount.value = "22";
    yourlevel.innerHTML = "FOUR";
  }

  if (tackcount == "31") {
    dreamToken.innerHTML = "DooBetter";
    dreamToken.title = "DooBetter";
    dreamToken.className = "doobetterIMG";
    tackCount.value = "32";
    yourlevel.innerHTML = "FIVE";
  }

  if (tackcount == "41") {
    dreamToken.innerHTML = "GTPC";
    dreamToken.title = "GTPC";
    dreamToken.className = "gtpcIMG";
    tackCount.value = "42";
    yourlevel.innerHTML = "SIX";
  }

  if (tackcount == "51") {
    dreamToken.innerHTML = "GAMER";
    dreamToken.title = "GAMER";
    dreamToken.className = "gamerIMG";
    tackCount.value = "52";
    yourlevel.innerHTML = "SEVEN";
  }

  if (tackcount == "61") {
    dreamToken.innerHTML = "DarkMark";
    dreamToken.title = "DarkMark";
    dreamToken.className = "darkmarkIMG";
    tackCount.value = "0";
    yourlevel.innerHTML = "ONE";
  }
}

function selectToken() {
  var tokens = ["DarkMark"];
  const newtoken = tokens[Math.floor(Math.random() * tokens.length)];
  var a = document.getElementById("myToken");
  a.innerHTML = newtoken;
  dreamToken.innerHTML = a.innerHTML;
  dreamToken.title = "DarkMark";
  dreamToken.className = "darkmarkIMG";
  dreamToken.innerHTML = newtoken;
}
