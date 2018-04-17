const colorFont  = "#800000";
const colorStroke = "#000000";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
angleMode(DEGREES);

  rect(0,0,100,200);
  // color/stroke setup
  fill(colorFont);
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50+letterData["offsetx"];
  let pos2y = 150+letterData["offsety"];

  // draw two circles
  
  //translate(width/290, height/155);
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

  let circle_x = letterData["c_posx"];
  let circle_y = letterData["c_posy"];
  let circle_w = letterData["c_width"];
  let circle_h = letterData["c_height"];

  let r_rot = letterData["r_letter"];


  push();
  translate(50, 100);
  //ellipse(0,0,1,1); //Activate only for reference
  

  rotate(r_rot);
  translate(-50, -100);
  rect(x,y,w,h);
  ellipse(circle_x ,circle_y, circle_w, circle_h);
  rect(x2,y2,w2,h2);
  rect(x3,y3,w3,h3);
  rect(x4,y4,w4,h4);
  

  pop();
  fill(163,160,162);
  ellipse(0,0,1,1);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["w"] = map(percent, 0, 100, oldObj["w"], newObj["w"]);
  new_letter["h"] = map(percent, 0, 100, oldObj["h"], newObj["h"]);
  new_letter["x"] = map(percent, 0, 100, oldObj["x"], newObj["x"]);
  new_letter["y"] = map(percent, 0, 100, oldObj["y"], newObj["y"]);

  new_letter["w2"] = map(percent, 0, 100, oldObj["w2"], newObj["w2"]);
  new_letter["h2"] = map(percent, 0, 100, oldObj["h2"], newObj["h2"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);

  new_letter["w3"] = map(percent, 0, 100, oldObj["w3"], newObj["w3"]);
  new_letter["h3"] = map(percent, 0, 100, oldObj["h3"], newObj["h3"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);

  new_letter["w4"] = map(percent, 0, 100, oldObj["w4"], newObj["w4"]);
  new_letter["h4"] = map(percent, 0, 100, oldObj["h4"], newObj["h4"]);
  new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);

  new_letter["circle_x"] = map(percent, 0, 100, oldObj["circle_x"], newObj["circle_x"]);
  new_letter["circle_y"] = map(percent, 0, 100, oldObj["circle_y"], newObj["circle_y"]);
  new_letter["circle_w"] = map(percent, 0, 100, oldObj["circle_w"], newObj["circle_w"]);
  new_letter["circle_h"] = map(percent, 0, 100, oldObj["circle_h"], newObj["circle_h"]);

  new_letter["r_rot"] = map(percent, 0, 100, oldObj["r_rot"], newObj["r_rot"]);

  return new_letter;
}
