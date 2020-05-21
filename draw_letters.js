const colorFront1  = "#7E0300"; //dark red
const colorFront2  = "#A12A2A"; //light red
const colorFront3  = "#0A2D42"; //blue black
const colorStroke  = "#FFFFFF";
//const colorBack = "#050403";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
  stroke(colorStroke);
  strokeWeight(1);
  //Fill(10);
 // determine parameters for second circle
   //let size2 = letterData["size"];

  let pos2x = 50 + letterData["offset2x"];
  let pos2y = 100 + letterData["offset2y"];
  let pos3x = 50 + letterData["offset3x"];
  let pos3y = 100 + letterData["offset3y"];
  let pos4x = 50 + letterData["offset4x"];
  let pos4y = 100 + letterData["offset4y"];

  

//triangle 2
  let pos2x2 = 50 + letterData["offset2x2"];
  let pos2y2 = 100 + letterData["offset2y2"];

  let pos2x3 = 50 + letterData["offset2x3"];
  let pos2y3 = 100 + letterData["offset2y3"];

  let pos2x4 = 50 + letterData["offset2x4"];
  let pos2y4 = 100 + letterData["offset2y4"];


//triangle 3
  let pos3x2 = 50 + letterData["offset3x2"];
  let pos3y2 = 100 + letterData["offset3y2"];

  let pos3x3 = 50 + letterData["offset3x3"];
  let pos3y3 = 100 + letterData["offset3y3"];

  let pos3x4 = 50 + letterData["offset3x4"];
  let pos3y4 = 100 + letterData["offset3y4"];

//quad
  let x1 = 50 + letterData["offsetx1"];
  let y1 = 100 + letterData["offsety1"];

  let x2 = 50 + letterData["offsetx2"];
  let y2 = 100 + letterData["offsety2"];

  let x3 = 50 + letterData["offsetx3"];
  let y3 = 100 + letterData["offsety3"];

  let x4 = 50 + letterData["offsetx4"];
  let y4 = 100 + letterData["offsety4"];
  
  // draw shapes here
  //Stroke();

  fill(colorFront1);
  triangle(pos2x, pos2y, pos3x, pos3y, pos4x, pos4y);

  fill(colorFront2);
  triangle(pos2x2, pos2y2, pos2x3, pos2y3, pos2x4, pos2y4);

  fill(colorFront3);
  triangle(pos3x2, pos3y2, pos3x3, pos3y3, pos3x4, pos3y4);
  
  fill(colorFront3); //Orange rectangle
  quad(x1, y1, x2, y2, x3, y3, x4, y4);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["start"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["stop"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  
  
  //let new_letter = {};
  //Triangle 1
   new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);new_letter["offset4x"] = map(percent, 0, 100, oldObj["offset4x"], newObj["offset4x"]);
  new_letter["offset4y"] = map(percent, 0, 100, oldObj["offset4y"], newObj["offset4y"]);
  new_letter["start"]    = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["stop"]    = map(percent, 0, 100, oldObj["stop"], newObj["stop"]);
 

  //Triangle 2
  new_letter["offset2x2"] = map(percent, 0, 100, oldObj["offset2x2"], newObj["offset2x2"]);
  new_letter["offset2y2"] = map(percent, 0, 100, oldObj["offset2y2"], newObj["offset2y2"]);
  new_letter["offset2x3"] = map(percent, 0, 100, oldObj["offset2x3"], newObj["offset2x3"]);
  new_letter["offset2y3"] = map(percent, 0, 100, oldObj["offset2y3"], newObj["offset2y3"]);
  new_letter["offset2x4"] = map(percent, 0, 100, oldObj["offset2x4"], newObj["offset2x4"]);
  new_letter["offset2y4"] = map(percent, 0, 100, oldObj["offset2y4"], newObj["offset2y4"]);
  new_letter["start"]    = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["stop"]    = map(percent, 0, 100, oldObj["stop"], newObj["stop"]);
  

  //Triangle 3
  new_letter["offset3x2"] = map(percent, 0, 100, oldObj["offset3x2"], newObj["offset3x2"]);
  new_letter["offset3y2"] = map(percent, 0, 100, oldObj["offset3y2"], newObj["offset3y2"]);
  new_letter["offset3x3"] = map(percent, 0, 100, oldObj["offset3x3"], newObj["offset3x3"]);
  new_letter["offset3y3"] = map(percent, 0, 100, oldObj["offset3y3"], newObj["offset3y3"]);
  new_letter["offset3x4"] = map(percent, 0, 100, oldObj["offset3x4"], newObj["offset3x4"]);
  new_letter["offset3y4"] = map(percent, 0, 100, oldObj["offset3y4"], newObj["offset3y4"]);
  new_letter["start"]    = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["stop"]    = map(percent, 0, 100, oldObj["stop"], newObj["stop"]);
  

//quad
  new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offset3y2"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx4"]);
  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety4"]);
  new_letter["start"]    = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["stop"]    = map(percent, 0, 100, oldObj["stop"], newObj["stop"]);
  return new_letter;

}

var swapWords = [
  "REDACTED",
  "HVN2403",
  "PERCEPTION",
  "GEARED",
  "18111995",
  "GEOMETRY",
  "ASSIGNED",
  "A1ARM3D1"


]