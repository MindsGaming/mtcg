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

function help() {
  window.open("/help", "_blank");
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

function levelupPop() {
  var levelup = document.getElementById("rewardPop");
  levelup.className = "levelupIMG";
  levelup.addEventListener("click", poof);
  function poof() {
    levelup.className = "hide";
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
  if (dreamInput.value == "") {
    alert("Login To Use This Funtion");
    otherSound();
  } else {
    var current = document.getElementById("minutes");
    if (current.innerHTML == "00") {
      alert("You Need A Full Reward Token.");
      oopsSound();
    } else {
      var oldToken = dreamToken.innerHTML;
      let text;

      var newTokens = ["DragonToken", "ECLIPSE", "DooBetter", "GTPC", "GAMER"];
      const newtoken = newTokens[Math.floor(Math.random() * newTokens.length)];
      dreamToken.innerHTML = newtoken;

      if (newtoken == oldToken) {
        changeToken();
      } else {
        if (confirm("Burn Current Rewards And Toggle Token?") == true) {
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
          var remove = 1;
          var math = current.innerHTML - remove;
          reset();
        }
      }
    }
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
  var closeHub = document.getElementById("login");
  closeHub.className = "hide";
}

function getLogin() {
  var login = document.getElementById("login");
  var hubs = document.getElementById("hubs");
  var game = document.getElementById("games");
  login.className = "SuperSplash";
  hubs.className = "hide";
  game.className = "hide";
}

/* Play Modes */


function vrMode() {
  if (dreamInput.value == "") {
    alert("Login To Use This Function");
  } else {
    var createHUB = document.createElement("iframe");
    createHUB.src =
      "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
    createHUB.className = "SuperSplash";
    createHUB.allow = "microphone; camera; vr; speaker;";
    var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);

    var classic = document.getElementById("classicMode");
    var live = document.getElementById("liveMode");
    var hub = document.getElementById("vrMode");

    classic.className = "downarrow";
    live.className = "downarrow";
    hub.className = "downarrowG";
    viewReward();
  }
}

function classicMode() {
  if (dreamInput.value == "") {
    alert("Login To Use This Function");
  } else {
    var createHUB = document.createElement("iframe");
    createHUB.src = "/games";
    createHUB.className = "SuperSplash";
    createHUB.allow = "microphone; camera; vr; speaker;";
    var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);

    var classic = document.getElementById("classicMode");
    var live = document.getElementById("liveMode");
    var hub = document.getElementById("vrMode");
    var rewardIcon = document.getElementById("rewardicon");
    var profileIcon = document.getElementById("profileicon");

    classic.className = "downarrowG";
    live.className = "downarrow";
    hub.className = "downarrow";
    rewardIcon.className = "hide";
    profileIcon.className = "hide";
    viewReward();
  }
}

function liveMode() {
  if (dreamInput.value == "") {
    alert("Login To Use This Function");
  } else {
    var createHUB = document.createElement("iframe");
    createHUB.src = "/live";
    createHUB.className = "SuperSplash";
    createHUB.allow = "microphone; camera; vr; speaker;";
    var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);

    var classic = document.getElementById("classicMode");
    var live = document.getElementById("liveMode");
    var hub = document.getElementById("vrMode");

    classic.className = "downarrow";
    live.className = "downarrowG";
    hub.className = "downarrow";
    viewReward();
  }
}

function versionCheck() {
  alert(version.innerHTML);
}

/* Guest PAGE */

var createHUB = document.createElement("iframe");
createHUB.src =
  "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
createHUB.className = "SuperSplash";
createHUB.allow = "microphone; camera; vr; speaker;";
var CREATEHUB = document.getElementById("guest").appendChild(createHUB);
var openHub = document.getElementById("guest");
