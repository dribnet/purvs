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
  let pos2x = 50+letterData["offsetx"];
  let pos2y = 150+letterData["offsety"];
  let spin1 = letterData["rotate1"];
  let spin2 = letterData["rotate2"];
  let spin3 = letterData["rotate3"];


  // draw two circles
  angleMode(DEGREES);
  rectMode(CENTER);

  
  // push();
  //   translate(50,190);
  //   rotate(spin2);
  //   translate(-50,-190);
  //   rect(50,190,20,70)
  // pop();

ellipse(50,175,35,35)
  push();
    translate(pos2x,pos2y);
    rotate(spin1);
    translate(-pos2x,-pos2y);
    rect(pos2x,pos2y,20,80)
  pop();  

  push();

  pop();


}
