// /*
//  * This is the function to implement to make your own abstract design.
//  *
//  * arguments:
//  * p5: the p5.js object - all draw commands should be prefixed with this object
//  * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
//  * z: use this as the noise z offset (can be shifted)
//  * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
//  *
//  * The destination drawing should be in the square 0, 0, 255, 255.
//  */


// /* the random number seed for the tour */
// var tourSeed = 301;
// /* triplets of locations: zoom, x, y */
// var tourPath = [
//   [2, 512, 512],
//   [4, 512, 512],
//   [6, 512, 512]
// ]

// function circles(p5, x, y, x1, x2, y1, y2){
//   let circleX = p5.map(512, x1, x2, 0, 256);
//   let circleY = p5.map(512, y1, y2, 0, 200);
//   let circleR = p5.map(512, x1, x2, 0, 256);

//   p5.stroke(255);
//   p5.fill(0, 200, 200);
//   p5.ellipse(circleX, circleY, circleR);    
  
// }
// // This version draws two rectangles and two ellipses.
// // The rectangles are 960x720 and centered at 512,512.
// function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
//   p5.background(255);
//   for(int i = 0; i < 3; i++){
//     circles(p5, 312, 512, x1, x2, y1, y2);
//   }
//   // circles(p5, 612, 512, x1, x2, y1, y2);
//   // debug - show border
//   p5.noFill();
//   p5.stroke(0, 200, 200)
//   p5.rect(0, 0, 255, 255);
//   p5.ellipse(25, 25, 50, 50);
// }

const max_thickness = 64;
const max_movement = 16;
const ball_radius = 32;
const line_width = 8;
const grid_size = 64;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 356.500000000000, 665.750000000000],
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
  let max_shift = max_thickness + max_movement;

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);


  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  let cur_ball_radius = c_pball - c_p00;

 // p5.background(255);
 //background colours from light blue to dark blue
  if(zoom <= 1){
    p5.background(210, 250, 255);
  }
  else if(zoom <= 3){
    p5.background(160, 220, 255);
  }
  else if(zoom <= 5){
    p5.background(100, 150, 225);
  }
  else{
    p5.background(20, 50, 120);
  }

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      // First compute shifted point in grid
      let offsetX = getRandomValue(p5, x, y, z, "shiftX", -max_movement, max_movement, 0.1);
      let offsetY = getRandomValue(p5, x, y, z, "shiftY", -max_movement, max_movement, 0.1);
      let shifted_x = x + offsetX;
      let shifted_y = y + offsetY;
      let x_pos = p5.map(shifted_x, x1, x2, 0, 256);
      let y_pos = p5.map(shifted_y, y1, y2, 0, 256);


      if(zoom <= 1){
        p5.stroke(100, 250, 100);
        p5.noFill();
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
      }
      else if(zoom <= 3){
        p5.stroke(250, 200, 0);
        p5.noFill();
        p5.ellipse(x_pos, y_pos, cur_ball_radius-200);
      }
      else if(zoom <= 5){
        p5.stroke(250, 250, 100);
        p5.noFill();
        p5.ellipse(x_pos, y_pos, cur_ball_radius-200);
      }
      else{
        p5.stroke(230, 230, 230);
        // p5.noFill();
        // p5.ellipse(x_pos, y_pos, cur_ball_radius/4);
        p5.fill(255);
        for(let i = 0; i < 20; i++){
          p5.ellipse(i, i, i);
          p5.ellipse(i+50, i+20, i);
          //i++;
          //p5.ellipse();
        }
      }
    }
  }
  // debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.rect(0, 0, 255, 255);
//  p5.ellipse(25, 25, 50, 50);

}

///global frame count with siine wave for colours