const earn = [
  0.001, 0.002, 0.003, 0.004, 0.005, 0.006, 0.007, 0.008, 0.009, 0.01, 0.02,
  0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7,
  0.8, 0.9,
];
const sniffwidth = document.getElementById("balloon");
const newpop = document.getElementById("pop");
const sniffpop = document.getElementById("POP");
const balloontext = document.getElementById("balloon-text");

function popBalloon() {
  if (sniffwidth.title == "POP") {
    newpop.innerHTML = "1";
    sniffwidth.title = "balloon";
    sniffwidth.src =
      "https://cdn.glitch.global/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28/balloon.png";
    sniffwidth.width = "100px";
    sniffwidth.height = "100px;";
    sniffpop.value = "1";
    balloontext.innerHTML = "Rewards In Balloon:";
  } else {
    if (sniffwidth.title == "balloon")
      var push = document.getElementById("BALLOON");
    var width = sniffwidth.width;
    push.value = width;

    var boost = earn[Math.floor(Math.random() * earn.length)];
    var pop = earn[Math.floor(Math.random() * earn.length)];

    var math = push.value + boost;
    var pushsniff = document.getElementById("BALLOON");
    pushsniff.value = math;

    sniffwidth.width = push.value;
    sniffwidth.height = push.value;

    if (pop == boost) {
      sniffwidth.src =
        "https://cdn.glitch.global/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28/POP.png";
      sniffwidth.title = "POP";
      balloontext.innerHTML = "Lost Rewards:";
    }

    var current = document.getElementById("POP");
    var boostpop = boost;
    var popmath = current.value + boost;
    sniffpop.value = popmath;
    newpop.innerHTML = popmath;
  }
}

function grabBalloon() {
  if (dreamInput.value == "") {
    userview();
  } else {
    if (sniffwidth.title == "POP") {
      balloontext.innerHTML = "THE BALLOON POPED! You Could Have Grabed: ";
    }

    if (sniffwidth.title == "balloon") {
      var checkgrab = document.getElementById("POP");
      var REWARDS = checkgrab.value;

      const data = {
        dream: dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS,
      };
      fetch("/addDream", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(JSON.stringify(response));
        });
      // get dream value and add it to the list
      dreams.push(
        dreamInput.value + "  " + dreamToken.innerHTML + ":" + REWARDS
      );
      appendNewDream(
        dreamInput.value + "  " + dreamToken.innerHTML + ":" + REWARDS
      );
      sniffwidth.title = "POP";
      balloontext.innerHTML = "You Grabed: ";
      reset();
      levelUp();
    }
  }
}
