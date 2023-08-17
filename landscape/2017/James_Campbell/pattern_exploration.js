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

var objWidth = 20;
var margin = objWidth * 3;
var double = (objWidth * 3) + objWidth / 2;
var triple = (objWidth * 9) + objWidth / 2;


function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  // if (zoom >= 2) {

  var startx = margin * (Math.floor(x1 / margin) - 1);
  var starty = margin * (Math.floor(y1 / margin) - 1);
  var endx = margin * (Math.floor(x2 / margin) + 1);
  var endy = margin * (Math.floor(y2 / margin) + 1);

  p5.background(255);
  p5.rectMode(p5.CORNERS);

  var xPos = 0;

  var cx = p5.map(512 - (865 - xPos) / 2, x1, x2, 0, 256);
  var cx2 = p5.map((512 - 865 / 2 ) + objWidth, x1, x2, 0, 256); // width 
  p5.strokeWeight(cx2 - cx);

  

  for (xPos = 0; xPos < 1800; xPos += margin) { // x-margin

    var yStartPos = 0;
    var yEndPos = 0;
    var x_pos = 512 - (865 - xPos) / 2;
    var cx = p5.map(x_pos, x1, x2, 0, 256);

    for (n = 0; n < 10; n ++) {

      var noiseScale2 = 1;
      var i = p5.noise(x_pos * noiseScale2, y_pos * noiseScale2, z+5);

      if (i < 0.33) {
        yEndPos = yStartPos;
      }
      else if (i < 0.66) {
        yEndPos = yStartPos + double;
      }
      else  {
        yEndPos = yStartPos + triple;
      }

      var y_pos = 512 - (625 - yStartPos) / 2;
      var cy = p5.map(y_pos, y1, y2, 0, 256);
      var cy2 = p5.map(512 - (625 - yEndPos) / 2, y1, y2, 0, 256);

      var noiseScale1 = 1;
      var noise1 = p5.noise(x_pos * noiseScale1, y_pos * noiseScale1, z);
      var colourIndex = Math.floor(noise1*colourList.length);
      var c = colourList[colourIndex];

      p5.stroke(c);
      p5.line(cx, cy, cx, cy2);
      yStartPos = yEndPos + margin; // y-margin
    // }

    }
  }
  // p5.strokeWeight(1);
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
