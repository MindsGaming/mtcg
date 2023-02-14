function payME() {
    var payWithMetaMask = async function () {
    console.log("Initiating Payment.");

    const factorUSDETH = await fetch(
      "https://www.mintme.com/dev/api/v2/open/trades/GAMER_MINTME"
    )
      .then((res) => res.json())
      .then((json) => json.ETH);
    console.log("USD to ETH is", factorUSDETH);

    const amountUSD = 25.5;
    const amountETH = "" + amountUSD * factorUSDETH;

    const amountToSend = web3.utils.toWei(amountETH, "ether"); // Convert to wei value

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const fromAddress = "0000000000000000";
    const toAddress = accounts[0]; //just an example

    //show spinner!

    web3.eth
      .sendTransaction({
        from: fromAddress,
        to: toAddress,
        value: amountToSend,
      })
      .then(function (tx) {
        console.log("Transaction: ", tx);

        /*
    {
    "blockHash": "0x6e7487484fa99aa5931fa3b3a5824aff403763820030ef1dfdc56a9313da7900",
    "blockNumber": 10415444,
    "contractAddress": null,
    "cumulativeGasUsed": 1304713,
    "effectiveGasPrice": 2500000026,
    "from": "0xf6e58fac24faa53c5360578539374c35407a6575",
    "gasUsed": 21000,
    "logs": [],
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "status": true,
    "to": "0x3f62d5cf71c548befe2e37766e217bd38ca8aa78",
    "transactionHash": "0x54782bbb5c22d869312f6b8aacad5840af7589d0d8dc4e38345728658ed316ef",
    "transactionIndex": 7,
    "type": "0x2"
}
    */
      })
      .catch((err) => {
        console.log("Failed.", err);

        /*{
    "code": 4001,
    "message": "MetaMask Tx Signature: User denied transaction signature.",
    "stack": "{\n  \"code\": 4001,\n  \"message\": \"MetaMask Tx Signature: User denied transaction signature.\",\n  \"stack\": \"Error: MetaMask Tx Signature: User denied transaction signature.\\n    at new i (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:123658)\\n    at new n.EthereumProviderError (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:124173)\\n    at a (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:121295)\\n    at Object.userRejectedRequest (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:122526)\\n    at y.<anonymous> (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-0.js:1:220125)\\n    at Object.h (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:37171)\\n    at u (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:125656)\\n    at y.a.emit (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:126192)\\n    at y._setTransactionStatus (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-1.js:1:39346)\\n    at y.setTxStatusRejected (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-1.js:1:37549)\\n    at G.cancelTransaction (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-0.js:1:232292)\\n    at a.<anonymous> (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-0.js:1:150068)\\n    at h (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:131879)\\n    at a.s.emit (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:134874)\\n    at b (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:19967)\\n    at _ (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:19782)\\n    at a.v.push (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:20596)\\n    at t.exports._write (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:144069)\\n    at v (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:12100)\\n    at chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:15284\\n    at t.exports.y.write (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:15311)\\n    at t.exports.m (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:25167)\\n    at h (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:131879)\\n    at t.exports.s.emit (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:134874)\\n    at b (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:19967)\\n    at _ (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:19782)\\n    at t.exports.v.push (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:20596)\\n    at t.exports._onMessage (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:8708)\\n    at chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:8555\"\n}\n  at new i (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:123658)\n  at new n.EthereumProviderError (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:124173)\n  at a (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:121295)\n  at Object.userRejectedRequest (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:122526)\n  at y.<anonymous> (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-0.js:1:220125)\n  at Object.h (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:37171)\n  at u (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:125656)\n  at y.a.emit (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:126192)\n  at y._setTransactionStatus (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-1.js:1:39346)\n  at y.setTxStatusRejected (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-1.js:1:37549)\n  at G.cancelTransaction (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-0.js:1:232292)\n  at a.<anonymous> (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/background-0.js:1:150068)\n  at h (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:131879)\n  at a.s.emit (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:134874)\n  at b (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:19967)\n  at _ (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:19782)\n  at a.v.push (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:20596)\n  at t.exports._write (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:144069)\n  at v (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:12100)\n  at chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:15284\n  at t.exports.y.write (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:15311)\n  at t.exports.m (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:25167)\n  at h (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:131879)\n  at t.exports.s.emit (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:134874)\n  at b (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:19967)\n  at _ (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:19782)\n  at t.exports.v.push (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:18:20596)\n  at t.exports._onMessage (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:8708)\n  at chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/common-0.js:1:8555"
}*/
      });
  };

  let payButton = document.getElementById("pay");
  payButton.removeAttribute("hidden");
  payButton.addEventListener("click", payWithMetaMask);
  console.log("Pay button enabled");

  if (typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask) {
    console.log("MetaMask is installed");
  }
}
let payButton = document.getElementById("pay");

payButton.addEventListener("click", payME);
