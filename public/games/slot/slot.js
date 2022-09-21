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
      startSlots();
    } else {
      sniffitems.value = "0";
    }
  }
}

function spinME() {
  const highlight = slotItems[Math.floor(Math.random() * slotItems.length)];
  const highlightME = document.getElementById(highlight);
  const selectOne = document.getElementById("ONE");
  const selectTwo = document.getElementById("TWO");
  const selectThree = document.getElementById("THREE");

  if (highlightME.title == highlightME.innerHTML) {
    highlightME.className = "highlight";
    highlightME.title == "HIGHLIGHTED";
    spinME();
  }

  if (highlightME.title == "HIGHLIGHTED") {
    highlightME.title = "SELECTED";

    if (selectOne.title == "select") {
      selectOne.innerHTML = highlightME.innerHTML;
      selectOne.innerHTML = highlightME.innerHTML;
    }
  }
}
