startBombs();

function startBombs() {
  
  Bombs();

  var ID = [
    "bomb",
    "rock",
    "token",
    "rock",
    "bomb",
    "bomb",
    "rock",
    "token",
    "bomb",
    "rock",
    "rock",
    "bomb",
    "bomb",
    "rock"
  ];
  const random = ID[Math.floor(Math.random() * ID.length)];

  const create = document.createElement("div");
  create.className = "pixel";
  create.title = "Dig For Rewards";
  create.id = random;
  create.name = random;
  var Create = document.getElementById("bombs").appendChild(create);
  Create.addEventListener("click", Digging);

  function Digging() {
    if (Create.name == "token") {
      Create.className = "reward";
      rewardSound();
    }
    if (Create.name == "rock") {
      Create.className = "rock";
      rockSound();
    }
    if (Create.name == "bomb") {
      Create.className = "bomb";
      bombSound();
    }
  }

  function Bombs() {
    var ID = [
      "bomb",
      "rock",
      "token",
      "rock",
      "bomb",
      "bomb",
      "rock",
      "token",
      "bomb",
      "rock",
      "rock",
      "bomb",
      "bomb",
      "rock"
    ];
    const random = ID[Math.floor(Math.random() * ID.length)];

    var create = document.createElement("div");
    create.className = "pixel";
    create.title = "Dig For Rewards";
    create.name = random;
    create.id = random;
    create.name = random;
    var Create = document.getElementById("bombs").appendChild(create);
    Create.addEventListener("click", Digging);
    startBombs();

    if (create.id == "bomb") {
      startBombs();
    }
    if (create.id == "rock") {
      startBombs();
    }
    if (create.id == "token") {
      startBombs();
    }

    function Digging() {
      if (Create.name == "token") {
        Create.className = "reward";
        rewardSound();
      }
      if (Create.name == "rock") {
        Create.className = "rock";
        rockSound();
      }
      if (Create.name == "bomb") {
        Create.className = "bomb";
        bombSound();
      }
    }
  }
  
}

function bombSound() {
  var music = document.createElement("audio");
  music.src =
    "https://cdn.glitch.me/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28%2FSmall-explosion-in-the-distance-sound-effect.mp3";
  music.volume = 0.3;
  music.autoPlay = false;
  music.title = "playing";
  var Music = document.getElementById("bomb").appendChild(music);
  played();
  var Create = document.getElementById("bomb");
  Create.addEventListener("click", played);

  function played() {
    if (Music.title == "playing") {
      music.play(), 5000;
      Music.title = "playing";
    } else {
      music.pause(), 5000;
      Music.title = "paused";
    }
  }
}

function rockSound() {
  var music = document.createElement("audio");
  music.src =
    "https://cdn.glitch.me/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28%2Fboing-sound-effect.mp3";
  music.volume = 0.3;
  music.autoPlay = false;
  music.title = "playing";
  var Music = document.getElementById("rock").appendChild(music);
  played();
  var Create = document.getElementById("rock");
  Create.addEventListener("click", played);

  function played() {
    if (Music.title == "playing") {
      music.play(), 5000;
      Music.title = "playing";
    } else {
      music.pause(), 5000;
      Music.title = "paused";
    }
  }
}
function rewardSound() {
  var music = document.createElement("audio");
  music.src =
    "https://cdn.glitch.me/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28%2Fcash-register-sound-effect.mp3";
  music.volume = 0.3;
  music.autoPlay = false;
  music.title = "playing";
  var Music = document.getElementById("token").appendChild(music);
  played();
  var Create = document.getElementById("token");
  Create.addEventListener("click", played);

  function played() {
    if (Music.title == "playing") {
      music.play(), 5000;
      Music.title = "playing";
    } else {
      music.pause(), 5000;
      Music.title = "paused";
    }
  }
  score();
}

function score() {
  var tackCount = document.getElementById("SCORE").value;
  var tackcount = tackCount + 1;
  document.getElementById("SCORE").value = tackcount;
  document.getElementById("score").innerHTML = tackcount;
  
  if(tackCount == "99"){
    var winPrize = document.getElementById("PRIZE").value;
    var prizeCount = winPrize + 1;
    document.getElementById("PRIZE").value = prizeCount;
  document.getElementById("prize").innerHTML = prizeCount;
    document.getElementById("SCORE").value = 0;
  document.getElementById("score").innerHTML = 0;
  }
    if(tackCount == "100"){
    var winPrize = document.getElementById("PRIZE").value;
    var prizeCount = winPrize + 1;
    document.getElementById("PRIZE").value = prizeCount;
  document.getElementById("prize").innerHTML = prizeCount;
    document.getElementById("SCORE").value = 1;
  document.getElementById("score").innerHTML = 1;
  }
}

var timeM = document.getElementById("timeM");
var timeS = document.getElementById("timeS");
var timeM = document.getElementById("timeM");
var timeS = document.getElementById("timeS");
var CREDITS = document.getElementById("SCORE");
var credits = document.getElementById("score");
var PRIZE = document.getElementById("prize");


var totalSeconds = 0;

function setTime() {
  ++totalSeconds;
  timeS.innerHTML = pad(totalSeconds % 60);
  timeM.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

var boost = setInterval(setTime, 1000);

function loadRewards() {
  if (timeM.innerHTML == "00") {
    alert("You Need A Full Reward");
  } else {
    var currents = timeS.innerHTML;
    var currentm = timeM.innerHTML;
    var credm = PRIZE.innerHTML;
    var cred = CREDITS.value;
    var total = currents + cred;
    var totalp = currentm + credm;
    CREDITS.value = total + "." + totalp;
    credits.innerHTML = CREDITS.value;
    PRIZE.innerHTML = totalp;
      reset();
  }
}

function claimPrize() {
  if (dreamInput.value == "") {
     var login = document.getElementById("getLogin");
    login.className = "SuperSplash";
  }
  else{
    claimUpdate();
  }
  
}
