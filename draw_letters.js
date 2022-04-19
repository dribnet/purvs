/* these are optional special variables which will change the system */
var systemBackgroundColor = "#161513";
var systemLineColor = "#5a5137";
var systemBoxColor = "#8FAF6F";

/* internal constants */
const darkBlue  = "#e1ddd3";
const lightBlue  = "#161513";
const strokeColor  = "#e1ddd3";
const roundCorner = 100;


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  push();
  fill(strokeColor);
  noStroke();
  letterform(letterData["size"],letterData["angle"],letterData["reflected"],
             letterData["round"],letterData["inverted"],
             letterData["offsetX1"],letterData["offsetY1"],
             letterData["offsetX2"],letterData["offsetY2"],
             letterData["rX"],letterData["rY"],
             letterData["rW"],letterData["rH"]);
  pop();
}

function letterform(
  size,
  angle,
  reflected,
  round,
  inverted,
  offsetX1,
  offsetY1,
  offsetX2,
  offsetY2,
  rX,
  rY,
  rW,
  rH
) {
  push();
  rect(rX,rY,rW,rH);
  scale(size);
  rotate(radians(angle));
  if (reflected>0) {
    if (round>0) {
      if (inverted>0) {
        makeRight(1, offsetY1, offsetX1, 90);
        makeLeft(-1, offsetY2, offsetX2, -90);
      } else {
        makeRight(1, offsetY1, offsetX1, 90);
        makeLeft(1, offsetY2, offsetX2, -90);
      }
    } else {
      if (inverted>0) {
        makeRight(-1, offsetY1, offsetX1, 90);
        makeLeft(-1, offsetY2, offsetX2, -90);
      } else {
        makeLeft(-1, offsetY1, offsetX1, 90);
        makeLeft(-1, offsetY2, offsetX2, -90);
      }
    }
  } else {
    if (round>0) {
    if (inverted>0) {
    makeRight(-1, offsetX1, offsetY1, 90);
    makeRight(-1, offsetX2, offsetY2, -90);
    } else {
    
    makeLeft(-1, offsetX1, offsetY1, 90);
    makeLeft(-1, offsetX2, offsetY2, 90); 
    
    }
    } else {
    makeRight(-1, offsetX1, offsetY1, 90);
    makeRight(-1, offsetX2, offsetY2, 90);  
    }
  }
  pop();
  
}
function makeRight(round, offsetX, offsetY, angle) {
  let radius = 50;
  let offset = dist(radius, radius / 4, radius - radius / 4, radius / 4);
  push();
  rotate(radians(angle));
  beginShape();
  vertex(offsetX - radius, offsetY + 0);
  quadraticVertex(
    offsetX - radius,
    offsetY + offset,
    offsetX - radius + offset,
    offsetY + offset
  );
  vertex(offsetX + radius - offset, offsetY + offset);
  quadraticVertex(
    offsetX + radius,
    offsetY + offset,
    offsetX + radius,
    offsetY + 0
  );
  vertex(offsetX + radius, offsetY + 0);
  if (round > 0) {
    quadraticVertex(
      offsetX + radius,
      offsetY + radius,
      offsetX + 0,
      offsetY + radius
    );
    quadraticVertex(
      offsetX - radius,
      offsetY + radius,
      offsetX - radius,
      offsetY + 0
    );
  } else {
    vertex(offsetX + radius, offsetY + radius);
    vertex(offsetX + 0, offsetY + radius);
    quadraticVertex(
      offsetX - radius,
      offsetY + radius,
      offsetX - radius,
      offsetY + 0
    );
  }
  endShape(CLOSE);
  pop();
}
function makeLeft(round, offsetX, offsetY, angle) {
  let radius = 50;
  let offset = dist(radius, radius / 4, radius - radius / 4, radius / 4);
  push();
  rotate(radians(angle));
  beginShape();
  vertex(offsetX - radius, offsetY + 0);
  quadraticVertex(
    offsetX - radius,
    offsetY + offset,
    offsetX - radius + offset,
    offsetY + offset
  );
  vertex(offsetX + radius - offset, offsetY + offset);
  quadraticVertex(
    offsetX + radius,
    offsetY + offset,
    offsetX + radius,
    offsetY + 0
  );
  vertex(offsetX + radius, offsetY + 0);
  quadraticVertex(
    offsetX + radius,
    offsetY + radius,
    offsetX + 0,
    offsetY + radius
  );
  if (round > 0) {
    quadraticVertex(
      offsetX - radius,
      offsetY + radius,
      offsetX - radius,
      offsetY + 0
    );
  } else {
    vertex(offsetX - radius, offsetY + radius);
  }
  endShape(CLOSE);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["angle"]    = map(percent, 0, 100, oldObj["angle"], newObj["angle"]);
  new_letter["reflected"] = map(percent, 0, 100, oldObj["reflected"], newObj["reflected"]);
  new_letter["round"] = map(percent, 0, 100, oldObj["round"], newObj["round"]);
  new_letter["inverted"]    = map(percent, 0, 100, oldObj["inverted"], newObj["inverted"]);
  new_letter["offsetX1"] = map(percent, 0, 100, oldObj["offsetX1"], newObj["offsetX1"]);
  new_letter["offsetY1"] = map(percent, 0, 100, oldObj["circleY"], newObj["circleY"]);
  new_letter["offsetX2"]    = map(percent, 0, 100, oldObj["offsetX2"], newObj["offsetX2"]);
  new_letter["offsetY2"] = map(percent, 0, 100, oldObj["offsetY2"], newObj["offsetY2"]);
  new_letter["rX"] = map(percent, 0, 100, oldObj["rX"], newObj["rX"]);
  new_letter["rY"] = map(percent, 0, 100, oldObj["rY"], newObj["rY"]);
  new_letter["rW"] = map(percent, 0, 100, oldObj["rW"], newObj["rW"]);
  new_letter["rH"] = map(percent, 0, 100, oldObj["rH"], newObj["rH"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]