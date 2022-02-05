var farm = document.getElementById("FARM");
addFarm();
function addFarm() {
  if (farm.value == "90") {
  } else {
    
    
    var moreFarm = document.getElementById("FARM").value;
    var moreFarms = moreFarm + 1;
    document.getElementById("FARM").value = moreFarms;
    
    var createFarm = document.createElement("div");
    createFarm.className = "pixel";
    createFarm.id = moreFarms;
    createFarm.title = moreFarms;
    var FARM = document.getElementById("farm").appendChild(createFarm);
    addFarm();

  }
}
