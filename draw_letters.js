const colorFront1  = "#d000ff";
const colorFront2  = "#ff6e00";
const colorFront3 =  "#dc44ff";
//const colorTrunk1 =  "#ffae00"; yellow
const colorTrunk1 =  "#872d00"; //brown

const colorStroke  = "#233f11";

let posx = 50;
let posy = 50;
let size = 50;

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
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  //let pos2x = posx + letterData["offsetTrunkx"];
//  let pos2y = posy + letterData["offsetTrunky"];
 
  //top branch
  let size3 = size2-10+ letterData["size"];
  let top_size = letterData["top_size"];
  let pos3x = posx+25 + letterData ["top_offsetx"];
  let pos3y = posy + letterData ["offsety"];

  // bottom branch
  let pos4x = posx +25 + letterData ["bottom_offsetx"];
  let pos4y = posy+55 + letterData ["offsety"];
  let bottom_size = letterData ["bottom_size"];

  //middle branch
  //irrelevant let pos5x = posx + letterData ["offsetx"];
  let pos5y = posy+ letterData ["offsety"];
  let middle_size = letterData["middle_size"];

  let pos6x = posx + letterData ["middle_offset"];
  //let opacity = letterData ["opacity"];
//  let pos6y =


  // tree trunk
  noStroke();

  //fill(colorTrunk1);
  //rect(posx-10, 0, 20, 200,5);

  //top branch

  fill(colorFront1);
  arc(pos3x, pos3y, top_size,  40, 0, PI);


  //middle branch

  fill(colorFront2);
  arc(pos6x, pos5y+30, middle_size, 40, 0 , PI);

  //bottom branch

  fill(colorFront3);
  arc(pos4x, pos4y+1, bottom_size, 40,0 , PI);
}

  function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["top_offsetx"] = map(percent, 0, 100, oldObj["top_offsetx"], newObj["top_offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["top_size"] = map(percent, 0, 100, oldObj["top_size"], newObj["top_size"]);
  new_letter["middle_size"] = map(percent, 0, 100, oldObj["middle_size"], newObj["middle_size"]);
  new_letter["bottom_size"] = map(percent, 0, 100, oldObj["bottom_size"], newObj["bottom_size"]);
  new_letter["middle_offset"] = map(percent, 0, 100, oldObj["middle_offset"], newObj["middle_offset"]);
  new_letter["bottom_offsetx"] = map(percent, 0, 100, oldObj["bottom_offsetx"], newObj["bottom_offsetx"]);
  new_letter["offsetTrunkx"] = map(percent, 0, 100, oldObj["offsetTrunkx"], newObj["offsetTrunkx"]);
  new_letter["offsetTrunky"] = map(percent, 0, 100, oldObj["offsetTrunky"], newObj["offsetTrunky"]);

   return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]

// ideas : have a rotation parameter
// have parameters for y values of each branch 
//sort out what size, trunkoffset x and y are doing
