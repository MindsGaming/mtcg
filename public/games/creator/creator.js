function background() {
  let inputVal = document.getElementById("url").value;
 
  
  if(inputVal == ""){
  }else {
     var div = document.createElement("img");
  div.src = "/images/coins.png";
  div.style = "width: 40%; height: 70%; display:block; margin:3px; opacity:.8; background-image: url('/images/coins.png')";
  div.id = "MTCG";
  document.getElementById("MTCG").appendChild(div);
    
  }
}
