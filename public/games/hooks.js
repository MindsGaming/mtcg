function emojiworld() {
  alert("test");
  var notice = document.createElement("h1");
  notice.align = "center";
  notice.style =
    "diplay: block; width: 60%; height: 60%; background-color: grey; z-index:2000";
  var myNotcie = "Playing 'Emoji World'";
  notice.innerHTML = notice + rewardicon

  var rewardicon = document.getElementById("rewardicon");
  rewardicon.className = "LARGEICON";
}
