const LIFE = ["1", "2", "3", "4", "5"];

var life = document.getElementByID("1");
life.addEventListener("click", createLife);

function createLife() {
  var tools = document.getElementById(LIFE);
  tools.classList.toggle("life");
}
