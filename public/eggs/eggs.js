// client-side js
// run by the browser each time your view template referencing it is loaded

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];
const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector("#clear-dreams");
const base = document.querySelector("base");
var reward = base.title;

// request the dreams from our app's sqlite database
fetch("/getDreams", {})
  .then(res => res.json())
  .then(response => {
    response.forEach(row => {
      appendNewDream(row.dream);
    });
  });

// a helper function that creates a list item for a given dream
const appendNewDream = dream => {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
};

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = event => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  const data = { dream: dreamInput.value + "EGG Reward: " + reward };

  fetch("/addDream", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(response => {
      console.log(JSON.stringify(response));
    });
  // get dream value and add it to the list
  dreams.push(dreamInput.value + "EGG Reward: " + reward);
  appendNewDream(dreamInput.value + "EGG Reward: " + reward);

  // reset form
  dreamInput.value = "";
  dreamInput.focus();
  const claimMe = document.querySelector("claimMe");
  claimMe.style = "display: none";
  alert("Claimed!");
};

clearButton.addEventListener("click", event => {
  fetch("/clearDreams", {})
    .then(res => res.json())
    .then(response => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
});
