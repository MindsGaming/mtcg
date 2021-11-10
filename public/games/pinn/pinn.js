function createPinn() {
  var tack = document.createElement("div");
  tack.className = "tack";
  tack.id = "tack" + 1;
  var TACK = document.getElementById("tack").appendChild(tack);

  var tackCount = document.getElementById("tackCount").value;
  var tackcount = tackCount + 1;
  document.getElementById("tackCount").value = tackcount;

   document.getElementById("total").innerHTML = tackcount;
  
  var countrewards = document.getElementByID("total");
  
  if (countrewards.innerHTML = "100"){
    var life = document.getElementByID("life");
    
  }

}
