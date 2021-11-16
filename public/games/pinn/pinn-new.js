const makeFood = document.getElementByID("makeFood");
const plateFood = document.getElementByID("plateFood");
const serveFood = document.getElementByID("serveFood");


function tackCount()


function foodImage() {
  var tack = document.createElement("div");
  tack.className = "makefood";
  tack.id = "Food";
  var TACK = document.getElementById("foodimage").appendChild(tack);
}

function plateImage() {
  var tack = document.createElement("div");
  tack.className = "platefood";
  tack.id = "PlatedFood";
  var TACK = document.getElementById("platedimage").appendChild(tack);
}

function servedImage() {
  var tack = document.createElement("div");
  tack.className = "servedfood";
  tack.id = "ServedFood";
  var TACK = document.getElementById("servedimage").appendChild(tack);
}

function cashOut() {
  var rewards = document.getElementById("rewards");

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
          rewards.value
      );
      window.open("./");
    } else txt = "You pressed Cancel!";
  }
}
