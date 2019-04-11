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

  var swapWords = [
    "ABBAABBA",
    "CAB?CAB?",
    "BAAAAAAA"
  ]
}
