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
    document.getElementById("platedfood").innerHTML = tackcount;

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
    document.getElementById("platedfood").innerHTML = tackcount2;

    if (check.innerHTML == "0") {
      var serveButton = document.getElementById("serveButton");
      serveButton.className = "hide";
      rewardCheck();
    }
  } else {
    alert("Make Some More Food");
  }
}
function rewardCheck() {
  var check = document.getElementById("servedfood");
  var cashOut = document.getElementById("cashOut");
  cashOut.className = "buttonReady";

  if ((check.innerHTML == "1", "2", "3", "4", "5")) {
    var rewards = document.getElementById("rewards");
    rewards.innerHTML = check.innerHTML;
    document.getElementById("Rewards").value = check.value;
  }
}

function cashOut() {
  var current = document.getElementById("seconds");
  var seconds = current.innerHTML;
  var server = document.getElementById("rewards");
  var food = server.innerHTML;
  var boost = +food;
  var total = boost + seconds;
  current.innerHTML = total;
}

function quit() {
  var txt;
  var r = confirm("Quit Your Job?");
  if (r == true) {
   var pinn = document.getElementById("pinnBurgers");
    pinn.className = "hide";

    window.open("/", "_blank");
    closePINN();
  } else txt = "Get back to work";
}

function claimBurgers() {
  claimUpdate();
}
