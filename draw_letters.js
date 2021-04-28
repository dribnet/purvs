/* these are optional special variables which will change the system */
var systemBackgroundColor = "#c9afaf";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";
var rectSize = 7;

/* internal constants */
const colourRed  = "#a83636";
const colourBlack  = "#1f1f1f";
const strokeColor  = "#f2f2f2";
/*
 * Draw the letter given the letterData
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  stroke(strokeColor);
  strokeWeight(4);

  let A1 = letterData["point1A"]; // first X-point start triangle1
  let A2 = letterData["point2A"]; // second X-point start triangle1
  let A3 = letterData["point3A"]; // third X-point start triangle1
  let B1 = letterData["point1B"]; // first Y-point end triangle1
  let B2 = letterData["point2B"]; // second Y-point end triangle1
  let B3 = letterData["point3B"]; // third Y-point end triangle1
  let C1 = letterData["point1C"]; // first X-point start triangle2
  let C2 = letterData["point2C"]; // second X-point start triangle2
  let C3 = letterData["point3C"]; // third X-point start triangle2
  let D1 = letterData["point1D"]; // first Y-point end triangle2
  let D2 = letterData["point2D"]; // second Y-point end triangle2
  let D3 = letterData["point3D"]; // third Y-point end triangle2

  // draw two customised triangles
  fill(colourRed);
    customTriangle1(A1, B1, A2, B2, A3, B3);
  fill(colourBlack);
    customTriangle2(C1, D1, C2, D2, C3, D3);
}

function customTriangle1(A1, B1, A2, B2, A3, B3){
  strokeCap(SQUARE);
  triangle(A1, B1, A2, B2, A3, B3);
  push(); 
  rectMode(CENTER);
    fill('#f2f2f2');
      rect(A1, B1, rectSize);
      rect(A2, B2, rectSize);
      rect(A3, B3, rectSize);
  pop(); // used push pop because otherwise rectMode messes up the green boxes when you click in alphabet

}

function customTriangle2(C1, D1, C2, D2, C3, D3){
  triangle(C1, D1, C2, D2, C3, D3);
  push();
  rectMode(CENTER);
    fill('#f2f2f2');
      rect(C1, D1, rectSize);
      rect(C2, D2, rectSize);
      rect(C3, D3, rectSize);
  pop(); // used push pop because otherwise rectMode messes up the green boxes when you click in alphabet
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  if(percent < 50){
    new_letter["point1A"] = oldObj["point1A"];
    new_letter["point1B"] = oldObj["point1B"];
    }
  else{
    new_letter["point1A"] = map(percent, 51, 100, oldObj["point1A"], newObj["point1A"]);
    new_letter["point1B"] = map(percent, 51, 100, oldObj["point1B"], newObj["point1B"]);
    } // these maps create a slight delay in the interpolation. See "EXHIBITION" in my write-up for more
  if(percent < 40){
    new_letter["point3A"] = oldObj["point3A"];
    new_letter["point3B"] = oldObj["point3B"];
    new_letter["point1C"] = oldObj["point1C"];
    new_letter["point1D"] = oldObj["point1D"];
    }
  else{
    new_letter["point3A"] = map(percent, 41, 100, oldObj["point3A"], newObj["point3A"]);
    new_letter["point3B"] = map(percent, 41, 100, oldObj["point3B"], newObj["point3B"]);
    new_letter["point1C"] = map(percent, 41, 100, oldObj["point1C"], newObj["point1C"]);
    new_letter["point1D"] = map(percent, 41, 100, oldObj["point1D"], newObj["point1D"]);
    } // these maps create a slight delay in the interpolation. See "EXHIBITION" in my write-up for more
  new_letter["point2A"] = map(percent, 0, 100, oldObj["point2A"], newObj["point2A"]);
  new_letter["point2B"] = map(percent, 0, 100, oldObj["point2B"], newObj["point2B"]);
  new_letter["point2C"] = map(percent, 0, 100, oldObj["point2C"], newObj["point2C"]);
  new_letter["point3C"] = map(percent, 0, 100, oldObj["point3C"], newObj["point3C"]);
  new_letter["point2D"] = map(percent, 0, 100, oldObj["point2D"], newObj["point2D"]);
  new_letter["point3D"] = map(percent, 0, 100, oldObj["point3D"], newObj["point3D"]);
  return new_letter;
}

var swapWords = [
  "PROTOCOS",
  "TRIANGLE",
  "??FONT??",
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]