//---- VALUES ---- VALUES ---- VALUES ---- VALUES ---- VALUES ----//

const max_thickness = 64;
const line_width = 2;
const grid_size = 128;
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
 /* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

// global positions

function brickWall(p5, x, y, x1, x2, y1, y2){
  let brick_x = p5.map(x, x1, x2, 0, 256);
  let brick_y = p5.map(y, y1, y2, 0, 256);
  let brick_origin = p5.map(0, x1, x2, 0,256);
  let brick_offset_x = p5.map(grid_size/3, x1, x2, 0,256);
  let brick_offset_y = p5.map(grid_size/10, x1, x2, 0,256);
  let brick_w = brick_offset_x - brick_origin;
  let brick_h = brick_offset_y - brick_origin;

  var odd = true;
  var brick_start = 0;

  p5.rect (brick_x, brick_y, brick_w, brick_h);
  p5.rect (brick_x + brick_w, brick_y,brick_w,brick_h);
  p5.rect (brick_x + brick_w*2, brick_y, brick_w, brick_h);

  p5.push();
  p5.translate(-1 * (brick_w/2), 0);
  p5.rect (brick_x, brick_y + brick_h, brick_w, brick_h);
  p5.rect (brick_x + brick_w, brick_y + brick_h,brick_w, brick_h);
  p5.rect (brick_x + brick_w*2, brick_y + brick_h, brick_w, brick_h);
  p5.pop();

  p5.rect (brick_x, brick_y + (brick_h * 2), brick_w, brick_h);
  p5.rect (brick_x + brick_w, brick_y + (brick_h * 2),brick_w,brick_h);
  p5.rect (brick_x + brick_w*2, brick_y + (brick_h * 2), brick_w, brick_h);

  p5.push();
  p5.translate(-1 * (brick_w/2), 0);
  p5.rect (brick_x, brick_y + (brick_h * 3), brick_w, brick_h);
  p5.rect (brick_x + brick_w, brick_y + (brick_h * 3),brick_w, brick_h);
  p5.rect (brick_x + brick_w*2, brick_y + (brick_h * 3), brick_w, brick_h);
  p5.pop();

  p5.rect (brick_x, brick_y + (brick_h * 4), brick_w, brick_h);
  p5.rect (brick_x + brick_w, brick_y + (brick_h * 4),brick_w,brick_h);
  p5.rect (brick_x + brick_w*2, brick_y + (brick_h * 4), brick_w, brick_h);

  p5.push();
  p5.translate(-1 * (brick_w/2), 0);
  p5.rect (brick_x, brick_y + (brick_h * 5), brick_w, brick_h);
  p5.rect (brick_x + brick_w, brick_y + (brick_h * 5),brick_w, brick_h);
  p5.rect (brick_x + brick_w*2, brick_y + (brick_h * 5), brick_w, brick_h);
  p5.pop();

  p5.rect (brick_x, brick_y + (brick_h * 6), brick_w, brick_h);
  p5.rect (brick_x + brick_w, brick_y + (brick_h * 6),brick_w,brick_h);
  p5.rect (brick_x + brick_w*2, brick_y + (brick_h * 6), brick_w, brick_h);

  p5.push();
  p5.translate(-1 * (brick_w/2), 0);
  p5.rect (brick_x, brick_y + (brick_h * 7), brick_w, brick_h);
  p5.rect (brick_x + brick_w, brick_y + (brick_h * 7),brick_w, brick_h);
  p5.rect (brick_x + brick_w*2, brick_y + (brick_h * 7), brick_w, brick_h);
  p5.pop();

  p5.rect (brick_x, brick_y + (brick_h * 8), brick_w, brick_h);
  p5.rect (brick_x + brick_w, brick_y + (brick_h * 8),brick_w,brick_h);
  p5.rect (brick_x + brick_w*2, brick_y + (brick_h * 8), brick_w, brick_h);

  p5.push();
  p5.translate(-1 * (brick_w/2), 0);
  p5.rect (brick_x, brick_y + (brick_h * 9), brick_w, brick_h);
  p5.rect (brick_x + brick_w, brick_y + (brick_h * 9),brick_w, brick_h);
  p5.rect (brick_x + brick_w*2, brick_y + (brick_h * 9), brick_w, brick_h);
  p5.pop();
}

function WindowSill(p5, x, y, x1, x2, y1, y2){
  let windowSill_x = p5.map(x, x1, x2, 0, 256);
  let windowSill_y = p5.map(y, y1, y2, 0, 256);
  let windowSill_origin = p5.map(0, x1, x2, 0,256);
  let windowSill_offset_x = p5.map(grid_size, x1, x2, 0,256);
  let windowSill_offset_y = p5.map(grid_size * 1.3, x1, x2, 0,256);
  let windowSill_w = windowSill_offset_x - windowSill_origin;
  let windowSill_h = windowSill_offset_y - windowSill_origin;
  let window_sil = p5.map(grid_size/10, x1, x2, 0, 256);

  // window sill

  p5.rect(windowSill_x, windowSill_y, windowSill_w, windowSill_h); 

  // corner of window sill 

  let corner_x1 = p5.map(x + 0, x1, x2, 0, 256); 
  let corner_y1 = p5.map(y + grid_size * 1.3, y1, y2, 0, 256);
  let corner_x2 = p5.map(x + grid_size/10, x1, x2, 0, 256); 
  let corner_y2 = p5.map(y + grid_size * 1.2, y1, y2, 0, 256);

  p5.line(corner_x1, corner_y1, corner_x2, corner_y2);
}

function Window(p5, x, y, x1, x2, y1, y2){
  let window_x = p5.map(x, x1, x2, 0, 256);
  let window_y = p5.map(y, y1, y2, 0, 256);
  let window_origin = p5.map(0 + grid_size/10, x1, x2, 0,256);
  let window_offset_x = p5.map(grid_size, x1, x2, 0,256);
  let window_offset_y = p5.map(grid_size * 1.3, x1, x2, 0,256);
  let window_w = window_offset_x - window_origin;
  let window_h = window_offset_y - window_origin;
  let window_sil = p5.map(grid_size/10, x1, x2, 0, 256);

  p5.fill(0);
  p5.rect(window_x, window_y, window_w, window_h); //window 
}

function Moon(p5, x, y, x1, x2, y1, y2){
  let moon_x = p5.map(x + grid_size/ 2.5, x1, x2, 0, 256);
  let moon_y = p5.map(y + grid_size/ 4, y1, y2, 0, 256);
  let moon_x2 = p5.map(x + grid_size/ 2.2, x1, x2, 0, 256);

  let moon_origin = p5.map(0, x1, x2, 0, 256); 
  let moon_offset = p5.map(30, x1, x2, 0, 256);
  let moon_radius = moon_offset - moon_origin;

  p5.fill(255);
  p5.ellipse(moon_x, moon_y, moon_radius, moon_radius);
  p5.fill(0);
  p5.ellipse(moon_x2, moon_y, moon_radius, moon_radius); // moon shadow
}

// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  //p5.background(255);


  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness;
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;

  p5.background(255);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      // let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      // let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

      /* now draw all elements from back to front */

      if (zoom == 0) {
        p5.push();
        p5.strokeWeight(1);
        brickWall(p5, x, y, x1, x2, y1, y2);
        WindowSill(p5, grid_size, grid_size, x1, x2, y1, y2);
        Window(p5, grid_size * 1.1, grid_size, x1, x2, y1, y2);
        p5.pop();
      }

      if (zoom >= 1) {
        p5.push();
        p5.strokeWeight(2);
        brickWall(p5, x, y, x1, x2, y1, y2);
        WindowSill(p5, grid_size, grid_size, x1, x2, y1, y2);
        Window(p5, grid_size * 1.1, grid_size, x1, x2, y1, y2);
        Moon(p5, grid_size, grid_size, x1, x2, y1, y2);
        p5.pop();
      }
      
    }
    
  }



  // debug - show border //
  // p5.strokeWeight(1);
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
  // //p5.text("help", 10, 10);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10,20);
  // let sizex = x2-x1;
  // p5.text("width:" + sizex, 10, 30);
}
