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

function vrMode() {
  var mode = document.getElementById("vrMode");
  var walletmode = document.getElementById("myWallet");
  var sticker = dreamInput.value;
  var iconOne = document.getElementById("rewardicon");
  var iconTwo = document.getElementById("profileicon");

  let text;
  if (confirm("Change Modes?") == true) {
    if (mode.title == "Hubs") {
      viewReward();
      iconOne.className = "hide";
      iconTwo.className = "hide";
      var createHUB = document.createElement("iframe");
      createHUB.src = "/games";
      createHUB.className = "SuperSplash";
      createHUB.allow = "microphone; camera; vr; speaker;";
      var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);
      var openHub = document.getElementById("hubs");
      openHub.style = "display:block";
      mode.title = "Classic";
      mode.innerHTML = "Classic";
      walletmode.innerHTML = sticker;
      if (token.innerHTML == "LOGIN") {
        poof = setTimeout(poof, 5000);
        poof();
        function poof() {
          walletmode.innerHTML = token;
        }
      }
    } else {
      if ((mode.title = "Classic")) {
        var createHUB = document.createElement("iframe");
        createHUB.src =
          "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
        createHUB.className = "SuperSplash";
        createHUB.allow = "microphone; camera; vr; speaker;";
        var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);
        var openHub = document.getElementById("hubs");
        openHub.style = "display:block";
        mode.title = "Hubs";
        mode.innerHTML = "Hubs";
        walletmode.innerHTML = sticker;
      }
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
  closeHub.style = "display:none";
}
