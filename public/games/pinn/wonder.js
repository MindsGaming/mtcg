function startGamed() {
  var start = document.getElementById("startGame");
  var startNew = [
    "Countiue Universe?",
    "Keep Trying?",
    "Still No Life?",
    "Expand More?",
    1.7976931348623157e10308 + "?"
  ];
  const startnew = startNew[Math.floor(Math.random() * startNew.length)];
  var startID = startnew;

  start.innerHTML = startID;
  start.style = "background-color: blue; color: gold; z-index: 2;";

  var cashout = document.getElementById("cashOut");
  cashout.style =
    "position: fixed; display: block; right: 0; top: 0;  width: 50px; background-color: white; border-style: groove; border-color: gold; padding: 1px; margin: 25px; color: red; cursor:pointer; opacity: .7;";

  var spoof = ["1", "2", "3", "4", 1.7976931348623157e10308];
  const random = spoof[Math.floor(Math.random() * spoof.length)];
  var ID = random;

  var lifechecks = document.getElementById(ID);
  var lifecheck = ["life", "block", "earth"];
  const lifeCheck = lifecheck[Math.floor(Math.random() * lifecheck.length)];

  var life = document.createElement("div");
  life.className = lifeCheck;
  life.id = ID;
  var LIFE = document.getElementById("gameoflife").appendChild(life);

  if (life.id == "Infinity") {
    life.title = "LIFE";
    createLife();
    startGamed();
  }

  if ((life.id == "2", "3", "4", "Infinity")) {
    var spoofNew = ["1", "2", "3", "4", 1.7976931348623157e10308];
    const randomNew = spoofNew[Math.floor(Math.random() * spoofNew.length)];
    var IDnew = randomNew;

    var lifechecksNew = document.getElementById(ID);
    var lifecheckNew = ["life", "block", "earth"];
    const lifeCheckNew =
      lifecheckNew[Math.floor(Math.random() * lifecheckNew.length)];

    var lifeNew = document.createElement("div");
    lifeNew.className = lifeCheckNew;
    lifeNew.id = IDnew;
    var LIFENEW = document.getElementById("gameoflife").appendChild(lifeNew);

    if (lifeNew.id == "Infinity") {
      lifeNew.name = "Intelagent";
      lifeNew.className = "Token";
      startGamed();
    }
    createLife();
  }

  function createLife() {
    var spoofNew = ["1", "2", "3", "4", 1.7976931348623157e10308];
    const randomNew = spoofNew[Math.floor(Math.random() * spoofNew.length)];
    var IDnew = randomNew;

    var lifechecksNew = document.getElementById(ID);
    var lifecheckNew = ["life", "block", "earth"];
    const lifeCheckNew =
      lifecheckNew[Math.floor(Math.random() * lifecheckNew.length)];

    var lifeNew = document.createElement("div");
    lifeNew.className = lifeCheckNew;
    lifeNew.id = IDnew;
    var LIFENEW = document.getElementById("gameoflife").appendChild(lifeNew);

    if ((lifeNew.id == "2", "3", "4", "Infinity")) {
      startGamed();
    }
  }
}

function cashOut() {
  var intelagent = document.getElementById("Infinity");

  if (intelagent.name == "Intelagent") {
    alert("You Made Intelagent Life");
    window.open("/", "_self");
  } else {
    alert("No Intelagent Life");
  }
}
