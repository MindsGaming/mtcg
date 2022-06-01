const zero = 0;

const DINOMONSTERstats = document.getElementById("DINOMONSTERstats");
const FartGasstats = document.getElementById("FartGasstats");

const newlayout = [DINOMONSTERstats, FartGasstats];

function byAttack() {
  var clearTITLE = document.getElementById("SEARCH");
  var clearAlbum = document.getElementById("BIRDS");
  var refreshAlbum = clearAlbum.innerHTML;
  
  if (clearTITLE.title == "Birds/Air") {
    clearAlbum.innerHTML = "";
    clearTITLE.innerHTML = "ATTACK Value";
    clearTITLE.title = "SEARCH";
    
    document.getElementById("BIRDS").appendChild(POPOLVUH);
  } 
  else {
    clearAlbum.innerHTML = refreshAlbum;
  }
}
