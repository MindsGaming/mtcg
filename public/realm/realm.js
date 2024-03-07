const sidebarRight = document.getElementById("sidebar-right");
const sliderButton = document.getElementById("slider");
const smile = document.getElementById("smile");

function slider() {
  if (sidebarRight.className == "sidebar-right") {
    sidebarRight.className = "hide";
    smile.innerHTML = sliderButton.innerHTML;
    smile.className = "slider-top";
    
  } else {
    if (sidebarRight.className == "hide") {
      sidebarRight.className = "sidebar-right";
      smile.innerHTML = "";
      smile.className = "";
    }
  }
}
