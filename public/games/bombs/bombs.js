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
  create.title = random;
  create.id = random;
  create.name = random;
  var Create = document.getElementById("bombs").appendChild(create);
  Create.addEventListener("click", rewardFound);


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
  create.title = random;
  create.name = random;
  create.id = random;
  var Create = document.getElementById("bombs").appendChild(create);
  startBombs();
}
