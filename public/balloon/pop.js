const earn = [1, 2, 3, 4, 5];

function check() {
  var sniffwidth = document.getElementById("balloon");
  var push = document.getElementById("BALLOON");
  var width = sniffwidth.width;
  push.value = width;

  var boost = earn[Math.floor(Math.random() * earn.length)];
  var pop = earn[Math.floor(Math.random() * earn.length)];

  var math = push.value + boost;
  var pushsniff = document.getElementById("BALLOON");
  pushsniff.value = math;

  sniffwidth.width = push.value;
  sniffwidth.height = push.value;

  if (pop == boost) {
    sniffwidth.src =
      "https://cdn.glitch.global/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28/POP.png";
  }
  else {
    var current = document.getElementById("POP");
    var boostpop = boost;
    var popmath = current.value + boost;
    var sniffpop = document.getElementById("POP");
    sniffpop.value = popmath;
    
    var pop
    
  }
}
