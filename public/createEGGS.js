function createEGGS() {
  
  if(currenteggs.innerHTML == "0"){
    currenteggs.innerHTML = numb;
  }
      let numb = dreamsList.getElementsByTagName("li").length;

  
  
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
  var logininfo = document.getElementById("login-info");

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
    newListItem.className = "hide";
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

  clearButton.addEventListener("click", (event) => {
    fetch("/clearDreams", {})
      .then((res) => res.json())
      .then((response) => {
        console.log("cleared dreams");
      });
    dreamsList.innerHTML = "";
  });
}
