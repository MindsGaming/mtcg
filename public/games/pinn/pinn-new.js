function foodImage() {
  var tack = document.createElement("div");
  tack.className = "makefood";
  tack.id = "Made Food";
  var TACK = document.getElementById("foodImage").appendChild(tack);

  var tackCount = document.getElementById("makeFood").value;
  var tackcount = tackCount + 1;
  document.getElementById("makeFood").value = tackcount;

  document.getElementById("makefood").innerHTML = tackCount + "%";

  var addReward = document.getElementById("makefood");

  if (addReward.innerHTML == "100") {
    document.getElementById("makefood").innerHTML = "100";
    document.getElementById("makeFood").value = "1";

    var plateButton = document.getElementById("plateButton");
    plateButton.classList.toggle("buttonReady");
    var readyButton = document.getElementById("foodButton");
    readyButton.classList.toggle("hide");
  }
}

function platedImage() {
  var check = document.getElementById("makefood");

  if (check.innerHTML == "100") {
    check.innerHTML = "0";
    var tack = document.createElement("div");
    tack.className = "platedfood";
    tack.id = "Plated Food";
    var TACK = document.getElementById("platedImage").appendChild(tack);

    var tackCount = document.getElementById("platedFood").value;
    var tackcount = tackCount + 1;
    document.getElementById("platedFood").value = tackcount;

    document.getElementById("platedfood").innerHTML = tackCount;

    var foodButton = document.getElementById("foodButton");
    foodButton.className = "buttonReady";
  } else {
    alert("Make Some More Food");
  }
}
