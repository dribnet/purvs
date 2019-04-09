
const colorStroke  = 255;
const lineSpacing = 15;

const posx = 10;
const posx2= 35
const posy = 40;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let positionx1 = letterData["offsetx1"];
  let positionx2 = letterData["offsetx2"];
  let positionx3 = letterData["offsetx3"];
  let positionx4 = letterData["offsetx4"];
  let positionx5 = letterData["offsetx5"];

  let positionx6 = letterData["offsetx6"];
  let positionx7 = letterData["offsetx7"];
  let positionx8 = letterData["offsetx8"];
  let positionx9 = letterData["offsetx9"];

  let positionx10 = letterData["offsetx10"];
  let positionx11 = letterData["offsetx11"];
  let positionx12 = letterData["offsetx12"];
  let positionx13 = letterData["offsetx13"];
  let positionx14 = letterData["offsetx14"];

  
  let length1 = letterData["offsety1"];
  let length2 = letterData["offsety2"];
  let length3 = letterData["offsety3"];
  let length4 = letterData["offsety4"]; 

  let length5 = letterData["offsety5"]; 
  let length6 = letterData["offsety6"];
  let length7 = letterData["offsety7"];
  let length8 = letterData["offsety8"];
  let length9 = letterData["offsety9"]; 

  let length10 = letterData["offsety10"]; 
  let length11 = letterData["offsety11"];
  let length12 = letterData["offsety12"];
  let length13 = letterData["offsety13"];
  let length14 = letterData["offsety14"]; 





strokeWeight(10);
  line(posx + positionx1, posy + lineSpacing,   posx + length1 + positionx1, posy + lineSpacing);
  line(posx + positionx2, posy + lineSpacing*2, posx + length2 + positionx2, posy + lineSpacing*2);
  line(posx + positionx3, posy + lineSpacing*3, posx + length3 + positionx3, posy + lineSpacing*3);
  line(posx + positionx4, posy + lineSpacing*4, posx + length4 + positionx4, posy + lineSpacing*4);
  line(posx + positionx5, posy + lineSpacing*5, posx + length5 + positionx5, posy + lineSpacing*5);
  line(posx + positionx6, posy + lineSpacing*6, posx + length6 + positionx6, posy + lineSpacing*6);
  line(posx + positionx7, posy + lineSpacing*7, posx + length7 + positionx7, posy + lineSpacing*7);
  line(posx + positionx8, posy + lineSpacing*8, posx + length8 + positionx8, posy + lineSpacing*8);
  line(posx + positionx9, posy + lineSpacing*9, posx + length9 + positionx9, posy + lineSpacing*9);


  line(posx + positionx10, posy + lineSpacing*5, posx + length10 + positionx10, posy + lineSpacing*5);
  line(posx + positionx11, posy + lineSpacing*6, posx + length11 + positionx11, posy + lineSpacing*6);
  line(posx + positionx12, posy + lineSpacing*7, posx + length12 + positionx12, posy + lineSpacing*7);
  line(posx + positionx13, posy + lineSpacing*8, posx + length13 + positionx13, posy + lineSpacing*8);
  line(posx + positionx14, posy + lineSpacing*9, posx + length14 + positionx14, posy + lineSpacing*9);
 strokeWeight(3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety1"]);

  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);

  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);

  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);

  new_letter["offsetx5"] = map(percent, 0, 100, oldObj["offsetx5"], newObj["offsetx5"]);
  new_letter["offsety5"] = map(percent, 0, 100, oldObj["offsety5"], newObj["offsety5"]);

  new_letter["offsetx6"] = map(percent, 0, 100, oldObj["offsetx6"], newObj["offsetx6"]);
  new_letter["offsety6"] = map(percent, 0, 100, oldObj["offsety6"], newObj["offsety6"]);

  new_letter["offsetx7"] = map(percent, 0, 100, oldObj["offsetx7"], newObj["offsetx7"]);
  new_letter["offsety7"] = map(percent, 0, 100, oldObj["offsety7"], newObj["offsety7"]);

  new_letter["offsetx8"] = map(percent, 0, 100, oldObj["offsetx8"], newObj["offsetx8"]);
  new_letter["offsety8"] = map(percent, 0, 100, oldObj["offsety8"], newObj["offsety8"]);

  new_letter["offsetx9"] = map(percent, 0, 100, oldObj["offsetx9"], newObj["offsetx9"]);
  new_letter["offsety9"] = map(percent, 0, 100, oldObj["offsety9"], newObj["offsety9"]);

  new_letter["offsetx10"] = map(percent, 0, 100, oldObj["offsetx10"], newObj["offsetx10"]);
  new_letter["offsety10"] = map(percent, 0, 100, oldObj["offsety10"], newObj["offsety10"]);

  new_letter["offsetx11"] = map(percent, 0, 100, oldObj["offsetx11"], newObj["offsetx11"]);
  new_letter["offsety11"] = map(percent, 0, 100, oldObj["offsety11"], newObj["offsety11"]);

  new_letter["offsetx12"] = map(percent, 0, 100, oldObj["offsetx12"], newObj["offsetx12"]);
  new_letter["offsety12"] = map(percent, 0, 100, oldObj["offsety12"], newObj["offsety12"]);

  new_letter["offsetx13"] = map(percent, 0, 100, oldObj["offsetx13"], newObj["offsetx13"]);
  new_letter["offsety13"] = map(percent, 0, 100, oldObj["offsety13"], newObj["offsety13"]);

  new_letter["offsetx14"] = map(percent, 0, 100, oldObj["offsetx14"], newObj["offsetx14"]);
  new_letter["offsety14"] = map(percent, 0, 100, oldObj["offsety14"], newObj["offsety14"]);


  return new_letter;

  // if(percent < amount_of_anticipation) {
  //  new_percent = map(percent, 0, 40, 0, -10);
  //}
  //else {
  //  new_percent = map(percent, 40, 100, -10, 100);
  //}   
}

var swapWords = [
  "BARSFONT",
  "VIET--LU",
  "ARSENAL-"
]