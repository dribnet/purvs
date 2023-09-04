const StrokeCol  = "#ffffff"; //white

function drawLetter(letterData) {

  // draw a static triangle
  noStroke();
  fill(99, 142, 75, 100); //green
  triangle(50, 60, 88, 120, 12, 120);

  // color/stroke setup
  stroke(StrokeCol);
  strokeCap(ROUND);

  angleMode(DEGREES);

  // determine parameters for the line
  let lineX1 = 50 + letterData["lineX1"];
  let lineY1 = 100 + letterData["lineY1"];
  let lineX2 = 50 + letterData["lineX2"];
  let lineY2 = 100 + letterData["lineY2"];
 
  // determine parameters for the arc
  let arcX = 50 + letterData["arcX"];
  let arcY = 100 + letterData["arcY"];

  let arcStart = letterData["start"];
  let arcStop = letterData["stop"];

  // draw arc
  fill(109, 165, 180, 60); //blue tint green
  strokeWeight(5);
  arc(arcX, arcY, 90, 90, arcStart, arcStop);

  // draw line
  strokeWeight(9);
  line(lineX1, lineY1, lineX2, lineY2);  

}

function interpolate_letter(percent, oldObj, newObj) {

  let new_letter = {};
  new_letter["lineX1"] = map(percent, 0, 100, oldObj["lineX1"], newObj["lineX1"]);
  new_letter["lineY1"] = map(percent, 0, 100, oldObj["lineY1"], newObj["lineY1"]);

  new_letter["lineX2"] = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
  new_letter["lineY2"] = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);

  new_letter["arcX"] = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);

  new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["stop"] = map(percent, 0, 100, oldObj["stop"], newObj["stop"]);

  return new_letter;
}

var swapWords = [
  "MINTFONT",
  "STRAIGHT",
  "GREENERY",
  "RELAXING",
  "OVERLAPS",
  "TRIANGLE",
  "MINTYICE",
  "SEQUENCE"
]