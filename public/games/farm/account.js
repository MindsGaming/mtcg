function createAccount() {
  let myAccount = dreamInput.value;
  let myPSWD = document.getElementById("account-pswd");

  let knocker = "";
  let entangle = "";

  function jsSalted() {
    knocker = myPSWD.value;
    knocker.toString();
    let salt = myAccount;
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
    knocker = entangle.toString();
  }
  jsSalted();

  const data = { dream: "Account:" + myAccount + "Password:" + knocker };

  fetch("/addDream", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(JSON.stringify(response));
    });

  myPSWD.value = "";
  myAccount = "";
  myAccount.focus();
}

function checkAccounts() {
  let mylist = document.getElementById("ul");
  let listcount = document.getElementsByTagName("li");
  let numb = listcount.length;
  let userAccountContent = document.getElementById("account-pswd");
  let myAccount = dreamInput.value;

  let knocker = "";
  let entangle = "";
  let targetWords = [knocker];

  function jsSalted() {
    knocker = userAccountContent.value;
    knocker.toString();
    let salt = myAccount;
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
    knocker = entangle.toString();
  }
  jsSalted();

  let calc = "";

  for (let j = 0; j < targetWords.length; j++) {
    let concatenatedString =
      "Account:" + myAccount.value + "Password:" + targetWords[j];
    for (let i = 0; i < listcount.length; i++) {
      let listItemText = listcount[i].textContent;
      if (listItemText.includes(concatenatedString)) {
        let newAlert = listItemText.replace("", "");
        let tack = parseFloat(newAlert);

        let solidString = "Account:" + myAccount.value + "Password:" + knocker;

        if (solidString == newAlert) {
          chatMode();
          userCHECK();
          dreamInput.value = "";
          dreamInput.focus();
          loginform.className = "hide";
          chekIncomingTransfers();
          myChain();
        }
      }
      if (!listItemText) {
        btnTime();
        let userAlert = document.getElementById("userAlert");
        userAlert.innerHTML = "No Account Found, Please Create An Account.";
        userAccountContent.value = "";
      }
    }
  }
}

function btnTime() {
  let showBTN = document.getElementById("create-accountBTN");

  if (showBTN.className == "hide") {
    showBTN.className = "display";
  } else {
    if (showBTN.className == "display") {
      showBTN.className = "hide";
    }
  }
}
