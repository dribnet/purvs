/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  let w = 100; //posiiton for lettering
  let h = 200; //posiiton for lettering

  let r1x = letterData["r1x"]; //x position
  let r1y = letterData["r1y"];  // y position for stroke
  let r2x = letterData["r2x"]; // x position for shape 2
  let r2y = letterData["r2y"]; // y position for shape 2
  let r3x = letterData["r3x"]; // x position for shape 3
  let r3y = letterData["r3y"]; // y position for shape 3
  let r4x = letterData["r4x"]; // x position for for shape 4
  let r4y = letterData["r4y"]; // y position for shape 4

  let t1x = 10; // controls the gray
  if ("t1x" in letterData) {
    t1x = letterData["t1x"];
  }
  let t1y = 40; // controls the gray
  if ("t1y" in letterData) {
    t1y = letterData["t1y"];
  }
  let t2x = 80; // controls the gray 
  if ("t2x" in letterData) {
    t2x = letterData["t2x"];
  }
  let t2y = 50; // controls the gray transparent
  if ("t2y" in letterData) {
    t2y = letterData["t2y"];
  }
  let t3x = 50; // controls the gray transparent
  if ("t3x" in letterData) {
    t3x = letterData["t3x"];
  }
  let t3y = 150; // controls the gray transparent
  if ("t3y" in letterData) {
    t3y = letterData["t3y"];
  }

  fill(0) //fill(30, 30, 30, 200);
  noStroke();
  beginShape();
    curveVertex(r1x, r1y);
    curveVertex(r2x, r2y);
    curveVertex(r3x, r3y);
    curveVertex(r4x, r4y);
    curveVertex(r1x, r1y);
    curveVertex(r2x, r2y);
    curveVertex(r3x, r3y);
  endShape(CLOSE); 


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