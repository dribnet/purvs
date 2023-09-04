const colorFront1  = "#99bfe6";
const colorFront2  = "#59ccff";
const colorStroke  = "#EEB4B4";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);
  let posx = 0
  let posy = 0
  // determine parameters for second circle
  let post1x = posx + letterData["offset1x"];
  let post1y = posy + letterData["offset1y"];

  let post2x = posx + letterData["offset2x"];
  let post2y = posy + letterData["offset2y"];

  let post3x = posx + letterData["offset3x"];
  let post3y = posy + letterData["offset3y"];


  let posl1x = posx + letterData["off1x"];
  let posl1y = posy + letterData["off1y"];

  let posl2x = posx + letterData["off2x"];
  let posl2y = posy + letterData["off2y"];

   let posl3x = posx + letterData["off3x"];
  let posl3y = posy + letterData["off3y"];

  let posl4x = posx + letterData["off4x"];
  let posl4y = posy + letterData["off4y"];

  
  let posl5x = posx + letterData["off5x"];
  let posl5y = posy + letterData["off5y"];

  let posl6x = posx + letterData["off6x"];
  let posl6y = posy + letterData["off6y"];
  // draw two circles
  fill(colorFront1);
  triangle(post1x, post1y, post2x, post2y, post3x ,post3y);
  fill(colorFront2);
  line(posl1x, posl1y, posl2x, posl2y);
  line(posl3x, posl3y, posl4x, posl4y);
  line(posl5x, posl5y, posl6x, posl6y);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offset1x"]    = map(percent, 0, 100, oldObj["offset1x"], newObj["offset1x"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset1y"] = map(percent, 0, 100, oldObj["offset1y"], newObj["offset1y"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);
  
  new_letter["off3x"] = map(percent, 0, 100, oldObj["off3x"], newObj["off3x"]);
  new_letter["off3y"] = map(percent, 0, 100, oldObj["off3y"], newObj["off3y"]);
  new_letter["off2x"] = map(percent, 0, 100, oldObj["off2x"], newObj["off2x"]);
  new_letter["off2y"] = map(percent, 0, 100, oldObj["off2y"], newObj["off2y"]);
  new_letter["off1x"] = map(percent, 0, 100, oldObj["off1x"], newObj["off1x"]);
  new_letter["off1y"] = map(percent, 0, 100, oldObj["off1y"], newObj["off1y"]);
  return new_letter;
}

var swapWords = [
  "HICALLME",
  "021ZYUF9",
  "DONTPLES"
]