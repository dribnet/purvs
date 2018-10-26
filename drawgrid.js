const max_thickness = 64;
const line_width = 2;
const grid_size = 64;
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

function brickWall(){

}

// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  //p5.background(255);

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
  p5.fill(0, 0, 128);
  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

      /* now draw all elements from back to front */
      p5.strokeWeight(cur_line_width);
      p5.stroke(0);
      //p5.fill(0,255,0);
      p5.line(x_pos, y_pos, x_pos_left, y_pos);
      p5.stroke(0, 150, 0);
      //p5.fill(255,0,0);
      p5.line(x_pos, y_pos, x_pos, y_pos_down);
    }
    p5.rect(0,0,200,20);
  }

  // for(let x=min_x; x<max_x; x+=grid_size) {
  //   for(let y=min_y; y<max_y; y+=grid_size) {

  //       if (zoom > 0) {
  //         p5.push();
          
  //         p5.pop();
  //       }
  //     }
  //   }


  


  // debug - show border

  p5.strokeWeight(1);
  p5.noFill();
  p5.stroke(255, 0, 0)
  p5.rect(0, 0, 255, 255);
  //p5.text("help", 10, 10);
  p5.text("corner: (" + x1 + "," + y1 + ")", 10,20);
  let sizex = x2-x1;
  p5.text("width:" + sizex, 10, 30);
}
