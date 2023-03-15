const chatBTN = document.getElementById("commentBTN");
chatBTN.addEventListener("click", startCHAT);
const chatBOX = document.getElementById("CHATBOX");

chatBOX.onkeydown = function (e) {
  if (e.keyCode == 13) {
    startCHAT();
  }
};

function startCHAT() {
  var CHATBOX = document.getElementById("CHATBOX");
  var chaterror = document.getElementById("chaterror");
  var STACKED = document.getElementById("STACKED");
  var stacked = document.getElementById("stacked");
  var currentM = document.getElementById("minutes");
  var currentS = document.getElementById("seconds");
  var rewardsmath = currentM.innerHTML + "." + currentS.innerHTML;

  if (dreamInput.value == "") {
    chatBOX.value = "";
    chatBOX.focus;
    chaterror.innerHTML = "No Account Found.";
    chatBOX.placeholder = "No Account Found.";
  } else {
    if (STACKED.value > 0.5) {
      var postcost = 0.5;
      var postmath = postcost - STACKED.value;
      var newstack = document.getElementById("STACKED");
      newstack.value = postmath;
      stacked.innerHTML = newstack.value;
    }
  }
  if (rewardsmath < 0.5) {
    var postcost = 0.5;
    var postmath = postcost - STACKED.value;
    chaterror.innerHTML = postmath + "Rewards Needed.";
    chatBOX.placeholder = postmath + "Rewards Needed";
  } else {
    var postcost = 0.5;
    var postmath = rewardsmath + STACKED.value - postcost;
    var newstack = document.getElementById("STACKED");
    newstack.value = postmath;
    stacked.innerHTML = newstack.value;

    const data = {
      dream: dreamInput.value + " Commented:" + CHATBOX.value,
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
    dreams.push(dreamInput.value + " Commented:" + CHATBOX.value);
    appendNewDream(dreamInput.value + " Commented:" + CHATBOX.value);
    
    CHATBOX.innerHTML = "";
    CHATBOX.focus;
    chaterror.innerHTML = "";

    reset();
  }
}
