/*
 * This is the function to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */


/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

const backgrnd = "#105B63";
const lines = "#DB9E36";
const fillColour = "#FFD34E";
const lineWidth = 20;

let ballx = 400;
let bally = 400;
let ballr = 400;

let point1x = 0;
let point1y = 0;
let point2x = 256;
let point2y = 384;
let point3x = 512;
let point3y = 0;


// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  p5.background(backgrnd);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(lineWidth, x1, x2, 0, 256);
  let strokeWidth = c_plwidth - c_p00;

  p5.strokeWeight(strokeWidth);  
  p5.stroke (lines);
  p5.fill(255, 211, 78, 50);
  p5.stroke (lines); //noStroke();

  let localBallX = p5.map(ballx, x1, x2, 0, 256);
  let localBallY = p5.map(bally, y1, y2, 0, 256);
  let localBallXEdge = p5.map(ballx + ballr, x1, x2, 0, 256);
  let localBallRadius = localBallXEdge - localBallX;


  let localpoint1x = p5.map(point1x, x1, x2, 0, 256);
  let localpoint1y = p5.map(point1y, x1, x2, 0, 256);
  let localpoint2x = p5.map(point2x, x1, x2, 0, 256);
  let localpoint2y = p5.map(point2y, x1, x2, 0, 256);
  let localpoint3x = p5.map(point3x, x1, x2, 0, 256);
  let localpoint3y = p5.map(point3y, x1, x2, 0, 256);

  p5.beginShape();
  p5.curveVertex(-128, 215);
  p5.curveVertex(0, 0);
  p5.curveVertex(128, 195);
  p5.curveVertex(255, 0);
  p5.curveVertex(384, 215);
  p5.endShape();

  p5.beginShape();
  p5.curveVertex(-128, 235);
  p5.curveVertex(0, 20);
  p5.curveVertex(128, 215);
  p5.curveVertex(255, 20);
  p5.curveVertex(384, 235);
  p5.endShape();

  p5.beginShape();
  p5.curveVertex(-128, 256);
  p5.curveVertex(0, 40);
  p5.curveVertex(128, 235);
  p5.curveVertex(256, 40);
  p5.curveVertex(384, 256);
  p5.endShape();
//

  p5.beginShape();

  p5.curveVertex(-128, 0);
  p5.curveVertex(0, 256);
  p5.curveVertex(128, 40);
  p5.curveVertex(255, 256);
  p5.curveVertex(384, 40);
  p5.endShape();

  for(let i = 0; i<10; i++){
    //let shade = 255 / (i+1);
    let currentR = p5.map(i, 0, 9, localBallRadius, 0);
    //p5.fill(0, 0, shade);
    p5.ellipse(localBallX, localBallY, currentR);
  }
 
  	//p5.line(0, 0, 255, 255);

  //debug - show border
  // p5.noFill();
  // p5.strokeWeight(1);
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
