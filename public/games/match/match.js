var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
var item6 = document.getElementById("item6");
var item7 = document.getElementById("item7");
var item8 = document.getElementById("item8");
var item9 = document.getElementById("item9");

var items = ["rock", "bomb", "token"];
var create = [item1, item2, item3, item4, item5, item6, item7, item8, item9];

function match() {
  const random = items[Math.floor(Math.random() * items.length)];
  create.className = random;
  create.title = "flipped";
  
  
}
