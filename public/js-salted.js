function jsSalted() {
  let key = dreamInput.value;
  if (key === "") {
    // Handle the case when the key is empty
  } else {
    let phase = btoa(key);
    let phaseKeystring = phase.replace(/=/g, "");
    let saltLength = phaseKeystring.length;
    let warpSalt = "$";
    for (let i = 0; i < saltLength; i++) {
      warpSalt += String.fromCharCode(phaseKeystring.charCodeAt(i) + 1); // Generate the warpSalt based on the modified phaseKeystring
    }
    let salted = "";
    for (let i = 0; i < saltLength; i++) {
      let char = key.charAt(i);
      salted += char + " " + warpSalt.charAt(i) + " ";
      if ((i + 1) % 8 === 0) {
        salted += " " + warpSalt.charAt(i) + " ";
      }
    }
    if (userAlert.innerHTML == "Login") {
      dreamInput.value = salted;
    } else {
      dreamInput.value = salted;
    }
  }
}

function jsUnsalted() {
  let salted = dreamInput.value;
  let unsalted = ""; // Initialize the unsalted key
  let saltedArray = salted.split(" "); // Split the salted key into an array
  for (let i = 0; i < saltedArray.length; i += 3) {
    unsalted += saltedArray[i]; // Construct the unsalted key by removing spaces from the salted key
  }
  let warpSalt = "$"; // Initialize the warpSalt
  for (let i = 0; i < unsalted.length; i++) {
    warpSalt += String.fromCharCode(unsalted.charCodeAt(i) - 1); // Generate the warpSalt based on the unsalted key
  }
  let decoded = ""; // Initialize the decoded value
  try {
    decoded = atob(warpSalt); // Decode the original input value from the warpSalt
  } catch (error) {
    userAlert.innerHTML = "OOPS :9(";
  }
}
