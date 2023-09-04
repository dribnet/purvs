
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
 if(percent < 50) {
  new_letter["offsetx1 tri 1"] = oldObj["offsetx1 tri 1"];
  new_letter["offsetx2 tri 1"] = oldObj["offsetx2 tri 1"];
  new_letter["offsetx3 tri 1"] = oldObj["offsetx3 tri 1"]

  new_letter["offsetx1 tri 2"] = oldObj["offsetx1 tri 2"];
  new_letter["offsetx2 tri 2"] = oldObj["offsetx2 tri 2"];
  new_letter["offsetx3 tri 2"] = oldObj["offsetx3 tri 2"]

  new_letter["offsetx1 tri 3"] = oldObj["offsetx1 tri 3"];
  new_letter["offsetx2 tri 3"] = oldObj["offsetx2 tri 3"];
  new_letter["offsetx3 tri 3"] = oldObj["offsetx3 tri 3"]

  new_letter["offsetx1 tri 4"] = oldObj["offsetx1 tri 4"];
  new_letter["offsetx2 tri 4"] = oldObj["offsetx2 tri 4"];
  new_letter["offsetx3 tri 4"] = oldObj["offsetx3 tri 4"];

 }

else{
  new_letter["offsetx1 tri 1"] = map(percent,70,100, oldObj["offsetx1 tri 1"], newObj["offsetx1 tri 1"]);
  new_letter["offsetx2 tri 1"] = map(percent,70,100, oldObj["offsetx2 tri 1"], newObj["offsetx2 tri 1"]);
  new_letter["offsetx3 tri 1"] = map(percent,70,100, oldObj["offsetx3 tri 1"], newObj["offsetx3 tri 1"])

  new_letter["offsetx1 tri 2"] = map(percent,70,100, oldObj["offsetx1 tri 2"], newObj["offsetx1 tri 2"]);
  new_letter["offsetx2 tri 2"] = map(percent,70,100, oldObj["offsetx2 tri 2"], newObj["offsetx2 tri 2"]);
  new_letter["offsetx3 tri 2"] = map(percent,70,100, oldObj["offsetx3 tri 2"], newObj["offsetx3 tri 2"])

  new_letter["offsetx1 tri 3"] = map(percent,70,100, oldObj["offsetx1 tri 3"], newObj["offsetx1 tri 3"]);
  new_letter["offsetx2 tri 3"] = map(percent,70,100, oldObj["offsetx2 tri 3"], newObj["offsetx2 tri 3"]);
  new_letter["offsetx3 tri 3"] = map(percent,70,100, oldObj["offsetx3 tri 3"], newObj["offsetx3 tri 3"])

  new_letter["offsetx1 tri 4"] = map(percent,70,100, oldObj["offsetx1 tri 4"], newObj["offsetx1 tri 4"]);
  new_letter["offsetx2 tri 4"] = map(percent,70,100, oldObj["offsetx2 tri 4"], newObj["offsetx2 tri 4"]);
  new_letter["offsetx3 tri 4"] = map(percent,70,100, oldObj["offsetx3 tri 4"], newObj["offsetx3 tri 4"]);
}

if(percent < 20) {
  new_letter["offsety1 tri 1"] = oldObj["offsety1 tri 1"];
  new_letter["offsety2 tri 1"] = oldObj["offsety2 tri 1"];
  new_letter["offsety3 tri 1"] = oldObj["offsety3 tri 1"];

  new_letter["offsety1 tri 2"] = oldObj["offsety1 tri 2"];
  new_letter["offsety2 tri 2"] = oldObj["offsety2 tri 2"];
  new_letter["offsety3 tri 2"] = oldObj["offsety3 tri 2"];

  new_letter["offsety1 tri 3"] = oldObj["offsety1 tri 3"];
  new_letter["offsety2 tri 3"] = oldObj["offsety2 tri 3"];
  new_letter["offsety3 tri 3"] = oldObj["offsety3 tri 3"];

  new_letter["offsety1 tri 4"] = oldObj["offsety1 tri 4"];
  new_letter["offsety2 tri 4"] = oldObj["offsety2 tri 4"];
  new_letter["offsety3 tri 4"] = oldObj["offsety3 tri 4"];
}
else if(percent > 60){
  new_letter["offsety1 tri 1"] = newObj["offsety1 tri 1"];
  new_letter["offsety2 tri 1"] = newObj["offsety2 tri 1"];
  new_letter["offsety3 tri 1"] = newObj["offsety3 tri 1"];

  new_letter["offsety1 tri 2"] = newObj["offsety1 tri 2"];
  new_letter["offsety2 tri 2"] = newObj["offsety2 tri 2"];
  new_letter["offsety3 tri 2"] = newObj["offsety3 tri 2"];

  new_letter["offsety1 tri 3"] = newObj["offsety1 tri 3"];
  new_letter["offsety2 tri 3"] = newObj["offsety2 tri 3"];
  new_letter["offsety3 tri 3"] = newObj["offsety3 tri 3"];

  new_letter["offsety1 tri 4"] = newObj["offsety1 tri 4"];
  new_letter["offsety2 tri 4"] = newObj["offsety2 tri 4"];
  new_letter["offsety3 tri 4"] = newObj["offsety3 tri 4"];
}

else{
  new_letter["offsety1 tri 1"] = map(percent,30,60, oldObj["offsety1 tri 1"], newObj["offsety1 tri 1"]);
  new_letter["offsety2 tri 1"] = map(percent,30,60, oldObj["offsety2 tri 1"], newObj["offsety2 tri 1"]);
  new_letter["offsety3 tri 1"] = map(percent,30,60, oldObj["offsety3 tri 1"], newObj["offsety3 tri 1"]);

  new_letter["offsety1 tri 2"] = map(percent,30,60, oldObj["offsety1 tri 2"], newObj["offsety1 tri 2"]);
  new_letter["offsety2 tri 2"] = map(percent,30,60, oldObj["offsety2 tri 2"], newObj["offsety2 tri 2"]);
  new_letter["offsety3 tri 2"] = map(percent,30,60, oldObj["offsety3 tri 2"], newObj["offsety3 tri 2"]);

  new_letter["offsety1 tri 3"] = map(percent,30,60, oldObj["offsety1 tri 3"], newObj["offsety1 tri 3"]);
  new_letter["offsety2 tri 3"] = map(percent,30,60, oldObj["offsety2 tri 3"], newObj["offsety2 tri 3"]);
  new_letter["offsety3 tri 3"] = map(percent,30,60, oldObj["offsety3 tri 3"], newObj["offsety3 tri 3"]);

  new_letter["offsety1 tri 4"] = map(percent,30,60, oldObj["offsety1 tri 4"], newObj["offsety1 tri 4"]);
  new_letter["offsety2 tri 4"] = map(percent,30,60, oldObj["offsety2 tri 4"], newObj["offsety2 tri 4"]);
  new_letter["offsety3 tri 4"] = map(percent,30,60, oldObj["offsety3 tri 4"], newObj["offsety3 tri 4"]);
}

  return new_letter;
}
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let posx = 0;
  let posy = 0;
 
  let pos2x = posx + letterData["offsetx1 tri 1"];
  let pos2y = posy + letterData["offsety1 tri 1"];

  let pos3x = posx + letterData["offsetx2 tri 1"];
  let pos3y = posy + letterData["offsety2 tri 1"];

  let pos4x = posx + letterData["offsetx3 tri 1"];
  let pos4y = posy + letterData["offsety3 tri 1"];

  let pos5x = posx + letterData["offsetx1 tri 2"];
  let pos5y = posy + letterData["offsety1 tri 2"];

  let pos6x = posx + letterData["offsetx2 tri 2"];
  let pos6y = posy + letterData["offsety2 tri 2"];

  let pos7x = posx + letterData["offsetx3 tri 2"];
  let pos7y = posy + letterData["offsety3 tri 2"];

  let pos8x = posx + letterData["offsetx1 tri 3"];
  let pos8y = posy + letterData["offsety1 tri 3"];

  let pos9x = posx + letterData["offsetx2 tri 3"];
  let pos9y = posy + letterData["offsety2 tri 3"];

  let pos10x = posx + letterData["offsetx3 tri 3"];
  let pos10y = posy + letterData["offsety3 tri 3"];

  let pos11x = posx + letterData["offsetx1 tri 4"];
  let pos11y = posy + letterData["offsety1 tri 4"];

  let pos12x = posx + letterData["offsetx2 tri 4"];
  let pos12y = posy + letterData["offsety2 tri 4"];

  let pos13x = posx + letterData["offsetx3 tri 4"];
  let pos13y = posy + letterData["offsety3 tri 4"];

  
const colorFront1  = "#bc0000";
const colorFront2  = "#9e0000";
const colorBack    = "#2b2b2b";
const colorStroke  = "#1e1e1e";

fill(colorFront1);
  triangle(pos2x, pos2y, pos3x, pos3y, pos4x, pos4y);

  fill(colorFront2);
  triangle(pos5x, pos5y, pos6x, pos6y, pos7x, pos7y);


  fill(colorFront1);
  triangle(pos8x, pos8y, pos9x, pos9y, pos10x, pos10y);

  fill(colorFront2);
  triangle(pos11x, pos11y, pos12x, pos12y, pos13x, pos13y);

}

var swapWords = [
"RAZERARK",
"BAXTERHB",
"VICTORIA"
]