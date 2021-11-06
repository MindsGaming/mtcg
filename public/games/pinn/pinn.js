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
const GAMERvalue = secondsLabel.innerHTML + ".6";
const tokenCheck = boost + GAMERvalue;
tokenCheck.value == tokenCheck;

if (minutesLabel.innerHTML == "00") {
  alert("You Need A Full Token TO Cash Out!");
} else {
  var txt;
  var r = confirm("Quit Already?");
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
    tokenCheck.value = "00.00";
    window.open("./");
  } else txt = "You pressed Cancel!";
}
