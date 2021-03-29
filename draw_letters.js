/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#ffffff";
var systemBoxColor = "#00c800";

/* internal constants */
const strokeColor  = "#ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  let posx = 50;
  let posy = 150;
  let radius = 50;

  // draw points around the circle
  for (let i = 0; i < 8; i++) {
    for (let j = 1; j <= 5; j++) {
      if (letterData["point"+j] == i) {
        strokeWeight(8);
      } else {
        strokeWeight(random(1, 4));
      }
      point(radius * cos(i * PI/4) + posx, radius * sin(i * PI/4) + posy);
    }
  }

  strokeWeight(2);
  for (let i = 1; i <= 5; i++) {
    let lineStartX = radius * cos(letterData["point"+i] * PI/4) + posx;
    let lineStartY = radius * sin(letterData["point"+i] * PI/4) + posy;
    let lineEndX, lineEndY;
    if (i == 5) {
      lineEndX = lineStartX;
      lineEndY = lineStartY;
    } else {
      lineEndX = radius * cos(letterData["point"+(i+1)] * PI/4) + posx;
      lineEndY = radius * sin(letterData["point"+(i+1)] * PI/4) + posy;
    }
    line(lineStartX, lineStartY, lineEndX, lineEndY);
  }
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
