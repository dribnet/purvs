const colorFront1  = "#269482";
const colorFront2  = "#40d6cc";
const colorFront3  = "#bafff5";

const colorStroke  = "#233f11";


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

  // determine parameters for second circle
   let size2 = letterData["size"];

  let pos2x = 50 + letterData["offset2x"];
  let pos2y = 100 + letterData["offset2y"];

  let pos3x = 50 + letterData["offset3x"];
  let pos3y = 100 + letterData["offset3y"];

  let pos4x = 50 + letterData["offset4x"];
  let pos4y = 100 + letterData["offset4y"];

//triangle 2
  let posx2 = 50 + letterData["offsetx2"];
  let posy2 = 100 + letterData["offsety2"];

  let posx3 = 50 + letterData["offsetx3"];
  let posy3 = 100 + letterData["offsety3"];

  let posx4 = 50 + letterData["offsetx4"];
  let posy4 = 100 + letterData["offsety4"];

//triangle 3
  let pos3x2 = 50 + letterData["offset3x2"];
  let pos3y2 = 100 + letterData["offset3y2"];

  let pos3x3 = 50 + letterData["offset3x3"];
  let pos3y3 = 100 + letterData["offset3y3"];

  let pos3x4 = 50 + letterData["offset3x4"];
  let pos3y4 = 100 + letterData["offset3y4"];


  // let posxEllipse = 50+ letterData["offsetEx"];
  // let posyEllipse = 100+ letterData["offsetEy"];
  // let wEllipse = letterData["wEllipse"];
  // let hEllipse = letterData["hEllipse"];
  // ellipse(posxEllipse, posyEllipse, wEllipse, hEllipse);


  // draw shapes here

  noStroke();



  fill(colorFront1);
  triangle(pos2x, pos2y, pos3x, pos3y, pos4x, pos4y);

  fill(colorFront2);
  triangle(posx2, posy2, posx3, posy3, posx4, posy4);

  fill(colorFront3);
  triangle(pos3x2, pos3y2, pos3x3, pos3y3, pos3x4, pos3y4);


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
