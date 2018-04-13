

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup

  // determine parameters for second circle
  let size1 = letterData["sizeX"];
  let size2 = letterData["sizeY"];
  let pos2x =  letterData["offsetx"];
  let pos2y =  letterData["offsety"];

  
  let x1 =letterData["qx1"];
  let y1 =letterData["qy1"];
  let x2=letterData["qx2"];
  let y2 =letterData["qy2"];
  let x3= letterData["qx3"];
  let y3 =letterData["qy3"];
  let x4 =letterData["qx4"];
  let y4 =letterData["qy4"];


noStroke()
fill (255,68,93,100);
  // draw two circles
beginShape();
vertex(x1,y1)
vertex(x2,y2)
vertex(x3,y3)
vertex(x4,y4)
endShape();



fill (200,58,23,100);
stroke(255,208,68)
strokeWeight(3)
rect(pos2x, pos2y, size1, size2);

}
