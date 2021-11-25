const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");

const minutesOne = document.getElementById("minutesOne");
const secondsOne = document.getElementById("secondsOne");

var totalSeconds = 0;
setInterval(setTime, 3141);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  secondsOne.value = pad(totalSeconds % 60);
  minutesOne.vlaue = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

if (secondsOne.value == "5") {
  var tackCount = document.getElementById("stockOnes").value;
  var tackcount = tackCount + 1;
  document.getElementById("stockOnes").value = tackcount;
  document.getElementById("stockOnes").innerHTML = tackcount;

  if (tackCount == "59") {
    const stockone = document.getElementById("stockOne").innerHTML;
    var stockcount = stockone + 1;
    document.getElementById("stockOne").value = stockcount;
    document.getElementById("stockOne").innerHTML = stockcount;
  }
}
