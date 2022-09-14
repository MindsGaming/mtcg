const secondsLabel = document.getElementById("seconds");
const minutesLabel = document.getElementById("minutes");
var totalSeconds = 0;
setInterval(setTime, 6000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

  var levelups = document.getElementById("levelUp");
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];
const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector("#clear-dreams");
var myWallet = document.getElementById("myWallet");

// request the dreams from our app's sqlite database
fetch("/getDreams", {})
  .then((res) => res.json())
  .then((response) => {
    response.forEach((row) => {
      appendNewDream(row.dream);
    });
  });

// a helper function that creates a list item for a given dream
const appendNewDream = (dream) => {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
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
  dreams.push(dreamInput.value + " :Loged In");
  appendNewDream(dreamInput.value + " :Loged In");

  // reset form
  myWallet.id = dreamInput.value;
  myWallet.innerHTML = dreamInput.value;
  myWallet.title = dreamInput.value;
  alert("DONE");
};

clearButton.addEventListener("click", (event) => {
  fetch("/clearDreams", {})
    .then((res) => res.json())
    .then((response) => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
});
