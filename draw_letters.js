function drawPart(posx, posy, scale, offsetx, offsety, tilt, change) {


  //straight part//
if(change == 1){
  //draw Dandelion part//
  push();
  strokeWeight(4);
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
  strokeWeight(4);
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
  strokeWeight(4);
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

}else if(change == 3){ //draw ARC shaped of Dandelion//
  //draw Dandelion part//
  push();
  translate(posx + offsetx, posy + offsety);
  rotate(tilt);
  noFill();
  stroke(51, 94, 50);
  strokeWeight(4);
  scale(0.75);
  //draw stalk//
  arc(150, 150, 200, 200, 80, 360);

  bezier(120, 50, 220, 40, 200, 120, 250, 100);
  bezier(120, 50, 220, 40, 200, 120, 250, 200);
  bezier(120, 50, 220, 40, 200, 120, 230, 250);

  bezier(100, 250, 250, 250, 120, 50, 220, 40);

  //draw flower//
  stroke(255);
  fill(255);
  ellipse(250, 100, 15, 15);
  ellipse(250, 200, 20, 20);
  ellipse(230, 250, 30, 30);
  ellipse(220, 40, 10, 10);
  
  //draw leaves//
  fill(51, 94, 50);
  noStroke();
  ellipse(245, 80, 50, 10);
  rotate(1);
  ellipse(250, -110, 10, 50);
  ellipse(260, -25, 30, 10);
  rotate(1);
  ellipse(20, -190, 10, 30);
  rotate(1);
  ellipse(-125, -45, 10, 50);
  rotate(1);
  ellipse(-145, 75, 10, 30);
  ellipse(-135, 95, 10, 30);

  ellipse(-205, 95, 10, 40);
  ellipse(-295, 95, 40, 10);
  ellipse(-205, 95, 40, 10);
  ellipse(-205, 42, 40, 10);
  pop();

}


}

function drawLetter(letterData) {

  let posx=100;
  let posy=200;
  let size=0.5;

  // show bounding box
  // noFill();
  // stroke('red');
  // rect(0, 0, 100, 200);


  push();
  let y_offset = 5 * scale;
  scale(size);
  drawPart(posx, posy, scale, letterData["positionX1"], letterData["positionY1"], letterData["tilt1"], letterData["change1"]);
  drawPart(posx,          posy, scale, letterData["positionX2"], letterData["positionY2"], letterData["tilt2"], letterData["change2"]);
  drawPart(posx, posy, scale, letterData["positionX3"], letterData["positionY3"], letterData["tilt3"], letterData["change3"]);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  // new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["positionX1"] = map(percent, 0, 100, oldObj["positionX1"], newObj["positionX1"]);
  new_letter["positionY1"] = map(percent, 0, 100, oldObj["positionY1"], newObj["positionY1"]);
  new_letter["tilt1"] = map(percent, 0, 100, oldObj["tilt1"], newObj["tilt1"]);
  new_letter["change1"] = map(percent, 0, 100, oldObj["change1"], newObj["change1"]);

  new_letter["positionX2"] = map(percent, 0, 100, oldObj["positionX2"], newObj["positionX2"]);
  new_letter["positionY2"] = map(percent, 0, 100, oldObj["positionY2"], newObj["positionY2"]);
  new_letter["tilt2"] = map(percent, 0, 100, oldObj["tilt2"], newObj["tilt2"]);
  new_letter["change2"] = map(percent, 0, 100, oldObj["change2"], newObj["change2"]);

  new_letter["positionX3"] = map(percent, 0, 100, oldObj["positionX3"], newObj["positionX3"]);
  new_letter["positionY3"] = map(percent, 0, 100, oldObj["positionY3"], newObj["positionY3"]);
  new_letter["tilt3"] = map(percent, 0, 100, oldObj["tilt3"], newObj["tilt3"]);
  new_letter["change3"] = map(percent, 0, 100, oldObj["change3"], newObj["change3"]);


  // if(percent < 30) {
  //   // new_letter["size"] = oldObj["size"];
  //   // new_letter["offsety"] = oldObj["offsety"];
  // }
  // else if (percent < 60){
  //   // new_letter["size"] = map(percent, 30, 60, oldObj["size"], newObj["size"]);
  //   // new_letter["offsety"] = map(percent, 30, 60, oldObj["offsety"], newObj["offsety"]);
  // }
  // else {
  //   // new_letter["size"] = newObj["size"];
  //   // new_letter["offsety"] = newObj["offsety"];
  // }
  return new_letter;
}
