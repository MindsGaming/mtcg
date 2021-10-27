function trick() {
  var trick = document.getElementById("trick");
  trick.classList.toggle("trick");
  window.open(
    "https://cdn.glitch.me/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28%2FSkelotor.jpeg",
    "_self"
  );
}

function treat() {
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
          "5.00"
      );
    } else {
      txt = "You pressed Cancel!";
    }
  }
}
