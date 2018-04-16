function drawPart(posx, posy, scale, offsetx, offsety, tilt, colorR) {
  push();
  // resetMatrix();
  // translate(posx + offsetx*scale/2, posy);
  translate(offsetx, offsety);
  rotate(tilt);
  noFill();
  strokeWeight(1);
  rect(-200, -15, 10*scale, 3*scale, 25);
  fill(colorR, 243, 255);
  strokeWeight(2.5);
  rect(-20*scale, -3*scale, 10*scale, 3*scale, 50);
  fill(255);
  ellipse(-12*scale, -1.5*scale, 5, 5);
  ellipse(-18*scale, -1.5*scale, 5, 5);
  pop();
  
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
  drawPart(posx, posy, scale, letterData["positionx1"], letterData["positiony1"], letterData["tilt1"], letterData["colorR1"]);
  drawPart(posx, posy, scale, letterData["positionx2"], letterData["positiony2"], letterData["tilt2"], letterData["colorR2"]);
  drawPart(posx, posy, scale, letterData["positionx3"], letterData["positiony3"], letterData["tilt3"], letterData["colorR3"]);
  drawPart(posx, posy, scale, letterData["positionx4"], letterData["positiony4"], letterData["tilt4"], letterData["colorR4"]);
  drawPart(posx, posy, scale, letterData["positionx5"], letterData["positiony5"], letterData["tilt5"], letterData["colorR5"]);
  drawPart(posx, posy, scale, letterData["positionx6"], letterData["positiony6"], letterData["tilt6"], letterData["colorR6"]);
  pop();
}

// function interpolate_letter(percent, oldObj, newObj) {
//   let new_letter = {};
//   // new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
//   new_letter["positionX1"] = map(percent, 0, 100, oldObj["positionX1"], newObj["positionX1"]);
//   new_letter["positionY1"] = map(percent, 0, 100, oldObj["positionY1"], newObj["positionY1"]);
//   new_letter["tilt1"] = map(percent, 0, 100, oldObj["tilt1"], newObj["tilt1"]);
//   new_letter["change1"] = map(percent, 0, 100, oldObj["change1"], newObj["change1"]);

//   new_letter["positionX2"] = map(percent, 0, 100, oldObj["positionX2"], newObj["positionX2"]);
//   new_letter["positionY2"] = map(percent, 0, 100, oldObj["positionY2"], newObj["positionY2"]);
//   new_letter["tilt2"] = map(percent, 0, 100, oldObj["tilt2"], newObj["tilt2"]);
//   new_letter["change2"] = map(percent, 0, 100, oldObj["change2"], newObj["change2"]);

//   new_letter["positionX3"] = map(percent, 0, 100, oldObj["positionX3"], newObj["positionX3"]);
//   new_letter["positionY3"] = map(percent, 0, 100, oldObj["positionY3"], newObj["positionY3"]);
//   new_letter["tilt3"] = map(percent, 0, 100, oldObj["tilt3"], newObj["tilt3"]);
//   new_letter["change3"] = map(percent, 0, 100, oldObj["change3"], newObj["change3"]);


//   // if(percent < 30) {
//   //   // new_letter["size"] = oldObj["size"];
//   //   // new_letter["offsety"] = oldObj["offsety"];
//   // }
//   // else if (percent < 60){
//   //   // new_letter["size"] = map(percent, 30, 60, oldObj["size"], newObj["size"]);
//   //   // new_letter["offsety"] = map(percent, 30, 60, oldObj["offsety"], newObj["offsety"]);
//   // }
//   // else {
//   //   // new_letter["size"] = newObj["size"];
//   //   // new_letter["offsety"] = newObj["offsety"];
//   // }
//   return new_letter;
// }
