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
    pushAlert.innerHTMl = "Sponsored Haulted.";
  } else {
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
