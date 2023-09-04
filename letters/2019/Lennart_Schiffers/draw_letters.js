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
  // load data for first wave
  let heightY = letterData["heightY"];
  let widthX = letterData["widthX"];
  let rotation_angle = letterData["rotation_angle"];
  let length = letterData["length"];
  let Blength = letterData["Blength"];
  let offsetY = letterData["offsetY"];
  let offsetX = letterData["offsetX"];
  // convert rotation
  var rotation = (rotation_angle/180)*Math.PI

  // load data for second wave
  let heightY1 = letterData["heightY1"];
  let widthX1 = letterData["widthX1"];
  let rotation_angle1 = letterData["rotation_angle1"];
  let length1 = letterData["length1"];
  let Blength1 = letterData["Blength1"];
  let offsetY1 = letterData["offsetY1"];
  let offsetX1 = letterData["offsetX1"];
  // convert rotation
  var rotation1 = (rotation_angle1/180)*Math.PI

  // first wave only passing fill attributes to second wave over as well
  fill(0,0,0,0);
  stroke(colorFront1);
  strokeWeight(8);
  beginShape();
  for(var i = -Blength; i < length; i++) { // defines the length and how many points there are
    var x1 = (i * widthX); // width of cosinus wave
    var y1 = (cos(i * radians(2)) * heightY); //height of cosinus wave
    var x = x1 * cos(rotation) - y1 * sin(rotation) + offsetX +50;
    var y = (y1 * cos(rotation) + x1 * sin(rotation)) +heightY + offsetY;
    vertex(x, y);
  }
  endShape();

  // second wave
  stroke(colorFront2);
  beginShape();
  for(var i = -Blength1; i < length1; i++) { // defines the length and how many points there are
    var x3 = (i * widthX1); // width of cosinus wave
    var y3 = (cos(i * radians(2)) * heightY1); //height of cosinus wave
    var x2 = x3 * cos(rotation1) - y3 * sin(rotation1) + offsetX1+50;
    var y2 = (y3 * cos(rotation1) + x3 * sin(rotation1)) + heightY1 + offsetY1;
    vertex(x2, y2);
  }
  endShape();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["heightY"] = map(percent, 0, 100, oldObj["heightY"], newObj["heightY"]);
  new_letter["widthX"] = map(percent, 0, 100, oldObj["widthX"], newObj["widthX"]);
  new_letter["length"] = map(percent, 0, 100, oldObj["length"], newObj["length"]);
  new_letter["Blength"] = map(percent, 0, 100, oldObj["Blength"], newObj["Blength"]);
  new_letter["offsetX"] = map(percent, 0, 100, oldObj["offsetX"], newObj["offsetX"]);
  new_letter["offsetY"] = map(percent, 0, 100, oldObj["offsetY"], newObj["offsetY"]);

  new_letter["heightY1"] = map(percent, 0, 100, oldObj["heightY1"], newObj["heightY1"]);
  new_letter["widthX1"] = map(percent, 0, 100, oldObj["widthX1"], newObj["widthX1"]);
  new_letter["length1"] = map(percent, 0, 100, oldObj["length1"], newObj["length1"]);
  new_letter["Blength1"] = map(percent, 0, 100, oldObj["Blength1"], newObj["Blength1"]);
  new_letter["offsetX1"] = map(percent, 0, 100, oldObj["offsetX1"], newObj["offsetX1"]);
  new_letter["offsetY1"] = map(percent, 0, 100, oldObj["offsetY1"], newObj["offsetY1"]);

  let new_percent = 0;
  let amount_of_anticipation = 40;
  if (percent < amount_of_anticipation){
    new_percent = map(percent, 0, amount_of_anticipation, 0, -10);
  }
  else {
    new_percent = map(percent, amount_of_anticipation, 100, -10, 100);
  }
  new_letter["rotation_angle"] = map(new_percent, 0, 100, oldObj["rotation_angle"], newObj["rotation_angle"]);
  new_letter["rotation_angle1"] = map(new_percent, 0, 100, oldObj["rotation_angle1"], newObj["rotation_angle1"]);

  return new_letter;
}


var swapWords = [
  "  WAVE  ",
  "COSINUS ",
  "ETC12345"
]