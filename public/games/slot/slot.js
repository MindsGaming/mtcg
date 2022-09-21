const slotItems = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
const slotNames = ["GOLD", "Silver", "7", "MTCG", "WAM", "Lucky", "Bust"];

function startSlots() {
  var items = document.getElementById("ITEMS");
  var boost = 1;
  var math = items.value + boost;
  var sniffitems = document.getElementById("ITEMS");
  sniffitems.value = math;
      var getItem = slotNames[Math.floor(Math.random() * slotNames.length)];

  if (items.value < 18) {
    
    if (getItem.title == "blank") {
      var nameItem = slotNames[Math.floor(Math.random() * slotNames.length)];
      getItem.title = nameItem;
      startSlots();
    }
  }
}
