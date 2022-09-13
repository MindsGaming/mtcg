const earn = ["1", "2", "3", "4", "5"];

function check() {
  var sniffwidth = document.getElementById("balloon");
  var push = document.getElementById("BALLOON");
  var width = sniffwidth.width;
  push.value = width;

  var boost = earn[Math.floor(Math.random() * earn.length)];
  var pop = earn[Math.floor(Math.random() * earn.length)];

  var math = boost + push.value;
  sniffwidth.width = math;
  sniffwidth.height = math;
  var pushsniff = document.getElementById("BALLOON");
  pushsniff.value = math;

  alert(math);
}
