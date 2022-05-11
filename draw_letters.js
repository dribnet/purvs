// /* these are optional special variables which will change the system */
var systemBackgroundColor = "#fddeef"//"#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const backgroundColor  = "#fddeef";  //hexcolortool.com/fddeef  //#caf0f8
const strokeColor      = "#550632"; //(burgundy) //#03045e
const pink  = "#d572b5"; //https://www.hexcolortool.com/#d572b5  //"#90e0ef";

// const darkBlue  = "#0077b6";
// const lightBlue  = "#90e0ef";
// const strokeColor  = "#03045e";

// /*
//  * Draw the letter given the letterData
//  *
//  * Letters should always be drawn with the
//  * following bounding box guideline:
//  * from (0,0) to (100, 200)
//  */
//
//
//
// const canvasWidth = 960;
// const canvasHeight = 500;
//
//
const letterA = {
      "size": 40, //30
      "offsetx": 50,
      "offsety": 5
}
//
const letterB = {
    "size": 65, //150,
    "offsetx": 0, //20,
    "offsety": -20//-145
}
//
const letterC = {
  "size": 20,
  "offsetx": 49,
  "offsety": 15
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(15); //4

  // with no animation, redrawing the screen is not necessary
  noLoop();
}
//
// function draw () {
//   // clear screen
//   background(backgroundColor);
//
//   // compute the center of the canvas
//   let center_x = canvasWidth / 2;
//   let center_y = canvasHeight / 2;
//
//   // draw the letters A, B, C from saved data
//   drawLetter(center_x - 200, center_y, letterA); //250
//   drawLetter(center_x      , center_y, letterB);
//   drawLetter(center_x + 200, center_y, letterC); //250
// }

function drawLetter(letterData) {
  angleMODE = DEGREES;
  let posx = 25;
  let posy = 100;
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let rect2posX = letterData["rect2offsetx"];
  let rect2posY = letterData["rect2offsety"];
  let letterAngle = letterData["letterRotation"];
  let rect2size = letterData["rect2size"];
  let pos3x = posx + letterData ["numPosX"];
  let pos3y = posy + letterData ["numPosY"];



  //stroke(230, 20, 100);
  fill(strokeColor); //(255,40); //(pink);
  noStroke();
  rect(posx, posy, 50, 50, 20, 20, 20, 20);

    push();
    translate(posx+25, posy-10);
    rotate(letterAngle);
    noStroke();
    fill (255);//(backgroundColor);
    rect(rect2posX, rect2posY, rect2size, rect2size, 20, 20, 20, 20); //(posx+30, posy+15, size2, 15, 20, 20, 20, 20);
    pop();

  //stroke(36, 71, 58, 1);
  //push();
  strokeWeight(10);
  stroke(strokeColor);
  //translate(5, -5);
  //rotate(letterAngle);
  line(pos2x, pos2y, pos2x, pos2y+size2/1.5);
  //pop();

  strokeWeight(10);
  stroke(strokeColor);
  line(pos3x, pos3y, pos3x+35, pos3y);
}


  function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }

  function interpolate_letter(percent, oldObj, newObj) {
    let new_letter = {};
    new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
    new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
    new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
    new_letter["rect2offsetx"] = map(percent, 0, 100, oldObj["rect2offsetx"], newObj["rect2offsetx"]);
    new_letter["rect2offsety"] = map(percent, 0, 100, oldObj["rect2offsety"], newObj["rect2offsety"]);
    new_letter["letterRotation"] = map(percent, 0, 100, oldObj["letterRotation"], newObj["letterRotation"]);
    new_letter["rect2size"]    = map(percent, 0, 100, oldObj["rect2size"], newObj["rect2size"]);
    new_letter["numPosX"]    = map(percent, 0, 100, oldObj["numPosX"], newObj["numPosX"]);
    new_letter["numPosY"]    = map(percent, 0, 100, oldObj["numPosY"], newObj["numPosY"]);
    return new_letter;
  }

  var swapWords = [
    "ABBAABBA",
    "CAB?CAB?",
    "BAAAAAAA"
  ]
}

// // function drawLetter(letterData) {
// //   // color/stroke setup
// //   stroke(strokeColor);
// //   strokeWeight(4);
// //
// //   // determine parameters for second circle
// //   let size2 = letterData["size"];
// //   let pos2x = 50  + letterData["offsetx"];
// //   let pos2y = 150 + letterData["offsety"];
// //
// //   // draw two circles
// //   fill(darkBlue);
// //   ellipse(50, 150, 75, 75);
// //   fill(lightBlue);
// //   ellipse(pos2x, pos2y, size2, size2);
// // }
// function drawLetter(posx, posy, letterData) {
//   // determine parameters for second circle
//   let size2 = letterData["size"];
//   let pos2x = posx + letterData["offsetx"];
//   let pos2y = posy + letterData["offsety"];
//
//   // draw two circles
//   fill(255, 10, 177); //darkBlue
//   ellipse(posx, posy, 150, 150);
//   fill(lightBlue);
//   ellipse(pos2x, pos2y, size2, size2);
// }
//
// function keyTyped() {
//   if (key == '!') {
//     saveBlocksImages();
//   }
//   else if (key == '@') {
//     saveBlocksImages(true);
//   }
//
