var sponsor = document.getElementById("sponsor");

let rollReward = 0;
let attempts = 0;
let tracker = document.getElementById("attempts");
let sponsored = document.getElementById("sponsored");
let pushAlert = document.getElementById("pushAlert");
let setdelay = 1;
let myPick = "Open";
function rollingOut() {
  if (sponsored.title == "Open") {
    pushAlert.innerHTML = "Sponsored Haulted.";
    pushAlert.style = "color: red; font-weight: bolder; font-size:14.2px;";
  } else {
    pushAlert.innerHTML = "Looking For Membership Points...";
    pushAlert.style = "color: gold; font-weight: bolder; font-size:8.2px;";

    var fetchSponsor = sponsored.title;
    let picker = ["0", "1", "2"];
    let fetchPick = Math.floor(Math.random() * 7);

    if (fetchPick == 0) {
      myPick = "bob";
    } else {
      if (fetchPick == 1) {
        myPick = "gamer";
      } else {
        if (fetchPick == 2) {
          myPick = "dwmw";
        } else {
          if (fetchPick == 3) {
            myPick = "w8w";
          } else {
            if (fetchPick == 4) {
              myPick = "wwow";
            } else {
              if (fetchPick == 5) {
                myPick = "satorid";
              } else {
                if (fetchPick == 6) {
                  myPick = "candys";
                }
              }
            }
          }
        }
      }
    }
    if (fetchSponsor == myPick) {
      let pushOne = rollReward + 1;
      rollReward = pushOne;
      sponsor.innerHTML = rollReward;
      let pushAttempt = attempts + 1;
      attempts = pushAttempt;
      tracker.innerHTML = attempts;
      setTimeout(delay, setdelay);
    } else {
      let pushAttempt = attempts + 1;
      attempts = pushAttempt;
      tracker.innerHTML = attempts;
      setTimeout(delay, setdelay);
    }

    function delay() {
      let pushDelay = setdelay + 25;
      setdelay = pushDelay;
      rollingOut();
    }
  }
}

function getGamerSponsor() {
  let sponsors = document.getElementById("sponsored");
  if (sponsors.title == "Open") {
    sponsors.title = "gamer";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsors.title == "gamer") {
      sponsors.title = "Open";
      rollingOut();
    }
  }
}

function getBobSponsor() {
  let sponsors = document.getElementById("sponsored");
  if (sponsors.title == "Open") {
    sponsors.title = "bob";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsors.title == "bob") {
      sponsors.title = "Open";
      rollingOut();
    }
  }
}

function getDwmwSponsor() {
  let sponsor = document.getElementById("sponsored");
  if (sponsor.title == "Open") {
    sponsor.title = "dwmw";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "dwmw") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}

function getW8wSponsor() {
  let sponsor = document.getElementById("sponsored");
  if (sponsor.title == "Open") {
    sponsor.title = "w8w";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "w8w") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}

function getWwowSponsor() {
  let sponsor = document.getElementById("sponsored");
  if (sponsor.title == "Open") {
    sponsor.title = "wwow";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "wwow") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}

function getSatoridSponsor() {
  let sponsor = document.getElementById("sponsored");
  if (sponsor.title == "Open") {
    sponsor.title = "satorid";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "satorid") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}

function getCandysSponsor() {
  let sponsor = document.getElementById("sponsored");
  if (sponsor.title == "Open") {
    sponsor.title = "candys";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "candys") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}
