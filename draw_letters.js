const colorFront1  = "#f8b62d";
const colorFront2  = "#ea5514";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  let r1x = letterData["r1x"];
  let r1y = letterData["r1y"];
  let r1l = letterData["r1l"];

  let r2x = letterData["r2x"];
  let r2y = letterData["r2y"];
  let r2l = letterData["r2l"];

  let r3x = letterData["r3x"];
  let r3y = letterData["r3y"];
  let r3l = letterData["r3l"];

  let r4x = letterData["r4x"];
  let r4y = letterData["r4y"];
  let r4l = letterData["r4l"];

  let r5x = letterData["r5x"];
  let r5y = letterData["r5y"];
  let r5l = letterData["r5l"];


// SHADOW
push();
noStroke();
fill(0);
  circle(50+10, 100+10, 40);
pop();
 //BACKCRICL
 push();
 noStroke();
 fill(colorFront2);
   circle(50, 100, 40);
pop();

//LINE
push();
 noStroke();
 fill(colorFront1);
  rect( r1x, 70, r1l, r1y);
  rect( r2x, 80, r2l, r2y);
  rect( r3x, 90, r3l, r3y);
  rect( r4x, 100, r4l, r4y);
  rect( r5x, 110, r5l, r5y);




pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["r1x"] = map(percent, 0, 100, oldObj["r1x"], newObj["r1x"]);
  new_letter["r1y"] = map(percent, 0, 100, oldObj["r1y"], newObj["r1y"]);
  new_letter["r1l"] = map(percent, 0, 100, oldObj["r1l"], newObj["r1l"]);

  new_letter["r2x"] = map(percent, 0, 100, oldObj["r2x"], newObj["r2x"]);
  new_letter["r2y"] = map(percent, 0, 100, oldObj["r2y"], newObj["r2y"]);
  new_letter["r2l"] = map(percent, 0, 100, oldObj["r2l"], newObj["r2l"]);

  new_letter["r3x"] = map(percent, 0, 100, oldObj["r3x"], newObj["r3x"]);
  new_letter["r3y"] = map(percent, 0, 100, oldObj["r3y"], newObj["r3y"]);
  new_letter["r3l"] = map(percent, 0, 100, oldObj["r3l"], newObj["r3l"]);

  new_letter["r4x"] = map(percent, 0, 100, oldObj["r4x"], newObj["r4x"]);
  new_letter["r4y"] = map(percent, 0, 100, oldObj["r4y"], newObj["r4y"]);
  new_letter["r4l"] = map(percent, 0, 100, oldObj["r4l"], newObj["r4l"]);

  new_letter["r5x"] = map(percent, 0, 100, oldObj["r5x"], newObj["r5x"]);
  new_letter["r5y"] = map(percent, 0, 100, oldObj["r5y"], newObj["r5y"]);
  new_letter["r5l"] = map(percent, 0, 100, oldObj["r5l"], newObj["r5l"]);
  return new_letter;
}

var swapWords = [
  "LINSFONT",
  "THE MARS",
  "ASTEROID"
]
