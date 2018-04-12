const colorFront  = "#199cff";
const colorStroke = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  //fill(colorFront);

  noFill();
  stroke(colorStroke);
  strokeWeight(2);

  let posx=50;
  let posy=100;
  let scale = 0;
  let size1 = letterData["size_i"];
  let size3 = letterData["size2"];
  let size4 = letterData["size3"];
  let size5 = letterData["size4"];

  let posix = posx + letterData["xi"];
  let posiy = posy + letterData["yi"];
  let pos1x = posx + letterData["x1"];
  let pos1y = posy + letterData["y1"];
  let pos2x = posx + letterData["x2"];
  let pos2y = posy + letterData["y2"];

  stroke(200,100,100);
  push();
  beginShape();
  vertex(posx,posy-40);
  vertex(posx+40,posy);
  vertex(posx,posy+40);
  vertex(posx-40,posy);
  endShape(CLOSE);
  pop();

  line(posx,posy-30,posx,posy+30);
  line(posx+30,posy,posx-30,posy);
  ellipse(posix, posiy, size1, size1);
  ellipse(pos1x, pos1y, size3, size3);
  ellipse(pos2x, pos2y, size4, size5);

  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50+letterData["offsetx"];
  //let pos2y = 150+letterData["offsety"];

  // draw two circles
  //ellipse(50, 150, 100, 100);
  //ellipse(pos2x, pos2y, size2, size2);
}
