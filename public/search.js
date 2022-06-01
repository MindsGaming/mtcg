const DINOMONSTERATK = 101;
const DINOMONSTERDEF = 600;
const DINOMONSTERMANERGY = 3;

const DinoEggsATK = 0;
const DinoEggsDEF = 100;
const DinoEggsMANERGY = 0;

const FartGasATK = 2;
const FartGasDEF = 3;
const FartGasMANERGY = 0;

const AlienBeerATK = 5;
const AlienBeerDEF = 50;
const AlienBeerMANERGY = 1;

const APHRODITEATK = 0;
const APHODITEDEF = 0;
const APHODITEMANERGY = 6;


const MoonRabbitATK = 0;
const MoonRabbitDEF = 0;
const MoonRabbitMANERGY = 8;


const BirdsNestATK = 0;
const BirdsNestDEF = 50;
const BirdsNestMANERGY = 0;
      
      
const BullishFlyerATK = 195;
const BullishFlyerDEF = 300;
const BullishFlyerMANERGY = 8;


const FlyingWisdomATK =130;
const FlyingWisdomDEF = 500;
const FlyingWisdomMANERGY = 8;

const POPOLVUHATK = 735;
const 

const TheMayans = document.createElement("img");
TheMayans.src =
  "https://momintdev.blob.core.windows.net/uploads/ba5db749-5638-47bb-93f3-953b850c472e.jpeg";
TheMayans.title = "TheMayans";
TheMayans.className = "card";
const THEMAYANS = document.getElementById("TheMayans").appendChild(TheMayans);

const Mayflower = document.createElement("img");
Mayflower.src =
  "https://momintdev.blob.core.windows.net/uploads/ff1508f7-6c38-40a1-84ea-25ec9c97d1ba.jpeg";
Mayflower.title = "TheMayans";
Mayflower.className = "card";
const MAYFLOWER = document.getElementById("Mayflower").appendChild(Mayflower);

const Manergy = document.createElement("img");
Manergy.src =
  "https://momintdev.blob.core.windows.net/uploads/88dfb6d7-8cd0-43fb-9283-bb2fb6ca753d.jpeg";
Manergy.title = "Manergy";
Manergy.className = "card";
const MANERGY = document.getElementById("MANERGY").appendChild(Manergy);

const MAYDAY = document.createElement("img");
MAYDAY.src =
  "https://momintdev.blob.core.windows.net/uploads/756eccad-c783-47f5-8466-e842119a200e.jpeg";
MAYDAY.title = "Mayflower";
MAYDAY.className = "card";
const Mayday = document.getElementById("MAYDAY").appendChild(MAYDAY);

/// Card Tools

function hideBirds() {
  var BIRDS = document.getElementById("BIRDS");
  if (BIRDS.title == "Birds/Air") {
    BIRDS.className = "hide";
    BIRDS.title = "CLOSED";
  } else {
    BIRDS.className = "";
    BIRDS.title = "Birds/Air";
  }
}

function hideCulture() {
  var CULTURE = document.getElementById("CULTURE");
  if (CULTURE.title == "Art/Culture") {
    CULTURE.className = "hide";
    CULTURE.title = "CLOSED";
  } else {
    CULTURE.className = "";
    CULTURE.title = "Art/Culture";
  }
}

function hideMonsters() {
  var MONSTERS = document.getElementById("MONSTERS");
  if (MONSTERS.title == "Monsters") {
    MONSTERS.className = "hide";
    MONSTERS.title = "CLOSED";
  } else {
    MONSTERS.className = "";
    MONSTERS.title = "Monsters";
  }
}

function hideSupernatural() {
  var SUPERNATURAL = document.getElementById("SUPERNATURAL");
  if (SUPERNATURAL.title == "Supernatural") {
    SUPERNATURAL.className = "hide";
    SUPERNATURAL.title = "CLOSED";
  } else {
    SUPERNATURAL.className = "";
    SUPERNATURAL.title = "Supernatural";
  }
}

function hideAliens() {
  var ALIENS = document.getElementById("ALIENS");
  if (ALIENS.title == "Space/Aliens") {
    ALIENS.className = "hide";
    ALIENS.title = "CLOSED";
  } else {
    ALIENS.className = "";
    ALIENS.title = "Space/Aliens";
  }
}

function hideFood() {
  var FOOD = document.getElementById("FOOD");
  if (FOOD.title == "Food") {
    FOOD.className = "hide";
    FOOD.title = "CLOSED";
  } else {
    FOOD.className = "";
    FOOD.title = "Food";
  }
}

function hideManergy() {
  var MANERGYa = document.getElementById("MANERGYa");
  if (MANERGYa.title == "MANERGY") {
    MANERGYa.className = "hide";
    MANERGYa.title = "CLOSED";
  } else {
    MANERGYa.className = "";
    MANERGYa.title = "MANERGY";
  }
}

function hideMusic() {
  var MUSICa = document.getElementById("MUSICa");
  if (MUSICa.title == "Music") {
    MUSICa.className = "hide";
    MUSICa.title = "CLOSED";
  } else {
    MUSICa.className = "";
    MUSICa.title = "Music";
  }
}

function hideGaming() {
  var GAMINGa = document.getElementById("GAMINGa");
  if (GAMINGa.title == "Gaming") {
    GAMINGa.className = "hide";
    GAMINGa.title = "CLOSED";
  } else {
    GAMINGa.className = "";
    GAMINGa.title = "Gaming";
  }
}

function hideCreators() {
  var CREATORSa = document.getElementById("CREATORSa");
  if (CREATORSa.title == "Creators") {
    CREATORSa.className = "hide";
    CREATORSa.title = "CLOSED";
  } else {
    CREATORSa.className = "";
    CREATORSa.title = "Creators";
  }
}

///  Game Menu

function gameMenu() {
  var dropMenu = document.getElementById("dropMenu");

  if (dropMenu.title == "CLOSED") {
    dropMenu.className = "dropmenu";
    dropMenu.title = "MENU";
  } else {
    if (dropMenu.title == "MENU") {
      dropMenu.className = "hide";
      dropMenu.title = "CLOSED";
    }
  }
  var fetchRewards = document.getElementById("fetchRewards");
  var Mrewards = document.getElementById("minutes").innerHTML;
  var Srewards = document.getElementById("seconds").innerHTML;
  var Trewards = Mrewards + "." + Srewards;
  fetchRewards.innerHTML = Trewards;
}

function openGames() {
  alert("In Progress..");
}

///  Hide POPS

function checkMODE() {
  var checkMODEs = document.getElementById("games");

  if (checkMODEs.title == "GAMES") {
    var hiderewardpop = document.getElementById("rewardicon");
    var hideprofilepop = document.getElementById("profileicon");
    hiderewardpop.className = "hide";
    hideprofilepop.className = "hide";
  }
}
