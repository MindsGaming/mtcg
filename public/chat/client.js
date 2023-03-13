// run by the browser each time your view template referencing it is loaded

console.log("hello world :o");

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements["dream"];
const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector("#clear-dreams");
const myUSER = document.getElementById("myUSER");

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
  const newListItem = document.createElement("a");
  newListItem.className = "POST";
  newListItem.innerText = dream;
  newListItem.href = "/chat";

  var totalposts = document.getElementById("totalPOSTS");
  var addpost = 1;
  var currentposts = totalposts.value;
  var gettotalposts = totalposts.value + addpost;
  totalposts.value = gettotalposts;
  newListItem.id = gettotalposts;

  var last = document.getElementById("last");
  last.className = "POST";
  last.innerHTML = "";
  if (last.title < gettotalposts) {
    last.innerHTML = dream;
  }

  dreamsList.appendChild(newListItem);
};

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = (event) => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  if (ethereum.selectedAddress == null) {
    var POP = document.getElementById("connect");
    POP.className = "POP";
    POP.innerHTML = "Click To Connect Blockchain";
  } else {
    myUSER.innerHTML = ethereum.selectedAddress;

    const data = {
      dream: myUSER.innerHTML + " Said: " + dreamInput.value,
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
    dreams.push(myUSER.innerHTML + " Said:" + dreamInput.value);
    appendNewDream(myUSER.innerHTML + " Said: " + dreamInput.value);

    // reset form
    dreamInput.value = "";
    dreamInput.focus();
    closePOP();
  }

  clearButton.addEventListener("click", (event) => {
    fetch("/clearDreams", {})
      .then((res) => res.json())
      .then((response) => {
        console.log("cleared dreams");
      });
    dreamsList.innerHTML = "";

    var lastpost = document.getElementById("last");
    lastpost.className = "new";
    lastpost.innerHTML = "Create  A Post";
  });
};

function GOHOME() {
  window.open("/", "_self");
}
