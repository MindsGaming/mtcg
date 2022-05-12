function emojiworld() {
  alert("test");
  var notice = document.createElement("h1");
  notice.align = "center";
  notice.style =
    "diplay: block; width: 60%; height: 60%; background-color: grey; color: red;";
  var rewardicon = document.getElementById("rewardicon");
  rewardicon.className = "rewardiconL";
  var myNotice = "Playing 'Emoji World'";

  var getemojiworld = document.getElementById("emojiworld");
  getemojiworld.innerHTML = myNotice;
  window.open("https://emjoi-world.glitch.me/")
}
