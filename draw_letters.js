/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const White  = "#FFFAFA";
const black  = "#353935";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  let posx = 50;
  let posy = 50;
  // determine parameters for second circle

  let pos1x = posx + letterData["Rect1x"];
  let pos1y = posy + letterData["Rect1y"];
  let pos2x = posx + letterData["Rect2x"];
  let pos2y = posy + letterData["Rect2y"];
  let pos3x = posx + letterData["Rect3x"];
  let pos3y = posy + letterData["Rect3y"];
  let pos4x = posx + letterData["Rect4x"];
  let pos4y = posy + letterData["Rect4y"];
  let pos5x = posx + letterData["Rect5x"];
  let pos5y = posy + letterData["Rect5y"];

  let height1y = letterData["Rect1h"];
  let height2y = letterData["Rect2h"];
  let height3y = letterData["Rect3h"];
  let height4y = letterData["Rect4h"];
  let height5y = letterData["Rect5h"];
  let width5x = letterData["Rect5w"];

  let rot1 = letterData["Rect1r"];
  let rot2 = letterData["Rect2r"];
  let rot3 = letterData["Rect3r"];
  let rot4 = letterData["Rect4r"];


  push();  // based off jeremymaih’s code
  angleMode(DEGREES);
  push();
  translate(pos1x, pos1y);
  rotate(rot1);
  rect(0, 0, 30, height1y);
  pop();

  // strokeWeight(5);
  // fill(White);
  // stroke(black);

  // rect(pos2x,pos2y,10,50);//left side of the A
  //rect(posx+10.4, posy, 10, 50);//right side of the A

  //rect(pos2x, pos2y, 30, 30, 5, 5, 5, 5);//The little bubble on the b and d


  pop();

}

function interpolate_letter(perc90t, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
  "Quart"
]
