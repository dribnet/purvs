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


/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 512, 512],
  [3, 511.73, 504.6],
  [6, 487, 478],
  [8, 483, 485.0625],
  [14, 483.006906628609, 485.131625367165],
  [15, 483.006906628609, 485.131625367165]
]

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // temporary variables used for object placement
  let cx=0, cy=0, cx2=0, cy2=0;

  p5.background(0);
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
    p5.fill(34, 8*zoom, 12*zoom);
    if (zoom > 14) {
      p5.fill(34, 0, 360);
    }
  }
  p5.colorMode(p5.RGB);





  // Eight circles differenced and offsetted by 10 relatively
  cx = p5.map(512, x1, x2, 0, 256);
  cy = p5.map(512, y1, y2, 0, 256);
  cx2 = p5.map(512+200, x1, x2, 0, 256);

  p5.push();
    p5.blendMode(p5.DIFFERENCE);
    p5.ellipse(cx, cy, (cx2-cx));
  p5.pop();

  p5.push();
    p5.blendMode(p5.DIFFERENCE);
    cx = p5.map(512+5, x1, x2, 0, 256);
    p5.ellipse(cx, cy, (cx2-cx));
  p5.pop();

  p5.push();
    p5.blendMode(p5.DIFFERENCE);
    cx = p5.map(512+15, x1, x2, 0, 256);
    p5.ellipse(cx, cy, (cx2-cx));
  p5.pop();

  p5.push();
    p5.blendMode(p5.DIFFERENCE);
    cx = p5.map(512+30, x1, x2, 0, 256);
    p5.ellipse(cx, cy, (cx2-cx));
  p5.pop();

  p5.push();
    p5.blendMode(p5.DIFFERENCE);
    cx = p5.map(512+45, x1, x2, 0, 256);
    p5.ellipse(cx, cy, (cx2-cx));
  p5.pop();

  p5.push();
    p5.blendMode(p5.DIFFERENCE);
    cx = p5.map(512+60, x1, x2, 0, 256);
    p5.ellipse(cx, cy, (cx2-cx));
  p5.pop();

  p5.push();
    p5.blendMode(p5.DIFFERENCE);
    cx = p5.map(512+85, x1, x2, 0, 256);
    p5.ellipse(cx, cy, (cx2-cx));
  p5.pop();

  p5.push();
    p5.blendMode(p5.DIFFERENCE);
    cx = p5.map(512+110, x1, x2, 0, 256);
    p5.ellipse(cx, cy, (cx2-cx));
  p5.pop();


  // debug - show border
  // p5.noFill();
  // p5.stroke(100, 0, 0)
  // p5.rect(0, 0, 255, 255);
  // // debug - show coordinates
  // p5.text(x1 + "," + y1, 10, 20);
}
