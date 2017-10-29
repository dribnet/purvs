var max_thickness = 64;
var max_movement = 32;
var line_width = 8;
var grid_size = 32;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 356.500000000000, 665.750000000000],
  [3, 353.250000000000, 668.187500000000],
  [4, 322.562500000000, 645.093750000000],
  [5, 322.562500000000, 645.109375000000],
  [7, 317.984375000000, 643.636718750000],
  [3, 317.984375000000, 643.636718750000]
]

function getOffsetPoint(p5, x, y, z, noiseScale) {
  var noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  var noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  var offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  var offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}


//draws a pointed star when the stars are small enough
function drawStar(p5, rad, x1, y1){

  rad = rad*1.8;

  p5.fill(50, 230, 255);
  p5.beginShape();
  p5.vertex(x1 - rad/2, y1 - rad/4);
  p5.vertex(x1 + rad/2, y1 - rad/4);
  p5.vertex(x1, y1 + rad/2);
  p5.vertex(x1 - rad/2, y1 - rad/4);
  p5.endShape();

  p5.beginShape();
  p5.vertex(x1 - rad/2, y1 + rad/4);
  p5.vertex(x1 + rad/2, y1 + rad/4);
  p5.vertex(x1, y1 - rad/2);
  p5.vertex(x1 - rad/2, y1 + rad/4);
  p5.endShape();

}


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
  // debug - show border
  var max_shift = max_thickness + max_movement;
  var min_x = snap_to_grid(x1 - max_shift, grid_size);
  var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  var min_y = snap_to_grid(y1 - max_shift, grid_size);
  var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);


  p5.background(6, 0, 33);
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

        var c_p00 = p5.map(0, x1, x2, 0, 256);
        var starRad = p5.noise(x, y, z+5);
        var ball_radius = p5.map(starRad, 0, 1, 1, 7);
        var c_pball = p5.map(ball_radius, x1, x2, 0, 256);
        var cur_ball_radius = c_pball - c_p00;


      p5.noStroke();


      // draw stars as pointed

      if(zoom < 2 && cur_ball_radius < 7){
        drawStar(p5, cur_ball_radius, x_pos, y_pos);
      }

      // draw stars round if zoomed
      if(cur_ball_radius >= 7){
      p5.fill(40, 108, 255);
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
      }

      p5.fill(40, 108, 255, 6);
      p5.ellipse(x_pos, y_pos, 3*cur_ball_radius);

      p5.fill(40, 108, 255, 3);
      p5.ellipse(x_pos, y_pos, 5*cur_ball_radius);
      
    

      // if zoomed: draw large stars with ripples
      if(zoom == 2 ) {

        p5.ellipse(x_pos, y_pos, 6*cur_ball_radius);
        p5.fill(118, 40, 255, 20);
        p5.ellipse(x_pos, y_pos, 5*cur_ball_radius);
        p5.fill(0, 0, 0, 50);
        p5.ellipse(x_pos, y_pos, 4*cur_ball_radius);
        p5.fill(118, 40, 255, 30);
        p5.ellipse(x_pos, y_pos, 3*cur_ball_radius);
        p5.fill(0, 0, 0, 50);
        p5.ellipse(x_pos, y_pos, 2*cur_ball_radius);
        p5.fill(118, 40, 255);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);

      }

      if(zoom == 3) {
        p5.fill(194, 40, 255, 30);
        p5.ellipse(x_pos, y_pos, 7*cur_ball_radius);
        p5.fill(0, 0, 0, 50);
        p5.ellipse(x_pos, y_pos, 6*cur_ball_radius);
        p5.fill(194, 40, 255, 50);
        p5.ellipse(x_pos, y_pos, 5*cur_ball_radius);
        p5.fill(0, 0, 0, 50);
        p5.ellipse(x_pos, y_pos, 4*cur_ball_radius);
        p5.fill(194, 40, 255, 70);
        p5.ellipse(x_pos, y_pos, 3*cur_ball_radius);
        p5.fill(0, 0, 0, 50);
        p5.ellipse(x_pos, y_pos, 2*cur_ball_radius);
        p5.fill(194, 40, 255);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
        p5.fill(255, 40, 240);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/3, cur_ball_radius/6,);
        p5.fill(255, 40, 240);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/6, cur_ball_radius/3,);
        p5.fill(153, 6, 67);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/12, cur_ball_radius/12)

      }

      //if zoomed draws stars with cross in the middle

      if(zoom >= 4) {
        p5.fill(194, 40, 255, 30);
        p5.ellipse(x_pos, y_pos, 7*cur_ball_radius);
        p5.fill(0, 0, 0, 50);
        p5.ellipse(x_pos, y_pos, 6*cur_ball_radius);
        p5.fill(194, 40, 255, 50);
        p5.ellipse(x_pos, y_pos, 5*cur_ball_radius);
        p5.fill(0, 0, 0, 50);
        p5.ellipse(x_pos, y_pos, 4*cur_ball_radius);
        p5.fill(194, 40, 255, 70);
        p5.ellipse(x_pos, y_pos, 3*cur_ball_radius);
        p5.fill(0, 0, 0, 50);
        p5.ellipse(x_pos, y_pos, 2*cur_ball_radius);
        p5.fill(0, 0, 0, 50);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);

        p5.fill(255, 40, 240);
        p5.ellipse(x_pos, y_pos, cur_ball_radius, cur_ball_radius/3)
        p5.fill(255, 40, 240);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/3, cur_ball_radius)
        p5.fill(153, 6, 67);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/4, cur_ball_radius/4)
        p5.fill(153, 6, 167);
        p5.ellipse(x_pos, y_pos, cur_ball_radius/8, cur_ball_radius/8)
      }


    }
  }
}