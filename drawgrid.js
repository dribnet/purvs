const max_thickness = 64;
const max_movement = 100;
const ball_radius = 150;
const line_width = 8;
const grid_size = 200;


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

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;

  p5.background(30);
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


      let sineWave = p5.sin(p5.globalFrameCount/20);
      let pulse = p5.map(sineWave, 1, -1, -50, 20);

      let sineWave2 = p5.sin(p5.globalFrameCount/10);
      let pulse2 = p5.map(sineWave2, 1, -1, -50, 20);

      let sineWave3 = p5.sin(p5.globalFrameCount/30);
      let pulse3 = p5.map(sineWave3, 1, -1, -20, 10);

      let sineWave4 = p5.sin(p5.globalFrameCount/15);
      let pulse4 = p5.map(sineWave4, 1, -1, -20, 10);


      if (zoom == 0) {
      p5.stroke(0);
      p5.strokeWeight(2);
      p5.fill(180, 0, 0, 30);
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
      p5.fill(0);
      p5.ellipse(x_pos, y_pos, cur_ball_radius/3.5);
      p5.beginShape();    
      }


      if (zoom == 1) {
        p5.fill(180, 0, 0, 60);
        p5.stroke(0);
        p5.strokeWeight(2);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.2 + pulse);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.5);
        p5.fill(0);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/4);      
      }

      if (zoom == 2) {
        p5.fill(180, 0, 0, 140);
        p5.stroke(0);
        p5.strokeWeight(2);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.2 + pulse);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.5);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.8);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/2.2 + pulse2);
        p5.fill(0);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/4 + pulse3);      

      }

     if (zoom == 3) {
        p5.fill(180, 0, 0, 60);
        p5.stroke(0);
        p5.strokeWeight(2);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.2 + pulse);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.5 + pulse3);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.8);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/2.2 + pulse2);
        p5.fill(0);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/4 + pulse3);      

      }

      if (zoom == 4) {
        // p5.background(255, 0, 0);
        p5.fill(180, 0, 0, 20);
        p5.stroke(0);
        p5.strokeWeight(2);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.2 + pulse);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.5 + pulse3);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/1.8);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/2.2 + pulse2);
        p5.fill(0);
        p5.stroke(180, 0, 0, 70);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/4 + pulse3); 
        p5.ellipse(x_pos, y_pos, cur_ball_radius/5 + pulse);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/6 + pulse3);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/7 + pulse2);
        p5.fill(180, 0, 0, 40);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/10 + pulse3);     

      }

      if (zoom == 5) {
        p5.fill(0);
        p5.stroke(180, 0, 0, 200);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/5 + pulse); 
        p5.ellipse(x_pos, y_pos, cur_ball_radius/6 + pulse3);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/7 + pulse);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/9 + pulse4);
        p5.fill(180, 0, 0, 80);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/12 + pulse3);     

      }


    }
  }

 
}
