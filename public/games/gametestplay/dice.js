alert("test");
play();
function play() {
  var game = document.getElementById("gametest");
  var open = window.open("http://gametestplay.com/ball.html", "_self");
  game.innerHTML = open;
  game.style =
    "position:fixed; display: block; top:0; left: 0; width: 50%; height: 50%; margin: -1px;";
}
