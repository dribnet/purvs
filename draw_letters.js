 const colorFront  = "#199cff";
 const colorStroke = "#233f11";


function drawLetter(letterData) {
  // colorstroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES);


  let posx = 0;
  let posy = 0;

  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offset3x"];
  let pos3y = posy + letterData["offset3y"];
  let arcAngle = 270;
  let rotatearc2 = letterData["rotate2"];
  let rotatearc3= letterData["rotate3"];


  push();
  strokeWeight(7);
  stroke(38, 70, 81, 65);
  fill(245, 245, 245, 100);
  rotate(rotatearc2+46.5);
  translate(50,175);
  arc(pos2x, pos2y, 80, -80, arcAngle, PI, PI + QUARTER_PI);
  noFill();
  stroke(0, 17, 33, 70);
  fill(114, 142, 153, 25);
  strokeWeight(3);
  rotate(rotatearc3);
  translate(20,20);
  arc(pos3x, pos3y, 30, -30, arcAngle, PI, PI + QUARTER_PI);

  pop();

}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);

  new_letter["rotate3"] = map(percent, 0, 100, oldObj["rotate3"], newObj["rotate3"]);
  if(percent < 40/5){
      fill(255, 255, 255);
  new_letter["offset3x"] = oldObj["offset3x"];
  new_letter["offset3y"] = oldObj["offset3y"];

  new_letter["rotate3"] = oldObj["rotate3"];
  new_letter["colour2"] = oldObj["colour2"];
  }else if (percent > -40){

  new_letter["offset3x"] = map(percent, 80, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 80, 100, oldObj["offset3y"], newObj["offset3y"]);

  new_letter["rotate2"] = map(percent, -30, 50, oldObj["rotate2"], newObj["rotate2"]);
  new_letter["colour2"] = map(percent, -30, 50, oldObj["colour2"], newObj["colour2"]);
 }
  return new_letter;
}



