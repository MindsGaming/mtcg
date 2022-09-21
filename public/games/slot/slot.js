const slotItems = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
const slotNames = ["GOLD", "Silver", "7", "MTCG", "WAM", "Lucky", "Bust"];

startSlots();

function startSlots() {
  var items = document.getElementById("ITEMS");
  var boost = 1;
  var math = items.value + boost;
  var sniffitems = document.getElementById("ITEMS");
  sniffitems.value = math;

  var getItem = document.getElementById(math);

  sniffitems.value = math;
  if (items.value < 19) {
    if (getItem.title == "blank") {
      var nameItem = slotNames[Math.floor(Math.random() * slotNames.length)];
      getItem.title = nameItem;
      getItem.innerHTML = nameItem;
      sniffitems.value = "0";
      startSlots();
    }
  }
}

function spinME() {
  var highlight = slotItems[Math.floor(Math.random() * slotItems.length)];
  var highlightME = document.getElementById("highlight");

  if (highlightME.title == highlightME.innerHTML) {
    highlightME.className = "highlight";
    highlightME.title == "HIGHLIGHTED";
  }

  if (highlightME.title == "HIGHLIGHTED") {
    highlightME.title = "SELECTED";

    var selectOne = document.getElementById("ONE");
    var selectTwo = document.getElementById("TWO");
    var selectThree = document.getElementById("THREE");

    if (selectOne.title == "select") {
      selectOne.innerHTML = highlightME.innerHTML;
            selectOne.innerHTML = highlightME.innerHTML;

    }
  }
}
