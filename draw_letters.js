const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
ellipse(letterData["lx1"],letterData["ly1"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx2"],letterData["ly2"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx3"],letterData["ly3"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx4"],letterData["ly4"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx5"],letterData["ly5"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx6"],letterData["ly6"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx7"],letterData["ly7"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx8"],letterData["ly8"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx9"],letterData["ly9"],letterData["size1"],letterData["size1"])
ellipse(letterData["lx10"],letterData["ly10"],letterData["size1"],letterData["size1"])






}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
  new_letter["lx1"] = map(percent, 0, 100, oldObj["lx1"], newObj["lx1"]);
    new_letter["lx2"] = map(percent, 0, 100, oldObj["lx2"], newObj["lx2"]);
      new_letter["lx3"] = map(percent, 0, 100, oldObj["lx3"], newObj["lx3"]);
        new_letter["lx4"] = map(percent, 0, 100, oldObj["lx4"], newObj["lx4"]);
  new_letter["ly1"] = map(percent, 0, 100, oldObj["ly1"], newObj["ly1"]);
    new_letter["ly2"] = map(percent, 0, 100, oldObj["ly2"], newObj["ly2"]);
      new_letter["ly3"] = map(percent, 0, 100, oldObj["ly3"], newObj["ly3"]);
        new_letter["ly4"] = map(percent, 0, 100, oldObj["ly4"], newObj["ly4"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
