var farm = document.ElementCreate("div");
farm.className = "block";
farm.id = currentBlocks;
var FARM = document.getElementById("farm").appendChild(farm);

var blocks = document.getElementById("blocks");

var id = 1;
var currentBlocks = blocks.value;
var total = currentBlocks + id;
document.getElementById("blocks").value = total;
