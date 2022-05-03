/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

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
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  let posx = 10;
    let posy = 100;
    stroke(strokeColor);
    noStroke();
    let pos1x = posx + letterData["Rect1x"];
    let pos1y = posy + letterData["Rect1y"];
    let pos2x = posx + letterData["Rect2x"];
    let pos2y = posy + letterData["Rect2y"];
    let pos3x = posx + letterData["Rect3x"];
    let pos3y = posy + letterData["Rect3y"];
    let pos4x = posx + letterData["Rect4x"];
    let pos4y = posy + letterData["Rect4y"];
    let pos5x = posx + 40;
    let pos5y = posy + 0;

    let height1y = letterData["Rect1h"];
    let height2y = letterData["Rect2h"];
    let height3y = letterData["Rect3h"];
    let height4y = letterData["Rect4h"];
    let height5y = 178;
    let width5x = 114;

    let rot1 = letterData["Rect1r"];
    let rot2 = letterData["Rect2r"];
    let rot3 = letterData["Rect3r"];
    let rot4 = letterData["Rect4r"];
    // square 1
    push();
    strokeCap(SQUARE);
    angleMode(DEGREES);
    rectMode(CENTER);
    noStroke();
    fill(white);
    push();
    translate(pos1x, pos1y);
    rotate(rot1);
    rect(0, 0, 30, height1y);
    pop();

    push();
    translate(pos2x, pos2y);
    rotate(rot2);
    rect(0, 0, 30, height2y);
    pop();

    push();
    translate(pos3x, pos3y);
    rotate(rot3);
    rect(0, 0, 30, height3y);
    pop();

    push();
    translate(pos4x, pos4y);
    rotate(rot4);
    rect(0, 0, 30, height4y);
    pop();

    push();
    fill(0, 0, 0, 0);
    stroke(strokeColor);
    strokeWeight(20);
    translate(pos5x, pos5y);
    rect(0, 0, width5x, height5y);
    pop();
    pop();
  }
}





function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
