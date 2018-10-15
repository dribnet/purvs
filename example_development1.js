const max_thickness = 64;
const ball_radius = 64;
const line_width = 8;
const grid_size = 128;
const button_radius = 28;
const button_radius2 = 16;


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
      p5.angleMode(p5.DEGREES);
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
  let c_pbutton = p5.map(button_radius, x1, x2, 0, 256);
  let c_pbutton2 = p5.map(button_radius2, x1, x2, 0, 256);

  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;
  let cur_botton_radius = c_pbutton - c_p00;
  let cur_botton_radius2 = c_pbutton2 - c_p00;

  p5.background(255);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let start_line = x_pos-cur_ball_radius/2;
      let end_line = x_pos+cur_ball_radius/2;

      let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

      /* now draw all elements from back to front */
      // p5.strokeWeight(cur_line_width);
      // p5.stroke(150, 0, 0);
      // p5.line(x_pos, y_pos, x_pos_left, y_pos);
      // p5.stroke(0, 150, 0);
      // p5.line(x_pos, y_pos, x_pos, y_pos_down);

      // p5.stroke(0, 0, 150);

        
      p5.noStroke();
      //bottom arc
      p5.fill(100);
      p5.arc(x_pos, y_pos, cur_ball_radius,cur_ball_radius, 0, 180);
      //top arc
      p5.fill(200);
      p5.arc(x_pos, y_pos, cur_ball_radius,cur_ball_radius, 180,360);

      //middle line
      p5.push();
      p5.strokeWeight(3);
      p5.stroke(50);
      p5.line(start_line, y_pos, end_line, y_pos);
      p5.pop();    

      //middle big button
      p5.fill(255);
      p5.ellipse(x_pos, y_pos, cur_botton_radius);
      //middle small button
      p5.fill(0);
      p5.ellipse(x_pos, y_pos, cur_botton_radius2);

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