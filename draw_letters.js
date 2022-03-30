/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  push();
  let posx= 0;
  let posy= 0;
  // determine parameters for second circle

  let pos1x = posx + letterData["offsetx"];
  let pos1y = posy + letterData["offsety"];
  let pos2x = posx + letterData["offsetx2"];
  let pos2y = posy + letterData["offsety2"];
  let waveL1 = letterData["waveL1"];
  let waveL2 = letterData["waveL2"];
  let rotate1 = letterData["rotate1"];
  let rotate2 = letterData["rotate2"];
  let peaks1 = letterData["peaks1"];
  let peaks2 = letterData["peaks2"];
  let peaks1H = letterData["peak1H"];
  let peaks2H = letterData["peak2H"];

  //rect(posx, posy, 150, 250); //bounding box?
  pop();
  fill(lightBlue);
  strokeWeight(15);
  strokeCap(SQUARE);
  stroke(0);
  push();
  translate(pos1x, pos1y);
  angleMode(DEGREES);
  rotate(rotate1);
  angleMode(RADIANS);
  noFill();
  beginShape();
  for (let i = 0; i < 100; i++) { //sets length

    const x = i * waveL1; //also sets length
    const y = sin(i * radians(peaks1)) * peaks1H; //height of curve
    vertex(x, y);
  }
  endShape();
  pop();

  push();
  translate(pos2x, pos2y);
  angleMode(DEGREES);
  rotate(rotate2);
  angleMode(RADIANS);
  noFill();
  beginShape();
  for (let i = 0; i < 100; i++) { //2 pixel spacing on the x - axis.

    const x = i * waveL2; //200 pixel high waveform on the y - axis.
    const y = -sin(i * radians(peaks2)) * peaks2H; //radians sets how many peaks
    vertex(x, y);
  }
  endShape();
  pop();


}
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
