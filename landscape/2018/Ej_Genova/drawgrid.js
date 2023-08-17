const max_thickness = 64;

let maxBoxBlue = 50;
const boxRed = 30;
const boxYellow = 15;
const boxBrown = 32;

const grid_size = 64;
let do_animation = true;


/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 416.472656250000,660.144531250000],//0.000000000000
  [2, 118.439453125000,888.384765625000],
  [3, 379.128906250000,1259.570312500000],
  [4, 340.375000000000,1315.000000000000],
  [5, 267.613281250000,1356.066406250000],
  [2, 251.523193359375,1361.349121093750],
  [1, 416.472656250000,660.144531250000]



]

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/*
 * This is the funciton to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  


   
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  // draw one
  let half_x = (x1 + x2) / 2;
  let half_y = (y1 + y2) / 2;
  min_x = snap_to_grid(half_x, grid_size);
  max_x = snap_to_grid(half_x + grid_size, grid_size);
  min_y = snap_to_grid(half_y, grid_size);
  max_y = snap_to_grid(half_y + grid_size, grid_size);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  
  //important code
  // boxBlue = 50;
  let freqBlue = 10.0;
  let freqRed = 30.0;
  let freqYellow = 20.0;
  
  let sineWaveBlue = p5.sin(p5.globalFrameCount / freqBlue);
  let sineWaveRed = p5.sin(p5.globalFrameCount / freqRed);
  let sineWaveYellow = p5.sin(p5.globalFrameCount / freqYellow);
  
  let growBlue = p5.map(sineWaveBlue, -1, 1, 40, 50);
  let growRed = p5.map(sineWaveRed, -1, 1, 20, 60);
  let growYellow = p5.map(sineWaveYellow, 1, -1, 30, 90);

  let flower1 = p5.map(growBlue, x1, x2, 0, 256);
  let flower2 = p5.map(growRed, x1, x2, 0, 256);
  let flower3 = p5.map(growYellow, x1, x2, 0, 256);

  //flowers
  let flowBlue = flower1 - c_p00 ;
  let flowRed = flower2 - c_p00;
  let flowYellow = flower3 - c_p00;
 

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */
  

  /* now draw all elements from back to front */
  
  p5.fill('#041370'); // blue
  p5.translate(128, 128);
  p5.noStroke();
  for (var i = 0; i < 10; i ++) {
    p5.ellipse(0, 10, flowBlue*4, 10);
    p5.rotate(p5.PI/5);
  }

    p5.fill('#EE4502'); // red
  p5.noStroke();
  for (var i = 0; i < 10; i ++) {
    p5.ellipse(0, 10, flowRed*2, 10);
    p5.rotate(p5.PI/5);
}

    p5.fill('#FCDB85'); //yellow
  p5.noStroke();
  for (var i = 0; i < 10; i ++) {
    p5.ellipse(0, 10, flowYellow/2, 10);
    p5.rotate(p5.PI/5);
}
}
  }

  // debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.strokeWeight(1);
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);
}
