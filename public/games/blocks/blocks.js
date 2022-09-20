function buildBlock() {
  const dreamsLists = document.getElementById("hold-blocks");
  const blocks = document.getElementById("BLOCKS");
  const build = document.getElementById("build-blocks");
  build.className = "block";
  const boost = 1;
  const math = blocks.value + boost;
  var spoofblocks = document.getElementById("BLOCKS");
  spoofblocks.value = math;

  fetch("/getDreams", {})
    .then((res) => res.json())
    .then((response) => {
      response.forEach((row) => {
        appendNewDream(row.dream);
      });
    });

  // a helper function that creates a list item for a given dream
  const appendNewDream = (dream) => {
    const newListItems = document.createElement("li");
    newListItems.innerText = dream;
    newListItems.id = math;
    newListItems.className = "hide";
    newListItems.onclick = "test();";
    dreamsLists.appendChild(newListItems);
  };

  // listen for the form to be submitted and add a new dream when it is
  dreamsForm.onsubmit = (event) => {
    // stop our form submission from refreshing the page
    event.preventDefault();

    const data = {
      dream: dreamInput.value + "OWNS " + math,
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
  };

  clearButton.addEventListener("click", (event) => {
    fetch("/clearDreams", {})
      .then((res) => res.json())
      .then((response) => {
        console.log("cleared dreams");
      });
  });
}

function buyBlock() {
  if (dreamInput.value == "") {
    alert("LOGIN");
  }
}
