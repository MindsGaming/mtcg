var next = document.getElementById("next");
var nextBTN = document.getElementById("nextBTN");
var bonusTab = document.getElementById("bonusTab");

function nextVideo() {
  if (next.title == "One") {
       next.src = "https://www.youtube.com/embed/CiIRz7JGKcE?si=Q6b0aTS-0kc3Luh9";
    next.title = "Two";
    delayBTN();
  } else {
    if (next.title == "Two") {
      next.src =
        "https://www.youtube.com/embed/yBu_Bmvqp8M?si=pUGqMGRv1qh9I935";
      next.title = "Three";
      delayBTN();
    } else {
      if (next.title == "Three") {
        next.src =
          "https://www.youtube.com/embed/szNGaEEICLM?si=bQWIfWMVy6xM9vBR";
        next.title = "Four";
        delayBTN();
      } else {
        if (next.title == "Four") {
          next.src =
            "https://www.youtube.com/embed/zy0LF44jbkE?si=2yQdm1-DGJY4fwVO";
          next.title = "Five";
          delayBTN();
        } else {
          if (next.title == "Five") {
            next.src =
              "https://www.youtube.com/embed/38ncPWdbsYs?si=e3wMjnfttgI7CEj2";

            next.title = "Six";
            delayBTN();
          } else {
            if (next.title == "Six") {
              next.src =
                "https://www.youtube.com/embed/4D5oNiqYnbQ?si=jmRcBuLKuFEH2Jjs";
              next.title = "Six";
              let nextBTN = document.getElementById("nextBTN");
              nextBTN.className = "hide";

              if (bonusTab.className == "") {
                let form = document.getElementById("form");
                form.className = "";
              }
            }
          }
        }
      }
    }
  }
}

function delayBTN() {
  let timer = setTimeout(delay, 1500);
  nextBTN.className = "hide";
  function delay() {
    nextBTN.className = "next";
  }
}

function getGamerSponsor() {
  let sponsors = document.getElementById("sponsored");
  if (sponsors.title == "Open") {
    sponsors.title = "gamer";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsors.title == "gamer") {
      sponsors.title = "Open";
      rollingOut();
    }
  }
}

function getBobSponsor() {
  let sponsors = document.getElementById("sponsored");
  if (sponsors.title == "Open") {
    sponsors.title = "bob";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsors.title == "bob") {
      sponsors.title = "Open";
      rollingOut();
    }
  }
}

function getDwmwSponsor() {
  let sponsor = document.getElementById("sponsored");
  if (sponsor.title == "Open") {
    sponsor.title = "dwmw";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "dwmw") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}

function getW8wSponsor() {
  let sponsor = document.getElementById("sponsored");
  if (sponsor.title == "Open") {
    sponsor.title = "w8w";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "w8w") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}

function getWwowSponsor() {
  let sponsor = document.getElementById("sponsored");
  if (sponsor.title == "Open") {
    sponsor.title = "wwow";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "wwow") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}

function getSatoridSponsor() {
  let sponsor = document.getElementById("sponsored");
  if (sponsor.title == "Open") {
    sponsor.title = "satorid";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "satorid") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}

function getCandysSponsor() {
  let sponsor = document.getElementById("sponsored");
  if (sponsor.title == "Open") {
    sponsor.title = "candys";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "candys") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}

/* HTTPS */

var loc = window.location.href + "";
if (loc.indexOf("http://") == 0) {
  window.location.href = loc.replace("http://", "https://");
}
