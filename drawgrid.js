/*
 * This is the a class example of the abstract design framework.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */
//zoom: current zoom level (starts at 0), useful to decide how much detail to draw
const max_thickness = 5;
const grid_size = 250;
const line_width = 0;

const sm_grid_size = 4;
const sm_max_thickness = 150;

let do_animation = true;



/* the random number seed for the tour */
var tourSeed = 150;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 77.585937500000, -1577.542968750000],
  [1, 449.457031250000, 221.060546875000],
  [2, 425.336914062500, 327.905273437500],
  [3, 397.668457031250, 356.952636718750],
  [5, 412.682739257813, 394.581542968750],
  [6, 394.277038574219, 382.406372070313]
]


/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function CIRLCES(p5, x, y, x1, x2, y1, y2, z)  {

  p5.blendMode(p5.BLEND)
  p5.colorMode(p5.HSB, 360);

  let bounce = p5.sin(x + p5.globalFrameCount);
  let bounce2 = p5.sin(y + p5.globalFrameCount);

  let circle_x = p5.map(x, x1, x2, 0, 256);
  let circle_y = p5.map(y, y1, y2, 0, 256);
  let circle_origin_x = p5.map(0, x1, x2, 0, 256);
  let circle_offset = p5.map(20, x1, x2, 0, 256);
  let circle_radius = circle_offset - circle_origin_x;

  var colo1 = p5.map(circle_x,0,circle_y,270,150);
  var colo2 = p5.map(circle_y,0,circle_x,150,270);

  p5.strokeWeight(circle_radius);
  
  p5.push();
  p5.translate(0, bounce*200);
  p5.fill(colo1, 300, 360);
  p5.stroke(colo1, 300, 360);
  p5.ellipse(circle_x, circle_y, circle_radius);
  p5.pop();

  p5.push();
  p5.translate(bounce2*200, 0);
  p5.fill(colo2, 300, 360);
  p5.stroke(colo2, 300, 360);
  p5.ellipse(circle_x, circle_y, circle_radius);
  p5.pop();
 
}

function SQUARES(p5, x, y, x1, x2, y1, y2, z)  {

  p5.blendMode(p5.BLEND)
  p5.colorMode(p5.HSB, 360);
  p5.rectMode(p5.CENTER);

  let bounce = p5.sin(x + p5.globalFrameCount);
  let bounce2 = p5.sin(y + p5.globalFrameCount);

  let square_x = p5.map(x, x1, x2, 0, 256);
  let square_y = p5.map(y, y1, y2, 0, 256);
  let square_origin_x = p5.map(0, x1, x2, 0, 256);
  let square_offset = p5.map(20, x1, x2, 0, 256);
  let square_radius = square_offset - square_origin_x;

  var colo3 = p5.map(square_x,0,square_y,270,150);
  var colo4 = p5.map(square_y,0,square_x,150,270);

  p5.strokeWeight(square_radius);
  
  p5.push();
  p5.translate(0, bounce*200);
  p5.fill(colo3, 300, 360);
  p5.stroke(colo3, 300, 360);
  p5.rect(square_x, square_y, square_radius, square_radius);
  p5.pop();

  p5.push();
  p5.translate( bounce2*200, 0);
  p5.fill(colo4, 300, 360);
  p5.stroke(colo4, 300, 360);
  p5.rect(square_x, square_y, square_radius, square_radius);
  p5.pop();
 
}

function roundSQUARES(p5, x, y, x1, x2, y1, y2, z) {

  p5.blendMode(p5.BLEND)
  p5.colorMode(p5.HSB, 360);
  p5.rectMode(p5.CORNER);

  let bounce = p5.sin(x + p5.globalFrameCount);
  let bounce2 = p5.sin(y + p5.globalFrameCount);

  let square_x = p5.map(x, x1, x2, 0, 256);
  let square_y = p5.map(y, y1, y2, 0, 64);
  let square_origin_x = p5.map(1, x1, x2, 0, 256);
  let square_offset = p5.map(50, x1, x2, 0, 256);
  let square_radius = square_offset - square_origin_x;

  var colo5 = p5.map(square_x,0,square_y,270,200);

  p5.strokeWeight(square_radius);
  
  for (let i = 0; i < 3; i++) {

    p5.push();
    p5.translate(square_x, bounce*100);
    p5.fill(colo5, 300, 360);
    p5.stroke(colo5, 300, 360);
    p5.rect(square_x, square_y, square_radius, square_radius);
    p5.pop();

  }
}

// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;

  p5.angleMode(p5.DEGREES);
  p5.background(0,40);
  p5.noFill();
  p5.strokeWeight(cur_line_width);

  let max_shift = max_thickness;
  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);


  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {

        if (zoom < 2) {
          p5.push();
          CIRLCES(p5, x+150, y+160, x1, x2, y1, y2, z);
          p5.pop();
        }

        if (zoom > 1) {
          p5.push();
          SQUARES(p5, x+150, y+160, x1, x2, y1, y2, z)
          p5.pop();
        }

        if (zoom > 0 && zoom < 4) {
          p5.push();
          roundSQUARES(p5, x, y, x1, x2, y1, y2, z)
          p5.pop();
        }
      }
    }
  

  // //debug - show border
  // p5.push();
  // p5.noFill();
  // p5.stroke(255, 0, 0);
  // p5.strokeWeight(1);
  // p5.rect(0, 0, 255, 255);
  // p5.pop();
}