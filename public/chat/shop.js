/// CREATORS

const creatorONE = "0xeE9f5aB4faeCBe30012f675Bb938031BC51bB49B";

// ITEMS

const storeitemONE = document.getElementById("storeitemONE");
const storeitemTWO = document.getElementById("storeitemTWO");
const storeitemTHREE = document.getElementById("storeitemTHREE");
const storeitemFOUR = document.getElementById("storeitemFOUR");
const storeitemFIVE = document.getElementById("storeitemFIVE");
const storeitemSIX = document.getElementById("storeitemSIX");
const storeitemSEVEN = document.getElementById("storeitemSEVEN");
const storeitemEIGHT = document.getElementById("storeitemEIGHT");
const storeitemNINE = document.getElementById("storeitemNINE");
const storeitemTEN = document.getElementById("storeitemTEN");

// PRICE

/// STORE
function tipstoreitemONE() {
  var currentrewardsM = document.getElementById("minutes");
  var currentrewards = document.getElementById("seconds");
  var mytoken = document.getElementById("myToken").innerHTML;
  var gettotal = currentrewardsM.innerHTML + "." + currentrewards.innerHTML;
  var stashwallet = mytoken + "STASH";
  var stashid = document.getElementById(stashwallet);
  var hidestack = document.getElementById("hidestack");
  var stashed = gettotal + stashid.innerHTML;
  var chaterror = document.getElementById("chaterror");
  var chatBOX = document.getElementById("storeitemONECHAT");
  var tipAMOUNT = document.getElementById("storePRICE").innerHTML;
  var storeitemNAME = document.getElementById("storeitemNAME");

  if (dreamInput.value == "") {
    chatBOX.value = "";
    chatBOX.focus;
    chaterror.innerHTML = "No Account Found.";
    chatBOX.placeholder = "No Account Found.";
  } else {
    if (chatBOX.value == "jhfjairjfooriuugjjiirau8r7231974*&#Uy") {
      chatBOX.value = "";
      chatBOX.focus;
      chaterror.innerHTML = "Write Something To Comment.";
      chatBOX.placeholder = "Write Something To Comment.";
    } else {
      if (stashid.innerHTML > tipAMOUNT) {
        var paypost = tipAMOUNT;
        var payedpost = stashid.innerHTML - paypost;
        stashid.innerHTML = payedpost;

        const data = {
          dream:
            dreamInput.value +
            " Tipped: " +
            creatorONE +
            " " +
            tipAMOUNT +
            ".00" +
            mytoken +
            " On " +
            storeitemNAME.innerHTML +
            " Commenting: " +
            chatBOX.value,
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
        dreams.push(
          dreamInput.value +
            " Tipped: " +
            creatorONE +
            " " +
            tipAMOUNT +
            ".00" +
            mytoken +
            " On " +
            storeitemNAME.innerHTML +
            " Commenting: " +
            chatBOX.value
        );
        appendNewDream(
          dreamInput.value +
            " Tipped: " +
            creatorONE +
            " " +
            tipAMOUNT +
            ".00" +
            mytoken +
            " On " +
            storeitemNAME.innerHTML +
            " Commenting:" +
            chatBOX.value
        );
        chatBOX.value = "";
        chatBOX.placeholder = "1 Reward Token";
        chaterror.innerHTML = "1Reward Needed.";
        hidestack.style =
          "display: block; cursor:pointer; color:gold; opacity.6;";
        storeitemONE.className = "hide";
      } else {
        if (gettotal < tipAMOUNT) {
          var needmath = tipAMOUNT - gettotal;
          chaterror.innerHTML = "Earn +" + needmath + "Rewards.";
          chatBOX.placeholder = "Earn +" + needmath + "Rewards.";
          chaterror.title = "Earn +" + needmath + "Rewards.";
        }
        if (gettotal > tipAMOUNT) {
          var mytoken = document.getElementById("myToken").innerHTML;
          var stashwallet = mytoken + "STASH";
          var stashid = document.getElementById(stashwallet);
          var paypost = tipAMOUNT;
          var payedpost = gettotal - paypost;
          stashid.innerHTML = payedpost;

          const data = {
            dream:
              dreamInput.value +
              " Tipped: " +
              creatorONE +
              " " +
              tipAMOUNT +
              ".00" +
              mytoken +
              " On " +
              storeitemNAME.innerHTML +
              " Commenting:" +
              chatBOX.value,
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
          dreams.push(
            dreamInput.value +
              " Tipped: " +
              creatorONE +
              " " +
              tipAMOUNT +
              ".00" +
              mytoken +
              " On " +
              storeitemNAME.innerHTML +
              " Commenting: " +
              chatBOX.value
          );
          appendNewDream(
            dreamInput.value +
              " Tipped: " +
              creatorONE +
              " " +
              tipAMOUNT +
              ".00" +
              mytoken +
              " On " +
              storeitemNAME.innerHTML +
              " Commenting: " +
              chatBOX.value
          );
          reset();
          chatBOX.value = "";
          chatBOX.placeholder = "1 Reward Token";
          chaterror.innerHTML = "1Reward Needed.";
          hidestack.style =
            "display: block; cursor:pointer; color:gold; opacity.6;";
          storeitemONE.className = "hide";
        }
      }
    }
  }
}

/// Value Toggle

function togglevalue() {
  let tipAMOUNT = document.getElementById("storePRICEMETER");
  var addTIP = 1;
  var totalTIP = tipAMOUNT.value + addTIP;
  document.getElementById("storePRICE").innerHTML = "0" + totalTIP;
  tipAMOUNT.value = totalTIP;

  if (totalTIP > 9) {
    tipAMOUNT.value = 1;
    document.getElementById("storePRICE").innerHTML = "01";
  }
}
