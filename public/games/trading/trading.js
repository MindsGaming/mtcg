var trading = "0.00001";

function takeTour() {
  var hide = document.getElementById("m1");
  hide.classList.toggle("hide");
  var show = document.getElementById("m2");
  show.className = "messageBlock";
  var tour = document.getElementById("tour");
  tour.className = "touring";
}

function justPlay() {
  var hide = document.getElementById("tour");
  hide.classList.toggle("hide");
}

function openMenu() {
  var menutab = document.getElementById("menuTab");
  var openmenu = document.getElementById("imagineMenu");
  menutab.className = "hide";
  openmenu.className = "showMenu";
}
