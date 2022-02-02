function background() {
  let inputVal = document.getElementById("url").value;
 
  
  if(inputVal == ""){
  }else {
     var div = document.createElement("img");
  div.src = inputVal;
  div.style = "width: 40%; height: 70%; display:block; margin:3px; opacity:.8;";
  div.id = "MTCG";
  document.getElementById("newcard").appendChild(div);

  var div2 = document.createElement("img");
  div2.src =
    "https://cdn.glitch.global/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28/MTCGblank.jpg";
  div2.style = "width: 40%; height: 70%; display:block;";
  div2.id = "background";
  document.getElementById("MTCG").appendChild(div2);
  
    
  }
}
