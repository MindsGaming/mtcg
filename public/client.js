// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("hello world :o");

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];
const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector("#clear-dreams");
const currentUser = document.getElementById("current-user");
const POINTS = document.getElementById("hatched-points");
const currenteggs = document.getElementById("current-eggs");
const hatchedeggs = document.getElementById("hatched-eggs");
const userAccount = document.getElementById("user-account");
const loginform = document.getElementById("login-form");

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
  let numb = dreamsList.getElementsByTagName("li").length;
  let randomWarp = Math.floor(Math.random() * numb) + 1;
  newListItem.innerText = dream;
  newListItem.title = "DreamEGG";
  newListItem.id = numb;
  newListItem.value = randomWarp;
  newListItem.className = "hide";
  loginform.className = "hide";
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
  fetchLOGIN();
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

function currentEGGS() {
  let numb = dreamsList.getElementsByTagName("li").length;
  let randomWarp = Math.floor(Math.random() * numb) + 1;
  currenteggs.innerHTML = numb;
}

function fetchLOGIN() {
  if (userAccount.innerHTML == "LOGIN") {
  } else {
    userAccount.innerHTML = dreamInput.value;
    userAccount.style = "font-size: 10px; text-align: left; float:right;";
    greatJOB();
  }
}

function hatchEGG() {
  if (currenteggs.innerHTML == 0) {
  } else {
    // Calculate the total points after hatching
    let numb = dreamsList.getElementsByTagName("li").length;
    let randomWarp = Math.floor(Math.random() * numb);
    let foundEgg = document.getElementById(randomWarp);
    let hatchedPOINTS = parseFloat(foundEgg.value);
    let currentPOINTS = parseFloat(POINTS.innerHTML);
    let EGGmath = currentPOINTS + hatchedPOINTS;
    POINTS.innerHTML = EGGmath;

    // Update the cracked egg count
    let craked = parseFloat(hatchedeggs.innerHTML);
    let goodegg = 1;
    let crakedegg = goodegg + craked;
    hatchedeggs.innerHTML = crakedegg;

    // Calculate the adjusted cooked egg count
    let cooked = parseFloat(currenteggs.innerHTML) - 1;
    currenteggs.innerHTML = cooked;

    if (crakedegg > cooked) {
      currenteggs.innerHTML = "0";
    }
  }
}

function fetchLogin() {
  var currentarticle = document.getElementById("login-info");
  var readyUp = document.getElementById("ready-up");
  currentarticle.className = "hide";
  readyUp.className = "hide";
  loginform.className = "login-form";
}

function fetchGameabout() {
  var gameHome = document.getElementById("game-home");
  var readyUp = document.getElementById("ready-up");
  readyUp.className = "game-article";
}

function greatJOB() {
  var greatJob = document.getElementById("great-job");
  greatJob.className = "game-article";
}
