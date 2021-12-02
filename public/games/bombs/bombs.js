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

  var create = document.createElement("div");
  create.className = "pixel";
  create.title = "Dig For Rewards";
  create.id = random;
  var Create = document.getElementById("bombs").appendChild(create);

  if (Create.id == "token") {
    Create.addEventListener("click", rewardFound);
  } else {
    Bombs();
  }
  if (Create.id == "rock") {
    Create.addEventListener("click", rockFound);
  } else {
    Bombs();
  }
  if (Create.id == "bomb") {
    Create.addEventListener("click", bombFound);
  } else {
    Bombs();
  }
  if (Create.id == "stop") {
    alert("Dig For Rewards");
  } else {
    Bombs();
  }

  function rewardFound() {
    Create.className = "reward";
  }
  function rockFound() {
    Create.className = "rock";
  }
  function bombFound() {
    Create.className = "bomb";
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
  create.id = random;
  var Create = document.getElementById("bombs").appendChild(create);
  startBombs();
}
