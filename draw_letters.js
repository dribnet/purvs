
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  stroke(255);
  noFill();
  rect(0, 0, 100, 200);


  strokeWeight(2.5);
  let posx = 5;
  let posy = 89;
  push();
  scale(2.2);

  let pos1x = posx + letterData["x1"];
  let pos1y = posy + letterData["y1"];
  let pos2x = posx + letterData["x2"];
  let pos2y = posy + letterData["y2"];
  let pos3x = posx + letterData["x3"];
  let pos3y = posy + letterData["y3"];
  let pos4x = posx + letterData["x4"];
  let pos4y = posy + letterData["y4"];


  // draw two circles
  let col1 = map(pos1x, -150, 150, 0, 255);
  let col2 = map(pos2y, -150, 150, 0, 255);
  let col3 = map(pos3y, -150, 150, 0, 255);

  fill(col1*1.6, col2*1.5, col3*1.9, 100);
  bezier(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y, pos4x, pos4y);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["x1"] = map(percent, 0 , 100, oldObj["x1"],  newObj["x1"]);
  new_letter["y1"] = map(percent, 0 , 100, oldObj["y1"],  newObj["y1"]);
  new_letter["x2"] = map(percent, 0 , 100, oldObj["x2"],  newObj["x2"]);
  new_letter["y2"] = map(percent, 0 , 100, oldObj["y2"],  newObj["y2"]);
  new_letter["x3"] = map(percent, 0 , 100, oldObj["x3"],  newObj["x3"]);
  new_letter["y4"] = map(percent, 0 , 100, oldObj["y4"],  newObj["y4"]);
  new_letter["x4"] = map(percent, 0 , 100, oldObj["x4"],  newObj["x4"]);
  new_letter["y4"] = map(percent, 0 , 100, oldObj["y4"],  newObj["y4"]);

  return new_letter;

}