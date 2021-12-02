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
    var matchOne = document.getElementById("matchOne").value;
    var matchTwo = document.getElementById("matchTwo").value;
    var matchThree = document.getElementById("matchThree").value;

    if (matchOne == "3") {
      var tackCount = document.getElementById("SCORE").value;
      var tackcount = tackCount + 1;
      document.getElementById("SCORE").value = tackcount;
    } else {
      document.getElementById("matchOne").value = "0";
      document.getElementById("matchTwo").value = "0";
      document.getElementById("matchThree").value = "0";
      Create.className = "pixel";
    }
    if (matchTwo == "3") {
      var tackCount = document.getElementById("SCORE").value;
      var tackcount = tackCount + 1;
      document.getElementById("SCORE").value = tackcount;
    } else {
      document.getElementById("matchOne").value = "0";
      document.getElementById("matchTwo").value = "0";
      document.getElementById("matchThree").value = "0";
      Create.className = "pixel";
    }
    if (matchThree == "3") {
      var tackCount = document.getElementById("SCORE").value;
      var tackcount = tackCount + 1;
      document.getElementById("SCORE").value = tackcount;
    } else {
      document.getElementById("matchOne").value = "0";
      document.getElementById("matchTwo").value = "0";
      document.getElementById("matchThree").value = "0";
      Create.className = "pixel";
    }
  }

  Bombs();
  getScore();
}

function Bombs() {
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
    var matchOne = document.getElementById("matchOne").value;
    var matchTwo = document.getElementById("matchTwo").value;
    var matchThree = document.getElementById("matchThree").value;

    if (matchOne == "3") {
      var tackCount = document.getElementById("SCORE").value;
      var tackcount = tackCount + 1;
      document.getElementById("SCORE").value = tackcount;
    } else {
      document.getElementById("matchOne").value = "0";
      document.getElementById("matchTwo").value = "0";
      document.getElementById("matchThree").value = "0";
      Create.className = "pixel";
    }
    if (matchTwo == "3") {
      var tackCount = document.getElementById("SCORE").value;
      var tackcount = tackCount + 1;
      document.getElementById("SCORE").value = tackcount;
    } else {
      document.getElementById("matchOne").value = "0";
      document.getElementById("matchTwo").value = "0";
      document.getElementById("matchThree").value = "0";
      Create.className = "pixel";
    }
    if (matchThree == "3") {
      var tackCount = document.getElementById("SCORE").value;
      var tackcount = tackCount + 1;
      document.getElementById("SCORE").value = tackcount;
    } else {
      document.getElementById("matchOne").value = "0";
      document.getElementById("matchTwo").value = "0";
      document.getElementById("matchThree").value = "0";
      Create.className = "pixel";
    }
  }

  startBombs();
  getScore();
}

function getScore() {
  document.getElementById("score").innerHTML = document.getElementById(
    "SCORE"
  ).value;
}
