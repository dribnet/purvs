var max_thickness = 64;
var max_movement = 150;
var ball_radius = 16;
var line_width = 8;
var grid_size = 64;

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

function drawInception(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
     [1, 1],
     
  ]
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.ellipse(pixel_x, pixel_y, pixel_radius-200);    
  }

}

function drawsmallCircles(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
     [3, 1],
     [2.5, 3],
     [4.5, 2.5],
    // [0.5, 0.9],

    // [-1.2, -1.3],
    // [-1.7, -1.5],
    // [-1.7, -1.2],
    //[-1, 0],
  ]
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.ellipse(pixel_x, pixel_y, pixel_radius);    
  }

}

function drawPetals(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
    [0, 1],
    [0.5, -0.1],
    //[0, -1],
    //[-1, 0],
  ]
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.ellipse(pixel_x, pixel_y, pixel_radius);    
  }
}

function drawStamens(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
    [-2, -2],
  ]
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  
  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.strokeWeight(0);
    p5.ellipse(pixel_x, pixel_y, pixel_radius+50);
    
    
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

  p5.background(146, 179, 205);
 
//noise background
  var noiseScale=2; 
  p5.noiseDetail(8,0.5);
  p5.noStroke();
  for(var i=0; i<30; i++) {
    var n_x = p5.map(i, 0, 16, x1, x2);
    for(var j=0; j<30; j++) {
      var n_y = p5.map(j, 0, 16, y1, y2);
      var noiseVal = p5.noise(n_x * noiseScale,
                              n_y * noiseScale, z);
      p5.fill(noiseVal*248, 198, 207);
      p5.ellipse(i*16, j*16, 16, 16);
    }
  }
//

// if(zoom ==3) {
//  p5.background(0);
// }
  p5.fill(255, 214, 223);
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 1);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      // p5.strokeWeight(cur_line_width);
      // p5.stroke(0, 0, 128);
      // var shift_point2 = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      // var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      // var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
      // p5.line(x_pos, y_pos, x_pos2, y_pos2);

      // p5.stroke(0, 128, 0);
      // var shift_point2 = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      // var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      // var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
      // p5.line(x_pos, y_pos, x_pos2, y_pos2);

      p5.noStroke();
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
      
      // draw ellipse
      p5.fill(255, 214, 223);
      p5.ellipse(x_pos, y_pos, cur_ball_radius);

//       if (zoom >=3) {
//         p5.fill(0);
// }
// else {
//   p5.fill(255);
// }// if zoomed: first, draw petals *behind* the ellipse
      if(zoom >= 3) {
        p5.noFill();
        p5.stroke(232, 192, 201);
        p5.strokeWeight(2);
        drawPetals(p5, x1, x2, y1, y2, shift_point[0]+6, shift_point[1], ball_radius, line_width);
      }
      

      if(zoom >=5) {
        p5.fill(232, 192, 201);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
        p5.fill(255, 214, 223);
        p5.stroke(0, 0, 128);
        drawStamens(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);
           //p5.fill(0);
        //drawInception(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);

      }

      if(zoom >=7) {
        p5.fill(255);
        drawsmallCircles(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);
        p5.fill(255, 214, 223,50);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
      }

       if (zoom >=8) {
      p5.fill(186, 148, 157);
        drawInception(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);

      }
    }
  }
}
