const max_thickness = 64;
const ball_radius = 32;


const line_width = 8;
const grid_size = 64;
const max_movement = 100;
 var r = random(255);
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

/* this function returns a point offset by noise at that location */
function getOffsetPoint(p5, x, y, z, noiseScale) {
  let noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  let noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  let offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  let offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
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
      /* first compute all three points with offsets */
      let shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      let x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      let y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      let shift_point_left = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      let x_pos_left = p5.map(shift_point_left[0], x1, x2, 0, 256);
      let y_pos_left = p5.map(shift_point_left[1], y1, y2, 0, 256);

      let shift_point_down = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      let x_pos_down = p5.map(shift_point_down[0], x1, x2, 0, 256);
      let y_pos_down = p5.map(shift_point_down[1], y1, y2, 0, 256);

      /* now draw all elements from back to front */
      p5.strokeWeight(cur_line_width);
      p5.stroke(150, 0, 0);
      //p5.line(x_pos, y_pos, x_pos_left, y_pos_left);
      p5.stroke(0, 150, 0);
      //p5.line(x_pos, y_pos, x_pos_down, y_pos_down);

      p5.stroke(0, 0, 150);
      p5.noStroke();
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
      tree(p5, x_pos, y_pos, y1, y2, z, zoom);
    }
  }

 // debug - show border
  p5.noFill();
  p5.stroke(0, 200, 200)
  p5.strokeWeight(1);
  p5.rect(0, 0, 255, 255);
  p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  let sizex = x2 - x1;
  p5.text("width: " + sizex, 10, 40);
}




function tree (p5, x1, x2, y1, y2, z, zoom){


  let rect1x = p5.map(512, x1, x2, 0, 256);
  let rect1y = p5.map(512, y1, y2, 0, 256);
  let radiusRect1 = p5.map(512+10, x1, x2, 0, 256);


  let rect2x = p5.map(512.8, x1, x2, 0, 256);
  let rect2y = p5.map(510, y1, y2, 0, 256);
  let radiusRect2 = p5.map(512.8+10, x1, x2, 0, 256);

  let rect3x = p5.map(513.4, x1, x2, 0, 256);
  let rect3y = p5.map(508, y1, y2, 0, 256);
  let radiusRect3 = p5.map(513.4+10, x1, x2, 0, 256);

  let rect4x = p5.map(514.1, x1, x2, 0, 256);
  let rect4y = p5.map(506, y1, y2, 0, 256);
  let radiusRect4 = p5.map(514.1+10, x1, x2, 0, 256);

  let rect5x = p5.map(514.9, x1, x2, 0, 256);
  let rect5y = p5.map(504, y1, y2, 0, 256);
  let radiusRect5 = p5.map(514.9+10, x1, x2, 0, 256);

  let basex = p5.map(514.9, x1, x2, 0, 256);
  let basey = p5.map(514, y1, y2, 0, 256);
  let radiusbase = p5.map(514.9+10, x1, x2, 0, 256);

  

  p5.strokeWeight(0);
  //p5.ellipse(rect1x, rect1y, (radiusRect1-rect1x));
p5.fill(34, 99, 36);
p5.rect(rect1x, rect1y, (radiusRect1-rect1x),(radiusRect1-rect1x)/5);
 p5.fill(38, 109, 40);
 p5.rect(rect2x, rect2y, (radiusRect2-rect2x)/1.20,(radiusRect2-rect2x)/5);
 p5.fill(58, 153, 61);
p5.rect(rect3x, rect3y, (radiusRect3-rect3x)/1.40,(radiusRect3-rect3x)/5);
 p5.fill(49, 137, 52);
 p5.rect(rect4x, rect4y, (radiusRect4-rect4x)/1.80,(radiusRect4-rect4x)/5);
p5.fill(63, 175, 66);
p5.rect(rect5x, rect5y, (radiusRect5-rect5x)/2.6,(radiusRect5-rect5x)/5);

//p5.fill(99, 60, 34);
p5.rect(basex, basey, (radiusbase-basex)/2.6,(radiusbase-basex)/5);

}
