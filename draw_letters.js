const colorFront  = "#F7134A";
const colorStroke = "#F787D5";

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
  strokeWeight(4);
  angleMode(DEGREES);

 // determine parameters for the arcs
   let rot1 = letterData["rot1"];
   let rot2 = letterData["rot2"];
   let rot3 = letterData["rot3"];
   let rot4 = letterData["rot4"];
  let offsetx1 = letterData["offsetx1"];
  let offsetx2 = letterData["offsetx2"];
  let offsetx3 = letterData["offsetx3"];
  let offsetx4 = letterData["offsetx4"]; 
  let offsety1 = letterData["offsety1"];
  let offsety2 = letterData["offsety2"];
  let offsety3 = letterData["offsety3"];
  let offsety4 = letterData["offsety4"];
  

  push();
  translate(80, 100);

//arc1
  push();
  rotate(rot1);
  scale(0.5);
  fill(colorFront);
  arc(offsetx1, offsety1, 200, 200, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offsetx1+31, offsety1, 150, 200, 96, 264, CHORD);
  pop();

//arc2
   push();
   rotate(rot2);
   scale(0.5);
  fill(colorFront);
  arc(offsetx2, offsety2, 200, 200, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offsetx2+31, offsety2, 150, 200, 96, 264, CHORD);
  pop();

//arc3
   push();
   rotate(rot3);
   scale(0.5);
  fill(colorFront);
  arc(offsetx3, offsety3, 200, 200, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offsetx3+31, offsety3, 150, 200, 96, 264, CHORD);
  pop();

//arc4
   push();
   rotate(rot4);
   scale(0.5);
  fill(colorFront);
  arc(offsetx4, offsety4, 100, 100, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offsetx4+17, offsety4, 50, 100, 96, 264, CHORD);
  pop();

  pop();
}
