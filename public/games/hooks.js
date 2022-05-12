function emojiworld() {
  var getNOTICE = document.getElementById("NOTICE");
  var thisGame = document.getElementById("thisGame");
  getNOTICE.className = "notice";
  var rewardicon = document.getElementById("rewardicon");
  var newrewardicon = document.getElementById("newrewardicon");
  rewardicon.className = "rewardiconL";
  newrewardicon = rewardicon;
  thisGame.innerHTML = " 'Emoji World'";
  window.open("https://emjoi-world.glitch.me/");
}
