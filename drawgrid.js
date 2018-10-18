

const max_thickness = 64;
const ball_radius = 32;
const line_width = 15;
const grid_size = 100;
let do_animation = true;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 479, 401],
  [2, 479, 401],
  [3, 531.617431640625, 483.632080078125]
]

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}
//for big wave without animation
function waveform (p5, x, y, x1, x2, y1, y2){
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
}
function smallWave (p5, x, y, x1, x2, y1, y2){
  //share same y for 2nd pt
  let y_small_2 = p5.map(y - 20, y1, y2, 0, 256);
  //share 1st and 2nd (left side)
  let x_small = p5.map(x - 15, x1, x2, 0, 256);
  let y_small = p5.map(y - 32.5, y1, y2, 0, 256);
  let y_small_3 = p5.map(y - 7.5, y1, y2, 0, 256);
  let x_small_2 = p5.map(x, x1, x2, 0, 256);
  p5.line(x_small, y_small, x_small_2, y_small_2);
  p5.line(x_small, y_small_3, x_small_2, y_small_2);

  //share 3rd and 4th (left side)
  let x_small_3 = p5.map(x - 26, x1, x2, 0, 256);
  let y_small_4 = p5.map(y - 13, y1, y2, 0, 256);
  let x_small_4 = p5.map(x - 17, x1, x2, 0, 256);
  let y_small_5 = p5.map(y - 27, y1, y2, 0, 256);
  p5.line(x_small_3, y_small_4, x_small_4, y_small_2);
  p5.line(x_small_3, y_small_5, x_small_4, y_small_2);

  //share 5th and 6th (left side)
  let x_small_5 = p5.map(x - 35, x1, x2, 0, 256);
  let y_small_6 = p5.map(y - 17.5, y1, y2, 0, 256);
  let x_small_6 = p5.map(x - 30, x1, x2, 0, 256);
  let y_small_7 = p5.map(y - 22.5, y1, y2, 0, 256);
  p5.line(x_small_5, y_small_6, x_small_6, y_small_2);
  p5.line(x_small_5, y_small_7, x_small_6, y_small_2);

  
}
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  //setting another variable for animation
  p5.angleMode(p5.DEGREES);
  let SpringValue = p5.sin(p5.globalFrameCount * 2);
  //let SpringValue_2 = p5.cos(p5.globalFrameCount * 2);
  //map the changing value
  sinx = p5.map(SpringValue, -1 , 1, 10, 50);
  sinx_2 = p5.map(SpringValue, 1, -1, 10, 50)
  siny = p5.map(SpringValue, -1 , 1, 0, 30);
  siny_2 = p5.map(SpringValue, 1 , -1, -30, 0);

  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);;
  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;


  p5.background(255);
  //p5.fill(0, 0, 128);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      if (zoom < 2){
       //x = p5.map(curValue, -1 , 1, x1, x2);
          let x_pos = p5.map(x, x1, x2, 0, 256);
          let y_pos = p5.map(y + siny, y1, y2, 0, 256);
          let x_pos_2 = p5.map(x + sinx, x1, x2, 0, 256);
          let y_pos_2 = p5.map(y + 30, y1, y2, 0, 256);
          let x_pos_3 = p5.map(x - sinx, x1, x2, 0, 256);
          let y_pos_3 = p5.map(y + 60 + siny_2, y1, y2, 0, 256);
          p5.quad(x_pos, y_pos, x_pos_3, y_pos_2, x_pos, y_pos_3, x_pos_2, y_pos_2);

          //for top lines
          let x_pos_line = p5.map(x + sinx_2, x1, x2, 0, 256);
          let x_pos_line_2 = p5.map(x - sinx_2, x1, x2, 0, 256);
          let y_pos_line = p5.map(y - 20, y1, y2, 0, 256);
          p5.line(x_pos, y_pos, x_pos_line, y_pos_line);
          p5.line(x_pos, y_pos, x_pos_line_2, y_pos_line);

          //for bottom lines
          let y_pos_line_2 = p5.map(y + 80, y1, y2, 0, 256);
          p5.line(x_pos, y_pos_3, x_pos_line, y_pos_line_2);
          p5.line(x_pos, y_pos_3, x_pos_line_2, y_pos_line_2);

      }
      if(zoom >= 2){
          waveform(p5, x, y, x1, x2, y1, y2);
      }
      if(zoom >= 3){
          smallWave(p5, x, y, x1, x2, y1, y2);
          //p5.rect(10,10,10,10);
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
