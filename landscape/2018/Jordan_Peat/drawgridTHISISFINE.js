let do_animation = true;

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


let angle = 0;
let speed = 0.4; // Default: 1  - EPILEPSY WARNING FOR ANYTHING ABOVE 1.5
let cellMultiply = 7; // Default: 0.5

const max_thickness = 64;
const ball_radius = 32;
const line_width = 8;
const grid_size = 64;
const max_movement = 16;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 512, 512],
  [1, 512, 512],
  [2, 512, 512],
  [3, 512, 512],
  [4, 512, 512],
  [6, 512, 512],
  [7, 512, 512]

]

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // temporary variables used for object placement
  let cx=0, cy=0, cx2=0, cy2=0;

  /* For animation: updated z based on global frame count */
  let dz = p5.globalFrameCount / 100.0;
  z = z + dz;


  p5.background(0,0,0, 80);
  p5.rectMode(p5.CORNERS);
  p5.noStroke();






  p5.colorMode(p5.HSB);
  p5.fill(10, 10, 10);

  if (zoom > 5){
    p5.fill(150, 360, 100);
    cx = p5.map(487, x1, x2, 0, 256);
    cy = p5.map(478, y1, y2, 0, 256);
    cx2 = p5.map(512-2, x1, x2, 0, 256);

    p5.push();
      p5.blendMode(p5.DIFFERENCE);

      p5.ellipse(cx, cy, (cx2-cx));
    p5.pop();
  }


  if (zoom > 0) {
    p5.fill(34, 10*zoom, 14*zoom);
    if (zoom > 14) {
      p5.fill(34, 0, 360);
    }
  }
  p5.colorMode(p5.RGB);


  let max_shift = max_thickness + max_movement;
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);



  // Eight circles differenced and offsetted by 10 relatively
  cx = p5.map(512, x1, x2, 0, 256);
  cy = p5.map(512, y1, y2, 0, 256);
  cx2 = p5.map(512+150, x1, x2, 0, 256);

  let smallrad = p5.map(10, x1,x2, 0 , 256);

      let density1 = 0.01;
      let density2 = 0.2;
      let density3 = 0.8;
      let divide = 1/(zoom*10);
      if (zoom == 0) {
        divide = 1;
      }

    	let offsetX = getRandomValue(p5, 200, 100, z, "shiftX", cx, cy, density1/divide);
      let offsetX2 = getRandomValue(p5, 200, 100, z, "offsetX2", cx, cy, density2/divide);
      let offsetX3 = getRandomValue(p5, 200, 100, z, "offsetX3", cx, cy, density3/divide);
      let offsetX4 = getRandomValue(p5, 1, 2, z, "offsetX4", cx, cy, density1);

      if (zoom >= 5){
        offsetX4 = getRandomValue(p5, 1, 2, z, "offsetX4", cx, cy, density1);  
      }
      if (zoom >= 6){
        offsetX4 = 100;
      }

      p5.push();
        p5.ellipse(offsetX, cy, (cx2-cx));
        p5.blendMode(p5.DIFFERENCE);
        p5.ellipse(offsetX2, cy, (cx2-cx));
        p5.ellipse(offsetX3, cy, (cx2-cx)+10);
      p5.pop();


      // smaller black "circles"
      if (zoom > 1){
        p5.push();
          p5.blendMode(p5.DIFFERENCE);
          p5.ellipse(offsetX4, cy, (cx2-cx)/100);
        p5.pop();
      }
      if(zoom == 7){
        p5.push();
          p5.textSize(100);
          p5.blendMode(p5.DIFFERENCE);
          p5.text('i hate mondays', cx, cy);
        p5.pop();
      }





  // // debug - show border
  // p5.noFill();
  // p5.stroke(100, 0, 0)
  // p5.rect(0, 0, 255, 255);
  // // debug - show coordinates
  // p5.text(x1 + "," + y1, 10, 20);
}

function getRandomValue(p5, x, y, z, name, min, max, scale) {
  let hashNumber = name.hashCode();
  let noiseVal = p5.noise(x * scale, y * scale, (z + hashNumber));
  return p5.map(noiseVal, 0, 1, min, max);
}