var farm = document.getElementById("farm");

block();

function block() {
  if (farm.title == "100") {
  } else {
    var createFarm = document.createElement("div");
    createFarm.className = "pixel";

  var tackCount = document.getElementById("FARM").value;
  var tackcount = tackCount + 1;
  document.getElementById("FARM").value = tackcount;

    createFarm.id = tackcount;
    farm.title = tackcount;
    var FARM = document.getElementById("farm").appendChild(createFarm);
    block();
  }
}
