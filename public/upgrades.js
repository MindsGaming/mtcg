function farmerChickenSupply() {
  let yolkCheck = document.getElementById("hatched-points");
  let checking = parseFloat(yolkCheck.innerHTML);
  var farmerstage = document.getElementById("farmer-stage");

  if (checking < 10000) {
    userAlert.innerHTML = "Not Enough Yolks";
  } else {
    if (farmerstage.title == "FARM") {
      userAlert.innerHTML = "You Need A Castle";
    } else {
      let upgradeFarm = checking - 10000;
      yolkCheck.innerHTML = upgradeFarm;

      const upgrade = document.getElementById("supplyfeedBTN");
      upgrade.className = "meterbuttons";

      let stockSupply = document.getElementById("farmer-feed");

      let currentSupply = parseFloat(stockSupply.value);
      let addSupply = Math.floor(Math.random() * 50);

      let supplyMath = currentSupply + addSupply;

      if (supplyMath > 50) {
        stockSupply.value = 50;
      } else {
        stockSupply.value = supplyMath;
      }
    }
  }
}

function supplyFeed() {
  const feedmyChicken = document.getElementById("supplyfeedBTN");
  feedmyChicken.className = "hide";
  let gatherSeeds = document.getElementById("hatched-points");
  let gatherCost = 1000;
  let gather = parseFloat(gatherSeeds.innerHTML);

  if (gather < 1000) {
    userAlert.innerHTML = "Not Enough Yolks";
  } else {
    let gathering = gather - 1000;
    gatherSeeds.innerHTML = gathering;

    let stockSupply = document.getElementById("farmer-feed");
    let currentSupply = parseFloat(stockSupply.value);
    let addSupply = Math.floor(Math.random() * 50);

    let supplyMath = currentSupply + addSupply;

    if (supplyMath > 50) {
      stockSupply.value = 50;
    } else {
      stockSupply.value = supplyMath;
    }
  }

  function togglefeedbtn() {
    if (feedmyChicken.className == "meterbuttons") {
      feedmyChicken.className = "hide";
    } else if (feedmyChicken.className == "hide") {
      feedmyChicken.className = "meterbuttons";
    }
  }
  setTimeout(togglefeedbtn, 5000);
}

function farmerStages() {
  var farmerstage = document.getElementById("farmer-stage");
  var levelText = document.getElementById("stage-text");
  var farmerstageBracket = document.getElementById("farmerstage-bracket");
  let yolkCheck = document.getElementById("hatched-points");
  let checking = parseFloat(yolkCheck.innerHTML);

  if (checking < 1) {
    userAlert.innerHTML = "Not Enough Yolks";
  } else {
    if (farmerstage.title == "FARM") {
      let upgradeFarm = checking - 1;
      yolkCheck.innerHTML = upgradeFarm;

      farmerstage.title = "CASTLE";
      levelText.innerHTML = "SPACE";
    } else if (farmerstage.title == "CASTLE") {
      let upgradeFarm = checking - 10000;
      yolkCheck.innerHTML = upgradeFarm;

      farmerstage.title = "SPACE";
      farmerstageBracket.className = "hide";
    }
  }
}
