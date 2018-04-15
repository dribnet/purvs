 const colorFront  = "#199cff";
 const colorStroke = "#233f11";

//const colorFront  = "0, 0, 0, 80";
//const colorStroke = "0, 0, 0, 50";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */



function drawLetter(letterData) {
  // colorstroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);
   angleMode(DEGREES);

   // noFill();
   // stroke('red');
   // rect(0, 0, 100, 200);


let color = (255, 255, 0);
   stroke(color);
   //fill(255, 159, 25);
   noFill();

    
  // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50+letterData["offsetx"];
  // let pos2y = 150+letterData["offsety"];
let posx = 0;
let posy = 0;
//let color = 255, 255, 255;
//let rotatearc = 0;
//let roac = 0;
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offset3x"];
  let pos3y = posy + letterData["offset3y"];
  let arcAngle = 270;
  let rotatearc2 = letterData["rotate2"];
  let rotatearc3= letterData["rotate3"];
  let colour= color + letterData["colour2"];

  // draw two circles
  // ellipse(50, 150, 100, 100);
  // ellipse(pos2x, pos2y, size2, size2);


  push();
  //stroke(#efd1ff);
  //stroke(colour2);
  rotate(rotatearc2+46.5);
  translate(50,175);
  arc(pos2x, pos2y, 80, -80, arcAngle, PI, PI + QUARTER_PI);
  noFill();
  // fill(255, 232, 0);
  // stroke(255, 159, 25);
  rotate(rotatearc3);
  translate(20,20);
  stroke(colour);
  arc(pos3x, pos3y, 30, -30, arcAngle, PI, PI + QUARTER_PI);

  //translate(140,70);

  //arc(pos2x, pos2y, 100, -100, arcAngle, PI, PI + QUARTER_PI);

  // rotate(-180);
  // translate(-5,-25);
  // arc(pos3x, pos3y, 40, -40, arcAngle, PI, PI + QUARTER_PI);

  // rotate(-180);
  // translate(100,75);

  // arc(pos2x, pos2y, 120, -120, arcAngle, PI, PI + QUARTER_PI);

  // rotate(-180);
  // translate(-5,-25);
  // arc(pos3x, pos3y, 40, -40, 270, PI, PI + QUARTER_PI);

  pop();

    
  // push();

  // noFill();
  // rotate(-45);
  // translate(-30,-40);


  // arc(pos2x, pos2y, 200, -200, 270, PI, PI + QUARTER_PI);
  // arc(pos3x, pos3y, 60, -60, 270, PI, PI + QUARTER_PI);
    
  // pop();
    
    
  // push();  
  // noFill();
  // rotate(-225);
  // translate(-660, -1280);
  // arc(pos3x, pos3y, 60, -60, 270, PI, PI + QUARTER_PI);
  // pop();
    
  // push();
  
  // noFill();
  // rotate(-45);
  // translate(-250,-260);
  // arc(pos2x, pos2y, 200, -200, 270, PI, PI + QUARTER_PI); 
    
    
  // pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  //new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  //new_letter["rotate2"] = map(percent, 0, 100, oldObj["rotate2"], newObj["rotate2"]);
  new_letter["rotate3"] = map(percent, 0, 100, oldObj["rotate3"], newObj["rotate3"]);
  if(percent < 40/5){
  new_letter["offset3x"] = oldObj["offset3x"];
  new_letter["offset3y"] = oldObj["offset3y"];
//  new_letter["offsetx"] = oldObj["offsetx"];
//  new_letter["offsety"] = oldObj["offsety"];
  //new_letter["rotate2"] = oldObj["rotate2"];
  new_letter["rotate3"] = oldObj["rotate3"];
  }else if (percent > -40){
  new_letter["offset3x"] = map(percent, 80, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 80, 100, oldObj["offset3y"], newObj["offset3y"]);
//  new_letter["offsetx"] s= map(percent, 30, 60, oldObj["offsetx"], newObj["offsetx"]);
//  new_letter["offsety"] = map(percent, 30, 60, oldObj["offsety"], newObj["offsety"]);
  new_letter["rotate2"] = map(percent, -30, 50, oldObj["rotate2"], newObj["rotate2"]);
  //new_letter["rotate3"] = map(percent, -30, 100, oldObj["rotate3"], newObj["rotate3"]);
  }//else if(percent / -100){
//  new_letter["offset3x"] = newObj["offset3x"];
//  new_letter["offset3y"] = newObj["offset3y"];
//  new_letter["offsetx"] = newObj["offsetx"];
//  new_letter["offsety"] = newObj["offsety"];  
//  new_letter["rotate2"] = newObj["rotate2"];
//  new_letter["rotate3"] = newObj["rotate3"];
  //}
//  new_letter["rotate2"] = map(percent, 0, 100, oldObj["rotate2"], newObj["rotate2"]);
//  new_letter["rotate3"] = map(percent, 0, 100, oldObj["rotate3"], newObj["rotate3"]);
//  if(percent < 50){
//  new_letter["rotate2"] = oldObj["rotate2"];
//  new_letter["rotate3"] = oldObj["rotate3"];
//  }else{
//  new_letter["rotate2"] = map(percent, 50, 100, oldObj["rotate2"], newObj["rotate2"]);
//  new_letter["rotate3"] = map(percent, 50, 100, oldObj["rotate3"], newObj["rotate3"]);
//  }
  // new_letter = alphabet["default"];
  return new_letter;
}




