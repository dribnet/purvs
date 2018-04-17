const colorFront  = "#199cff";
const colorStroke = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)



 */

 function drawTri (x, y, angle) {
  push();
  
  let height = 35;
  translate(x, y);
  rotate(angle);
  triangle(0, 0+height/1.5, 0+height, 0-height, 0-height, 0-height);
  
  pop();

  //15 high ten wide, half height = middle 
  //from half height, go half height up to find top, half height down to find mottom line, left and right 5 to find other points

}


function drawLetter(letterData) {

  angleMode(DEGREES);
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  let posx=0;
  let posy=100;

  // determine parameters for second circle
  let pos1x = posx + letterData["offset1x"];
  let pos1y = posy + letterData["offset1y"];
  let pos2y = posy + letterData["offset2y"];
  let pos2x = posx + letterData["offset2x"];
  let ro1 = letterData["rotate1"];
  let ro2 = letterData["rotate2"];
  let coltri1 = letterData["color1"];
  let coltri2 = letterData["color2"];

  // draw two circles
  noStroke();
  fill(colorFront);
  ellipse(posx, posy, 80, 80);
  fill(coltri1)
  drawTri(pos1x, pos1y, ro1);
  fill(coltri2);
  drawTri(pos2x, pos2y, ro2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offset1x"] = map(percent, 0, 100, oldObj["offset1x"], newObj["offset1x"]);
  new_letter["offset1y"] = map(percent, 0, 100, oldObj["offset1y"], newObj["offset1y"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["rotate1"] = map(percent, 0, 100, oldObj["rotate1"], newObj["rotate1"]);
  new_letter["rotate2"] = map(percent, 0, 100, oldObj["rotate2"], newObj["rotate2"]);
  new_letter["color1"] = map(percent, 0, 100, oldObj["color1"], newObj["color1"]);
  new_letter["color2"] = map(percent, 0, 100, oldObj["color2"], newObj["color2"]);
  return new_letter;
}
