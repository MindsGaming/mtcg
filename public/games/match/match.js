function startBombs() {
  Bombs();
  const ID = [
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
      matchOne();
    }
    if (Create.name == "rock") {
      Create.className = "rock";
      rockSound();
      matchTwo();
    }
    if (Create.name == "bomb") {
      Create.className = "bomb";
      bombSound();
      matchThree();
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
        matchOne();
      }
      if (Create.name == "rock") {
        Create.className = "rock";
        rockSound();
        matchTwo();
      }
      if (Create.name == "bomb") {
        Create.className = "bomb";
        bombSound();
        matchThree();
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
  Create.addEventListener("click", checkMatch);
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
  Create.addEventListener("click", checkMatch);
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
  Create.addEventListener("click", checkMatch);
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
}

function matchTwo() {
  var tackCount = document.getElementById("matchTwo").value;
  var tackcount = tackCount + 1;
  document.getElementById("matchOne").value = tackcount;
}

function matchThree() {
  var tackCount = document.getElementById("matchThree").value;
  var tackcount = tackCount + 1;
  document.getElementById("matchOne").value = tackcount;
}

function checkMatch() {
  
  
  var tackCount1 = document.getElementById("matchThree").value;
  var tackCount2 = document.getElementById("matchTwo").value;
  var tackCount3 = document.getElementById("matchOne").value;
    

  if (tackCount1 == "3") {
    tackCount1 = "0";
    score();
  }
  
  }
  if (tackCount2 == "3") {
    tackCount1 = "0";
    score();
  }
  if (tackCount3 == "3") {
    tackCount1 = "0";
    score();
  }
}
