const colorFront  = "red";
const colorStroke = "black";

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
  strokeWeight(14);

  let size2 = letterData["size"];
  let pos2x = 50+letterData["offsetx"];
  let pos2y = 150+letterData["offsety"];

  let lineX = letterData["lineX"];
  let lineY = letterData["lineY"];
  let lineOX = 50+letterData["lineOX"];
  let lineOY = 150+letterData["lineOY"];

  let arcW = letterData["arcW"];
  let arcH = letterData["arcH"];
  let arcX = 50+letterData["arcX"];
  let arcY = 100 + letterData["arcY"];
  let arcS = letterData["arcS"];


  fill(135,206,235,200);
  arc(arcX, arcY, arcW, arcH, arcS, PI + QUARTER_PI, OPEN);
  ellipse(pos2x, pos2y, size2, size2);
  line(lineOX,lineOY,lineX,lineY);
  noStroke();
 

}
function interpolate_letter(percent, oldData, newData){
//Percent will range from 0-100
let new_obj = {};
  return new_obj;
}
var swapWords = [
  "AQUAFONT",
  "BUBBLING", //Good
  "AQUATICS", //Change Q to look different than A
  "CLEARSEA", //needs S changed
  "DRIFTING", //Good
  "ALPHABET", //H looks strange and L has big spaces
  "POSITION",
  "STUDENTS" //Needs S to be changed
  ]
