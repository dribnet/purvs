const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES); 
  stroke("black");
  strokeWeight(1);
  fill(233,100,34)
  let w = 100;
  let h = 200;
  //just to position it nicely inside template 
  let posx = 5;
  let posy = 100;
  positionRect(posx,posy,letterData.p1offsetX,letterData.p1offsetY)
  positionRect(posx,posy,letterData.p2offsetX,letterData.p2offsetY)
  positionRect(posx,posy,letterData.p3offsetX,letterData.p3offsetY)
  positionRect(posx,posy,letterData.p4offsetX,letterData.p4offsetY)
  positionRect(posx,posy,letterData.p5offsetX,letterData.p5offsetY)
  positionRect(posx,posy,letterData.p6offsetX,letterData.p6offsetY)
  positionRect(posx,posy,letterData.p7offsetX,letterData.p7offsetY)
  positionRect(posx,posy,letterData.p8offsetX,letterData.p8offsetY)
}

/**
 * Function draws a rectangle at a given offset position
 */
function positionRect(startingX,startingY,offsetX,offsetY) {
  push();
  translate(offsetX,offsetY)
  rect(startingX,startingY,30,30);
  strokeWeight(0.2);
  fill(200,70,20)
  ellipse(startingX+15,startingY+15,10,10);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  // new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  // new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  // new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["p1offsetX"] = map(percent, 0, 100, oldObj["p1offsetX"], newObj["p1offsetX"]);
  new_letter["p1offsetY"] = map(percent, 0, 100, oldObj["p1offsetY"], newObj["p1offsetY"]);
  new_letter["p2offsetX"] = map(percent, 0, 100, oldObj["p2offsetX"], newObj["p2offsetX"]);
  new_letter["p2offsetY"] = map(percent, 0, 100, oldObj["p2offsetY"], newObj["p2offsetY"]);
  new_letter["p3offsetX"] = map(percent, 0, 100, oldObj["p3offsetX"], newObj["p3offsetX"]);
  new_letter["p3offsetY"] = map(percent, 0, 100, oldObj["p3offsetY"], newObj["p3offsetY"]);
  new_letter["p4offsetX"] = map(percent, 0, 100, oldObj["p4offsetX"], newObj["p4offsetX"]);
  new_letter["p4offsetY"] = map(percent, 0, 100, oldObj["p4offsetY"], newObj["p4offsetY"]);
  new_letter["p5offsetX"] = map(percent, 0, 100, oldObj["p5offsetX"], newObj["p5offsetX"]);
  new_letter["p5offsetY"] = map(percent, 0, 100, oldObj["p5offsetY"], newObj["p5offsetY"]);
  new_letter["p6offsetX"] = map(percent, 0, 100, oldObj["p6offsetX"], newObj["p6offsetX"]);
  new_letter["p6offsetY"] = map(percent, 0, 100, oldObj["p6offsetY"], newObj["p6offsetY"]);
  new_letter["p7offsetX"] = map(percent, 0, 100, oldObj["p7offsetX"], newObj["p7offsetX"]);
  new_letter["p7offsetY"] = map(percent, 0, 100, oldObj["p7offsetY"], newObj["p7offsetY"]);
  new_letter["p8offsetX"] = map(percent, 0, 100, oldObj["p8offsetX"], newObj["p8offsetX"]);
  new_letter["p8offsetY"] = map(percent, 0, 100, oldObj["p8offsetY"], newObj["p8offsetY"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]