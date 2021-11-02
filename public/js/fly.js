// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("#MindsGaming");

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];
const dreamInputuser = dreamsForm.elements["username"];
const dreamInputplayer = dreamsForm.elements["tokens"];

const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector("#clear-dreams");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");

var totalSeconds = 0;
setInterval(setTime, 3141);

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

function gamertokens() {
  var dreamtokens = document.getElementById("gamertokens");

  dreamtokens.classList.toggle("dreamtokens");
  dreamInputplayer.value = "GAMER";
}

function doobettertokens() {
  var dreamtokens = document.getElementById("doobettertokens");
  dreamtokens.classList.toggle("dreamtokens");
  dreamInputplayer.value = "DooBetter";
}

function eclipsetokens() {
  var dreamtokens = document.getElementById("eclipsetokens");
  dreamtokens.classList.toggle("dreamtokens");
  dreamInputplayer.value = "Eclipse";
}

// request the dreams from our app's sqlite database
fetch("/getDreams", {})
  .then(res => res.json())
  .then(response => {
    response.forEach(row => {
      appendNewDream(row.dream);
    });
  });

// a helper function that creates a list item for a given dream
const appendNewDream = dream => {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
};

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = event => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  const data = {
    dream:
      dreamInput.value +
      "-" +
      dreamInputuser.value +
      dreamInputplayer.value +
      "Reward: " +
      secondsLabel.innerHTML +
      "." +
      minutesLabel.innerHTML
  };

  fetch("/addDream", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(response => {
      console.log(JSON.stringify(response));
    });
  // get dream value and add it to the list
  dreams.push(
    dreamInput.value + "-" + dreamInputuser.value + dreamInputplayer.value
  );
  appendNewDream(
    dreamInput.value +
      "-" +
      dreamInputuser.value +
      "Reward: " +
      dreamInputplayer.value +
      " Logged In"
  );

  var txt;
  var r = confirm("Select A Miner!");
  if (r == true) {
    var badge = document.getElementById("badge");
    badge.innerHTML = dreamInputuser.value;
    badge.title = dreamInputuser.value;

    var login = document.getElementById("login");
    login.classList.toggle("hide");
    var backgrounds = document.getElementById("backgrounds");
    backgrounds.classList.toggle("hide");
  } else {
    txt = "Humm okkay";
  }

  // reset form
  dreamInput.value = "";
  dreamInput.focus();
};

clearButton.addEventListener("click", event => {
  fetch("/clearDreams", {})
    .then(res => res.json())
    .then(response => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
});

function guest() {
  var txt;
  var r = confirm("Login To Earn Rewards!");
  if (r == true) {
    var badge = document.getElementById("badge");
    badge.innerHTML = "Guest";
    badge.title = "Guest";

    var login = document.getElementById("login");
    login.classList.toggle("hide");
    var backgrounds = document.getElementById("backgrounds");
    backgrounds.classList.toggle("hide");
  } else {
    txt = "Humm okkay";
  }
}

function socailMedia() {
  alert("You Need To Be Logged In...");
  window.open("/social", "_self");
}

/* HTTPS */

var loc = window.location.href + "";
if (loc.indexOf("http://") == 0) {
  window.location.href = loc.replace("http://", "https://");
}
