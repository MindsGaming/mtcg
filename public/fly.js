function quickhub() {
  var hubs = document.getElementById("HUBS");
  var wrap = document.getElementById("APP");
  wrap.className = "hide";
  hubs.title = "HUBS";
  hubs.className = "wrap";
  var createHUB = document.createElement("iframe");
  createHUB.src =
    "https://hubs.mozilla.com/EJFaEcZ?embed_token=d4f6c2c54a1a684be3668b366724fb05";
  createHUB.className = "wrap";
  createHUB.allow = "microphone; camera; vr; speaker;";
  var CREATEHUB = document.getElementById("HUBS").appendChild(createHUB);
}

function displayTools() {
  var tools = document.getElementById("TOOLS");
  var quicktools = document.getElementById("quickTools");

  if (tools.title == "TOOLS") {
    tools.className = "display";
    quicktools.className = "quicker";
    tools.title = "tools";
  } else {
    if (tools.title == "tools") {
      tools.className = "hide";
      quicktools.className = "quick";
      tools.title = "TOOLS";
    }
  }
}
