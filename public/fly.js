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

function changeToken() {
  var a = document.getElementById("myToken");
  var current = document.getElementById("minutes");

  if (current.innerHTML == "00") {
    alert("You Need 1 Reward Token To Preform This Action");
  } else {
    claimUpdate();
  }
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
  checkStatus();
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
    let text;
    if (confirm("No Connection Found, Rewards Are Paused") == true) {
      checkStatus();
    } else {
      checkStatus();
    }
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
  var iconOne = document.getElementById("rewardicon");
  var iconTwo = document.getElementById("profileicon");
  closeHub.style = "display:none";
  iconOne.className = "rewardicon";
  iconTwo.className = "profileicon";
}

function vrMode() {
  var a = document.getElementById("vrMode");
  var currentWallet = dreamWallet.innerHTML;
  var iconOne = document.getElementById("rewardicon");
  var iconTwo = document.getElementById("profileicon");
  let text;
  if (a.title == "Hubs") {
    if (confirm("Change To Classic Mode?") == true) {
      viewReward();
      a.title = "Classic";
      a.innerHTML = "Classic";
      var createHUB = document.createElement("iframe");
      createHUB.src = "/games";
      createHUB.className = "SuperSplash";
      createHUB.allow = "microphone; camera; vr; speaker;";
      var CREATEHUB = document.getElementById("games").appendChild(createHUB);
      var openHub = document.getElementById("hu");
      openHub.className = "S";
    } else {
    }
  } else {
    if (a.innerHTML == "Classic") {
      if (confirm("Change To Hubs") == true) {
        viewReward();
        a.title = "Hubs";
        a.innerHTML = "Hubs";
        var createHUB = document.createElement("iframe");
        createHUB.src =
          "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
        createHUB.className = "SuperSplash";
        createHUB.allow = "microphone; camera; vr; speaker;";
        var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);
        var openHub = document.getElementById("games");
        openHub.className = "hide";
      } else {
      }
    }
  }
}
