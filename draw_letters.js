/* these are optional special variables which will change the system */
var systemBackgroundColor = "#fffffff";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#233f11";

const yellow = "#fa9905";
const orange = "#ff5200";
const pink = "#f21170";
const purple ="#72147e";
const darkPink = "#AD164F";
// const blue = "#254DFF";


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
  angleMode(DEGREES);
  noStroke();

  // determine parameters


//triangle

  let offsetx1 = letterData["offsetx1"];
  let offsety1 = letterData["offsety1"];
  let offsetx2 = letterData["offsetx2"];
  let offsety2 = letterData["offsety2"];
  let offsetx3 = letterData["offsetx3"];
  let offsety3 = letterData["offsety3"];

  //circle

  let sizeLetter = letterData["sizeLetter"];
  let sizeLetter1 = letterData["sizeLetter1"];
  let sizeLetter2 = letterData["sizeLetter2"];

  let pos2x = letterData["pos2x"];
  let pos2y = letterData["pos2y"];

  let pos3x = letterData["pos3x"];
  let pos3y = letterData["pos3y"];

  //rectangle 

  let pos4x = letterData["pos4x"];
  let pos4y = letterData["pos4y"];

  let pos5x = letterData["pos5x"];
  let pos5y = letterData["pos5y"];

  let start = letterData["start"];
  let end = letterData["end"];

//let radio = letterData["radio"];


//-------------------------------------------------------


  // draw rectangle 
  push();
    fill(pink);
    rect(pos4x, pos4y, sizeLetter1, sizeLetter2);
    //rect(pos4x, pos4y, sizeLetter1, sizeLetter2,radio);
  pop();

  push();
    fill(pink);
    rect(pos5x, pos5y, sizeLetter1, sizeLetter2);
    //rect(pos5x, pos5y, sizeLetter1, sizeLetter2,radio);
  pop();

//texture

  var lines = true;
  if (lines) {
    var gap = 5;
    var xMultiplier = int(sizeLetter1 / gap);
    var yMultiplier = int(sizeLetter2 / gap);

    push();
    for (var x =-2 + pos4x; x <= pos4x + (gap * xMultiplier); x += gap) {
      for (var y = -2 + pos4y; y <= pos4y + (gap * yMultiplier); y += gap) {
        noStroke();
        fill(darkPink);
        //rect(x, y-10.5, 2, 15);
        rect(x-10, y+3, 15, 2);
      }
    }
    pop();
  }

  var lines2 = true;
  if (lines2) {
    var gap = 5;
    var xMultiplier1 = int(sizeLetter1 / gap);
    var yMultiplier1 = int(sizeLetter2 / gap);

    push();
    for (var x =  + pos5x; x <= pos5x + (gap * xMultiplier1); x += gap) {
      for (var y = 10 + pos5y; y <= pos5y + (gap * yMultiplier1); y += gap) {
        noStroke();
        fill(darkPink);
        rect(x-1, y-10.5, 2, 15);
      }
    }
    pop();
  }

  // draw circles
  push();
    fill(yellow);
    arc(pos2x, pos2y, sizeLetter, sizeLetter,start, end);
    // ellipse(pos2x, pos2y, sizeLetter, sizeLetter);
    ellipse(pos3x, pos3y, sizeLetter, sizeLetter);
  pop();

    //draw triangle
  push();
    fill(purple);
    triangle(offsetx1,offsety1,offsetx2,offsety2,offsetx3,offsety3);
  pop();



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizeLetter"]    = map(percent, 0, 100, oldObj["sizeLetter"], newObj["sizeLetter"]);
  new_letter["sizeLetter1"]    = map(percent, 0, 100, oldObj["sizeLetter1"], newObj["sizeLetter1"]);
  new_letter["sizeLetter2"]    = map(percent, 0, 100, oldObj["sizeLetter2"], newObj["sizeLetter2"]);
  new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx"]);
  new_letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["pos2x"] = map(percent, 0, 100, oldObj["pos2x"], newObj["pos2x"]);
  new_letter["pos2y"] = map(percent, 0, 100, oldObj["pos2y"], newObj["pos2y"]);
  new_letter["pos3x"] = map(percent, 0, 100, oldObj["pos3x"], newObj["pos3x"]);
  new_letter["pos3y"] = map(percent, 0, 100, oldObj["pos3y"], newObj["pos3y"]);
  new_letter["pos4x"] = map(percent, 0, 100, oldObj["pos4x"], newObj["pos4x"]);
  new_letter["pos4y"] = map(percent, 0, 100, oldObj["pos4y"], newObj["pos4y"]);
  new_letter["pos5x"] = map(percent, 0, 100, oldObj["pos5x"], newObj["pos5x"]);
  new_letter["pos5y"] = map(percent, 0, 100, oldObj["pos5y"], newObj["pos5y"]);
  new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["end"] = map(percent, 0, 100, oldObj["end"], newObj["end"]);
  return new_letter;
}

var swapWords = [
  "RETROLET",
  "ABBAABBA",
  "CAB?CAB?",
  "GUADALUP",
  "BAAAAAAA"
]