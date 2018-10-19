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

const max_thickness = 250;
const lineWidth = 15;
const grid_size = 250;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 578, 481],
  [3, 347, 499]
]

function spine(p5, x, y, x1, x2, y1, y2){

  let x_pos = p5.map(x, x1, x2, 0, 256);
  let y_pos = p5.map(y, y1, y2, 0, 256);
  let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
  let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

  let arc00 = p5.map(0, x1, x2, 0, 256);
  let arcX = p5.map(x, x1, x2, 0, 256);
  let arcY = p5.map(y, y1, y2, 0, 256);
  let arcX2 = p5.map(x+125, x1, x2, 0, 256);
  let arcY2 = p5.map(y+170, y1, y2, 0, 256);
  let arc_originX = p5.map(0, x1, x2, 0, 256);
  let arcOffset = p5.map(200, x1, x2, 0, 256);
  let arcR = arcOffset - arc_originX;

  let arcStrokeW = p5.map(lineWidth, x1, x2, 0, 256);

  let curArcStrW = arcStrokeW - arc00;
  
  p5.stroke(204, 91, 57);
  p5.strokeWeight(curArcStrW);
  p5.noFill();
  p5.arc(arcX, arcY, arcR, arcR, p5.QUARTER_PI*3.2, p5.QUARTER_PI*8.8, p5.CHORD);
  p5.arc(arcX2, arcY2, arcR, arcR, p5.QUARTER_PI*15.2, p5.QUARTER_PI*20.8, p5.CHORD);
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  p5.background(10);
  p5.rectMode(p5.CORNERS);

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      spine(p5, x, y, x1, x2, y1, y2);
    }
  }


  //debug - show border
/*  p5.noFill();
  p5.strokeWeight(1);
  p5.stroke(255, 0, 0)
  p5.rect(0, 0, 255, 255);*/
}


