/* Start Gamer */
/* Click Timer */
function progress() {
  var secondsTimer = document.getElementById("secondsTimer").value;
  var move = +1;
  var mine = +0;
  var buffer = move + mine;
  progress = secondsTimer + buffer;
  document.getElementById("secondsTimer").value = progress;

  if (progress == "99") {
  var minutesTimer = document.getElementById("secondsTimer").value;
     var move = +1;
  var mine = +0;
  var buffer = move + mine;
  progress = minutesTimer + buffer;
  document.getElementById("Timer").value = progress;
  }
}


