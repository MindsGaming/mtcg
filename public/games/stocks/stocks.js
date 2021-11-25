const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");

var totalSeconds = 0;
setInterval(setTime, 3141);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

  progress();
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

/* Click Miner */
function progress() {
  var ClickMiner = document.getElementById("stocks").value;
  var move = +1;
  var mine = +0;
  var buffer = move + mine;
  progress = ClickMiner + buffer;
  document.getElementById("stocks").value = progress;

  if (progress == "99") {
    alert("testing");
  }
}
