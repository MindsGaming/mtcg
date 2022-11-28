function MTCGinfo() {
  var tokenList = document.getElementById("MTCGinfo");
  if (tokenList.title == "CLOSED") {
    tokenList.title = "MTCG";
    tokenList.className = "tokenlist";

    var pushpage = document.getElementById("TOKENINFO");
    pushpage.title = "MTCG";
    pushpage.className = "tokenbutton";
    pushpage.innerHTML = "Manual Connect Only";
  } else {
    tokenList.title = "CLOSED";
    tokenList.className = "hide";
  }
}

function GAMERinfo() {
  var tokenList = document.getElementById("GAMERinfo");
  if (tokenList.title == "CLOSED") {
    tokenList.title = "GAMER";
    tokenList.className = "tokenlist";

    var pushpage = document.getElementById("TOKENINFO");
    pushpage.title = "GAMER";
    pushpage.innerHTML = "Connect GAMER";
    addtokens();
  } else {
    tokenList.title = "CLOSED";
    tokenList.className = "hide";
  }
}

function ECLIPSEinfo() {
  var tokenList = document.getElementById("ECLIPSEinfo");
  if (tokenList.title == "CLOSED") {
    tokenList.title = "ECLIPSE";
    tokenList.className = "tokenlist";

    var pushpage = document.getElementById("TOKENINFO");
    pushpage.title = "ECLIPSE";
    pushpage.innerHTML = "Connect ECLISPE";
    addtokens();
  } else {
    tokenList.title = "CLOSED";
    tokenList.className = "hide";
  }
}

function DooBetterinfo() {
  var tokenList = document.getElementById("DooBetterinfo");
  if (tokenList.title == "CLOSED") {
    tokenList.title = "DooBetter";
    tokenList.className = "tokenlist";

    var pushpage = document.getElementById("TOKENINFO");
    pushpage.title = "DooBetter";
    pushpage.innerHTML = "Connect DooBetter";
    addtokens();
  } else {
    tokenList.title = "CLOSED";
    tokenList.className = "hide";
  }
}

function GTPCinfo() {
  var tokenList = document.getElementById("GTPCinfo");
  if (tokenList.title == "CLOSED") {
    tokenList.title = "GTPC";
    tokenList.className = "tokenlist";

    var pushpage = document.getElementById("TOKENINFO");
    pushpage.title = "GTPC";
    pushpage.innerHTML = "Connect GTPC";
    addtokens();
  } else {
    tokenList.title = "CLOSED";
    tokenList.className = "hide";
  }
}

function DragonTokeninfo() {
  var tokenList = document.getElementById("DragonTokeninfo");
  if (tokenList.title == "CLOSED") {
    tokenList.title = "DragonToken";
    tokenList.className = "tokenlist";

    var pushpage = document.getElementById("TOKENINFO");
    pushpage.title = "DragonToken";
    pushpage.innerHTML = "Connect DragonToken";
    addtokens();
  } else {
    tokenList.title = "CLOSED";
    tokenList.className = "hide";
  }
}

function DarkMarkinfo() {
  var tokenList = document.getElementById("DarkMarkinfo");
  if (tokenList.title == "CLOSED") {
    tokenList.title = "DarkMark";
    tokenList.className = "tokenlist";

    var pushpage = document.getElementById("TOKENINFO");
    pushpage.title = "DarkMark";
    pushpage.innerHTML = "Connect DarkMark";
    addtokens();
  } else {
    tokenList.title = "CLOSED";
    tokenList.className = "hide";
  }
}

function Candysinfo() {
  var tokenList = document.getElementById("Candysinfo");
  if (tokenList.title == "CLOSED") {
    tokenList.title = "Candys";
    tokenList.className = "tokenlist";

    var pushpage = document.getElementById("TOKENINFO");
    pushpage.title = "Candys";
    pushpage.className = "hide";
    pushpage.innerHTML = "Connect Candys";
    addtokens();
  } else {
    tokenList.title = "CLOSED";
    tokenList.className = "hide";
  }
}

function withinthevacuuminfo() {
  var tokenList = document.getElementById("withinthevacuuminfo");
  if (tokenList.title == "CLOSED") {
    tokenList.title = "WTV";
    tokenList.className = "tokenlist";

    var pushpage = document.getElementById("TOKENINFO");
    pushpage.title = "WTV";
    pushpage.className = "hide";
    pushpage.innerHTML = "Connect withinthevacuum";
    addtokens();
  } else {
    tokenList.title = "CLOSED";
    tokenList.className = "hide";
  }
}

function PINNinfo() {
  var tokenList = document.getElementById("PINNinfo");
  if (tokenList.title == "CLOSED") {
    tokenList.title = "PINN";
    tokenList.className = "tokenlist";

    var pushpage = document.getElementById("TOKENINFO");
    pushpage.title = "PINN";
    pushpage.className = "hide";
    pushpage.innerHTML = "Connect PINN";
    addtokens();
  } else {
    tokenList.title = "CLOSED";
    tokenList.className = "hide";
  }
}

function goBack() {
  window.open("/tokens/index.html", "_self");
}
