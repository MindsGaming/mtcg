function viewReward() {
  var a = document.getElementById("REWARDS");

  if (a.title == "closed") {
    a.className = "userView";
    a.title = "Rewards";
  } else {
    a.className = "hide";
    a.title = "closed";
  }
}

function rewardSound() {
  var music = document.createElement("audio");
  music.src = "/images/coinsSound.mp3";
  music.volume = 0.3;
  music.autoPlay = false;
  music.title = "playing";
  var Music = document.getElementById("REWARDS").appendChild(music);
  played();
  rewardPop();
  function played() {
    if (Music.title == "playing") {
      music.play(), 5000;
      Music.title = "playing";
    } else {
      music.pause(), 5000;
      Music.title = "playing";
    }
  }
}

function rewardPop() {
  var a = document.getElementById("rewardPop");
  a.className = "rewardPop";
  poof = setTimeout(poof, 2000);
  poof();
  function poof() {
    a.className = "hide";
  }
}

function otherSound() {
  var music = document.createElement("audio");
  music.src = "/images/loginSound.mp3";
  music.volume = 0.3;
  music.autoPlay = false;
  music.title = "playing";
  var Music = document.getElementById("REWARDS").appendChild(music);
  played();

  function played() {
    if (Music.title == "playing") {
      music.play(), 5000;
      Music.title = "playing";
    } else {
      music.pause(), 5000;
      Music.title = "playing";
    }
  }
}

function oopsSound() {
  var music = document.createElement("audio");
  music.src = "/images/oppsSound.mp3";
  music.volume = 0.3;
  music.autoPlay = false;
  music.title = "playing";
  var Music = document.getElementById("REWARDS").appendChild(music);
  played();

  function played() {
    if (Music.title == "playing") {
      music.play(), 5000;
      Music.title = "playing";
    } else {
      music.pause(), 5000;
      Music.title = "playing";
    }
  }
}

function pendingClaims() {
  var a = document.getElementById("pendingClaims");

  if (a.title == "closed") {
    a.className = "overflow";
    a.title = "Panel";
  } else {
    a.className = "hide";
    a.title = "closed";
  }
}

function selectToken() {
  var tokens = [
    "GAMER",
    "DooBetter",
    "ECLIPSE",
    "DooBetter",
    "ECLIPSE",
    "GAMER"
  ];
  const newtoken = tokens[Math.floor(Math.random() * tokens.length)];
  var a = document.getElementById("myToken");
  a.innerHTML = newtoken;
}

/* Online Check */

const status = window.navigator.onLine;
if (status) online();
else offline();
window.addEventListener("online", online);
window.addEventListener("offline", offline);
function online() {
  var offlineNotice = document.getElementById("offline");
  offlineNotice.className = "hide";
}

function offline() {
  var offlineNotice = document.getElementById("offline");
  offlineNotice.className = "offline";
}

function checkStatus() {
  const status = window.navigator.onLine;
  if (status) online();
  else offline();
  window.addEventListener("online", online);
  window.addEventListener("offline", offline);
  function online() {
    var offlineNotice = document.getElementById("offline");
    offlineNotice.className = "hide";
  }

  function offline() {
    var offlineNotice = document.getElementById("offline");
    offlineNotice.className = "offline";
  }
}

/* SuperTimer */

function superTimer() {
  var a = document.getElementById("myToken");
  var token = a.innerHTML;

  if (token == "GAMER") {
    setInterval(setTime, 8981);
  }

  if (token == "DooBetter") {
    setInterval(setTime, 5000);
  }

  if (token == "ECLIPSE") {
    setInterval(setTime, 3141);
  }
}

function vrMode() {
  let text;
  if (confirm("Enter Classic Mode") == true) {
    alert("Coming Soon!");
  } else {
  }
}

function guest() {
  alert("Login To Earn Rewards");
  var createHUB = document.createElement("iframe");
  createHUB.src =
    "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
  createHUB.className = "SuperSplash";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);
  var closeHub = document.getElementById("hubs");
  closeHub.style = "display:block";
}

function getLogin() {
  var closeHub = document.getElementById("hubs");
  closeHub.style = "display:none";
}
