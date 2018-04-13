function drawPart(posx, posy, scale, offsetx, offsety, tilt, change) {


  //straight part//
if(change == 1){
  //draw Dandelion part//
  push();
  strokeWeight(2);
  translate(posx + offsetx, posy + offsety);
  rotate(tilt);
  noFill();
  stroke(51, 94, 50);
  //draw stalk//
  bezier(85, 20, 10, 10, 90, 90, 15, 80);
  // bezier(20*scale, 4*scale, 10+scale, 10+scale, 90-scale, 90-scale, 15-scale, 7*scale);
  bezier(150, 20, 10, 10, 90, 90, 15, 80);
  // bezier(24*scale, 65-scale, -20+scale, 10+scale, 90-scale, 90-scale, 15-scale, 7*scale);
  bezier(200, 10, 20, 25, 90, 90, 15, 80);
  // bezier(18*scale, 34-scale, 2*scale, 6*scale, 9*scale, 9*scale, 15-scale, 7*scale);
  bezier(180, 34, 10, 10, 90, 90, 15, 80);
  // bezier(15*scale, 7*scale, -2*scale, -2*scale, 9*scale, 9*scale, 15-scale, 7*scale);
  bezier(54, 120, 10, 10, 90, 90, 100, 50);
  //draw flower//
  stroke(255);
  fill(255);
  ellipse(85, 20, 15, 15);
  ellipse(150, 20, 20, 20);
  ellipse(200, 10, 30, 30);
  ellipse(180, 34, 10, 10);
  ellipse(100, 50, 10, 10);
  //draw leaves//
  fill(51, 94, 50);
  noStroke();
  ellipse(70, 70, 50, 10);
  rotate(1);
  ellipse(80, -100, 10, 50);
  ellipse(60, -25, 30, 10);
  rotate(1);
  ellipse(-20, -130, 10, 30);
  pop();
}else if(change == 0){ //draw an ellipse Dandelion//
  push();
  strokeWeight(3);
  translate(posx + offsetx, posy + offsety);
  rotate(tilt);
  stroke(51, 94, 50);
  noFill();
  // fill(255);
  arc(50, 100, 100, 100, 360, 0);
  fill(51, 94, 50);
  ellipse(-10, 100, 20, 10);
  rotate(1);
  ellipse(45, 10, 30, 10);
  rotate(1);
  ellipse(115, -45, 30, 10);
  rotate(3);
  ellipse(-25, 45, 30, 10);
  fill(255);
  noStroke();
  ellipse(-40, 45, 10, 10);
  ellipse(-40, 35, 10, 10);

  // ellipse(10*scale, 2*scale, 100, 100);
  pop();
}else if(change == 2){ //draw V shaped of Dandelion//
  //draw Dandelion part//
  push();
  translate(posx + offsetx, posy + offsety);
  rotate(tilt);
  noFill();
  stroke(51, 94, 50);
  //draw stalk//
  line(105, -80, 45, 90);
  line(80, -80, 45, 90);
  bezier(85, 20, 10, 10, 90, 90, 15, 80);
  bezier(85, -50, -50, -100, 185, 90, 15, 120);
  // bezier(20*scale, 4*scale, 10+scale, 10+scale, 90-scale, 90-scale, 15-scale, 7*scale);
  bezier(150, 20, 10, 10, 90, 90, 15, 80);
  // bezier(24*scale, 65-scale, -20+scale, 10+scale, 90-scale, 90-scale, 15-scale, 7*scale);
  bezier(200, 10, 20, 25, 90, 90, 15, 80);
  // bezier(18*scale, 34-scale, 2*scale, 6*scale, 9*scale, 9*scale, 15-scale, 7*scale);
  bezier(180, 34, 10, 10, 90, 90, 15, 80);
  // bezier(15*scale, 7*scale, -2*scale, -2*scale, 9*scale, 9*scale, 15-scale, 7*scale);
  bezier(54, 120, 10, 10, 90, 90, 100, 50);
  //draw flower//
  stroke(255);
  fill(255);
  ellipse(85, 20, 15, 15);
  ellipse(150, 20, 20, 20);
  ellipse(200, 10, 30, 30);
  ellipse(180, 34, 10, 10);
  ellipse(100, 50, 10, 10);

  ellipse(105, -80, 20, 20);
  ellipse(80, -80, 10, 10);
  ellipse(85, -50, 10, 10);
  //draw leaves//
  fill(51, 94, 50);
  noStroke();
  ellipse(70, 70, 50, 10);
  rotate(1);
  ellipse(80, -100, 10, 50);
  ellipse(60, -25, 30, 10);
  rotate(1);
  ellipse(-20, -130, 10, 30);
  rotate(1);
  ellipse(-45, 50, 10, 30);
  rotate(1);
  ellipse(-45, 50, 10, 30);
  ellipse(-35, 100, 10, 30);
  pop();

}


}

function drawLetter(letterData) {

  let posx=100;
  let posy=200;
  let size=0.5;

  // show bounding box
  noFill();
  stroke('red');
  rect(0, 0, 100, 200);


  push();
  let y_offset = 5 * scale;
  scale(size);
  drawPart(posx, posy, scale, letterData["positionX1"], letterData["positionY1"], letterData["tilt1"], letterData["change1"]);
  drawPart(posx,          posy, scale, letterData["positionX2"], letterData["positionY2"], letterData["tilt2"], letterData["change2"]);
  drawPart(posx, posy, scale, letterData["positionX3"], letterData["positionY3"], letterData["tilt3"], letterData["change3"]);
  pop();
}
