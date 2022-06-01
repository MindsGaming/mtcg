const DINOMONSTER = document.createElement("img");
DINOMONSTER.src =
  "https://momintdev.blob.core.windows.net/uploads/a0f061e5-eebc-4d5e-a17f-c398d21f01ce.jpeg";
DINOMONSTER.title = "DinoMonster";
DINOMONSTER.className = "card";
const dinomonster = document
  .getElementById("DINOMONSTER")
  .appendChild(DINOMONSTER);

const DinoEggs = document.createElement("img");
DinoEggs.src =
  "https://momintdev.blob.core.windows.net/uploads/425c38c9-6b34-4c35-bb17-b3bba649cfd4.jpeg";
DinoEggs.title = "DinoEggs";
DinoEggs.className = "card";
const DINOEGGS = document.getElementById("DinoEggs").appendChild(DinoEggs);

const FartGas = document.createElement("img");
FartGas.src =
  "https://momintdev.blob.core.windows.net/uploads/f0653389-45f9-4e05-a1da-88b38e4b8fb0.jpeg";
FartGas.title = "FartGas";
FartGas.className = "card";
const FARTGAS = document.getElementById("FartGas").appendChild(FartGas);

const AlienBeer = document.createElement("img");
AlienBeer.src =
  "https://momintdev.blob.core.windows.net/uploads/13dced15-b376-4488-be53-fba2fb642914.jpeg";
AlienBeer.title = "AlienBeer";
AlienBeer.className = "card";
const ALIENBEER = document.getElementById("AlienBeer").appendChild(AlienBeer);

const APHRODITE = document.createElement("img");
APHRODITE.src =
  "https://momintdev.blob.core.windows.net/uploads/51819bca-ba1c-4ed2-a74d-2ac0dd1db9d2.jpeg";
APHRODITE.title = "APHRODITE";
APHRODITE.className = "card";
const Aphroite = document.getElementById("Aphrodite").appendChild(APHRODITE);

const MoonRabbit = document.createElement("img");
MoonRabbit.src =
  "https://momintdev.blob.core.windows.net/uploads/d109dbea-0b06-46ff-b4fc-2b0446e1ec6e.jpeg";
MoonRabbit.title = "MoonRabbit";
MoonRabbit.className = "card";
const MOONRABBIT = document
  .getElementById("MoonRabbit")
  .appendChild(MoonRabbit);

const BirdsNest = document.createElement("img");
BirdsNest.src =
  "https://momintdev.blob.core.windows.net/uploads/87911f7b-6ab0-42f9-9efe-11411277244e.jpeg";
BirdsNest.title = "BirdsNest";
BirdsNest.className = "card";
const BIRDSNEST = document.getElementById("BirdsNest").appendChild(BirdsNest);

const BullishFlyer = document.createElement("img");
BullishFlyer.src =
  "https://momintdev.blob.core.windows.net/uploads/629ce241-4ba9-4e03-a109-7e65f84a9b90.jpeg";
BullishFlyer.title = "BullishFlyer";
BullishFlyer.className = "card";
const BULLISHFLYER = document
  .getElementById("BullishFlyer")
  .appendChild(BullishFlyer);

const FlyingWisdom = document.createElement("img");
FlyingWisdom.src =
  "https://momintdev.blob.core.windows.net/uploads/4f7e62d3-d38c-4a00-a273-f8fcf46e676d.jpeg";
FlyingWisdom.title = "FlyingWisdom";
FlyingWisdom.className = "card";
const FLYINGWISDOM = document
  .getElementById("FlyingWisdom")
  .appendChild(FlyingWisdom);

const POPOLVUH = document.createElement("img");
POPOLVUH.src =
  "https://momintdev.blob.core.windows.net/uploads/7af2b13d-5da5-49d3-97cf-5625f6f62a5b.jpeg";
POPOLVUH.title = "POPOLVUH";
POPOLVUH.className = "card";
const popolvuh = document.getElementById("POPOLVUH").appendChild(POPOLVUH);

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
