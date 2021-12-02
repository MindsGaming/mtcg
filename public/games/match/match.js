function startBombs() {
 
  var ID = ["aOne", "aTwo", "aThree"];
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
    if (Create.id == "aOne") {
      Create.className = "rock";
      var tackCount = document.getElementById("matchOne").value;
      var tackcount = tackCount + 1;
      document.getElementById("matchOne").value = tackcount;
      
    }

    if (Create.id == "aTwo") {
      Create.className = "bomb";
      var tackCount = document.getElementById("matchTwo").value;
      var tackcount = tackCount + 1;
      document.getElementById("matchOne").value = tackcount;
  
    }
    if (Create.id == "aThree") {
      Create.className = "reward";
      var tackCount = document.getElementById("matchThree").value;
      var tackcount = tackCount + 1;
      document.getElementById("matchOne").value = tackcount;
    
    }
  }

  function matching() {
          var tackCount = document.getElementById("matchOne").value;
if (tackCount == "3"){
 document.getElementById("score").innerHTML = tackCount;  
}
    
    
  }

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
