/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#5F0820";

/*
 * Draw the letter given the letterData
 
 */
function drawLetter(letterData) {
  //set up the sketch
  rectMode(CORNER);
  // rectMode(CENTER);
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(1);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["size2"];
  let size4 = letterData["size3"];
  let size5 = letterData["size4"];
  let size6 = letterData["size5"];




  let pos2x = 40  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
  let pos3x = 40 + letterData["offsetx2"];
  let pos3y = 150 + letterData["offsety2"];
  let pos4x = 40 + letterData["offsetx3"];
  let pos4y = 150 + letterData["offsety3"];
  let pos5x = 40 + letterData["offsetx4"];
  let pos5y = 150 + letterData["offsety4"];
  let pos6x = 40 + letterData["offsetx5"];
  let pos6y = 150 + letterData["offsety5"];



  // draw two circles
  fill(52, 52, 56);
  rect(0, 0, 100, 200);
  fill(120, 225, 9);
  ellipse(10,10,10,10);
  fill(225, 217, 9);
  ellipse(20,10,10,10);
  fill(225, 48, 9);
  ellipse(30,10,10,10);

  fill(120, 225, 9);
  ellipse(90,190,10,10);
  fill(225, 217, 9);
  ellipse(80,190,10,10);
  fill(225, 48, 9);
  ellipse(70,190,10,10);
  fill(255, 255, 255);
  rect(45,0, 10,200);


  fill(196, 17, 66);
  rect(pos2x, pos2y, size2, size2+40);
  rect(pos3x, pos3y, size3, size3+40);
  rect(pos4x, pos4y, size4, size4+40);
  rect(pos5x, pos5y, size5+30, size5);
  rect(pos6x, pos6y, size6+30, size6);



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["size3"]    = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["size4"]    = map(percent, 0, 100, oldObj["size4"], newObj["size4"]);
  new_letter["size5"]    = map(percent, 0, 100, oldObj["size5"], newObj["size5"]);


  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["offsetx5"] = map(percent, 0, 100, oldObj["offsetx5"], newObj["offsetx5"]);
  new_letter["offsety5"] = map(percent, 0, 100, oldObj["offsety5"], newObj["offsety5"]);

  return new_letter;

}

var swapWords = [
  "TRAFFIC",
  "EGYPTIAN",
  "PYRAMID"
]