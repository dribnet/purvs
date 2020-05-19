const colorFront1  = "#6dc9c9"; //tiffany blue
const colorFront2  = "#ffb2b2"; //coral pink
const colorFront3  = "#ffd0b5"; //salmon pink

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  noStroke();

  //Arc size setup
  let arcWid = letterData ["arcW"];
  let arcHei = letterData ["arcH"];

  //letter parameters
  //arc 1
  let arcX = letterData ["arcX"];
  let arcY = letterData ["arcY"];
  let arcS = letterData ["arcS"];
  let arcE = letterData ["arcE"];

  //arc 2
  let arcX2 = letterData ["arcX2"];
  let arcY2 = letterData ["arcY2"];
  let arcS2 = letterData ["arcS2"];
  let arcE2 = letterData ["arcE2"];

  //arc 3
  let arcX3 = letterData ["arcX3"];
  let arcY3 = letterData ["arcY3"];
  let arcS3 = letterData ["arcS3"];
  let arcE3 = letterData ["arcE3"];

  //arc 1
  fill(colorFront1);
  arc(arcX, arcY, arcWid, arcHei, arcS, arcE);

  //arc 2
  fill(colorFront2);
  arc(arcX2, arcY2, arcWid, arcHei, arcS2, arcE2);

  //arc 3
  fill(colorFront3);
  arc(arcX3, arcY3, arcWid, arcHei, arcS3, arcE3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcW"] = map(percent, 0, 100, oldObj["arcW"], newObj["arcW"]);
  new_letter["arcH"] = map(percent, 0, 100, oldObj["arcH"], newObj["arcH"]);
  new_letter["arcX"] = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  new_letter["arcS"] = map(percent, 0, 100, oldObj["arcS"], newObj["arcS"]);
  new_letter["arcE"] = map(percent, 0, 100, oldObj["arcE"], newObj["arcE"]);
  new_letter["arcX2"] = map(percent, 0, 100, oldObj["arcX2"], newObj["arcX2"]);
  new_letter["arcY2"] = map(percent, 0, 100, oldObj["arcY2"], newObj["arcY2"]);
  new_letter["arcS2"] = map(percent, 0, 100, oldObj["arcS2"], newObj["arcS2"]);
  new_letter["arcE2"] = map(percent, 0, 100, oldObj["arcE2"], newObj["arcE2"]);
  new_letter["arcX3"] = map(percent, 0, 100, oldObj["arcX3"], newObj["arcX3"]);
  new_letter["arcY3"] = map(percent, 0, 100, oldObj["arcY3"], newObj["arcY3"]);
  new_letter["arcS3"] = map(percent, 0, 100, oldObj["arcS3"], newObj["arcS3"]);
  new_letter["arcE3"] = map(percent, 0, 100, oldObj["arcE3"], newObj["arcE3"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
