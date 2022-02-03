var farm = document.getElementById("farm");

block();

function block() {
  if (farm.title == "111") {
  } else {
    var createFarm = document.createElement("div");
    createFarm.className = "pixel";

  var tackCount = document.getElementById("FARM").value;
  var tackcount = tackCount + 1;
  document.getElementById("farm").title = tackcount;
  alert(tackcount)  

    createFarm.id = add;
    farm.title = add;
    var FARM = document.getElementById("farm").appendChild(createFarm);
    block();
  }
}
