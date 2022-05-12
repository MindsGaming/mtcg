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

   <div
            class="game"
            title="GameTestPlay"
            onclick="loadgametestplay();"
            id="loadgametestplay"
          >
            <div class="gametext">
              <b>GTPC</b>
              <br />
              <img
                class="gameicon"
                src="https://cdn.glitch.global/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28/GTPC_20220120141137.png?v=1642705942337"
              />
            </div>
          </div>