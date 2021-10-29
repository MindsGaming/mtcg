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
var JesusTokenid = "jesustoken";

MTCGid.addEventListener("click", attackED);
DooBetterid.addEventListener("click", attackED);
StarShatterid.addEventListener("click", attackED);
Lokayaid.addEventListener("click", attackED);


function attackED() {
  var attack = document.getElementByTagName("card").id;
  attack.classList.toggle("card");
}
