const MTCGid = "mtcg";
const DooBetterid = "doobetter";
const StarShatterid = "starshatter";
const Lokayaid = "lokaya";
const GameTestPlayid = "gametestplay";
const Cagedid = "caged";
const Yorizzoid = "yorizzo";
const Eclipseid = "eclipse";
const Pajuniorid = "pajunior";
const AlienShipid = "alienship";
const InvaderGamingid = "invadergaming";
const Grockid = "grock";
const ASSASSINid = "assassin";
const Chargedid = "charged";
const FreedomFighterVictorid = "freedomfightervictor";
const ChristNatid = "christnat";
const ChrisDooGoodid = "chrisdoogood";
const ThrifteGamingid = "thriftegaming";
const SatoriDid = "satorid";
const LuCoinid = "lucoin";
const Prettyid = "pretty";
const NOIDid = "noid";
const TETNid = "tetn";
const PINNid = "pinn";
const JesusTokenid = "jesustoken";

var moveCard = [
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
  PINNid,
  JesusTokenid
];

moveCard.addEventListener("click", attackED);

function attackED() {
  var attack = document.getElementByTagName("card").id;
  attack.classList.toggle("card");
}
