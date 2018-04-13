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
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50+letterData["offsetx"];
  let pos2y = 150+letterData["offsety"];

  // draw two circles
  
  translate(width/290, height/155);
 //ellipse(50, 150, 200, 200);
  //ellipse(pos2x, pos2y, size2, size2);

  let w = letterData["width_1"];
  let h = letterData["height_1"];
  let x = letterData["pos_x1"];
  let y = letterData["pos_y1"];

  let w2 = letterData["width_2"];
  let h2 = letterData["height_2"];
  let x2 = letterData["pos_x2"];
  let y2 = letterData["pos_y2"];

  let w3 = letterData["width_3"];
  let h3 = letterData["height_3"];
  let x3 = letterData["pos_x3"];
  let y3 = letterData["pos_y3"];

  let w4 = letterData["width_4"];
  let h4 = letterData["height_4"];
  let x4 = letterData["pos_x4"];
  let y4 = letterData["pos_y4"];

  let circle_x = 55;
  let circle_y = 140;
  let circle_w = letterData["c_width"];
  let circle_h = letterData["c_height"];

  let r_rot = letterData["r_letter"];

  
  ellipse(circle_x ,circle_y, circle_w, circle_h);
  rotate(r_rot);
  rect(x,y,w,h);
  rect(x2,y2,w2,h2);
  rect(x3,y3,w3,h3);
  rect(x4,y4,w4,h4);
}
