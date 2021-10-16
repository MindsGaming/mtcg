// client-side js
// run by the browser each time your view template referencing it is loaded
function cashTokens() {
  const dreams = [];

  // define variables that reference elements on our page
  const dreamsForm = document.forms[0];
  const dreamInput = dreamsForm.elements["dream"];
  const dreamInputuser = dreamsForm.elements["username"];
  const dreamInputplayer = dreamsForm.elements["tokens"];

  const dreamsList = document.getElementById("dreams");
  const clearButton = document.querySelector("#clear-dreams");

  const minutesLabel = document.getElementById("minutes");
  const secondsLabel = document.getElementById("seconds");

  const dreamedTokens = minutesLabel.innerHTML + "." + secondsLabel.innerHTML;
  const data = {
    dream:
      dreamInput.value +
      "-" +
      dreamInputuser.value +
      dreamInputplayer.value +
      dreamedTokens
  };
  dreams.push(
    dreamInput.value +
      "-" +
      dreamInputuser.value +
      dreamInputplayer.value +
      dreamedTokens
  );
  appendNewDream(
    dreamInput.value +
      "-" +
      dreamInputuser.value +
      dreamInputplayer.value +
      "Reward: " +
      dreamedTokens
  );
}
