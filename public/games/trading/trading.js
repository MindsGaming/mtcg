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
function openMenu() {
  var openmenu = document.getElementById("imagineMenu");
  openmenu.classList.toggle("showMenu");
}

function walletMenu() {
  var wallet = document.getElementById("walletTab");
  wallet.className = "trading";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var hide = document.getElementById("home");
  hide.className = "hide";
  var create = document.getElementById("createTab");
  create.className = "hide";
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  openMenu();
}

function tradingMenu() {
  var trading = document.getElementById("tradingTab");
  trading.className = "trading";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var hide = document.getElementById("home");
  hide.className = "hide";
  var create = document.getElementById("createTab");
  create.className = "hide";
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  gamerImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  gamerImagine.className = "hide";
  openMenu();
}

function logoTick() {
  var home = document.getElementById("home");
  home.className = "trading";
  var wallet = document.getElementById("walletTab");
  wallet.className = "hide";
  var trading = document.getElementById("tradingTab");
  trading.className = "hide";
  var imagineTab = document.getElementById("createTab");
  imagineTab.className = "hide";
  var usersImagine = document.getElementById("usersImagine");
  usersImagine.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  gamerImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  gamerImagine.className = "hide";
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
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  gamerImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  gamerImagine.className = "hide";
  openMenu();
}

function creating() {
  var create = document.getElementById("imagineName").value;
  var intro = document.getElementById("imagineIntro").value;
  var userstoken = document.getElementById("usersToken");
  userstoken.innerHTML = create + " Idea:";
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
  yourimagination.innerHTML = "100000";

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
  var button = document.getElementById("CREATE");
  button.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  gamerImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  gamerImagine.className = "hide";
  openMenu();
}

var price = [
  "1.00",
  "2.00",
  "3.00",
  "4.00",
  "5.00",
  "6.00",
  "7.00",
  "8.00",
  "9.00",
  "10.00",
  "11.00",
  "12.00",
  "13.00",
  "14.00"
];
var amount = [
  "100.00",
  "200.00",
  "300.00",
  "400.00",
  "500.00",
  "600.00",
  "1000"
];

function sellOne() {
  var check = document.getElementById("yourimagination");

  if (check.innerHTML == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var p1 = document.getElementById("p1");
    var a1 = document.getElementById("a1");
    var s1 = document.getElementById("s1");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    var ideaToken = document.getElementById("yourImagination").value;
    var boost = ideaToken - AMOUNT;
    var ideatoken = document.getElementById("yourimagination");
    ideatoken.innerHTML = boost;
    document.getElementById("yourImagination").value = ideatoken.innerHTML;

    var imaginationToken = document.getElementById("imaginationToken").value;
    var booster = imaginationToken + SUM;
    var imaginationtoken = document.getElementById("imaginationtoken");
    imaginationtoken.innerHTML = booster;
    document.getElementById("imaginationToken").value =
      imaginationtoken.innerHTML;

    var BUYprice = PRICE * 1.5;
    var BUYamount = AMOUNT * 1.5;
    var BUYsum = SUM * 1.5;
    var p2 = document.getElementById("p2");
    var a2 = document.getElementById("a2");
    var s3 = document.getElementById("s2");

    p2.innerHTML = BUYprice + " |";
    a2.innerHTML = BUYamount + " |";
    s3.innerHTML = BUYsum + " |";

    walletCheck();
  }
  walletCheck();
}

function buyOne() {
  var check = document.getElementById("imaginationToken");

  if (check.value == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var p1 = document.getElementById("p2");
    var a1 = document.getElementById("a2");
    var s1 = document.getElementById("s2");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    var ideaToken = document.getElementById("yourImagination").value;
    var boost = ideaToken + AMOUNT;
    var ideatoken = document.getElementById("yourimagination");
    ideatoken.innerHTML = boost;
    document.getElementById("yourImagination").value = ideatoken.innerHTML;

    var imaginationToken = document.getElementById("imaginationToken").value;
    var booster = imaginationToken - SUM;
    var imaginationtoken = document.getElementById("imaginationtoken");
    imaginationtoken.innerHTML = booster;
    document.getElementById("imaginationToken").value =
      imaginationtoken.innerHTML;

    var BUYprice = PRICE % 1.3;
    var BUYamount = AMOUNT % 1.5;
    var BUYsum = SUM % 1.5;
    var p2 = document.getElementById("p1");
    var a2 = document.getElementById("a1");
    var s3 = document.getElementById("s1");

    p2.innerHTML = BUYprice + " |";
    a2.innerHTML = BUYamount + " |";
    s3.innerHTML = BUYsum + " |";

    walletCheck();
  }
  walletCheck;
}

function walletCheck() {
  var ideaToken = document.getElementById("yourImagination");
  var ideatoken = document.getElementById("yourimagination");
  var imaginationToken = document.getElementById("imaginationToken");
  var imaginationtoken = document.getElementById("imaginationtoken");

  ideatoken.innerHTML = ideaToken.value;
  imaginationtoken.innerHTML = imaginationToken.value;
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
  var button = document.getElementById("CREATE");
  button.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "userpage";
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
  var button = document.getElementById("CREATE");
  button.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "userpage";
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
  var button = document.getElementById("CREATE");
  button.className = "hide";
  var gamerImagine = document.getElementById("gamerImagine");
  gamerImagine.className = "hide";
  var eclipseImagine = document.getElementById("eclipseImagine");
  eclipseImagine.className = "hide";
  var doobetterImagine = document.getElementById("doobetterImagine");
  doobetterImagine.className = "userpage";
}

function sellTwo() {
  var check = document.getElementById("gamerimagination");

  if (check.innerHTML == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var p1 = document.getElementById("p3");
    var a1 = document.getElementById("a3");
    var s1 = document.getElementById("s3");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    var ideaToken = document.getElementById("gamerImagination").value;
    var boost = ideaToken - AMOUNT;
    var ideatoken = document.getElementById("gamerimagination");
    ideatoken.innerHTML = boost;
    document.getElementById("gamerImagination").value = ideatoken.innerHTML;

    var imaginationToken = document.getElementById("gamerToken").value;
    var booster = imaginationToken + SUM;
    var imaginationtoken = document.getElementById("gamertoken");
    imaginationtoken.innerHTML = booster;
    document.getElementById("gamerToken").value = imaginationtoken.innerHTML;

    var BUYprice = PRICE * 1.5;
    var BUYamount = AMOUNT * 1.5;
    var BUYsum = SUM * 1.5;
    var p2 = document.getElementById("p4");
    var a2 = document.getElementById("a4");
    var s3 = document.getElementById("s4");

    p2.innerHTML = BUYprice + " |";
    a2.innerHTML = BUYamount + " |";
    s3.innerHTML = BUYsum + " |";

    walletCheck();
  }
  walletCheck();
}

function buyTwo() {
  var check = document.getElementById("gamerimagination");

  if (check.innerHTML == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var p1 = document.getElementById("p4");
    var a1 = document.getElementById("a4");
    var s1 = document.getElementById("s4");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    var ideaToken = document.getElementById("gamerImagination").value;
    var boost = ideaToken - AMOUNT;
    var ideatoken = document.getElementById("gamerimagination");
    ideatoken.innerHTML = boost;
    document.getElementById("yourImagination").value = ideatoken.innerHTML;

    var imaginationToken = document.getElementById("gamerToken").value;
    var booster = imaginationToken + SUM;
    var imaginationtoken = document.getElementById("gamertoken");
    imaginationtoken.innerHTML = booster;
    document.getElementById("gamerToken").value = imaginationtoken.innerHTML;

    var BUYprice = PRICE % 1.5;
    var BUYamount = AMOUNT % 1.5;
    var BUYsum = SUM % 1.5;
    var p2 = document.getElementById("p3");
    var a2 = document.getElementById("a3");
    var s3 = document.getElementById("s3");

    p2.innerHTML = BUYprice + " |";
    a2.innerHTML = BUYamount + " |";
    s3.innerHTML = BUYsum + " |";

    walletCheck();
  }
  walletCheck();
}

function sellThree() {
  var check = document.getElementById("doobetterimagination");

  if (check.innerHTML == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var p1 = document.getElementById("p5");
    var a1 = document.getElementById("a5");
    var s1 = document.getElementById("s5");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    var ideaToken = document.getElementById("doobetterImagination").value;
    var boost = ideaToken - AMOUNT;
    var ideatoken = document.getElementById("doobetterimagination");
    ideatoken.innerHTML = boost;
    document.getElementById("doobetterImagination").value = ideatoken.innerHTML;

    var imaginationToken = document.getElementById("dobetterToken").value;
    var booster = imaginationToken + SUM;
    var imaginationtoken = document.getElementById("doobettertoken");
    imaginationtoken.innerHTML = booster;
    document.getElementById("doobetterToken").value =
      imaginationtoken.innerHTML;

    var BUYprice = PRICE * 1.5;
    var BUYamount = AMOUNT * 1.5;
    var BUYsum = SUM * 1.5;
    var p2 = document.getElementById("p6");
    var a2 = document.getElementById("a6");
    var s3 = document.getElementById("s6");

    p2.innerHTML = BUYprice + " |";
    a2.innerHTML = BUYamount + " |";
    s3.innerHTML = BUYsum + " |";

    walletCheck();
  }
  walletCheck();
}

function buyThree() {
  var check = document.getElementById("doobetterimagination");

  if (check.innerHTML == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var p1 = document.getElementById("p6");
    var a1 = document.getElementById("a6");
    var s1 = document.getElementById("s6");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    var ideaToken = document.getElementById("doobetterImagination").value;
    var boost = ideaToken - AMOUNT;
    var ideatoken = document.getElementById("doobetterimagination");
    ideatoken.innerHTML = boost;
    document.getElementById("doobetterImagination").value = ideatoken.innerHTML;

    var imaginationToken = document.getElementById("dobetterToken").value;
    var booster = imaginationToken + SUM;
    var imaginationtoken = document.getElementById("dobettertoken");
    imaginationtoken.innerHTML = booster;
    document.getElementById("doobetterToken").value =
      imaginationtoken.innerHTML;

    var BUYprice = PRICE % 1.5;
    var BUYamount = AMOUNT % 1.5;
    var BUYsum = SUM % 1.5;
    var p2 = document.getElementById("p5");
    var a2 = document.getElementById("a5");
    var s3 = document.getElementById("s5");

    p2.innerHTML = BUYprice + " |";
    a2.innerHTML = BUYamount + " |";
    s3.innerHTML = BUYsum + " |";

    walletCheck();
  }
  walletCheck();
}

function sellFour() {
  var check = document.getElementById("eclipseimagination");

  if (check.innerHTML == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var p1 = document.getElementById("p7");
    var a1 = document.getElementById("a7");
    var s1 = document.getElementById("s7");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    var ideaToken = document.getElementById("eclipseImagination").value;
    var boost = ideaToken - AMOUNT;
    var ideatoken = document.getElementById("eclipseimagination");
    ideatoken.innerHTML = boost;
    document.getElementById("eclipseImagination").value = ideatoken.innerHTML;

    var imaginationToken = document.getElementById("eclipseToken").value;
    var booster = imaginationToken + SUM;
    var imaginationtoken = document.getElementById("eclipsetoken");
    imaginationtoken.innerHTML = booster;
    document.getElementById("eclipseToken").value = imaginationtoken.innerHTML;

    var BUYprice = PRICE * 1.5;
    var BUYamount = AMOUNT * 1.5;
    var BUYsum = SUM * 1.5;
    var p2 = document.getElementById("p8");
    var a2 = document.getElementById("a8");
    var s3 = document.getElementById("s8");

    p2.innerHTML = BUYprice + " |";
    a2.innerHTML = BUYamount + " |";
    s3.innerHTML = BUYsum + " |";

    walletCheck();
  }
  walletCheck();
}

function buyFour() {
  var check = document.getElementById("eclipseimagination");

  if (check.innerHTML == "0") {
    alert("Not Enough, Try Other Trades Or Cashout");
  } else {
    var p1 = document.getElementById("p8");
    var a1 = document.getElementById("a8");
    var s1 = document.getElementById("s8");

    var PRICE = price[Math.floor(Math.random() * price.length)];
    var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

    var SUM = PRICE * AMOUNT;
    p1.innerHTML = PRICE + " |";
    a1.innerHTML = AMOUNT + " |";
    s1.innerHTML = SUM + " |";

    var ideaToken = document.getElementById("eclipseImagination").value;
    var boost = ideaToken - AMOUNT;
    var ideatoken = document.getElementById("eclipseimagination");
    ideatoken.innerHTML = boost;
    document.getElementById("eclipseImagination").value = ideatoken.innerHTML;

    var imaginationToken = document.getElementById("eclipse").value;
    var booster = imaginationToken + SUM;
    var imaginationtoken = document.getElementById("eclipsetoken");
    imaginationtoken.innerHTML = booster;
    document.getElementById("eclipseToken").value = imaginationtoken.innerHTML;

    var BUYprice = PRICE % 1.5;
    var BUYamount = AMOUNT % 1.5;
    var BUYsum = SUM % 1.5;
    var p2 = document.getElementById("p9");
    var a2 = document.getElementById("a9");
    var s3 = document.getElementById("s9");

    p2.innerHTML = BUYprice + " |";
    a2.innerHTML = BUYamount + " |";
    s3.innerHTML = BUYsum + " |";

    walletCheck();
  }
  walletCheck();
}
