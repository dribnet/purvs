

const max_thickness = 64;
const ball_radius = 32;
const line_width = 15;
const grid_size = 100;

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
  let max_shift = max_thickness;

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
  //p5.fill(0, 0, 128);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {

       let x_pos = p5.map(x, x1, x2, 0, 256);
       let y_pos = p5.map(y, y1, y2, 0, 256);
       let x_pos_2 = p5.map(x + 30, x1, x2, 0, 256);
       let y_pos_2 = p5.map(y + 30, y1, y2, 0, 256);
       let x_pos_3 = p5.map(x - 30, x1, x2, 0, 256);
       let y_pos_3 = p5.map(y + 60, y1, y2, 0, 256);
       p5.quad(x_pos, y_pos, x_pos_3, y_pos_2, x_pos, y_pos_3, x_pos_2, y_pos_2);

       //for top lines
       let x_pos_line = p5.map(x - 40, x1, x2, 0, 256);
       let x_pos_line_2 = p5.map(x + 40, x1, x2, 0, 256);
       let y_pos_line = p5.map(y - 20, y1, y2, 0, 256);
       p5.line(x_pos, y_pos, x_pos_line, y_pos_line);
       p5.line(x_pos, y_pos, x_pos_line_2, y_pos_line);

       //for bottom lines
       let y_pos_line_2 = p5.map(y + 80, y1, y2, 0, 256);
       p5.line(x_pos, y_pos_3, x_pos_line, y_pos_line_2);
       p5.line(x_pos, y_pos_3, x_pos_line_2, y_pos_line_2);

      // let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      // let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);


      // p5.strokeWeight(cur_line_width);
      // p5.stroke(150, 0, 0);
      // p5.line(x_pos, y_pos, x_pos_left, y_pos);
      // p5.stroke(0, 150, 0);
      // p5.line(x_pos, y_pos, x_pos, y_pos_down);

      // p5.stroke(0, 0, 150);
      // p5.noStroke();
      // p5.ellipse(x_pos, y_pos, cur_ball_radius);


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
