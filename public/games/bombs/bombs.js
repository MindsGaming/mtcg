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
    Create.addEventListener("click", digging);
  }
  if (Create.id == "stop") {
    alert("Dig For Rewards");
  } else {
    Bombs();
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


function 