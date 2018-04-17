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
  //rect(0,0,100,200);
  //color/stroke setup
  fill(colorFont);
  stroke(colorStroke);
  strokeWeight(4);

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

  new_letter["width_1"] = map(percent, 0, 100, oldObj["width_1"], newObj["width_1"]);
  new_letter["height_1"] = map(percent, 0, 100, oldObj["height_1"], newObj["height_1"]);
  new_letter["pos_x1"] = map(percent, 0, 100, oldObj["pos_x1"], newObj["pos_x1"]);
  new_letter["pos_y1"] = map(percent, 0, 100, oldObj["pos_y1"], newObj["pos_y1"]);

  new_letter["width_2"] = map(percent, 0, 100, oldObj["width_2"], newObj["width_2"]);
  new_letter["height_2"] = map(percent, 0, 100, oldObj["height_2"], newObj["height_2"]);
  new_letter["pos_x2"] = map(percent, 0, 100, oldObj["pos_x2"], newObj["pos_x2"]);
  new_letter["pos_y2"] = map(percent, 0, 100, oldObj["pos_y2"], newObj["pos_y2"]);

  new_letter["width_3"] = map(percent, 0, 100, oldObj["width_3"], newObj["width_3"]);
  new_letter["height_3"] = map(percent, 0, 100, oldObj["height_3"], newObj["height_3"]);
  new_letter["pos_x3"] = map(percent, 0, 100, oldObj["pos_x3"], newObj["pos_x3"]);
  new_letter["pos_y3"] = map(percent, 0, 100, oldObj["pos_y3"], newObj["pos_y3"]);

  new_letter["width_4"] = map(percent, 0, 100, oldObj["width_4"], newObj["width_4"]);
  new_letter["height_4"] = map(percent, 0, 100, oldObj["height_4"], newObj["height_4"]);
  new_letter["pos_x4"] = map(percent, 0, 100, oldObj["pos_x4"], newObj["pos_x4"]);
  new_letter["pos_y4"] = map(percent, 0, 100, oldObj["pos_y4"], newObj["pos_y4"]);

  new_letter["c_posx"] = map(percent, 0, 100, oldObj["c_posx"], newObj["c_posx"]);
  new_letter["c_posy"] = map(percent, 0, 100, oldObj["c_posy"], newObj["c_posy"]);
  new_letter["c_width"] = map(percent, 0, 100, oldObj["c_width"], newObj["c_width"]);
  new_letter["c_height"] = map(percent, 0, 100, oldObj["c_height"], newObj["c_height"]);

  new_letter["r_letter"] = map(percent, 0, 100, oldObj["r_letter"], newObj["r_letter"]);

  return new_letter;
}
