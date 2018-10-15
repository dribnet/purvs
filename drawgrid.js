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
var tourSeed = 301; // index.html#number when you start the tour it is exactly what random numbers are used.
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

// global positions

// function owl(p5, x, y, x1, x2, y1, y2) {
//   p5.stroke(0);

//   // first draw the body
//   let line_x0 = p5.map(x + 0, x1, x2, 0, 256);
//   let line_x_offset = p5.map(x + 70, x1, x2, 0, 256);
//   let x_strokewidth = line_x_offset - line_x0;
//   let line_y1 = p5.map(y + -35, y1, y2, 0, 256);
//   let line_y2 = p5.map(y + -65, y1, y2, 0, 256);

//   p5.strokeWeight(x_strokewidth);
//   p5.line(line_x0, line_y1, line_x0, line_y2);
//   p5.noStroke();

//   // then draw the eyes
//   let eye_pos1_x = p5.map(x + -17.5, x1, x2, 0, 256);
//   let eye_pos2_x = p5.map(x + 17.5, x1, x2, 0, 256);
//   let eye_pos1_y = p5.map(y + -65, y1, y2, 0, 256);

//   let eye_pos1_origin_x = p5.map(0, x1, x2, 0, 256);
//   let eye_pos1_offset1 = p5.map(35, x1, x2, 0, 256);
//   let eye_pos_radius1 = eye_pos1_offset1 - eye_pos1_origin_x;

//   p5.fill(255);
//   p5.ellipse(eye_pos1_x, eye_pos1_y, eye_pos_radius1, eye_pos_radius1); // Left eye dome
//   p5.ellipse(eye_pos2_x, eye_pos1_y, eye_pos_radius1, eye_pos_radius1); // Left eye dome

//   // then the chin
//   let arc_x = p5.map(x + 0, x1, x2, 0, 256);
//   let arc_y = p5.map(y + -65, y1, y2, 0, 256);
//   let arc_w_offset = p5.map(x+70, x1, x2, 0, 256);
//   let arc_w = arc_w_offset - arc_x;
//   p5.arc(arc_x, arc_y, arc_w, arc_w, 0, p5.PI);  // Chin

//   // the eyeballs
//   let eyeball_x1 = p5.map(x + -14, x1, x2, 0, 256);
//   let eyeball_x2 = p5.map(x + 14,  x1, x2, 0, 256);
//   let eyeball_r = eye_pos_radius1 / 3;
//   p5.fill(0);
//   p5.ellipse(eyeball_x1, eye_pos1_y, eyeball_r, eyeball_r); // Left eye
//   p5.ellipse(eyeball_x2, eye_pos1_y, eyeball_r, eyeball_r);  // Right eye

//   // the beak
//   let quad_x1 = p5.map(x + 0, x1, x2, 0, 256);
//   let quad_y1 = p5.map(y + -65, y1, y2, 0, 256);
//   let quad_x2 = p5.map(x + 4, x1, x2, 0, 256);
//   let quad_y2 = p5.map(y + -51, y1, y2, 0, 256);
//   let quad_x3 = p5.map(x + 0, x1, x2, 0, 256);
//   let quad_y3 = p5.map(y + -44, y1, y2, 0, 256);
//   let quad_x4 = p5.map(x + -4, x1, x2, 0, 256);
//   let quad_y4 = p5.map(y + -51, y1, y2, 0, 256);
//   p5.quad(quad_x1, quad_y1, quad_x2, quad_y2, quad_x3, quad_y3, quad_x4, quad_y4);
// }

// function circle(p5, x, y, x1, x2, y1, y2){
// // then draw the eyes
//   let eye_pos1_x = p5.map(x, x1, x2, 0, 256);
//   let eye_pos1_y = p5.map(y, y1, y2, 0, 256);

//   let eye_pos1_origin_x = p5.map(0, x1, x2, 0, 256);
//   let eye_pos1_offset1 = p5.map(35, x1, x2, 0, 256);
//   let eye_pos_radius1 = eye_pos1_offset1 - eye_pos1_origin_x;

//   p5.fill(255);
//   p5.ellipse(eye_pos1_x, eye_pos1_y, eye_pos_radius1, eye_pos_radius1); // Left eye dome


// }

function square(p5, x, y, x1, x2, y1, y2){
  let square_pos_x = p5.map(x, x1, x2, 0, 256);
  let square_pos_y = p5.map(y, y1, y2, 0, 256);

  let square_origin_x = p5.map(0,x1, x2,0,256);//point you want to start drawing
  let square_offset_x= p5.map(50, x1, x2, 0, 256);//point you want to finish drawing (width of shape)

  let square_width= square_offset_x- square_origin_x;

  let square_offset_y= p5.map(60, x1, x2, 0, 256);
  let square_height= square_offset_y - square_origin_x;

  p5.rect(square_pos_x,square_pos_y,square_width,square_height);

}

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {  
  p5.background(255);

  square(p5, 250, 512, x1, x2, y1, y2);

  // local positions here
  //circle(p5, 412, 512, x1, x2, y1, y2);
  //owl(p5, 612, 512, x1, x2, y1, y2);

  square


  /////////////////////////
  // debug - show border //
  p5.noFill();
  p5.strokeWeight(1);
  p5.stroke(255, 0, 0);
  p5.rect(0, 0, 255, 255);
  //p5.text("help", 10, 10);
  p5.text("corner: (" + x1 + "," + y1 + ")", 10,20);
  let sizex = x2-x1;
  p5.text("width:" + sizex, 10, 30);
}
