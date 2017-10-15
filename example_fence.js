var max_thickness = 64;
var max_movement = 20;
var ball_radius = 20;
var line_width = 5;
var grid_size = 44;
var inMapMode = true;


function getOffsetPoint(p5, x, y, z, noiseScale) {
  var noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z+20);
  var noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  var offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  var offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}
/*
  var x_steps = 1 + Math.floor(width / 10); 
  var y_steps = 1 + Math.floor(height / 10);

  // save grid locations
  var grid_locations = new Array(x_steps);
    for(var i=0;i<x_steps;i++) {
    grid_locations[i] = new Array(y_steps);
    for (var j = 0; j < y_steps; j++) {
      x_pos = i * 20;
      y_pos = j * 18;
      if((j % 2) == 0){
        x_pos = x_pos + 10;
      }
      grid_locations[i][j] = [x_pos, y_pos];
    }
  }*/

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
  /*if(inMapMode){
  for(var i=0;i<x_steps;i++) {
    grid_locations[i] = new Array(y_steps);
    for (var j = 0; j < y_steps; j++) {
      x_pos = i * 20;
      y_pos = j * 18;
      if((j % 2) == 0){
        x_pos = x_pos + 5;
      }
      grid_locations[i][j] = [x_pos, y_pos];
    }
  }
    // draw the landscape
    for(var i=0;i<x_steps-1;i++) {
      for(var j=0;j<y_steps-1;j++) {
      
        var loc = grid_locations[i][j];
        var x1 = loc[0];
        var y1 = loc[1]

        var x_noise = x1/200.0;
        var y_noise = y1/500.0;
        var noiseVal = p5.noise(x_noise, y_noise);
        var shade = colorFromValue(noiseVal);
        p5.fill(shade);
     
        p5.ellipse(x1, y1, 20);
        
      }
    }
  }*/
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

  var push_amount = 0.005;

  function colorFromValue(v) {
  if (v < 0.5) {
    color1 = p5.color(240,139,175); //coral 
    color2 = p5.color(6,255,255); //turquoise
    c = p5.lerpColor(color1, color2, v*2); 
    return c;
  }
  else if(v<0.7) {
    return p5.color(6,196,249); //blue
  }
  else if(v<0.8) {
   color3 = p5.color(4,248,215); //tealish
    color4 = p5.color(240,139,175); //coral
    c1 = p5.lerpColor(color3,color4);
    return c1;
  }
  else {
     return p5.color(235,93,244); //pink
  }
}

// if 3+ deep
if(zoom >=3){
  p5.background(0);
}else{
  p5.background(255);
}

  var x_noise = x1/200.0;
  var y_noise = y1/500.0;
  var noiseVal = p5.noise(x_noise, y_noise);
  var shade = colorFromValue(noiseVal);
  p5.fill(235,93,244);


  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 0.1);

      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      p5.strokeWeight(cur_line_width);
      p5.stroke(shade);
      var shift_point2 = getOffsetPoint(p5, x+grid_size, y, z, push_amount); //amount of randomness
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
     // p5.line(x_pos, y_pos, x_pos2, y_pos2);

      p5.stroke(shade);
      var shift_point2 = getOffsetPoint(p5, x, y+grid_size, z, push_amount);
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);

      p5.line(x_pos, y_pos, x_pos2, y_pos2);
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
      p5.ellipse(x_pos, y_pos-100, cur_ball_radius);
      p5.noStroke();

if(zoom <=2){
        var shift_point = getOffsetPoint(p5,x,y,z*1,0.01*push_amount);
        var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
        var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);

        p5.fill(240,139,175);
        p5.ellipse(x_pos, y_pos, 0.1*cur_ball_radius);

      }
      


      
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == ' ') {
    inMapMode = !inMapMode;
  }
}
