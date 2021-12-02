function startBombs() {
  var matchOne = ["aOne", "aTwo", "aThree"];

  var matchTwo = ["bOne", "bTwo", "bThree"];

  var matchThree = ["cOne", "cTwo", "cThree"];

  var ID = [matchOne, matchTwo, matchThree];
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
    if (Create.id == matchOne) {
      Create.className = "reward";
    }
    if (Create.id == ",,") {
      Create.className = "reward";
    }
  }

  function matching() {}

  Bombs();
}

function Bombs() {
  var matchOne = [
    document.getElementById("aOne"),
    document.getElementById("aTwo"),
    document.getElementById("aThree")
  ];

  var matchTwo = [
    document.getElementById("bOne"),
    document.getElementById("bTwo"),
    document.getElementById("bThree")
  ];

  var matchThree = [
    document.getElementById("cOne"),
    document.getElementById("cTwo"),
    document.getElementById("cThree")
  ];

  var ID = [matchOne, matchTwo, matchThree];
  const random = ID[Math.floor(Math.random() * ID.length)];

  const create = document.createElement("div");
  create.className = "pixel";
  create.title = "Match Images";
  create.id = random;
  create.name = random;
  var Create = document.getElementById("bombs").appendChild(create);
  Create.addEventListener("click", matching);

  function matching() {}

  startBombs();
}
