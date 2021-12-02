function startBombs() {
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
  
  var ID = [
    matchOne,
    matchTwo,
    matchThree
  ];
  const random = ID[Math.floor(Math.random() * ID.length)];
  
  const create = document.createElement("div");
  create.className = "pixel";
  create.title = "Dig For Rewards";
  create.id = random;
  create.name = random;
  var Create = document.getElementById("bombs").appendChild(create);
  Create.addEventListener("click", match);

  
  
}
