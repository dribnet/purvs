// /*
//  * This is the function to implement to make your own abstract design.
//  *
//  * arguments:
//  * p5: the p5.js object - all draw commands should be prefixed with this object
//  * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
//  * z: use this as the noise z offset (can be shifted)
//  * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
//  *
//  * The destination drawing should be in the square 0, 0, 255, 255.
//  */


// /* the random number seed for the tour */
// var tourSeed = 301;
// /* triplets of locations: zoom, x, y */
// var tourPath = [
//   [2, 512, 512],
//   [4, 512, 512],
//   [6, 512, 512]
// ]

// function circles(p5, x, y, x1, x2, y1, y2){
//   let circleX = p5.map(512, x1, x2, 0, 256);
//   let circleY = p5.map(512, y1, y2, 0, 200);
//   let circleR = p5.map(512, x1, x2, 0, 256);

//   p5.stroke(255);
//   p5.fill(0, 200, 200);
//   p5.ellipse(circleX, circleY, circleR);    
  
// }
// // This version draws two rectangles and two ellipses.
// // The rectangles are 960x720 and centered at 512,512.
// function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
//   p5.background(255);
//   for(int i = 0; i < 3; i++){
//     circles(p5, 312, 512, x1, x2, y1, y2);
//   }
//   // circles(p5, 612, 512, x1, x2, y1, y2);
//   // debug - show border
//   p5.noFill();
//   p5.stroke(0, 200, 200)
//   p5.rect(0, 0, 255, 255);
//   p5.ellipse(25, 25, 50, 50);
// }

const max_thickness = 64;
const max_movement = 16;
const ball_radius = 32;
const line_width = 8;
const grid_size = 64;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 356.500000000000, 665.750000000000],
  [3, 353.250000000000, 668.187500000000],
  [4, 322.562500000000, 645.093750000000],
  [5, 322.562500000000, 645.109375000000],
  [7, 317.984375000000, 643.636718750000],
  [3, 317.984375000000, 643.636718750000]
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
  let max_shift = max_thickness + max_movement;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  // debug version: draw one
  // let half_x = (x1 + x2) / 2;
  // let half_y = (y1 + y2) / 2;
  // min_x = snap_to_grid(half_x, grid_size);
  // max_x = snap_to_grid(half_x + grid_size, grid_size);
  // min_y = snap_to_grid(half_y, grid_size);
  // max_y = snap_to_grid(half_y + grid_size, grid_size);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;

  p5.background(255);
  p5.fill(0, 0, 128);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      // First compute shifted point in grid
      let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x = x + offsetX;
      let shifted_y = y + offsetY;
      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);

      // now compute shifted point one step to the left
      let x_left = x + grid_size;
      let y_left = y;
      let offsetX_left = getRandomValue(p5, x_left, y_left, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY_left = getRandomValue(p5, x_left, y_left, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x_left = x_left + offsetX_left;
      let shifted_y_left = y_left + offsetY_left;
      let x_pos_left = p5.map(shifted_x_left, x1, x2, 0, 256);
      let y_pos_left = p5.map(shifted_y_left, y1, y2, 0, 256);

      // lastly compute shifted point one step down
      let x_down = x;
      let y_down = y + grid_size;
      let offsetX_down = getRandomValue(p5, x_down, y_down, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY_down = getRandomValue(p5, x_down, y_down, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x_down = x_down + offsetX_down;
      let shifted_y_down = y_down + offsetY_down;
      let x_pos_down = p5.map(shifted_x_down, x1, x2, 0, 256);
      let y_pos_down = p5.map(shifted_y_down, y1, y2, 0, 256);

      /* now draw all elements from back to front */
      //p5.strokeWeight(cur_line_width);
      // p5.stroke(150, 0, 0);
      // p5.line(x_pos, y_pos, x_pos_left, y_pos_left);
      // p5.stroke(0, 150, 0);
      // p5.line(x_pos, y_pos, x_pos_down, y_pos_down);

      p5.stroke(0, 0, 150);
      p5.noStroke();
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
    }
  }
  //   // debug - show border
  p5.noFill();
  p5.stroke(0, 200, 200)
  p5.rect(0, 0, 255, 255);
  p5.ellipse(25, 25, 50, 50);

  // debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.strokeWeight(1);
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);
}

