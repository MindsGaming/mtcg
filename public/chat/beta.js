const chatBTN = document.getElementById("commentBTN");
chatBTN.addEventListener("click", startCHAT);
const chatBOX = document.getElementById("CHATBOX");

chatBOX.onkeydown = function (e) {
  if (e.keyCode == 13) {
    startCHAT();
  }
};

function startCHAT() {
  var chaterror = document.getElementById("chaterror");

  if (dreamInput.value == "") {
    chatBOX.value = "";
    chatBOX.focus;
    chaterror.innerHTML = "No Account Found.";
    chatBOX.placeholder = "No Account Found.";
  } else {
    var currentrewards = document.getElementById("seconds");
    var currentrewardsM = document.getElementById("minutes");
    var saveM = currentrewardsM.innerHTML;

    var getcurrentrewards = currentrewards.innerHTML;

    if (getcurrentrewards < 50) {
      chatBOX.value = "";
      chatBOX.focus;
      var removerewards = 50;
      var removemath = removerewards - getcurrentrewards;

      chaterror.innerHTML = "." + removemath + "Rewards Needed.";
      chatBOX.placeholder = "." + removemath + "Rewards Needed.";
      chaterror.title = "." + removemath + "Rewards Needed.";
    } else {
      var removerewards = 5;
      var removemath = removerewards - getcurrentrewards;
      reset();
      currentrewards.innerHTML = removemath;
      currentrewardsM.innerHTML = saveM;

      const data = {
        dream: dreamInput.value + " Commented: " + chatBOX.value,
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
      dreams.push(dreamInput.value + " Commented: " + chatBOX.value);
      appendNewDream(dreamInput.value + " Commented: " + chatBOX.value);
    }
    chatBOX.value = "";
    chatBOX.focus;
  }
}

