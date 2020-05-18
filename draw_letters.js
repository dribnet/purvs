const colorFront1  = "#268494";  //Darkest shade of blue
const colorFront2  = "#40d6cc";  //Middle shade of blue
const colorFront3  = "#bafff5";  //Lightest shade of blue
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
  // stroke(colorStroke);
  // strokeWeight(4);


  //parameters
  // let size2 = letterData["size"];

//triangle 1
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
  // new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  // new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  // new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);

  //Triangle 1
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);

  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);

  new_letter["offset4x"] = map(percent, 0, 100, oldObj["offset4x"], newObj["offset4x"]);
  new_letter["offset4y"] = map(percent, 0, 100, oldObj["offset4y"], newObj["offset4y"]);

  //Triangle 2
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);

  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);

  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);

  //Triangle 3
  new_letter["offset3x2"] = map(percent, 0, 100, oldObj["offset3x2"], newObj["offset3x2"]);
  new_letter["offset3y2"] = map(percent, 0, 100, oldObj["offset3y2"], newObj["offset3y2"]);

  new_letter["offset3x3"] = map(percent, 0, 100, oldObj["offset3x3"], newObj["offset3x3"]);
  new_letter["offset3y3"] = map(percent, 0, 100, oldObj["offset3y3"], newObj["offset3y3"]);

  new_letter["offset3x4"] = map(percent, 0, 100, oldObj["offset3x4"], newObj["offset3x4"]);
  new_letter["offset3y4"] = map(percent, 0, 100, oldObj["offset3y4"], newObj["offset3y4"]);

  return new_letter;
}

var swapWords = [
  "FREEZING",
  "GLACIERS",
  "DIAMONDS",
  "COLD1234",
  "FROSTED?"
]
