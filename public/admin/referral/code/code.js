// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("hello world :o");

function check() {
  const dreams = [];

  // define variables that reference elements on our page
  const dreamsForm = document.forms[0];
  const dreamInput = dreamsForm.elements["dream"];
  const dreamsList = document.getElementById("dreams");
  const clearButton = document.querySelector("#clear-dreams");
  const dreamCode = dreamsForm.elements["code"];
  const dreamUser = dreamsForm.elements["username"];

  if ((dreamCode.value = dreamCode.value)) {
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
      newListItem.id = dreamCode.value;
      newListItem.title = dreamInput.value;
      newListItem.name = dreamUser.value;
      dreamsList.appendChild(newListItem);
    };

    // listen for the form to be submitted and add a new dream when it is
    dreamsForm.onsubmit = event => {
      // stop our form submission from refreshing the page
      event.preventDefault();

      const data = {
        dream: dreamInput.value + "-" + dreamCode.value + dreamUser.value
      };

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
      dreams.push(dreamInput.value);
      appendNewDream(
        dreamInput.value + "-" + dreamCode.value + dreamUser.value
      );

      window.open("/closed/code.html", "_self");

      // reset form
      dreamInput.value = "";
      dreamInput.focus();
      dreamCode.value = "";
      dreamCode.focus();
      dreamUser.value = "";
      dreamUser.focus();
    };

    clearButton.addEventListener("click", event => {
      fetch("/clearDreams", {})
        .then(res => res.json())
        .then(response => {
          console.log("cleared dreams");
        });
      dreamsList.innerHTML = "";
    });
  } else {
    alert("This Is Not A Valid Code");
  }
}

function enterCode() {
  var a = document.getElementById("enterCode");
  a.classList.toggle("hide");
  var b = document.getElementById("requestCode");
  b.classList.toggle("hide");
  var x = document.getElementById("referral");
  x.classList.toggle("show");
  var PICK = document.getElementById("pick");
  const pick = document.createElement("iframe");
  pick.src = "/code";
  pick.className = "iframe";
  pick.id = "Enter";
  PICK.appendChild(pick);
}

function requestCode() {
  var a = document.getElementById("enterCode");
  a.classList.toggle("hide");
  var b = document.getElementById("requestCode");
  b.classList.toggle("hide");
  var x = document.getElementById("referral");
  x.classList.toggle("show");
  var PICK = document.getElementById("pick");
  const pick = document.createElement("iframe");
  pick.src = "/request";
  pick.className = "iframe";
  pick.id = "Request";
  PICK.appendChild(pick);
}
