
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup

  let w = 100;
  let h = 200;
  
  fill(30);
  noStroke();
  beginShape();
    vertex(0, 0);
    vertex(w, 0);
    vertex(w, h);
    vertex(0, h);
    beginContour();
      vertex(w * 0.3, h * 0.3);
      vertex(w * 0.5, h * 0.8);
      vertex(w * 0.8, h * 0.4);
    endContour();
  endShape();
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