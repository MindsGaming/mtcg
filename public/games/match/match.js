function startBombs() {
 Bombs();
  Bombs();
  Bombs();
  Bombs();
  Bombs();
  Bombs();Bombs();
  Bombs();
  Bombs();
  }

  function Bombs() {
    var ID = [
      "bomb",
      "rock",
      "token"
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

   
    function Digging() {
      if (Create.name == "token") {
        Create.className = "reward";
        Create.tite = "flipped";
        rewardSound();
      }
      if (Create.name == "rock") {
        Create.className = "rock";
        Create.tite = "flipped";
        rockSound();
      }
      if (Create.name == "bomb") {
        Create.className = "bomb";
        Create.tite = "flipped";
        bombSound();
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

function rockSound() {
  var music = document.createElement("audio");
  music.src =
    "https://cdn.glitch.me/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28%2Fboing-sound-effect.mp3";
  music.volume = 0.3;
  music.autoPlay = false;
  music.title = "playing";
  var Music = document.getElementById("rock").appendChild(music);
  played();

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
  checkMatch();
}

function matchTwo() {
  var tackCount = document.getElementById("matchTwo").value;
  var tackcount = tackCount + 1;
  document.getElementById("matchTwo").value = tackcount;
  checkMatch();
}

function matchThree() {
  var tackCount = document.getElementById("matchThree").value;
  var tackcount = tackCount + 1;
  document.getElementById("matchThree").value = tackcount;
  checkMatch();
}

function checkMatch() {
  var tackCount1 = document.getElementById("matchThree").value;
  var tackCount2 = document.getElementById("matchTwo").value;
  var tackCount3 = document.getElementById("matchOne").value;

  if (tackCount1 == "3") {
    tackCount1 = "0";
    score();
    var ITEM = document.getElementById("token");
    if (ITEM.title == "flipped") {
      ITEM.className = "hide";
    }
  }

  if (tackCount2 == "3") {
    tackCount2 = "0";
    score();
    var ITEM = document.getElementById("rock");
    if (ITEM.title == "flipped") {
      ITEM.className = "hide";
    }
  }

  if (tackCount3 == "3") {
    tackCount3 = "0";
    score();
    var ITEM = document.getElementById("bomb");
    if (ITEM.title == "flipped") {
      ITEM.className = "hide";
    }
  }

  if (tackCount1 == "2") {
    tackCount1 = "0";
    var ITEM = document.getElementById("token");
    if (ITEM.title == "flipped") {
      ITEM.className = "pixel";
    }
  }

  if (tackCount2 == "2") {
    tackCount2 = "0";
    var ITEM = document.getElementById("rock");
    if (ITEM.title == "flipped") {
      ITEM.className = "pixel";
    }
  }
  if (tackCount3 == "2") {
    tackCount3 = "0";
    var ITEM = document.getElementById("bomb");
    if (ITEM.title == "flipped") {
      ITEM.className = "pixel";
    }
  }
}
