const colorFront  = "#281c1c";
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
  push();
  rectMode(CENTER);
  stroke(255);
  scale(0.8);
  noFill();
  rect(75, 125, 140, 200);
  pop();

  let x = 45;
  let y = 170;
  let shrink = 0.6;
  // color/stroke setup
  // const colorFront  = "#281c1c";
  // const colorBack   = "#ffcfcd";
  // const colorStroke = "#ffffff";
  // const colorInside = "#ffffff";

  fill(colorFront);
  // stroke(colorStroke);
  noStroke();
  angleMode(DEGREES);
  strokeWeight(4);

  // determine parameters for second circle
  let sta = letterData["status"];

  let transx = x + letterData["movex"];
  let transy = y + letterData["movey"];

  let rot = letterData["r"];
  let rot2 = letterData["r2"];
  let rotgap = letterData["rotoffset"];
  let rotgap2 = letterData["rotoffset2"];

  let gapx = letterData["gx"];
  let gapy = letterData["gy"];

  let gap2x = letterData["g2x"];
  let gap2y = letterData["g2y"];

  let trans2x = transx + letterData["offsetx"];
  let trans2y = transy + letterData["offsety"];

  // draw oreo
  if(sta === 1){
    drawSide(shrink, transx, transy, rot, rot2, rotgap, rotgap2, gapx, gapy, gap2x, gap2y, trans2x, trans2y);
  }else if(sta = 255){
    drawFront(shrink, transx, transy, rot, rot2, rotgap, rotgap2, gapx, gapy, gap2x, gap2y, trans2x, trans2y);
  }
}

function drawSide(shr, trax, tray, rotate1, rotate2, rotate3, rotate4, gax, gay, ga2x, ga2y, tra2x, tra2y){
  push();
  scale(shr);
  translate(trax, tray);
  rotate(rotate1);
  fill(colorFront);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(colorInside);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();

  push();
  scale(shr);
  translate(tra2x, tra2y);
  rotate(rotate1 + rotate2);
  fill(colorFront);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(colorInside);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();

  push();
  scale(shr);
  translate(trax + gax, tray + gay);
  rotate(rotate1 + rotate3);
  fill(colorFront);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(colorInside);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();

  push();
  scale(shr);
  translate(tra2x + ga2x, tra2y + ga2y);
  rotate(rotate1 + rotate4);
  fill(colorFront);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(colorInside);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();
}

function drawFront(shrr, traxx, trayy, rotate11, rotate22, rotate33, rotate44, gaxx, gayy, ga2xx, ga2yy, tra2xx, tra2yy){
  push();
  scale(shrr);
  translate(traxx, trayy);
  rotate(rotate11);
  fill(colorFront);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(colorInside);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();

  push();
  scale(shrr);
  translate(tra2xx, tra2yy);
  rotate(rotate11 + rotate22);
  fill(colorFront);
  rect(0, 0 - 14, 120, 17, 6);
  rect(0, 0 + 14, 120, 17, 6);

  fill(colorInside);
  rect(0 + 10, 0 + 4, 100, 10, 5);
  pop();

  push();
  scale(shrr);
  translate(traxx + gaxx, trayy + gayy);
  fill(colorFront);
  drawOreo(0, 0, 120);
  pop();

  push();
  scale(shrr);
  translate(tra2xx + ga2xx, tra2yy + ga2yy);
  fill(colorFront);
  drawOreo(0, 0, 120);
  pop();
}

function drawOreo(ox, oy, size){
  push();
  const colorPattern = "#514444";
  ellipseMode(CENTER);
  ellipse(ox, oy, size, size);

  fill(colorPattern);
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
  stroke(colorPattern);
  strokeWeight(4);
  noFill();
  ellipse(ox, oy, size * 0.2, size * 0.2);
  pop();
}
