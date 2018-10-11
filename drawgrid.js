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

var Half_X = 960/2;
var Half_Y = 720/2;
/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

let gridSize = 100;

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  let x1q = 712;
  let y1q = 512;
  let x2q = 512;
  let y2q = 712;
  let x3q = 312;
  let y3q = 512;
  let x4q = 512;
  let y4q = 312;

  let x1q2 = 612;
  let y1q2 = 512;
  let x2q2 = 512;
  let y2q2 = 612;
  let x3q2 = 412;
  let y3q2 = 512;
  let x4q2 = 512;
  let y4q2 = 412;

  //main diamond
  let x1c = p5.map(x1q, x1, x2, 0, 256);
  let y1c = p5.map(y1q, y1, y2, 0, 256);
  let x2c = p5.map(x2q, x1, x2, 0, 256);
  let y2c = p5.map(y2q, y1, y2, 0, 256);
  let x3c = p5.map(x3q, x1, x2, 0, 256);
  let y3c = p5.map(y3q, y1, y2, 0, 256);
  let x4c = p5.map(x4q, x1, x2, 0, 256);
  let y4c = p5.map(y4q, y1, y2, 0, 256);

  //inner diamond
  let x1c2 = p5.map(x1q2, x1, x2, 0, 256);
  let y1c2 = p5.map(y1q2, y1, y2, 0, 256);
  let x2c2 = p5.map(x2q2, x1, x2, 0, 256);
  let y2c2 = p5.map(y2q2, y1, y2, 0, 256);
  let x3c2 = p5.map(x3q2, x1, x2, 0, 256);
  let y3c2 = p5.map(y3q2, y1, y2, 0, 256);
  let x4c2 = p5.map(x4q2, x1, x2, 0, 256);
  let y4c2 = p5.map(y4q2, y1, y2, 0, 256);

  p5.fill(113, 103, 114);
  p5.quad(x1c, y1c, x2c, y2c, x3c, y3c, x4c, y4c);

  p5.fill(82, 81, 99);
  p5.quad(x1c2, y1c2, x2c2, y2c2, x3c2, y3c2, x4c2, y4c2);
  

 



  // p5.fill(50);
  // let y_snap_c = p5.map(512, y1, y2, 0, 256);
  // let elipse_c = p5.map(x1 + 10, x1, x2, 0, 256);

  // for (let i=x1-gridSize; i<x2+gridSize; i+=gridSize) {
  //   let x_snap = snap_to_grid(i, gridSize);
  //   let x_snap_c = p5.map(x_snap, x1, x2, 0, 256);
  //   p5.ellipse(x_snap_c, y_snap_c, elipse_c)
  // }

//First Diamond
// tx = p5.map(512-960/2, x1, x2, 0, 256);
// ty = p5.map(512-720/2, y1, y2, 0, 256);
// tx2 = p5.map(512+940/2, x1, x2, 0, 256);
// ty2 = p5.map(512+720/2, y1, y2, 0, 256);
// tx3 = p5.map();
// p5.fill(223, 191, 192);
// p5.quad(tx, ty, tx2, ty2);



 // p5.background(254, 234, 229);
 //  p5.fill(100);
 //  p5.ellipse(x1, y1, 20,20);
 //  p5.fill(240);
 //  p5.ellipse(x2, y2, 20,20);


  // p5.fill(240);
  // p5.quad(0, 0, 580, 100, 480, 200, 380, 100);
  // p5.stroke(5); 
  // p5.strokeWeight(7); 
  // p5.fill(240);
  // p5.quad(0, 0, 580, 150, 480, 250, 380, 150);
  // p5.fill(250);
  // p5.quad(0, 0, 510, 150, 480, 185, 450, 150);  


  // debug - show border
  p5.noFill();
  p5.stroke(255, 0, 0)
  p5.rect(0, 0, 255, 255);
}
