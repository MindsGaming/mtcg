function keepDreaming() {
  alert("This functions hasn't been built, Keep Dreaming");
}

function takeTour() {
  var hide = document.getElementById("m1");
  hide.classList.toggle("hide");
  var show = document.getElementById("m2");
  show.className = "messageBlock";
  var tour = document.getElementById("tour");
  tour.className = "touring";
}

function openTour() {
  var hide = document.getElementById("tour");
  hide.className = "tour";
}

function justPlay() {
  var hide = document.getElementById("tour");
  hide.className = "hide";
}

function listTokens() {
  var airdrop = document.getElementById("airdrip");
  airdrop.className = "greyButton";
  var airdrops = document.getElementById("lostImagination");
  airdrops.className = "hide";
}

function airDrops() {
  var airdrop = document.getElementById("airdrops");
  airdrop.className = "idealisting";
  var airdrops = document.getElementById("lostImagination");
  airdrops.className = "marketTokens";
}

function m3() {
  justPlay();
  var m2 = document.getElementById("m2");
  m2.className = "hide";
  var m3 = document.getElementById("m3");
  m3.className = "marketTokens";
}

function m4() {
  justPlay();
  var m3 = document.getElementById("m3");
  m3.className = "hide";
  var m4 = document.getElementById("m4");
  m4.className = "marketTokens";
}

function imagineAirs() {
  var tackCount = document.getElementById("imaginationToken").value;
  if (tackCount == "0") {
    var tackcount = tackCount + 1000;
    document.getElementById("imaginationToken").value = tackcount;
    document.getElementById("imaginationtoken").innerHTML = tackcount;
    alert("Claimed");
    fakeTokens();
  } else {
    alert("Already Claimed");
    fakeTokens();
  }
}

function fakeTokens() {
  var airdrop = document.getElementById("airdrops");
  airdrop.className = "hide";
  var airdrops = document.getElementById("lostImagination");
  airdrops.className = "marketTokens";
}

function m5() {
  var tackCount = document.getElementById("imaginationToken").value;
  if (tackCount == "0") {
    alert("Claim The Airdrop To Countiue");
  } else {
    var m4 = document.getElementById("m4");
    m4.className = "hide";
    var m5 = document.getElementById("m5");
    m5.className = "marketTokens";
  }
}

function m6() {
  var m5 = document.getElementById("m5");
  m5.className = "hide";
  var m6 = document.getElementById("m6");
  m6.className = "marketTokens";
}

function checkReward() {
  var Drop = document.getElementById("imaginationToken");
  var drop = document.getElementById("imaginationtoken");

  drop.innerHTML = Drop.value;
}
function m7() {
  var m6 = document.getElementById("m6");
  m6.className = "hide";
  var m7 = document.getElementById("m7");
  m7.className = "marketTokens";
}

function m8() {
  var m7 = document.getElementById("m7");
  m7.className = "hide";
  var m8 = document.getElementById("m8");
  m8.className = "marketTokens";
}
function m8ok() {
  var m8 = document.getElementById("m8");
  m8.className = "hide";
  var m10 = document.getElementById("m10");
  m10.className = "marketTokens";
}

function m9() {
  var m7 = document.getElementById("m7");
  m7.className = "hide";
  var m9 = document.getElementById("m9");
  m9.className = "marketTokens";
}

function m9ok() {
  var m9 = document.getElementById("m9");
  m9.className = "hide";
}

function createMenu() {
  var create = document.getElementById("createTab");
  create.className = "trading";
  var home = document.getElementById("home");
  home.className = "hide";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var rewardImagine = document.getElementById("rewardsImagine");
  rewardImagine.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  openMenu();
}

function openMenu() {
  var openmenu = document.getElementById("imagineMenu");
  openmenu.classList.toggle("showMenu");
}

function walletMenu() {
  var wallet = document.getElementById("walletTab");
  wallet.className = "trading";
  var openmenu = document.getElementById("imagineMenu");
  openmenu.classList.toggle("showMenu");
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  var home = document.getElementById("home");
  home.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var rewardImagine = document.getElementById("rewardsImagine");
  rewardImagine.className = "hide";
}

function tradingMenu() {
  var trading = document.getElementById("tradingTab");
  trading.className = "trading";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var openmenu = document.getElementById("imagineMenu");
  openmenu.classList.toggle("showMenu");
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  var home = document.getElementById("home");
  home.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var rewardImagine = document.getElementById("rewardsImagine");
  rewardImagine.className = "hide";
}

function logoTick() {
  var home = document.getElementById("home");
  home.className = "trading";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var openmenu = document.getElementById("imagineMenu");
  openmenu.className = "hide";
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var rewardImagine = document.getElementById("rewardsImagine");
  rewardImagine.className = "hide";
}

function creating() {
  var create = document.getElementById("imagineName").value;
  var intro = document.getElementById("imagineIntro").value;
  var userstoken = document.getElementById("usersToken");
  userstoken.innerHTML = "Ideas/" + create + ":";
  var usersintro = document.getElementById("usersIntro");
  usersintro.innerHTML = intro;
  var imagineTab = document.getElementById("createTab");
  imagineTab.className = "hide";
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "userpage";
  var home = document.getElementById("home");
  home.className = "hide";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var button = document.getElementById("CREATE");
  button.className = "hide";
  var myIdea = document.getElementById("IDEA");
  myIdea.className = "menuItem";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  gamerImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  gamerImagine.className = "hide";
  var YOURIDEA = document.getElementById("YOURIDEA");
  YOURIDEA.innerHTML = create + " Idea:";
  var youridea = document.getElementById("youridea");
  youridea.className = "trade";
  var yourImagination = document.getElementById("yourImagination");
  yourImagination.value = +10000;
  var yourimagination = document.getElementById("yourimagination");
  yourimagination.innerHTML = "10000";

  if (YOURIDEA.innerHTML == "") {
    YOURIDEA.innerHTML = "Undefined Idea";
  }
}

function m10ok() {
  var m10 = document.getElementById("m10");
  m10.className = "hide";
  var m11 = document.getElementById("m11");
  m11.className = "marketTokens";
}

function m11ok() {
  var m10 = document.getElementById("m11");
  m10.className = "hide";
  var m11 = document.getElementById("m12");
  m11.className = "marketTokens";
}

function m12ok() {
  var m11 = document.getElementById("m11");
  m11.className = "hide";
  var m12 = document.getElementById("m12");
  m12.className = "marketTokens";
}

function m13ok() {
  var m12 = document.getElementById("m12");
  m12.className = "hide";
  var m13 = document.getElementById("m13");
  m13.className = "marketTokens";
}

function m14ok() {
  alert(
    "We are working on more tips click around some and find more fun things to do for now!"
  );
  var m13 = document.getElementById("m13");
  m13.className = "hide";
}

function usersIdea() {
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "userpage";
  var home = document.getElementById("home");
  home.className = "hide";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var rewardImagine = document.getElementById("rewardsImagine");
  rewardImagine.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  openMenu();
}

function usersIDeas() {
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "userpage";
  var home = document.getElementById("home");
  home.className = "hide";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var rewardImagine = document.getElementById("rewardsImagine");
  rewardImagine.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
}

function gamerIdea() {
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  var home = document.getElementById("home");
  home.className = "hide";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var rewardImagine = document.getElementById("REWARDTOKEN");
  doobetterImagine.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "userpage";
  var rewardImagine = document.getElementById("rewardsImagine");
  rewardImagine.className = "hide";
}

function eclipseIdea() {
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  var home = document.getElementById("home");
  home.className = "hide";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var rewardImagine = document.getElementById("REWARDTOKEN");
  doobetterImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "userpage";
  var rewardImagine = document.getElementById("rewardsImagine");
  rewardImagine.className = "hide";
}

function doobetterIdea() {
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  var home = document.getElementById("home");
  home.className = "hide";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "userpage";
  var rewardImagine = document.getElementById("rewardsImagine");
  rewardImagine.className = "hide";
}

function rewardIdea() {
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  var home = document.getElementById("home");
  home.className = "hide";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var rewardImagine = document.getElementById("rewardsImagine");
  rewardImagine.className = "userpage";
}

var price = [
  "0.1",
  "0.2",
  "0.3",
  "0.4",
  "0.5",
  "0.6",
  "0.7",
  "0.8",
  "0.9",
  "1"
];
var prices = [
  "0.15",
  "0.25",
  "0.35",
  "0.45",
  "0.55",
  "0.65",
  "0.75",
  "0.85",
  "0.95",
  "1.50"
];

var amounts = [
  "1000",
  "2000",
  "3000",
  "4000",
  "5000",
  "6000",
  "7000",
  "8000",
  "9000"
];

function sellOne() {
  var check = document.getElementById("yourImagination").value;

  if (check == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("A1").value;
    var A2 = document.getElementById("A2").value;

    var tackCount = document.getElementById("yourImagination").value;
    var tackcount = tackCount - A1;
    document.getElementById("yourImagination").value = tackcount;
    document.getElementById("yourimagination").innerHTML = tackcount;

    var tackCount2 = document.getElementById("imaginationToken").value;
    var tackcount2 = tackCount2 + A2;
    document.getElementById("imaginationToken").value = tackcount2;
    document.getElementById("imaginationtoken").innerHTML = tackcount2;

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

    var SUM = PRICE * AMOUNT;

    document.getElementById("p1").innerHTML = PRICE;
    document.getElementById("a1").innerHTML = AMOUNT;
    document.getElementById("s1").innerHTML = SUM;

    document.getElementById("A1").value = AMOUNT;
    document.getElementById("A2").value = SUM;

    var PRICES = prices[Math.floor(Math.random() * prices.length)];
    var AMOUNTS = amounts[Math.floor(Math.random() * amounts.length)];

    var SUMS = PRICES * AMOUNTS;

    document.getElementById("p2").innerHTML = PRICES;
    document.getElementById("a2").innerHTML = AMOUNTS;
    document.getElementById("s2").innerHTML = SUMS;

    document.getElementById("A3").value = AMOUNTS;
    document.getElementById("A4").value = SUMS;
  }
}

function buyOne() {
  var check = document.getElementById("imaginationToken").value;

  if (check == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("A3").value;
    var A2 = document.getElementById("A4").value;

    var tackCount = document.getElementById("yourImagination").value;
    var tackcount = tackCount + A1;
    document.getElementById("yourImagination").value = tackcount;
    document.getElementById("yourimagination").innerHTML = tackcount;

    var tackCount2 = document.getElementById("imaginationToken").value;
    var tackcount2 = tackCount2 - A2;
    document.getElementById("imaginationToken").value = tackcount2;
    document.getElementById("imaginationtoken").innerHTML = tackcount2;

    var PRICE = prices[Math.floor(Math.random() * prices.length)];
    var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

    var SUM = PRICE * AMOUNT;

    document.getElementById("p2").innerHTML = PRICE;
    document.getElementById("a2").innerHTML = AMOUNT;
    document.getElementById("s2").innerHTML = SUM;

    document.getElementById("A3").value = AMOUNT;
    document.getElementById("A4").value = SUM;

    var PRICES = price[Math.floor(Math.random() * price.length)];
    var AMOUNTS = amounts[Math.floor(Math.random() * amounts.length)];

    var SUMS = PRICES * AMOUNTS;

    document.getElementById("p1").innerHTML = PRICES;
    document.getElementById("a1").innerHTML = AMOUNTS;
    document.getElementById("s1").innerHTML = SUMS;

    document.getElementById("A1").value = AMOUNTS;
    document.getElementById("A2").value = SUMS;
  }
}

//GAMER/Ideas//

function sellTwo() {
  var check = document.getElementById("gamerImagination").value;

  if (check == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("A1").value;
    var A2 = document.getElementById("A2").value;

    var tackCount = document.getElementById("gamerImagination").value;
    var tackcount = tackCount - A1;
    document.getElementById("gamerImagination").value = tackcount;
    document.getElementById("gamerimagination").innerHTML = tackcount;

    var tackCount2 = document.getElementById("imaginationToken").value;
    var tackcount2 = tackCount2 + A2;
    document.getElementById("imaginationToken").value = tackcount2;
    document.getElementById("imaginationtoken").innerHTML = tackcount2;

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

    var SUM = PRICE * AMOUNT;

    document.getElementById("p3").innerHTML = PRICE;
    document.getElementById("a3").innerHTML = AMOUNT;
    document.getElementById("s3").innerHTML = SUM;

    document.getElementById("C1").value = AMOUNT;
    document.getElementById("C2").value = SUM;

    var PRICES = prices[Math.floor(Math.random() * prices.length)];
    var AMOUNTS = amounts[Math.floor(Math.random() * amounts.length)];

    var SUMS = PRICES * AMOUNTS;

    document.getElementById("p4").innerHTML = PRICES;
    document.getElementById("a4").innerHTML = AMOUNTS;
    document.getElementById("s4").innerHTML = SUMS;

    document.getElementById("C3").value = AMOUNTS;
    document.getElementById("C4").value = SUMS;
  }
}

function buyTwo() {
  var check = document.getElementById("imaginationToken").value;

  if (check == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("C3").value;
    var A2 = document.getElementById("C4").value;

    var tackCount = document.getElementById("gamerImagination").value;
    var tackcount = tackCount + A1;
    document.getElementById("gamerImagination").value = tackcount;
    document.getElementById("gamerimagination").innerHTML = tackcount;

    var tackCount2 = document.getElementById("imaginationToken").value;
    var tackcount2 = tackCount2 - A2;
    document.getElementById("imaginationToken").value = tackcount2;
    document.getElementById("imaginationtoken").innerHTML = tackcount2;

    var PRICE = prices[Math.floor(Math.random() * prices.length)];
    var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

    var SUM = PRICE * AMOUNT;

    document.getElementById("p4").innerHTML = PRICE;
    document.getElementById("a4").innerHTML = AMOUNT;
    document.getElementById("s4").innerHTML = SUM;

    document.getElementById("C3").value = AMOUNT;
    document.getElementById("C4").value = SUM;

    var PRICES = price[Math.floor(Math.random() * price.length)];
    var AMOUNTS = amounts[Math.floor(Math.random() * amounts.length)];

    var SUMS = PRICES * AMOUNTS;

    document.getElementById("p3").innerHTML = PRICES;
    document.getElementById("a3").innerHTML = AMOUNTS;
    document.getElementById("s3").innerHTML = SUMS;

    document.getElementById("C1").value = AMOUNTS;
    document.getElementById("C2").value = SUMS;
  }
}

// ECLIPSE/Ideas //

function sellThree() {
  var check = document.getElementById("eclipseImagination").value;

  if (check == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("D1").value;
    var A2 = document.getElementById("D2").value;

    var tackCount = document.getElementById("eclipseImagination").value;
    var tackcount = tackCount - A1;
    document.getElementById("eclipseImagination").value = tackcount;
    document.getElementById("eclipseimagination").innerHTML = tackcount;

    var tackCount2 = document.getElementById("imaginationToken").value;
    var tackcount2 = tackCount2 + A2;
    document.getElementById("imaginationToken").value = tackcount2;
    document.getElementById("imaginationtoken").innerHTML = tackcount2;

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

    var SUM = PRICE * AMOUNT;

    document.getElementById("p5").innerHTML = PRICE;
    document.getElementById("a5").innerHTML = AMOUNT;
    document.getElementById("s5").innerHTML = SUM;

    document.getElementById("D1").value = AMOUNT;
    document.getElementById("D2").value = SUM;

    var PRICES = prices[Math.floor(Math.random() * prices.length)];
    var AMOUNTS = amounts[Math.floor(Math.random() * amounts.length)];

    var SUMS = PRICES * AMOUNTS;

    document.getElementById("p6").innerHTML = PRICES;
    document.getElementById("a6").innerHTML = AMOUNTS;
    document.getElementById("s6").innerHTML = SUMS;

    document.getElementById("D3").value = AMOUNTS;
    document.getElementById("D4").value = SUMS;
  }
}

function buyThree() {
  var check = document.getElementById("imaginationToken").value;

  if (check == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("D3").value;
    var A2 = document.getElementById("D4").value;

    var tackCount = document.getElementById("eclipseImagination").value;
    var tackcount = tackCount + A1;
    document.getElementById("eclipseImagination").value = tackcount;
    document.getElementById("eclipseimagination").innerHTML = tackcount;

    var tackCount2 = document.getElementById("imaginationToken").value;
    var tackcount2 = tackCount2 - A2;
    document.getElementById("imaginationToken").value = tackcount2;
    document.getElementById("imaginationtoken").innerHTML = tackcount2;

    var PRICE = prices[Math.floor(Math.random() * prices.length)];
    var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

    var SUM = PRICE * AMOUNT;

    document.getElementById("p6").innerHTML = PRICE;
    document.getElementById("a6").innerHTML = AMOUNT;
    document.getElementById("s6").innerHTML = SUM;

    document.getElementById("D3").value = AMOUNT;
    document.getElementById("D4").value = SUM;

    var PRICES = price[Math.floor(Math.random() * price.length)];
    var AMOUNTS = amounts[Math.floor(Math.random() * amounts.length)];

    var SUMS = PRICES * AMOUNTS;

    document.getElementById("p5").innerHTML = PRICES;
    document.getElementById("a5").innerHTML = AMOUNTS;
    document.getElementById("s5").innerHTML = SUMS;

    document.getElementById("D1").value = AMOUNTS;
    document.getElementById("D2").value = SUMS;
  }
}

// DooBetter/Ideas //

function sellFour() {
  var check = document.getElementById("doobetterImagination").value;

  if (check == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("E1").value;
    var A2 = document.getElementById("E2").value;

    var tackCount = document.getElementById("doobetterImagination").value;
    var tackcount = tackCount - A1;
    document.getElementById("doobetterImagination").value = tackcount;
    document.getElementById("doobetterimagination").innerHTML = tackcount;

    var tackCount2 = document.getElementById("imaginationToken").value;
    var tackcount2 = tackCount2 + A2;
    document.getElementById("imaginationToken").value = tackcount2;
    document.getElementById("imaginationtoken").innerHTML = tackcount2;

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

    var SUM = PRICE * AMOUNT;

    document.getElementById("p7").innerHTML = PRICE;
    document.getElementById("a7").innerHTML = AMOUNT;
    document.getElementById("s7").innerHTML = SUM;

    document.getElementById("E1").value = AMOUNT;
    document.getElementById("E2").value = SUM;

    var PRICES = prices[Math.floor(Math.random() * prices.length)];
    var AMOUNTS = amounts[Math.floor(Math.random() * amounts.length)];

    var SUMS = PRICES * AMOUNTS;

    document.getElementById("p8").innerHTML = PRICES;
    document.getElementById("a8").innerHTML = AMOUNTS;
    document.getElementById("s8").innerHTML = SUMS;

    document.getElementById("E3").value = AMOUNTS;
    document.getElementById("E4").value = SUMS;
  }
}

function buyFour() {
  var check = document.getElementById("imaginationToken").value;

  if (check == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("E3").value;
    var A2 = document.getElementById("E4").value;

    var tackCount = document.getElementById("doobetterImagination").value;
    var tackcount = tackCount + A1;
    document.getElementById("doobetterImagination").value = tackcount;
    document.getElementById("doobetterimagination").innerHTML = tackcount;

    var tackCount2 = document.getElementById("imaginationToken").value;
    var tackcount2 = tackCount2 - A2;
    document.getElementById("imaginationToken").value = tackcount2;
    document.getElementById("imaginationtoken").innerHTML = tackcount2;

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

    var SUM = PRICE * AMOUNT;

    document.getElementById("p8").innerHTML = PRICE;
    document.getElementById("a8").innerHTML = AMOUNT;
    document.getElementById("s8").innerHTML = SUM;

    document.getElementById("E3").value = AMOUNT;
    document.getElementById("E4").value = SUM;

    var PRICES = price[Math.floor(Math.random() * price.length)];
    var AMOUNTS = amounts[Math.floor(Math.random() * amounts.length)];

    var SUMS = PRICES * AMOUNTS;

    document.getElementById("p7").innerHTML = PRICES;
    document.getElementById("a7").innerHTML = AMOUNTS;
    document.getElementById("s7").innerHTML = SUMS;

    document.getElementById("E1").value = AMOUNTS;
    document.getElementById("E2").value = SUMS;
  }
}

// Ideas/ReWards //

function sellBlock() {
  var check = document.getElementById("imaginationToken").value;

  if (check == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("R1").value;
    var A2 = document.getElementById("R2").value;

    var tackCount = document.getElementById("imaginationToken").value;
    var tackcount = tackCount - A1;
    document.getElementById("imaginationToken").value = tackcount;
    document.getElementById("imaginationtoken").innerHTML = tackcount;

    var tackCount2 = document.getElementById("rewardBlock").value;
    var tackcount2 = tackCount2 + A2;
    document.getElementById("rewardBlock").value = tackcount2;
    document.getElementById("rewardblock").innerHTML = tackcount2;

    var superPriced = ["0.00061", "0.00075", "0.0008", "0.0009", "0.001"];
    var superPrice = [
      "0.002",
      "0.003",
      "0.004",
      "0.005",
      "0.006",
      "0.007",
      "0.008",
      "0.009",
      "0.001"
    ];

    var PRICE = superPriced[Math.floor(Math.random() * superPriced.length)];
    var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

    var SUM = PRICE * AMOUNT;

    document.getElementById("p10").innerHTML = PRICE;
    document.getElementById("a10").innerHTML = AMOUNT;
    document.getElementById("s10").innerHTML = SUM;

    document.getElementById("R1").value = AMOUNT;
    document.getElementById("R2").value = SUM;

    var PRICES = superPrice[Math.floor(Math.random() * superPrice.length)];
    var AMOUNTS = amounts[Math.floor(Math.random() * amounts.length)];

    var SUMS = PRICES * AMOUNTS;

    document.getElementById("p11").innerHTML = PRICES;
    document.getElementById("a11").innerHTML = AMOUNTS;
    document.getElementById("s11").innerHTML = SUMS;

    document.getElementById("R3").value = AMOUNTS;
    document.getElementById("R4").value = SUMS;
  }
}

function buyBlock() {
  var check = document.getElementById("rewardBlock").value;

  if (check == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("R3").value;
    var A2 = document.getElementById("R4").value;

    var tackCount = document.getElementById("imaginationToken").value;
    var tackcount = tackCount + A1;
    document.getElementById("imaginationToken").value = tackcount;
    document.getElementById("imaginationtoken").innerHTML = tackcount;

    var tackCount2 = document.getElementById("rewardBlock").value;
    var tackcount2 = tackCount2 - A2;
    document.getElementById("rewardBlock").value = tackcount2;
    document.getElementById("rewardblock").innerHTML = tackcount2;

    var superPriced = ["0.00061", "0.00075", "0.0008", "0.0009", "0.001"];
    var superPrice = [
      "0.002",
      "0.003",
      "0.004",
      "0.005",
      "0.006",
      "0.007",
      "0.008",
      "0.009",
      "0.001"
    ];

    var PRICE = superPrice[Math.floor(Math.random() * superPrice.length)];
    var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

    var SUM = PRICE * AMOUNT;

    document.getElementById("p11").innerHTML = PRICE;
    document.getElementById("a11").innerHTML = AMOUNT;
    document.getElementById("s11").innerHTML = SUM;

    document.getElementById("R3").value = AMOUNT;
    document.getElementById("R4").value = SUM;

    var PRICES = superPriced[Math.floor(Math.random() * superPriced.length)];
    var AMOUNTS = amounts[Math.floor(Math.random() * amounts.length)];

    var SUMS = PRICES * AMOUNTS;

    document.getElementById("p10").innerHTML = PRICES;
    document.getElementById("a10").innerHTML = AMOUNTS;
    document.getElementById("s10").innerHTML = SUMS;

    document.getElementById("R1").value = AMOUNTS;
    document.getElementById("R2").value = SUMS;
  }
}

function claimReward() {
  var checkRewards = document.getElementById("rewardBlock").value;

  if (checkRewards == "0") {
    alert("No Rewards Found, Sell Some Ideas?");
  } else {
    var checkYou = document.getElementById("yourImagination").value;

    if (checkYou == "0") {
      alert("You Can't Cash Out Without Owing Some Of Your Ideas");
    } else {
      var checkImagine = document.getElementById("imaginationToken").value;

      if (checkImagine == "0") {
        alert("You Need At Least One Idea To Claim");
      } else {
        var checkReward = document.getElementById("rewardblock").innerHTML;

        alert(checkReward);
      }
    }
  }
}




const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");

var totalSeconds = 0;
setInterval(setTime, 3141);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}


function depositRewards() {
  if (minutesLabel.innerHTML = "0"){
    alert("You need a full reward to make deposits")
  }
else{
  var clac = minutesLabel.innerHTML;
    var checkReward = document.getElementById("rewardBlock").value;
  var deposit = checkReward + clac;
  

  document.getElementById("rewardblock").innerHTML =;
}
}