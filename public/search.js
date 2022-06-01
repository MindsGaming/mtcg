const zero = 0;

const DINOMONSTERstats = document.getElementById("DINOMONSTERstats");
const FartGasstats = document.getElementById("FartGasstats");

const newlayout = [DINOMONSTERstats, FartGasstats];

function byAttack() {
  const clearTITLE = document.getElementById("SEARCH");
  const mySearch = document.getElementById("mySearch")

  if (clearTITLE.title == "CLOSED") {
    clearTITLE.innerHTML = "ATTACK Value";
    clearTITLE.title = "SEARCH";
    clearTITLE.className = "album";

    mySearch.appendChild(POPOLVUH);
  } else {
    if (clearTITLE.title == "SEARCH") {
      clearTITLE.title = "CLOSED";
      clearTITLE.className = "hide";
    }
  }
}
