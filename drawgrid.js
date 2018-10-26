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
const max_thickness = 64;
const line_width = 8;
const grid_size = 64;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]


const backgrnd = "#105B63";
const lines = "#DB9E36";
const fillColour = "#FFD34E";
const lineWidth = 20;

/*let ballx = 400;
let bally = 400;
let ballr = 400;

let point1x = 0;
let point1y = 0;
let point2x = 256;
let point2y = 384;
let point3x = 512;
let point3y = 0;*/

//X values
let Gx383 = 383;
let Gx255 = 255;
let Gx128 = 128;
let Gx0 = 0;
let GNEGx128 = -128

//Y values

let Gy255 = 255;
let Gy235 = 235;
let Gy215 = 215;
let Gy195 = 195;
let Gy40 = 40;
let Gy20 = 20;
let Gy0 = 0;


/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}



// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  p5.background(backgrnd);

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
  let c_plwidth = p5.map(lineWidth, x1, x2, 0, 256);
  let strokeWidth = c_plwidth - c_p00;

  p5.strokeWeight(strokeWidth);  
  p5.stroke (lines);
  p5.fill(255, 211, 78, 50);
  p5.stroke (lines); //noStroke();

  /*let localBallX = p5.map(ballx, x1, x2, 0, 256);
  let localBallY = p5.map(bally, y1, y2, 0, 256);
  let localBallXEdge = p5.map(ballx + ballr, x1, x2, 0, 256);
  let localBallRadius = localBallXEdge - localBallX;*/


  /*let localpoint1x = p5.map(point1x, x1, x2, 0, 256);
  let localpoint1y = p5.map(point1y, y1, y2, 0, 256);
  let localpoint2x = p5.map(point2x, x1, x2, 0, 256);
  let localpoint2y = p5.map(point2y, y1, y2, 0, 256);
  let localpoint3x = p5.map(point3x, x1, x2, 0, 256);
  let localpoint3y = p5.map(point3y, y1, y2, 0, 256);

  p5.beginShape();
  p5.curveVertex(localpoint1x, localpoint1y);
  p5.curveVertex(localpoint1x, localpoint1y);
  p5.curveVertex(localpoint2x, localpoint2y);
  p5.curveVertex(localpoint3x, localpoint3y);
  p5.curveVertex(localpoint3x, localpoint3y);
  p5.endShape();*/


  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute the points to be drawn */
      let x_pos = p5.map(x, x1, x2, 0, 256);
      let y_pos = p5.map(y, y1, y2, 0, 256);

      let x_pos_left = p5.map(x+grid_size, x1, x2, 0, 256);
      let y_pos_down = p5.map(y+grid_size, y1, y2, 0, 256);

      //
      let x383 = p5.map(Gx383, x1, x2, 0, 256);
      let x255 = p5.map(Gx255, x1, x2, 0, 256);
      let x128 = p5.map(Gx128, x1, x2, 0, 256);
      let x0 = p5.map(Gx0, x1, x2, 0, 256);
      let NEGx128 = p5.map(GNEGx128, x1, x2, 0, 256);



      //Y values

      let y255 = p5.map(Gy255, x1, x2, 0, 256);
      let y235 = p5.map(Gy235, x1, x2, 0, 256);
      let y215 = p5.map(Gy215, x1, x2, 0, 256);
      let y195 = p5.map(Gy195, x1, x2, 0, 256);
      let y40 = p5.map(Gy40, x1, x2, 0, 256);
      let y20 = p5.map(Gy20, x1, x2, 0, 256);
      let y0 = p5.map(Gy0, x1, x2, 0, 256);

      /*let x383 = p5.map((3*grid_size/2), x1, x2, 0, 256);
      let x255 = p5.map(grid_size, x1, x2, 0, 256);
      let x128 = p5.map((grid_size/2), x1, x2, 0, 256);
      let x0 = p5.map(x, x1, x2, 0, 256);
      let NEGx128 = p5.map((-1*grid_size/2), x1, x2, 0, 256);



      //Y values

      let y255 = p5.map(grid_size, x1, x2, 0, 256);
      let y235 = p5.map((grid_size - (grid_size/10)), x1, x2, 0, 256);
      let y215 = p5.map((grid_size - (2*grid_size/10)), x1, x2, 0, 256);
      let y195 = p5.map((grid_size - (3*grid_size/10)), x1, x2, 0, 256);
      let y40 = p5.map((2*grid_size/10), x1, x2, 0, 256);
      let y20 = p5.map((grid_size/10), x1, x2, 0, 256);
      let y0 = p5.map(y, x1, x2, 0, 256);*/

      /* now draw all elements from back to front */
      p5.beginShape();
      p5.curveVertex(NEGx128, y215);
      p5.curveVertex(x0, y0);
      p5.curveVertex(x128, y195);
      p5.curveVertex(x255, y0);
      p5.curveVertex(x383, y215);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y235);
      p5.curveVertex(x0, y20);
      p5.curveVertex(x128, y215);
      p5.curveVertex(x255, y20);
      p5.curveVertex(x383, y235);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y255);
      p5.curveVertex(x0, y40);
      p5.curveVertex(x128, y235);
      p5.curveVertex(x255, y40);
      p5.curveVertex(x383, y255);
      p5.endShape();

      p5.beginShape();
      p5.curveVertex(NEGx128, y0);
      p5.curveVertex(x0, y255);
      p5.curveVertex(x128, y40);
      p5.curveVertex(x255, y255);
      p5.curveVertex(x383, y40);
      p5.endShape();
    }
  }

  /*
  //
  p5.beginShape();
  p5.curveVertex(-128, 215);
  p5.curveVertex(0, 0);
  p5.curveVertex(128, 195);
  p5.curveVertex(255, 0);
  p5.curveVertex(384, 215);
  p5.endShape();

  p5.beginShape();
  p5.curveVertex(-128, 235);
  p5.curveVertex(0, 20);
  p5.curveVertex(128, 215);
  p5.curveVertex(255, 20);
  p5.curveVertex(384, 235);
  p5.endShape();

  p5.beginShape();
  p5.curveVertex(-128, 256);
  p5.curveVertex(0, 40);
  p5.curveVertex(128, 235);
  p5.curveVertex(256, 40);
  p5.curveVertex(384, 256);
  p5.endShape();

  p5.beginShape();
  p5.curveVertex(-128, 0);
  p5.curveVertex(0, 256);
  p5.curveVertex(128, 40);
  p5.curveVertex(255, 256);
  p5.curveVertex(384, 40);
  p5.endShape();*/
 
  /*for(let i = 0; i<10; i++){
    //let shade = 255 / (i+1);
    let currentR = p5.map(i, 0, 9, localBallRadius, 0);
    //p5.fill(0, 0, shade);
    p5.ellipse(localBallX, localBallY, currentR);
  } */
 
  	//p5.line(0, 0, 255, 255);

  //debug - show border
  p5.noFill();
  p5.strokeWeight(1);
  p5.stroke(255, 0, 0)
  p5.rect(0, 0, 255, 255);
  p5.textSize(12);
  p5.text('(' + x1 + ", " + y1 + ")", 10, 30);
}
