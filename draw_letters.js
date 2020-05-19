//const colorFront1  = "#6dc9c9"; //tiffany blue
//const colorFront2  = "#ffb2b2"; //coral pink
//const colorFront3  = "#ffd0b5"; //salmon pink

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

  //Colour setup
  let tiffanyblue = color("#6dc9c9");
  tiffanyblue.setAlpha(200);
  let coralpink = color("#ffb2b2");
  coralpink.setAlpha(200);
  let salmonpink = color("#ffd0b5");
  salmonpink.setAlpha(200);

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

  let arcWid = letterData ["arcW"];
  let arcHei = letterData ["arcH"];

  //arc 1
  fill(tiffanyblue);
  arc(arcX, arcY, arcWid, arcHei, arcS, arcE);

  //arc 2
  fill(coralpink);
  arc(arcX2, arcY2, arcWid, arcHei, arcS2, arcE2);

  //arc 3
  fill(salmonpink);
  arc(arcX3, arcY3, arcWid, arcHei, arcS3, arcE3);
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
