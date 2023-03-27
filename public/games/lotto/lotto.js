const lottoamount = document.getElementById("LOTTOMETER");
const lottoamountBTN = document.getElementById("lottoamountBTN");
lottoamountBTN.addEventListener("click", addlottoamount);

const pickone = document.getElementById("PICKONE");
const picktwo = document.getElementById("PICKTWO");
const pickthree = document.getElementById("PICKTHREE");
const pickfour = document.getElementById("PICKFOUR");
const pickfive = document.getElementById("PICKFIVE");
const lottointro = document.getElementById("lottointro");
const placemone = document.getElementById("pickone");
const placemtwo = document.getElementById("picktwo");
const placemthree = document.getElementById("pickthree");
const placemfour = document.getElementById("pickfour");
const placemfive = document.getElementById("pickfive");
const lottopicks = document.getElementById("lottopicks");
const lottoicon = document.getElementById("lottoamount");

function addlottoamount() {
  if (lottoamountBTN.title == "Ready") {
    lottopaymode();
  } else {
    if (lottoamount.value == 2) {
      pickone.className = "lottoball";
      picktwo.className = "lottoball";
      lottoicon.className = "hide";
      lottoamountBTN.removeEventListener("click", addlottoamount);
      lottoamountBTN.addEventListener("click", drawlotto);
    } else {
      if (lottoamount.value == 3) {
        pickone.className = "lottoball";
        picktwo.className = "lottoball";
        pickthree.className = "lottoball";
        lottoicon.className = "hide";
        lottoamountBTN.removeEventListener("click", addlottoamount);
        lottoamountBTN.addEventListener("click", drawlotto);
      } else {
        if (lottoamount.value == 4) {
          pickone.className = "lottoball";
          picktwo.className = "lottoball";
          pickthree.className = "lottoball";
          pickfour.className = "lottoball";
          lottoicon.className = "hide";
          lottoamountBTN.removeEventListener("click", addlottoamount);
          lottoamountBTN.addEventListener("click", drawlotto);
        } else {
          if (lottoamount.value == 5) {
            pickone.className = "lottoball";
            picktwo.className = "lottoball";
            pickthree.className = "lottoball";
            pickfour.className = "lottoball";
            pickfive.className = "lottoball";
            lottoicon.className = "hide";
            lottoamountBTN.innerHTML = "Play";
            lottoamountBTN.removeEventListener("click", addlottoamount);
            lottoamountBTN.addEventListener("click", drawlotto);
          } else {
            pickone.innerHTML = "";
            picktwo.innerHTML = "";
            pickthree.innerHTML = "";
            pickfour.innerHTML = "";
            pickfive.innerHTML = "";
          }
        }
      }
    }
    lottointro.innerHTML = "Select Your Numbers.";
    lottoamountBTN.innerHTML = "Play";
  }
}

function drawlotto() {
  lottoamountBTN.removeEventListener("click", drawlotto);
  var lottonumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  lottopicks.className = "";
  var machinepick =
    lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
  if (lottoamount.value == 2) {
    var machinepicktwo =
      lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
    placemone.innerHTML = machinepick;
    placemtwo.innerHTML = machinepicktwo;
    placemthree.className = "hide";
    placemfour.className = "hide";
    placemfive.className = "hide";
    setTimeout(checklottonumbers, 2200);
  } else {
    if (lottoamount.value == 3) {
      var machinepicktwo =
        lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
      var machinepickthree =
        lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
      placemone.innerHTML = machinepick;
      placemtwo.innerHTML = machinepicktwo;
      placemthree.innerHTML = machinepickthree;
      placemfour.className = "hide";
      placemfive.className = "hide";
    } else {
      if (lottoamount.value == 4) {
        var machinepicktwo =
          lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
        var machinepickthree =
          lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
        var machinepickfour =
          lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
        placemone.innerHTML = machinepick;
        placemtwo.innerHTML = machinepicktwo;
        placemthree.innerHTML = machinepickthree;
        placemfour.innerHTML = machinepickfour;
        placemfive.className = "hide";
      } else {
        if (lottoamount.value == 5) {
          var machinepicktwo =
            lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
          var machinepickthree =
            lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
          var machinepickfour =
            lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
          var machinepickfour =
            lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
          var machinepickfive =
            lottonumbers[Math.floor(Math.random() * lottonumbers.length)];
          placemone.innerHTML = machinepick;
          placemtwo.innerHTML = machinepicktwo;
          placemthree.innerHTML = machinepickthree;
          placemfour.innerHTML = machinepickfour;
          placemfive.innerHTML = machinepickfive;
        }
      }
    }
    setTimeout(checklottonumbers, 2200);
  }
  lottointro.innerHTML = "Machine Picking Numbers...";
}

function checklottonumbers() {
  if (pickone.innerHTML == placemone.innerHTML) {
    if (picktwo.innerHTML == placemtwo.innerHTML) {
      if (pickthree.innerHTML == placemthree.innerHTML) {
        if (pickthree.innerHTML == placemthree.innerHTML) {
          if (pickthree.innerHTML == placemthree.innerHTML) {
            if (pickfour.innerHTML == placemfour.innerHTML) {
              if (pickfive.innerHTML == placemfive.innerHTML) {
                var lottoerror = document.getElementById("lottoerror");
                var fishlotto = lottoamount.value;
                var lottomath = fishlotto * 5;
                var placeearned = document.getElementById("EARNED");
                placeearned.value = lottomath;
                unlocklottoclaim();
              }
            }
          }
        }
      }
    }
  } else {
    let lottoerror = document.getElementById("lottoerror");
    lottoerror.innerHTML = "You Lost, Try Agian?" + "<br>" + "Cost: 3 Rewards.";
    lottoamountBTN.title = "Ready";
    lottoicon.className = "lottoball";
    lottoicon.innerHTML = "3";
    pickone.innerHTML = "6";
    picktwo.innerHTML = "6";
    pickthree.innerHTML = "6";
    pickfour.innerHTML = "6";
    pickfive.innerHTML = "6";
    pickone.className = "hide";
    picktwo.className = "hide";
    pickthree.className = "hide";
    pickfour.className = "hide";
    pickfive.className = "hide";
    lottopicks.className = "hide";
    lottoamountBTN.innerHTML = "Ready";
    lottoamountBTN.addEventListener("click", addlottoamount);
    lottointro.innerHTML = "How Many Numbers?";
  }
}

function lottoprizenotice() {
  var lottoerror = document.getElementById("lottoerror");
  var fishlotto = 3;
  var lottomath = fishlotto * lottoamount.value;
  lottoerror.innerHTML =
    "Cost: " + fishlotto + " Reward(s) " + "<br>" + "Prize: " + lottomath;
}

const lottoAmount = document.getElementById("lottoamount");
lottoAmount.addEventListener("click", togglelottovalue);

function togglelottovalue() {
  var lottoAMOUNT = document.getElementById("LOTTOMETER");
  var save = lottoAMOUNT.value;
  var addamount = 1;
  var totalamount = save + addamount;
  let text = (document.getElementById("lottoamount").innerHTML = totalamount);
  lottoAMOUNT.value = totalamount;
  if (lottoAMOUNT.value > 5) {
    let text = (document.getElementById("lottoamount").innerHTML = "2");
    lottoAMOUNT.value = "2";
  }
  lottoprizenotice();
}

function togglepickone() {
  var lottoAMOUNT = document.getElementById("LOTTOPICKS");
  var save = lottoAMOUNT.value;
  var addamount = 1;
  var totalamount = save + addamount;
  let text = (document.getElementById("PICKONE").innerHTML = totalamount);
  lottoAMOUNT.value = totalamount;
  if (lottoAMOUNT.value > 9) {
    let text = (document.getElementById("PICKONE").innerHTML = "1");
    lottoAMOUNT.value = "1";
  }
}

function togglepicktwo() {
  var lottoAMOUNT = document.getElementById("LOTTOPICKS");
  var save = lottoAMOUNT.value;
  var addamount = 1;
  var totalamount = save + addamount;
  let text = (document.getElementById("PICKTWO").innerHTML = totalamount);
  lottoAMOUNT.value = totalamount;
  if (lottoAMOUNT.value > 9) {
    let text = (document.getElementById("PICKTWO").innerHTML = "1");
    lottoAMOUNT.value = "1";
  }
}
function togglepickthree() {
  var lottoAMOUNT = document.getElementById("LOTTOPICKS");
  var save = lottoAMOUNT.value;
  var addamount = 1;
  var totalamount = save + addamount;
  let text = (document.getElementById("PICKTHREE").innerHTML = totalamount);
  lottoAMOUNT.value = totalamount;
  if (lottoAMOUNT.value > 9) {
    let text = (document.getElementById("PICKTHREE").innerHTML = "1");
    lottoAMOUNT.value = "1";
  }
}
function togglepickfour() {
  var lottoAMOUNT = document.getElementById("LOTTOPICKS");
  var save = lottoAMOUNT.value;
  var addamount = 1;
  var totalamount = save + addamount;
  let text = (document.getElementById("PICKFOUR").innerHTML = totalamount);
  lottoAMOUNT.value = totalamount;
  if (lottoAMOUNT.value > 9) {
    let text = (document.getElementById("PICKFOUR").innerHTML = "1");
    lottoAMOUNT.value = "1";
  }
}
function togglepickfive() {
  var lottoAMOUNT = document.getElementById("LOTTOPICKS");
  var save = lottoAMOUNT.value;
  var addamount = 1;
  var totalamount = save + addamount;
  let text = (document.getElementById("PICKFIVE").innerHTML = totalamount);
  lottoAMOUNT.value = totalamount;
  if (lottoAMOUNT.value > 9) {
    let text = (document.getElementById("PICKFIVE").innerHTML = "1");
    lottoAMOUNT.value = "1";
  }
}

//// Calims
function unlocklottoclaim() {
  lottoamountBTN.innerHTML = "You Win!";
  lottoamountBTN.addEventListener("click", startlottoClaim);
  var stashBTN = document.getElementById("lottostashBTN");
  stashBTN.addEventListener("click", stashREWARD);
  stashBTN.innerHTML = "Stash";
  stashBTN.className = "";
}

function startlottoClaim() {
  var EARNED = document.getElementById("EARNED");
  var lottoerror = document.getElementById("lottoerror");
  var mytoken = document.getElementById("myToken");

  if (dreamInput.value == "") {
    userview();
  } else {
    const data = {
      dream: dreamInput.value + " Won: " + EARNED.value + mytoken.innerHTML,
    };
    fetch("/addDream", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(JSON.stringify(response));
      });
    // get dream value and add it to the list
    dreams.push(dreamInput.value + " Won: " + EARNED.value + mytoken.innerHTML);
    appendNewDream(
      dreamInput.value + " Won: " + EARNED.value + mytoken.innerHTML
    );
    var lottostashBTN = document.getElementById("lottostashBTN");
    EARNED.value = "0";
    lottoicon.className = "lottoball";
    lottoicon.innerHTML = "3";
    pickone.innerHTML = "6";
    picktwo.innerHTML = "6";
    pickthree.innerHTML = "6";
    pickfour.innerHTML = "6";
    pickfive.innerHTML = "6";
    pickone.className = "hide";
    picktwo.className = "hide";
    pickthree.className = "hide";
    pickfour.className = "hide";
    pickfive.className = "hide";
    lottopicks.className = "hide";
    lottoamountBTN.innerHTML = "Ready";
    lottoamountBTN.addEventListener("click", addlottoamount);
    lottoerror.innerHTML = "Cost: 3 Rewards";
    lottostashBTN.className = "hide";
    reset();
    levelUp();
  }
}

function stashREWARD() {
  lottoamountBTN.removeEventListener("click", startlottoClaim);
  lottoamountBTN.addEventListener("click", addlottoamount);
  var EARNED = document.getElementById("EARNED");
  var lottorror = document.getElementById("lottoerror");
  var mytoken = document.getElementById("myToken");
  var lottostashBTN = document.getElementById("lottostashBTN");
  var stashwallet = mytoken.innerHTML + "STASH";
  var stashid = document.getElementById(stashwallet);
  var stashed = stashid.innerHTML;
  var stashedmath = EARNED.value + stashed;
  stashid.innerHTML = stashedmath;
  EARNED.value = "0";
  lottostashBTN.className = "hide";
  lottoamountBTN.innerHTML = "Ready";
}

/// Pay Module

function lottopaymode() {
  var currentrewardsM = document.getElementById("minutes");
  var currentrewards = document.getElementById("seconds");
  var mytoken = document.getElementById("myToken").innerHTML;
  var gettotal = currentrewardsM.innerHTML + "." + currentrewards.innerHTML;
  var stashwallet = mytoken + "STASH";
  var stashid = document.getElementById(stashwallet);
  var hidestack = document.getElementById("hidestack");
  var stashed = gettotal + stashid.innerHTML;
  var lottoerror = document.getElementById("lottoerror");
  if (dreamInput.value == "") {
    lottoerror.innerHTML = "No Account Found.";
  } else {
    if (stashid.innerHTML > 3) {
      var fishystash = document.getElementById("SWAPMATH");
      fishystash.value = stashid.innerHTML;
      var paypost = 3;
      var payedpost = gettotal - paypost;
      var fishytotal = payedpost + fishystash.value;
      stashid.innerHTML = fishytotal;
      fishystash.value = "0";
      lottoamountBTN.title = "Play";
      addlottoamount();
    } else {
      if (gettotal < 3) {
        var needmath = 3 - gettotal;
        lottoerror.innerHTML = "Earn +" + needmath + "Rewards.";
      } else {
        if (gettotal > 3) {
          var fishystash = document.getElementById("SWAPMATH");
          fishystash.value = stashid.innerHTML;
          var paypost = 3;
          var payedpost = gettotal - paypost;
          var fishytotal = payedpost + fishystash.value;
          stashid.innerHTML = fishytotal;
          fishystash.value = "0";
          lottoamountBTN.title = "Play";
          addlottoamount();
          reset();
        }
      }
    }
  }
}
