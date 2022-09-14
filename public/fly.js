function quickhub() {
  var hubs = document.getElementById("HUBS");
  var app = document.getElementById("APP");

  if (hubs.title == "closed") {
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

function HOME() {
  var app = document.getElementById("APP");
  var hubs = document.getElementById("HUBS");

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
    }
  }
}
