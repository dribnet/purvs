/* these are optional special variables which will change the system */
var systemBackgroundColor = "#f2e2d5"; //light pink
var systemLineColor = "#6b705c";
var systemBoxColor = "#cbc0d3";

/* internal constants */
const backgroundColor  = "#f2e2d5"; //light pink
const strokeColor      = "#b47355"; //orange


const lightOrange = '#cd976b'; //light orange

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(3);
  angleMode(DEGREES);

  let posx = 50;
  let posy = 150;

  let startAngle = letterData["start"];
  let stopAngle = letterData["end"];
  let MainOffsetX = posx + letterData["MainPosX"];
  let MainOffsetY = posy + letterData["MainPosY"];
  let MainRadius1 = letterData["MainRadiusA"];
  let MainRadius2 = letterData["MainRadiusB"];
  let MainRadius3 = letterData["MainRadiusC"];
  let RoundCorRad1 = letterData["RoundCorRadA"];
  let RoundCorRad2 = letterData["RoundCorRadB"];
  let RoundCorRad3 = letterData["RoundCorRadC"];
  let RoundCorRad4 = letterData["RoundCorRadD"];
  let PartOffsetX = posx + letterData["PartPosX"];
  let PartOffsetY = posy + letterData["PartPosY"];
  let PartRadius4 = letterData["PartRadiusD"];
  let PartRadius5 = letterData["PartRadiusE"];
  let PartCorRads = letterData["PartCorRad"];
  let Start1 = letterData["StartA"];
  let End1 = letterData["EndA"];
  let Start2 = letterData["StartB"];
  let End2 = letterData["EndB"];
  let Start3 = letterData["StartC"];
  let End3 = letterData["EndC"];

  //draw the main body
  noFill();
  push();
  rectMode(CENTER);
  rect(MainOffsetX,MainOffsetY,MainRadius1,MainRadius1,RoundCorRad1,RoundCorRad2,RoundCorRad3,RoundCorRad4);
  pop();

  arc(MainOffsetX,MainOffsetY,MainRadius2,MainRadius2,Start1,End1);
  arc(MainOffsetX,MainOffsetY,MainRadius3,MainRadius3,Start2,End2);

  // the relative to the main body
  arc(PartOffsetX,PartOffsetY,MainRadius3,MainRadius3,Start3,End3);

  fill(lightOrange);
  push();
  rectMode(CENTER);
  rect(PartOffsetX,PartOffsetY,PartRadius4,PartRadius5,PartCorRads);
  pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["end"] = map(percent, 0, 100, oldObj["end"], newObj["end"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
  "ABBDDADA",
  "DADABBDD"
]