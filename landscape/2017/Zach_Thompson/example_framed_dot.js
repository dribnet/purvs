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
  console.log(y1, y2);
  p5.background("#704A33");
  p5.rectMode(p5.CORNERS);


  var cx = p5.map(212, x1, x2, 0, 256);
  var cy = p5.map(412, y1, y2, 0, 256);

  
  p5.noFill();

  ////// 

  var sx = p5.map (412, x1, x2, 0, 556);
  var sy = p5.map (392, y1, y2, 0, 556);
  var xmod = p5.map (10, x1, x2, 0, 556);
  var ymod1 = p5.map (98, y1, y2, 0, 556);
  var ymod2 = p5.map (158, y1, y2, 0, 556);
  var ymod3 = p5.map (251, y1, y2, 0, 556);
  p5.beginShape();
  p5.vertex (sx, sy);
  p5.vertex (sx+xmod+xmod, sy);
  p5.vertex (sx+xmod+xmod+xmod, sy+ymod1);
  p5.vertex (sx+xmod+xmod+xmod, sy+ymod2);
  p5.vertex (sx+xmod+xmod, sy+ymod3);
  p5.vertex (sx, sy+ymod3);
  p5.vertex (sx-xmod, sy+ymod2);
  p5.vertex (sx-xmod, sy+ymod1);
  p5.vertex (sx, sy);
  p5.endShape();


  /////
p5.strokeWeight(zoom/10+1);
p5.triangle(cx, cy, cx+ymod2, cy+ymod2, cx+xmod, cy);

  var sx = p5.map (1550, x1, x2, 0, 556);
  var sy = p5.map (1292, y1, y2, 0, 556);
  var xmod = p5.map (100, x1, x2, 0, 556);
  var ymod1 = p5.map (98, y1, y2, 0, 556);
  var ymod2 = p5.map (158, y1, y2, 0, 556);
  var ymod3 = p5.map (251, y1, y2, 0, 556);
  p5.beginShape();
  p5.vertex (sx, sy);
  p5.vertex (sx+xmod+xmod, sy);
  p5.vertex (sx+xmod+xmod+xmod, sy+ymod1);
  p5.vertex (sx+xmod+xmod+xmod, sy+ymod2);
  p5.vertex (sx+xmod+xmod, sy+ymod3);
  p5.vertex (sx, sy+ymod3);
  p5.vertex (sx-xmod, sy+ymod2);
  p5.vertex (sx-xmod, sy+ymod1);
  p5.vertex (sx, sy);
  p5.endShape();

  var sx = p5.map (0, x1, x2, 0, 556);
  var sy = p5.map (22, y1, y2, 0, 556);
  var xmod = p5.map (10, x1, x2, 0, 556);
  var ymod1 = p5.map (98, y1, y2, 0, 556);
  var ymod2 = p5.map (158, y1, y2, 0, 556);
  var ymod3 = p5.map (251, y1, y2, 0, 556);
  p5.beginShape();
  p5.vertex (sx, sy);
  p5.vertex (sx+xmod+xmod, sy);
  p5.vertex (sx+xmod+xmod+xmod, sy+ymod1);
  p5.vertex (sx+xmod+xmod+xmod, sy+ymod2);
  p5.vertex (sx+xmod+xmod, sy+ymod3);
  p5.vertex (sx, sy+ymod3);
  p5.vertex (sx-xmod, sy+ymod2);
  p5.vertex (sx-xmod, sy+ymod1);
  p5.vertex (sx, sy);
  p5.endShape();
 p5.beginShape();
 p5.vertex (107, 2);
 p5.vertex (147, 2);
 p5.vertex (167, 100);
 p5.vertex (167, 160);
 p5.vertex (147, 253);
 p5.vertex (107, 253);
 p5.vertex (87, 160);
 p5.vertex (87, 100);
 p5.vertex (107, 2);
 p5.endShape();

p5.triangle(152, 2, 187, 2, 169.5, 95);
p5.triangle(152, 253, 187, 253, 169.5, 165);

 p5.beginShape();
 p5.vertex (192, 2);
 p5.vertex (232, 2);
 p5.vertex (252, 100);
 p5.vertex (252, 160);
 p5.vertex (232, 253);
 p5.vertex (192, 253);
 p5.vertex (172, 160);
 p5.vertex (172, 100);
 p5.vertex (192, 2);
 p5.endShape();

p5.triangle(237, 2, 272, 2, 255, 95);
p5.triangle(-28, 2, 17, 2, 0, 95);

p5.triangle(-28, 253, 17, 253, 0, 165);
p5.triangle(237, 253, 272, 253, 255, 165);

  p5.beginShape();
  p5.vertex (22, 2);
  p5.vertex (62, 2);
  p5.vertex (82, 100);
  p5.vertex (82, 160);
  p5.vertex (62, 253);
  p5.vertex (22, 253);
  p5.vertex (2, 160);
  p5.vertex (2, 100);
  p5.vertex (22, 2);
  p5.endShape();

p5.triangle(67, 2, 102, 2, 84.5, 95);
p5.triangle(67, 253, 102, 253, 84.5, 165);
}
