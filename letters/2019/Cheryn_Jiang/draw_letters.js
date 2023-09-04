const colorFront1  = "#facf5a";
const colorFront2  = "#ff5959";
const colorStroke  = "#4f9da6";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
   // color/stroke setup
  let size2 = letterData["size"];
  let size1 = letterData["size1"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let posx = letterData["offsetx1"];
  let posy = letterData["offsety2"];
  let ArcStart = letterData["arcS"];
  let ArcEnd = letterData["arcE"];
  let ArcStart2 = letterData["arcS2"];
  let ArcEnd2 = letterData["arcE2"];

  // draw two circles
  stroke(colorStroke);
  strokeWeight(4);
  fill(colorFront1);
  arc(posx, posy, size1, size1,ArcStart,ArcEnd);
  
  noStroke();
  fill(colorFront2);
  arc(pos2x+50, pos2y+50, size2, size2,ArcStart2,ArcEnd2);


  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50  + letterData["offsetx"];
  //let pos2y = 150 + letterData["offsety"];

  // draw two circles
  //fill(colorFront1);
 // ellipse(50, 150, 75, 75);
 // fill(colorFront2);
  //ellipse(pos2x, pos2y, size2, size2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["size1"]    = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["arcS"] = map(percent, 0, 100, oldObj["arcS"], newObj["arcS"]);
  new_letter["arcE"] = map(percent, 0, 100, oldObj["arcE"], newObj["arcE"]);
 new_letter["arcS2"] = map(percent, 0, 100, oldObj["arcS2"], newObj["arcS2"]);
  new_letter["arcE2"] = map(percent, 0, 100, oldObj["arcE2"], newObj["arcE2"]);

  return new_letter;
}

var swapWords = [
  "MELONLTR",
  "CHERYNYN",
  "12042019",
  "JIANGXIN"
]