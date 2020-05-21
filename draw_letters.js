//Colours 
//red 
const red1 = 255;
const green1 = 234;
const blue1 = 0;

//blue
const red2 = 0;
const green2 = 34;
const blue2 = 255;

//red
const red3 = 255;
const green3 = 0;
const blue3 = 0;

//opacity
const opa = 140;


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {


//variables 
let size2 = letterData["size2"];
let pos2x = 50 + letterData["X2"];
let pos2y = 100 + letterData["Y2"];
let start2 = letterData["start2"];
let end2 = letterData["end2"];
let rectX = 50 + letterData["rectX"];
let rectY = 100 + letterData["rectY"];
let rectH = letterData["rectH"];
let rectW = letterData["rectW"];
let rotateR = letterData["rotate"];
let flipX = letterData["flipX"];
let flipY = letterData["flipY"];




//draws arcs
strokeWeight(6);
stroke(red1, green1, blue1);
noFill();
// fill(red1, green1, blue1, opa);
angleMode(DEGREES); 


triangle(60, 50, flipX, flipY, 30, 170);


// arc(50, 100, 100, 100, flipX, flipY);
stroke(red2, green2, blue2);
noFill();
// fill(red2, green2, blue2, opa);
arc(pos2x, pos2y, size2, size2, start2, end2);
stroke(red3, green3, blue3);
noFill();
// fill(red3, green3, blue3, opa );

  push();
  rotate(rotateR);
  rect(rectX, rectY, rectW, rectH);
  pop();


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["X2"] = map(percent, 0, 100, oldObj["X2"], newObj["X2"]);
  new_letter["Y2"] = map(percent, 0, 100, oldObj["Y2"], newObj["Y2"]);
  new_letter["start2"] = map(percent, 0, 100, oldObj["start2"], newObj["start2"]);
  new_letter["end2"] = map(percent, 0, 100, oldObj["end2"], newObj["end2"]);
  new_letter["rectX"] = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"] = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
  new_letter["rectH"] = map(percent, 0, 100, oldObj["rectH"], newObj["rectH"]);
  new_letter["rectW"] = map(percent, 0, 100, oldObj["rectW"], newObj["rectW"]);
  new_letter["rotate"] = map(percent, 0, 100, oldObj["rotate"], newObj["rotate"]);
  new_letter["flipX"] = map(percent, 0, 100, oldObj["flipX"], newObj["flipX"]);
  new_letter["flipY"] = map(percent, 0, 100, oldObj["flipY"], newObj["flipY"]);
  return new_letter;
}

var swapWords = [
  "GRATEFUL",
  "YOURSELF",
  "GRAPHICS",
  "REPEATED",
  "QUESTION"
]