

var totalSeconds = 0;
setInterval(setTime, 50);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

  var levelups = document.getElementById("levelUp");

  if (minutesLabel.innerHTML == "11") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "10";
      levelupPop();
    }
  }
  if (minutesLabel.innerHTML == "21") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "20";
      levelupPop();
    }
  }
  if (minutesLabel.innerHTML == "31") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "30";
      levelupPop();
    }
  }
  if (minutesLabel.innerHTML == "41") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "40";
      levelupPop();
    }
  }
  if (minutesLabel.innerHTML == "51") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "50";
      levelupPop();
    }
  }

  if (minutesLabel.innerHTML == "61") {
    if (secondsLabel.innerHTML == "01") {
      levelups.value = "60";
      levelupPop();
    }
  }

  if (minutesLabel.innerHTML == "71") {
    alert("You Maxed Out Rewards, Are You Still Active?");
    claimUpdate();
    if (secondsLabel.innerHTML == "01") {
    }
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
