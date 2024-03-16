function createEGGS() {
  const dreams = [];

  // define variables that reference elements on our page
  const dreamsForm = document.forms[0];
  const dreamInput = dreamsForm.elements["dream"];
  const dreamsList = document.getElementById("dreams");
  const clearButton = document.querySelector("#clear-dreams");

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
    newListItem.title = "DreamEGG";
    newListItem.id = numb;
    newListItem.value = randomWarp;
    newListItem.className = "hide";
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
    dreamInput.value = "";
    dreamInput.focus();
  };
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
  window.open("/#ready-up", "_self");
}

function greatJOB() {
  var greatJob = document.getElementById("great-job");
  greatJob.className = "game-article";
}
