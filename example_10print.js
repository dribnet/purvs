/* This is an example of 10print translated into the PS4 framework */

var white = "#ffffff"
var violet = "#c1b0e8"

function drawLayer(p5, slashsize, x1, x2, y1, y2, z) {
  var noiseScale=1/16.0;
  // figure out top left and top right square then - 1 off grid
  var startx = slashsize * (Math.floor(x1/slashsize) - 10);
  var starty = slashsize * (Math.floor(y1/slashsize) - 10);
  // figure out where the slash should be
  var endx = slashsize * (Math.floor(x2/slashsize) + 10);
  var endy = slashsize * (Math.floor(y2/slashsize) + 10);

  var char_width = 256 / ((x2-x1)/slashsize);
  var char_height = 256 / ((y2-y1)/slashsize);
  var pixel_width = char_width / 8;
  var pixel_height = char_height / 8;
  p5.strokeWeight(pixel_width);

  for(var x=startx; x<endx; x+=slashsize) {
    var n_x = x / slashsize;
    var x_pos = p5.map(x, x1+20, x2+20, 0, 256);
    for(var y=starty; y<endy; y+=slashsize) {
      var n_y = y / slashsize;
      var y_pos = p5.map(y, y1+20, y2+20, 0, 256);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
      if (noiseValue < 0.5) {
        //p5.rect(x_pos, y_pos, x_pos+char_width, y_pos+char_height);
        p5.fill("#ffffff");
        p5.rect(x_pos, y_pos, x_pos+150, y_pos+150);
      }
      // else {
      //   p5.rect(x_pos, y_pos+char_height, x_pos+char_width, y_pos);
      // }
    }
  }
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.noiseDetail(8,0.5);
  p5.background(white);
  p5.stroke(violet);
  drawLayer(p5, 16, x1, x2, y1, y2, z);
}
