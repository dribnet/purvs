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

colourList = ["#1798C4", "#6DCF00", "#FA3F00", "#F8FF00"];

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.background(50);

  // Two ellipses with a radius of 50 units are then added.
  var cx = p5.map(512, x1, x2, 0, 256);
  var cy = p5.map(512, y1, y2, 0, 256);
  var cx2 = p5.map(512+50, x1, x2, 0, 256);
  p5.fill(colourList[0]);
  p5.ellipse(cx, cy, (cx2-cx));

  // The second green ellipse is above and to the left of the first one.
  var cx = p5.map(412, x1, x2, 0, 256);
  var cy = p5.map(412, y1, y2, 0, 256);
  var cx2 = p5.map(412+50, x1, x2, 0, 256);
  p5.fill(colourList[1]);
  p5.ellipse(cx, cy, (cx2-cx));
}
