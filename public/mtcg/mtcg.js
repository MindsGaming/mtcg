DEALCARDS();

function DEALCARDS() {
  const DINOMONSTER = document.createElement("img");
  DINOMONSTER.src =
    "https://momintdev.blob.core.windows.net/uploads/a0f061e5-eebc-4d5e-a17f-c398d21f01ce.jpeg";
  DINOMONSTER.title = "DinoMonster";
  DINOMONSTER.className = "card";

  const DinoEggs = document.createElement("img");
  DinoEggs.src =
    "https://momintdev.blob.core.windows.net/uploads/425c38c9-6b34-4c35-bb17-b3bba649cfd4.jpeg";
  DinoEggs.title = "DinoEggs";
  DinoEggs.className = "card";

  const FartGas = document.createElement("img");
  FartGas.src =
    "https://momintdev.blob.core.windows.net/uploads/f0653389-45f9-4e05-a1da-88b38e4b8fb0.jpeg";
  FartGas.title = "FartGas";
  FartGas.className = "card";

  const AlienBeer = document.createElement("img");
  AlienBeer.src =
    "https://momintdev.blob.core.windows.net/uploads/13dced15-b376-4488-be53-fba2fb642914.jpeg";
  AlienBeer.title = "AlienBeer";
  AlienBeer.className = "card";

  const APHRODITE = document.createElement("img");
  APHRODITE.src =
    "https://momintdev.blob.core.windows.net/uploads/51819bca-ba1c-4ed2-a74d-2ac0dd1db9d2.jpeg";
  APHRODITE.title = "APHRODITE";
  APHRODITE.className = "card";

  const MoonRabbit = document.createElement("img");
  MoonRabbit.src =
    "https://momintdev.blob.core.windows.net/uploads/d109dbea-0b06-46ff-b4fc-2b0446e1ec6e.jpeg";
  MoonRabbit.title = "MoonRabbit";
  MoonRabbit.className = "card";

  const BirdsNest = document.createElement("img");
  BirdsNest.src =
    "https://momintdev.blob.core.windows.net/uploads/87911f7b-6ab0-42f9-9efe-11411277244e.jpeg";
  BirdsNest.title = "BirdsNest";
  BirdsNest.className = "card";

  const BullishFlyer = document.createElement("img");
  BullishFlyer.src =
    "https://momintdev.blob.core.windows.net/uploads/629ce241-4ba9-4e03-a109-7e65f84a9b90.jpeg";
  BullishFlyer.title = "BullishFlyer";
  BullishFlyer.className = "card";

  const FlyingWisdom = document.createElement("img");
  FlyingWisdom.src =
    "https://momintdev.blob.core.windows.net/uploads/4f7e62d3-d38c-4a00-a273-f8fcf46e676d.jpeg";
  FlyingWisdom.title = "FlyingWisdom";
  FlyingWisdom.className = "card";

  const POPOLVUH = document.createElement("img");
  POPOLVUH.src =
    "https://momintdev.blob.core.windows.net/uploads/7af2b13d-5da5-49d3-97cf-5625f6f62a5b.jpeg";
  POPOLVUH.title = "POPOLVUH";
  POPOLVUH.className = "card";

  const TheMayans = document.createElement("img");
  TheMayans.src =
    "https://momintdev.blob.core.windows.net/uploads/ba5db749-5638-47bb-93f3-953b850c472e.jpeg";
  TheMayans.title = "TheMayans";
  TheMayans.className = "card";

  const Mayflower = document.createElement("img");
  Mayflower.src =
    "https://momintdev.blob.core.windows.net/uploads/ff1508f7-6c38-40a1-84ea-25ec9c97d1ba.jpeg";
  Mayflower.title = "Mayflower";
  Mayflower.className = "card";

  const MAYDAY = document.createElement("img");
  MAYDAY.src =
    "https://momintdev.blob.core.windows.net/uploads/756eccad-c783-47f5-8466-e842119a200e.jpeg";
  MAYDAY.title = "Mayflower";
  MAYDAY.className = "card";

  const SheetMusic = document.createElement("img");
  SheetMusic.src =
    "https://momintdev.blob.core.windows.net/uploads/38e13978-41a6-443c-a7ac-4110d2e8776b.jpeg";
  SheetMusic.title = "SheetMusic";
  SheetMusic.className = "card";

  /* Card List */
  var CARDS = [
    FartGas,
    DinoEggs,
    DINOMONSTER,
    AlienBeer,
    APHRODITE,
    MoonRabbit,
    BirdsNest,
    BullishFlyer,
    FlyingWisdom,
    POPOLVUH,
    TheMayans,
    Mayflower,
    MAYDAY,
    SheetMusic,
  ];

  var inHand = document.getElementById("inHand");

  var getMANERGY = [
    "30",
    "10",
    "60",
    "90",
    "20",
    "15",
    "50",
    "40",
    "80",
    "100",
  ];

  var placeMANERGY = document.getElementById("MANERGY");
  if (placeMANERGY.value == "0") {
    var myMANERGY = getMANERGY[Math.floor(Math.random() * getMANERGY.length)];
    var relyMANERGY = document.getElementById("manergy");
    placeMANERGY.value = myMANERGY + placeMANERGY.value;
    relyMANERGY.innerHTML = myMANERGY;
  } else {
  }

  if (inHand.value == "5") {
  } else {
    var CARD1 = CARDS[Math.floor(Math.random() * CARDS.length)];
    var CARD2 = CARDS[Math.floor(Math.random() * CARDS.length)];
    var CARD3 = CARDS[Math.floor(Math.random() * CARDS.length)];
    var shuffle = [CARD1, CARD2, CARD3];

    var CARD = shuffle[Math.floor(Math.random() * shuffle.length)];

    var fortuneCARD = document.createElement("img");
    fortuneCARD.src = CARD.src;
    fortuneCARD.title = CARD.title;
    fortuneCARD.className = "card";
    fortuneCARD.addEventListener("click", STATS);
    var NEWCARD = document
      .getElementById("playerCards")
      .appendChild(fortuneCARD);

    var boost = 1;
    var current = inHand.value;
    var math = current + boost;
    inHand.value = math;
    DEALCARDS();
  }
  function STATS() {
    var MATH = document.getElementById("MATH");
    var playerMeter = document.getElementById("playerMeter");
    var playerTotal = document.getElementById("playerTotal");

    var MANERGY = document.getElementById("MANERGY");
    var manergy = document.getElementById("manergy");
    var cardMANERGY = fortuneCARD.title;
    cardMANERGY.id = cardMANERGY;
    var fetchSTATS = document.getElementById(cardMANERGY);

    if (myMANERGY < fetchSTATS.min) {
    } else {
      
      
      
      
      
      var subF = fetchSTATS.min;
      var subM = manergy.innerHTML;
      var mathM = subM - subF;
      manergy.innerHTML = mathM;
      MANERGY.value = mathM;

      var current = playerMeter.value;
      var add = fetchSTATS.low;
      var math = current + add;
      var total = math;
      playerTotal.innerHTML = total;
      var pushTotal = document.getElementById("playerTotal");
      playerMeter.value = pushTotal.innerHTML;
      fortuneCARD.removeEventListener("click", STATS);
    }
  }
}

/// METERS

function playerMeter() {
  var playerTotal = document.getElementById("playerTotal");
  var playerMeter = document.getElementById("playerMeter");

  playerTotal.innerHTML = playerMeter.value;
  playerTotal.title = playerMeter.value;
}
