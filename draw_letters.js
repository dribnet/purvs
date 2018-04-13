
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  stroke(255, 0, 0);
  noFill();
  //rect(0, 0, 100, 200);


  strokeWeight(4);
  stroke(255);
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

  fill(random(255),random(255),random(255));
  bezier(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y, pos4x, pos4y);
  pop();
}

