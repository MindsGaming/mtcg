var price = [".090", "1.00", "2.00", "3.00", "4.00"];
var amount = "100.00";

function sellOne() {
  var p1 = document.getElementByID("p1");
  var a1 = document.getElementById("a1");
  var s1 = document.getElementById("s1");

  var PRICE = price[Math.floor(Math.random() * price.length)];
  var AMOUNT = amount[Math.floor(Math.random() * amount.length)];

  var SUM = PRICE * AMOUNT;

  p1.innerHTML = PRICE;
  a1.innerHTML = AMOUNT;
  s1.innerHTML = SUM;
}
