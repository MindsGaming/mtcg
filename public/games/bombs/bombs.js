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
    "rock",
    "stop"
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
    }
    if (Create.name == "rock") {
      Create.className = "rock";
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

    function Digging() {
      if (Create.name == "token") {
        Create.className = "reward";
      }
      if (Create.name == "rock") {
        Create.className = "rock";
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
    "https://cdn.glitch.me/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28%2FCow-moo-sound.mp3";
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
