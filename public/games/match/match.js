function startBombs() {
  Bombs();
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
}

function Bombs() {
  var ID = [
    "bomb",
    "rock",
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
  create.id = random;
  create.name = random;
  var Create = document.getElementById("bombs").appendChild(create);
  Create.addEventListener("click", Digging);
  startBombs();

  function Digging() {
    if (Create.id == "token") {
      Create.className = "reward";
      Create.id = "flipped";
      rewardSound();
      Digging();
    }
    if (Create.id == "rock") {
      Create.className = "rock";
      Create.id = "flipped";
      rockSound();
    }
    if (Create.id == "bomb") {
      Create.className = "bomb";
      Create.id = "flipped";
      bombSound();
    }

    if (Create.id == "flipped") {
      var check = document.getElementById("flipped");
      check.className = "hide";
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
}

function score() {
  var tackCount = document.getElementById("SCORE").value;
  var tackcount = tackCount + 1;
  document.getElementById("SCORE").value = tackcount;
  document.getElementById("score").innerHTML = tackcount;

  var time = document.getElementById("minutes").value;
  var boost = tackCount + time;
  document.getElementById("minutes").value = boost;
}
