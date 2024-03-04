const axios = require("axios");
const MintMe_API = "https://www.mintme.com/dev/api/v1";

// Place 'MYAPIKEY' in the .env
const PUBLIC_KEY = MYAPIKEY;

var NFTIMG = dreamInput.vlaue;
var NFTNAME = dreamInputTwo.value;

async function createNFT(NFTIMG, NFTNAME) {
  try {
    const responce = await axios.post("$ {API_URL}/users/orders", {
      type: "create,nft",
      image_url: NFTIMG,
      NFTNAME,
    });
  } catch (error) {
    alert("Oops");
  }
}
