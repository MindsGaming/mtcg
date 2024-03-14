// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("hello world :o");

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];
const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector("#clear-dreams");
const currentBLOCKS = document.getElementById("currentBLOCKS");
const POINTS = document.getElementById("POINTS");
const userAccount = document.getElementById("user-account");
var userAlert = document.getElementById("userAlert");
var minerBTN = document.getElementById("minerBTN");

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
  let currentBlocks = dreamsList.getElementsByTagName("li");
  let numb = currentBlocks.length;
  let randomWarp = Math.floor(Math.random() * 5) + numb;
  currentBLOCKS.innerHTML = numb;
  newListItem.innerText = dream;
  newListItem.title = "DreamBlock";
  newListItem.id = numb;
  newListItem.value = randomWarp;
  userAlert.title = "";
  newListItem.addEventListener("click", miner);

  dreamsList.appendChild(newListItem);
};

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = (event) => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  const data = { dream: dreamInput.value };

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
  userAccount.innerHTML = dreamInput.value;
  minerBTN.className = "account-list";
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

function createBlock() {
  let currentBlocks = dreamsList.getElementsByTagName("li");
  let numb = currentBlocks.length;
  currentBLOCKS.innerHTML = numb;
  userAlert.title = "";
}

function miner() {
  /* Mine Block*/

  let currentBlocks = dreamsList.getElementsByTagName("li");
  let numb = currentBlocks.length;
  let warp = Math.floor(Math.random() * numb);
  var mineBLOCK = document.getElementById(warp);
  let pushmined = parseFloat(document.getElementById("minedBLOCKS").innerHTML);
  let pushvalue = parseFloat(mineBLOCK.value);
  let math = pushmined + pushvalue;
  var minedBLOCKS = document.getElementById("minedBLOCKS");
  minedBLOCKS.innerHTML = math;
  if (math > currentBLOCKS.innerHTML) {
    minerBTN.className = "hide";
    minedBLOCKS.innerHTML = currentBLOCKS.innerHTML;
  }

  /* Pull Points*/
  let minedPOINTS = mineBLOCK.value;
  let currentPOINTS = parseInt(POINTS.innerHTML);
  let pointsmath = minedPOINTS + currentPOINTS;
  POINTS.innerHTML = pointsmath;
}

function loginNote() {
  var fetchLogin = document.getElementById("login-form");
  var fetchNote = document.getElementById("login-note");
  fetchNote.innerHTML = fetchLogin.innerHTML;
}
