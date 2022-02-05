var farm = document.getElementById("FARM");
var createFarm = document.createElement("div");


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
    addFarm();
  }
}

function item(){
  var salt = document.getElementById("salt");
  
  if (salt.title == "salt"){
  var fun = document.getElementByTag("div");
  var newID = fun.id;
  
    createFa
  createFarm.className  = "salt"
  
  }
  
}