/* these are optional special variables which will change the system */
var systemBackgroundColor = "#eee3d1";
var systemLineColor = "#5f5e66";
var systemBoxColor = "#9CC9E8";

/* internal constants */
const colWings = "#df8d9e";
const colRect = "#718e00";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  push();
  let modSize = 1; 
  // only added to experiment w/ size of letters w/o having to go thru entire letters
    noStroke();
    rectShape(
      letterData["rX"]/modSize,letterData["rY"]/modSize,
      letterData["rW"]/modSize,letterData["rH"]/modSize);
    customShape(
      letterData["size"]/modSize,             // what is the size (radius) of shape?
      letterData["orientation1"],     // is the first half on the left or right?
      letterData["orientation2"],     // is the other half on the left or right?
      letterData["edge1"]/modSize,            // is this half rounded or not?
      letterData["edge2"]/modSize,            // is the other half rounded or not?
      letterData["angle"],            // what is the rotational angle of shape?
      letterData["offsetX1"]/modSize,         // where is the shape positioned?
      letterData["offsetY1"]/modSize,
      letterData["offsetX2"]/modSize,
      letterData["offsetY2"]/modSize);
  pop();
}
function rectShape(rX,rY,rW,rH){
  push();
    fill(colRect);
    rect(rX, rY, rW, rH);
  pop();
}
function customShape(
  radius,
  orient1,
  orient2,
  edge1,
  edge2,
  angle,
  offsetX1,
  offsetY1,
  offsetX2,
  offsetY2
  ) {
  push();
    smooth();
    fill(colWings);
    angleMode(DEGREES);
    rotate(angle);
    beginShape();                        /* anatomy of custom shape */
    halfShape(radius, offsetX1, offsetY1, orient1, edge1);
    halfShape(radius, offsetX2, offsetY2, orient2, edge2);
    endShape(CLOSE);
  pop();
  }                                      /* anatomy of half the custom shape */
function halfShape(radius, offsetX, offsetY, orientation, edge) {
  let roundCutStart  = radius;           // edge of shape, start of rounded edge 
  let roundCutEnd    = radius / 5;       // end point of rounded edge
  let roundCutCorner = roundCutStart - roundCutEnd; // perfectly rounded edge 
  let cutout = dist(roundCutStart, roundCutEnd, roundCutCorner, roundCutEnd);
                                         // calculate control point rounded edge
                                         /* start of cutout */
  vertex(offsetX - radius, offsetY + 0); // start edge of shape, base of shape
  quadraticVertex(                       // make cutout, rounded edge
    offsetX - radius,
    offsetY - cutout * orientation,     
    offsetX - radius + cutout,
    offsetY - cutout * orientation
  );
                                         //  make a line until other rounded edge of cutout
  vertex(offsetX + radius - cutout, offsetY - cutout * orientation); 
  quadraticVertex(                       // other rounded edge of cutout
    offsetX + radius,
    offsetY - cutout * orientation,
    offsetX + radius,
    offsetY - 0
  );
  vertex(offsetX + radius, offsetY - cutout * orientation); 
                                          /* end of cutout */
                                          /* start of body */        
  quadraticVertex(                        // make shape rounded on one half
    offsetX + radius,
    offsetY - radius * orientation,
    offsetX + 0,
    offsetY - radius * orientation
  );
                                          // other half of shape rounded or not 
  vertex(offsetX - edge, offsetY - radius * orientation); 
  quadraticVertex(
    offsetX - radius,
    offsetY - radius * orientation,
    offsetX - radius,
    offsetY + 0
  );
                                          /* end of body */
  // orientation controlled by letter data (right = 1), (left = -1)
  // edge controlled by letter data (rounded = 0), (not = radius)
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let targetOrient = newObj["orientation1"];             // wing 1 flap in between
  let targetEdge = newObj["size"]/2;                     // cornered in between
  smooth();

  new_letter["rX"] = map(percent, 0, 100, oldObj["rX"], newObj["rX"]);
  new_letter["rY"] = map(percent, 0, 100, oldObj["rY"], newObj["rY"]);
  new_letter["rW"] = map(percent, 0, 100, oldObj["rW"], newObj["rW"]);
  new_letter["rH"] = map(percent, 0, 100, oldObj["rH"], newObj["rH"]);
  
   if (percent < 50) {                                    // make shape cornered at 50%
    new_letter["edge1"] = map(percent, 0, 50, oldObj["edge1"], targetEdge); 
    new_letter["edge2"] = map(percent, 0, 50, oldObj["edge2"], targetEdge); 
                                                          // wing 1 flap at 50%
    new_letter["orientation1"] = map(percent,0,50,oldObj["orientation1"],targetOrient);
    new_letter["orientation2"] = map(percent,0,50,oldObj["orientation2"],targetOrient);
                                                          // adds resistance
    new_letter["offsetX1"] = map(percent,0,110,oldObj["offsetX1"],newObj["offsetX1"]);
    new_letter["offsetY1"] = map(percent,0,110,oldObj["offsetY1"],newObj["offsetY1"]);
    new_letter["offsetX2"] = map(percent,0,110,oldObj["offsetX2"],newObj["offsetX2"]);
    new_letter["offsetY2"] = map(percent,0,110,oldObj["offsetY2"],newObj["offsetY2"]);
  } else {
    new_letter["edge1"] = map(percent, 51, 100, targetEdge, newObj["edge1"]); 
    new_letter["edge2"] = map(percent, 51, 100, targetEdge, newObj["edge2"]);
    new_letter["orientation1"] = map(percent,51,100,targetOrient,newObj["orientation1"]);
    new_letter["orientation2"] = map(percent,51,100,targetOrient,newObj["orientation2"]);
    new_letter["offsetX1"] = map(percent,0,100,oldObj["offsetX1"],newObj["offsetX1"]);
    new_letter["offsetY1"] = map(percent,0,100,oldObj["offsetY1"],newObj["offsetY1"]);
    new_letter["offsetX2"] = map(percent,0,100,oldObj["offsetX2"],newObj["offsetX2"]);
    new_letter["offsetY2"] = map(percent,0,100,oldObj["offsetY2"],newObj["offsetY2"]);
  }

    new_letter["angle"] = map(percent, 0, 100, oldObj["angle"], newObj["angle"]);
    new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  return new_letter;
}

var swapWords = [
  "?MEADOW?","WWWWWWWW","MMMMMMMM","ZZZZZZZZ","XXXXXXXX","GENERATE",
  "?WINGED?","CREATURE","MARIPOSA","PAPILLON","?NECTAR?","INFINITE",
  "CUTTINGS","ILLUSION","DAYDREAM","ENVISION","BLOOMING","?GARDEN?",
  "FLOURISH","SCENARIO","BEDAZZLE","SWEETEST","CLUELESS","SPEAKING",
  "HOPELESS","ROMANTIC","?UNFOLD?","ROTATION","ENVELOPE","ACQUIRED",
  "SPINNING","AUTONOMY","FRAGMENT","EXERCISE","INJURIES",
  "NONSENSE","HEADLINE","01010101","23456789"
]