// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("hello world :o");

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];
const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector("#clear-dreams");
const accountID = document.getElementById("account-id");
const DreamChain = document.createElement("POINTS");
var removearticle = document.getElementById("fetchLogin");
var removeALL = document.getElementById("newcomer-info");
var pointsPreview = document.getElementById("points-preview");
var loginarticle = document.getElementById("LOGIN");
var minerarticle = document.getElementById("miner-info");

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
  const newListItems = document.createElement("meter");
  newListItems.innerText = parseFloat(DreamChain.value).toFixed(2); // Convert to float and round to 2 decimal places
  newListItems.min = 0;
  newListItems.max = 5;
  newListItems.value = parseFloat(DreamChain.value).toFixed(2); // Same here
  newListItems.id = dream; // Make sure 'dream' is a valid identifier
  newListItem.innerText = dream;
  accountID.innerHTML = parseFloat(dreamInput.value).toFixed(2); // Convert input value to float and round

  dreamsList.appendChild(newListItem + newListItems);
  /* DreamChain */
  function createBLOCK() {
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const fetchBlocks = dreamsList.getElementsByTagName("li");
    const rollover = document.getElementById("rollover");
    const DREAMBLOCKS = fetchBlocks.length;
    const customBlock = getRandomInteger(DREAMBLOCKS, 9);
    const newBLOCKS = `${DREAMBLOCKS}.${customBlock}`;
    rollover.innerHTML = customBlock;
    DreamChain.value = newBLOCKS;
    DreamChain.min = "0";
    DreamChain.max = "1000";
    pointsPreview.innerHTML = newBLOCKS;

    if (rollover.innerHTML === "9") {
      const boostBlock = `${newBLOCKS}.1`;
      pointsPreview.innerHTML = boostBlock;
    }
  }

  createBLOCK();
};

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = (event) => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  const data = {
    dream: dreamInput.value + " Block Created: " + pointsPreview.innerHTML,
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
  removeALL.className = "hide";
  minerarticle.className = "wallet-article";
  dreamInput.value = "";
  dreamInput.focus();
};

clearButton.addEventListener("click", (event) => {
  fetch("/clearDreams", {})
    .then((res) => res.json())
    .then((response) => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
});

/* Wallet */
function fetchLogin() {
  if (loginarticle.className == "hide") {
    loginarticle.className = "form";
    removearticle.className = "hide";
  } else {
    if (loginarticle.classNam == "form") {
      loginarticle.className = "hide";
      removearticle.className = "form";
    }
  }
}
