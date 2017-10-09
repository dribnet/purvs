var max_thickness = 64;
var max_movement = 150;
var ball_radius = 2;
var line_width = 8;
var grid_size = 50;
var planetColours = new Array();


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

  var c1 = p5.color(255, 219, 191); //orange
  var c2 = p5.color(255, 214, 227); //pink
  var c3 = p5.color(255, 254, 201); //yellow
  var c4 = p5.color(224, 255, 216); //green
  var c5 = p5.color(216, 228, 255); //blue

  p5.append(planetColours, c1);
  p5.append(planetColours, c2);
  p5.append(planetColours, c3);
  p5.append(planetColours, c4);
  p5.append(planetColours, c5);

  


  p5.background(0, 4, 12);




  
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 0.5);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      var t = p5.floor(p5.map(p5.noise(x, y), 0, 1, 0, 6));
      p5.fill(planetColours[t]);
      //console.log(t);

      /*p5.strokeWeight(cur_line_width);
      p5.stroke(0, 0, 128);
      var shift_point2 = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
      p5.line(x_pos, y_pos, x_pos2, y_pos2);

      p5.stroke(0, 128, 0);
      var shift_point2 = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
      p5.line(x_pos, y_pos, x_pos2, y_pos2);*/


      p5.noStroke();
      p5.ellipse(x_pos, y_pos, cur_ball_radius);

      if(zoom >= 2){

        //p5.rotate(p5.floor(p5.map(p5.noise(x, y), 0, 1, 0, 120)));
        if(p5.floor(p5.map(p5.noise(x, y), 0, 1, 0, 2))<1){
          p5.ellipse(x_pos, y_pos, cur_ball_radius+(cur_ball_radius), cur_ball_radius-(cur_ball_radius/2));
        }
        
      }

      if(zoom >=4){
        if(p5.floor(p5.map(p5.noise(x, y), 0, 1, 0, 2))>=1){
          p5.ellipse(x_pos-cur_ball_radius*2, y_pos, cur_ball_radius/6);
        }
      }
    }
  }
}