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

  if (addReward.innerHTML == "100%") {
    document.getElementById("makefood").innerHTML = "100%";
    document.getElementById("makeFood").value = "1";

    var plateButton = document.getElementById("plateButton");
    plateButton.className = "buttonReady";
    var readyButton = document.getElementById("foodButton");
    readyButton.classList.toggle("hide");
  }
  TACK.className = "makefood";
}

function platedImage() {
  var check = document.getElementById("makefood");

  if (check.innerHTML == "100%") {
    check.innerHTML = "0%";
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
    var serveButton = document.getElementById("serveButton");
    serveButton.className = "buttonReady";
  } else {
    alert("Make Some More Food");
  }
}

function servedImage() {
  var check = document.getElementById("platedfood");

  if ((check.innerHTML == "1", "2", "3", "4", "5")) {
    var tackCount = document.getElementById("servedFood").value;
    var tackcount = tackCount + 1;
    document.getElementById("servedFood").value = tackcount;
    document.getElementById("servedfood").innerHTML = tackCount;
    document.getElementById("Rewards").value = tackcount;
    document.getElementById("rewards").innerHTML = tackCount;

    var tackCount2 = document.getElementById("platedFood").value;
    var tackcount2 = tackCount2 - 1;
    document.getElementById("platedFood").value = tackcount2;
    document.getElementById("platedfood").innerHTML = document.getElementById(
      "platedFood"
    ).value;

    if (check.innerHTML == "0") {
      var serveButton = document.getElementById("serveButton");
      serveButton.className = "hide";
    }
  } else {
    alert("Make Some More Food");
  }
  rewardCheck();
}
function rewardCheck() {
  var check = document.getElementById("servedfood");

  if ((check.innerHTML == "1", "2", "3", "4", "5")) {
    var rewards = document.getElementById("rewards");
    rewards.innerHTML = check.innerHTML;
    document.getElementById("Rewards").value = check.innerHTML;

    var cashOut = document.getElementById("cashOut");
    cashOut.className = "buttonReady";
  }
}

function cashOut() {
  var rewards = document.getElementById("rewards");
  var Rewards = document.getElementById("Rewards");

  var txt;
  var r = confirm("CashOut?");
  if (r == true) {
    appendNewDream(
      dreamInput.value +
        "-" +
        dreamInputuser.value +
        " Reward: " +
        dreamInputplayer.value +
        Rewards.value +
        ".00"
    );
    rewards.innerHTML = "0";
    Rewards.value = "0";
  } else txt = "You pressed Cancel!";
}
