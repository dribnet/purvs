

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let posx = 0;
  let posy = 0;
 
  let pos2x = posx + letterData["offsetx1 tri 1"];
  let pos2y = posy + letterData["offsety1 tri 1"];

  let pos3x = posx + letterData["offsetx2 tri 1"];
  let pos3y = posy + letterData["offsety2 tri 1"];

  let pos4x = posx + letterData["offsetx3 tri 1"];
  let pos4y = posy + letterData["offsety3 tri 1"];

  let pos5x = posx + letterData["offsetx1 tri 2"];
  let pos5y = posy + letterData["offsety1 tri 2"];

  let pos6x = posx + letterData["offsetx2 tri 2"];
  let pos6y = posy + letterData["offsety2 tri 2"];

  let pos7x = posx + letterData["offsetx3 tri 2"];
  let pos7y = posy + letterData["offsety3 tri 2"];

  let pos8x = posx + letterData["offsetx1 tri 3"];
  let pos8y = posy + letterData["offsety1 tri 3"];

  let pos9x = posx + letterData["offsetx2 tri 3"];
  let pos9y = posy + letterData["offsety2 tri 3"];

  let pos10x = posx + letterData["offsetx3 tri 3"];
  let pos10y = posy + letterData["offsety3 tri 3"];

  let pos11x = posx + letterData["offsetx1 tri 4"];
  let pos11y = posy + letterData["offsety1 tri 4"];

  let pos12x = posx + letterData["offsetx2 tri 4"];
  let pos12y = posy + letterData["offsety2 tri 4"];

  let pos13x = posx + letterData["offsetx3 tri 4"];
  let pos13y = posy + letterData["offsety3 tri 4"];

  
const colorFront1  = "#bc0000";
const colorFront2  = "#9e0000";
const colorBack    = "#2b2b2b";
const colorStroke  = "#1e1e1e";

fill(colorFront1);
  triangle(pos2x, pos2y, pos3x, pos3y, pos4x, pos4y);

  fill(colorFront2);
  triangle(pos5x, pos5y, pos6x, pos6y, pos7x, pos7y);


  fill(colorFront1);
  triangle(pos8x, pos8y, pos9x, pos9y, pos10x, pos10y);

  fill(colorFront2);
  triangle(pos11x, pos11y, pos12x, pos12y, pos13x, pos13y);



}