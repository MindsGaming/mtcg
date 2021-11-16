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

  (document.getElementById("makefood").innerHTML = tackCount);

  var addReward = document.getElementById("makefood");

  if (addReward.innerHTML == "100") {
    var rewards = document.getElementById("platedFood").value;
    var rewardscount = rewards + 1;
    document.getElementById("PlatedFood").value = rewardscount;
    var rewardstotal = document.getElementById("platedfood");
    rewardstotal.innerHTML = rewardscount;
    document.getElementById("makefood").innerHTML = "00";
    document.getElementById("makeFood").value = "1";

    var plateButton = document.getElementById("plateButton");
    plateButton.classList.toggle("buttonReady");
  }

}
