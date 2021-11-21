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
  var list = document.getElementById("airdrip");
  list.className = "greyButton";
}

function airDrops() {
  var airdrop = document.getElementById("airdrops");
  airdrop.className = "marketTokens";
  var airdrops = document.getElementById("lostImagination");
  airdrops.className = "hide";
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
    var tackcount = tackCount + 1;
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
  var trading = document.getElementById("tradingTab");
  trading.className = "trading";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var openmenu = document.getElementById("imagineMenu");
  openmenu.classList.toggle("showMenu");
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
  userstoken.innerHTML = create + "/Ideas:";
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

var price = [
  "0.001",
  "0.002",
  "0.003",
  "0.004",
  "0.005",
  "0.006",
  "0.007",
  "0.008",
  "0.009",
  "0.010",
  "0.015",
  "0.020",
  "0.030",
  "0.040",
  "0.050",
  "0.060",
  "0.070",
  "0.080",
  "0.090",
  "0.100"
];
var amount = ["1000.00", "2000.00", "3000.00", "4000.00", "5000.00"];

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
  "0.01",
  "0.02",
  "0.03",
  "0.04",
  "0.05",
  "0.06",
  "0.07",
  "0.08",
  "0.09",
  "0.10"
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

  var PRICE2 = PRICE + 99;
  var AMOUNT2 = AMOUNT + 99;
  var SUM2 = PRICE2 * AMOUNT2;

  document.getElementById("p2").innerHTML = PRICE2;
  document.getElementById("a2").innerHTML = AMOUNT2;
  document.getElementById("s2").innerHTML = SUM2;

  document.getElementById("A3").value = AMOUNT2;
  document.getElementById("A4").value = SUM2;
}

function buyOne() {
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

  var PRICE = price[Math.floor(Math.random() * price.length)];
  var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

  var SUM = PRICE * AMOUNT;

  document.getElementById("p2").innerHTML = PRICE;
  document.getElementById("a2").innerHTML = AMOUNT;
  document.getElementById("s2").innerHTML = SUM;

  document.getElementById("A3").value = AMOUNT;
  document.getElementById("A4").value = SUM;

  var PRICE2 = PRICE - 99;
  var AMOUNT2 = AMOUNT - 99;
  var SUM2 = PRICE2 * AMOUNT2;

  document.getElementById("p1").innerHTML = PRICE2;
  document.getElementById("a1").innerHTML = AMOUNT2;
  document.getElementById("s1").innerHTML = SUM2;

  document.getElementById("A1").value = AMOUNT2;
  document.getElementById("A2").value = SUM2;
}

// GAMER/IDEAS //

function sellTwo() {
  var A1 = document.getElementById("C1").value;
  var A2 = document.getElementById("C2").value;

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

  document.getElementById("p2").innerHTML = PRICE;
  document.getElementById("a2").innerHTML = AMOUNT;
  document.getElementById("s2").innerHTML = SUM;

  document.getElementById("C3").value = AMOUNT;
  document.getElementById("C4").value = SUM;

  var PRICE2 = PRICE + 99;
  var AMOUNT2 = AMOUNT + 99;
  var SUM2 = PRICE2 * AMOUNT2;

  document.getElementById("p3").innerHTML = PRICE2;
  document.getElementById("a3").innerHTML = AMOUNT2;
  document.getElementById("s4").innerHTML = SUM2;

  document.getElementById("C1").value = AMOUNT2;
  document.getElementById("C4").value = SUM2;
}

function buyTWO() {
  var A1 = document.getElementById("C3").value;
  var A2 = document.getElementById("C4").value;

  var tackCount = document.getElementById("yourImagination").value;
  var tackcount = tackCount + A1;
  document.getElementById("yourImagination").value = tackcount;
  document.getElementById("yourimagination").innerHTML = tackcount;

  var tackCount2 = document.getElementById("imaginationToken").value;
  var tackcount2 = tackCount2 - A2;
  document.getElementById("imaginationToken").value = tackcount2;
  document.getElementById("imaginationtoken").innerHTML = tackcount2;

  var PRICE = price[Math.floor(Math.random() * price.length)];
  var AMOUNT = amounts[Math.floor(Math.random() * amounts.length)];

  var SUM = PRICE * AMOUNT;

  document.getElementById("p3").innerHTML = PRICE;
  document.getElementById("a3").innerHTML = AMOUNT;
  document.getElementById("s3").innerHTML = SUM;

  document.getElementById("C3").value = AMOUNT;
  document.getElementById("C4").value = SUM;

  var PRICE2 = PRICE - 99;
  var AMOUNT2 = AMOUNT - 99;
  var SUM2 = PRICE2 * AMOUNT2;

  document.getElementById("p2").innerHTML = PRICE2;
  document.getElementById("a2").innerHTML = AMOUNT2;
  document.getElementById("s2").innerHTML = SUM2;

  document.getElementById("C1").value = AMOUNT2;
  document.getElementById("C2").value = SUM2;
}
