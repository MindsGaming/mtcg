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
    var readyButton = document.getElementById("foodButton");
    readyButton.classList.toggle("button");
  }
}

function platedImage() {
  var tack = document.createElement("div");
  tack.className = "platedfood";
  tack.id = "Plated Food";
  var TACK = document.getElementById("platedImage").appendChild(tack);

  var tackCount = document.getElementById("platedFood").value;
  var tackcount = tackCount + 1;
  document.getElementById("platedFood").value = tackcount;

  document.getElementById("platedfood").innerHTML = tackCount;

  var addReward = document.getElementById("platedfood");

  if (addReward.innerHTML == "100") {
    document.getElementById("platedfood").innerHTML = "00";
    document.getElementById("platedFood").value = "1";

    var plateButton = document.getElementById("plateButton");
    plateButton.classList.toggle("buttonReady");
  }
}
