var timeM = document.getElementById("timeM");
var timeS = document.getElementById("timeS");

var totalSeconds = 0;

function setTime() {
  ++totalSeconds;
  timeS.innerHTML = pad(totalSeconds % 60);
  timeM.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

var boost = setInterval(setTime, 1000);
var spinerOne = document.getElementById("spinOne");
var spinerTwo = document.getElementById("spinTwo");
var spinerThree = document.getElementById("spinThree");

var baseImage = document.createElement("img");
var baseimageTwo = document.createElement("img");
var baseimageThree = document.createElement("img");
baseImage.src =
  "https://cdn.minds.com/icon/568132636652875781/medium/1630521552";
baseImage.title = "MTCG";
baseimageTwo.src =
  "https://cdn.minds.com/icon/568132636652875781/medium/1630521552";
baseimageTwo.title = "MTCG";
baseimageThree.src =
  "https://cdn.minds.com/icon/568132636652875781/medium/1630521552";
baseimageThree.title = "MTCG";
baseImage.className = "spined";
baseimageTwo.className = "spined";
baseimageThree.className = "spined";

var BASEIMAGE = document.getElementById("spinOne").appendChild(baseImage);
var BASEIMAGETWO = document.getElementById("spinTwo").appendChild(baseimageTwo);
var BASEIMAGETHREE = document
  .getElementById("spinThree")
  .appendChild(baseimageThree);

var imageOne = document.createElement("img");
imageOne.src =
  "https://cdn.glitch.me/76239ef0-e5c6-4e29-9830-26d4ec2dfc0b%2FGAMER.jpeg";
imageOne.className = "spined";
imageOne.title = "GAMER";

var imageTwo = document.createElement("img");
imageTwo.src =
  "https://cdn.minds.com/icon/463565168681431051/medium/1617704314";
imageTwo.className = "spined";

var imageThree = document.createElement("img");
imageThree.src =
  "https://cdn.minds.com/icon/944965270747750406/medium/1627757450";
imageThree.className = "spined";

var imageFour = document.createElement("img");
imageFour.src =
  "https://cdn.minds.com/icon/822733901683236867/medium/1621185080";
imageFour.className = "spined";
imageFour.title = "ImageFour"

var imageFive = document.createElement("img");
imageFive.src =
  "https://cdn.glitch.global/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28/ZomboMeme%2017012022164751.jpg";
imageFive.className = "spined";
imageFive.title = "DragonToken"

var spinme = document.getElementById("spinMe");
var credits = document.getElementById("credits");
var CREDITS = document.getElementById("CREDITS");
var prize = document.getElementById("prize");
var PRIZE = document.getElementById("PRIZE");

function spin() {
  if (credits.innerHTML == "0") {
    alert("Load Rewards");
  } else {
    var remove = 2;
    var current = credits.innerHTML;
    var total = current - remove;
    credits.innerHTML = total;
    anamation();

    if (BASEIMAGE.title == BASEIMAGETWO.title) {
      if (BASEIMAGETWO.title == BASEIMAGETHREE.title) {
        var booster = 10;
        var total = credits.innerHTML + booster;
        credits.innerHTML = total;
      }
    } else {
      var remove = 5;
      var total = credits.innerHTML - remove;
      credits.innerHTML = total;
      if (credits.innerHTML == "11") {
        CREDITS.value = "0";
      }
    }
  }
}

function anamation() {
  one();
  function one() {
    BASEIMAGE.src = imageOne.src;
    var next = setTimeout(two, 1000);
    two();
  }
  function two() {
    BASEIMAGE.src = imageTwo.src;
    var next = setTimeout(three, 2000);
    three();
  }
  function three() {
    BASEIMAGE.src = imageThree.src;
    var next = setTimeout(four, 3000);
    four();
  }
  function four() {
    BASEIMAGE.src = imageFour.src;
    var next = setTimeout(five, 4000);
    five();
  }
  function five() {
    BASEIMAGE.src = imageFive.src;
    random();
  }
}

function random() {
  var images = [imageOne, imageTwo, imageThree, imageFour, imageFive];
  const newImage = images[Math.floor(Math.random() * images.length)];
  const newimageTwo = images[Math.floor(Math.random() * images.length)];
  const newimageThree = images[Math.floor(Math.random() * images.length)];

  BASEIMAGE.src = newImage.src;
  BASEIMAGETWO.src = newimageTwo.src;
  BASEIMAGETHREE.src = newimageTwo.src;

  BASEIMAGE.title = newImage.src;
  BASEIMAGETWO.title = newimageTwo.src;
  BASEIMAGETHREE.title = newimageTwo.src;
  checkRewards();
}

function checkRewards() {
  if (BASEIMAGE.title == BASEIMAGETWO.title) {
    if (BASEIMAGETWO.title == BASEIMAGETHREE.title) {
      makeRewards();
    }
  }
}


function makeRewards() {
  var boost = 3;
  var total = boost + CREDITS.value;
  var prizevalue = PRIZE.value;
  var prizetotal = boost + prizevalue;
  CREDITS.value = total;
  credits.innerHTML = total;

  if (credits.innerHTML == "9") {
    var boost = 1;
    var current = PRIZE.value;
    var math = boost + PRIZE.value;
    PRIZE.value = math;
    PRIZE.innerHTML = math; 
  }
}

function loadRewards() {
  if (timeM.innerHTML == "00") {
    alert("You Need A Full Reward");
  } else {
    var current = timeM.innerHTML;
    var cred = CREDITS.value;
    var total = current + cred;
    CREDITS.value = total;
    credits.innerHTML = CREDITS.value;
    reset();
  }
}

function claimPrize() {
  if (dreamInput.value == "") {
    var login = document.getElementById("getLogin");
    login.className = "SuperSplash";
  } else {
    claimUpdate();
  }
}
