const colorFront  = "#e3eded";
const colorStroke = "#e3eded";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for second circle
  let posx = letterData["x"];
  let posy = letterData["y"];
  let pos1x = letterData["x1"];
  let pos1y = letterData["y1"];
  let pos2x = letterData["x2"];
  let pos2y = letterData["y2"];
  let pos3x = letterData["x3"];
  let pos3y = letterData["y3"];

  // draw the two filled circles
  strokeWeight(5);
  noFill();
  stroke(255);
  ellipse(50+pos2x, 100+pos2y, 40, 40);
  stroke(0);
  strokeWeight(15);
  ellipse(50+pos3x, 100+pos3y, 80, 80);
  strokeWeight(5);
  stroke(255);
  ellipse(50+pos3x, 100+pos3y, 80, 80);
  // draw the two stroked circles
  fill(255);
  stroke(0);
  strokeWeight(5);
  ellipse(50+posx, 100+posy, 20, 20);
  ellipse(50+pos1x, 100+pos1y, 60, 60);
  strokeWeight(1);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x"] = map(percent, 0, 100, oldObj["x"], newObj["x"]);
  new_letter["y"] = map(percent, 0, 100, oldObj["y"], newObj["y"]);
  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  return new_letter;
}


  var swapWords = [
    "ORBITAL?",
    "CIRCULAR",
    "PLANETS ",
    "GALAXYS ",
    "HANLEY M",
    "ETC12345",
  ]