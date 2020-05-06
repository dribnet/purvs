const colorFont1  = "#9BEDFF"; 
const colorFont2  = "#DD9BFF"; 
const colorFont3   = "#BDFF9B";
const colorFont4   = "#FFE19B";
const colorFont5   = "#F7347D";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData, posx, posy) {

  angleMode(DEGREES);
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  posx = 0 + letterData["offsetx"]; //
  posy = 0 + letterData["offsety"];

//draw rainbow
  noFill();
  strokeWeight(8);
  stroke(colorFont5);
  arc(posx, posy,98, 98, 170, PI + QUARTER_PI, TWO_PI); //98,98,170
  stroke(colorFont4);
  arc(posx, posy,87, 87, 170, PI + QUARTER_PI, TWO_PI);//87, 87, 170
  stroke(colorFont3);
  arc(posx, posy,76, 76, 170, PI + QUARTER_PI, TWO_PI);//76,76,170
  stroke(colorFont1);
  arc(posx, posy,65, 65, 170, PI + QUARTER_PI, TWO_PI);//65,65,170
  stroke(colorFont2);
  arc(posx, posy,50, 50, 170, PI + QUARTER_PI, TWO_PI);//50,50,160

//rays
var colorArray = [colorFont1, colorFont2, colorFont3,colorFont4,colorFont5];
push();
let range = 140;
let numRays = 10;
rotate(-(range/2));

for (i = 0; i < 10; i ++){
  strokeWeight(5);
  stroke(colorArray[i % colorArray.length]);
 line(0, -100, 0, -200) 
 rotate(140 / numRays - 1);
}

pop();
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