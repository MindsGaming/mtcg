function emojihooks() {
  var emojiwallet = document.getElementById("emojiwallet");
  var emojibutton = document.getElementById("emojibutton");
  var placewallet = emojiwallet.value;

  emojiwallet.style = "display: none";
  emojibutton.style = "display none";
  alert(placewallet);

  var REWARDS = minutesLabel.innerHTML + "." + secondsLabel.innerHTML;

  const data = {
    dream:
      placewallet + " " + version.innerHTML + "Dragontoken" + ":" + REWARDS,
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
  dreams.push(dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS);
  appendNewDream(dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS);

  levelUp();
  reset();
  rewardSound();
}
