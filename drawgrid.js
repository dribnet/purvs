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

function circles(p5, x, y, x1, x2, y1, y2,z,zoom) {

 // let phase = getRandomValue(p5, pos_x, pos_y, z, "phase", 0, 2*p5.PI, 0.1);
 // let freq = getRandomValue(p5, pos_x, pos_y, z, "freq", 10, 50, 0.1);
 // let sineWave = p5.sin(phase + (p5.globalFrameCount / freq));
 let radiusScale = p5.map(sineWave, -1, 1, 0.80, 1.0);
 let sineWave = p5.sin((p5.globalFrameCount / 10);


 // then draw the eyes
  let eye_pos1_x = p5.map(x + -17.5, x1, x2, 0, 256);
  let eye_pos2_x = p5.map(x + 17.5, x1, x2, 0, 256);
  let eye_pos1_y = p5.map(y + -65, y1, y2, 0, 256);
  let newy = p5.map(y +88,y1, y2, 0, 256);



  let eye_pos1_origin_x = p5.map(0, x1, x2, 0, 256);
  let eye_pos1_offset1 = p5.map(35, x1, x2, 0, 256);

  let eye_pos_radius1 = eye_pos1_offset1 - eye_pos1_origin_x;

  p5.fill(255);
  p5.ellipse(eye_pos1_x, eye_pos1_y, eye_pos_radius1, eye_pos_radius1); // Left eye dome
  p5.ellipse(eye_pos2_x, newy, eye_pos_radius1, eye_pos_radius1); // Left eye dome



}

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.background(50, 50, 100);

  circles(p5, 512, 512, x1, x2, y1, y2,z,zoom);
  

  // debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);
}
