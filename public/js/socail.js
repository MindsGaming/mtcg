// client-side js
// run by the browser each time your view template referencing it is loaded
function socail() {
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
  const tokenCheck = document.getElementById("tokenCheck");

  const tokenChecking = minutesLabel.innerHTML + "." + secondsLabel.innerHTML;
  const tokenBoost = -"-3" + tokenChecking;
  tokenBoost == tokenChecking;
  tokenCheck.value = tokenChecking;

  if (dreamInput.value = "null") {
    alert("You Need To Login");
  } else {
    window.open("/social", "_self");
  }
}
