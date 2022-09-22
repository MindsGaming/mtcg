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
      getItem.className = "slotitem";
      startSlots();
    } else {
      sniffitems.value = "0";
    }
  }
}

function spinME() {
  const highlight = slotItems[Math.floor(Math.random() * slotItems.length)];
  const bright = document.getElementById(highlight);
  const selectOne = document.getElementById("ONE");
  const selectTwo = document.getElementById("TWO");
  const selectThree = document.getElementById("THREE");

  if (selectOne.title == "select") {
    selectOne.title = bright.title;
    selectOne.innerHTML = bright.title;
    bright.className = "highlight";
    spinME();
  } else {
    if (selectTwo.title == "select") {
      selectTwo.title = bright.title;
      selectTwo.innerHTML = bright.title;
      bright.className = "highlight";
      spinME();
    } else {
      if (selectThree.title == "select") {
        selectThree.title = bright.title;
        selectThree.innerHTML = bright.title;
        bright.className = "highlight";
        var items = document.getElementById("ITEMS");
        items.value = "0";
        checkWIN();
      }
    }
  }
}

function checkWIN() {
  const selectOne = document.getElementById("ONE");
  const selectTwo = document.getElementById("TWO");
  const selectThree = document.getElementById("THREE");
  var items = document.getElementById("ITEMS");
  var boost = 1;
  var math = items.value + boost;
  var sniffitems = document.getElementById("ITEMS");
  sniffitems.value = math;
  var getItem = document.getElementById(math);

  if (items.value < 19) {
    if (getItem.title == "blank") {
      getItem.className = "slotitem";
      checkWIN();
    } else {
      if (selectOne.title == selectTwo.title) {
        if (selectTwo.title == selectThree.title) {
          selectOne.title = "select";
          selectTwo.title = "select";
          selectThree.title = "select";
          alert("YOU WIN");
        }
      } else {
        items.value = "0";
        selectOne.title = "select";
        selectTwo.title = "select";
        selectThree.title = "select";

        alert("Sorry Try Again");
      }
    }
  }
}
