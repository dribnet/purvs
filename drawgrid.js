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
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
// temporary variables used for object placement
  let cx=0, cx2=0, cx3=0,cx4 = 0, cx5 = 0, cx_line = 0, cx_line_2 =0;
  let  cy=0, cy2 = 0, cy3 = 0, cy4 = 0, cy5 = 0, cy_line = 0, cy_line_2 = 0, cy_line_3 = 0, cy_line_4 = 0;

  p5.background(255);
  p5.rectMode(p5.CORNERS);

  // // The first red rectangle fills the entire space
  // cx = p5.map(512-960/2, x1, x2, 0, 256);
  // cy = p5.map(512-720/2, y1, y2, 0, 256);
  // cx2 = p5.map(512+960/2, x1, x2, 0, 256);
  // cy2 = p5.map(512+720/2, y1, y2, 0, 256);
  // p5.fill(255, 0, 0);
  // p5.rect(cx, cy, cx2, cy2);

  // // The second black rectangle is inset to form a frame inset by 20 units
  // cx = p5.map(512-940/2, x1, x2, 0, 256);
  // cy = p5.map(512-700/2, y1, y2, 0, 256);
  // cx2 = p5.map(512+940/2, x1, x2, 0, 256);
  // cy2 = p5.map(512+700/2, y1, y2, 0, 256);
  // p5.fill(0);
  // p5.rect(cx, cy, cx2, cy2);

  // // Two ellipses with a radius of 50 units are then added.
  // cx = p5.map(512, x1, x2, 0, 256);
  // cy = p5.map(512, y1, y2, 0, 256);
  // cx2 = p5.map(512+50, x1, x2, 0, 256);
  // p5.fill(0, 0, 255);
  // p5.ellipse(cx, cy, (cx2-cx));

  // // The second green ellipse is above and to the left of the first one.
  // cx = p5.map(412, x1, x2, 0, 256);
  // cy = p5.map(412, y1, y2, 0, 256);
  // cx2 = p5.map(412+50, x1, x2, 0, 256);
  // p5.fill(0, 255, 0);
  // p5.ellipse(cx, cy, (cx2-cx));
  p5.strokeWeight(2);
  p5.stroke(0,0,255);

  //1st line
  cy_line = p5.map(600, y1, y2, 0, 256);
  cy_line_2 = p5.map(650, y1, y2, 0, 256);
  cy_line_3 = p5.map(700, y1, y2, 0, 256);
  cy_line_4 = p5.map(550, y1, y2, 0, 256);
  cx_line= p5.map(0, x1, x2, 0, 256);
  cx_line_2 = p5.map(0, x1, x2, 0, 256);
  p5.line(cx_line,cy_line,cx_line_2,cy_line_2);
  //2nd line
  p5.line(cx_line,cy_line_2,cx_line_2,cy_line_3);
  //3rd line
  //p5.line(cx_line,cy_line, cx_line_2, cy_line_4);

  //1st quad
  cy = p5.map(610, y1, y2, 0, 256);
  cy2 = p5.map(650, y1, y2, 0, 256);
  cy3 = p5.map(690, y1, y2, 0, 256);
  cx = p5.map(100, x1, x2, 0, 256);
  cx2 = p5.map(50, x1, x2, 0, 256);
  cx3 = p5.map(150, x1, x2, 0, 256);
  p5.quad(cx, cy, cx2, cy2, cx, cy3, cx3, cy2);

  //2nd quad
  cy4 = p5.map(600, y1, y2, 0, 256);
  //cy5 = p5.map(600, y1, y2, 0, 256);
  cx4 = p5.map(30, x1, x2, 0, 256);
  cx5 = p5.map(170, x1, x2, 0, 256);
  //cx6 = p5.map(90, x1, x2, 0, 256);

  //topline
  p5.line(cx4, cy4, cx,cy);
  p5.line(cx5 , cy4 , cx, cy);


  //bottomline 
  cy5 = p5.map(700, y1, y2, 0, 256);
  p5.line(cx4, cy5, cx, cy3);
  p5.line(cx5, cy5, cx, cy3);
  // debug - show border
  // p5.noFill();
  //p5.stroke(255, 0, 0)
  //p5.rect(0, 0, 255, 255);
}
