/* these are optional special variables which will change the system */
var systemBackgroundColor = "#eee3d1";
var systemLineColor = "#5f5e66";
var systemBoxColor = "#8FAF6F";

/* internal constants */
const lightPurple  = "#df8d9e";
const strokeColor  = "#718e00";
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
  noStroke();
  fill(strokeColor);
  customShape(letterData["size"],
             letterData["orientation1"],letterData["orientation2"],
             letterData["edge1"],letterData["edge2"],
             letterData["angle"],
             letterData["offsetX1"],letterData["offsetY1"],
             letterData["offsetX2"],letterData["offsetY2"],
             letterData["rX"],letterData["rY"],letterData["rW"],letterData["rH"]);
  pop();
}
function customShape (radius,orientation1,orientation2,edge1,edge2,angle,offsetX1,offsetY1,offsetX2,offsetY2,rX,rY,rW,rH){ 
  // orient/rPos right = 1, left = -1
  let offset = dist(radius, radius / 5, radius - radius / 5, radius / 5);
  rect(rX,rY,rW,rH);
  push();
  angleMode(DEGREES);
  fill(lightPurple);
  rotate(angle);
  beginShape();
  halfShape(offset,radius,offsetX1,offsetY1,orientation1,edge1);
  halfShape(offset,radius,offsetX2,offsetY2,orientation2,edge2);
  endShape(CLOSE);
  pop();
  
}
function halfShape(offset,radius,offsetX,offsetY,orientation,edge){
  vertex(offsetX - radius, offsetY + 0);
  quadraticVertex(
    offsetX - radius,
    offsetY - offset * orientation,
    offsetX - radius + offset,
    offsetY - offset * orientation
  );
  vertex(offsetX + radius - offset, offsetY - offset * orientation);
  quadraticVertex(
    offsetX + radius,
    offsetY - offset * orientation,
    offsetX + radius,
    offsetY - 0
  );
  vertex(offsetX + radius, offsetY - offset * orientation);
  quadraticVertex(
      offsetX + radius,
      offsetY - radius * orientation,
      offsetX + 0,
      offsetY - radius * orientation
    );
    vertex(offsetX - edge,offsetY - radius * orientation);
    quadraticVertex(
      offsetX - radius,
      offsetY - radius * orientation,
      offsetX - radius,
      offsetY + 0
    ); 
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  
  let targetWidth = 200;
  let targetHeight = 200;
  let targetX = 0;
  let targetY = 50;
  let size = 100;
  let targetOrient = 1;
  let targetEdge = 0;
  let defaultChar= getObjFromChar("C");

  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["orientation1"]    = map(percent, 0, 100, oldObj["orientation1"], newObj["orientation1"]);
  new_letter["orientation2"] = map(percent, 0, 100, oldObj["orientation2"], newObj["orientation2"]);
  new_letter["edge1"] = map(percent, 0, 100, oldObj["edge1"], newObj["edge1"]);
  new_letter["edge2"]    = map(percent, 0, 100, oldObj["edge2"], newObj["edge2"]);
  new_letter["angle"]    = map(percent, 0, 100, oldObj["angle"], newObj["angle"]);
  new_letter["offsetX1"] = map(percent, 0, 100, oldObj["offsetX1"], newObj["offsetX1"]);
  new_letter["offsetY1"] = map(percent, 0, 100, oldObj["offsetY1"], newObj["offsetY1"]);
  new_letter["offsetX2"]    = map(percent, 0, 100, oldObj["offsetX2"], newObj["offsetX2"]);
  new_letter["offsetY2"] = map(percent, 0, 100, oldObj["offsetY2"], newObj["offsetY2"]);
  new_letter["rX"] = map(percent, 0, 100, oldObj["rX"], newObj["rX"]);
  new_letter["rY"] = map(percent, 0, 100, oldObj["rY"], newObj["rY"]);
  new_letter["rW"] = map(percent, 0, 100, oldObj["rW"], newObj["rW"]);
  new_letter["rH"] = map(percent, 0, 100, oldObj["rH"], newObj["rH"]);

   if(percent < 50){
    new_letter["edge1"] = map(percent, 0, 50, oldObj["edge1"], targetEdge);
    new_letter["edge2"]    = map(percent, 0, 50, oldObj["edge2"], targetEdge);
   } else {
    new_letter["edge1"] = map(percent, 51, 100, targetEdge, newObj["edge1"]);
    new_letter["edge2"]    = map(percent, 51, 100, targetEdge, newObj["edge2"]);
   }

     if(percent < 50){
  new_letter["orientation1"]    = map(percent, 0, 50, oldObj["orientation1"], targetOrient);
  new_letter["orientation2"] = map(percent, 0, 50, oldObj["orientation2"], targetOrient);
   } else {
  new_letter["orientation1"]    = map(percent, 51, 100, targetOrient, newObj["orientation1"]);
  new_letter["orientation2"] = map(percent, 51, 100, targetOrient, newObj["orientation2"]);
   }
  
  return new_letter;
}

var swapWords = [
  "MARIPOSA","BEDAZZLE","FLICKERY","?LIGHTS?","?CAMERA?","?ACTION?","ROTATION",
  "FLIPPING","FLUTTERS","INJURIES","MAXIMISE","AUTONOMY","FRAGMENT",
  "ILLUSION","EXERCISE","GLAMOURS","DIVISION","IDENTIFY","ORGANISE",
  "DESIGNER","OFFICIAL","HEADLINE","CAMPAIGN","GRADUATE","BUSINESS",
  "FINANCES","AFFINITY","NONSENSE","MATERIAL","OBSIDIAN","DREAMERS",
  "FOLKLORE","MOUNTAIN","CREATURE","CEMETERY","FOOTBALL","SCENARIO"
]