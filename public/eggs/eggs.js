function claimEGG() {
  var egg = document.getElementById("claimMe");
  egg.className = "hide";
  alert("Claimed When Loged In!");
  var lifeScore = 5;
  var REWARDS = lifeScore;
  const data = {
    dream: dreamInput.value + " Bounty Hunter EGG: " + REWARDS
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
  dreams.push(dreamInput.value + " Bounty Hunter EGG: " + REWARDS);
  appendNewDream(dreamInput.value + " Bounty Hunter EGG: " + REWARDS);
}
