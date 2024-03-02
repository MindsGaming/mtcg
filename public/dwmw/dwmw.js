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
        watch.innerHTML = "Coming Soon...";
      }
    }
  }
}

function DWMWdonate() {
  window.open("https://www.mintme.com/token/DWMW", "_blank");
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
