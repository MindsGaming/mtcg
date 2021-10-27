const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");

function trick() {
  
  
}

function treat() {
  var treat = ["1", "2", "3", "4", "5"];
  var treats = treat[Math.floor(Math.random() * treat.length)];

  if (minutesLabel.innerHTML == "00") {
    alert("You Need A Full Token To Cash Out!");
  } else {
    var txt;
    var r = confirm("Are You Sure You Want To Claim & Logout?");
    if (r == true) {
      const data = {
        dream:
          dreamInput.value +
          "-" +
          dreamInputuser.value +
          dreamInputplayer.value +
          " Reward: "
      };

      appendNewDream(
        dreamInput.value +
          "-" +
          dreamInputuser.value +
          " Reward: " +
          dreamInputplayer.value +
          treats
      );
    } else {
      txt = "You pressed Cancel!";
    }
  }
}
