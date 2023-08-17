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
  [1, 512, 512],
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512],
  [9, 512, 512],
  [12, 512, 512],
  [16, 512, 512]
]

var anim = 0;

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
let cx=0, cy=0, cx2=0, cy2=0;

  p5.background(255);
  p5.rectMode(p5.CORNERS);

  /* For animation: updated z based on global frame count */
  //let dz = p5.globalFrameCount / 100.0;
  //z = z + dz;

  // The first red rectangle fills the entire space
  cx = p5.map(512-960/2, x1, x2, 0, 256);
  cy = p5.map(512-720/2, y1, y2, 0, 256);
  cx2 = p5.map(512+960/2, x1, x2, 0, 256);
  cy2 = p5.map(512+720/2, y1, y2, 0, 256);
  p5.fill(255, 0, 0);
  p5.rect(cx, cy, cx2, cy2);

  // The second black rectangle is inset to form a frame inset by 20 units
  cx = p5.map(512-940/2, x1, x2, 0, 256);
  cy = p5.map(512-700/2, y1, y2, 0, 256);
  cx2 = p5.map(512+940/2, x1, x2, 0, 256);
  cy2 = p5.map(512+700/2, y1, y2, 0, 256);
  p5.fill(0);
  p5.rect(cx, cy, cx2, cy2);


  let x = 0;
  for (var j = 0; j < 30; j+=3.14159265 /15) {
    cx = p5.map(512 + p5.sin(j-anim)*(350 - x), x1, x2, 0, 256);
    cy = p5.map(512 + p5.cos(j-anim)*(350 - x), y1, y2, 0, 256);
    dx = 22;
    dy = 22;
    x+=2.377;

    p5.fill(255, 0, 0);
    p5.ellipse(cx, cy, dx, dy);
  }

  p5.stroke(0, 30 ,150);
  p5.noFill();

  for (var i = 0; i < 8; i+=1) {
    cx = p5.map(512, x1, x2, 0, 256);
    cy = p5.map(512, y1, y2, 0, 256);
    cx2 = p5.map(512 + (20/((i*i/2 + 0.1) * 10)), x1, x2, 0, 256);
    p5.ellipse(cx, cy, (cx2 - cx));
  }

  for (var i = 0; i < 6.3; i+=3.14159265 /100) {
    cx = p5.map(512 + p5.sin(i)*10, x1, x2, 0, 256);
    cy = p5.map(512 + p5.cos(i)*10, y1, y2, 0, 256);
    if(zoom<15) {
    	dx = p5.map(512, x1, x2, 0, 256);
    	dy = p5.map(512, y1, y2, 0, 256);
    }
    else {
    	dx = p5.map(512 + p5.sin(anim)*0.001, x1, x2, 0, 256);
    	dy = p5.map(512 + p5.cos(anim)*0.001, y1, y2, 0, 256);
    }
    cx2 = p5.map(412+50, x1, x2, 0, 256);
    p5.stroke(255, 0 ,0);
    p5.fill(255, 0, 0);
    p5.line(cx, cy, dx, dy);
  }

  if(zoom<15) anim += 0.0002;
  else anim += 0.002;
  
  if(anim>3.14159265*2) anim = 0;

	
  // debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
