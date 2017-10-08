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
colourList = ["#1798C4", "#6DCF00", "#FA3F00", "#F8FF00"];

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  p5.noLoop();

  p5.background(255);
  p5.rectMode(p5.CORNERS);

  // The first red rectangle fills the entire space
  var cx = p5.map(512-960/2, x1, x2, 0, 256);
  var cy = p5.map(512-720/2, y1, y2, 0, 256);
  var cx2 = p5.map(512+960/2, x1, x2, 0, 256);
  var cy2 = p5.map(512+720/2, y1, y2, 0, 256);
  p5.fill(50);
  p5.noStroke();
  p5.rect(cx, cy, cx2, cy2);

  var xPos = 0;

  var cx = p5.map(512 - (865 - xPos) / 2, x1, x2, 0, 256);
  var cx2 = p5.map((512 - 865 / 2 ) + 50, x1, x2, 0, 256);
  p5.strokeWeight(cx2 - cx);

  

  for (xPos = 0; xPos < 1800; xPos += 150) {

    var yStartPos = 0;
    var yEndPos = 0;
    var cx = p5.map(512 - (865 - xPos) / 2, x1, x2, 0, 256);

    for (n = 0; n < 5; n ++) {

      var i = p5.random(1);

      if (i < 0.33) {
        yEndPos = yStartPos;
      }
      else if (i < 0.66) {
        yEndPos = yStartPos + 125;
      }
      else  {
        yEndPos = yStartPos + 325;
      }

      var cy = p5.map(512 - (625 - yStartPos) / 2, y1, y2, 0, 256);
      var cy2 = p5.map(512 - (625 - yEndPos) / 2, y1, y2, 0, 256);

      var c = colourList[Math.floor(Math.random()*colourList.length)];
      p5.stroke(c);
      p5.line(cx, cy, cx, cy2);
      yStartPos = yEndPos + 150;

    }
  }
}
