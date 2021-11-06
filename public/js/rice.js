function LOTTO() {
  // client-side js
  // run by the browser each time your view template referencing it is loaded

  console.log("hello world :o");

  const dreams = [];

  // LOTTO
  var lotto = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const Lotto = "0";
  var Lotto2 = "x";
  const Lotto3 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto4 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto5 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto6 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto7 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto8 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto9 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto10 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto11 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto12 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto13 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto14 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto15 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto16 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto17 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto18 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto19 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto20 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto21 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto22 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto23 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto24 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto25 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto26 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto27 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto28 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto29 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto30 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto31 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto32 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto33 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto34 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto35 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto36 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto37 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto38 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto39 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto40 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto41 = lotto[Math.floor(Math.random() * lotto.length)];
  const Lotto42 = lotto[Math.floor(Math.random() * lotto.length)];

  const superLotto =
    Lotto +
    Lotto2 +
    Lotto3 +
    Lotto4 +
    Lotto5 +
    Lotto6 +
    Lotto7 +
    Lotto8 +
    Lotto9 +
    Lotto10 +
    Lotto11 +
    Lotto12 +
    Lotto13 +
    Lotto14 +
    Lotto15 +
    Lotto16 +
    Lotto17 +
    Lotto18 +
    Lotto19 +
    Lotto20 +
    Lotto21 +
    Lotto22 +
    Lotto23 +
    Lotto24 +
    Lotto25 +
    Lotto26 +
    Lotto27 +
    Lotto28 +
    Lotto29 +
    Lotto30 +
    Lotto31 +
    Lotto32 +
    Lotto33 +
    Lotto34 +
    Lotto35 +
    Lotto36 +
    Lotto37 +
    Lotto38 +
    Lotto39 +
    Lotto40 +
    Lotto41 +
    Lotto42;

  // define variables that reference elements on our page
  const dreamsForm = document.forms[0];
  const dreamInput = dreamsForm.elements["dream"];
  const dreamsList = document.getElementById("dreams");
  const clearButton = document.querySelector("#clear-dreams");

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
    newListItem.id = superLotto;
    dreamsList.appendChild(newListItem);
    if (newListItem.id == newListItem.innerText) {
      alert("You Won A Secret Drawling Take A ScreenShot Of This!");
    }
  };

  // listen for the form to be submitted and add a new dream when it is
  dreamsForm.onsubmit = event => {
    // stop our form submission from refreshing the page
    event.preventDefault();

    const data = { dream: dreamInput.value };

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
    appendNewDream(dreamInput.value);

    // reset form
    dreamInput.value = "";
    dreamInput.focus();
  };

  clearButton.addEventListener("click", event => {
    fetch("/clearDreams", {})
      .then(res => res.json())
      .then(response => {
        console.log("cleared dreams");
      });
    dreamsList.innerHTML = "";
  });

  // listen for the form to be submitted and add a new dream when it is
  dreamsForm.onsubmit = event => {
    // stop our form submission from refreshing the page
    event.preventDefault();

    const data = { dream: dreamInput.value };

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
    appendNewDream(dreamInput.value);

    // reset form
    dreamInput.focus();
  };

  clearButton.addEventListener("click", event => {
    fetch("/clearDreams", {})
      .then(res => res.json())
      .then(response => {
        console.log("cleared dreams");
      });
  });
}
