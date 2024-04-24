let mychain = "";
let activeMiner = "";

function startMine() {
  const mining = document.getElementById("startMine");
  const userAccount = document.getElementById("user-account");
  const userAlert = document.getElementById("userAlert");
  if (userAccount.innerHTML == "Login") {
    userAlert.innerHTML = "You Need To Login";
  } else {
    if (mining.innerHTML == "Start") {
      mining.innerHTML = "Stop";
      activeMiner = "Yes";
      setTimeout(dwmwChain(), 3000);
      setTimeout(requestMine(), 5000);
      userAlert.innerHTML = "";
    } else {
      if (mining.innerHTML == "Stop") {
        activeMiner = "No";
        mining.innerHTML = "Start";
      }
    }
  }
}

function dwmwChain() {
  let chainLink = dreamsList.getElementsByTagName("li").length;
  let chainLength = chainLink;
  let chainLock = 10000;
  let chainMath = chainLock / chainLength;
  for (let DreamChain = -1; DreamChain < chainLength; DreamChain++) {
    for (let i = 0; i < [DreamChain]; i++) {
      let grabber = document.getElementById([DreamChain]);
      let toggleMath = Math.floor(Math.random() * chainMath);

      if (toggleMath == 0) {
        toggleMath = +1;
      }
      if (grabber) {
        grabber.value = toggleMath;

        let square = document.getElementById("dreams");
        let width = 25;
        let height = 25;
        let topM = Math.floor(Math.random() * height);
        let leftM = Math.floor(Math.random() * width);
        let style = "float: left; top:" + topM + "px; left:" + leftM + "px;";
        grabber.style = style;
        let entangle = topM + leftM * 10000;

        let checkEP = grabber.getAttribute("entangle");

        if (checkEP) {
          grabber.setAttribute("entangle", checkEP);
        } else {
          grabber.setAttribute("entangle", entangle);
        }
      }

      let lastBlock = DreamChain - 1;
      let entangleLastBlock = document.getElementById(lastBlock);

      if (entangleLastBlock) {
        let entangled = entangleLastBlock.getAttribute("entangle");

        if (entangled) {
          grabber.setAttribute("entangled", entangled);
        } else {
          if (!entangled) {
            grabber.setAttribute("entangled", "000009");
          }
        }
      } else {
        grabber.setAttribute("entangled", "000009");
      }

      let zero = document.getElementById(0);
      if (zero) {
        let width = 25;
        let height = 25;
        let topM = Math.floor(Math.random() * height);
        let leftM = Math.floor(Math.random() * width);
        let style = "float: left; top:" + topM + "px; left:" + leftM + "px;";
        zero.style = style;
        let entangle = topM + leftM * 10000;
        zero.setAttribute("entangle", entangle);
        zero.setAttribute("entangled", "00000");
      }
    }
  }
}
function requestMine() {
  const mining = document.getElementById("startMine");
  const userAccount = document.getElementById("user-account");
  const userAlert = document.getElementById("userAlert");

  if (activeMiner == "Yes") {
    let chainLink = dreamsList.getElementsByTagName("li").length;
    let rGrab = Math.floor(Math.random() * chainLink);
    let grabber = document.getElementById(rGrab);

    let square = document.getElementById("dreams");
    let width = 25;
    let height = 25;
    let topM = Math.floor(Math.random() * height);
    let leftM = Math.floor(Math.random() * width);
    let entangle = topM + leftM * 10000;

    if (grabber) {
      let checkGrab = grabber.getAttribute("entangle");
      if (checkGrab == entangle) {
        let pingMined = document.getElementById("minedX");
        let currentMined = parseFloat(pingMined.innerHTML);
        let addMined = 1;
        let mathMined = currentMined + addMined;
        pingMined.innerHTML = mathMined;

        let pingValue = document.getElementById("DWMW-change");
        let currentValue = parseFloat(pingValue.innerHTML);
        let addValue = grabber.value;
        let mathValue = currentValue + addValue;
        pingValue.innerHTML = mathValue;

        let pingTrys = document.getElementById("minedT");
        let currentTrys = parseFloat(pingTrys.innerHTML);
        let addTry = 1;
        let mathTry = currentTrys + addTry;
        pingTrys.innerHTML = mathTry;

        let collapse = rGrab - 1;
        let collapsePing = parseFloat(collapse);
        let collapsing = document.getElementById(collapsePing);

        if (collapsing) {
          let collapseValue = collapsing.value;
          let collapseCurrent = parseFloat(collapseValue);
          let collapseMath = collapseCurrent - currentValue;

          if (collapseMath > 0) {
            pingValue.innerHTML = mathTry;
          } else {
            pingValue.innerHTML = collapseMath;
          }
        }
        dreamInput.value =
          "Transfer:" + userAccount.innerHTML + "DWMW" + pingValue.innerHTML;
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
        setTimeout(myChain, 3000);
      } else {
        let pingTrys = document.getElementById("minedT");
        let currentTrys = parseFloat(pingTrys.innerHTML);
        let addTry = 1;
        let mathTry = currentTrys + addTry;
        pingTrys.innerHTML = mathTry;
      }
    }
  }
  if (activeMiner == "No") {
    activeMiner = "";
  }
  setTimeout(requestMine, 5000);
}
