//DARK ORANGE
const colorFront1  = "#e8600b";
//RED
const colorFront2  = "#f24324";
//WHITE
const colorFront3  = "#ffffff";
//LIGTH ORANGE
const colorStroke  = "#ffae00";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup

  //stroke(colorStroke);


  // determine parameters for second circle
  let pos2x = -10  + letterData["c1x"];
  let pos2y = -20 + letterData["c1y"];
  let widthx = letterData["lx"];
  let heighty = letterData["ly"];

  // draw two circles


  //straight line

strokeWeight(3);
stroke(colorFront2);
fill(colorFront2);
//ellipse(20, 30,15,10);

ellipse(50, 80,1,70);

stroke(colorFront1);
ellipse(60, 80,1,90);

stroke(colorStroke);

ellipse(70, 80,1,110);

stroke(colorFront3);

fill(colorStroke);
strokeWeight(3);
noFill();
  //ellipse(20, 30,15,15);

  //letter ellipses
  ellipse(letterData["c2x"], letterData["c2y"],letterData["size", "size"]);


  ellipse(letterData["c1x"], letterData["c1y"], letterData["size", "size"]);
  ellipse(letterData["c3x"], letterData["c3y"],2,2);

//first long ellipse
  //noStroke();
// fill(colorFront2);



//fill(colorFront2);
line(widthx,heighty,letterData["lw1"],letterData["lh1"]);
line(letterData["lx2"],letterData["ly2"],letterData["lw2"],letterData["lh2"]);
line(letterData["lx3"],letterData["ly3"],letterData["lx3_1"],letterData["ly3_1"]);
line(letterData["lx4"],letterData["ly4"],letterData["lx4_1"],letterData["ly4_1"]);



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["lw1"]    = map(percent, 0, 100, oldObj["lw1"], newObj["lw1"]);
  new_letter["lw2"]    = map(percent, 0, 100, oldObj["lw2"], newObj["lw2"]);
  new_letter["lh1"]    = map(percent, 0, 100, oldObj["lh1"], newObj["lh1"]);
  new_letter["lh2"]    = map(percent, 0, 100, oldObj["lh2"], newObj["lh2"]);
  new_letter["c1x"]    = map(percent, 0, 100, oldObj["c1x"], newObj["c1x"]);
  new_letter["c1y"]    = map(percent, 0, 100, oldObj["c1y"], newObj["c1y"]);
  new_letter["c2y"]    = map(percent, 0, 100, oldObj["c2y"], newObj["c2y"]);
  new_letter["c3x"]    = map(percent, 0, 100, oldObj["c3x"], newObj["c3x"]);
  new_letter["c2x"]    = map(percent, 0, 100, oldObj["c2x"], newObj["c2x"]);
  new_letter["c3y"]    = map(percent, 0, 100, oldObj["c3x"], newObj["c3x"]);
  new_letter["lx"]    = map(percent, 0, 100, oldObj["lx"], newObj["lx"]);
  new_letter["ly"]    = map(percent, 0, 100, oldObj["ly"], newObj["ly"]);
  new_letter["lx2"]    = map(percent, 0, 100, oldObj["lx2"], newObj["lx2"]);
  new_letter["ly2"]    = map(percent, 0, 100, oldObj["ly2"], newObj["ly2"]);
  new_letter["lx3"]    = map(percent, 0, 100, oldObj["lx3"], newObj["lx3"]);
  new_letter["ly3"]    = map(percent, 0, 100, oldObj["ly3"], newObj["ly3"]);
  new_letter["lx3_1"]    = map(percent, 0, 100, oldObj["lx3_1"], newObj["lx3_1"]);
  new_letter["ly3_1"]    = map(percent, 0, 100, oldObj["ly3_1"], newObj["ly3_1"]);
  new_letter["lx4"]    = map(percent, 0, 100, oldObj["lx4"], newObj["lx4"]);
  new_letter["ly4"]    = map(percent, 0, 100, oldObj["ly4"], newObj["ly4"]);
  new_letter["lx4_1"]    = map(percent, 0, 100, oldObj["lx4_1"], newObj["lx4_1"]);
  new_letter["ly4_1"]    = map(percent, 0, 100, oldObj["ly4_1"], newObj["ly4_1"]);

  return new_letter;
}

var swapWords = [
  "SUNSHINE",
  "LATEEFAH",
  "12345678"
]
