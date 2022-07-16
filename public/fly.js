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

      var extralist = ["DragonToken", "ECLIPSE", "DooBetter", "GTPC"];
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
  var login = document.getElementById("login");
  var hubs = document.getElementById("hubs");
  var games = document.getElementById("games");

  if (hubs.title == "HUBS") {
    vrMode();
  }
  if (games.title == "GAMES") {
    classicMode();
  }
  login.className = "hide";
  viewReward();
  checkMODE();
}

function getLogin() {
  window.open("/", "_self");
}

/* Play Modes */

function vrMode() {
  var hubs = document.getElementById("hubs");
  if (hubs.title == "HUBS") {
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
    viewReward();
  }
  if (hubs.title == "CLOSED") {
    hubs.title = "HUBS";
    vrMode();
  }
}

function classicMode() {
  
  var c
  
  var classic = document.getElementById("games");
  classic.title = "games";
  if (classic.title == "games") {
    classic.title = "GAMES";
    classic.className = "SuperSplash";
    var hubs = document.getElementById("hubs");
    hubs.className = "hide";
    hubs.title = "CLOSED";
    var createMTCG = document.createElement("iframe");
    createMTCG.src = "https://mtcgverse.glitch.me/";
    createMTCG.className = "SuperSplash";
    var CREATEMTCG = document.getElementById("games").appendChild(createMTCG);

    var removelogin = document.getElementById("login");
    removelogin.className = "hide";
    
    
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
var CREATEHUB = document.getElementById("HUBS");

function closePOP() {
  var pop = document.getElementById("POP");
  pop.className = "hide";
}

function metaHOOKS() {
  var hubs = document.getElementById("hubs");
  var createHUB = document.createElement("iframe");

  createHUB.src =
    "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
  createHUB.className = "SuperSplash";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("hubs").appendChild(createHUB);
}
