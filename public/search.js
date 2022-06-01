const zero = 0;

const DINOMONSTERstats = document.getElementById("DINOMONSTERstats");
const FartGasstats = document.getElementById("FartGasstats");

function byAttack() {
  const clearTITLE = document.getElementById("SEARCH");

  if (clearTITLE.className == "hide") {
    clearTITLE.className = "album";
    GETATTACKS();
  } else {
    clearTITLE.className = "hide";
  }
}

function GETATTACKS() {
  document.getElementById("myResults").appendChild(POPOLVUH);
    document.getElementById("myResults").appendChild(Mayflower);

}
