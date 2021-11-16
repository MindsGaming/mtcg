const makefood = document.getElementByID("makefood");
const makeFood = document.getElementByID("makeFood");
const makefood = document.getElementByID("makefood");





function cashOut() {
  var rewards = document.getElementById("rewards");
  var total = document.getElementById("total");

  if (rewards.innerHTML == "0") {
    alert("You Need A Full Token TO Cash Out!");
  } else {
    var txt;
    var r = confirm("Quit Already?");
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
          rewards.value +
          total.innerHTML
      );
      window.open("./");
    } else txt = "You pressed Cancel!";
  }
}
