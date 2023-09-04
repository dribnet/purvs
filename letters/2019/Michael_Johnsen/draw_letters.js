const colorFront1  = "#C1272D";
const colorFront2  = "#F2F2F2";
const colorStroke  = "#233f11";
const colorFront3  = "#cfe8e7";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let topbar = letterData["top"];
  let midbar = 50 + letterData["mid"];
  let botbar = letterData["bot"];
  // draw two circles
  strokeWeight(5);
  fill(colorFront1);
  ellipse(50, 100, 100, 100);
  noFill();
  line(0, 3, 0, 165);
  line(100, 3, 100, 165);
  arc(50.5, 165, 100, 64, TWO_PI, PI);
  line(0, 30, 100, 30);
  line(0, 3, 100, 3);


  strokeWeight(0);
  
  fill(colorFront3);

  rect(midbar, 1, 25, 198)
  fill(colorFront3);
  rect(-3, 1, 108, topbar);
  rect(-3, ((200)-botbar), 108, botbar);



  strokeWeight(6);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["top"]    = map(percent, 0, 100, oldObj["top"], newObj["top"]);
  new_letter["mid"] = map(percent, 0, 100, oldObj["mid"], newObj["mid"]);
  new_letter["bot"] = map(percent, 0, 100, oldObj["bot"], newObj["bot"]);
  return new_letter;
}

var swapWords = [
  "SECLUDED",
  "ACTUALLY",
  "PROPERTY"
]