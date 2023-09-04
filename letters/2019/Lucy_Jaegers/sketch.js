const canvasWidth = 960;
const canvasHeight = 500;
let tester = 0;
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
   // draw the letters A, B, C from saved data
   /*
  drawLetter(center_x - 250, center_y, letterA, 0, -50, 0, 100, 0, 100);
  drawLetter(center_x      , center_y, letterB, 0, -50, 0, 50, 100, 0);
  drawLetter(center_x + 250, center_y, letterC, 80, 0, 0, 0, 0, 0);
*/
const letterA = {
  "line1": true,
  "line2": true,
  "line3": true,
  "line4": true,
  "line5": true,
  "line6": true,
  "line7": false,
  


}

const letterB = {
  "line1": true,
  "line2": true,
  "line3": true,
  "line4": true,
  "line5": true,
  "line6": true,
  "line7": true,

}

const letterC = {
  "line1": true,
  "line2": true,
  "line3": false,
  "line4": false,
  "line5": true,
  "line6": false,
  "line7": true,

}


const colorFront1  = "#ff18a6";
const colorFront2  = "#ff59c4";
const colorBack    = "#e3eded";
const colorStroke  = "#3f1128";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);
  // with no animation, redrawing the screen is not necessary
  //noLoop();
}

function drawLetter(posx, posy, letterData) {

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

 stroke("#ffa5df");
 noFill();


angleMode(DEGREES);


strokeWeight(6);  

push();
translate(posx-50, posy-100); 
 //1
 if(letterData["line1"] != 0){  
  line(0, 0, 0, 100); 
}


 //2
 if(letterData["line2"] != 0){  
 line(0, 0, 100, 0);
}

 //3
 if(letterData["line3"] != 0){
  line(100, 0, 100, 100);
}

 //4
 if(letterData["line4"] != 0){
 line(0, 100, 100, 100);
}

 //5
 if(letterData["line5"] != 0){
 line(0, 100, 0, 200);
}

 //6
 if(letterData["line6"] != 0){
 line(100, 100, 100, 200);
}

 //7 
 if(letterData["line7"] != 0){
 line(0, 200, 100, 200);
}

pop();
}




function draw () {
  // clear screen
  background('#ff59c4');

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA, 0, -150, 0, 100, 0, 100);
  drawLetter(center_x      , center_y, letterB, 0, -50, 0, 50, 100, 0);
  drawLetter(center_x + 250, center_y, letterC, 80, 0, 0, 0, 0, 0);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
