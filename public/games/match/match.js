function startBombs() {
  Bombs();
  var ID = ["rock", "bomb", "token"];
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
    var ID = ["bomb", "rock", "token"];
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
  matchOne();
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
  matchTwo();
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
  matchThree();
}

function score() {
  var tackCount = document.getElementById("SCORE").value;
  var tackcount = tackCount + 1;
  document.getElementById("SCORE").value = tackcount;
  document.getElementById("score").innerHTML = tackcount;
}

function matchOne() {
  var tackCount = document.getElementById("matchOne").value;
  var tackcount = tackCount + 1;
  document.getElementById("matchOne").value = tackcount;

  if (tackCount == "3") {
    score();
    document.getElementById("matchOne").value = "0";
    var  = document.getElementById("bomb");
    bomb.className = "hide";
  }
}

function matchTwo() {
  var tackCount = document.getElementById("matchTwo").value;
  var tackcount = tackCount + 1;
  document.getElementById("matchTwo").value = tackcount;
}

function matchThree() {
  var tackCount = document.getElementById("matchThree").value;
  var tackcount = tackCount + 1;
  document.getElementById("matchThree").value = tackcount;
}
