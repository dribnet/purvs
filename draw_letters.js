 

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
let w =100;
let h = 200;

let r1x = letterData["r1x"];
let r1y = letterData["r1y"];
let r2x = letterData["r2x"];
let r2y = letterData["r2y"];
let r3x = letterData["r3x"];
let r3y = letterData["r3y"];
let r4x = letterData["r4x"];
let r4y = letterData["r4y"];

let t1x = letterData["t1x"];
let t1y = letterData["t1y"];
let t2x = letterData["t2x"];
let t2y = letterData["t2y"];
let t3x = letterData["t3x"];
let t3y = letterData["t3y"];

fill(30, 30, 30, 200);
noStroke();
beginShape();
  curveVertex(r1x, r1y);
  curveVertex(r2x, r2y);
  curveVertex(r3x, r3y);
  curveVertex(r4x, r4y);
  curveVertex(r1x, r1y);
  curveVertex(r2x, r2y);
  curveVertex(r3x, r3y);
  curveVertex(r4x, r4y);  

endShape(CLOSE);



fill(30, 30, 30, 200);
noStroke();
beginShape();
  curveVertex(t1x, t1y);
  curveVertex(t2x, t2y);
  curveVertex(t3x, t3y);
  curveVertex(t1x, t1y);
  curveVertex(t2x, t2y);
  curveVertex(t3x, t3y);


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