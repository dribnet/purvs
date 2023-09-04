const colorFront  = "#FF91D7";
const colorStroke = "#233f11";


var swapWords = [
  "GEOMETRY",
  "ALPHABET",
  "12345678"
]

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  let posx = 0;
  let posy = 50; 
  let pos1x = posx + letterData["gx"];
  let pos1y = posy + letterData["gy"];
  let pos2x = posx + letterData["1x"]; 
  let pos2y = posy + letterData["1y"]; 
  let pos3x = posx + letterData["2x"]; 
  let pos3y = posy + letterData["2y"]; 

  let pos4x = posx + letterData["3x"];  
  let pos4y = posy + letterData["3y"]; 
  let pos5x = posx + letterData["4x"]; 
  let pos5y = posy+ letterData["4y"]; 
  let pos6x = posx + letterData["5x"]; 
  let pos6y = posy + letterData["5y"]; 

  push()
  noStroke();
  fill(colorFront);
  rect(posx,posy,70,100)
  fill(colorBack)
  triangle( pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
  triangle( pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);
  pop()
}

function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["gx"] = map(percent, 0, 100, oldObj["gx"], newObj["gx"]);
  new_letter["gy"] = map(percent, 0, 100, oldObj["gy"], newObj["gy"]);

  new_letter["1x"] = map(percent, 0, 100, oldObj["1x"], newObj["1x"]);
  new_letter["1y"] = map(percent, 0, 100, oldObj["1y"], newObj["1y"]);

  new_letter["2x"] = map(percent, 0, 100, oldObj["2x"], newObj["2x"]);
  new_letter["2y"] = map(percent, 0, 100, oldObj["2y"], newObj["2y"]);

  new_letter["3x"] = map(percent, 0, 100, oldObj["3x"], newObj["3x"]);
  new_letter["3y"] = map(percent, 0, 100, oldObj["3y"], newObj["3y"]);

  new_letter["4x"] = map(percent, 0, 100, oldObj["4x"], newObj["4x"]);
  new_letter["4y"] = map(percent, 0, 100, oldObj["4y"], newObj["4y"]);

  new_letter["5x"] = map(percent, 0, 100, oldObj["5x"], newObj["5x"]);
  new_letter["5y"] = map(percent, 0, 100, oldObj["5y"], newObj["5y"]);

  return new_letter;

}