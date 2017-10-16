var max_thickness = 64;
var max_movement = 32;
var ball_radius = 32;
var line_width = 8;
var grid_size = 64;
var ran_off_one_X;
var ran_off_one_Y;
var ran_off_two_X;
var ran_off_two_Y;
var ran_off_three_X;
var ran_off_three_Y;

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


function drawStamens(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2, drawLines) {
  var offsets = [
    [3 + ran_off_one_X,-1.5 + ran_off_one_Y],[3 + ran_off_one_X,-0.5 + ran_off_one_Y], [3 + ran_off_one_X,0.5 + ran_off_one_Y],[3 + ran_off_one_X,1.5 + ran_off_one_Y],
    [2 + ran_off_one_X,2 + ran_off_one_Y],[2 + ran_off_one_X,1 + ran_off_one_Y], [2 + ran_off_one_X,0 + ran_off_one_Y], [2 + ran_off_one_X,-1 + ran_off_one_Y], [2 + ran_off_one_X,-2 + ran_off_one_Y],
    [1 + ran_off_one_X,2.5 + ran_off_one_Y],[1 + ran_off_one_X,1.5 + ran_off_one_Y], [1 + ran_off_one_X,0.5 + ran_off_one_Y], [1 + ran_off_one_X,-0.5 + ran_off_one_Y], [1 + ran_off_one_X,-1.5 + ran_off_one_Y], [1 + ran_off_one_X,-2.5 + ran_off_one_Y],
    [0 + ran_off_one_X,3 + ran_off_one_Y],[0 + ran_off_one_X,2 + ran_off_one_Y], [0 + ran_off_one_X,1 + ran_off_one_Y], [0 + ran_off_one_X,0 + ran_off_one_Y], [0 + ran_off_one_X,-1 + ran_off_one_Y], [0 + ran_off_one_X,-2 + ran_off_one_Y], [0 + ran_off_one_X,-3 + ran_off_one_Y],
    [-1 + ran_off_one_X,2.5 + ran_off_one_Y],[-1 + ran_off_one_X,1.5 + ran_off_one_Y], [-1 + ran_off_one_X,0.5 + ran_off_one_Y], [-1 + ran_off_one_X,-0.5 + ran_off_one_Y], [-1 + ran_off_one_X,-1.5 + ran_off_one_Y], [-1 + ran_off_one_X,-2.5 + ran_off_one_Y],
    [-2 + ran_off_one_X,2 + ran_off_one_Y],[-2 + ran_off_one_X,1 + ran_off_one_Y], [-2 + ran_off_one_X,0 + ran_off_one_Y], [-2 + ran_off_one_X,-1 + ran_off_one_Y], [-2 + ran_off_one_X,-2 + ran_off_one_Y],
    [-3 + ran_off_one_X,-1.5 + ran_off_one_Y],[-3 + ran_off_one_X,-0.5 + ran_off_one_Y], [-3 + ran_off_one_X,0.5 + ran_off_one_Y],[-3 + ran_off_one_X,1.5 + ran_off_one_Y]
  ]
  var offsets2 = [
    [2.55 + ran_off_two_X,-2 + ran_off_two_Y],[2.55 + ran_off_two_X,-1 + ran_off_two_Y],[2.55 + ran_off_two_X,0 + ran_off_two_Y],[2.55 + ran_off_two_X,1 + ran_off_two_Y],[2.55 + ran_off_two_X,2 + ran_off_two_Y],
    [1.55 + ran_off_two_X,-2.5 + ran_off_two_Y],[1.55 + ran_off_two_X,1.5 + ran_off_two_Y], [1.55 + ran_off_two_X,0.5 + ran_off_two_Y],[1.55 + ran_off_two_X,-0.5 + ran_off_two_Y], [1.55 + ran_off_two_X,-1.5 + ran_off_two_Y], [1.55 + ran_off_two_X,2.5 + ran_off_two_Y],
    [0.55 + ran_off_two_X,-3 + ran_off_two_Y],[0.55 + ran_off_two_X,2 + ran_off_two_Y], [0.55 + ran_off_two_X,1 + ran_off_two_Y], [0.55 + ran_off_two_X,0 + ran_off_two_Y], [0.55 + ran_off_two_X,-1 + ran_off_two_Y], [0.55 + ran_off_two_X,-2 + ran_off_two_Y],[0.55 + ran_off_two_X,3 + ran_off_two_Y],
    [-0.55 + ran_off_two_X,-3 + ran_off_two_Y],[-0.55 + ran_off_two_X,2 + ran_off_two_Y], [-0.55 + ran_off_two_X,1 + ran_off_two_Y], [-0.5 + ran_off_two_X,0 + ran_off_two_Y],[-0.55 + ran_off_two_X,-1 + ran_off_two_Y], [-0.55 + ran_off_two_X,-2 + ran_off_two_Y],[-0.55 + ran_off_two_X,3 + ran_off_two_Y],
    [-1.55 + ran_off_two_X,-2.5 + ran_off_two_Y],[-1.5 + ran_off_two_X,1.5 + ran_off_two_Y], [-1.55 + ran_off_two_X,0.5 + ran_off_two_Y], [-1.55 + ran_off_two_X,-0.5], [-1.55 + ran_off_two_X,-1.5 + ran_off_two_Y],[-1.55 + ran_off_two_X,2.5 + ran_off_two_Y],
    [-2.55 + ran_off_two_X,-2 + ran_off_two_Y],[-2.55 + ran_off_two_X,-1 + ran_off_two_Y],[-2.55 + ran_off_two_X,-0 + ran_off_two_Y],[-2.55 + ran_off_two_X,1 + ran_off_two_Y],[-2.55 + ran_off_two_X,2 + ran_off_two_Y]
  ]
  var offsets3 = [
  [2.25 + ran_off_three_X,-1.5 + ran_off_three_Y],[2.25 + ran_off_three_X,-0.5 + ran_off_three_Y],[2.25 + ran_off_three_X,0.5 + ran_off_three_Y],[2.25 + ran_off_three_X,1.5 + ran_off_three_Y],
  [1.25 + ran_off_three_X,-1 + ran_off_three_Y],[1.25 + ran_off_three_X,-2 + ran_off_three_Y],[1.25 + ran_off_three_X,-0 + ran_off_three_Y],[1.25 + ran_off_three_X,1 + ran_off_three_Y],[1.25 + ran_off_three_X,2 + ran_off_three_Y],
  [0.4 + ran_off_three_X,-1.5 + ran_off_three_Y],[0.4 + ran_off_three_X,-2.5 + ran_off_three_Y],[0.4 + ran_off_three_X,-0.5 + ran_off_three_Y],[0.4 + ran_off_three_X,0.5 + ran_off_three_Y],[0.4 + ran_off_three_X,1.5 + ran_off_three_Y],[0.4 + ran_off_three_X,2.5 + ran_off_three_Y],
  [-0.4 + ran_off_three_X,-1.5 + ran_off_three_Y],[-0.4 + ran_off_three_X,-2.5 + ran_off_three_Y],[-0.4 + ran_off_three_X,-0.5 + ran_off_three_Y],[-0.4 + ran_off_three_X,0.5 + ran_off_three_Y],[-0.4 + ran_off_three_X,1.5 + ran_off_three_Y],[-0.4 + ran_off_three_X,2.5 + ran_off_three_Y],
  [-1.25 + ran_off_three_X,-1 + ran_off_three_Y],[-1.25 + ran_off_three_X,-2 + ran_off_three_Y],[-1.25 + ran_off_three_X,-0 + ran_off_three_Y],[-1.25 + ran_off_three_X,1 + ran_off_three_Y],[-1.25 + ran_off_three_X,2 + ran_off_three_Y],
  [-2.25 + ran_off_three_X,-1.5 + ran_off_three_Y],[-2.25 + ran_off_three_X,-0.5 + ran_off_three_Y],[-2.25 + ran_off_three_X,0.5 + ran_off_three_Y],[-2.25 + ran_off_three_X,1.5 + ran_off_three_Y]
  ]
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  for(var i=0; i<offsets.length; i++) {
    ran_off_one_X = p5.random(-0.5, 0.5);
    ran_off_one_Y = p5.random(-0.5, 0.5);
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.strokeWeight(0);
    p5.fill(164,64,184,75);
    p5.ellipse(pixel_x, pixel_y, pixel_radius);
  }

  for(var i=0; i<offsets2.length; i++) {
    ran_off_two_X = p5.random(-0.5, 0.5);
    ran_off_two_Y = p5.random(-0.5, 0.5);
    var offset2 = offsets2[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset2[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset2[1], y1, y2, 0, 256);
    p5.strokeWeight(0);
    p5.fill(164,64,184,50);
    p5.ellipse(pixel_x, pixel_y, pixel_radius/1.25);
  }
  for(var i=0; i<offsets3.length; i++) {
    ran_off_three_X = p5.random(-0.5, 0.5);
    ran_off_three_Y = p5.random(-0.5, 0.5);
    var offset3 = offsets3[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset3[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset3[1], y1, y2, 0, 256);
    p5.strokeWeight(0);
    p5.fill(164,64,184,25);
    p5.ellipse(pixel_x, pixel_y, pixel_radius/1.5);
  }
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


  var c_p00 = p5.map(0, x1, x2, 0, 256);
  var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  var c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  var cur_line_width = c_plwidth - c_p00;
  var cur_ball_radius = c_pball - c_p00;

  p5.background(0);
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);


      p5.noStroke();
      // if zoomed: first, draw petals *behind* the ellipse
    
      // draw ellipse
      p5.fill(0, 0, 128);
      if(zoom <= 2){
        var rancol = p5.random(0,2);
        if (rancol <= 0 ){
          p5.fill(164,64,184,75);
        } 
        else if (rancol <= 1){
          p5.fill(164,64,184,50);
        }
        else{
          p5.fill(164,64,184,25);
        }
      p5.ellipse(x_pos, y_pos, cur_ball_radius);}

      // if zoomed: last draw stamens *in front of* the ellipse
      if(zoom >= 3) {
        // now if we are super zoomed, draw lines in the stamen
        var drawLines = false;
        if (zoom >= 5) drawLines = true;
        p5.fill(0, 0, 255);
        p5.stroke(0, 0, 128);
        drawStamens(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2, drawLines);
      }
    }
  }
}