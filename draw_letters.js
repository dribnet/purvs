const colorBack    = "#FFD745";
const colorStroke  = "#FFFF00";
const lineSpacing = 20;

const posx = 0;
const posy = 100;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for lines
  let Yshift1 = letterData["offsetX1"];
  let Yshift2 = letterData["offsetX2"];
  let Yshift3 = letterData["offsetX3"];
  let Yshift4 = letterData["offsetX4"];
 
  let length1 = letterData["offsetY1"];
  let length2 = letterData["offsetY2"];
  let length3 = letterData["offsetY3"];
  let length4 = letterData["offsetY4"]; 

  //determine parameters for quads
  let Xquad1 = letterData["quadX1"];
  let Xquad2 = letterData["quadX2"];
  let Xquad3 = letterData["quadX3"];
  let Xquad4 = letterData["quadX4"];

  let Yquad1 = letterData["quadY1"];
  let Yquad2 = letterData["quadY2"];
  let Yquad3 = letterData["quadY3"];
  let Yquad4 = letterData["quadY4"];

  // draw four lines
  line(posx + lineSpacing, posy + Yshift1, posx + lineSpacing, posy + length1 + Yshift1);
  line(posx + lineSpacing*2, posy + Yshift2, posx + lineSpacing*2, posy + length2 + Yshift2);
  line(posx + lineSpacing*3, posy + Yshift3, posx + lineSpacing*3, posy + length3 + Yshift3);
  line(posx + lineSpacing*4, posy + Yshift4, posx + lineSpacing*4, posy + length4 + Yshift4);

  noStroke();
  fill(colorBack);
  //fill("#d1b932");

  quad(Xquad1, Yquad1, Xquad2, Yquad2, Xquad3, Yquad3, Xquad4, Yquad4);
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