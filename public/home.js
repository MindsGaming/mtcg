function mtcgToken() {
  window.open("https://www.mintme.com/token/MTCG/MINTME/trade", "_blank");
}

function communityTokens() {
  let tokenList = document.getElementById("token-list");

  if (tokenList.className == "hide") {
    tokenList.className = "token-list";
  } else {
    if (tokenList.className == "token-list") {
      tokenList.className = "hide";
    }
  }
}

/* HTTPS */

var loc = window.location.href + "";
if (loc.indexOf("http://") == 0) {
  window.location.href = loc.replace("http://", "https://");
}
