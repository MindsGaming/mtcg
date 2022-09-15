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

  var extralist = ["DragonToken", "DarkMark", "ECLIPSE", "DooBetter", "GTPC"];
  var newTokens = [
    "DarkMark",
    "DragonToken",
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

    if (newtoken == "DragonToken") {
      dreamToken.className = "dragontokenIMG";
      dreamToken.title = newtoken;
      levelUp.value = "6";
    }

    if (newtoken == "ECLIPSE") {
      dreamToken.className = "eclipseIMG";
      dreamToken.title = newtoken;
      levelUp.value = "15";
    }

    if (newtoken == "DooBetter") {
      dreamToken.className = "doobetterIMG";
      dreamToken.title = newtoken;
      levelUp.value = "25";
    }
    if (newtoken == "GTPC") {
      dreamToken.className = "gtpcIMG";
      dreamToken.title = newtoken;
      levelUp.value = "35";
    }

    if (newtoken == "GAMER") {
      dreamToken.className = "gamerIMG";
      dreamToken.title = newtoken;
      levelUp.value = "47";
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
  }
}

function viewcollection() {
  if (collection.title == "build") {
    var createHUB = document.createElement("iframe");
    createHUB.src = "/cards";
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
  if (games.title == "build") {
    var createHUB = document.createElement("iframe");
    createHUB.src = "/games";
    createHUB.className = "wrap";
    createHUB.allow = "microphone; camera; vr; speaker;";
    var CREATEHUB = document.getElementById("GAMES").appendChild(createHUB);
    hubs.title = "closed";
    hubs.className = "hide";
    app.title = "GAMES";
    app.className = "hide";
    login.className = "hide";
    login.title = "closed";
    collection.title = "closed";
    collection.className = "hide";
    importtokens.className = "hide";
    importtokens.title = "closed";
    games.className = "display";
    games.title = "GAMES";
  } else {
    if (games.title == "closed") {
      hubs.title = "closed";
      hubs.className = "hide";
      app.title = "GAMES";
      app.className = "hide";
      login.className = "hide";
      login.title = "closed";
      collection.title = "closed";
      collection.className = "hide";
      importtokens.className = "hide";
      importtokens.title = "closed";
      games.className = "display";
      games.title = "GAMES";
    }
  }

  if (games.innerHTML == "") {
    games.title = "build";
    viewgames();
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
