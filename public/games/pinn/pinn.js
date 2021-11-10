function createPinn() {
  var tack = document.createElement("div");
  tack.className = "tack";
  tack.id = "PINN";
  var TACK = document.getElementById("tack").appendChild(tack);

  var tackCount = document.getElementById("tackCount").value;
  var tackcount = tackCount + 1;
  document.getElementById("tackCount").value = tackcount;

  document.getElementById("total").innerHTML = tackCount;

  var addReward = document.getElementById("total");

  if (addReward.innerHTML == "100") {
    var base = document.getElementById("rewards").innerHTML;
    document.getElementById("rewards").innerHTML = base + 1;
    document.getElementById("total").innerHTML = "0";
    document.getElementById("tackCount").value = "1";
  }
}
