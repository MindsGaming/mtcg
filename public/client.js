const secondsLabel = document.getElementById("seconds");
const minutesLabel = document.getElementById("minutes");
const dreamToken = document.getElementById("myToken");
var totalSeconds = 0;
setInterval(setTime, 6000);

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
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "60";
      levelupPop();
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

changeToken();

function changeToken() {
  var oldToken = dreamToken.innerHTML;

  var extralist = ["DragonToken", "DarkMark", "ECLIPSE", "DooBetter", "GTPC"];
  var newTokens = [
    "DarkMark",
    "DragonToken",
    "ECLIPSE",
    "DooBetter",
    "GTPC",
    "GAMER",
    extralist,
  ];
  const newtoken = newTokens[Math.floor(Math.random() * newTokens.length)];
  dreamToken.innerHTML = newtoken;

  if (newtoken == oldToken) {
    changeToken();
  } else {
    var levelUp = document.getElementById("levelUp");

    if (newtoken == "DragonToken") {
      dreamToken.className = "dragontokenIMG";
      dreamToken.title = newtoken;
      levelUp.value = "6";
    }

    if (newtoken == "ECLIPSE") {
      dreamToken.className = "eclipseIMG";
      dreamToken.title = newtoken;
      levelUp.value = "15";
    }

    if (newtoken == "DooBetter") {
      dreamToken.className = "doobetterIMG";
      dreamToken.title = newtoken;
      levelUp.value = "25";
    }
    if (newtoken == "GTPC") {
      dreamToken.className = "gtpcIMG";
      dreamToken.title = newtoken;
      levelUp.value = "35";
    }

    if (newtoken == "GAMER") {
      dreamToken.className = "gamerIMG";
      dreamToken.title = newtoken;
      levelUp.value = "47";
    }
    var current = levelUp.value;
    var remove = 1;
    var math = current.innerHTML - remove;
    reset();
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
  dreams.push(dreamInput.value + " :Loged In");
  appendNewDream(dreamInput.value + " :Loged In");

  // reset form
  myWallet.id = dreamInput.value;
  myWallet.innerHTML = dreamInput.value;
  myWallet.title = dreamInput.value;
  var loginform = document.getElementById("login-form");
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
