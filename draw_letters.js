/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ffd60a"; //sets background colour
var systemLineColor = "#ffc300"; //sets line colour
var systemBoxColor = "#ffc300"; //sets box colour

/* internal constants */
const fontColor  = "#000814"; //sets the font colour
const strokeColor  = "#ffc300"; //sets the box stroke colour



/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  
  let posx = 10; //sets the global x position
  let posy = 100;//sets the global y position

  let pos1x = posx + letterData["Rect1x"]; //sets Rectangle 1 x position
  let pos1y = posy + letterData["Rect1y"]; //sets Rectangle 1 y position
  let pos2x = posx + letterData["Rect2x"]; //sets Rectangle 2 x position
  let pos2y = posy + letterData["Rect2y"]; //sets Rectangle 2 y position
  let pos3x = posx + letterData["Rect3x"]; //sets Rectangle 3 x position
  let pos3y = posy + letterData["Rect3y"]; //sets Rectangle 3 y position
  let pos4x = posx + letterData["Rect4x"]; //sets Rectangle 4 x position
  let pos4y = posy + letterData["Rect4y"]; //sets Rectangle 4 y position
  let pos5x = posx + 40; //sets the border box x position
  let pos5y = posy + 0; //sets the border box y position

  let height1y = letterData["Rect1h"]; //sets Rectanfle 1's height
  let height2y = letterData["Rect2h"]; //sets Rectangle 2's height
  let height3y = letterData["Rect3h"]; //sets Rectangle 3's height
  let height4y = letterData["Rect4h"]; //sets Rectangle 4's height
  let height5y = 178; //sets border box height
  let width5x = 114; //sets border box width

  let rot1 = letterData["Rect1r"]; //sets Rectangle 1's rotation
  let rot2 = letterData["Rect2r"]; //sets Rectangle 2's rotation
  let rot3 = letterData["Rect3r"]; //sets Rectangle 3's rotation
  let rot4 = letterData["Rect4r"]; //sets Rectangle 4's rotation

  push(); //starts letter creation
  strokeCap(SQUARE); //sets the stroke cap to 'square'
  angleMode(DEGREES); //sets the angle mode to degrees
  rectMode(CENTER); //sets the rectangle mode to centre (rectangles are formed from the centre)
  noStroke(); //removes all strokes on shapes
  fill(fontColor); //fills the shapes with the font colour

  push();//Rectangle 1 creation
  translate(pos1x, pos1y); //moves Rectanlge 1 around
  rotate(rot1); //rotates Rectangle 1
  rect(0, 0, 30, height1y); //creates Rectangle 1 shape
  pop();

  push();//Rectangle 2 creation
  translate(pos2x, pos2y); //moves Rectangle 2 around
  rotate(rot2); //rotates Rectangle 2
  rect(0, 0, 30, height2y); //creates Rectangle 2 shape
  pop();

  push(); //Rectangle 3 creation
  translate(pos3x, pos3y); //moves Rectangle 3 around
  rotate(rot3); //rotates Rectangle 3
  rect(0, 0, 30, height3y); //creates Rectangle 3 shape
  pop();

  push(); //Rectangle 4 creation
  translate(pos4x, pos4y); //moves Rectangle 4 around
  rotate(rot4); //rotates Rectangle 4
  rect(0, 0, 30, height4y); //creates Rectangle 4 shape
  pop();
  
  push(); //creates border box
  fill(0, 0, 0, 0); //sets the fill to nothing(fully transparent)
  stroke(strokeColor); //adds stroke colour
  strokeWeight(20); //creates a strok of 20
  translate(pos5x, pos5y); //moves the border box to the correct position
  rect(0, 0, width5x, height5y); //creates the border box shape
  pop();

  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["Rect1x"] = map(percent, 0, 100, oldObj["Rect1x"], newObj["Rect1x"]);
  new_letter["Rect1y"] = map(percent, 0, 100, oldObj["Rect1y"], newObj["Rect1y"]);
  new_letter["Rect2x"] = map(percent, 0, 100, oldObj["Rect2x"], newObj["Rect2x"]);
  new_letter["Rect2y"] = map(percent, 0, 100, oldObj["Rect2y"], newObj["Rect2y"]);
  new_letter["Rect3x"] = map(percent, 0, 100, oldObj["Rect3x"], newObj["Rect3x"]);
  new_letter["Rect3y"] = map(percent, 0, 100, oldObj["Rect3y"], newObj["Rect3y"]);
  new_letter["Rect4x"] = map(percent, 0, 100, oldObj["Rect4x"], newObj["Rect4x"]);
  new_letter["Rect4y"] = map(percent, 0, 100, oldObj["Rect4y"], newObj["Rect4y"]);
  new_letter["Rect1h"] = map(percent, 0, 100, oldObj["Rect1h"], newObj["Rect1h"]);
  new_letter["Rect2h"] = map(percent, 0, 100, oldObj["Rect2h"], newObj["Rect2h"]);
  new_letter["Rect3h"] = map(percent, 0, 100, oldObj["Rect3h"], newObj["Rect3h"]);
  new_letter["Rect4h"] = map(percent, 0, 100, oldObj["Rect4h"], newObj["Rect4h"]);
  new_letter["Rect1r"] = map(percent, 0, 100, oldObj["Rect1r"], newObj["Rect1r"]);
  new_letter["Rect2r"] = map(percent, 0, 100, oldObj["Rect2r"], newObj["Rect2r"]);
  new_letter["Rect3r"] = map(percent, 0, 100, oldObj["Rect3r"], newObj["Rect3r"]);
  new_letter["Rect4r"] = map(percent, 0, 100, oldObj["Rect4r"], newObj["Rect4r"]);
  return new_letter;
}

var swapWords = [
  "FUTURBLK",
  "BLOCKOUT",
  "??TAPE??",
  "BL?KPRTY"
]
