const madefood = document.getElementById("madefood");
const madeFood = document.getElementById("madeFood");
const platedfood = document.getElementById("platedfood");
const platedFood = document.getElementById("madefood");
const servedfood = document.getElementById("servedfood");
const servedFood = document.getElementById("servedFood");
const rewards = document.getElementById("rewards");
const Rewards = document.getElementById("Rewards");

function foodImage() {
  var tack = document.createElement("div");
  tack.className = "makefood";
  tack.id = "Made Food";
  var TACK = document.getElementById("foodImage").appendChild(tack);

  var tackCount = document.getElementById("makeFood").value;
  var tackcount = tackCount + 1;
  document.getElementById("makeFood").value = tackcount;

  document.getElementById("makefood").innerHTML = tackCount;

  var addReward = document.getElementById("makefood");

  if (addReward.innerHTML == "100") {
    document.getElementById("makefood").innerHTML = "00";
    document.getElementById("makeFood").value = "1";

    var plateButton = document.getElementById("plateButton");
    plateButton.classList.toggle("buttonReady");
    plateImage();
  }
}
function plateImage() {
  var tack = document.createElement("div");
  tack.className = "platefood";
  tack.id = "Plated Food";
  var TACK = document.getElementById("plateImage").appendChild(tack);

  var tackCount = document.getElementById("plateFood").value;
  var tackcount = tackCount + 1;
  document.getElementById("plateFood").value = tackcount;

  document.getElementById("platefood").innerHTML = tackCount;

  var addReward = document.getElementById("platefood");

  if (addReward.innerHTML == "1") {
    document.getElementById("makeImage").innerHTML = "00";
    document.getElementById("makeFood").value = "1";

    var plateButton = document.getElementById("plateButton");
    plateButton.classList.toggle("buttonReady");
    plateImage();
  }
}

