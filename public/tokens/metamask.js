const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

var enableLogin = function () {
  let connectButton = document.getElementById("connect");
  connectButton.removeAttribute("hidden");
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
  var placeaddy = document.getElementById("dream");
  placeaddy.value = ethereum.selectedAddress;

  // CUstom

  const data = {
    dream: dreamInput.value + " Started Earning",
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
  dreams.push(dreamInput.value + " Started Earning");
  appendNewDream(dreamInput.value + " Started Earning");

  // reset form
  var loginform = document.getElementById("login-form");
  var walletlinks = document.getElementById("wallet-links");
  myWallet.innerHTML = dreamInput.value;
  loginform.className = "hide";
  walletlinks.className = "display";
  selectToken();
  //

  async () => {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x609e" }],
    });
  };
  customPOP();

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
    console.log(signed);
    await authenticate(publicAddress, signed);
    await closePOP();
    await greet();
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
      document.getElementById("myToken").innerHTML = accessToken;
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

function addtokens() {
  var addingtoken = document.getElementById("TOKENINFO");

  if (addingtoken.title == "GAMER") {
    const tokenAddress = "0xDA7F833675D2F90E3Df02c36bad3ECc1417B93dD";
    const tokenSymbol = "GAMER";
    const tokenDecimals = 12;
    const tokenImage =
      "https://cdn.glitch.com/98bc9411-d2e5-4109-8df4-f2f87cf144db%2FGamer-mini.jpeg?v=1631826067698";

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (addingtoken.title == "ECLIPSE") {
    const tokenAddress = "0xCbc63Dcc51679aDf0394AB2be1318034193003B6";
    const tokenSymbol = "ECLIPSE";
    const tokenDecimals = 12;
    const tokenImage =
      "https://cdn.minds.com/fs/v1/thumbnail/1254528606228328448/xlarge/";
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (addingtoken.title == "DooBetter") {
    const tokenAddress = "0x936e08736F882144Efd53813Ee9805701A5f4dC3";
    const tokenSymbol = "DooBetter";
    const tokenDecimals = 12;
    const tokenImage =
      "https://cdn.glitch.me/76239ef0-e5c6-4e29-9830-26d4ec2dfc0b%2FDOOBETTER.jpeg";
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (addingtoken.title == "GTPC") {
    const tokenAddress = "0x7f0A21Dd46a87C3cEA64A36D771B13257b345324";
    const tokenSymbol = "GTPC";
    const tokenDecimals = 12;
    const tokenImage =
      "https://cdn.glitch.global/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28/GTPC_20220120141137.png";
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (addingtoken.title == "DragonToken") {
    const tokenAddress = "0x27d203a9BC383A94a940b7D079b74f1871A1aF12";
    const tokenSymbol = "DragonToken";
    const tokenDecimals = 12;
    const tokenImage =
      "https://cdn.glitch.global/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28/ZomboMeme%2017012022164751.jpg";
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (addingtoken.title == "DarkMark") {
    const tokenAddress = "0xB43E083a4E5a42b45a20012F9130152A04Fb1ECB";
    const tokenSymbol = "DarkMark";
    const tokenDecimals = 12;
    const tokenImage =
      "https://momintdev.blob.core.windows.net/uploads/449891fa-8ccc-4bcf-851a-d54b3a3cf7eb.jpg";
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (addingtoken.title == "Candys") {
    const tokenAddress = "0x3ab2D6C3130Eb0953A04B419aa110A358F43aB69";
    const tokenSymbol = "Candys";
    const tokenDecimals = 12;
    const tokenImage =
      "https://www.mintme.com/media/cache/avatar_large/uploads/images/ed71397e-a663-11ec-bbb4-78e3b517e592.jpeg";
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (addingtoken.title == "WTV") {
    const tokenAddress = "0x3C20f6fC8adCb39769E307a8B3a5109a3Ff97933";
    const tokenSymbol = "WTV";
    const tokenDecimals = 12;
    const tokenImage =
      "https://www.mintme.com/media/cache/avatar_large/uploads/images/88c34c38-548c-11ed-b7ae-ac162db679ce.png";
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (addingtoken.title == "PINN") {
    const tokenAddress = "0xD44bf50dc440a38bF76499cC854EACe4d6e350F4";
    const tokenSymbol = "PINN";
    const tokenDecimals = 12;
    const tokenImage =
      "https://www.mintme.com/media/cache/avatar_large/uploads/images/f8c5dbe6-cec7-11eb-be8f-78e3b517e592.jpeg";
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function closePOP() {
  var errorpop = document.getElementById("POP");
  errorpop.className = "hide";
}
