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

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

let gridSize = 200;

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  let max_shift = 0;
  let line_width = 10;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, gridSize);
  let max_x = snap_to_grid(x2 + max_shift + gridSize, gridSize);

  p5.background(254, 234, 229);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;

  for(let x=min_x; x<max_x; x+=gridSize) {
    let x_pos = p5.map(x, x1, x2, 0, 256);
    let y1_pos = p5.map(100, y1, y2, 0, 256);
    let y2_pos = p5.map(100, y1, y2, 0, 256);

    let y3_pos = p5.map(1200, y1, y2, 0, 256);
    let y4_pos = p5.map(1000, y1, y2, 0, 256);

    // if (x > 500) {
    //   p5.stroke(150, 0, 0);
    // }
    // else {
    //   p5.stroke(0, 150, 0);      
    // }
    p5.fill(113, 103, 114);
    p5.strokeWeight(cur_line_width);
    p5.ellipse(x_pos, y1_pos, 100, 100);
    p5.ellipse(x_pos, y3_pos, 100, 100);
  }


  //diamonds
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

  let x1q3 = 680;
  let y1q3 = 350;
  let x2q3 = 512;
  let y2q3 = 212;
  let x3q3 = 350;
  let y3q3 = 350;
  let x4q3 = 512;
  let y4q3 = 512;

  //circles
  let x1cc1 = 510;
  let y1cc1 = 750;

  //diamonds map
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

  //upper diamond
  let x1c3 = p5.map(x1q3, x1, x2, 0, 256);
  let y1c3 = p5.map(y1q3, y1, y2, 0, 256);
  let x2c3 = p5.map(x2q3, x1, x2, 0, 256);
  let y2c3 = p5.map(y2q3, y1, y2, 0, 256);
  let x3c3 = p5.map(x3q3, x1, x2, 0, 256);
  let y3c3 = p5.map(y3q3, y1, y2, 0, 256);
  let x4c3 = p5.map(x4q3, x1, x2, 0, 256);
  let y4c3 = p5.map(y4q3, y1, y2, 0, 256);

  //circles map
  let x1ccc1 = p5.map(x1cc1, x1, x2, 0, 256);
  let y1ccc1 = p5.map(y1cc1, y1, y2, 0, 256);



  //circle no fill
  p5.noFill();
  p5.stroke(113, 103, 114);
  p5.strokeWeight(7);
  p5.ellipse(x1ccc1, y1ccc1, 500, 500);
  p5.ellipse(x1ccc1, y1ccc1, 600, 600);


  //circle body
  p5.noStroke();
  p5.fill(113, 103, 114);
  p5.ellipse(x1ccc1, y1ccc1, 400, 400);
  p5.fill(254, 234, 229);
  p5.ellipse(x1ccc1, y1ccc1, 200, 200);

  //diamond body
  p5.fill(113, 103, 114);
  p5.quad(x1c3, y1c3, x2c3, y2c3, x3c3, y3c3, x4c3,y4c3);

  p5.stroke(254, 234, 229);
  p5.strokeWeight(15);
  p5.fill(113, 103, 114);
  p5.quad(x1c, y1c, x2c, y2c, x3c, y3c, x4c, y4c);

  p5.noStroke();
  p5.fill(254, 234, 229);
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
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
