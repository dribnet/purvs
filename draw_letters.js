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

  quad(quadx1_1, quady1_1, quadx2_1, quady2_1, quadx3_1, quady3_1, quadx4_1,quady4_1);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
    
  new_letter["qua_x1_1"] = map(percent, 0, 100, oldObj ["qua_x1_1"], newObj["qua_x1_1"]);
  new_letter["qua_y1_1"] = map(percent, 0, 100, oldObj ["qua_y1_1"], newObj["qua_y1_1"]);
  new_letter["qua_x2_1"] = map(percent, 0, 100, oldObj ["qua_x2_1"], newObj["qua_x2_1"]);
  new_letter["qua_y2_1"] = map(percent, 0, 100, oldObj ["qua_y2_1"], newObj["qua_y2_1"]);
  new_letter["qua_x3_1"] = map(percent, 0, 100, oldObj ["qua_x3_1"], newObj["qua_x3_1"]);
  new_letter["qua_y3_1"] = map(percent, 0, 100, oldObj ["qua_y3_1"], newObj["qua_y3_1"]);
  new_letter["qua_x4_1"] = map(percent, 0, 100, oldObj ["qua_x4_1"], newObj["qua_x4_1"]);
  new_letter["qua_y4_1"] = map(percent, 0, 100, oldObj ["qua_y4_1"], newObj["qua_y4_1"]);

  new_letter["size"]     = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"]  = map(percent, 0, 100, oldObj ["offsetx"], newObj["offsetx"]);
  new_letter["offsety"]  = map(percent, 0, 100, oldObj ["offsety"], newObj["offsety"]);
  new_letter["size2"]    = map(percent, 0, 100, oldObj ["size2"],       newObj["size2"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj ["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj ["offsety2"], newObj["offsety2"]);
  
  return new_letter;
}
