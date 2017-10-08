/* This is an example of 10print translated into the PS4 framework */

var blue = "#0000AA"
var light_blue = "#0088FF"

function drawLayer(p5, slashsize, x1, x2, y1, y2, z) {

  var startx = slashsize * (Math.floor(x1 / slashsize) - 1);
  var starty = slashsize * (Math.floor(y1 / slashsize) - 1);
  var endx = slashsize * (Math.floor(x2 / slashsize) + 1);
  var endy = slashsize * (Math.floor(y2 / slashsize) + 1);

  for(var x = startx; x < endx; x += slashsize) {

    var x_pos = p5.map(x, x1, x2, 0, 256);
    var width = p5.map(x + 50, x1, x2, 0, 256);
    var length = p5.map(x + 100, x1, x2, 0, 256);

    for(var y = starty; y < endy; y += slashsize) {

      var y_pos = p5.map(y, y1, y2, 0, 256);

      if(p5.random(1) <= 1) {
        p5.rect(x_pos, y_pos, width - x_pos, width - x_pos, 100);
      }

    }
  }
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  p5.background(blue);
  p5.noStroke();
  p5.fill(light_blue);
  drawLayer(p5, 75, x1, x2, y1, y2, z);

}
