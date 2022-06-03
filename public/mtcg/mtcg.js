/// CARDS

const dealCARDS = [
  "FartGas",
  "DinoEggs",
  "DINOMONSTER",
  "AlienBeer",
  "APHRODITE",
  "MoonRabbit",
  "BirdsNest",
  "BullishFlyer",
  "FlyingWisdom",
  "POPOLVUH",
  "TheMayans",
  "Manergy",
  "Mayflower",
  "MAYDAY",
  "SheetMusic"
];

/// METERS

function playerMeter() {
  var playerTotal = document.getElementById("playerTotal");
  var playerMeter = document.getElementById("playerMeter");

  playerTotal.innerHTML = playerMeter.value;
  playerTotal.title = playerMeter.value;
}
