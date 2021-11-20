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
  yourImagination.value = +100000;
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
  "0.01",
  "0.02",
  "0.03",
  "0.04",
  "0.05",
  "0.06",
  "0.07",
  "0.08",
  "0.09",
  "0.10",
  "0.15",
  "0.20",
  "0.30",
  "0.40",
  "0.50",
  "0.60",
  "0.70",
  "0.80",
  "0.09",
  "1.00"
];
var amount = [
  "1000.00",
  "2000.00",
  "3000.00",
  "4000.00",
  "5000.00",
  "6000.00",
  "10000"
];

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

function getSell() {
  var PRICE = price[Math.floor(Math.random() * price.length)];
  var AMOUNT = amount[Math.floor(Math.random() * amount.length)];
  var SUM = PRICE * AMOUNT;
  var p1 = document.getElementById("p1");
  var a1 = document.getElementById("a1");
  var s1 = document.getElementById("s1");
  var p2 = document.getElementById("p2");
  var a2 = document.getElementById("a2");
  var s2 = document.getElementById("s2");

  var p3 = document.getElementById("p3");
  var a3 = document.getElementById("a3");
  var s3 = document.getElementById("s3");
  var p4 = document.getElementById("p4");
  var a4 = document.getElementById("a4");
  var s4 = document.getElementById("s4");

  var p5 = document.getElementById("p5");
  var a5 = document.getElementById("a5");
  var s5 = document.getElementById("s5");
  var p6 = document.getElementById("p6");
  var a6 = document.getElementById("a6");
  var s6 = document.getElementById("s6");

  var p7 = document.getElementById("p7");
  var a7 = document.getElementById("a7");
  var s7 = document.getElementById("s7");
  var p8 = document.getElementById("p8");
  var a8 = document.getElementById("a8");
  var s8 = document.getElementById("s8");

  var p10 = document.getElementById("p10");
  var a10 = document.getElementById("a10");
  var s10 = document.getElementById("s10");
  var p11 = document.getElementById("p11");
  var a11 = document.getElementById("a11");
  var s11 = document.getElementById("s11");

  p1.innerHTML = PRICE + " |";
  a1.innerHTML = AMOUNT + " |";
  s1.innerHTML = SUM + " |";
  p2.innerHTML = PRICE + "0.05" + " |";
  a2.innerHTML = AMOUNT + "0.05" + " |";
  s2.innerHTML = SUM + "0.05" + " |";

  p3.innerHTML = PRICE + " |";
  a3.innerHTML = AMOUNT + " |";
  s3.innerHTML = SUM + " |";
  p4.innerHTML = PRICE + "0.05" + " |";
  a4.innerHTML = AMOUNT + "0.05" + " |";
  s4.innerHTML = SUM + "0.05" + " |";

  p3.innerHTML = PRICE + " |";
  a3.innerHTML = AMOUNT + " |";
  s3.innerHTML = SUM + " |";
  p4.innerHTML = PRICE + "0.05" + " |";
  a4.innerHTML = AMOUNT + "0.05" + " |";
  s4.innerHTML = SUM + "0.05" + " |";

  p5.innerHTML = PRICE + " |";
  a5.innerHTML = AMOUNT + " |";
  s5.innerHTML = SUM + " |";
  p6.innerHTML = PRICE + "0.05" + " |";
  a6.innerHTML = AMOUNT + "0.05" + " |";
  s6.innerHTML = SUM + "0.05" + " |";

  p7.innerHTML = PRICE + " |";
  a7.innerHTML = AMOUNT + " |";
  s7.innerHTML = SUM + " |";
  p8.innerHTML = PRICE + "0.05" + " |";
  a8.innerHTML = AMOUNT + "0.05" + " |";
  s8.innerHTML = SUM + "0.05" + " |";

  p10.innerHTML = PRICE + " |";
  a10.innerHTML = AMOUNT + " |";
  s10.innerHTML = SUM + " |";
  p11.innerHTML = PRICE + "0.05" + " |";
  a11.innerHTML = AMOUNT + "0.05" + " |";
  s11.innerHTML = SUM + "0.05" + " |";
}

function getBuy() {
  var PRICE = price[Math.floor(Math.random() * price.length)];
  var AMOUNT = amount[Math.floor(Math.random() * amount.length)];
  var SUM = PRICE * AMOUNT;
  var p1 = document.getElementById("p1");
  var a1 = document.getElementById("a1");
  var s1 = document.getElementById("s1");
  var p2 = document.getElementById("p2");
  var a2 = document.getElementById("a2");
  var s2 = document.getElementById("s2");

  var p3 = document.getElementById("p3");
  var a3 = document.getElementById("a3");
  var s3 = document.getElementById("s3");
  var p4 = document.getElementById("p4");
  var a4 = document.getElementById("a4");
  var s4 = document.getElementById("s4");

  var p5 = document.getElementById("p5");
  var a5 = document.getElementById("a5");
  var s5 = document.getElementById("s5");
  var p6 = document.getElementById("p6");
  var a6 = document.getElementById("a6");
  var s6 = document.getElementById("s6");

  var p7 = document.getElementById("p7");
  var a7 = document.getElementById("a7");
  var s7 = document.getElementById("s7");
  var p8 = document.getElementById("p8");
  var a8 = document.getElementById("a8");
  var s8 = document.getElementById("s8");

  var p10 = document.getElementById("p10");
  var a10 = document.getElementById("a10");
  var s10 = document.getElementById("s10");
  var p11 = document.getElementById("p11");
  var a11 = document.getElementById("a11");
  var s11 = document.getElementById("s11");

  p1.innerHTML = PRICE + " |";
  a1.innerHTML = AMOUNT + " |";
  s1.innerHTML = SUM + " |";
  p2.innerHTML = PRICE - "0.05" + " |";
  a2.innerHTML = AMOUNT - "0.05" + " |";
  s2.innerHTML = SUM - "0.05" + " |";

  p3.innerHTML = PRICE + " |";
  a3.innerHTML = AMOUNT + " |";
  s3.innerHTML = SUM + " |";
  p4.innerHTML = PRICE - "0.05" + " |";
  a4.innerHTML = AMOUNT - "0.05" + " |";
  s4.innerHTML = SUM - "0.05" + " |";

  p3.innerHTML = PRICE + " |";
  a3.innerHTML = AMOUNT + " |";
  s3.innerHTML = SUM + " |";
  p4.innerHTML = PRICE - "0.05" + " |";
  a4.innerHTML = AMOUNT - "0.05" + " |";
  s4.innerHTML = SUM - "0.05" + " |";

  p5.innerHTML = PRICE + " |";
  a5.innerHTML = AMOUNT + " |";
  s5.innerHTML = SUM + " |";
  p6.innerHTML = PRICE - "0.05" + " |";
  a6.innerHTML = AMOUNT - "0.05" + " |";
  s6.innerHTML = SUM - "0.05" + " |";

  p7.innerHTML = PRICE + " |";
  a7.innerHTML = AMOUNT + " |";
  s7.innerHTML = SUM + " |";
  p8.innerHTML = PRICE - "0.05" + " |";
  a8.innerHTML = AMOUNT - "0.05" + " |";
  s8.innerHTML = SUM - "0.05" + " |";

  p10.innerHTML = PRICE + " |";
  a10.innerHTML = AMOUNT + " |";
  s10.innerHTML = SUM + " |";
  p11.innerHTML = PRICE - "0.05" + " |";
  a11.innerHTML = AMOUNT - "0.05" + " |";
  s11.innerHTML = SUM - "0.05" + " |";
}

function sellOne() {
  walletCheck();
  var check = document.getElementById("yourImagination");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("A1");

    var ideaToken = document.getElementById("yourImagination").value;
    var boost = ideaToken - A1.value;
    var ideatoken = document.getElementById("yourimagination");
    ideatoken.innerHTML = boost;
    ideatoken.value = ideatoken.innerHTML;

    var A2 = document.getElementById("A2");

    var imaginationToken = document.getElementById("imaginationToken").value;
    var booster = imaginationToken + A2.value;
    var imaginationtoken = document.getElementById("imaginationtoken");
    imaginationtoken.innerHTML = booster;
    imaginationToken.value = imaginationtoken.innerHTML;

    var p1 = document.getElementById("p1");
    var a1 = document.getElementById("a1");
    var s1 = document.getElementById("s1");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    A1.value = AMOUNT;
    A2.value = SUM;

    var p2 = document.getElementById("p2");
    var a2 = document.getElementById("a2");
    var s2 = document.getElementById("s2");

    p2.innerHTML = PRICE + 0.03 + " |";
    a2.innerHTML = AMOUNT + 0.03 + " |";
    s2.innerHTML = SUM + 0.03 + " |";

    var A3 = document.getElementById("A3");
    var A4 = document.getElementById("A4");

    A3.value = AMOUNT;
    A4.value = SUM;
  }
}
function buyOne() {
  walletCheck();
  var check = document.getElementById("imaginationToken");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("A1");

    var ideaToken = document.getElementById("yourImagination").value;
    var boost = ideaToken + A1.value;
    var ideatoken = document.getElementById("yourimagination");
    ideatoken.innerHTML = boost;
    ideatoken.value = ideatoken.innerHTML;

    var A2 = document.getElementById("A2");

    var imaginationToken = document.getElementById("imaginationToken").value;
    var booster = imaginationToken - A2.value;
    var imaginationtoken = document.getElementById("imaginationtoken");
    imaginationtoken.innerHTML = booster;
    imaginationToken.value = imaginationtoken.innerHTML;

    var p1 = document.getElementById("p2");
    var a1 = document.getElementById("a2");
    var s1 = document.getElementById("s2");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    A1.value = AMOUNT;
    A2.value = SUM;

    var p2 = document.getElementById("p1");
    var a2 = document.getElementById("a1");
    var s2 = document.getElementById("s1");

    p2.innerHTML = PRICE - 0.03 + " |";
    a2.innerHTML = AMOUNT - 0.03 + " |";
    s2.innerHTML = SUM - 0.03 + " |";

    var A3 = document.getElementById("A3");
    var A4 = document.getElementById("A4");

    A3.value = AMOUNT;
    A4.value = SUM;
  }
}

// Gamer/Ideas //
function sellTwo() {
  walletCheck();
  var check = document.getElementById("gamerImagination");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("C1");

    var ideaToken = document.getElementById("gamerImagination").value;
    var boost = ideaToken - A1.value;
    var ideatoken = document.getElementById("gamerimagination");
    ideatoken.innerHTML = boost;
    ideatoken.value = ideatoken.innerHTML;

    var B1 = document.getElementById("C2");

    var imaginationToken = document.getElementById("imaginationToken").value;
    var booster = imaginationToken + B1.value;
    var imaginationtoken = document.getElementById("imaginationtoken");
    imaginationtoken.innerHTML = booster;
    imaginationToken.value = imaginationtoken.innerHTML;

    var p1 = document.getElementById("p3");
    var a1 = document.getElementById("a3");
    var s1 = document.getElementById("s3");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    A1.value = AMOUNT;
    B1.value = SUM;

    var p2 = document.getElementById("p4");
    var a2 = document.getElementById("a4");
    var s2 = document.getElementById("s4");

    p2.innerHTML = PRICE * 1.3 + " |";
    a2.innerHTML = AMOUNT * 1.3 + " |";
    s2.innerHTML = SUM * 1.3 + " |";

    var C1 = document.getElementById("C3");
    var D1 = document.getElementById("C4");

    C1.value = AMOUNT;
    D1.value = SUM;
  }
}
function buyTwo() {
  walletCheck();
  var check = document.getElementById("imaginationToken");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("C1");

    var ideaToken = document.getElementById("gamerImagination").value;
    var boost = ideaToken + A1.value;
    var ideatoken = document.getElementById("gamerimagination");
    ideatoken.innerHTML = boost;
    ideatoken.value = ideatoken.innerHTML;

    var B1 = document.getElementById("C2");

    var imaginationToken = document.getElementById("imaginationToken").value;
    var booster = imaginationToken - B1.value;
    var imaginationtoken = document.getElementById("imaginationtoken");
    imaginationtoken.innerHTML = booster;
    imaginationToken.value = imaginationtoken.innerHTML;

    var p1 = document.getElementById("p4");
    var a1 = document.getElementById("a4");
    var s1 = document.getElementById("s4");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    A1.value = AMOUNT;
    B1.value = SUM;

    var p2 = document.getElementById("p3");
    var a2 = document.getElementById("a3");
    var s2 = document.getElementById("s3");

    p2.innerHTML = PRICE - 0.03 + " |";
    a2.innerHTML = AMOUNT - 0.03 + " |";
    s2.innerHTML = SUM - 0.03 + " |";

    var C1 = document.getElementById("C3");
    var D1 = document.getElementById("C4");

    C1.value = AMOUNT;
    D1.value = SUM;
  }
}

// ECLIPSE/Ideas //
function sellThree() {
  walletCheck();
  var check = document.getElementById("eclipseImagination");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("D1");

    var ideaToken = document.getElementById("eclipseImagination").value;
    var boost = ideaToken - A1.value;
    var ideatoken = document.getElementById("eclipseimagination");
    ideatoken.innerHTML = boost;
    ideatoken.value = ideatoken.innerHTML;

    var B1 = document.getElementById("D2");

    var imaginationToken = document.getElementById("imaginationToken").value;
    var booster = imaginationToken + B1.value;
    var imaginationtoken = document.getElementById("imaginationtoken");
    imaginationtoken.innerHTML = booster;
    imaginationToken.value = imaginationtoken.innerHTML;

    var p1 = document.getElementById("p5");
    var a1 = document.getElementById("a5");
    var s1 = document.getElementById("s5");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    A1.value = AMOUNT;
    B1.value = SUM;

    var p2 = document.getElementById("p6");
    var a2 = document.getElementById("a6");
    var s2 = document.getElementById("s6");

    p2.innerHTML = PRICE * 0.03 + " |";
    a2.innerHTML = AMOUNT * 0.03 + " |";
    s2.innerHTML = SUM * 0.03 + " |";

    var C1 = document.getElementById("D3");
    var D1 = document.getElementById("D4");

    C1.value = AMOUNT;
    D1.value = SUM;
  }
}
function buyThree() {
  walletCheck();
  var check = document.getElementById("imaginationToken");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("D1");

    var ideaToken = document.getElementById("eclipseImagination").value;
    var boost = ideaToken + A1.value;
    var ideatoken = document.getElementById("eclipseimagination");
    ideatoken.innerHTML = boost;
    ideatoken.value = ideatoken.innerHTML;

    var B1 = document.getElementById("D2");

    var imaginationToken = document.getElementById("imaginationToken").value;
    var booster = imaginationToken - B1.value;
    var imaginationtoken = document.getElementById("imaginationtoken");
    imaginationtoken.innerHTML = booster;
    imaginationToken.value = imaginationtoken.innerHTML;

    var p1 = document.getElementById("p6");
    var a1 = document.getElementById("a6");
    var s1 = document.getElementById("s6");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    A1.value = AMOUNT;
    B1.value = SUM;

    var p2 = document.getElementById("p5");
    var a2 = document.getElementById("a5");
    var s2 = document.getElementById("s5");

    p2.innerHTML = PRICE - 0.03 + " |";
    a2.innerHTML = AMOUNT - 0.03 + " |";
    s2.innerHTML = SUM - 0.03 + " |";

    var C1 = document.getElementById("D3");
    var D1 = document.getElementById("D4");

    C1.value = AMOUNT;
    D1.value = SUM;
  }
}

// DooBettter/Ideas //
function sellFour() {
  walletCheck();
  var check = document.getElementById("doobetterImagination");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("E1");

    var ideaToken = document.getElementById("doobetterImagination").value;
    var boost = ideaToken - A1.value;
    var ideatoken = document.getElementById("doobetterimagination");
    ideatoken.innerHTML = boost;
    ideatoken.value = ideatoken.innerHTML;

    var B1 = document.getElementById("E2");

    var imaginationToken = document.getElementById("imaginationToken").value;
    var booster = imaginationToken + B1.value;
    var imaginationtoken = document.getElementById("imaginationtoken");
    imaginationtoken.innerHTML = booster;
    imaginationToken.value = imaginationtoken.innerHTML;

    var p1 = document.getElementById("p7");
    var a1 = document.getElementById("a7");
    var s1 = document.getElementById("s7");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    A1.value = AMOUNT;
    B1.value = SUM;

    var p2 = document.getElementById("p8");
    var a2 = document.getElementById("a8");
    var s2 = document.getElementById("s8");

    p2.innerHTML = PRICE * 1.3 + " |";
    a2.innerHTML = AMOUNT * 1.3 + " |";
    s2.innerHTML = SUM * 1.3 + " |";

    var C1 = document.getElementById("E3");
    var D1 = document.getElementById("E4");

    C1.value = AMOUNT;
    D1.value = SUM;
  }
}

function buyFour() {
  walletCheck();
  var check = document.getElementById("imaginationToken");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("E1");

    var ideaToken = document.getElementById("doobetterImagination").value;
    var boost = ideaToken + A1.value;
    var ideatoken = document.getElementById("doobetterimagination");
    ideatoken.innerHTML = boost;
    ideatoken.value = ideatoken.innerHTML;

    var B1 = document.getElementById("E2");

    var imaginationToken = document.getElementById("imaginationToken").value;
    var booster = imaginationToken - B1.value;
    var imaginationtoken = document.getElementById("imaginationtoken");
    imaginationtoken.innerHTML = booster;
    imaginationToken.value = imaginationtoken.innerHTML;

    var p1 = document.getElementById("p8");
    var a1 = document.getElementById("a8");
    var s1 = document.getElementById("s8");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    A1.value = AMOUNT;
    B1.value = SUM;

    var p2 = document.getElementById("p7");
    var a2 = document.getElementById("a7");
    var s2 = document.getElementById("s7");

    p2.innerHTML = PRICE - 0.03 + " |";
    a2.innerHTML = AMOUNT - 0.03 + " |";
    s2.innerHTML = SUM - 0.03 + " |";

    var C1 = document.getElementById("E3");
    var D1 = document.getElementById("E4");

    C1.value = AMOUNT;
    D1.value = SUM;
  }
}

// Ideas/REWARDS //
function sellBlock() {
  walletCheck();
  var check = document.getElementById("imaginationToken");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("R1");

    var ideaToken = document.getElementById("imaginationToken").value;
    var boost = ideaToken - A1.value;
    var ideatoken = document.getElementById("imaginationtoken");
    ideatoken.innerHTML = boost;
    ideatoken.value = ideatoken.innerHTML;

    var B1 = document.getElementById("R2");

    var imaginationToken = document.getElementById("rewardBlock").value;
    var booster = imaginationToken + B1.value;
    var imaginationtoken = document.getElementById("rewardblock");
    imaginationtoken.innerHTML = booster;
    imaginationToken.value = imaginationtoken.innerHTML;

    var p1 = document.getElementById("p10");
    var a1 = document.getElementById("a10");
    var s1 = document.getElementById("s10");

    var PRICES = ["0.001", ".002", "0.003", "0.004", "0.005"];
    var PRICE = PRICES[Math.floor(Math.random() * PRICES.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    A1.value = AMOUNT;
    B1.value = SUM;

    var p2 = document.getElementById("p11");
    var a2 = document.getElementById("a11");
    var s2 = document.getElementById("s11");

    p2.innerHTML = PRICE * 1.3 + " |";
    a2.innerHTML = AMOUNT * 1.3 + " |";
    s2.innerHTML = SUM * 1.3 + " |";

    var C1 = document.getElementById("R3");
    var D1 = document.getElementById("R4");

    C1.value = AMOUNT;
    D1.value = SUM;
  }
}

function buyBlock() {
  walletCheck();
  var check = document.getElementById("rewardBlock");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var A1 = document.getElementById("R1");

    var ideaToken = document.getElementById("imaginationToken").value;
    var boost = ideaToken + A1.value;
    var ideatoken = document.getElementById("imaginationtoken");
    ideatoken.innerHTML = boost;
    ideatoken.value = ideatoken.innerHTML;

    var B1 = document.getElementById("R2");

    var imaginationToken = document.getElementById("rewardBlock").value;
    var booster = imaginationToken - B1.value;
    var imaginationtoken = document.getElementById("rewardblock");
    imaginationtoken.innerHTML = booster;
    imaginationToken.value = imaginationtoken.innerHTML;

    var p1 = document.getElementById("p11");
    var a1 = document.getElementById("a11");
    var s1 = document.getElementById("s11");

    var PRICES = ["0.01", ".02", "0.03", "0.04", "0.005"];
    var PRICE = PRICES[Math.floor(Math.random() * PRICES.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    A1.value = AMOUNT;
    B1.value = SUM;

    var p2 = document.getElementById("p10");
    var a2 = document.getElementById("a10");
    var s2 = document.getElementById("s10");

    p2.innerHTML = PRICE - 0.003 + " |";
    a2.innerHTML = AMOUNT - 0.003 + " |";
    s2.innerHTML = SUM - 0.003 + " |";

    var C1 = document.getElementById("R3");
    var D1 = document.getElementById("R4");

    C1.value = AMOUNT;
    D1.value = SUM;
  }
}

function walletCheck() {
  var imaginationToken = document.getElementById("imaginationToken");
  var rewardToken = document.getElementById("rewardBlock");
  var eclipseToken = document.getElementById("eclipseImagination");
  var doobetterToken = document.getElementById("doobetterImagination");
  var gamerToken = document.getElementById("gamerImagination");

  var imaginationtoken = document.getElementById("imaginationtoken");
  var rewardtoken = document.getElementById("rewardblock");
  var eclipsetoken = document.getElementById("eclipseimagination");
  var doobettertoken = document.getElementById("doobetterimagination");
  var gamertoken = document.getElementById("gamerimagination");

  imaginationToken.value = imaginationtoken.innerHTML;
  rewardToken.value = rewardtoken.innerHTML;
  eclipseToken.value = eclipsetoken.innerHTML;
  doobetterToken.value = doobettertoken.innerHTML;
  gamerToken.value = gamertoken.innerHTML;

  if (imaginationToken.value == "0") {
    var sub = rewardtoken.innerHTML - imaginationtoken.innerHTML;
    document.getElementById("rewardblock").innerHTML = sub;
    document.getElementById("rewardBlock").value = sub;
  }
}
