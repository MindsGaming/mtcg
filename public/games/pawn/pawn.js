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
    var servedFood = document.getElementById("servedFood").value;
    servedFood.value = +1;
  }
  TACK.className = "makefood";
  rewardCheck();
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
    alert("The store is to dirty for customers");
  }
}

function servedImage() {
  var check = document.getElementById("platedfood");

  if ((check.innerHTML == "1", "2", "3", "4", "5")) {
    var offer = ["I'm Selling For 1", "I'll Buy For 1?"];
    var OFFER = offer[Math.floor(Math.random() * offer.length)];
    var txt;
    var r = confirm(OFFER);

    if (OFFER == "I'm Selling For 1") {
      var tackCount = document.getElementById("Rewards").value;
      var tackcount = tackCount + 0;
      document.getElementById("Rewards").value = tackcount;
      document.getElementById("rewards").innerHTML = tackCount;

      var tackCount2 = document.getElementById("platedFood").value;
      var tackcount2 = tackCount2 - 1;
      document.getElementById("platedFood").value = tackcount2;
      document.getElementById("platedfood").innerHTML = tackcount2;

      var tackCount3 = document.getElementById("servedFood").value;
      var tackcount3 = tackCount3 + 1;
      document.getElementById("servedFood").value = tackcount3;
      document.getElementById("servedfood").innerHTML = tackCount3;

      if (check.innerHTML == "0") {
        var serveButton = document.getElementById("serveButton");
        serveButton.className = "hide";
        rewardCheck();
      }
    }

    if (OFFER == "I'll Buy For 1?") {
      var itemCheck = document.getElementByID("platedfood");
      var tackCount = document.getElementById("Rewards").value;
      var tackcount = tackCount + 1;
      document.getElementById("Rewards").value = tackcount;
      document.getElementById("rewards").innerHTML = tackcount;

      var tackCount2 = document.getElementById("platedFood").value;
      var tackcount2 = tackCount2 - 1;
      document.getElementById("platedFood").value = tackcount2;
      document.getElementById("platedfood").innerHTML = tackcount2;

      var tackCount3 = document.getElementById("servedFood").value;
      var tackcount3 = tackCount3 - 1;
      document.getElementById("servedFood").value = tackcount3;
      document.getElementById("servedfood").innerHTML = tackCount3;

      if (check.innerHTML == "0") {
        alert("No Items In Store");
        var serveButton = document.getElementById("serveButton");
        serveButton.className = "hide";
        rewardCheck();
      } else {
      }
    }
  }
}

function rewardCheck() {
  document.getElementById("Rewards").value = document.getElementById(
    "rewards"
  ).innerHTML;
  document.getElementById("platedFood").value = document.getElementById(
    "platedfood"
  ).innerHTML;
  document.getElementById("makeFood").value = document.getElementById(
    "makefood"
  ).innerHTML;
  document.getElementById("servedFood").value = document.getElementById(
    "servedfood"
  ).innerHTML;
}

function cashOut() {
  var rewards = document.getElementById("rewards");
  var Rewards = document.getElementById("Rewards");
  var servedFood = document.getElementById("servedFood");
  var platedFood = document.getElementById("platedFood");
  var makeFood = document.getElementById("makeFood");
  var servedfood = document.getElementById("servedfood");
  var platedfood = document.getElementById("platedfood");
  var makefood = document.getElementById("makefood");

  var txt;
  var r = confirm("Start A New Shift?");
  if (r == true) {
    rewards.innerHTML = "0";
    Rewards.value = "0";
    servedFood.value = "1";
    platedFood.value = "1";
    makeFood.value = "30%";
    servedfood.innerHTML = "1";
    platedfood.innerHTML = "1";
    makefood.innerHTML = "30%";

    appendNewDream(
      dreamInput.value +
        "-" +
        dreamInputuser.value +
        " Reward: " +
        dreamInputplayer.value +
        Rewards.value +
        ".00"
    );
  } else txt = "You pressed Cancel!";
}

function quit() {
  var txt;
  var r = confirm("Quit Your Job?");
  if (r == true) {
    window.open("/", "_self");
  } else txt = "Get back to work";
}
