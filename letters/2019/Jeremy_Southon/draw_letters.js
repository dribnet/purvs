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
  fill(233,100,34);
  //just to position it nicely inside template 
  let posx = 5;
  let posy = 100;
  //Draw all the pieces that make up the letter.
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
 * @param {number} offsetX how much to move this rect to the left and right.
 * @param {number} offsetY how much to move this rect up/down.
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

  /** for all 1 - 8 squares and there x & y position */
  const numberOfsquares = 8;
  let curSquare = 1;
  for(let i = 1 ;i<= numberOfsquares;i++){
    let ioffSetX = "p"+i+"offsetX";
    let ioffSetY = "p"+i+"offsetY";
    new_letter[ioffSetX] = map(percent, 0, 100, oldObj[ioffSetX], newObj[ioffSetX]);
    new_letter[ioffSetY] = map(percent, 0, 100, oldObj[ioffSetY], newObj[ioffSetY]);
  }
  return new_letter;
}

var swapWords = [
  "LEG0FONT",
  "ADELINE?",
  "0NEPIECE"
]