const MTCGmove = document.getElementById("mtcg");

MTCGmove.addEventListener("click", attackED);

function attackED() {
  MTCGmove.classList.toggle("card");
}
