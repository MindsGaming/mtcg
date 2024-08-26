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
  let sponsor = document.getElementById("sponsored");

  if (sponsor.title == "Open") {
    sponsor.title = "gamer";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "gamer") {
      sponsor.title = "Open";
      rollingOut();
    }
  }
}

function getBobSponsor() {
  let sponsor = document.getElementById("sponsored");

  if (sponsor.title == "Open") {
    sponsor.title = "bob";
    bonusTab.className = "";
    rollingOut();
  } else {
    if (sponsor.title == "bob") {
      sponsor.title = "Open";
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

/* HTTPS */

var loc = window.location.href + "";
if (loc.indexOf("http://") == 0) {
  window.location.href = loc.replace("http://", "https://");
}
