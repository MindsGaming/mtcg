function startBombs() {
  var matchOne = ["aOne", "aTwo", "aThree"];
  var matchTwo = ["bOne", "bTwo", "bThree"];
  var matchThree = ["cOne", "cTwo", "cThree"];

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
  create.title = "Match Images";
  create.id = random;
  create.name = random;
  var Create = document.getElementById("bombs").appendChild(create);
  Create.addEventListener("click", matching);
  Create.addEventListener("click", createImage);

  function createImage() {
    if (Create.id == "aone") {
      Create.className = "rock";
    }
     if (Create.id == "aone") {
      Create.className = "rock";
    } if (Create.id == "aone") {
      Create.className = "rock";
    }
    if (Create.id == matchTwo) {
      Create.className = "bomb";
    }
    if (Create.id == matchThree) {
      Create.className = "reward";
    }
  }

  function matching() {}

  Bombs();
}

function Bombs() {
  var matchOne = ["aOne", "aTwo", "aThree"];
  var matchTwo = ["bOne", "bTwo", "bThree"];
  var matchThree = ["cOne", "cTwo", "cThree"];

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
  create.title = "Match Images";
  create.id = random;
  create.name = random;
  var Create = document.getElementById("bombs").appendChild(create);
  Create.addEventListener("click", matching);
  Create.addEventListener("click", createImage);

  function createImage() {
    if (Create.id == matchOne) {
      Create.className = "rock";
    }
    if (Create.id == matchTwo) {
      Create.className = "bomb";
    }
    if (Create.id == matchThree) {
      Create.className = "reward";
    }
  }

  function matching() {}

  startBombs();
}