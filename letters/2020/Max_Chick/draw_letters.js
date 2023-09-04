
// const colorFront1  = "#2bad8f";
// const colorFront2  = "#2b8aad";
// //const colorBack    = "#2bad4e";
// const colorStroke  = "#233f11";

const colorFront2  = "#f6917b";
const colorFront1 = "#f8cc8b";
//const colorBack    = "#2bad4e";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES)
  // determine parameters for triangles
  let pos1SmallX = 50 + letterData["offset1Smallx"];
  let pos1SmallY = 100 + letterData["offset1Smally"];
  let pos2SmallX = 50 + letterData["offset2Smallx"];
  let pos2SmallY = 100 + letterData["offset2Smally"];
  let rotate1Small = letterData["rotate1S"];
  let rotate2Small = letterData["rotate2S"];
  let rotate1Big = letterData["rotate1B"];
  let stroke1Small = letterData["stroke1Small"];
  let stroke1Big = letterData["stroke1Big"];

  triangleDraw(0, 0, rotate1Big, stroke1Big, colorFront2, 1);                         // first big triangle
  triangleDraw(pos1SmallX, pos1SmallY, rotate1Small, stroke1Small, colorFront1, 2);   // first small triangle
  triangleDraw(pos2SmallX, pos2SmallY, rotate2Small, stroke1Small, colorFront1, 2);   // second small triangle

  function triangleDraw(X, Y, R, S, Col, scaleF){ // draws a triangle when called
    let option = 1
    if (scaleF == 2){ // checks type of triangle to move to correct spot
      option = -1
    }
    push(); // save current movements
    translate(50*option, 100*option); // initial positioning movement
    translate(X, Y); // moves further along given x, y
    rotate(R); // rotational variable
    strokeWeight(S); // - unused currently
    stroke(237, 222, 183); // complimentary stroke colour - unused currently
    noStroke();
    fill(Col);  
    triangle(0/scaleF, -25/scaleF, 50/scaleF, 50/scaleF, -50/scaleF, 50/scaleF); // draws triangle that is scaled with parameter
    pop(); // back to origin
  }
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offset1Smallx"]    = map(percent, 0, 100, oldObj["offset1Smallx"], newObj["offset1Smallx"]);
  new_letter["offset1Smally"] = map(percent, 0, 100, oldObj["offset1Smally"], newObj["offset1Smally"]);
  new_letter["offset2Smallx"] = map(percent, 0, 100, oldObj["offset2Smallx"], newObj["offset2Smallx"]);
  new_letter["offset2Smally"] = map(percent, 0, 100, oldObj["offset2Smally"], newObj["offset2Smally"]);
  new_letter["rotate1S"] = map(percent, 0, 100, oldObj["rotate1S"], newObj["rotate1S"]);
  new_letter["rotate2S"] = map(percent, 0, 100, oldObj["rotate2S"], newObj["rotate2S"]);
  new_letter["rotate1B"] = map(percent, 0, 100, oldObj["rotate1B"], newObj["rotate1B"]);
  new_letter["stroke1Small"] = map(percent, 0, 100, oldObj["stroke1Small"], newObj["stroke1Small"]);
  new_letter["stroke1Big"] = map(percent, 0, 100, oldObj["stroke1Big"], newObj["stroke1Big"]);
  return new_letter;
}

var swapWords = [
  "TRIIFONT",
  "TMBWTMBW",
  "TRIIIMAX",
  "MAXCHICK",
  "TRIANGLE",
  "12345678"
]