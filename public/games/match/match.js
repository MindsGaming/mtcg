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
  Create.addEventListener("click", checkMatch);

  function Digging() {
    if (Create.name == "token") {
      Create.className = "reward";
      Create.title = "fliped";
      rewardSound();
    }
    if (Create.name == "rock") {
      Create.className = "rock";
      Create.title = "fliped";
      rockSound();
    }
    if (Create.name == "bomb") {
      Create.className = "bomb";
      bombSound();
    }
  }

  function checkMatch() {
    var matchOne = document.getElementById("matchOne").value;
    var matchTwo = document.getElementById("matchTwo").value;
    var matchThree = document.getElementById("matchThree").value;

    var ITEM = ID;

    if (matchOne == "3") {
      score();
      document.getElementById("matchOne").value = "0";
      var ITEM = document.getElementByID("token");
    } else {
      Create.className = "pixel";
    }

    if (matchTwo == "3") {
      score();
      document.getElementById("matchOne").value = "0";
      var ITEM = document.getElementByID("token");
    } else {
      Create.className = "pixel";
    }
    if (matchThree == "3") {
      score();
      document.getElementById("matchOne").value = "0";
      var ITEM = document.getElementByID("token");
    } else {
      Create.className = "pixel";
    }

    if (matchOne == "0") {
      document.getElementById("matchOne").value = "0";
      var ITEM = document.getElementByID("token");
    } else {
      Create.className = "pixel";
    }

    if (matchTwo == "0") {
      var ITEM = document.getElementById("matchTwo").value;
      var plus = ITEM + 1;
      document.getElementById("matchTwo").value = plus;
    } else {
      document.getElementById("matchTwo").value = "0";
    }

    if (matchThree == "0") {
      var ITEM = document.getElementById("matchThree").value;
      var plus = ITEM + 1;
      document.getElementById("matchThree").value = plus;
    } else {
      document.getElementById("matchOne").value = "0";
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
}
