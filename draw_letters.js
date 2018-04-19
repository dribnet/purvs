const colorFront  = "#199cff";
const colorStroke = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

 
  let posx = letterData["x"];
  let posy = letterData["y"];

  let pos2x = letterData["x2"];
  let pos2y = letterData["y2"];

  let pos3x = letterData["x3"];
  let pos3y = letterData["y3"];

  let pos4x = letterData["x4"];
  let pos4y = letterData["y4"];

  let pos5x = letterData["x5"];
  let pos5y = letterData["y5"];

  let pos6x = letterData["x6"];
  let pos6y = letterData["y6"];

  let pos7x = letterData["x7"];
  let pos7y = letterData["y7"];

  let pos8x = letterData["x8"];
  let pos8y = letterData["y8"];

 let pos9x = letterData["x9"];
 let pos9y = letterData["y9"];

 let pos10x = letterData["x10"];
 let pos10y = letterData["y10"];


var r = random(70,255);
var g = random(173,105);
var b = random(212,180);
var a = random(60,90);


let colS = color(r,g,b,a);
  

push();

blendMode(BLEND);
stroke(colS);
strokeWeight(6);
smooth();
noFill();
  line(posx+3,posy+3,pos2x+3,pos2y+3);
  line(pos3x+3,pos3y+3,pos4x+3,pos4y+3);
  line(pos5x+3,pos5y+3,pos6x+3,pos6y+3);
  line(pos7x+3,pos7y+3,pos8x+3,pos8y+3);
  line(pos9x+3,pos9y+3,pos10x+3,pos10y+3);
pop();

push();

blendMode(BLEND);
stroke(colS);
strokeWeight(2);
smooth();
noFill();
  line(posx-2,posy-2,pos2x-2,pos2y-2);
  line(pos3x-2,pos3y-2,pos4x-2,pos4y-2);
  line(pos5x-2,pos5y-2,pos6x-2,pos6y-2);
  line(pos7x-2,pos7y-2,pos8x-2,pos8y-2);
  line(pos9x-2,pos9y-2,pos10x-2,pos10y-2);
pop();

push();
stroke(255,255,255,98);
strokeWeight(3);
smooth();
  line(posx,posy,pos2x,pos2y);
  line(pos3x,pos3y,pos4x,pos4y);
  line(pos5x,pos5y,pos6x,pos6y);
  line(pos7x,pos7y,pos8x,pos8y);
  line(pos9x,pos9y,pos10x,pos10y);
pop();



}

function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["x"] = map(percent,0, 100, oldObj["x"],newObj["x"]);
  new_letter["y"] = map(percent,0, 100, oldObj["y"],newObj["y"]);
  new_letter["x2"] = map(percent,0, 100, oldObj["x2"],newObj["x2"]);
  new_letter["y2"] = map(percent,0, 100, oldObj["y2"],newObj["y2"]);
  new_letter["x3"] = map(percent,0, 100, oldObj["x3"],newObj["x3"]);
  new_letter["y3"] = map(percent,0, 100, oldObj["y3"],newObj["y3"]);
  new_letter["x4"] = map(percent,0, 100, oldObj["x4"],newObj["x4"]);
  new_letter["y4"] = map(percent,0, 100, oldObj["y4"],newObj["y4"]);
  new_letter["x5"] = map(percent,0, 100, oldObj["x5"],newObj["x5"]);
  new_letter["y5"] = map(percent,0, 100, oldObj["y5"],newObj["y5"]);
  new_letter["x6"] = map(percent,0, 100, oldObj["x6"],newObj["x6"]);
  new_letter["y6"] = map(percent,0, 100, oldObj["y6"],newObj["y6"]);
  new_letter["x7"] = map(percent,0, 100, oldObj["x7"],newObj["x7"]);
  new_letter["y7"] = map(percent,0, 100, oldObj["y7"],newObj["y7"]);
  new_letter["x8"] = map(percent,0, 100, oldObj["x8"],newObj["x8"]);
  new_letter["y8"] = map(percent,0, 100, oldObj["y8"],newObj["y8"]);
  new_letter["x9"] = map(percent,0, 100, oldObj["x9"],newObj["x9"]);
  new_letter["y9"] = map(percent,0, 100, oldObj["y9"],newObj["y9"]);
  new_letter["x10"] = map(percent,0, 100, oldObj["x10"],newObj["x10"]);
  new_letter["y10"] = map(percent,0, 100, oldObj["y10"],newObj["y10"]);
  return new_letter;
}
