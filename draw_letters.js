const colorFront1  = "#CA3433";
const colorFront2  = "#57595D";
const colorStroke  = "#233f11";
const col1 = 180;
const col2 = 181;
const col3 = 178;
const trans = 200;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup

  let triangleX1 = letterData["triangleXPos1"];
  let triangleY1 = letterData["triangleYPos1"];
  let triangleX2 = letterData["triangleXPos2"];
  let triangleY2 = letterData["triangleYPos2"];
  let triangleX3 = letterData["triangleXPos3"];
  let triangleY3 = letterData["triangleYPos3"];
  let triangleX4 = letterData["triangleXPos4"];
  let triangleY4 = letterData["triangleYPos4"];
  let triangleX5 = letterData["triangleXPos5"];
  let triangleY5 = letterData["triangleYPos5"];
  let triangleX6 = letterData["triangleXPos6"];
  let triangleY6 = letterData["triangleYPos6"];
  let rectX = letterData["rectXPos"];
  let rectY = letterData["rectYPos"];
  let rectW = letterData["rectWPos"];
  let rectH = letterData["rectHPos"];

    fill(colorFront1);
    triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);
    fill(col1,col2,col3,trans);
    triangle(triangleX4,triangleY4,triangleX5,triangleY5,triangleX6,triangleY6);
    rect(rectX,rectY,rectW,rectH)

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);

  new_letter["triangleXPos1"] = map(percent, 0, 100, oldObj["triangleXPos1"], newObj["triangleXPos1"]);
  new_letter["triangleYPos1"] = map(percent, 0, 100, oldObj["triangleYPos1"], newObj["triangleYPos1"]);
  new_letter["triangleXPos2"] = map(percent, 0, 100, oldObj["triangleXPos2"], newObj["triangleXPos2"]);
  new_letter["triangleYPos2"] = map(percent, 0, 100, oldObj["triangleYPos2"], newObj["triangleYPos2"]);  
  new_letter["triangleXPos3"] = map(percent, 0, 100, oldObj["triangleXPos3"], newObj["triangleXPos3"]);
  new_letter["triangleYPos3"] = map(percent, 0, 100, oldObj["triangleYPos3"], newObj["triangleYPos3"]);
  new_letter["triangleXPos4"] = map(percent, 0, 100, oldObj["triangleXPos4"], newObj["triangleXPos4"]);
  new_letter["triangleYPos4"] = map(percent, 0, 100, oldObj["triangleYPos4"], newObj["triangleYPos4"]);
  new_letter["triangleXPos5"] = map(percent, 0, 100, oldObj["triangleXPos5"], newObj["triangleXPos5"]);
  new_letter["triangleYPos5"] = map(percent, 0, 100, oldObj["triangleYPos5"], newObj["triangleYPos5"]); 
  new_letter["triangleXPos6"] = map(percent, 0, 100, oldObj["triangleXPos6"], newObj["triangleXPos6"]);
  new_letter["triangleYPos6"] = map(percent, 0, 100, oldObj["triangleYPos6"], newObj["triangleYPos6"]); 
  new_letter["rectXPos"] = map(percent, 0, 100, oldObj["rectXPos"], newObj["rectXPos"]);  
  new_letter["rectYPos"] = map(percent, 0, 100, oldObj["rectYPos"], newObj["rectYPos"]);
  new_letter["rectWPos"] = map(percent, 0, 100, oldObj["rectWPos"], newObj["rectWPos"]);  
  new_letter["rectHPos"] = map(percent, 0, 100, oldObj["rectHPos"], newObj["rectHPos"]);

  return new_letter;
}

var swapWords = [
  "POGGERS?",
  "OMEGALUL",
  "POGCHAMP",
  "CMONBRUH",
  "TRIHARD7"
]