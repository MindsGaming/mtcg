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
  var placeaddy = document.getElementById("user-account");
  placeaddy.value = ethereum.selectedAddress;

  if (placeaddy.value == ethereum.selectedAddress) {
    // Helper function to create a list item for a given dream
    let numb = dreamsList.getElementsByTagName("li").length;
    const layingEGG = parseFloat(currenteggs.innerHTML);
    const goldenEGG = 1;
    let goldenEGGmath = layingEGG + goldenEGG;
    currenteggs.innerHTML = goldenEGGmath;

    const appendNewDreamss = (dream) => {
      const newListItem = document.createElement("li");
      const randomWarp = Math.floor(Math.random() * numb) + 1;
      newListItem.innerText = "Laid EGG";
      newListItem.title = "DreamEGG";
      newListItem.id = numb;
      newListItem.value = randomWarp;
      newListItem.className = "hide";
      dreamsList.appendChild(newListItem);
    };

    const data = {
      dream: dreamInput.value,
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
    dreams.push(dreamInput.value);
    appendNewDream(dreamInput.value);
    PlayChicken();
    loginform.className = "hide";
    gotIT();
  }

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
