const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

var enableLogin = function () {
  let connectButton = document.getElementById("connect");
  connectButton.addEventListener("click", connectWithMetaMask);
  console.log("Connect button enabled");

  let checkLink = document.getElementById("check");
  checkLink.addEventListener("click", check);

  let updateButton = document.getElementById("updateUserData");
  updateButton.addEventListener("click", updateUserData);
};

var connectWithMetaMask = async function () {
  console.log("Connect with MetaMask");
  console.log("Network version", ethereum.networkVersion);
  console.log("Selected Address", ethereum.selectedAddress);
  //currently the array will ALWAYS return one account (that was selected by the user)
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const publicAddress = accounts[0];
  console.log("Address chosen is", publicAddress);

  async () => {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x609e" }],
    });
  };
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x609e" }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x609e",
              chainName: "MINTME",
              rpcUrls: ["https://node1.mintme.com"] /* ... */,
            },
          ],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }

  //request nonce if it exists
  fetch(`/users/${publicAddress}`)
    .then((response) => response.json())
    .then((user) => {
      console.log(user);

      if (!user.nonce) {
        createUser(publicAddress);
      } else {
        signMessage(user.nonce, publicAddress);

      }
    });
};
var createUser = async function (publicAddress) {
  fetch(`/users`, {
    body: JSON.stringify({ publicAddress }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((user) => {
      console.log("created", user);
      connectWithMetaMask();
    });
};

var signMessage = async function (nonce, publicAddress) {
  web3.eth.personal.sign(nonce + "", publicAddress).then(async (signed) => {
    await authenticate(publicAddress, signed);
      await closePOP();
    await greet();
    console.log(signed);
    startCHAT();
  });
};

var authenticate = async function (publicAddress, signature) {
  fetch(`/auth`, {
    body: JSON.stringify({ publicAddress, signature }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((res) => {
      let accessToken = res.accessToken;
      document.getElementById("myUSER").innerHTML = accessToken;
      sessionStorage.accessToken = accessToken;

      document.getElementById("updateUser").removeAttribute("hidden");
    });
};

var updateUserData = async function () {
  let username = document.getElementById("username").value;
  console.log("username", username);

  fetch(`/users`, {
    body: JSON.stringify({ username }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.accessToken}`,
    },
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((user) => {
      console.log("updated", user);
    });
};

var check = function () {
  let token = sessionStorage.accessToken;
  console.log("Check token...", token);

  fetch("/protected", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .then((json) => {
      document.getElementById("response").innerHTML = JSON.stringify(json);
      // if (json.user && json.user.username) {
      //   document.getElementById("greet").innerHTML = `Welcome ${json.user.username}`;
      // }
    });
};

var greet = function () {
  let token = sessionStorage.accessToken;
  console.log("Check token...", token);

  fetch("/user", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .then((json) => {
      // document.getElementById("response").innerHTML = JSON.stringify(json);
      if (json.user && json.user.username) {
        document.getElementById(
          "myToken"
        ).innerHTML = `<h1>Welcome ${json.user.username}</h1>`;
      }
    });
};

if (typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask) {
  console.log("MetaMask is installed");
  enableLogin();
}

/* HTTPS */

var loc = window.location.href + "";
if (loc.indexOf("http://") == 0) {
  window.location.href = loc.replace("http://", "https://");
}

function closePOP() {
  var errorpop = document.getElementById("connect");
  errorpop.className = "hide";
}
