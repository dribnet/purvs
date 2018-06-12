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
function interpolate_letter(percent, oldObj, newObj){
//Percent will range from 0-100
    let new_letter = {};
    new_letter["size"] = map(percent, 50, 100, oldObj["size"], newObj["size"]);
    new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
    new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);

    new_letter["lineX"] = map(percent, 50, 100, oldObj["lineX"], newObj["lineX"]);
    new_letter["lineY"] = map(percent, 50, 100, oldObj["lineY"], newObj["lineY"]);
    new_letter["lineOX"] = map(percent, 50, 100, oldObj["lineOX"], newObj["lineOX"]);
    new_letter["lineOY"] = map(percent, 50, 100, oldObj["lineOY"], newObj["lineOY"]);

    new_letter["arcW"] = map(percent, 50, 100, oldObj["arcW"], newObj["arcW"]);
    /*
    new_letter["arcH"] = map(percent, 0, 100, oldObj["arcH"], newObj["arcH"]);
    new_letter["arcX"] = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
    new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
    new_letter["arcS"] = map(percent, 0, 100, oldObj["arcS"], newObj["arcS"]);
    */

    return new_letter;
}
var swapWords = [
  "AQUAFONT", //Good
  "BUBBLING", //Good
  "CLEARSEA", //Good
  "AQUATICS", //Good
  "DRIFTING", //Good
  ]
