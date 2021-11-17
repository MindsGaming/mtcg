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

function serveImage() {
  var check = document.getElementById("platedfood");
  
  if ((check.innerHTML == "1", "2", "3", "4", "5")) {
    var negitiveCount = document.getElementById("platedFood").value;
    var negitivecount = negitiveCount - 1;
    document.getElementById("platedFood").value = negitivecount;
    check.innerHTML = negitivecount;

    if ((check.innerHTML = "0")) {
      var hide = document.getElementById("serveButton");
      hide.className = "hide";
      var hide2 = document.getElementById("platedImage");
      hide2.className = "hide";
    }

    var tackCount = document.getElementById("servedFood").value;
    var tackcount = tackCount + 1;
    document.getElementById("servedFood").value = tackcount;

    document.getElementById("servedfood").innerHTML = tackCount;
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

    var cashOut = document.getElementById("cashOut");
    cashOut.className = "buttonReady";
  }
}

function cashOut() {
  var rewards = document.getElementById("rewards");

  if ((rewards.innerHTML == "1", "2", "3", "4", "5")) {
    var negitiveCount = rewards.innerHTML;
    var negitivecount = negitiveCount - 1;
    document.getElementById("rewards").innerHTML = negitivecount;

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
        rewards.innerHTML +
        ".00"
    );
  }
  if (rewards.innerHTML == "0") {
    var cashOut = document.getElementById("cashOut");
    cashOut.className = "button";
  } else {
    alert("Make Some More Food");
  }
}
