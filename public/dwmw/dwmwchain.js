let mychain = "";
let activeMiner = "";
let hardness = 8;
function startMine() {
  const mining = document.getElementById("startMine");
  const userAccount = document.getElementById("user-account");
  const userAlert = document.getElementById("userAlert");
  let checkStart = mining.title;

  if (userAccount.innerHTML == "Login") {
    userAlert.innerHTML = "You Need To Login";
  } else {
    if (checkStart == "Start") {
      mining.innerHTML = "Stop Hack";
      activeMiner = "Yes";
      mining.title = "Stop";
      dwmwChain();
      setTimeout(requestMine(), 3000);
      userAlert.innerHTML = "";
    } else {
      if (checkStart == "Stop") {
        activeMiner = "No";
        mining.title = "Start";
        mining.innerHTML = "Hack Game";
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
        let width = hardness;
        let height = hardness;
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
        let width = hardness;
        let height = hardness;
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
  fource = "OFF";
  if (activeMiner == "Yes") {
    let chainLink = dreamsList.getElementsByTagName("li").length;
    let rGrab = Math.floor(Math.random() * chainLink);
    let grabber = document.getElementById(rGrab);

    let square = document.getElementById("dreams");
    let width = hardness;
    let height = hardness;
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

          if (collapseMath < 0) {
            pingValue.innerHTML = mathValue;
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
  } else {
    setTimeout(requestMine, 5000);
  }
}
