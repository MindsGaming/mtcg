var sponsor = document.getElementById("sponsor");

let rollReward = 0;
let attempts = 0;
let tracker = document.getElementById("attempts");
let sponsored = document.getElementById("sponsored");
let setdelay = 1;

function rollingOut() {
  let pushAlert = document.getElementById("pushAlert");

  if (sponsored.title == "Open") {
    pushAlert.innerHTMl = "Sponsored Haulted.";
  } else {
    let floating = Math.floor(Math.random() * 25);
    let blockTester = Math.floor(Math.random() * 25);

    let hardness = blockTester;

    if (blockTester == floating) {
      let mySpins = ["0", "1", "2"];
      let mySpin = "Open";
      let checkSpin = Math.floor(Math.random() * 3);

      if (checkSpin == 0) {
        mySpin = "gamer";
      } else {
        if (checkSpin == 1) {
          mySpin = "bob";
        } else {
          if (checkSpin == 2) {
            mySpin = "dwmw";
          }
        }
      }
      if (sponsor.title == mySpin) {
        let current = rollReward + 1;
        let mathRoll = current;
        rollReward = mathRoll;
        sponsor.innerHTML = rollReward;
        alert(rollReward);
      }

      rollingOut();
    } else {
      let newAttempt = attempts + 1;
      let attemptMath = newAttempt;
      attempts = attemptMath;
      tracker.innerHTML = attemptMath;
      let rollTimer = setTimeout(delay, setdelay);
      function delay() {
        if (setdelay == 1 || setdelay > 1) {
          let delaymath = setdelay + 25;
          setdelay = delaymath;
        }
        rollingOut();
      }
    }
  }
}
