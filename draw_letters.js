const colorFront1  = "#264953";
const colorFront2  = "#16625E";
const colorStroke  = "#233f11";

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
  strokeWeight(1);

  let ball_pos_x = letterData["ballposx"];
  let ball_pos_y = letterData["ballposy"];
  let ball_size_w = letterData["ballsizew"];
  let ball_size_h = letterData["ballsizeh"];
  let ball_pos_x2 = letterData["ball2posx"];
  let ball_pos_y2 = letterData["ball2posy"];
  let ball_size_w2 = letterData["ball2sizew"];
  let ball_size_h2 = letterData["ball2sizeh"];
  let ball_pos_x3 = letterData["ball3posx"];
  let ball_pos_y3 = letterData["ball3posy"];
  let ball_size_w3 = letterData["ball3sizew"];
  let ball_size_h3 = letterData["ball3sizeh"];
  let ball_pos_x4 = letterData["ball4posx"];
  let ball_pos_y4 = letterData["ball4posy"];
  let ball_size_w4 = letterData["ball4sizew"];
  let ball_size_h4 = letterData["ball4sizeh"];
  let ball_pos_x5 = letterData["ball5posx"];
  let ball_pos_y5 = letterData["ball5posy"];
  let ball_size_w5 = letterData["ball5sizew"];
  let ball_size_h5 = letterData["ball5sizeh"];

  fill(colorFront1);
  push();
  translate(50,100)
  ellipse(ball_pos_x, ball_pos_y, ball_size_w, ball_size_h);
  ellipse(ball_pos_x2, ball_pos_y2, ball_size_w2, ball_size_h2);
  ellipse(ball_pos_x3, ball_pos_y3, ball_size_w3, ball_size_h3);

  fill(colorFront2);
  ellipse(ball_pos_x4, ball_pos_y4, ball_size_w4, ball_size_h4);
  ellipse(ball_pos_x5, ball_pos_y5, ball_size_w5, ball_size_h5);

  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]