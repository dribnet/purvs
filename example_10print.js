/* This is an example of 10print translated into the PS4 framework */

var white = "#ffffff"
var violet = "#c1b0e8"

function drawLayer(p5, slashsize, x1, x2, y1, y2, z) {
  var noiseScale=1/16.0;
  // figure out top left and top right square then - 1 off grid
  var startx = slashsize * (Math.floor(x1/slashsize) - 1);
  var starty = slashsize * (Math.floor(y1/slashsize) - 1);
  // figure out where the slash should be
  var endx = slashsize * (Math.floor(x2/slashsize) + 1);
  var endy = slashsize * (Math.floor(y2/slashsize) + 1);

  var char_width = 256 / ((x2-x1)/slashsize);
  var char_height = 256 / ((y2-y1)/slashsize);
  var pixel_width = char_width / 8;
  var pixel_height = char_height / 8;
  p5.strokeWeight(pixel_width);
  p5.rectMode(p5.CORNERS);

  for(var x=startx; x<endx; x+=slashsize) {
    var n_x = x / slashsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=slashsize) {
      var n_y = y / slashsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
      if (noiseValue < 0.5) {
        p5.noFill();
        p5.stroke(violet);
        p5.rect(x_pos, y_pos, x_pos+char_width, y_pos+char_height);
      }
    }
  }
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.noiseDetail(8,0.5);
  p5.background(white);
  drawLayer(p5, 16, x1, x2, y1, y2, z);
}
