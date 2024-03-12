const watch = document.getElementById("watchDWMW");
function watchDWMW() {
  if (watch.title == "E1") {
    window.open("https://www.minds.com/embed/1510323962700107779", "_blank");
    watch.title = "E2";
    watch.innerHTML = "Eposide Two";
  } else {
    if (watch.title == "E2") {
      window.open(
        "https://gitlab.com/MindsGaming/dwmw/-/raw/main/Full%20Eposides/DWMW_ep_001_2_.mp4?ref_type=heads",
        "_blank"
      );
      watch.title = "E3";
      watch.innerHTML = "Eposide Three";
    } else {
      if (watch.title == "E3") {
        window.open(
          "https://www.minds.com/embed/1611926182259855376",
          "_blank"
        );
        watch.title = "E4";
        watch.innerHTML = "Eposide Four";
      } else {
        if (watch.title == "E4") {
          alert("coming Soon..");
        }
      }
    }
  }
}
function DWMWdonate() {
  window.open("https://www.mintme.com/token/DWMW/MINTME/trade", "_blank");
}

function joinshow() {
  window.open(
    "https://www.minds.com/group/1501695298248904715/latest",
    "_blank"
  );
}

function DWMWgit() {
  window.open("https://gitlab.com/MindsGaming/dwmw", "_blank");
}

function HOME() {
  window.open("/", "_self");
}

function InfinityChat() {
  var Chatbox = document.getElementById("chat-box");
  if (Chatbox.title == "chatbox") {
    var InfinityChat = document.getElementById("InfinityChat");
    Chatbox.className = "chat-box";
    InfinityChat.src =
      "https://opengpts-example-vz4y4ooboq-uc.a.run.app/?shared_id=42fd7e69-12d4-44df-8c92-9abfaccce072";
    Chatbox.title = "Chatting";
  } else {
    if (Chatbox.title == "Chatting") {
      var InfinityChat = document.getElementById("InfinityChat");
      Chatbox.className = "hide";
      InfinityChat.src =
        "https://opengpts-example-vz4y4ooboq-uc.a.run.app/?shared_id=42fd7e69-12d4-44df-8c92-9abfaccce072";
      Chatbox.title = "chatbox";
    }
  }
}

/* Creator Pages */

function Supportbobdubloon() {
  window.open(
    "https://www.mintme.com/token/bobdubbloon/MINTME/trade",
    "_blank"
  );
}

function creatorConnectbobdubbloon() {
  window.open("https://minds.com/bobdub", "_blank");
}

function SupportSatoriD() {
  window.open("https://www.mintme.com/token/SatoriD/MINTME/trade", "_blank");
}

function creatorConnectSatoriD() {
  window.open(
    "https://www.minds.com/group/604673111018713103/latest",
    "_blank"
  );
}
