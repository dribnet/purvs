const colorFront  = "#ccdefc";
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
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters 
  let x1 = letterData["x1"];
  let y1 = letterData["y1"];
  let x2 = letterData["x2"];
  let y2 = letterData["y2"];
  let x3 = letterData["x3"];
  let y3 = letterData["y3"];

  let xA = letterData["xA"];
  let yA = letterData["yA"];
  let xB = letterData["xB"];
  let yB = letterData["yB"];
  let xC = letterData["xC"];
  let yC = letterData["yC"];

  let x7 = letterData["x7"];
  let y7 = letterData["y7"];


  //triangle LEFT
  stroke(255);
  fill(152, 186, 242);
  triangle(x1, y1, x2, y2, x3, y3);
  //shadow
  noStroke();
  fill(116, 160, 232);
  let shadowX = x1 + 30;
  triangle(shadowX, y1, x2, y2, x3, y3);
  rect(130, 180, 70, 25);

  //no parameters left for this middle bit
  //fill(74, 112, 173);
  // rect(150, 200, 50, 25);//bottom
  // fill(152, 186, 242);
  rect(130, 180, 70, 25);//top
  //the middle stuff ^
  //right triangle
  
  fill(50, 129, 255);
  stroke(255);
  triangle(xA, yA, xB, yB, xC, yC);
  noStroke();
}
