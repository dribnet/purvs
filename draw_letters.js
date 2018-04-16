const colorFront  = "#199cff";
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
 
  noFill();
  stroke(colorStroke);
  strokeWeight(10);
  // determine parameters for second circle
  //point1
  let pos2x = 0+letterData["x1"];
  let pos2y = 0+letterData["y1"];
  let size1 = letterData["s1"];
  let size2 = letterData["s2"];
  //point2
  let pos3x = letterData["x2"];
  let pos3y = 50+letterData["y2"];
  let size3 = letterData["s3"];
  let size4 = letterData["s4"];
  // //point3
  // let pos4x = 75+letterData["x3"];
  // let pos4y = 175+letterData["y3"];
  // //point4
  // let pos5x = 50+letterData["x4"];
  // let pos5y = -125+letterData["y4"];
  //drawpoint
  
  rect(pos2x,pos2y,size1,size2);
  rect(pos3x,pos3y,size3,size4);
  // point(pos4x,pos4y);
  // point(pos5x,pos5y);
}
