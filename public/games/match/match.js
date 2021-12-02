function startBombs() {
  Bombs();
  var ID = [
    "aOne",
    "aTwo",
    "aThree",
    "bOne",
    "bTwo",
    "bThree",
    "cOne",
    "cTwo",
    "cThree"
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
      "aOne",
      "aTwo",
      "aThree",
      "bOne",
      "bTwo",
      "bThree",
      "cOne",
      "cTwo",
      "cThree"
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

    if (create.id == "aOne") {
      var matchOne = document.getElementById("aTwo");
      var matchTwo = document.getElementById("aThree");
      matchOne.addEventListener("click", match);
      matchTwo.addEventListener("click", match);
      Create.className = "rock";
    }
    if (create.id == "rock") {
      startBombs();
    }
    if (create.id == "token") {
      startBombs();
    }

    function match() {
      var matchOne = document.getElementById("aOne");
      var matchTwo = document.getElementById("aTwo");
      var matchThree = document.getElementById("aThree");
      var matchFour = document.getElementById("bOne");
      var matchFive = document.getElementById("bTwo");
      var matchSix = document.getElementById("bThree");
      var matchSeven = document.getElementById("cOne");
      var matchEight = document.getElementById("cTwo");
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
}
