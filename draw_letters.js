const colorFront  = "#199cff";
const colorStroke = "#ffffff";
const colorInside = "#ffffff";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  //boundary
  // push();
  // rectMode(CENTER);
  // stroke(255);
  // scale(0.8);
  // noFill();
  // rect(75, 125, 140, 200);
  // pop();

  let x = 45;
  let y = 170;
  let shrink = 0.6;
  // color/stroke setup
  // const colorFron  = "#281c1c";
  // const colorBack   = "#ffcfcd";
  // const colorStroke = "#ffffff";
  // const colorInside = "#ffffff";

  // fill(40, 28, 28, alphaSide);
  // stroke(colorStroke);
  noStroke();
  angleMode(DEGREES);
  strokeWeight(4);

  // determine parameters for second circle
  let alphaSide = letterData["status"];
  let alphaFront = map(alphaSide, 0, 255, 255, 0);

  let transx = x + letterData["movex"];
  let transy = y + letterData["movey"];

  let rot = letterData["r"];
  let rot2 = letterData["r2"];
  let rot3 = letterData["r3"];
  let rot4 = letterData["r4"];

  let gap2x = transx + letterData["offset2x"];
  let gap2y = transy + letterData["offset2y"];

  let gap3x = letterData["offset3x"];
  let gap3y = letterData["offset3y"];

  let gap4x = letterData["offset4x"];
  let gap4y = letterData["offset4y"];

  // draw oreo
    drawSide(shrink, transx, transy, rot, rot2, rot3, rot4, gap2x, gap2y, gap3x, gap3y, gap4x, gap4y, alphaSide);
    drawFront(shrink, transx, transy, rot, rot2, rot3, rot4, gap2x, gap2y, gap3x, gap3y, gap4x, gap4y, alphaFront);
}

function drawSide(Sshrink, trax, tray, rotate1, rotate2, rotate3, rotate4, tra2x, tra2y, tra3x, tra3y, tra4x, tra4y, alphaS){
  push();
  scale(Sshrink);
  translate(trax, tray);
  rotate(rotate1);
  fill(40, 28, 28, alphaS);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(255, 255, 255, alphaS);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();

  push();
  scale(Sshrink);
  translate(tra2x, tra2y);
  rotate(rotate1 + rotate2);
  fill(40, 28, 28, alphaS);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(255, 255, 255, alphaS);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();

  push();
  scale(Sshrink);
  translate(trax + tra3x, tray + tra3y);
  rotate(rotate1 + rotate3);
  fill(40, 28, 28, alphaS);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(255, 255, 255, alphaS);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();

  push();
  scale(Sshrink);
  translate(tra2x + tra4x, tra2y + tra4y);
  rotate(rotate1 + rotate4);
  fill(40, 28, 28, alphaS);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(255, 255, 255, alphaS);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();
}

function drawFront(Fshrink, trax, tray, rotate1, rotate2, rotate3, rotate4,  tra2x, tra2y, tra3x, tra3y, tra4x, tra4y, alphaF){
  push();
  scale(Fshrink);
  translate(trax, tray);
  rotate(rotate1);
  fill(40, 28, 28, alphaF);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(255, 255, 255, alphaF);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();

  push();
  scale(Fshrink);
  translate(tra2x, tra2y);
  rotate(rotate1 + rotate2);
  fill(40, 28, 28, alphaF);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(255, 255, 255, alphaF);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();

  push();
  scale(Fshrink);
  translate(trax + tra3x, tray + tra3y);
  fill(40, 28, 28, alphaF);
  drawOreo(0, 0, 120, alphaF);
  pop();

  push();
  scale(Fshrink);
  translate(tra2x + tra4x, tra2y + tra4y);
  fill(40, 28, 28, alphaF);
  drawOreo(0, 0, 120, alphaF);
  pop();
}

function drawOreo(ox, oy, size, alphaO){
  push();
  // const colorPattern = "#514444";
  fill(40, 28, 28, alphaO);
  ellipseMode(CENTER);
  ellipse(ox, oy, size, size);

  fill(81, 68, 68, alphaO);
  push();
  for(let i = 0; i < 30; i ++){
    rotate(12);
    rect(ox + 43, oy, 10, 5, 3);
  }
  pop();
  push();
  for(let v = 0; v < 6; v ++){
    rotate(60);
    triangle(ox - 6, oy - 38, ox + 6, oy - 38, ox, oy - 30);
    triangle(ox - 6, oy - 18, ox + 6, oy - 18, ox, oy - 26);
    triangle(ox - 10, oy - 34, ox - 10, oy - 22, ox - 2, oy - 28);
    triangle(ox + 10, oy - 34, ox + 10, oy - 22, ox + 2, oy - 28);
    ellipse(ox + 16, oy - 28, 6, 6);
  }
  pop();
  stroke(81, 68, 68, alphaO);
  strokeWeight(4);
  noFill();
  ellipse(ox, oy, size * 0.2, size * 0.2);
  pop();
}

function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["status"] = map(percent, 0, 100, oldObj["status"], newObj["status"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["r"] = map(percent, 0, 100, oldObj["r"], newObj["r"]);
  new_letter["r2"] = map(percent, 0, 100, oldObj["r2"], newObj["r2"]);
  new_letter["r3"] = map(percent, 0, 100, oldObj["r3"], newObj["r3"]);
  new_letter["r4"] = map(percent, 0, 100, oldObj["r4"], newObj["r4"]);
  new_letter["movex"] = map(percent, 0, 100, oldObj["movex"], newObj["movex"]);
  new_letter["movey"] = map(percent, 0, 100, oldObj["movey"], newObj["movey"]);
  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);
  new_letter["offset4x"] = map(percent, 0, 100, oldObj["offset4x"], newObj["offset4x"]);
  new_letter["offset4y"] = map(percent, 0, 100, oldObj["offset4y"], newObj["offset4y"]);
  return new_letter;
}
var swapWords = [
  "OREOTIME",
  "DAYDREAM",
  "SHERLOCK",
  "TASTEME!"
]