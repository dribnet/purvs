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
  fill(75);
  stroke(colorStroke);

  // determine parameters for arcs
  //let size2 = letterData["size"];
  //let pos2x = 50+letterData["offsetx"];
  //let pos2y = 150+letterData["offsety"];

  let outer_arcStart = letterData["box1"]["arcStart"];
  let outer_arcEnd = letterData["box1"]["arcEnd"];
  let mid_arcStart = letterData["box2"]["arcStart"];
  let mid_arcEnd = letterData["box2"]["arcEnd"];
  let inner_arcStart = letterData["box3"]["arcStart"];
  let inner_arcEnd = letterData["box3"]["arcEnd"];

  // draw three arcs

  noFill();
  stroke(220);
  angleMode(DEGREES);

  push();
    scale(0.6);
    translate(50, 70);
    strokeWeight(12);
    arc(50, 100, 200, 200, outer_arcStart, outer_arcEnd);
    strokeWeight(10);
    arc(50, 100, 150, 150, mid_arcStart, mid_arcEnd);
    strokeWeight(8);
    arc(50, 100, 100, 100, inner_arcStart, inner_arcEnd);
  pop();
}
