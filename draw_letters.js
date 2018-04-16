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
  // let transx = x;
  let transy = y + letterData["movey"];

  let rot = letterData["r"];
  let rot2 = letterData["r2"];
  let rotgap = letterData["rotoffset"];
  let rotgap2 = letterData["rotoffset2"];

  let gapx = letterData["gx"];
  let gapy = letterData["gy"];

  let gap2x = letterData["g2x"];
  let gap2y = letterData["g2y"];

  let posx = 0;
  let posy = 0;

  let trans2x = transx + letterData["offsetx"];
  let trans2y = transy + letterData["offsety"];

  let rotOreo = letterData["rOreo"];

  // draw oreo
  if(sta === 1){
    push();
    scale(shrink);
    translate(transx, transy);
    rotate(rot);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    scale(shrink);
    translate(trans2x, trans2y);
    rotate(rot + rot2);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    scale(shrink);
    translate(transx + gapx, transy + gapy);
    rotate(rot + rotgap);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    scale(shrink);
    translate(trans2x + gap2x, trans2y + gap2y);
    rotate(rot + rotgap2);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();
  }else if(sta === 0){
    push();
    scale(shrink);
    translate(transx, transy);
    rotate(rot);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    scale(shrink);
    translate(trans2x, trans2y);
    rotate(rot + rot2);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    scale(shrink);
    translate(transx + gapx, transy + gapy);
    fill(colorFront);
    drawOreo(posx, posy, 120);
    pop();

    push();
    scale(shrink);
    translate(trans2x + gap2x, trans2y + gap2y);
    fill(colorFront);
    drawOreo(posx, posy, 120);
    pop();
  }else if(sta === -1){
    push();
    scale(shrink);
    translate(trans2x, trans2y);
    rotate(rot);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    scale(shrink);
    translate(transx + gapx, transy + gapy);
    rotate(rot + rot2);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    scale(shrink);
    translate(transx + gap2x, transy + gap2y);
    fill(colorFront);
    drawHalfOreo(posx, posy, 243, rotOreo);
    pop();
  }else if(sta === 2){
    push();
    scale(shrink);
    translate(transx + gapx, transy + gapy);
    rotate(rot);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    scale(shrink);
    translate(transx, transy);
    fill(colorFront);
    drawBigOreo(posx, posy, 180);
    pop();
  }
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
function drawHalfOreo(hox, hoy, hsize, hr){
  push();
  const colorPattern = "#514444";
  ellipseMode(CENTER);
  angleMode(DEGREES);
  push();
  rotate(hr);
  arc(hox, hoy, hsize, hsize, 0, 180);

  stroke(colorPattern);
  strokeWeight(6);
  noFill();
  arc(hox, hoy, hsize * 0.23, hsize * 0.23, 6, 174)
  pop();
  push();
  fill(colorPattern);
  rotate(hr - 10);
  for(var k = 0; k < 15; k ++){
    rotate(12);
    rect(hox + 86, hoy + 5, 25, 9, 5);
  }
  pop();
  fill(colorPattern);
  push();
  rotate(hr + 60);
  for(var l = 0; l < 3; l ++){
    rotate(60);
    triangle(hox - 14, hoy - 78, hox + 14, hoy - 78, hox, hoy - 60);
    triangle(hox - 14, hoy - 38, hox + 14, hoy - 38, hox, hoy - 56);
    triangle(hox - 22, hoy - 72, hox - 22, hoy - 44, hox - 6, hoy - 58);
    triangle(hox + 22, hoy - 72, hox + 22, hoy - 44, hox + 6, hoy - 58);
  }
  for(var n = 0; n <2; n ++){
    rotate(- 60);
    ellipse(hox + 34, hoy - 60, 12, 12);
  }
  pop();
  pop();
}
function drawBigOreo(box, boy,bsize){
  push();
  const colorPattern = "#514444";
  ellipseMode(CENTER);
  fill(colorFront);
  ellipse(box, boy, bsize, bsize);
  push();
  // rotate(-60);
  fill(colorPattern);
  for(var m = 0; m < 24; m ++){
    rotate(15);
    rect(box + 62, boy, 19, 9, 5);
  }
  pop();
  scale(0.7);
  for(var z = 0; z < 6; z ++){
    fill(colorPattern);
    rotate(60);
    triangle(box - 14, boy - 78, box + 14, boy - 78, box, boy - 60);
    triangle(box - 14, boy - 38, box + 14, boy - 38, box, boy - 56);
    triangle(box - 22, boy - 72, box - 22, boy - 44, box - 6, boy - 58);
    triangle(box + 22, boy - 72, box + 22, boy - 44, box + 6, boy - 58);
    ellipse(box + 34, boy - 60, 12, 12);
  }
  stroke(colorPattern);
  strokeWeight(8);
  noFill();
  ellipse(box, boy, bsize * 0.3, bsize * 0.3);
  pop();
}
