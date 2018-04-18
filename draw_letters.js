const colorFront  = "#4b4b4b";
const colorStroke = "#999999";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  fill(75);
  stroke(colorStroke);

  //Setup the parameters
  let outer_arcStart = letterData["arcStart1"];
  let outer_arcEnd = letterData["arcEnd1"];
  let inner_arcStart = letterData["arcStart2"];
  let inner_arcEnd = letterData["arcEnd2"];
  let lineX1 = letterData["lineX1"];
  let lineX2 = letterData["lineX2"];
  let lineY1 = letterData["lineY1"];
  let lineY2 = letterData["lineY2"];

  //Setup drawing stuff
  fill(255, 40);
  stroke(220);
  angleMode(DEGREES);

  push();
    scale(0.5); //Scale and translate to fit in 'alphabet display'
    translate(50, 70);
      strokeWeight(12); //Draw outer arc
      arc(50, 100, 200, 200, outer_arcStart, outer_arcEnd);
      strokeWeight(8);  //Draw inner arc
      arc(50, 100, 150, 150, inner_arcStart, inner_arcEnd);
      strokeWeight(7);  //Draw inner line
      line(lineX1, lineY1, lineX2, lineY2);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  
  let new_letter = {};
  new_letter["arcStart1"] = map(percent, 0, 95, oldObj["arcStart1"], newObj["arcStart1"]);
  new_letter["arcEnd1"] = map(percent, 0, 95, oldObj["arcEnd1"], newObj["arcEnd1"]);
  new_letter["arcStart2"] = map(percent, 0, 95, oldObj["arcStart2"], newObj["arcStart2"]);
  new_letter["arcEnd2"] = map(percent, 0, 95, oldObj["arcEnd2"], newObj["arcEnd2"]);
  new_letter["lineX1"] = map(percent, 0, 100, oldObj["lineX1"], newObj["lineX1"]);
  new_letter["lineX2"] = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
  new_letter["lineY1"] = map(percent, 0, 100, oldObj["lineY1"], newObj["lineY1"]);
  new_letter["lineY2"] = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);
  return new_letter;
}

var swapWords = [
  "ARCLINES",
  "DISASTER",
  "ABSTRACT",
  "BIRTHDAY",
  "LAUGHTER"
]