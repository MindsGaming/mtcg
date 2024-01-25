function commands() {
  var fetchcommand = dreamInput.value;
  dreamsList.innerHTML = "";

  if (fetchcommand == "help") {
    dreamInput.value =
      "Welcome To The Game Terminal. You Can Enter Commands Like: help";
  }
}
