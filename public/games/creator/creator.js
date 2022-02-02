        var div = document.createElement("img");
        div.src = "https://cdn.glitch.global/f23d0d76-dc88-4f4e-afe2-9bd56ac40b28/MTCGblank.jpg";
        div.style = "width: 40%; height: 70%; display:block;";
        document.getElementById("newcard").appendChild(div);
    
function background(){
  let inputVal = document.getElementById("url").value;
        var div = document.createElement("img");
        div.src = inputVal;
        div.className = "Mesh";
        document.getElementById("newcard").appendChild(div);
}