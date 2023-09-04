const colorFront  = "#199cff";
const colorStroke = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  fill(20);
  stroke(20);
  strokeWeight(4);

  //first triangle
  let posax = letterData["pax"];
  let posay = letterData["pay"];
  let posbx = letterData["pbx"];
  let posby = letterData["pby"];
  let poscx = letterData["pcx"];
  let poscy = letterData["pcy"];

  //second triangle

  let pos1x = letterData["p1x"];
  let pos1y = letterData["p1y"];
  let pos2x = letterData["p2x"];
  let pos2y = letterData["p2y"];
  let pos3x = letterData["p3x"];
  let pos3y = letterData["p3y"];

  // draw two triangles
  triangle(posax, posay, posbx, posby, poscx, poscy);
  triangle(pos1x , pos1y, pos2x, pos2y, pos3x, pos3y);
 
  noFill();
  stroke(colorFront);
  //rect(0, 0, 100, 200)
}

function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["pax"] = map(percent, 0, 100, oldObj["pax"], newObj["pax"]);
  new_letter["pay"] = map(percent, 0, 100, oldObj["pay"], newObj["pay"]);
  new_letter["pbx"] = map(percent, 0, 100, oldObj["pbx"], newObj["pbx"]);
  new_letter["pby"] = map(percent, 0, 100, oldObj["pby"], newObj["pby"]);
  new_letter["pcx"] = map(percent, 0, 100, oldObj["pcx"], newObj["pcx"]);
  new_letter["pcy"] = map(percent, 0, 100, oldObj["pcy"], newObj["pcy"]);
  new_letter["p1x"] = map(percent, 0, 100, oldObj["p1x"], newObj["p1x"]);
  new_letter["p1y"] = map(percent, 0, 100, oldObj["p1y"], newObj["p1y"]);
  new_letter["p2x"] = map(percent, 0, 100, oldObj["p2x"], newObj["p2x"]);
  new_letter["p2y"] = map(percent, 0, 100, oldObj["p2y"], newObj["p2y"]);
  new_letter["p3x"] = map(percent, 0, 100, oldObj["p3x"], newObj["p3x"]);
  new_letter["p3y"] = map(percent, 0, 100, oldObj["p3y"], newObj["p3y"]);

  return new_letter;
}
var swapWords = [
   "PEVERELL",
   "TRIANGLE",
   "ABSOLUTE",
   "BACTERIA",
   "CELLULAR",
   "DEFINITE",
   "ECONOMIC",
   "FLAGSHIP",
   "GRATEFUL",
   "HERITAGE",
   "IMPERIAL",
   "JUDGMENT",
   "KEYBOARD",
   "LAUGHTER",
   "MINORITY",
   "NUMEROUS",
   "OPTIMISM",
   "PEACEFUL",
   "QUANTITY",
   "RATIONAL",
   "SCRUTINY",
   "TRANSFER",
   "UNIVERSE",
   "VERTICAL",
   "WILDLIFE",
   "XANTHINE",
   "YOURSELF",
   "ZIZZLING",
   
   
]