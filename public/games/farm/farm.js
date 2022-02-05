var farm = document.getElementById("FARM");
var createFarm = document.createElement("div");

var createSalt = document.createElement("salt");
createFarm.addEventListener("click", salt);

function salt(){
createSalt.className = "salt";
createSalt.id = "Salty"
}

addFarm();
function addFarm() {
  if (farm.value == "90") {
  } else {
    
    
    var moreFarm = document.getElementById("FARM").value;
    var moreFarms = moreFarm + 1;
    document.getElementById("FARM").value = moreFarms;
    
    createFarm.className = "pixel";
    createFarm.id = moreFarms;
    createFarm.title = moreFarms;
    var FARM = document.getElementById("farm").appendChild(createFarm);
    createFarm.addEventListener("click", item);

    addFarm();

  }
}

function item(){
  var salt = document.getElementById("salt");
  createFarm.className  = "salt"
}