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
    var iconOne = document.getElementById("rewardicon");
    var iconTwo = document.getElementById("profileicon");
    iconOne.className = "hide";
    iconTwo.className = "hide";
    window.open("/", "_self");
  } else txt = "Get back to work";
}

function claimBurgers() {
  var burgers = document.getElementById("Rewards");
  var xtra = document.getElementById("XTRA");
  var REWARDS = burgers.value + "." + xtra;
  if (dreamInput.value == "") {
    alert("Login To Earn Rewards");
    otherSound();
  } else {
    if (minutesLabel.innerHTML == "00") {
      alert("You Need A Full Token To Claim Rewards");
      oopsSound();
    } else {
      const data = {
        dream: dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS
      };

      fetch("/addDream", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(response => {
          console.log(JSON.stringify(response));
        });
      // get dream value and add it to the list
      dreams.push(
        dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS
      );
      appendNewDream(
        dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS
      );
      reset();
      selectToken();

      if (dreamToken.innerHTML == "GAMER") {
        dreamToken.innerHTML = "DooBetter";
        setInterval(setTime, 15000);
      }

      if (dreamToken.innerHTML == "DooBetter") {
        dreamToken.innerHTML = "ECLIPSE";
        setInterval(setTime, 13141);
      }

      if (dreamToken.innerHTML == "ECLIPSE") {
        dreamToken.innerHTML = "GAMER";
        setInterval(setTime, 18981);
      }
      rewardSound();
    }
  }
}

