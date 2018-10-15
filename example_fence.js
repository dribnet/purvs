const max_thickness = 64;
const max_movement = 16;
const ball_radius = 3;
const line_width = 8;
const grid_size = 20;
let do_animation = true;

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

function drawPetals(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  const sqrt2 = 1.4142/2;
  let offsets = [
    [sqrt2, sqrt2],
    [-sqrt2, sqrt2],
    [-sqrt2, -sqrt2],
    [sqrt2, -sqrt2]
  ]
  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  let pixel_radius = pixel_posx2 - pixel_posx1;
  for(let i=0; i<offsets.length; i++) {
    let offset = offsets[i];
    let pixel_x = p5.map(pos_x+0.1*rad1*offset[0], x1, x2, 0, 256);
    let pixel_y = p5.map(pos_y+0.1*rad1*offset[1], y1, y2, 0, 256);
    p5.ellipse(pixel_x, pixel_y, pixel_radius);    
  }
}

function drawStamens(p5, x1, x2, y1, y2, x, y, z, pos_x, pos_y, rad1, rad2, drawLines) {
  const offsets = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]
  let noiseScale = 0.5;
  // let noiseX = p5.noise(x * noiseScale,
  //                       y * noiseScale, z);
  // rad2 = p5.map(noiseX, 0, 1, rad2*0.1, rad2);
  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  let pixel_radius = pixel_posx2 - pixel_posx1;

  for(var i=0; i<offsets.length; i++) {
    let offset = offsets[i];
    let pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    let pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.strokeWeight(0);
    p5.ellipse(pixel_x, pixel_y, pixel_radius);
    if(drawLines) {
      p5.strokeWeight(pixel_radius / 5);
      p5.line(pixel_x-pixel_radius, pixel_y, pixel_x+pixel_radius, pixel_y);
      p5.line(pixel_x, pixel_y-pixel_radius, pixel_x, pixel_y+pixel_radius);
      p5.strokeWeight(0);
      p5.ellipse(pixel_x, pixel_y, pixel_radius / 12);
    }  
  }
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

    /* For animation: updated z based on global frame count */
  // let dz = p5.globalFrameCount / 50.0;
  // z = z + dz;

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

  p5.background(169, 211, 255);
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

      /* red and green lines */
      // if (zoom < 2) {
      //   p5.strokeWeight(cur_line_width);
      //   p5.stroke(150, 0, 0);
      //   p5.line(x_pos, y_pos, x_pos_left, y_pos_left);
      //   p5.stroke(0, 150, 0);
      //   p5.line(x_pos, y_pos, x_pos_down, y_pos_down);
      // }

      if (zoom >= 10) {
        p5.fill(255);
        p5.noStroke();
        // drawPetals(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius, 4*line_width);        
      }

      p5.stroke(255);
      p5.fill(255);
      p5.noStroke();
      p5.ellipse(x_pos, y_pos, cur_ball_radius);

      if(zoom >= 3) {
        // now if we are super zoomed, draw lines in the stamen
        var drawLines = false;
        if (zoom >= 5) drawLines = true;
        p5.fill(255);
        p5.stroke(255);
        drawStamens(p5, x1, x2, y1, y2, x_pos, y_pos, z, shift_point[0], shift_point[1], ball_radius/3, line_width/2, drawLines);
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