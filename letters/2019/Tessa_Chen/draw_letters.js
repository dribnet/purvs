
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup

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

  let p = 0;
  let q = 0;

  push();
  translate(50,100)
  
  let m = millis() % 2000;

  if (m < 1000){
    p = map(m, 0, 1000, 2, -2);
    q = map(m, 0, 1000, -3, 3);

  }
  else {
    p = map(m, 1000, 2000, -2, 2);
    q = map(m, 1000, 2000, 3, -3);

  }

  noStroke();
  fill("#2D728F");
  ellipse(ball_pos_x+3, ball_pos_y+15, ball_size_w+2, ball_size_h);
  ellipse(ball_pos_x2+3, ball_pos_y2+15, ball_size_w2+2, ball_size_h2);
  ellipse(ball_pos_x3+3, ball_pos_y3+15, ball_size_w3+2, ball_size_h3);
  ellipse(ball_pos_x4+3, ball_pos_y4+15, ball_size_w4+2, ball_size_h4);
  ellipse(ball_pos_x5+3, ball_pos_y5+15, ball_size_w5+2, ball_size_h5); 


  fill("#F59178");
  ellipse(ball_pos_x+2, ball_pos_y+3 + p, ball_size_w, ball_size_h);
  ellipse(ball_pos_x2+2, ball_pos_y2+3 + q, ball_size_w2, ball_size_h2);
  ellipse(ball_pos_x3+2, ball_pos_y3+3 + p, ball_size_w3, ball_size_h3);
  ellipse(ball_pos_x4+2, ball_pos_y4+3 + q, ball_size_w4, ball_size_h4);
  ellipse(ball_pos_x5+2, ball_pos_y5+3 + p, ball_size_w5, ball_size_h5); 

  fill("#F5C078");
  ellipse(ball_pos_x, ball_pos_y + p, ball_size_w, ball_size_h);
  ellipse(ball_pos_x2, ball_pos_y2 + q, ball_size_w2, ball_size_h2);
  ellipse(ball_pos_x3, ball_pos_y3 + p, ball_size_w3, ball_size_h3);
  ellipse(ball_pos_x4, ball_pos_y4 + q, ball_size_w4, ball_size_h4);
  ellipse(ball_pos_x5, ball_pos_y5 + p, ball_size_w5, ball_size_h5);
  pop();


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["ballposx"] = map(percent, 0, 100, oldObj["ballposx"], newObj["ballposx"]);
  new_letter["ballposy"] = map(percent, 0, 100, oldObj["ballposy"], newObj["ballposy"]);
  new_letter["ballsizew"] = map(percent, 0, 100, oldObj["ballsizew"], newObj["ballsizew"]);
  new_letter["ballsizeh"] = map(percent, 0, 100, oldObj["ballsizeh"], newObj["ballsizeh"]);

  new_letter["ball2posx"] = map(percent, 0, 100, oldObj["ball2posx"], newObj["ball2posx"]);
  new_letter["ball2posy"] = map(percent, 0, 100, oldObj["ball2posy"], newObj["ball2posy"]);
  new_letter["ball2sizew"] = map(percent, 0, 100, oldObj["ball2sizew"], newObj["ball2sizew"]);
  new_letter["ball2sizeh"] = map(percent, 0, 100, oldObj["ball2sizeh"], newObj["ball2sizeh"]);
  
  new_letter["ball3posx"] = map(percent, 0, 100, oldObj["ball3posx"], newObj["ball3posx"]);
  new_letter["ball3posy"] = map(percent, 0, 100, oldObj["ball3posy"], newObj["ball3posy"]);
  new_letter["ball3sizew"] = map(percent, 0, 100, oldObj["ball3sizew"], newObj["ball3sizew"]);
  new_letter["ball3sizeh"] = map(percent, 0, 100, oldObj["ball3sizeh"], newObj["ball3sizeh"]);
  
  new_letter["ball4posx"] = map(percent, 0, 100, oldObj["ball4posx"], newObj["ball4posx"]);
  new_letter["ball4posy"] = map(percent, 0, 100, oldObj["ball4posy"], newObj["ball4posy"]);
  new_letter["ball4sizew"] = map(percent, 0, 100, oldObj["ball4sizew"], newObj["ball4sizew"]);
  new_letter["ball4sizeh"] = map(percent, 0, 100, oldObj["ball4sizeh"], newObj["ball4sizeh"]);
  
  new_letter["ball5posx"] = map(percent, 0, 100, oldObj["ball5posx"], newObj["ball5posx"]);
  new_letter["ball5posy"] = map(percent, 0, 100, oldObj["ball5posy"], newObj["ball5posy"]);
  new_letter["ball5sizew"] = map(percent, 0, 100, oldObj["ball5sizew"], newObj["ball5sizew"]);
  new_letter["ball5sizeh"] = map(percent, 0, 100, oldObj["ball5sizeh"], newObj["ball5sizeh"]);
  return new_letter;
}

var swapWords = [
  "FREEFLOW",
  "HSINCHEN",
  "19980212"
]