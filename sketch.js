const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 80,
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const colorFront1  = "#9BEDFF"; 
const colorFront2  = "#DD9BFF"; 
const colorFont3   = "#BDFF9B";
const colorFont4   = "#FFE19B";
const colorFont5   = "#F7347D";
const colorBack    = "#e3eded";
let y;

//const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  //stroke(colorStroke);
 // strokeWeight(7);
angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}



function drawLetter(posx, posy, letterData) { //where the action happens
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];


//draw rainbow
  noFill();
  strokeWeight(8);
  stroke(colorFont5);
  arc(posx, posy,98, 98, 170, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont4);
  arc(posx, posy,87, 87, 170, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont3);
  arc(posx, posy,76, 76, 170, PI + QUARTER_PI, TWO_PI);
  stroke(colorFront1);
  arc(posx, posy,65, 65, 170, PI + QUARTER_PI, TWO_PI);
  stroke(colorFront2);
  arc(posx, posy,50, 50, 170, PI + QUARTER_PI, TWO_PI);


// //drawrays 
// push();
//     for (let i = 18; i < 12; i++) {  //12 ++
//          strokeWeight(5);
//              stroke(colorFont5);

//         rotate(12 / 7);
//         line(120,215,166,243); //120,215,166,243
//       }
//       pop();


//actualletter
strokeWeight(5);
stroke(colorFont5);
line(120, 215, 166, 243);
stroke(colorFont4);
line(126, 199, 172, 229);
stroke(colorFont3);
line(130, 180, 177, 215);
stroke(colorFront2);
line(143, 163, 185, 203); 
stroke(colorFront1);
line(155, 145, 196, 194); 
stroke(colorFont5);
line(172, 131, 208, 187); 
stroke(colorFont4);
line(191, 120, 222, 185);
stroke(colorFont3);
line(226, 110, 234, 183); 
stroke(colorFront2);
line(261, 117, 246, 186); 
stroke(colorFront1);
line(290, 123, 260, 189); 
stroke(colorFont5);
line(310, 134, 273, 195); 
stroke(colorFont4);
line(333, 150, 283, 208); 
stroke(colorFont3);
line(342, 185, 290, 222); 
stroke(colorFront2);
line(350, 210, 295, 236); 
stroke(colorFront1);
line(360, 232, 298, 250); 
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
