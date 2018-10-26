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
const lineWidth = 10;
const grid_size = 250;

let do_animation = true;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 578, 481],
  [3, 399, 500],
  [3, 419, 370],
  [2, 584, 207],
  [2, 735, 488]
]

function spine(p5, x, y, x1, x2, y1, y2, zoom){

  let arc00 = p5.map(0, x1, x2, 0, 256);
  let arcX = p5.map(x, x1, x2, 0, 256);
  let arcY = p5.map(y, y1, y2, 0, 256);
  let arcX2 = p5.map(x+125, x1, x2, 0, 256);
  let arcY2 = p5.map(y+170, y1, y2, 0, 256);

  let sineWave1 = p5.sin(p5.globalFrameCount / 60.0);
  let radius_Scale1 = p5.map(sineWave1, -1, 1, 0.4, 1.2);
  let sineWave2 = p5.sin(p5.globalFrameCount / 60.0 + p5.PI/2);
  let radius_Scale2 = p5.map(sineWave2, -1, 1, 0.4, 1.2);
  let sineWave3 = p5.sin(p5.globalFrameCount / 60.0 + p5.PI);
  let radius_Scale3 = p5.map(sineWave3, -1, 1, 0.4, 1.2);

  let arc_originX = p5.map(0, x1, x2, 0, 256);
  let arcOffset = p5.map(200, x1, x2, 0, 256);

  let arcR1 = arcOffset - arc_originX;
  arcR1 = arcR1 * radius_Scale1;
  let arcR2 = arcOffset - arc_originX;
  arcR2 = arcR2 * radius_Scale2;
  let arcR3 = arcOffset - arc_originX;
  arcR3 = arcR3 * radius_Scale3;

  let arcStrokeW = p5.map(lineWidth, x1, x2, 0, 256);

  let curArcStrW = arcStrokeW - arc00;

  let col = 0;
  col = col++;
  if(col == 255){
    col = 0;
  }
  
  if(zoom == 0){
    p5.stroke(204, 91, 57);
    p5.fill(204, 91, 57, 50);
  }
  if(zoom >= 1){
    p5.stroke(73, 160, 160);
    p5.fill(73, 160, 160, 50);
  }
  if(zoom >= 2){
    p5.stroke(0, 150, 100);
    p5.fill(0, 150, 100, 70);
  }
  p5.strokeWeight(curArcStrW);
  

  p5.arc(arcX, arcY, arcR1, arcR1, p5.QUARTER_PI*3.2, p5.QUARTER_PI*8.8, p5.CHORD);
  p5.arc(arcX2, arcY2, arcR1, arcR1, p5.QUARTER_PI*15.2, p5.QUARTER_PI*20.8, p5.CHORD);

  if(zoom >= 1){
    p5.arc(arcX, arcY, arcR2/1.7, arcR2/1.7, p5.QUARTER_PI*3.2, p5.QUARTER_PI*8.8, p5.CHORD);
    p5.arc(arcX2, arcY2, arcR2/1.7, arcR2/1.7, p5.QUARTER_PI*15.2, p5.QUARTER_PI*20.8, p5.CHORD);
  }
  if(zoom >= 2){
    p5.arc(arcX, arcY, arcR3/4, arcR3/4, p5.QUARTER_PI*3.2, p5.QUARTER_PI*8.8, p5.CHORD);
    p5.arc(arcX2, arcY2, arcR3/4, arcR3/4, p5.QUARTER_PI*15.2, p5.QUARTER_PI*20.8, p5.CHORD);
  }
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  /* For animation: updated z based on global frame count */
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;

  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  p5.background(0);

  if(zoom >= 1){
    p5.background(243, 52, 52);
  }
  if(zoom >= 2){
    p5.background(255);
  }

  p5.rectMode(p5.CORNERS);

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      spine(p5, x, y, x1, x2, y1, y2, zoom); 
    }
  }
}