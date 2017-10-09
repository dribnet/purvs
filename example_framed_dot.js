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

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // console.log(y1-y2,x1-x2);
  // console.log([zoom,x1-x2]);

  p5.background(255);
  p5.rectMode(p5.CORNERS);

  // The first red rectangle fills the entire space
  var c  = map(512-960/2,512-720/2);
  var c2 = map(512+960/2,512+720/2);
  p5.fill(255, 0, 0);
  p5.rect(c[0], c[1], c2[0], c2[1]);
  //console.log(cx-cx2,cy-cy2);

  // The second black rectangle is inset to form a frame inset by 20 units
  c  = map(512-940/2,512-700/2);
  c2 = map(512+940/2,512+700/2);
  cnt = map(512+100,512+100);
  p5.fill(0);
  p5.rect(c[0], c[1], c2[0], c2[1]);

  // Two ellipses with a radius of 50 units are then added.
  var cx = map(512,512)[0];
  var cy = map(512,512)[1];
  var cx2 = map(512+50,0)[0];
  p5.fill(0, 0, 255);
  p5.ellipse(cx, cy, (cx2-cx));

  // The second green ellipse is above and to the left of the first one.
  var cx = p5.map(412, x1, x2, 0, 256);
  var cy = p5.map(412, y1, y2, 0, 256);
  var cx2 = p5.map(412+50, x1, x2, 0, 256);
  p5.fill(0, 255, 0);
  p5.ellipse(cx, cy, (cx2-cx));
  p5.fill("red");
  p5.ellipse(cnt[0],cnt[1],100);

  function map(newposX,newposY){ //find absolute position.
  // automatically plugs tile corners, nominal width int p5.map
  
      var px = p5.map(newposX ,x1,x2,0,256);   
      var py = p5.map(newposY ,y1,y2,0,256);
      return [px,py];
  }
}
