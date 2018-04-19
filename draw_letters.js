const colorFront  = "#e2e2e0";
const colorStroke = "#333332";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for lines
  //anchor point 1 - inital placement of first curve
  let posx = 0;
  let posy = 0;

  let vert1x = posx + letterData["vertX"];
  let vert1y = posy + letterData["vertY"];

  //control point/handle for first curve
  let ctrl1Px = posx + letterData["ctrlPx"];
  let ctrl1Py = posy + letterData["ctrlPy"];

  //anchor point 2 - end of first curve
  let vert2x = posx + letterData["vertX2"];
  let vert2y = posy + letterData["vertY2"];

  //control point/handle for second curve
  let ctrl2Px = posx + letterData["ctrlPx2"];
  let ctrl2Py = posy + letterData["ctrlPy2"];

  //anchor point 3 - end of second curve
  let vert3x = posx + letterData["vertX3"];
  let vert3y = posy + letterData["vertY3"];

  // draw two lines
  push();
  noStroke();
  fill(colorFront);
  rect(posx, posy, 100, 200);
  pop();
  
  push();
  scale(1.6);
  translate(-22, -25);
  stroke(colorStroke);
  noFill();
  strokeWeight(10);
  beginShape();
  vertex(vert1x, vert1y);
  quadraticVertex(ctrl1Px, ctrl1Py, vert2x, vert2y);
  quadraticVertex(ctrl2Px, ctrl2Py, vert3x, vert3y);
  endShape();
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["vertX"] = map(percent, 0, 100, oldObj["vertX"], newObj["vertX"]);
  new_letter["vertY"] = map(percent, 0, 100, oldObj["vertY"], newObj["vertY"]);
  new_letter["ctrlPx"] = map(percent, 0, 100, oldObj["ctrlPx"], newObj["ctrlPx"]);
  new_letter["ctrlPy"] = map(percent, 0, 100, oldObj["ctrlPy"], newObj["ctrlPy"]);
  new_letter["vertX2"] = map(percent, 0, 100, oldObj["vertX2"], newObj["vertX2"]);
  new_letter["vertY2"] = map(percent, 0, 100, oldObj["vertY2"], newObj["vertY2"]);
  new_letter["ctrlPx2"] = map(percent, 0, 100, oldObj["ctrlPx2"], newObj["ctrlPx2"]);
  new_letter["ctrlPy2"] = map(percent, 0, 100, oldObj["ctrlPy2"], newObj["ctrlPy2"]);
  new_letter["vertX3"] = map(percent, 0, 100, oldObj["vertX3"], newObj["vertX3"]);
  new_letter["vertY3"] = map(percent, 0, 100, oldObj["vertY3"], newObj["vertY3"]);
  return new_letter;
}
