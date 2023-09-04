const colorFront1  = "#B10D4C";
const colorStroke  = "#ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let cPosx1 = 50 + letterData["cx1"];
  let cPosy1 = 100 + letterData["cy1"];
  let cPosx2 = 50 + letterData["cx2"];
  let cPosy2 = 100 + letterData["cy2"];

  let pos1x = 50 + letterData["x1"];
  let pos1y = 100 + letterData["y1"];
  let pos2x = 50 + letterData["x2"];
  let pos2y = 100 + letterData["y2"];

 
  fill(colorFront1)

  //Draw the bounding square with rounded corners 
  strokeWeight(0)
  rect(0,0, 100, 200, 10 )

  //Draw the line and two circles 
  strokeWeight(20)
  line(pos1x, pos1y, pos2x, pos2y)
  //Not really a circle more of a point with an outline
  ellipse(cPosx1, cPosy1, 0, 0)
  ellipse(cPosx2, cPosy2, 0, 0)
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  strokeWeight(1)
  new_letter["cx1"]    = map(percent, 0, 100, oldObj["cx1"], newObj["cx1"]);  
  new_letter["cy1"] = map(percent, 0, 100, oldObj["cy1"], newObj["cy1"]);
  new_letter["cx2"] = map(percent, 0, 100, oldObj["cx2"], newObj["cx2"]);
  new_letter["cy2"] = map(percent, 0, 100, oldObj["cy2"], newObj["cy2"]);

  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  return new_letter;
}

var swapWords = [
  "HUBBABUB",
  "LOLLYPOP",
  "CANDIES!",
  "SKITTLES",
  "PARTYMIX",
  "12345678"
]