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
  fill(0);
  noStroke();

  //determines parameters for quad

  let quadx1_1 = letterData["qua_x1_1"];
  let quady1_1 = letterData["qua_y1_1"];
  let quadx2_1 = letterData["qua_x2_1"];
  let quady2_1 = letterData["qua_y2_1"];
  let quadx3_1 = letterData["qua_x3_1"];
  let quady3_1 = letterData["qua_y3_1"];
  let quadx4_1 = letterData["qua_x4_1"];
  let quady4_1 = letterData["qua_y4_1"];

  // determines parameters for circle 1

  let ellipse_size = letterData["size"];
  let ellipse_posx = 50+letterData["offsetx"];
  let ellipse_posy = 100+letterData["offsety"];
  
  // determines parameters for circle 2

  let ellipse_size2 = letterData["size2"];
  let ellipse_pos2x = 50+letterData["offsetx2"];
  let ellipse_pos2y = 100+letterData["offsety2"];


  // draw two circles
  
  ellipse(ellipse_posx, ellipse_posy, ellipse_size, ellipse_size);
  ellipse(ellipse_pos2x, ellipse_pos2y, ellipse_size2, ellipse_size2);


//quads

  //quad(-15, 0, 55, 0, 140, 200,70,200)
  quad(quadx1_1, quady1_1, quadx2_1, quady2_1, quadx3_1, quady3_1, quadx4_1,quady4_1);
}
