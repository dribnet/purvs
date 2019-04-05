
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
  let positionx15 = letterData["offsetx15"];
  let positionx16 = letterData["offsetx16"];
  let positionx17 = letterData["offsetx17"];
  let positionx18 = letterData["offsetx18"];
  let positionx19 = letterData["offsetx19"];
  let positionx20 = letterData["offsetx20"];
  
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
  let length15 = letterData["offsety15"]; 
  let length16 = letterData["offsety16"];
  let length17 = letterData["offsety17"];
  let length18 = letterData["offsety18"];
  let length19 = letterData["offsety19"]; 
  let length20 = letterData["offsety20"]; 



strokeWeight(5);
  line(posx + positionx1, posy + lineSpacing,   posx + length1 + positionx1, posy + lineSpacing);
  line(posx + positionx2, posy + lineSpacing*2, posx + length2 + positionx2, posy + lineSpacing*2);
  line(posx + positionx3, posy + lineSpacing*3, posx + length3 + positionx3, posy + lineSpacing*3);
  line(posx + positionx4, posy + lineSpacing*4, posx + length4 + positionx4, posy + lineSpacing*4);
  line(posx + positionx5, posy + lineSpacing*5, posx + length5 + positionx5, posy + lineSpacing*5);
  line(posx + positionx6, posy + lineSpacing*6, posx + length6 + positionx6, posy + lineSpacing*6);
  line(posx + positionx7, posy + lineSpacing*7, posx + length7 + positionx7, posy + lineSpacing*7);
  line(posx + positionx8, posy + lineSpacing*8, posx + length8 + positionx8, posy + lineSpacing*8);
  line(posx + positionx9, posy + lineSpacing*9, posx + length9 + positionx9, posy + lineSpacing*9);
  line(posx + positionx10, posy + lineSpacing*10, posx + length10 + positionx10, posy + lineSpacing*10);

  line(posx + positionx11, posy + lineSpacing,   posx + length11 + positionx11, posy + lineSpacing);
  line(posx + positionx12, posy + lineSpacing*2, posx + length12 + positionx12, posy + lineSpacing*2);
  line(posx + positionx13, posy + lineSpacing*3, posx + length13 + positionx13, posy + lineSpacing*3);
  line(posx + positionx14, posy + lineSpacing*4, posx + length14 + positionx14, posy + lineSpacing*4);
  line(posx + positionx15, posy + lineSpacing*5, posx + length15 + positionx15, posy + lineSpacing*5);
  line(posx + positionx16, posy + lineSpacing*6, posx + length16 + positionx16, posy + lineSpacing*6);
  line(posx + positionx17, posy + lineSpacing*7, posx + length17 + positionx17, posy + lineSpacing*7);
  line(posx + positionx18, posy + lineSpacing*8, posx + length18 + positionx18, posy + lineSpacing*8);
  line(posx + positionx19, posy + lineSpacing*9, posx + length19 + positionx19, posy + lineSpacing*9);
  line(posx + positionx20, posy + lineSpacing*10, posx + length20 + positionx20, posy + lineSpacing*10);
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