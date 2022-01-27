// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("hello #MindsGaming :)");

const chat = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["something"];
const userInput = dreamsForm.elements["username"];
const dreamsList = document.getElementById("chat");
const clearButton = document.querySelector("#clear-dreams");

// request the dreams from our app's sqlite database
fetch("/getChat", {})
  .then((res) => res.json())
  .then((response) => {
    response.forEach((row) => {
      appendNewDream(row.dream);
    });
  });

// a helper function that creates a list item for a given dream
const appendNewDream = (dream) => {
  const newListItem = document.createElement("p");
  newListItem.innerText = dream;
  newListItem.id = dream;
  newListItem.className = "something";
  dreamsList.appendChild(newListItem);
};

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = (event) => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  const data = { dream: userInput.value + dreamInput.value };

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
  chat.push(userInput.value + dreamInput.value);
  appendNewDream(userInput.value + dreamInput.value);

  // reset form
  var pound = "/#" + dreamInput.value;
  dreamInput.value = "";
  dreamInput.focus();
  userInput.value = "";
  dreamInput.value = "";
  window.open(pound, "_self");
};

clearButton.addEventListener("click", (event) => {
  fetch("/clearDreams", {})
    .then((res) => res.json())
    .then((response) => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
});

var loc = window.location.href + "";
if (loc.indexOf("http://") == 0) {
  window.location.href = loc.replace("http://", "https://");
}
