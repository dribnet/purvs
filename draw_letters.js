const colorFront1  = "#ffffff";
const colorFront2  = "#000000";
const colorStroke  = "#233f11";

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
  let pLH1 = letterData["lpH1"];
  let pLH2 = letterData["lpH2"];
  let pLH3 = letterData["lpH3"];
  let lilR = letterData["mid"];

  // draw two circles
  fill(colorFront1);
  rect(50, 150, 100, 100);
  fill(colorFront2);
  rect(50,150,lilR,lilR);
  for(let i = 0; i< 110; i+= 10){
    line(pLH1,pLH2,i,pLH3);
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