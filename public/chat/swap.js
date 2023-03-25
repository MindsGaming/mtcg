const swapBTN = document.getElementById("swapBTN");

function swaping() {
  var mytoken = document.getElementById("myToken");
  var swapone = document.getElementById("swapONE");
  var swaptwo = document.getElementById("swapTWO");
  var swapmap = document.getElementById("swapmap");
  swapmap.className = "swapmap";
  swapone.innerHTML = mytoken.innerHTML;

  if (swaptwo.innerHTML == "DarkMark") {
    swaptwo.innerHTML = "DragonToken";
  } else {
    if (swaptwo.innerHTML == "DragonToken") {
      swaptwo.innerHTML = "Candys";
    } else {
      if (swaptwo.innerHTML == "Candys") {
        swaptwo.innerHTML = "PINN";
      } else {
        if (swaptwo.innerHTML == "PINN") {
          swaptwo.innerHTML = "withinthevacuum";
        } else {
          if (swaptwo.innerHTML == "withinthevacuum") {
            swaptwo.innerHTML = "ECLIPSE";
          } else {
            if (swaptwo.innerHTML == "ECLIPSE") {
              swaptwo.innerHTML = "DooBetter";
            } else {
              if (swaptwo.innerHTML == "DooBetter") {
                swaptwo.innerHTML = "GTPC";
              } else {
                if (swaptwo.innerHTML == "GTPC") {
                  swaptwo.innerHTML = "GAMER";
                } else {
                  if (swaptwo.innerHTML == "GAMER") {
                    swaptwo.innerHTML = "DarkMark";
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  swapBTN.innerHTML = "Swap Ready!";
}

function swapready() {
  var mytoken = document.getElementById("myToken");
  var swapone = document.getElementById("swapONE");
  var swaptwo = document.getElementById("swapTWO");
  var swapmap = document.getElementById("swapmap");
  var swaperror = document.getElementById("swaperror");
  var currentrewardsM = document.getElementById("minutes");
  var currentrewards = document.getElementById("seconds");
  var gettotal = currentrewardsM.innerHTML + "." + currentrewards.innerHTML;
  var stashwallet = swapone.innerHTML + "STASH";
  var swapwallet = swaptwo.innerHTML + "STASH";
  var stashid = document.getElementById(stashwallet);
  var stashswap = document.getElementById(swapwallet);
  var SWAPMATH = document.getElementById("SWAPMATH");
  SWAPMATH.value = stashswap.innerHTML;
  var SWAPMATHTWO = document.getElementById("SWAPMATHTWO");

  if (swapone.innerHTML == swaptwo.innerHTML) {
    swaping();
  } else {
    swapone.innerHTML = mytoken.innerHTML;
    if (swapone.innerHTML == swaptwo.innerHTML) {
      swaperror.innerHTML = "Can't Swap The Same Reward.";
    } else {
      if (stashid.innerHTML > 1) {
        var payswap = 1;
        var fishswap = SWAPMATH.value;
        var payedswap = gettotal - payswap;
        SWAPMATHTWO.value = payedswap;
        var fishtotal = fishswap + SWAPMATHTWO.value;
        stashid.innerHTML = gettotal;
        stashswap.innerHTML = fishtotal;
        reset();
      } else {
        if (gettotal < 1) {
          var needmath = 1 - gettotal;
          swaperror.innerHTML = "Earn +" + needmath + "Rewards.";
        } else {
          if (gettotal > 1) {
            var mytoken = document.getElementById("myToken").innerHTML;
            var stashwallet = mytoken + "STASH";
            var stashid = document.getElementById(stashwallet);
            var payswap = 1;
            var fishswap = SWAPMATH.value;
            var payedswap = gettotal - payswap;
            SWAPMATHTWO.value = payedswap;
            var fishtotal = fishswap + SWAPMATHTWO.value;
            stashid.innerHTML = "0";
            stashswap.innerHTML = fishtotal;
            reset();
          }
        }
      }
    }
  }
}
