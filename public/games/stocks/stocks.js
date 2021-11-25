const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");

var totalSeconds = 0;
setInterval(setTime, 3141);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

const stockones = document.getElementById("StockOnes");

function stockOne() {
  if (secondsLabel.innerHTML == "20") {
    var tackCount = document.getElementById("stockOnes").innerHTML;
    var tackcount = tackCount + 1;
    document.getElementById("stockOnes").value = tackcount;
    document.getElementById("stockOnes").innerHTML = tackcount;
    
    if(tackCount == "59"){
      
    }
  }
}
