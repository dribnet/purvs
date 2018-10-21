const max_thickness = 64;
const ball_radius = 20;
const grid_size = 64;
let do_animation = true;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 460, 500],
  [3, 450, 410],
  [5, 447, 426],
  [3, 450, 410],
  [3, 450, 620]
]

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}



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
function circles(p5, x, y, x1, x2, y1, y2,z,zoom) {

 // let phase = getRandomValue(p5, pos_x, pos_y, z, "phase", 0, 2*p5.PI, 0.1);
 // let freq = getRandomValue(p5, pos_x, pos_y, z, "freq", 10, 50, 0.1);
 // let sineWave = p5.sin(phase + (p5.globalFrameCount / freq));
 // let radiusScale = p5.map(sineWave, -1, 1, 0.80, 1.0);


 // then draw the eyes
  let eye_pos1_x = p5.map(x + -17.5, x1, x2, 0, 256);
  let eye_pos2_x = p5.map(x + 17.5, x1, x2, 0, 256);
  let eye_pos1_y = p5.map(y + -0, y1, y2, 0, 256);
  let eye_pos2_y = p5.map(y +0,y1, y2, 0, 256);



  let eye_pos1_origin_x = p5.map(0, x1, x2, 0, 256);
  let eye_pos1_offset1 = p5.map(35, x1, x2, 0, 256);

  let eye_pos_radius1 = eye_pos1_offset1 - eye_pos1_origin_x;

  p5.fill(255);
  p5.ellipse(eye_pos1_x, eye_pos1_y, eye_pos_radius1, eye_pos_radius1); // Left eye dome
  p5.ellipse(eye_pos2_x, eye_pos2_y, eye_pos_radius1, eye_pos_radius1); // Left eye dome
}



function drawCircle(p5, x, y, x1, x2, y1, y2,z,zoom)  {
  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_ball_radius = c_pball - c_p00;


  /* first compute the points to be drawn */
  let x_pos = p5.map(x, x1, x2, 0, 256);
  let y_pos = p5.map(y, y1, y2, 0, 256);

  let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
  let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

  //Sinwave width shift
  var wave_x = p5.map(p5.sin(angle*speed), -1, 1, -x_pos, x_pos);         
  console.log(wave_x);
  /* now draw all elements from back to front */
  p5.push();
    p5.blendMode(p5.DIFFERENCE);
    p5.fill(255, 0, 0);
    p5.ellipse(x_pos, y_pos, cur_ball_radius);
    p5.fill(0, 255, 0);
    p5.ellipse(x_pos+20, y_pos, cur_ball_radius);
    p5.fill(0, 0, 255);
    p5.ellipse(x_pos+40, y_pos, cur_ball_radius);      
  p5.pop(); 
}


// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;

  /* For animation: updated z based on global frame count */
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;


  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);


  p5.background(0);

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      drawCircle(p5, x, y, x1, x2, y1, y2, z, zoom);
    }
  }


  

  // debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);
}
