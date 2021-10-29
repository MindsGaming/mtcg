/* PlayDeck */
var playdeck = document.createElement("img");
playdeck.src =
  "https://lh3.googleusercontent.com/wXCSrw63MDFpFOYtqFHaIyKwYaQbBU4dMln5PZKKpcmQajwbiHMPGRepko1FSzeGbbButgpi8PNiTppf5eWm3KHsVfuFEP9D-q71WPg=w301";
playdeck.style = "position:fixed; bottom: 0;right:0; width:120px";
playdeck.title = "PlayDeck";
playdeck.id = "PlayedDeck";
var PlayDeck = document.getElementById("playdeck").appendChild(playdeck);

/* id crerator */

function createID() {
  var MTCGid = "mtcg";
  var DooBetterid = "doobetter";
  var StarShatterid = "starshatter";
  var Lokayaid = "lokaya";
  var GameTestPlayid = "gametestplay";
  var Cagedid = "caged";
  var Yorizzoid = "yorizzo";
  var Eclipseid = "eclipse";
  var Pajuniorid = "pajunior";
  var AlienShipid = "alienship";
  var InvaderGamingid = "invadergaming";
  var Grockid = "grock";
  var ASSASSINid = "assassin";
  var Chargedid = "charged";
  var FreedomFighterVictorid = "freedomfightervictor";
  var ChristNatid = "christnat";
  var ChrisDooGoodid = "chrisdoogood";
  var ThrifteGamingid = "thriftegaming";
  var SatoriDid = "satorid";
  var LuCoinid = "lucoin";
  var Prettyid = "pretty";
  var NOIDid = "noid";
  var TETNid = "tetn";
  var PINNid = "pinn";
  var JesusToken = "jesustoken";

  var Selectid = [
    MTCGid,
    DooBetterid,
    StarShatterid,
    Lokayaid,
    GameTestPlayid,
    Cagedid,
    Yorizzoid,
    Eclipseid,
    Pajuniorid,
    AlienShipid,
    InvaderGamingid,
    Grockid,
    ASSASSINid,
    Chargedid,
    FreedomFighterVictorid,
    ChristNatid,
    ChrisDooGoodid,
    ThrifteGamingid,
    SatoriDid,
    LuCoinid,
    Prettyid,
    NOIDid,
    TETNid,
    PINNid
  ];

  const random = Selectid[Math.floor(Math.random() * Selectid.length)];
  var create = document.createElement("card");
  create.id = random;
  var Create = document.getElementById("create").appendChild(create);

  if (create.id == "mtcg") {
    /* MTCG */
    const mtcg = document.createElement("img");
    mtcg.src =
      "https://lh3.googleusercontent.com/cLnkBaMVrYBjYX-xpVUdk4GThGc0JEvOrHKWmPFsPtsa-5zMd3wpU3lAQh_fTfDue1nGhaPLyqrEDEdoYIoeCDGtIrU5ngZ7RNUz7Q";
    mtcg.width = "120";
    mtcg.title = "MTCG";
    mtcg.id = "MTCG";
    mtcg.style = "cursor:pointer";
    var MTCG = document.getElementById("mtcg").appendChild(mtcg);
  }
  if (create.id == "doobetter") {
    /* DooBetter */
    const doobetter = document.createElement("img");
    doobetter.src =
      "https://lh3.googleusercontent.com/OhMKHby2FsaHEPrrYfI6U3OjSckqycY8UVMRNLeLgxZxQkvCFJnV2nMpFf0o4pCKBK-QPED4Z-1RacuFtrGnJy6_HUiIxOPqGYX8=w301";
    doobetter.width = "120";
    doobetter.title = "DooBetter";
    doobetter.id = "DooBetter";
    doobetter.style = "cursor: pointer";
    var DooBetter = document.getElementById("doobetter").appendChild(doobetter);
  }
  if (create.id == "starshatter") {
    /* StarShatter */
    const starshatter = document.createElement("img");
    starshatter.src =
      "https://lh3.googleusercontent.com/8cCsKn7ayobQ7gS2uIadh-UkNGLiAe_UimRtYFkheZDiDpiNNyvZSADBZaMWvA13syAB3Aw5NnFE34rTr0aP5ILU92nisT8z4EISA7A=w301";
    starshatter.width = "120";
    starshatter.title = "StarShatter";
    starshatter.id = "StarShatter";
    starshatter.style = "cursor: pointer";
    var StarShatter = document
      .getElementById("starshatter")
      .appendChild(starshatter);
  }

  if (create.id == "lokaya") {
    /* Lokaya */
    const lokaya = document.createElement("img");
    lokaya.src =
      "https://lh3.googleusercontent.com/COU6psI3QgRoL_7pWfmEG0lz-pSvR7moF-unVNJgYnbqkeZCkYOIu3GhcQJr1DXdjC47eIsLOFUrzhAqZBm20UyjqVscEG5Jh2DlcFs=w301";
    lokaya.width = "120";
    lokaya.title = "Lokaya";
    lokaya.id = "Lokaya";
    lokaya.style = "cursor: pointer";
    var Lokaya = document.getElementById("lokaya").appendChild(lokaya);
  }

  if (create.id == "gametestplay") {
    /* GameTestPlay */
    const gametestplay = document.createElement("img");
    gametestplay.src =
      "https://lh3.googleusercontent.com/Urc29PlSBHGs5UKgA1nqYn8uRG5TU1rmuzDC2Gtf6gAIjVQvLelab5Mm-cMUDHUO5y4zlYUKkLNn5NXkpa6vIMGkaoZj_RVgxhCyPw=w301";
    gametestplay.width = "120";
    gametestplay.title = "GameTestPlay";
    gametestplay.id = "GameTestPlay";
    gametestplay.style = "cursor:pointer";
    var GameTestPlay = document
      .getElementById("gametestplay")
      .appendChild(gametestplay);
  }

  if (create.id == "ottman") {
    /* Ottman */
    const ottman = document.createElement("img");
    ottman.src =
      "https://lh3.googleusercontent.com/bqmXxNzkaAvgFZmck_3EQXsqbOwwU2WnUHxsP3mWahIejxqKs7yeyy4oSurP7iARrKQQ1w0KtRKmOaS3I3Qo1eYy17L5IQlrLThd6Q=w301";
    ottman.width = "120";
    ottman.title = "Ottman";
    ottman.id = "Otmman";
    ottman.style = "cursor: pointer";
    var Ottman = document.getElementById("ottman").appendChild(ottman);
  }

  if (create.id == "caged") {
    /* Caged */
    const caged = document.createElement("img");
    caged.src =
      "https://lh3.googleusercontent.com/-NZ9O78X0ifWlFYBKhFfexxFoBlZBFhT0Tk9htwfcUUkabLVsgajmwdQ82TB7Ay5YZvpv-6elpepQkXMkmPc6rfI3JGEUcWMQan0=w301";
    caged.width = "120";
    caged.title = "Caged";
    caged.id = "Caged";
    caged.style = "cursor: pointer";
    var Caged = document.getElementById("caged").appendChild(caged);
  }

  if (create.id == "yorizzo") {
    /* Yorizzo */
    const yorizzo = document.createElement("img");
    yorizzo.src =
      "https://lh3.googleusercontent.com/VuE_B1zzCZRdnFqJOu-Ct-bmMquTEjk3vikgwKN4JDwa8gtvQgexKV9O9o2mIImjzoPZmRNhX74BOyA__MHzYKH7aun8q622k_IU=w301";
    yorizzo.width = "120";
    yorizzo.title = "YoRizzo";
    yorizzo.id = "YoRizzo";
    yorizzo.style = "cursor: pointer";
    var Yorizzo = document.getElementById("yorizzo").appendChild(yorizzo);
  }

  if (create.id == "bndr") {
    /* BNDR */
    const bndr = document.createElement("img");
    bndr.src =
      "https://lh3.googleusercontent.com/KD552s13stlopDhTmYVb6Dm1vgdelMCclR8uQ213hM2n301PhIWGXIL2ABON5FCfrIu_lmu_svX0kJ9AYjLXNtYI6prGNXcmhSzIUA=w301";
    bndr.width = "120";
    bndr.title = "BNDR";
    bndr.id = "BNDR";
    bndr.style = "cursor: pointer";
    var BNDR = document.getElementById("bndr").appendChild(bndr);
  }
  if (create.id == "eclipse") {
    /* Eclipse */
    const eclipse = document.createElement("img");
    eclipse.src =
      "https://lh3.googleusercontent.com/j1IAftNxpUw8feUCBCSIR7GHGyCCzvfyAYuxlXj8il6ClYA10FUnDsFKFxvXp5VkPtsE84fpjgnpXVW1a1CquiIjLQw1yEagq3kO=w301";
    eclipse.width = "120";
    eclipse.title = "Eclipse";
    eclipse.id = "Eclipse";
    eclipse.style = "cursor: pointer";
    var Eclipse = document.getElementById("eclipse").appendChild(eclipse);
  }

  if (create.id == "pinn") {
    /* PINN */
    const pinn = document.createElement("img");
    pinn.src =
      "https://lh3.googleusercontent.com/Nxa3pCZMNT9QrtR4YrlBOm5nsFq9rfI3cLZsg6zR75WSxyqgi8RMeqUmL8F4pkYQY7dXsLFrHMCtaC_1ATyKIfqSW8p1arkHagngjA=w301";
    pinn.width = "120";
    pinn.title = "PINN";
    pinn.id = "Pinn";
    pinn.style = "cursor: pointer";
    var PINN = document.getElementById("pinn").appendChild(pinn);
  }

  if (create.id == "voxix") {
    /* Voxix */
    const voxix = document.createElement("img");
    voxix.src =
      "https://lh3.googleusercontent.com/3Y_DfGPoWsBjF3vqWmry2-x4fCsEbMj0mqee7D8IcNfBN6MoHZlMJnK1rgK3cksult_-zA9nde7UeQiMf7bZEcsTZIJZMSE8T0ZC=w301";
    voxix.width = "120";
    voxix.title = "Voxix";
    voxix.id = "Voxix";
    voxix.style = "cursor: pointer";
    var Voxix = document.getElementById("voxix").appendChild(voxix);
  }

  if (create.id == "mindsbulb") {
    /* MindsBulb */
    const mindsbulb = document.createElement("img");
    mindsbulb.src =
      "https://lh3.googleusercontent.com/jqS0_EMJlOPpuDsY9zKhfj9HbWKOep8q5U8_vX2Zbw4sUfhTVaL6C-C5SvvdpwvUnwvMQmbrWZpyaSAKnBVvAfCb0SaIaXnZKKTZ=w301";
    mindsbulb.width = "120";
    mindsbulb.title = "MindsBulb";
    mindsbulb.id = "MindsBulb";
    mindsbulb.style = "cursor: pointer";
    var MindsBulb = document.getElementById("mindsbulb").appendChild(mindsbulb);
  }
  if (create.id == "pajunior") {
    /* PaJunior */
    const pajunior = document.createElement("img");
    pajunior.src =
      "https://lh3.googleusercontent.com/I3GSgo1eOeu5-DqaZQevyHaRr9bo76b-wKiZ2oShs-cQp9fS5cPbfYJ62we2CHEACEP-gcl64i8zz6Xl4BnLj9-n8CTgtl2v5ntm5w=w301";
    pajunior.width = "120";
    pajunior.title = "PaJunior";
    pajunior.id = "Pajunior";
    pajunior.style = "cursor: pointer";
    var PaJunior = document.getElementById("pajunior").appendChild(pajunior);
  }

  if (create.id == "alienship") {
    /* AlienShip */
    const alienship = document.createElement("img");
    alienship.src =
      "https://lh3.googleusercontent.com/ZVHxi4B9nK0pW9jJRqwxeRj63rPh6zMGNgTZH719vhyjrV1Ni6tePwgtx1ZFcYzfWn2FrnpYgCZrw9vt6yrflSUv_iXC5aYQPogJog=w301";
    alienship.width = "120";
    alienship.title = "Alien Ship";
    alienship.id = "AlienShip";
    alienship.style = "cursor: pointer";
    var AlienShip = document.getElementById("alienship").appendChild(alienship);
  }
  if (create.id == "invadergaming") {
    /* InvaderGaming */
    const invadergaming = document.createElement("img");
    invadergaming.src =
      "https://lh3.googleusercontent.com/-IgFyeQtqhX5ejH_2Yvhgyg2tbv-VRewT8KOlsbujB6lEdDs72KnP0dMGkxWrzxi5_Im2i7eD4UzW26uc_SjIwqHB-pxr_HmIbzwhz0=w301";
    invadergaming.width = "120";
    invadergaming.title = "InvaderGaming";
    invadergaming.id = "InvaderGaming";
    invadergaming.style = "cursor: pointer";
    var InvaderGaming = document
      .getElementById("invadergaming")
      .appendChild(invadergaming);
  }

  if (create.id == "grock") {
    /* GROCK */
    const grock = document.createElement("img");
    grock.src =
      "https://lh3.googleusercontent.com/2hJH-1WGY1trFU61DhQIDka_DGOfZ3dVEGYLSq1J1_aFrgUHdZRxqodM3JLImLTjNy3X5TAsFMpItqDWknHYFmb32Hq8cKF-K0L4TQ=w301";
    grock.width = "120";
    grock.title = "GROCK";
    grock.id = "GROCK";
    grock.style = "cursor: pointer";
    var GROCK = document.getElementById("grock").appendChild(grock);
  }

  if (create.id == "assassin") {
    /* ASSASSIN */
    const assassin = document.createElement("img");
    assassin.src =
      "https://lh3.googleusercontent.com/vJ_3UpjTDptS-urJvXJw4Kc0KP3a08GS8UwXVBnLiylvXbfio4ec-yABzmIED3i4iAkmIxyoq4aai60htI3MEq1GZa4XZZWwOGUf6g=w301";
    assassin.width = "120";
    assassin.title = "ASSASSIN";
    assassin.id = "ASSASSIN";
    assassin.style = "cursor: pointer";
    var ASSASSIN = document.getElementById("assassin").appendChild(assassin);
  }

  if (create.id == "charged") {
    /* CHARGED */
    const charged = document.createElement("img");
    charged.src =
      "https://lh3.googleusercontent.com/gZHflIqlpsdvxT4XDyqEEPU8Ns7ZWs92jzaJoc4K-69LT7rMNKS4IhJ3Ys5jggezXdg3c3axZ1mQr-nSE_O8aYgblrkX0QX0mNcwmQ=w301";
    charged.width = "120";
    charged.title = "Charged";
    charged.id = "Charged";
    charged.style = "cursor: pointer;";
    var CHARGED = document.getElementById("charged").appendChild(charged);
  }

  if (create.id == "freedomfightervictor") {
    /* FreedomFighterVictor */
    const freedomfightervictor = document.createElement("img");
    freedomfightervictor.src =
      "https://lh3.googleusercontent.com/nkiNtc0G0u0F2Qvx3MNz9VfuPYe0FHqe_ov3465pPGjRE4x8m-zhh6f7-TpHKnyI7wJsSKkqNFDGiaERpxa_uk4I6xWhJMBinKQAISo=w301";
    freedomfightervictor.width = "120";
    freedomfightervictor.title = "FreesomFighterVictor";
    freedomfightervictor.id = "FreedomFighterVictor";
    freedomfightervictor.style = "cursor: pointer;";
    var FreedomFighterVictor = document
      .getElementById("freedomfightervictor")
      .appendChild(freedomfightervictor);
  }

  if (create.id == "christnat") {
    /* ChristNat */
    const christnat = document.createElement("img");
    christnat.src =
      "https://lh3.googleusercontent.com/yj36Qzr8EI6p8c0oGLfcX_m7nCkfsT-gSsk6H1yCJjAoHTnwBzPMuq27un7OpGe-LT4ZGRp9xbrlpRDloEu15ydQqdbvnncyCIawK1I=w301";
    christnat.width = "120";
    christnat.title = "ChristNat";
    christnat.id = "ChristNat";
    christnat.style = "cursor: pointer;";
    var ChristNat = document.getElementById("christnat").appendChild(christnat);
  }

  if (create.id == "chrisdoogood") {
    /* ChrisDooGood*/
    const chrisdoogood = document.createElement("img");
    chrisdoogood.src =
      "https://lh3.googleusercontent.com/ESR0NS8MQkj0A67i3yLPrDYGY28sgr2C7cqG53gGERdnLuX6xUOIqiI-fbPf9pnQ7_dnqpxIKdhbGBqZRuVME7oxWjcoq7yl3fajV48=w301";
    chrisdoogood.width = "120";
    chrisdoogood.title = "ChrisDooGood";
    chrisdoogood.id = "ChrisDooGood";
    chrisdoogood.style = "cursor: pointer;";
    var ChrisDooGood = document
      .getElementById("chrisdoogood")
      .appendChild(chrisdoogood);
  }

  if (create.id == "thriftegaming") {
    /* thriftegaming */
    const thriftegaming = document.createElement("img");
    thriftegaming.src =
      "https://lh3.googleusercontent.com/MBx3H3zbdZAVGFiWVWHw1AgEgAAOlzo_NBWTwRxRgq6rHsq3Uy0oNI-5vDwevE1v5hMDVEZOe16UkwGz38xBG7VMzDGIMyTasvi45w=w301";
    thriftegaming.width = "120";
    thriftegaming.title = "thriftegaming";
    thriftegaming.id = "thriftegaming";
    thriftegaming.style = "cursor: pointer;";
    var ThrifteGaming = document
      .getElementById("thriftegaming")
      .appendChild(thriftegaming);
  }

  if (create.id == "satorid") {
    /* SatoriD */
    const satorid = document.createElement("img");
    satorid.src =
      "https://lh3.googleusercontent.com/8Bw_Nbuizcus65bB92vCKkPvL_ksWEZutWxQxy0i_y-7eq9GexeTRWDgmNz7_t4CF9gCl7_xKoqiCPciBMdjkm5Lx7VsFM1W9kjnsg=w301";
    satorid.width = "120";
    satorid.title = "SatoriD";
    satorid.id = "SatoriD";
    satorid.style = "cursor: pointer;";
    var SatoriD = document.getElementById("satorid").appendChild(satorid);
  }

  if (create.id == "maximumunderdrive") {
    /* maximumunderdrive */
    const maximumunderdrive = document.createElement("img");
    maximumunderdrive.src =
      "https://lh3.googleusercontent.com/UuAf4nZTcffy4pN7gVvx4wbP9FhGM6923cF5332DU8Gmv9g15DExJQc30SL5AH_c5lSlYTKy6MqH_zveJH7hQnK44TK66ZGXTl48=w301";
    maximumunderdrive.width = "120";
    maximumunderdrive.title = "MaximumUnderDrive";
    maximumunderdrive.id = "MaximumUnderDrive";
    maximumunderdrive.style = "cursor: pointer;";
    var MaximumUnderDrive = document
      .getElementById("maximumunderdrive")
      .appendChild(maximumunderdrive);
  }

  if (create.id == "pretty") {
    /* pretty */
    const pretty = document.createElement("img");
    pretty.src =
      "https://lh3.googleusercontent.com/LPYogOlTYnN2Mj50u6jM8pvBP2Ans5Hq1N4kSwDosdItpPSevRPXAAS4ez5Wjkvj6rMJKWA8TnjA4TD6JtLECtzK53wFqW96z1Mn=w301";
    pretty.width = "120";
    pretty.title = "@XxPrettyLittleThingxX";
    pretty.id = "pretty";
    pretty.style = "cursor: pointer";
    var Pretty = document.getElementById("pretty").appendChild(pretty);
  }
  if (create.id == "lucoin") {
    /* LuCoin */
    const lucoin = document.createElement("img");
    lucoin.src =
      "https://lh3.googleusercontent.com/chZ6LC9ISGFonHnL7mN3X57r69PgPqlT1wTQ-ImoBnWYJOMHKJBCByPws6hhfETJfdUIeNzGgIlxfvSrCTUeXgFIrx0KAGVpnVAZWO8=w301";
    lucoin.width = "120";
    lucoin.title = "LuCoin";
    lucoin.id = "LuCoin";
    lucoin.style = "cursor: pointer";
    var LuCoin = document.getElementById("lucoin").appendChild(lucoin);
  }
  if (create.id == "noid") {
    /* NOID */
    var noid = document.createElement("img");
    noid.src =
      "https://lh3.googleusercontent.com/GhpZVR1PzEiZlYxnHfPD92ss3hnoTPXAbmiYE_TTKOLOLpcXZLIwFu9nMYinpaP2vxdOl9kqfS9hQ0HWdg0QA6NqE5KTTwjVP1GOXg=w301";
    noid.width = "120";
    noid.title = "NOID";
    noid.id = "NOID";
    noid.style = "cursor: pointer";
    var NOID = document.getElementById("noid").appendChild(noid);
  }

  if (create.id == "tetn") {
    /* TETN */
    var tetn = document.createElement("img");
    tetn.src =
      "https://lh3.googleusercontent.com/xNo9Z7U-7FAl7LXB5k_l-uXOLCs_OOH6vxPb8oAAhkS7oeTkAqDcWmqToloZGruxRzJ25N0mG5FA9oRk77UauWBT5o9fkokWt0qv=w301";
    tetn.width = "120";
    tetn.title = "TETN";
    tetn.id = "TETN";
    tetn.style = "cursor: pointer;";
    var TETN = document.getElementById("tetn").appendChild(tetn);
  }
  if (create.id == "jesustoken") {
    /* JesusToken */
    var jesustoken = document.createElement("img");
    jesustoken.src =
      "https://lh3.googleusercontent.com/y8eMN3i0NdX6WAPdjTK4C8FAtUZcysAjidIY6U31v5IW6uLjIHtV24MXizPgFywwrjssywJxUCU788RYH8LaIdcbzVN7p5lN--U=w301";
    jesustoken.width = "120";
    jesustoken.title = "JesusToken";
    jesustoken.id = "JesusToken";
    jesustoken.style = "cursor: pointer;";
    var JesusToken = document.getElementById("tetn").appendChild(tetn);
  }

  if (create.id == "null") {
    alert("Something Went Wrong");
  }
  Create.addEventListener("click", attackED);

  function attackED() {
    Create.classList.toggle("card");
    botID();
    Create.classList.toggle("hide");
  }
}
