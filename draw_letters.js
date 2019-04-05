const colorBack    = "#FFFFFF";
const colorStroke  = "#4286f4";
const colorArc = "#84b3ff";
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

  //determine parameters for lines
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

  //determine parameters for arcs
  let Xarc1 = letterData["arcX1"];
  let Yarc1 = letterData["arcY1"];

  let arcwidth = letterData["arcH"];
  let archeight = letterData["arcW"];   

  //draw arc
  noStroke();
  fill(colorArc);
  arc(Xarc1, Yarc1, arcwidth, archeight, HALF_PI, -HALF_PI);     

  stroke(colorStroke);
  strokeWeight(6);

  // draw four lines
  line(posx + lineSpacing, posy + Yshift1, posx + lineSpacing, posy + length1 + Yshift1);

  strokeWeight(4);
  line(posx + lineSpacing*2, posy + Yshift2, posx + lineSpacing*2, posy + length2 + Yshift2);
  line(posx + lineSpacing*3, posy + Yshift3, posx + lineSpacing*3, posy + length3 + Yshift3);
  line(posx + lineSpacing*4, posy + Yshift4, posx + lineSpacing*4, posy + length4 + Yshift4);

  fill(colorBack);
  //fill("#bcbcbc");
  noStroke();

  quad(Xquad1, Yquad1, Xquad2, Yquad2, Xquad3, Yquad3, Xquad4, Yquad4);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {}
  new_letter["size"] = map (percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetX1"] = map(percent, 0, 100, oldObj["offsetX1"], newObj["offsetX1"]);
  new_letter["offsetX2"] = map(percent, 0, 100, oldObj["offsetX2"], newObj["offsetX2"]);
  new_letter["offsetX3"] = map(percent, 0, 100, oldObj["offsetX3"], newObj["offsetX3"]);
  new_letter["offsetX4"] = map(percent, 0, 100, oldObj["offsetX4"], newObj["offsetX4"]);

  new_letter["offsetY1"] = map(percent, 0, 100, oldObj["offsetY1"], newObj["offsetY1"]);
  new_letter["offsetY2"] = map(percent, 0, 100, oldObj["offsetY2"], newObj["offsetY2"]);
  new_letter["offsetY3"] = map(percent, 0, 100, oldObj["offsetY3"], newObj["offsetY3"]);
  new_letter["offsetY4"] = map(percent, 0, 100, oldObj["offsetY4"], newObj["offsetY4"]);

  new_letter["quadX1"] = map(percent, 0, 100, oldObj["quadX1"], newObj["quadX1"]);
  new_letter["quadX2"] = map(percent, 0, 100, oldObj["quadX2"], newObj["quadX2"]);
  new_letter["quadX3"] = map(percent, 0, 100, oldObj["quadX3"], newObj["quadX3"]);
  new_letter["quadX4"] = map(percent, 0, 100, oldObj["quadX4"], newObj["quadX4"]);

  new_letter["quadY1"] = map(percent, 0, 100, oldObj["quadY1"], newObj["quadY1"]);
  new_letter["quadY2"] = map(percent, 0, 100, oldObj["quadY2"], newObj["quadY2"]);
  new_letter["quadY3"] = map(percent, 0, 100, oldObj["quadY3"], newObj["quadY3"]);
  new_letter["quadY4"] = map(percent, 0, 100, oldObj["quadY4"], newObj["quadY4"]);

  return new_letter;
}

var swapWords = [
  "DIVISION",
  "ADJACENT",
  "CONTRAST",
  "SEPARATE"
]