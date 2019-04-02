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
  // determine parameters for second circle
  let heightY = letterData["heightY"];
  let widthX = letterData["widthX"];
  let rotation_angle = letterData["rotation_angle"];
  let length = letterData["length"];
  var translateY = heightY;
  // convert rotation
  var rotation = (rotation_angle/180)*Math.PI

  fill(0,0,0,0);
  stroke(255);
  strokeWeight(10);
  beginShape();
  for(var i = -length; i < length; i++) { // defines the length and how many points there are
    var x1 = (i * widthX);
    var y1 = (cos(i * radians(2)) * heightY);
    var x = x1 * cos(rotation) - y1 * sin(rotation);
    var y = y1 * cos(rotation) + x1 * sin(rotation);
    vertex(x, y);
  }
  translate(50,0);

  endShape();
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizeY"]    = map(percent, 0, 100, oldObj["sizeY"], newObj["sizeY"]);
  new_letter["sizeX"]    = map(percent, 0, 100, oldObj["sizeX"], newObj["sizeX"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]