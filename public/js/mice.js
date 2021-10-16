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

  if (minutesLabel.innerHTML == "00") {
    alert("You Need A Full Token TO Cash Out!");
  } else {
    const data = {
      dream:
        dreamInput.value +
        "-" +
        dreamInputuser.value +
        dreamInputplayer.value +
        " Reward: " 
       
    };

    // get dream value and add it to the list
    dreams.push(
      dreamInput.value +
        "-" +
        dreamInputuser.value +
        dreamInputplayer.value +
        " Reward: " +
        secondsLabel.innerHTML +
        "." +
        minutesLabel.innerHTML
    );
    appendNewDream(
      dreamInput.value +
        "-" +
        dreamInputuser.value +
        " Reward: " +
        dreamInputplayer.value +
        secondsLabel.innerHTML +
        "." +
        minutesLabel.innerHTML
    );
    minutesLabel.innerHTML = "000";
    secondsLabel.innerHTML = "000";
    setTime();
  }
}
