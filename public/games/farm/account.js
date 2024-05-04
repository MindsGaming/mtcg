var customUsername = document.getElementById("my-username");
var linkedAccount = document.getElementById("myuser-account");
var customPassword = document.getElementById("myuser-password");
var pswdAlert = document.getElementById("pswd-alert");
var createBTN = document.getElementById("create-accountBTN");
var hideGamebutton = document.getElementById("submit-dream");

let knocker = "";
function newAccount() {
  if (createBTN.title == "Create") {
    let ABCs =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*";
    let phasePswd = generateRandomPassword(18);
    function generateRandomPassword(length) {
      let password = "";
      let ABCs =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*";
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * ABCs.length);
        password += ABCs.charAt(randomIndex);
        customPassword.value = password;
        pswdAlert.innerHTML =
          "Your Password Is: " + password + " :Make Sure Not To Lose It!";
        customPassword.className = "hide";
        createBTN.title = "CREATE";
        linkedAccount.className = "display";
        hideGamebutton.className = "hide";
      }
    }
  } else {
    if (createBTN.title == "CREATE") {
      knocker = customPassword.value;
      jsSalted();
    }
  }
}

let entangle = "";
let string = "";
function jsSalted() {
  knocker.toString();
  let salt = linkedAccount.value;
  let encodeSalt = btoa(salt);
  let phaseSalt = parseFloat(encodeSalt);
  let entangle = encodeSalt.toString();
  let knockAlert = knocker.toString();
  for (let i = 0; i < phaseSalt; i++) {
    let char = knocker.charAt(i);
    phaseSalt += char + phaseSalt + knocker.charAt(i) + "‽";
    if ((i + 1) % 2 === 0) {
      phaseSalt += "‽" + phaseSalt.charAt(i) + knocker;
    }
  }
  pswdAlert.innerHTML =
    "Username:" +
    customUsername.value +
    "Account:" +
    linkedAccount.value +
    "Password:" +
    entangle;
  string = pswdAlert.innerHTML;
  string.toString();
  chekCurrentAccounts();
}

function chekCurrentAccounts() {
  // Get all list items
  let listItems = document.getElementsByTagName("li");

  // Filter out the list items that contain the word "Posted:"
  let postedListItems = Array.from(listItems).filter((item) =>
    item.textContent.includes("Account:")
  );

  // Process and display the filtered posts
  postedListItems.forEach((item, index) => {
    let postedText = item.textContent;

    // Use regular expressions to extract the title, egg, and URL from the postedText
    let regex = /Username:(.*?)Account:(.*?)Password:(.*)/;
    let match = regex.exec(postedText);

    if (match) {
      let oldUsername = match[1].trim();
      let oldAccount = match[2].trim();
      let oldPassword = match[3].trim();
      if (
        oldUsername == customUsername.value ||
        oldAccount == linkedAccount.value
      ) {
        pswdAlert.innerHTML = "Username or account already in use";
        pswdAlert.title = "Old";
        hideGamebutton.className = "hide";
      } else {
        pswdAlert.innerHTML = string;
        pswdAlert.title = "new";
        hideGamebutton.className = "display";
      }
    } else if (!match) {
      alert("No Match");
    }
  });
  setTimeout(pushNewAccount, 2000);
}

function pushNewAccount() {
  if (pswdAlert.innerHTML == string) {
    let dreamCatcher = document.getElementsByTagName("li");

    const dreamBlock = document.createElement("block");
    dreamBlock.innerHTML = pswdAlert.innerHTML;
    dreamBlock.value = string;

    const appendNewDreamss = (dream) => {
      const newListItem = document.createElement("block");
      newListItem.innerText = dreamBlock.value;
      newListItem.title = "Dream Block";
      newListItem.id = dreamBlock.id;
      newListItem.value = dreamBlock.value;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: dreamBlock.value,
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

    // Add the dream value to the list
    dreams.push(dreamBlock.value);
    appendNewDream(dreamBlock.value);
    customUsername.value = "";
    linkedAccount.value = "";
    dreamInput.value = "";
    pswdAlert.innerHTML = "Account Created";
    hideGamebutton.className = "display";
    userCHECK();
    dreamInput.focus();
    loginform.className = "hide";
    chekIncomingTransfers();
    myChain();
  } else {
    pswdAlert.innerHTML = "Account Or Username In Use";
  }
}

function myuseraccount() {
  let entangle = "";
  let string = "";
  function jsSalted() {
    knocker.toString();
    let salt = linkedAccount.value;
    let encodeSalt = btoa(salt);
    let phaseSalt = parseFloat(encodeSalt);
    let entangle = encodeSalt.toString();
    let knockAlert = knocker.toString();
    for (let i = 0; i < phaseSalt; i++) {
      let char = knocker.charAt(i);
      phaseSalt += char + phaseSalt + knocker.charAt(i) + "‽";
      if ((i + 1) % 2 === 0) {
        phaseSalt += "‽" + phaseSalt.charAt(i) + knocker;
      }
    }
    pswdAlert.innerHTML =
      "Username:" +
      customUsername.value +
      "Account:" +
      linkedAccount.value +
      "Password:" +
      entangle;
    string = pswdAlert.innerHTML;
    string.toString();
  }
  jsSalted();

  // Get all list items
  let listItems = document.getElementsByTagName("li");

  // Filter out the list items that contain the word "Posted:"
  let postedListItems = Array.from(listItems).filter((item) =>
    item.textContent.includes("Account:")
  );

  // Process and display the filtered posts
  postedListItems.forEach((item, index) => {
    let postedText = item.textContent;

    if (postedText == pswdAlert.innerHTML) {
      let dreamCatcher = document.getElementsByTagName("li");

      const dreamBlock = document.createElement("block");
      dreamBlock.innerHTML = pswdAlert.innerHTML;
      dreamBlock.value = linkedAccount.value;

      const appendNewDreamss = (dream) => {
        const newListItem = document.createElement("block");
        newListItem.innerText = dreamBlock.value;
        newListItem.title = "Dream Block";
        newListItem.id = dreamBlock.id;
        newListItem.value = dreamBlock.value;
        newListItem.className = "hide";
        dreamsList.appendChild(newListItem);
      };

      const data = {
        dream: dreamBlock.value,
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

      // Add the dream value to the list
      dreams.push(dreamBlock.value);
      appendNewDream(dreamBlock.value);
      customUsername.value = "";
      linkedAccount.value = "";
      dreamInput.value = "";
      pswdAlert.innerHTML = "Account Created";
      hideGamebutton.className = "display";
      userCHECK();
      dreamInput.focus();
      loginform.className = "hide";
      chekIncomingTransfers();
      myChain();
    } else {
      pswdAlert.innerHTML = "Account Not Located.";
    }
  });
}
