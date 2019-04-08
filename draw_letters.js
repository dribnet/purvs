const colorFront1  = (0);
const colorFront2  = (0);
const colorStroke  = (255);

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(100);
  strokeWeight(4);


  // determine parameters for second circle
  //let size2 = letterData["size"];

   let posx = 0;
  let posy = 0;
 let pos1x = posx+letterData["x"];
  let pos1y = posy+letterData["y"];
  let pos2x = posx+letterData["x1"];
  let pos2y = posy+letterData["y1"];
  let pos3x = posx+letterData["x2"];
  let pos3y = posy+letterData["y2"];
  let pos4x = posx+letterData["x3"];
  let pos4y = posy+letterData["y3"];
  let pos5x = posx+letterData["x4"];
  let pos5y = posy+letterData["y4"];
  let pos6x = posx+letterData["x5"];
  let pos6y = posy+letterData["y5"];
  let pos7x = posx+letterData["x6"];
  let pos7y = posy+letterData["y6"];
  let pos8x = posx+letterData["x7"];
  let pos8y = posy+letterData["y7"];
  let pos9x = posx+letterData["x8"];
  let pos9y = posy+letterData["y8"];
  let pos10x = posx+letterData["x9"];
  let pos10y = posy+letterData["y9"];

//debugging
  print(pos1x);

  // draw two circles
  // fill(colorFront1);
  // ellipse(50, 150, 75, 75);
  // fill(colorFront2);
  // ellipse(pos2x, pos2y, size2, size2);
  fill(255, 0, 0);
  //ellipse(100, 100, 50, 50);
   stroke(255);
  strokeWeight(1);
  //line(pos1x, pos1y, posx-50,posy+200);
  //fill(255, 15, 239, 50);
  //noStroke();
  noFill();
  // push();
  //translate(width/2, height/2);

  line(pos1x, pos1y, pos2x, pos2y);
  line(pos2x, pos2y, pos3x, pos3y);
  line(pos1x, pos1y, pos4x, pos4y);
  line(pos4x, pos4y, pos5x, pos5y);
  line(pos5x, pos5y, pos6x, pos6y);
  line(pos2x, pos2y, pos7x, pos7y);
  line(pos7x, pos7y, pos5x, pos5y);
  line(pos2x, pos2y, pos8x, pos8y);
  line(pos8x, pos8y, pos3x, pos3y);

  fill(colorStroke);
  ellipse(pos1x, pos1y, 4, 4);
  ellipse(pos2x, pos2y, 4, 4);
  ellipse(pos3x, pos3y, 4, 4);
  ellipse(pos4x, pos4y, 4, 4);
  ellipse(pos5x, pos5y, 4, 4);
  ellipse(pos6x, pos6y, 4, 4);

//   fill (250,250,0,90);
// noStroke();
// triangle(pos1x, pos1y, pos2x, pos2y, pos4x, pos4y);
// fill (250,0,0,90);
// triangle(pos3x, pos3y, pos1x, pos1y, pos2x, pos2y);
// fill (250,0,100,90);
//  triangle(pos2x, pos2y, pos8x, pos8y, pos3x, pos3y);







  // pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["x"] = map(percent, 0, 100, oldObj["x"], newObj["x"]);
  new_letter["y"] = map(percent, 0, 100, oldObj["y"], newObj["y"]);
    new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
    new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
    new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
    new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
    new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
    new_letter["x6"] = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
  new_letter["y6"] = map(percent, 0, 100, oldObj["y6"], newObj["y6"]);
  new_letter["x7"] = map(percent, 0, 100, oldObj["x7"], newObj["x7"]);
  new_letter["y7"] = map(percent, 0, 100, oldObj["y7"], newObj["y7"]);
new_letter["x8"] = map(percent, 0, 100, oldObj["x8"], newObj["x8"]);
  new_letter["y8"] = map(percent, 0, 100, oldObj["y8"], newObj["y8"]);
  new_letter["x9"] = map(percent, 0, 100, oldObj["x9"], newObj["x9"]);
  new_letter["y9"] = map(percent, 0, 100, oldObj["y9"], newObj["y9"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
