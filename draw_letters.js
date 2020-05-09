const colorLeaf  = "#66cf51";
const colorStroke  = "#38ad1f";
const colorStick = "#a15f45";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  
  angleMode(DEGREES);

  let leaf1Posx = letterData["offsetx"];
  let leaf1Posy = letterData["offsety"];
  let leaf2Posx = leaf1Posx + letterData["leaf2Posx"];
  let leaf2Posy = leaf1Posy + letterData["leaf2Posy"];
  let angle1 = letterData["rotate1"];
  let angle2 = letterData["rotate2"];
  let angle3 = letterData["rotate3"];
  let stickPosx = leaf1Posx + letterData["stickPosx"];
  let stickPosy = leaf1Posy + letterData["stickPosy"];
  
  fill(colorLeaf);
  stroke(colorStroke);
  strokeWeight(4);
  push();
  translate(leaf1Posx,leaf1Posy);
  rotate(angle1);
  ellipse(0, 0, 60, 100);
  pop();
  
  push();
  translate(leaf2Posx,leaf2Posy);
  rotate(angle2);
  ellipse(0, 0, 60, 100);
  pop();

  fill(colorStick);
  noStroke();
  push();
  translate(stickPosx,stickPosy);
  rotate(angle3);
  rect(0, 0, 10, 80);
  pop();
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