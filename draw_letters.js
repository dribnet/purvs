const colorFront  = "#FDF4F5";
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
  let posx = 0;
  let posy = 0; 
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