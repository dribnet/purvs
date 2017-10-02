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

var amount = 1;

/**
 * @param {p5} p5 
 * @param {Number} x1 
 * @param {Number} x2 
 * @param {Number} y1 
 * @param {Number} y2 
 * @param {Number} z 
 * @param {Number} zoom 
 */
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  zoom = zoom || 0

  // debug - show border
  p5.noFill();
  p5.noStroke();
  p5.colorMode(p5.HSB)
  p5.ellipseMode(p5.CORNER)
  p5.rectMode(p5.CORNER)
  var color = tinycolor()
  var noiseScale=0.02; 

  var size = 16;
  var noiseScale=0.1;
  var startx = size * (Math.floor(x1/size)-1);
  var starty = size * (Math.floor(y1/size)-1);
  var endx = size * (Math.floor(x2/size)+1);
  var endy = size * (Math.floor(y2/size)+1);

  var char_width = 256 / ((x2-x1)/size);
  var char_height = 256 / ((y2-y1)/size);
  var pixel_width = char_width / 8;
  var pixel_height = char_height / 8;

  for(var x=startx; x<endx; x+=size) {
    var n_x = x / size;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=size) {
      var n_y = y / size;
      var y_pos = p5.map(y, y1, y2, 0, 256);

      var noiseValue = p5.noise(100+x * noiseScale, 100+y * noiseScale, z+p5.millis()/10000);
      p5.fill(noiseValue*360, 90, 80);
      p5.rect(x_pos, y_pos, char_width, char_height);
    }
  }
}