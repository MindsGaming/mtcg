const click = document
  .getElementById("playername")
  .addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      enterWallet();
    }
  });

function enterWallet() {
  var a = document.getElementById("username");
  a.className = "hide";
  var b = document.getElementById("rewardtoken");
  b.className = "";
  var c = document.getElementById("username");
  var d = document.getElementById("myName");
  d.innerHTML = c.value;
  var e = document.getElementById("playerBTN");
  e.className = "hide";
}

function gamertokens() {
  var a = document.getElementById("rewardtoken");
  a.className = "hide";
  var b = document.getElementById("wallet");
  b.className = "";
  var c = "GAMER";
  var d = document.getElementById("myToken");
  d.innerHTML = c;
  var e = document.getElementById("REWARDTOKEN");
  e.value = c;
}

function doobettertokens() {
  var a = document.getElementById("rewardtoken");
  a.className = "hide";
  var b = document.getElementById("wallet");
  b.className = "form";
  var c = "DooBetter";
  var d = document.getElementById("myToken");
  d.innerHTML = c;
  var e = document.getElementById("REWARDTOKEN");
  e.value = c;
}

function eclipsetokens() {
  var a = document.getElementById("rewardtoken");
  a.className = "hide";
  var b = document.getElementById("wallet");
  b.className = "form";
  var c = "ECLIPSE";
  var d = document.getElementById("myToken");
  d.innerHTML = c;
  var e = document.getElementById("REWARDTOKEN");
  e.value = c;
}

function viewReward() {
  var a = document.getElementById("REWARDS");

  if (a.title == "closed") {
    a.className = "userView";
    a.title = "Rewards";
    showCurrent();
  } else {
    a.className = "hide";
    a.title = "closed";
    showCurrent();
  }

  function showCurrent() {
    var b = document.getElementById("myRewards");
    var c = document.getElementById("lifeScore");

    var d = document.getElementById("minutes");
    var e = document.getElementById("seconds");

    var addS = e.innerHTML;
    var addM = d.innerHTML;
    var newP = addM + "." + addS;
    b.innerHTML = newP;
    var newLife = c.value + newP;
    c.value = newLife;
  }
}

function guest() {
  alert("Login To Earn Rewards");
  var createHUB = document.createElement("iframe");
  createHUB.src =
    "https://hubs.mozilla.com/8hYMRnN?embed_token=338fcf3b8fcd2312c3be7556ccf5e37e";
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

function rewardSound() {
  var music = document.createElement("audio");
  music.src =
    "https://cdn.glitch.me/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28%2Fcash-register-sound-effect.mp3";
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

function rewardPop() {
  var a = document.getElementById("rewardPop");
  a.className = "rewardPop";

  var b = document.getElementById("seconds");
  var current = b.innerHTML;
  var remove = +2;
  var poof = current + remove;

  if (current == poof) {
    a.className = "hide";
  }
}

function otherSound() {
  var music = document.createElement("audio");
  music.src =
    "https://cdn.glitch.me/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28%2Fboing-sound-effect.mp3";
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
