function buildBlock() {
  const dreamsLists = document.getElementById("");
  const build = document.getElementById("build-blocks");
  build.className = "block";
  
  if ()
  
  

  fetch("/getDreams", {})
    .then((res) => res.json())
    .then((response) => {
      response.forEach((row) => {
        appendNewDream(row.dream);
      });
    });

  // a helper function that creates a list item for a given dream
  const appendNewDream = (dream) => {
    const newListItems = document.createElement("li");
    newListItems.innerText = dream;
    newListItems.id = dreamInput.value;
    newListItems.className = "hide";
    dreamsLists.appendChild(newListItem);
  };

  // listen for the form to be submitted and add a new dream when it is
  dreamsForm.onsubmit = (event) => {
    // stop our form submission from refreshing the page
    event.preventDefault();

    const data = {
      dream: dreamInput.value,
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
    dreams.push(dreamInput.value);
    appendNewDream(dreamInput.value);

    // reset form
    var loginform = document.getElementById("login-form");
    var walletlinks = document.getElementById("wallet-links");
    myWallet.innerHTML = dreamInput.value;
    loginform.className = "hide";
    walletlinks.className = "display";
    selectToken();
  };

  clearButton.addEventListener("click", (event) => {
    fetch("/clearDreams", {})
      .then((res) => res.json())
      .then((response) => {
        console.log("cleared dreams");
      });
  });
}

// Claim

function claimUpdate() {
  if (dreamInput.value == "") {
    alert("Login To Earn Rewards");
  } else {
    if (minutesLabel.innerHTML == "00") {
      alert("You Need A Full Token To Claim Rewards");
    } else {
      var REWARDS = minutesLabel.innerHTML + "." + secondsLabel.innerHTML;

      const data = {
        dream: dreamInput.value + " " + dreamToken.innerHTML + ":" + REWARDS,
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
        dreamInput.value + "  " + dreamToken.innerHTML + ":" + REWARDS
      );
      appendNewDream(
        dreamInput.value + "  " + dreamToken.innerHTML + ":" + REWARDS
      );

      reset();
      levelUp();
    }
  }
}

function reset() {
  var zero = "00";
  document.getElementById("minutes").innerHTML = zero;
  document.getElementById("seconds").innerHTML = zero;
  totalSeconds = "0";
}
