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

  let x4 = letterData["x4"];
  let y4 = letterData["y4"];
  let x5 = letterData["x5"];
  let y5 = letterData["y5"];
  let x6 = letterData["x6"];
  let y6 = letterData["y6"];

  
  
  stroke(142, 173, 107);
  noFill();
  rect(0, 0, 100, 200);
  
  noStroke();
  //triangle LEFT
  //stroke(255);
  fill(141, 198, 75);
  triangle(x1, y1, x2, y2, x3, y3);
  //shadow
  //noStroke();
  fill(176, 232, 111);
  let shadowX = x1 + 20;
  triangle(shadowX, y1, x2, y2, x3, y3);
  //rect(130, 180, 70, 25);

  //no parameters left for this middle bit
 
  noStroke();
  //right triangle
  strokeWeight(4);
  fill(194, 226, 151);
  //stroke(255);
  triangle(x4, y4, x5, y5, x6, y6);
  noStroke();
}
