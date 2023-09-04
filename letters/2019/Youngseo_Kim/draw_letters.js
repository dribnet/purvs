/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
 // position for all parameters
  let posx2 = letterData["posx"];
  let posy2 = letterData["posy"];

//parameters for the first arc
  let ArcStart = letterData["arcS"];
  let ArcEnd = letterData["arcE"];

//parameters for the triangle
  let triangleX1 = letterData["movetriX1"]
  let triangleX1toX2 = letterData["triX1toX2"]
  let triangleX1toX3 = letterData["triX1toX3"]
  let triangleY1 = letterData["movetriY1"]
  let triangleY1toY2 = letterData["triY1toY2"]
  let triangleY1toY3 = letterData["triY1toY3"]

//parameters for the second arc
  let Arc2Start = letterData["arc2S"];
  let Arc2End = letterData["arc2E"];

// draw two arc and one triangle
  noStroke();
  fill(183,149,119,200);
  arc(posx2,posy2,100,100,ArcStart,ArcEnd);
  fill(114,106,97,200);
  arc(posx2,posy2,100,100,Arc2Start,Arc2End);
  fill(64,102,93,200);
  triangle(posx2+triangleX1,posy2+triangleY1,posx2+triangleX1+triangleX1toX2,posy2+triangleY1+triangleY1toY2, posx2+triangleX1+triangleX1toX3, posy2+triangleY1+triangleY1toY3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["posx"] = map(percent, 0, 100, oldObj["posx"], newObj["posx"]);
  new_letter["posy"] = map(percent, 0, 100, oldObj["posy"], newObj["posy"]);
  new_letter["arcS"] = map(percent, 0, 100, oldObj["arcS"], newObj["arcS"]);
  new_letter["arcE"] = map(percent, 0, 100, oldObj["arcE"], newObj["arcE"]);
  new_letter["movetriX1"] = map(percent, 0, 100, oldObj["movetriX1"], newObj["movetriX1"]);
  new_letter["triX1toX2"] = map(percent, 0, 100, oldObj["triX1toX2"], newObj["triX1toX2"]);
  new_letter["triX1toX3"] = map(percent, 0, 100, oldObj["triX1toX3"], newObj["triX1toX3"]);
  new_letter["movetriY1"] = map(percent, 0, 100, oldObj["movetriY1"], newObj["movetriY1"]);
  new_letter["triY1toY2"] = map(percent, 0, 100, oldObj["triY1toY2"], newObj["triY1toY2"]);
  new_letter["triY1toY3"] = map(percent, 0, 100, oldObj["triY1toY3"], newObj["triY1toY3"]);
  new_letter["arc2S"] = map(percent, 0, 100, oldObj["arc2S"], newObj["arc2S"]);
  new_letter["arc2E"] = map(percent, 0, 100, oldObj["arc2E"], newObj["arc2E"]);
  return new_letter;
}

var swapWords = [
  "MONGFONT",
  "12345678",
  "ILOVEYOU",
  "BIRTHDAY",
  "CREATIVE",
  "EQUALITY",
  "EXERCISE",
  "FESTIVAL",
  "GRAPHICS",
  "INTERACT",
  "POSITIVE",
  "OPTIMISM",
  "PATIENCE",
  "PEACEFUL",
  "PRECIOUS",
  "ROMANTIC",
  "TROPICAL",
  "VICTORIA",
  "WHATEVER",
  "WHENEVER",
  "THINKING",
  "LEARNING",
  "IMPROVED"
]