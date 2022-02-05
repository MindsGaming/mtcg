var farm = document.getElementById("FARM");

function addFarm() {
  if (farm.value == "10") {
  } else {
    
    
    var moreFarm = document.getElementById("FARM").value;
    var moreFarms = moreFarm + 1;
    document.getElementById("FARM").value = moreFarms;
    
    var createFarm = document.createElement("div");
    createFarm.className = "pixel";
    createFarm.ID = farm.id;
    var FARM = document.getElementById("farm").appendChild(createFarm);
    addFarm();

  }
}
