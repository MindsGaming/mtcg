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
  var randomThing = slotItems[Math.floor(Math.random() * slotItems.length)];

  if (randomThing == highlight) {
    highlightME.className = "highlight";
    if (selectOne.title == "select") {
      selectOne.title = highlightME.innerHTML;
      selectOne.innerHTML = highlightME.innerHTML;
      spinME();
    } else {
      if (selectTwo.title == "select") {
        selectTwo.title = highlightME.innerHTML;
        selectTwo.innerHTML = highlightME.innerHTML;
        spinME();
      } else {
        if (selectThree.title == "select") {
          selectThree.title = highlightME.innerHTML;
          selectThree.innerHTML = highlightME.innerHTML;
          WINcheck();
        }
      }
    }
  } else {
    spinME();
  }
}

function WINcheck() {
  const selectOne = document.getElementById("ONE");
  const selectTwo = document.getElementById("TWO");
  const selectThree = document.getElementById("THREE");

  if (selectOne.title == selectTwo.title) {
    if (selectTwo.title == selectThree.title) {
      alert("WINNER");
      selectOne.innerHTML = "";
      selectTwo.innerHTML = "";
      selectThree.innerHTML = "";
      selectOne.title = "";
      selectTwo.title = "";
      selectThree.title = "";
    }
  } else {
    alert("Sorry Not A Winner");
    selectOne.innerHTML = "";
    selectTwo.innerHTML = "";
    selectThree.innerHTML = "";
    selectOne.title = "";
    selectTwo.title = "";
    selectThree.title = "";
  }
}
