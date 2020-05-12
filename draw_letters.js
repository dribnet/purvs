const colorFront1  = "#ffffff";
const colorFront2  = "#000000";
const colorStroke  = "#000000";

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
  strokeWeight(1);
  push();
  rectMode(CENTER);

  // determine parameters for second circle
  let a = letterData["space"];
  let pLV1 = letterData["lpV1"];
  let pLV2 = letterData["lpV2"];
  let pLV3 = letterData["lpV3"];
  let pLH1 = letterData["lpH1"];
  let pLH2 = letterData["lpH2"];
  let pLH3 = letterData["lpH3"];
  let pLH1st = letterData["lpH1st"];
  let pLH2st = letterData["lpH2st"];
  let pLV1st = letterData["lpV1st"];
  let pLV2st = letterData["lpV2st"];
  let lilR = letterData["mid"];

  // draw two circles
  fill(colorFront1);
  rect(50, 150, 100, 100);
  fill(colorFront2);
  rect(50,150,lilR,lilR);
  for(let i = 0; i< 105; i+= a){
    line(pLV1,pLV2,i,pLV3);
    line(i,pLV1st,i,pLV2st);

  }
  for(let i = 100;i< 205; i += a){
line(pLH1,pLH2,pLH3,i);
  line(pLH1st,i,pLH2st,i);
}
  
  //ellipse(pos2x, pos2y, size2, size2);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["space"] = map(percent, 0, 100, oldObj["space"], newObj["space"]);
  new_letter["lpV1"] = map(percent, 0, 100, oldObj["lpV1"], newObj["lpV1"]);
  new_letter["lpV2"] = map(percent, 0, 100, oldObj["lpV2"], newObj["lpV2"]);
  new_letter["lpV3"] = map(percent, 0, 100, oldObj["lpV3"], newObj["lpV3"]);
  new_letter["lpH1"] = map(percent, 0, 100, oldObj["lpH1"], newObj["lpH1"]);
  new_letter["lpH2"] = map(percent, 0, 100, oldObj["lpH2"], newObj["lpH2"]);
  new_letter["lpH3"] = map(percent, 0, 100, oldObj["lpH3"], newObj["lpH3"]);
  new_letter["lpH1st"] = map(percent, 0, 100, oldObj["lpH1st"], newObj["lpH1st"]);
  new_letter["lpH2st"] = map(percent, 0, 100, oldObj["lpH2st"], newObj["lpH2st"]);
  new_letter["lpV1st"] = map(percent, 0, 100, oldObj["lpV1st"], newObj["lpV1st"]);
  new_letter["lpV2st"] = map(percent, 0, 100, oldObj["lpV2st"], newObj["lpV2st"]);
  new_letter["mid"] = map(percent, 0, 100, oldObj["mid"], newObj["mid"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]