const colorFront  = "#3dcbff";
const colorStroke = "#db8a00";


function drawLetter(letterData) {
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(3);

  // parameters used
  let size2 = letterData["size"];
  let pos1x = 50+letterData["offsetx"];
  let pos1y = 150+letterData["offsety"];
  let spin1 = letterData["rotate"];
  let pos2x = letterData["offset2x"];
  let pos2y = letterData["offset2y"];
  let pos3x = letterData["offset3x"];
  let pos3y = letterData["offset3y"];
  let pos4x = letterData["offset4x"];
  let pos4y = letterData["offset4y"];
  
  // Rotation done in degrees
  // Rectangle coordinates refer to the center of the rectangle
  angleMode(DEGREES);
  rectMode(CENTER);

  // geometry used-----
  push();
    translate(pos1x,pos1y);
    rotate(spin1);
    translate(-pos1x,-pos1y);
    rect(pos1x,pos1y,20,size2)
  pop();  
  ellipse(pos2x,pos2y,35,35);
  ellipse(pos3x,pos3y,35,35);
  ellipse(pos4x,pos4y,35,35);
  // -----

}
// This animates things
function interpolate_letter(percent, oldObj,newObj) {
  let new_letter = {};
  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);
  new_letter["offset4x"] = map(percent, 0, 100, oldObj["offset4x"], newObj["offset4x"]);
  new_letter["offset4y"] = map(percent, 0, 100, oldObj["offset4y"], newObj["offset4y"]);
  new_letter["rotate"] = map(percent, 0, 100, oldObj["rotate"], newObj["rotate"]);
  return new_letter;
}

// These are words used in the exhibition
var swapWords = [
  "GOODGAME",
  "FOR SURE",
  "POGCHAMP",
  "SO AMAZE",
  " INSANE ",
  "AYYYLMAO",
  "RESTLESS",
  " PLANET ",
  " HUSTLE ",
  "YEAH NAH",
  " YUGIOH ",
  "RESOLVED",
  "COOLBEAN",
  "RESOLUTE",
  "TARANAKI",
  "TERRIFIC",
  "LAUGHING",
  "COOLNESS",
  "PARALLEL"
]
