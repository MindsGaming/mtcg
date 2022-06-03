function playerMeter() {
  var playerTotal = document.getElementById("playerTotal");
  var playerMeter = document.getElementById("playerMeter");

  playerTotal.innerHTML = playerMeter.value;
  playerTotal.title = playerMeter.value;
}
