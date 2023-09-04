const colorFront1  = "#C9D1D3FA"; //white colour
const colorFront2  = "#ff402bD9"; //red colour
const colorStroke  = "#1c1c1c90"; //stroke colour


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  //setting up my parameters to change depending on the letter in letters.js
  let rectwidth = letterData["rectlength"];
  let recthigh = letterData["rectheight"];
  let rectwidth_two = letterData["nofill_length"];
  let recthigh_two = letterData["nofill_height"];
  let rect_twox = letterData["rect_twoposx"];
  let rect_twoy = letterData["rect_twoposy"];
  let tri_onex = letterData["triangleleftx"];
  let tri_twox = letterData["triangletopx"];
  let tri_threex = letterData["trianglerightx"];
  let tri_oney = letterData["trianglelefty"];
  let tri_twoy = letterData["triangletopy"];
  let tri_threey = letterData["trianglerighty"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];

  //draws my first rect in white with no stroke
  noStroke();
  fill(colorFront1);
  rect(pos2x, pos2y, rectwidth, recthigh);
  stroke(colorFront2);
  //draws my second rect in a red stroke with no fill
  strokeWeight(10);
  noFill();
  rect(rect_twox, rect_twoy, rectwidth_two, recthigh_two);
  //draws my triangle with a black stroke that has opacity applied
  stroke(colorStroke);
  fill(colorBack);
  triangle(tri_onex, tri_oney, tri_twox, tri_twoy, tri_threex, tri_threey);
}

//the transition function between two letters
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //mapping the white rectangle
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["rectlength"] = map(percent, 0, 100, oldObj["rectlength"], newObj["rectlength"]);
  new_letter["rectheight"] = map(percent, 0, 100, oldObj["rectheight"], newObj["rectheight"]);
  //mapping the red stroke rectangle
  new_letter["nofill_length"] = map(percent, 0, 100, oldObj["nofill_length"], newObj["nofill_length"]);
  new_letter["nofill_height"] = map(percent, 0, 100, oldObj["nofill_height"], newObj["nofill_height"]);
  new_letter["rect_twoposx"] = map(percent, 0, 100, oldObj["rect_twoposx"], newObj["rect_twoposx"]);
  new_letter["rect_twoposy"] = map(percent, 0, 100, oldObj["rect_twoposy"], newObj["rect_twoposy"]);

  //!YOU CAN TEST THIS!! This is my if statement. This starts the animation later (after 20%)
  // if(percent<20) { 
  // new_letter["triangleleftx"] = oldObj["triangleleftx"];
  // new_letter["trianglelefty"] = oldObj["trianglelefty"];
  // new_letter["triangletopx"] = oldObj["triangletopx"];
  // new_letter["triangletopy"] = oldObj["triangletopy"];
  // new_letter["trianglerightx"] = oldObj["trianglerightx"];
  // new_letter["trianglerighty"] = oldObj["trianglerighty"];  	
  // } else {
  //mapping my black stroke triangle
  new_letter["triangleleftx"] = map(percent, 0, 100, oldObj["triangleleftx"], newObj["triangleleftx"]);
  new_letter["trianglelefty"] = map(percent, 0, 100, oldObj["trianglelefty"], newObj["trianglelefty"]);
  new_letter["triangletopx"] = map(percent, 0, 100, oldObj["triangletopx"], newObj["triangletopx"]);
  new_letter["triangletopy"] = map(percent, 0, 100, oldObj["triangletopy"], newObj["triangletopy"]);
  new_letter["trianglerightx"] = map(percent, 0, 100, oldObj["trianglerightx"], newObj["trianglerightx"]);
  new_letter["trianglerighty"] = map(percent, 0, 100, oldObj["trianglerighty"], newObj["trianglerighty"]);
  // } the end of the if statement

  return new_letter;
}

//exhibition words
var swapWords = [
  "VAMPIRES", //the title of my font follow by relevant words
  "IMMORTAL",
  "BLOODCUP",
  "INFECTED",
  "WARNINGS",
  " CREEPY ",
  " SLAYER ",
  " REAPER ",
  "THIRSTY1",
  "MONSTERS",
  "SCARY123",
  "SINISTER"
]