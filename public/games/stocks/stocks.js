/* Click Miner */
function progress() {
  var ClickMiner = document.getElementById("progress").value;
  var move = +1;
  var mine = +0;
  var buffer = move + mine;
  progress = ClickMiner + buffer;
  document.getElementById("progress").value = progress;

  if (progress == "99") {
    var progress = document.getElementById("ClickMiner");
    progress.classList.toggle("progress");
    alert("Play A Game");
    window.open("/mtcg");
    var StartMiner = document.getElementById("StartMiner");
    StartMiner.classList.toggle("StartMinerx");
  }
}