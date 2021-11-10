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
    var rewardstotal = document.getElementById("rewardstotal");
    rewardstotal.innerHTML = rewardscount;
    document.getElementById("total").innerHTML = "00";
    document.getElementById("tackCount").value = "1";
  }
}

function cashOut() {
  var rewards = document.getElementById("rewards");
  var total = document.getElementById("total");

  if (rewards.innerHTML == "0") {
    alert("You Need A Full Token TO Cash Out!");
  } else {
    var txt;
    var r = confirm("Quit Already?");
    if (r == true) {
      const data = {
        dream:
          dreamInput.value +
          "-" +
          dreamInputuser.value +
          dreamInputplayer.value +
          " Reward: "
      };

      appendNewDream(
        dreamInput.value +
          "-" +
          dreamInputuser.value +
          " Reward: " +
          dreamInputplayer.value +
          rewards.value +
          total.innerHTML
      );
      window.open("./");
    } else txt = "You pressed Cancel!";
  }
}
