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
            "https://www.youtube.com/embed/BhS_OF0tYSE?si=4mJEpOvAoIKA17bR";

          next.title = "Five";
          delayBTN();
        } else {
          if (next.title == "Five") {
            next.src =
              "https://www.youtube.com/embed/zy0LF44jbkE?si=YW0Kd_Ikckis2kul";
            next.title = "Six";
            delayBTN();
          } else {
            if (next.title == "Six") {
              next.src =
                "https://www.youtube.com/embed/eeS1mf-N4PE?si=LgLSvzpFC5G-Jtbq";
              next.title = "Seven";
              let nextBTN = document.getElementById("nextBTN");
              delayBTN();
            } else {
              if (next.title == "Seven") {
                next.src =
                  "https://www.youtube.com/embed/38ncPWdbsYs?si=e3wMjnfttgI7CEj2";
                next.title = "Eight";
                let nextBTN = document.getElementById("nextBTN");
                delayBTN();
              } else {
                if (next.title == "Eight") {
                  next.src =
                    "https://www.youtube.com/embed/4D5oNiqYnbQ?si=jmRcBuLKuFEH2Jjs";
                  next.title = "Nine";
                  let nextBTN = document.getElementById("nextBTN");
                  delayBTN();
                } else {
                  if (next.title == "Nine") {
                    next.src =
                      "https://www.youtube.com/embed/aiyRy1P163o?si=_5wAco2qkCQm8CV-";
                    next.title = "Zero";
                    let nextBTN = document.getElementById("nextBTN");
                    delayBTN();
                  } else {
                    if (next.title == "Zero") {
                      next.src =
                        "https://www.youtube.com/embed/ryPIIDtyHTQ?si=CxaTLsUfnR8ankti";
                      next.title = "One";
                      let nextBTN = document.getElementById("nextBTN");
                      delayBTN();
                    }
                  }
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

function whyisMintmegreat() {
  let v = document.getElementById("vzero");
  v.className = "highlight";
  next.title = "Zero";
  nextVideo();
}

function creatingAtoken() {
  let v = document.getElementById("vone");
  v.className = "highlight";
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

function sendAndrecive() {
  next.title = "Four";
  nextVideo();
}

function sellBuydonate() {
  next.title = "Five";
  nextVideo();
}

function ladderTrading() {
  next.title = "Six";
  nextVideo();
}

function mintmeTometa() {
  next.title = "Seven";
  nextVideo();
}

function exploringTools() {
  next.title = "Eight";
  nextVideo();
}

function deployingTokens() {
  next.title = "Nine";
  nextVideo();
}

/* Tabs */

let home = document.getElementById("home-page");
let quest = document.getElementById("quest-page");

function helpVideos() {
  if (home.className == "home") {
  } else {
    if (home.className == "hide") {
      home.className = "home";
      quest.className = "hide";
    }
  }
}

function questVideos() {
  if (home.className == "home") {
    home.className = "hide";
    quest.className = "home";
  } else {
    if (home.className == "hide") {
    }
  }
}

/* HTTPS */

var loc = window.location.href + "";
if (loc.indexOf("http://") == 0) {
  window.location.href = loc.replace("http://", "https://");
}
