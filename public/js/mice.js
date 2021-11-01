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
  const tokenCheck = document.getElementById("tokenCheck");

  const tokenChecking = minutesLabel.innerHTML + "." + secondsLabel.innerHTML;
  const tokenBoost = -"0" + tokenChecking;
  tokenBoost == tokenChecking;
  tokenCheck.value = tokenChecking;

  if (minutesLabel.innerHTML == "00") {
    alert("You Need A Full Token To Cash Out!");
  } else {
    var txt;
    var r = confirm("Are You Sure You Want To Claim & Logout?");
    if (r == true) {
      const data = {
        dream:
          dreamInput.value +
          "-" +
          dreamInputuser.value +
          dreamInputplayer.value +
          " Reward: "
      };

      appendNewDream(
        dreamInput.value +
          "-" +
          dreamInputuser.value +
          " Reward: " +
          dreamInputplayer.value +
          tokenCheck.value
      );
      tokenCheck.innerHTML = "00.00";
      tokenCheck.value = "00.00";
      window.open("/", "_self");
    } else {
      txt = "You pressed Cancel!";
    }
  }
}
