const colorFront  = "#23c7e0";
const colorStroke = "#f98d00";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(3);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos1x = 50+letterData["offsetx"];
  let pos1y = 150+letterData["offsety"];
  let spin1 = letterData["rotate"];
  let pos2x = letterData["offset2x"];
  let pos2y = letterData["offset2y"];
  let pos3x = letterData["offset3x"];
  let pos3y = letterData["offset3y"];
  let pos4x = letterData["offset4x"];
  let pos4y = letterData["offset4y"];
  // draw two circles
  angleMode(DEGREES);
  rectMode(CENTER);

  

  ellipse(pos2x,pos2y,35,35);


  push();
    translate(pos1x,pos1y);
    rotate(spin1);
    translate(-pos1x,-pos1y);
    rect(pos1x,pos1y,20,size2)
  pop();  

  ellipse(pos3x,pos3y,35,35);
  ellipse(pos4x,pos4y,35,35);


}
