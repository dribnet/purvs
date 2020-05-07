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
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
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