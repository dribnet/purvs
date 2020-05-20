const colorFront1  = "#01a99a"; // turquoise
const colorFront2  = "#eef0bf"; //yellow
const colorFront3  = "#ed1b24"; //red

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

  //Arc width and height map setup
  new_letter["arcW"] = map(percent, 0, 100, oldObj["arcW"], newObj["arcW"]);
  new_letter["arcH"] = map(percent, 0, 100, oldObj["arcH"], newObj["arcH"]);

  //Arc 1
  new_letter["arcX"] = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);

  if (percent < 85) {
    new_letter["arcS"] = oldObj["arcS"];
    new_letter["arcE"] = oldObj["arcE"];
  }

  else {
    new_letter["arcS"] = map(percent, 0, 100, oldObj["arcS"], newObj["arcS"]);
    new_letter["arcE"] = map(percent, 0, 100, oldObj["arcE"], newObj["arcE"]);
  }

  //Arc 2
  new_letter["arcX2"] = map(percent, 0, 100, oldObj["arcX2"], newObj["arcX2"]);
  new_letter["arcY2"] = map(percent, 0, 100, oldObj["arcY2"], newObj["arcY2"]);

  if (percent < 85) {
    new_letter["arcS2"] = oldObj["arcS2"];
    new_letter["arcE2"] = oldObj["arcE2"];
  }

  else {
    new_letter["arcS2"] = map(percent, 0, 100, oldObj["arcS2"], newObj["arcS2"]);
    new_letter["arcE2"] = map(percent, 0, 100, oldObj["arcE2"], newObj["arcE2"]);
  }

  //Arc 3
  new_letter["arcX3"] = map(percent, 0, 100, oldObj["arcX3"], newObj["arcX3"]);
  new_letter["arcY3"] = map(percent, 0, 100, oldObj["arcY3"], newObj["arcY3"]);

  if (percent < 85) {
    new_letter["arcS3"] = oldObj["arcS3"];
    new_letter["arcE3"] = oldObj["arcE3"];
  }

  else {
    new_letter["arcS3"] = map(percent, 0, 100, oldObj["arcS3"], newObj["arcS3"]);
    new_letter["arcE3"] = map(percent, 0, 100, oldObj["arcE3"], newObj["arcE3"]);
  }

  return new_letter;

}

var swapWords = [
  "FUTURAMA",
  "ROBOTICS",
  "MECHANIC",
  "ODYSSEYS",
  "EXPLORER",
]
