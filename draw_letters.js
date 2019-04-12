const colorFront1  = "#ff9730"; //orange 
const colorFront2  = "#59ccff"; //blue
const colorFront3  = "#d24ff9"; //purple
const colorStroke  = "#FFFFFF";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  //line one variables
  let posx = 50  + letterData["offsetx"];
  let posy = 165 + letterData["offsety"];
  let posx2 = 50  + letterData["offsetx2"];
  let posy2 = 165 + letterData["offsety2"];

  //line two variables
  let posx3 = 50  + letterData["offsetx3"];
  let posy3 = 165 + letterData["offsety3"];
  let posx4 = 50  + letterData["offsetx4"];
  let posy4 = 165 + letterData["offsety4"];

  //line three variables
  let posx5 = 50  + letterData["offsetx5"];
  let posy5 = 165 + letterData["offsety5"];
  let posx6 = 50  + letterData["offsetx6"];
  let posy6 = 165 + letterData["offsety6"];

  //line four variables
  let posx7 = 50  + letterData["offsetx7"];
  let posy7 = 165 + letterData["offsety7"];
  let posx8 = 50  + letterData["offsetx8"];
  let posy8 = 165 + letterData["offsety8"];


  // color/stroke setup for glow
  stroke(colorFront2);
  strokeWeight(15);

  //draws each four lines for glow
  line(posx, posy, posx2, posy2);
  line(posx3, posy3, posx4, posy4);
  line(posx5, posy5, posx6, posy6);
  line(posx7, posy7, posx8, posy8);

  // color/stroke setup 
  stroke(colorStroke);
  strokeWeight(10);

  //draws each four lines
  line(posx, posy, posx2, posy2);
  line(posx3, posy3, posx4, posy4);
  line(posx5, posy5, posx6, posy6);
  line(posx7, posy7, posx8, posy8);

  //sets it back to the base to not break everything out
  strokeWeight(4);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //starts drawing this one
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);

  //at 25% start the next line
  if(percent > 25){
    new_letter["offsetx3"]    = map(percent, 25, 100, oldObj["offsetx3"], newObj["offsetx3"]);
    new_letter["offsety3"] = map(percent, 25, 100, oldObj["offsety3"], newObj["offsety3"]);
    new_letter["offsetx4"]    = map(percent, 25, 100, oldObj["offsetx4"], newObj["offsetx4"]);
    new_letter["offsety4"] = map(percent, 25, 100, oldObj["offsety4"], newObj["offsety4"]);
  }
  //at 50% start the next line
  if(percent > 50){
    new_letter["offsetx5"]    = map(percent, 50, 100, oldObj["offsetx5"], newObj["offsetx5"]);
    new_letter["offsety5"] = map(percent, 50, 100, oldObj["offsety5"], newObj["offsety5"]);
    new_letter["offsetx6"]    = map(percent, 50, 100, oldObj["offsetx6"], newObj["offsetx6"]);
    new_letter["offsety6"] = map(percent, 50, 100, oldObj["offsety6"], newObj["offsety6"]);
  }


  //at 75% start the next line
  if(percent > 75){
    new_letter["offsetx7"]    = map(percent, 75, 100,  oldObj["offsetx7"], newObj["offsetx7"]);
    new_letter["offsety7"] = map(percent, 75, 100, oldObj["offsety7"], newObj["offsety7"]);
    new_letter["offsetx8"]    = map(percent, 75, 100, oldObj["offsetx8"], newObj["offsetx8"]);
    new_letter["offsety8"] = map(percent, 75, 100, oldObj["offsety8"], newObj["offsety8"]);
  }
  

  return new_letter;
}

var swapWords = [
  "MAGICAL0",
  "CAB?CAB?",
  "RUNE1234"
]