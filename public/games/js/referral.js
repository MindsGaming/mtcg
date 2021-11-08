const referral = document.getElementById("referral");
const userReferral = dreamsForm.elements["userReferral"];

const txt = "Referral";
function getReferral() {
  referral.classList.toggle("show");
}

function getuserReferral() {
  const data = {
    dream: userReferral.value
  };

  appendNewDream(userReferral.value);

  var minutesLabel = document.getElementById("minutes");

  minutesLabel.innerHTML = "5";
}
