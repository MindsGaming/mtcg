function mtcgToken() {
  window.open("https://www.mintme.com/token/MTCG/MINTME/trade", "_blank");
}

function communityTokens() {
  let tokenList = document.getElementById("token-list");
  let holder = document.getElementById("holder");
  let footers = document.getElementById("topics");

  if (tokenList.className == "hide") {
    tokenList.className = "token-list";
    holder.className = "hide";
    footers.className = "hide";
  } else {
    if (tokenList.className == "token-list") {
      tokenList.className = "hide";
      holder.className = "holder";
      footers.className = "topics";
    }
  }
}

/* HTTPS */

var loc = window.location.href + "";
if (loc.indexOf("http://") == 0) {
  window.location.href = loc.replace("http://", "https://");
}
