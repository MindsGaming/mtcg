var next = document.getElementById("next");
var nextBTN = document.getElementById("nextBTN");
var bonusTab = document.getElementById("bonusTab");

function nextVideo() {
  if (next.title == "One") {
    next.src = "https://www.youtube.com/embed/CiIRz7JGKcE";
    next.title = "Two";
    delayBTN();
  } else {
    if (next.title == "Two") {
      next.src = "https://www.youtube.com/embed/yBu_Bmvqp8M";
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
            "https://www.youtube.com/embed/zy0LF44jbkE?si=YW0Kd_Ikckis2kul";
          next.title = "Five";
          delayBTN();
        } else {
          if (next.title == "Five") {
            next.src =
              "https://www.youtube.com/embed/eeS1mf-N4PE?si=LgLSvzpFC5G-Jtbq";
            next.title = "Six";
            delayBTN();
          } else {
            if (next.title == "Six") {
              next.src =
                "https://www.youtube.com/embed/38ncPWdbsYs?si=e3wMjnfttgI7CEj2";
              // next.src ="https://www.youtube.com/embed/4D5oNiqYnbQ?si=jmRcBuLKuFEH2Jjs";
              next.title = "Seven";
              let nextBTN = document.getElementById("nextBTN");
              delayBTN();
            } else {
              if (next.title == "Seven") {
                next.src =
                  "https://www.youtube.com/embed/4D5oNiqYnbQ?si=jmRcBuLKuFEH2Jjs";
                next.title = "Seven";
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
}

function delayBTN() {
  let timer = setTimeout(delay, 1500);
  nextBTN.className = "hide";
  function delay() {
    nextBTN.className = "next";
  }
}

/* playlist */

function creatingAtoken() {
  next.title = "One";
  nextVideo();
}

function settingYourmarket() {
  next.title = "Two";
  nextVideo();
}

function wheresYourwallet() {
  next.title = "Three";
  nextVideo();
}

function sellBuydonate() {
  next.title = "Four";
  nextVideo();
}

function ladderTrading() {
  next.title = "Five";
  nextVideo();
}

function mintmeTometa() {
  next.title = "Six";
  nextVideo();
}


/* HTTPS */

var loc = window.location.href + "";
if (loc.indexOf("http://") == 0) {
  window.location.href = loc.replace("http://", "https://");
}
