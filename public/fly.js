const hubs = document.getElementById("HUBS");
const app = document.getElementById("APP");
const games = document.getElementById("GAMES");
const collection = document.getElementById("COLLECTION");
const importtokens = document.getElementById("IMPORTTOKENS");

const login = document.getElementById("LOGIN");
const loginform = document.getElementById("login-form");

changeToken();

function changeToken() {
  var oldToken = dreamToken.innerHTML;

  var extralist = [
    "DragonToken",
    "DarkMark",
    "Candys",
    "PINN",
    "withinthevacuum",
    "ECLIPSE",
    "DooBetter",
    "GTPC",
  ];
  var newTokens = [
    "DarkMark",
    "DragonToken",
    "Candys",
    "PINN",
    "withinthevacuum",
    "ECLIPSE",
    "DooBetter",
    "GTPC",
    "GAMER",
  ];
  const newtoken = newTokens[Math.floor(Math.random() * newTokens.length)];
  dreamToken.innerHTML = newtoken;

  if (newtoken == oldToken) {
    changeToken();
  } else {
    var levelUp = document.getElementById("levelUp");

    if (newtoken == "DarkMark") {
      dreamToken.className = "darkmarkIMG";
      dreamToken.title = newtoken;
      levelUp.value = "5";
    }

    if (newtoken == "DragonToken") {
      dreamToken.className = "dragontokenIMG";
      dreamToken.title = newtoken;
      levelUp.value = "11";
    }
    if (newtoken == "Candys") {
      dreamToken.className = "candysIMG";
      dreamToken.title = newtoken;
      levelUp.value = "16";
    }
    if (newtoken == "PINN") {
      dreamToken.className = "PINNIMG";
      dreamToken.title = newtoken;
      levelUp.value = "21";
    }

    if (newtoken == "withinthevacuum") {
      dreamToken.className = "withinthevacuumIMG";
      dreamToken.title = newtoken;
      levelUp.value = "26";
    }
    if (newtoken == "ECLIPSE") {
      dreamToken.className = "doobetterIMG";
      dreamToken.title = newtoken;
      levelUp.value = "31";
    }

    if (newtoken == "DooBetter") {
      dreamToken.className = "gtpcIMG";
      dreamToken.title = newtoken;
      levelUp.value = "36";
    }

    if (newtoken == "GTPC") {
      dreamToken.className = "gtpcIMG";
      dreamToken.title = newtoken;
      levelUp.value = "41";
    }

    if (newtoken == "GAMER") {
      dreamToken.className = "gamerIMG";
      dreamToken.title = newtoken;
      levelUp.value = "51";
    }
    var current = levelUp.value;
    var remove = 1;
    var math = current.innerHTML - remove;
    reset();
  }
}

function displayTools() {
  var tools = document.getElementById("TOOLS");
  var quicktools = document.getElementById("quickTools");

  if (tools.title == "TOOLS") {
    tools.className = "hide";
    quicktools.className = "quick";
    tools.title = "tools";
  } else {
    if (tools.title == "tools") {
      tools.className = "display";
      quicktools.className = "quicker";
      tools.title = "TOOLS";
    }
  }
}

function quickhub() {
  if (hubs.title == "build") {
    app.className = "hide";
    hubs.title = "HUBS";
    hubs.className = "wrap";
    app.title = "HUBS";
    games.className = "hide";
    games.title = "closed";
    var createHUB = document.createElement("iframe");
    createHUB.src =
      "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
    createHUB.className = "wrap";
    createHUB.allow = "microphone; camera; vr; speaker;";
    var CREATEHUB = document.getElementById("HUBS").appendChild(createHUB);
  } else {
    if (hubs.title == "closed") {
      hubs.title = "HUBS";
      hubs.className = "display";
      app.title = "HUBS";
      app.className = "hide";
      login.className = "hide";
      login.title = "closed";
      collection.title = "closed";
      collection.className = "hide";
      games.className = "hide";
      games.title = "closed";
    }
  }

  if (hubs.innerHTML == "") {
    hubs.title = "build";
    quickhub();
  }
}

function HOME() {
  if (app.title == "HOME") {
    let text;
    if (confirm("Are You Sure You Want To Refresh The Home Page?") == true) {
      window.open("/", "_self");
    } else {
      text = "You canceled!";
    }
  } else {
    if (hubs.title == "HUBS") {
      hubs.title = "closed";
      hubs.className = "hide";
      app.title = "HOME";
      app.className = "display";
      games.className = "hide";
      games.title = "closed";
      importtokens.className = "hide";
      importtokens.title = "closed";
    }
    if (app.title == "REWARDS") {
      hubs.title = "closed";
      hubs.className = "hide";
      app.title = "HOME";
      app.className = "display";
      login.className = "hide";
      login.title = "closed";
      games.className = "hide";
      games.title = "closed";
      importtokens.className = "hide";
      importtokens.title = "closed";
    }
    if (app.title == "COLLECTION") {
      hubs.title = "closed";
      hubs.className = "hide";
      app.title = "HOME";
      app.className = "display";
      login.className = "hide";
      login.title = "closed";
      collection.className = "hide";
      collection.title = "closed";
      games.className = "hide";
      games.title = "closed";
      importtokens.className = "hide";
      importtokens.title = "closed";
    }
    if (app.title == "GAMES") {
      hubs.title = "closed";
      hubs.className = "hide";
      app.title = "HOME";
      app.className = "display";
      login.className = "hide";
      login.title = "closed";
      collection.className = "hide";
      collection.title = "closed";
      games.className = "hide";
      games.title = "closed";
      importtokens.className = "hide";
      importtokens.title = "closed";
    }
    if (app.title == "IMPORTING") {
      hubs.title = "closed";
      hubs.className = "hide";
      app.title = "HOME";
      app.className = "display";
      login.className = "hide";
      login.title = "closed";
      collection.className = "hide";
      collection.title = "closed";
      games.className = "hide";
      games.title = "closed";
      importtokens.className = "hide";
      importtokens.title = "closed";
    }
  }
}

function justexplore() {
  displayTools();
  quickhub();
}

function userview() {
  if (login.title == "closed") {
    hubs.className = "hide";
    hubs.title = "closed";
    app.title = "REWARDS";
    app.className = "hide";
    login.className = "display";
    login.title = "REWARDS";
    collection.title = "closed";
    collection.className = "hide";
    games.className = "hide";
    games.title = "closed";
    importtokens.className = "hide";
    importtokens.title = "closed";
  }

  if (dreamInput.value == "") {
  } else {
    loginform.className = "hide";
    myWallet.innerHTML = dreamInput.value;
    myWallet.title = dreamInput.value;
    var walletlinks = document.getElementById("wallet-links");
    walletlinks.className = "display";
  }
}

function viewcollection() {
  if (collection.title == "build") {
    var createHUB = document.createElement("iframe");
    createHUB.src = "/mtcg/cards";
    createHUB.className = "wrap";
    createHUB.allow = "microphone; camera; vr; speaker;";
    var CREATEHUB = document
      .getElementById("COLLECTION")
      .appendChild(createHUB);
    hubs.title = "closed";
    hubs.className = "hide";
    app.title = "COLLECTION";
    app.className = "hide";
    login.className = "hide";
    login.title = "closed";
    games.className = "hide";
    games.title = "closed";
    importtokens.className = "hide";
    importtokens.title = "closed";
    collection.title = "COLLECTION";
    collection.className = "display";
  } else {
    if (collection.title == "closed") {
      hubs.title = "closed";
      hubs.className = "hide";
      app.title = "COLLECTION";
      app.className = "hide";
      login.className = "hide";
      login.title = "closed";
      games.className = "hide";
      games.title = "closed";
      importtokens.className = "hide";
      importtokens.title = "closed";
      collection.title = "COLLECTION";
      collection.className = "display";
    }
  }

  if (collection.innerHTML == "") {
    collection.title = "build";
    viewcollection();
  }
}

function viewgames() {
  if (games.title == "closed") {
    hubs.title = "closed";
    hubs.className = "hide";
    app.title = "GAMES";
    app.className = "hide";
    login.className = "hide";
    login.title = "closed";
    importtokens.className = "hide";
    importtokens.title = "closed";
    collection.title = "closed";
    collection.className = "hide";
    games.className = "splash";
    games.title = "GAMES";
  } else {
    if (games.title == "open") {
      hubs.title = "closed";
      hubs.className = "hide";
      app.title = "HOME";
      app.className = "display";
      login.className = "hide";
      login.title = "closed";
      games.className = "hide";
      games.title = "closed";
      importtokens.className = "hide";
      importtokens.title = "closed";
      collection.title = "closed";
      collection.className = "hide";
    }
  }
}

function importTokens() {
  if (importtokens.title == "build") {
    var createHUB = document.createElement("iframe");
    createHUB.src = "/tokens";
    createHUB.className = "wrap";
    createHUB.allow = "microphone; camera; vr; speaker;";
    var CREATEHUB = document
      .getElementById("IMPORTTOKENS")
      .appendChild(createHUB);
    hubs.title = "closed";
    hubs.className = "hide";
    app.title = "IMPORTING";
    app.className = "hide";
    login.className = "hide";
    login.title = "closed";
    collection.title = "closed";
    collection.className = "hide";
    games.className = "hide";
    games.title = "closed";
    importtokens.title = "IMPORTING";
    importtokens.className = "display";
  } else {
    if (importtokens.title == "closed") {
      hubs.title = "closed";
      hubs.className = "hide";
      app.title = "IMPORTING";
      app.className = "hide";
      login.className = "hide";
      login.title = "closed";
      collection.title = "closed";
      collection.className = "hide";
      games.className = "hide";
      games.title = "closed";
      importtokens.className = "display";
      importtokens.title = "IMPORTING";
    }
  }

  if (importtokens.innerHTML == "") {
    importtokens.title = "build";
    importTokens();
  }
}

function manualInfo() {
  var manual = document.getElementById("manualInfo");

  if (manual.title == "closed") {
    manual.className = "display";
    manual.title = "manual";
  } else {
    if (manual.title == "manual") {
      manual.className = "hide";
      manual.title = "closed";
    }
  }
}

function walletTools() {
  var walletlinks = document.getElementById("wallet-links");

  walletlinks.className = "display";
  window.open("#wallet-links", "_self");
}

/* Online Check */

const status = window.navigator.onLine;
if (status) online();
else offline();
window.addEventListener("online", online);
window.addEventListener("offline", offline);
function online() {
  var offlineNotice = document.getElementById("offline");
  offlineNotice.className = "hide";
}

function offline() {
  var offlineNotice = document.getElementById("offline");
  offlineNotice.className = "offline";
  checkStatus();
}

function checkStatus() {
  const status = window.navigator.onLine;
  if (status) online();
  else offline();
  window.addEventListener("online", online);
  window.addEventListener("offline", offline);
  function online() {
    var offlineNotice = document.getElementById("offline");
    offlineNotice.className = "hide";
  }

  function offline() {
    let text;
    if (confirm("No Connection Found, Rewards Are Paused") == true) {
      checkStatus();
    } else {
      checkStatus();
    }
  }
}

function storeitem() {
  var storeURLS = [
    "https://mintme.com/token/ECLIPSE",
    "https://mintme.com/token/GTPC",
    "https://mintme.com/token/Candys",
  ];
  var pickURL = storeURLS[Math.floor(Math.random() * storeURLS.length)];
  window.open(pickURL, "_blank");
}
