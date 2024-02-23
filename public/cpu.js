var start = document.getElementById("start");
var menu = document.getElementById("menu");
var sidemenu = document.getElementById("side-menu");
var tokens = document.getElementById("tokens");
var wallets = document.getElementById("wallets");
var traders = document.getElementById("traders");
var groups = document.getElementById("groups");
var infinity = document.getElementById("Infinity");
var splash = document.getElementById("splash");
var info = document.getElementById("info");
var rewards = document.getElementById("rewards");
var launchgroup = document.getElementById("launchgroup");
var learnhow = document.getElementById("learn-how");
var learnbtn = document.getElementById("learnBTN");
var cards = document.getElementById("APP");
var hooks = document.getElementById("hooks");
var dreamslist = document.getElementById("dream");


function startview() {
  closeside();
  if (start.title == "Start Here") {
    start.title = "menu";
    menu.className = "start-menu";
    tokens.className = "hide";
    wallets.className = "hide";
    infinity.className = "hide";
    groups.className = "show";
    splash.className = "hide";
  } else {
    start.title = "Start Here";
    menu.className = "hide";
    tokens.className = "hide";
    wallets.className = "hide";
    infinity.className = "hide";
    groups.className = "show";
  }
}

function tokensview() {
  if (tokens.className == "hide") {
    tokens.className = "show";
    wallets.className = "hide";
    sidemenu.className = "side-menu";
  } else {
    tokens.className = "hide";
    wallets.className = "hide";
    sidemenu.className = "hide";
  }
}

function walletsview() {
  if (wallets.className == "hide") {
    wallets.className = "show";
    tokens.className = "hide";
    sidemenu.className = "side-menu";
  } else {
    tokens.className = "hide";
    wallets.className = "hide";
    sidemenu.className = "hide";
  }
}

function tradersview() {
  if (traders.className == "hide") {
    traders.className = "show";
    wallets.className = "hide";
    tokens.className = "hide";
    sidemenu.className = "side-menu";
  } else {
    traders.className = "hide";
    tokens.className = "hide";
    wallets.className = "hide";
    sidemenu.className = "hide";
  }
}

function hooksview() {
  if (hooks.className == "hide") {
    hooks.className = "show";
    traders.className = "hide";
    wallets.className = "hide";
    tokens.className = "hide";
    sidemenu.className = "side-menu";
  } else {
    hooks.className = "hide";
    traders.className = "hide";
    tokens.className = "hide";
    wallets.className = "hide";
    sidemenu.className = "hide";
  }
}

function openhubs() {
  if (infinity.title == "Infinity") {
    infinity.title = "Hubs";
    infinity.src =
      "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
    groups.className = "hide";
    splash.className = "splash";
    infinity.className = "apps";
    info.className = "hide";
    dreamslist.innerHTML = "Loading Hubs...";
  } else {
    infinity.title = "Infinity";
    infinity.src =
      "https://opengpts-example-vz4y4ooboq-uc.a.run.app/?shared_id=f8e255b1-6ac6-4b5b-af4c-5a00afad18bc?shared_id=a27e9bc2-50ff-4106-bfcc-e609e0ca62b3";
    groups.className = "show";
    splash.className = "hide";
    infinity.className = "hide";
    info.className = "hide";
  }
}

function cardsview() {
  window.open("/cards", "_self");
}

function chatbotview() {
  if (infinity.title == "Infinity") {
    infinity.title = "AI";
    infinity.src =
      "https://opengpts-example-vz4y4ooboq-uc.a.run.app/?shared_id=f8e255b1-6ac6-4b5b-af4c-5a00afad18bc?shared_id=a27e9bc2-50ff-4106-bfcc-e609e0ca62b3";
    groups.className = "hide";
    splash.className = "splash";
    infinity.className = "apps";
    info.className = "hide";
  } else {
    infinity.title = "Infinity";
    infinity.src =
      "https://opengpts-example-vz4y4ooboq-uc.a.run.app/?shared_id=f8e255b1-6ac6-4b5b-af4c-5a00afad18bc?shared_id=a27e9bc2-50ff-4106-bfcc-e609e0ca62b3";
    groups.className = "show";
    infinity.className = "hide";
    splash.className = "hide";
    info.className = "hide";
  }
}

function infoview() {
  if (info.title == "Information") {
    info.title = "Info";
    info.className = "apps";
    groups.className = "hide";
    splash.className = "hide";
  } else {
    info.title = "Information";
    info.className = "hide";
    groups.className = "show";
    splash.className = "hide";
  }
}

function learnHow() {
  if (learnhow.className == "hide") {
    learnhow.className = "show";
    learnbtn.innerHTML = "Close";
  } else {
    learnhow.className = "hide";
    learnbtn.innerHTML = "Learn How";
  }
}

function rewardsview() {
  if (rewards.title == "Closed") {
    rewards.title = "Rewards";
    rewards.className = "splash";
    groups.className = "hide";
    splash.className = "hide";
    info.className = "hide";
  } else {
    rewards.title = "Closed";
    rewards.className = "hide";
    groups.className = "show";
    splash.className = "hide";
  }
}

function launchgroupview() {
  if (launchgroup.title == "Closed") {
    launchgroup.title = "Launching A Group";
    launchgroup.className = "notepad";

    groups.className = "hide";
    splash.className = "hide";
  } else {
    launchgroup.title = "Closed";
    launchgroup.className = "hide";
  }
}

function closeside() {
  tokens.className = "hide";
  wallets.className = "hide";
  groups.className = "show";
  sidemenu.className = "hide";
  traders.className = "hide";
  wallets.className = "hide";
  splash.className = "hide";
  info.className = "hide";
  rewards.className = "hide";
  launchgroup.className = "hide";
  groups.className = "show";
  infinity.title = "Infinity";
  info.title = "Information";
  rewards.title = "Closed";
  launchgroup.title = "Closed";
  hooks.className = "hide";
}

function comingsoon() {
  alert("Coming Soon!");
}

function Communityview() {
  var txt;
  if (confirm("Switch To MindsGaming?")) {
    window.open("https://MindsGaming.glitch.me", "_self");
  } else {
  }
}

function viewLOGIN() {
  if (termframe.title == "Login") {
    infinity.title = "Terminal";
    infinity.src = "/term";
    groups.className = "hide";
    splash.className = "splash";
    infinity.className = "apps";
    info.className = "hide";
    dreamsList.innerHTML = "";
  } else {
    infinity.title = "Infinity";
    infinity.src =
      "https://opengpts-example-vz4y4ooboq-uc.a.run.app/?shared_id=f8e255b1-6ac6-4b5b-af4c-5a00afad18bc?shared_id=a27e9bc2-50ff-4106-bfcc-e609e0ca62b3";
    groups.className = "show";
    splash.className = "hide";
    infinity.className = "hide";
    info.className = "hide";
  }
}
