const colorFront1  = "#d000ff";
const colorFront2  = "#ff6e00";
const colorFront3 =  "#dc44ff";
const colorTrunk1 =  "#872d00"; //brown

const colorStroke  = "#233f11";

let posx = 50;
let posy = 50;

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

//top arc -  according to letter A
 function top_arc(){
  let top_size = letterData["top_size"];
  let pos3x = posx+25 + letterData ["top_offsetx"];
  let pos3y = posy + letterData ["offsety"];
  let rotate_top = letterData["rotate_top"];
  let translate_top_x = letterData ["translate_top_x"];
  let translate_top_y = letterData ["translate_top_y"];


  noStroke();
  fill(colorFront1);

  push();
  translate(translate_top_x,translate_top_y);
  rotate(rotate_top);
  arc(pos3x, pos3y, top_size,  40, 0, 180);
  pop();

}

function bottom_arc(){
  // bottom arc - according to letter A
  let pos4x = posx +25 + letterData ["bottom_offsetx"];
  let pos4y = posy+55 + letterData ["offsety"];
  let bottom_size = letterData ["bottom_size"];
  let rot_bottom = letterData ["rotate_bottom"];
  let translate_bottom_x = letterData ["translate_bottom_x"];
  let translate_bottom_y = letterData ["translate_bottom_y"];


  fill(colorFront3);
  push();
  translate(translate_bottom_x,translate_bottom_y);
  rotate(rot_bottom);
  arc(pos4x, pos4y+1, bottom_size, 40,0 , 180);
  pop();
}

function middle_arc(){

  //middle arc according to letter A
  let pos5y = posy+ letterData ["offsety"];
  let middle_size = letterData["middle_size"];
  let pos6x = posx + letterData ["middle_offset"];
  let rot_middle = letterData ["rotate_middle"];
  let translate_middle_x = letterData ["translate_middle_x"];
  let translate_middle_y = letterData ["translate_middle_y"];


  fill(colorFront2);
  push();
  translate(translate_middle_x,translate_middle_y);
  rotate(rot_middle);
  arc(pos6x, pos5y+30, middle_size, 40, 0 , 180);
  pop();

}

top_arc();
bottom_arc();
middle_arc();

}

//interpolation/interaction
  function interpolate_letter(percent, oldObj, newObj) {
  angleMode(DEGREES);
  let new_letter = {};
  new_letter["top_offsetx"] = map(percent, 0, 100, oldObj["top_offsetx"], newObj["top_offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["top_size"] = map(percent, 0, 100, oldObj["top_size"], newObj["top_size"]);
  new_letter["middle_size"] = map(percent, 0, 100, oldObj["middle_size"], newObj["middle_size"]);
  new_letter["bottom_size"] = map(percent, 0, 100, oldObj["bottom_size"], newObj["bottom_size"]);
  new_letter["middle_offset"] = map(percent, 0, 100, oldObj["middle_offset"], newObj["middle_offset"]);
  new_letter["bottom_offsetx"] = map(percent, 0, 100, oldObj["bottom_offsetx"], newObj["bottom_offsetx"]);
  new_letter["rotate_top"] = map(percent, 0, 100, oldObj["rotate_top"], newObj["rotate_top"]);
  new_letter["rotate_bottom"] = map(percent, 0, 100, oldObj["rotate_bottom"], newObj["rotate_bottom"]);
  new_letter["rotate_middle"] = map(percent, 0, 100, oldObj["rotate_middle"], newObj["rotate_middle"]);
  new_letter["translate_top_x"] = map(percent, 0, 100, oldObj["translate_top_x"], newObj["translate_top_x"]);
  new_letter["translate_top_y"] = map(percent, 0, 100, oldObj["translate_top_y"], newObj["translate_top_y"]);
  new_letter["translate_bottom_x"] = map(percent, 0, 100, oldObj["translate_bottom_x"], newObj["translate_bottom_x"]);
  new_letter["translate_bottom_y"] = map(percent, 0, 100, oldObj["translate_bottom_y"], newObj["translate_bottom_y"]);
  new_letter["translate_middle_x"] = map(percent, 0, 100, oldObj["translate_middle_x"], newObj["translate_middle_x"]);
  new_letter["translate_middle_y"] = map(percent, 0, 100, oldObj["translate_middle_y"], newObj["translate_middle_y"]);


   return new_letter;
}

var swapWords = [
  "DISTRACT",   
  "FUNFUNKY",
  "ELENALEE",
  "09042019",

]
