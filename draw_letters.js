const curveColour  = "#ff245e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for circle
  let x = letterData["offsetx"];
  let y = letterData["offsety"];
  
  //arc params
  let h = letterData["height"];
  let w = letterData["width"];
  let angleStart = letterData["angleStart"];
  let angleEnd = letterData["angleEnd"];

  //line 1
  let x1 = letterData["line 1 x1"];
  let x2 = letterData["line 1 x2"];
  let y3 = letterData["line 2 y1"];
  let y4 = letterData["line 2 y2"];
  
  //line 2
  let x3 = letterData["line 2 x1"];
  let x4 = letterData["line 2 x2"];
  let y1 = letterData["line 1 y1"];
  let y2 = letterData["line 1 y2"];

  //drawing the line
  angleMode(DEGREES);
  noStroke();
  fill(curveColour);

  //draw arch
  arc(x, y, w, h, angleStart, angleEnd);

  strokeWeight(8);
  stroke(255);

  if (x1 != 'x') {
    line(x1, y1, x2, y2);  
  }
  if (x3 != 'x') {
    line(x3, y3, x4, y4);
  }

  noStroke();
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