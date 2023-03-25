const chatBTN = document.getElementById("commentBTN");
chatBTN.addEventListener("click", startCHAT);
const chatBOX = document.getElementById("CHATBOX");
const chaterror = document.getElementById("chaterror");
chaterror.addEventListener("click", claimstashREWARDS);

chatBOX.onkeydown = function (e) {
  if (e.keyCode == 13) {
    startCHAT();
  }
};

function startCHAT() {
  var currentrewardsM = document.getElementById("minutes");
  var currentrewards = document.getElementById("seconds");
  var mytoken = document.getElementById("myToken").innerHTML;
  var gettotal = currentrewardsM.innerHTML + "." + currentrewards.innerHTML;
  var stashwallet = mytoken + "STASH";
  var stashid = document.getElementById(stashwallet);
  var hidestack = document.getElementById("hidestack");
  var stashed = gettotal + stashid.innerHTML;

  if (dreamInput.value == "") {
    chatBOX.value = "";
    chatBOX.focus;
    chaterror.innerHTML = "No Account Found.";
    chatBOX.placeholder = "No Account Found.";
  } else {
    if (chatBOX.value == "") {
      chatBOX.value = "";
      chatBOX.focus;
      chaterror.innerHTML = "Write Something To Comment.";
      chatBOX.placeholder = "Write Something To Comment.";
    } else {
      if (stashid.innerHTML > 1) {
        var paypost = 1;
        var payedpost = stashid.innerHTML - paypost;
        stashid.innerHTML = payedpost;

        const data = {
          dream: dreamInput.value + " Commented: " + chatBOX.value,
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
        dreams.push(dreamInput.value + " Commented: " + chatBOX.value);
        appendNewDream(dreamInput.value + " Commented: " + chatBOX.value);
        chatBOX.value = "";
        chatBOX.placeholder = "1 Reward Token";
        chaterror.innerHTML = "1Reward Needed.";
        hidestack.style =
          "display: block; cursor:pointer; color:gold; opacity.6;";
      } else {
        if (gettotal < 1) {
          var needmath = 1 - gettotal;
          chaterror.innerHTML = "Earn +" + needmath + "Rewards.";
          chatBOX.placeholder = "Earn +" + needmath + "Rewards.";
          chaterror.title = "Earn +" + needmath + "Rewards.";
        } else {
          if (gettotal > 1) {
            var fishystash = document.getElementById("SWAPMATH");
            fishystash.value = stashid.innerHTML;
            var paypost = 1;
            var payedpost = gettotal - paypost;
            var fishytotal = payedpost + fishystash.value;
            stashid.innerHTML = fishytotal;
            fishystash.value = "0";

            const data = {
              dream: dreamInput.value + " Commented: " + chatBOX.value,
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
            dreams.push(dreamInput.value + " Commented: " + chatBOX.value);
            appendNewDream(dreamInput.value + " Commented: " + chatBOX.value);
            reset();
            chatBOX.value = "";
            chatBOX.placeholder = "1 Reward Token";
            chaterror.innerHTML = "1Reward Needed.";
            hidestack.style =
              "display: block; cursor:pointer; color:gold; opacity.6;";
          }
        }
      }
    }
  }
}

/// Stash Reward

function claimstashREWARDS() {
  var mytoken = document.getElementById("myToken").innerHTML;

  var stashwallet = mytoken + "STASH";
  var stashid = document.getElementById(stashwallet);
  var getstash = document.getElementById(stashwallet);

  if (getstash.innerHTML > 1) {
    var REWARDS = getstash.innerHTML;
    levelUp();

    const data = {
      dream:
        dreamInput.value + " Used Stash: " + REWARDS + dreamToken.innerHTML,
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
      dreamInput.value + " Used Stash: " + REWARDS + dreamToken.innerHTML
    );
    appendNewDream(
      dreamInput.value + " Used Stash: " + REWARDS + dreamToken.innerHTML
    );

    reset();
    getstash.innerHTML = "0";
  } else {
    alert("1 Reward Required," + " Using " + mytoken);
  }
}

/// Date

const getdate = new Date();
const todaysDate = document.getElementById("todaysDate");
todaysDate.innerHTML = getdate;

if (todaysDate.innerHTML == getdate) {
  let text = document.getElementById("todaysDate").innerHTML;
  document.getElementById("todaysDate").innerHTML = text.replace(
    "GMT-0400 (Eastern Daylight Time)",
    ""
  );
}
