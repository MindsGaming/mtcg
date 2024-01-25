function Rplaceholder() {
  if (dream.placeholder == "|") {
    dream.placeholder = "";
  } else {
    dream.placeholder = "|";
  }
}

function commands() {
  var fetchcommand = dreamInput.value;
  var fetchlogin = document.getElementById("fetchlogin");
  dreamsList.innerHTML = "";

  if (fetchcommand == "hello") {
    dreamInput.value = "I am not a chatbot, please enter a command.";
  } else {
    if (fetchcommand == "help") {
      dreamInput.value =
        "MTCG Game Terminal Is A Gamerfied Way To Earn Rewards! Commands: {'help', 'login','refresh','remix',...}";
    } else {
      if (fetchcommand == "login") {
        dreamInput.value = "Enter Your Wallet Reciver Adderess...";
      } else {
        if (fetchcommand == "refresh") {
          dreamInput.value = "";
          clearposts();
        } else {
          if (fetchcommand == "rewards") {
            dreamInput.value = "Coming Soon...";
          } else {
            if (fetchcommand == "remix") {
              var remix = document.getElementById("remix");
              remix.className = "remix";
              remix.src = "https://glitch.com/edit/#!/remix/mtcg";
              dreamInput.value = remix.outterHTMl;
            } else {
              if (dreamInput.pattern =".{42,43}"){
                
              }
              else{
              dreamInput.value = "Command Not Found :( type 'help' for help.";
              }
            }
          }}}}

function clearposts() {
  fetch("/clearDreams", {})
    .then((res) => res.json())
    .then((response) => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
}
