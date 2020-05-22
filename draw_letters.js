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

  push();
    scale(0.75);
    translate(16, 32);

    //draw arch
    arc(x, y, w, h, angleStart, angleEnd);

    strokeWeight(8);
    stroke(255);

    line(x1, y1, x2, y2);
    line(x3, y3, x4, y4);

    noStroke();
  pop();
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  
  new_letter["height"] = map(percent, 0, 100, oldObj["height"], newObj["height"]);
  new_letter["width"] = map(percent, 0, 100, oldObj["width"], newObj["width"]);
  
  new_letter["angleStart"] = map(percent, 0, 100, oldObj["angleStart"], newObj["angleStart"]);
  new_letter["angleEnd"] = map(percent, 0, 100, oldObj["angleEnd"], newObj["angleEnd"]);

  new_letter["line 1 x1"] = map(percent, 0, 100, oldObj["line 1 x1"], newObj["line 1 x1"]);
  new_letter["line 1 y1"] = map(percent, 0, 100, oldObj["line 1 y1"], newObj["line 1 y1"]);
  new_letter["line 1 x2"] = map(percent, 0, 100, oldObj["line 1 x2"], newObj["line 1 x2"]);
  new_letter["line 1 y2"] = map(percent, 0, 100, oldObj["line 1 y2"], newObj["line 1 y2"]);

  new_letter["line 2 x1"] = map(percent, 0, 100, oldObj["line 2 x1"], newObj["line 2 x1"]);
  new_letter["line 2 y1"] = map(percent, 0, 100, oldObj["line 2 y1"], newObj["line 2 y1"]);
  new_letter["line 2 x2"] = map(percent, 0, 100, oldObj["line 2 x2"], newObj["line 2 x2"]);
  new_letter["line 2 y2"] = map(percent, 0, 100, oldObj["line 2 y2"], newObj["line 2 y2"]);
  return new_letter;
}

var swapWords = [
  "?PATCHY?",
  "",
  "BAAAAAAA"
]