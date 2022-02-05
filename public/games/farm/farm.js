var farm = document.getElementById("farm");
addFarm();

function addFarm() {
  if (farm.id == "100") {
  } else {
    var createFarm = document.createElement("div");
    createFarm.className = "pixel";
    createFarm.ID = farm.id;
    var FARM = document.getElementById("farm").appendChild(createFarm);

    var tackCount = document.getElementById("FARM").value;
    var tackcount = tackCount + 1;
    document.getElementById("FARM").value = tackcount;
    createFarm.id = tackcount;
    addFarm();
  }
}
