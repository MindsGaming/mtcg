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
    var rewards = document.getElementById("rewards").value;
    var rewardscount = rewards + 1;
    document.getElementById("rewards").value = rewardscount;
    document.getElementById("rewardstotal").innerHTML = rewardscount;
    document.getElementById("tackCount").value = "1";
  }
}
