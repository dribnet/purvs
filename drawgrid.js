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
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  var bgColor = [30,135,140],
      ellipseColor = [255,255,255];

  p5.noStroke();
  p5.fill(bgColor);
  p5.rect(0,0,256,256);

  p5.fill(ellipseColor);
  var w = p5.width/10,
      h = p5.height/8;

  // stars
  for (var i=0; i<8; i++) {
    for (var j=0; j<10; j++) {
      // positioning the stars
      var starX = w/2 + w*j,
          starY = h/2 + h*i,
          starSize = p5.random(2,4),
          positionRandX = p5.random(-40,40),
          positionRandY = p5.random(-40,40);

      p5.ellipse(starX+positionRandX,starY+positionRandY,starSize,starSize);
    }
  }


  // debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
