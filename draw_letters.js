const darkRed  = "#9C2B21";// dark red
const lightPink  = "#F8B6AA";// light pink
const colorStroke  = "#F8DED2";// stroke colour


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
 
 //first triangle (light pink)
  let triangleX1 = letterData["triX1"];
  let triangleY1 = letterData["triY1"];
  let triangleX2 = letterData["triX2"];
  let triangleY2 = letterData["triY2"];
  let triangleX3 = letterData["triX3"];
  let triangleY3 = letterData["triY3"];
  
  //second triangle (light pink)
  let triangle2X1 = letterData["2triX1"];
  let triangle2Y1 = letterData["2triY1"];
  let triangle2X2 = letterData["2triX2"];
  let triangle2Y2 = letterData["2triY2"];
  let triangle2X3 = letterData["2triX3"];
  let triangle2Y3 = letterData["2triY3"];

  //third triangle (dark red)
  let triangle3X1 = letterData["3triX1"];
  let triangle3Y1 = letterData["3triY1"];
  let triangle3X2 = letterData["3triX2"];
  let triangle3Y2 = letterData["3triY2"];
  let triangle3X3 = letterData["3triX3"];
  let triangle3Y3 = letterData["3triY3"];

  // draw triangles
  stroke(colorStroke);
  strokeWeight(2.5);
    fill(darkRed);

  triangle(0, 150, 50, 50, 100, 150);
  
  fill(lightPink);
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);

  fill(lightPink);
  triangle(triangle2X1, triangle2Y1, triangle2X2, triangle2Y2, triangle2X3, triangle2Y3);

  fill(darkRed);
  triangle(triangle3X1, triangle3Y1, triangle3X2, triangle3Y2, triangle3X3, triangle3Y3);
}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

//triangle one
  new_letter["triX1"]    = map(percent, 0, 100, oldObj["triX1"], newObj["triX1"]);
  new_letter["triY1"] = map(percent, 0, 100, oldObj["triY1"], newObj["triY1"]);
  new_letter["triX2"] = map(percent, 0, 100, oldObj["triX2"], newObj["triX2"]);
  new_letter["triY2"] = map(percent, 0, 100, oldObj["triY2"], newObj["triY2"]);
  new_letter["triX3"] = map(percent, 0, 100, oldObj["triX3"], newObj["triX3"]);
  new_letter["triY3"] = map(percent, 0, 100, oldObj["triY3"], newObj["triY3"]);
  
//triangle two  
  new_letter["2triX1"] = map(percent, 0, 100, oldObj["2triX1"], newObj["2triX1"]);
  new_letter["2triY1"] = map(percent, 0, 100, oldObj["2triY1"], newObj["2triY1"]);
  new_letter["2triX2"] = map(percent, 0, 100, oldObj["2triX2"], newObj["2triX2"]);
  new_letter["2triY2"] = map(percent, 0, 100, oldObj["2triY2"], newObj["2triY2"]);
  new_letter["2triX3"] = map(percent, 0, 100, oldObj["2triX3"], newObj["2triX3"]);
  new_letter["2triY3"] = map(percent, 0, 100, oldObj["2triY3"], newObj["2triY3"]);

//triangle three  
  new_letter["3triX1"] = map(percent/4, 0, 25, oldObj["3triX1"], newObj["3triX1"]);
  new_letter["3triY1"] = map(percent/4, 0, 25, oldObj["3triY1"], newObj["3triY1"]);
  new_letter["3triX2"] = map(percent/4, 0, 25, oldObj["3triX2"], newObj["3triX2"]);
  new_letter["3triY2"] = map(percent/4, 0, 25, oldObj["3triY2"], newObj["3triY2"]);
  new_letter["3triX3"] = map(percent/4, 0, 25, oldObj["3triX3"], newObj["3triX3"]);
  new_letter["3triY3"] = map(percent/4, 0, 25, oldObj["3triY3"], newObj["3triY3"]);
  return new_letter;
}

var swapWords = [
  "ISOSCALE",
  "TRIANGLE",
  "TRIPTYCH",
  "ORIGINAL",
  "GEOMETRY",
  "3THREE12",
  "A1B2C3D4",
  "EM!IL!Y!"
  
]