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
  fill(20);
  stroke(20);
  strokeWeight(4);

  //first triangle
  let posax = letterData["pax"];
  let posay = letterData["pay"];
  let posbx = letterData["pbx"];
  let posby = letterData["pby"];
  let poscx = letterData["pcx"];
  let poscy = letterData["pcy"];

  //second triangle

  let pos1x = letterData["p1x"];
  let pos1y = letterData["p1y"];
  let pos2x = letterData["p2x"];
  let pos2y = letterData["p2y"];
  let pos3x = letterData["p3x"];
  let pos3y = letterData["p3y"];

  // draw two triangles
  triangle(posax, posay, posbx, posby, poscx, poscy);
  triangle(pos1x , pos1y, pos2x, pos2y, pos3x, pos3y);
 
  noFill();
  stroke(colorFront);
  rect(0, 0, 100, 200)
}
