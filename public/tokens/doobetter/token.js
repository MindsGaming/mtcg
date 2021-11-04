// client-side js
// run by the browser each time your view template referencing it is loaded
function rewardToken() {
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

  const boost = minutesLabel.innerHTML;
  const TOKENvalue = secondsLabel.innerHTML + ".41";
  const tokenCheck = boost + TOKENvalue;
  tokenCheck.value == tokenCheck;

  function loading() {
    window.open("https://mtcg.glitch.me/#popcorn");
  }

  loading();
}
