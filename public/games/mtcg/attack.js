function attacKED() {
  const attaker = document.addEventListener("click", attacKED);

  if (attaker) {
    // Attach an event handler to the document
    const random = document.getElementsByTagName("card");
    var create = document.createElement("card");
    create.id = random.id;
    var Create = document.getElementById("attacked").appendChild(create);
  }
}
