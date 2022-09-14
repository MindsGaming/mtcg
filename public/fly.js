const hubs = document.getElementById("HUBS");
const app = document.getElementById("APP");
const games = document.getElementById("GAMES");
const login = document.getElementById("LOGIN");
const loginform = document.getElementById("login-form");

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
    hubs.title = "HUBS";
    hubs.className = "display";
    app.title = "HUBS";
    login.className = "hide";
    login.title = "closed";
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
      hubs.title = "HUBS";
      hubs.className = "hide";
      app.title = "HOME";
      app.className = "display";
    }
    if (app.title == "REWARDS") {
      hubs.title = "closed";
      hubs.className = "hide";
      app.title = "HOME";
      app.className = "display";
      login.className = "hide";
      login.title = "closed";
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
  }

  if (myWallet.innerHTML == "LOGIN") {
  } else {
    loginform.className = "hide";
  }
}
