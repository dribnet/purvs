
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
  stroke(colorStroke);
  strokeWeight(20);

  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50+letterData["offsetx"];
  //let pos2y = 150+letterData["offsety"];
  let rlx = letterData["rx1"];
  let rly = letterData["ry1"];
  let rlx2 = letterData["rx2"];
  let rly2 = letterData["ry2"];

  let olx = letterData["ox1"];
  let oly = letterData["oy1"];
  let olx2 = letterData["ox2"];
  let oly2 = letterData["oy2"];

  let ex = letterData["c1x"];
  let ey = letterData["c1y"];
  let ex2 = letterData["c2x"];
  let ey2 = letterData["c2y"]; 

  //red
   stroke(255, 69, 0);
   strokeCap(ROUND);
   line(rlx, rly, rlx2, rly2);
  
  //gold
    stroke(255, 165, 0);
    strokeCap(ROUND);
    line(olx, oly, olx2, oly2);

  //circle 1
    fill(255);
    strokeWeight(15)
    stroke(255, 215, 0);
    ellipse(ex,ey,50,50)
  //circle 2
    ellipse(ex2,ey2,50,50)


  // draw two circles
  //ellipse(50, 150, 100, 100);
  //ellipse(pos2x, pos2y, size2, size2);
}
