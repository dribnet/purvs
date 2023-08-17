const max_thickness = 64;
const max_movement = 16;
const ball_radius = 3;
const line_width = 8;
const grid_size = 20;
const maxLevel = 4;
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


function  drawLine(p5, x1, x2, y1, y2, x, y, z, pos_x, pos_y, rad1, rad2, drawLines) {
  const offsets = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]

  let x1_pos = p5.map(x, x1, x2, 0, 256);
  let x2_pos = p5.map(x, x1, x2, 0, 256);
  let y1_pos = p5.map(y, y1, y2, 0, 256);
  let y2_pos = p5.map(y+20, y1, y2, 0, 256);

  p5.stroke(255);
  p5.strokeWeight(2);  
  p5.line(x1_pos, y1_pos, x2_pos, y2_pos);
  

}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
 let max_shift = max_thickness + max_movement;

     //For animation: updated z based on global frame count 
  // let dz = p5.globalFrameCount / 50.0;
  // z = z + dz;

  p5.background(169, 211, 255);

  // push();
  // translate(width/2, height/2);
  for (let i = 0; i < 6; i++) {
  }

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);


  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;

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




// ZOOM 

      if (zoom >= 2) {
        p5.fill(255);
        p5.noStroke();
        // drawLine(p5, x, y, x1, x2, y1, y2);
        drawLine(p5, x1, x2, y1, y2, x_pos, y_pos, z, shift_point[0], shift_point[1], ball_radius/6, line_width/2, drawLines);

      }

      p5.stroke(255);
      p5.fill(255);
      p5.noStroke();
      p5.ellipse(x_pos, y_pos, cur_ball_radius);

      if(zoom >= 3) {
        var drawLines = false;
        if (zoom >= 4) drawLines = true;



      }
    }
  }

}