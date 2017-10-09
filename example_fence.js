var max_thickness = 128;
var max_movement = 256;
var ball_radius = 64;
var line_width = 8;
var grid_size = 256;

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

  p5.background(4, 21, 31);
  p5.fill(33, 83, 72);
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      p5.noLoop();
      var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      p5.strokeWeight(cur_line_width);
      p5.stroke(5, 53, 76);
      var shift_point2 = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
      p5.line(x_pos, y_pos, x_pos2, y_pos2);


      p5.bezier(x_pos, y_pos, x_pos/2, y_pos/2, x_pos+100, y_pos+100, x_pos-500, y_pos-500);
      p5.bezier(x_pos, y_pos, x_pos/4, y_pos/4, x_pos-100, y_pos-100, x_pos+500, y_pos+500);
      p5.bezier(x_pos-1500, y_pos-1500, x_pos+500, y_pos+500, x_pos-500, y_pos-500, x_pos, y_pos);

      p5.stroke(7, 41, 51);

      var shift_point3 = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos3 = p5.map(shift_point3[1], x1, x2, 0, 256);
      var y_pos3 = p5.map(shift_point3[1], y1, y2 , 0, 256);
 	    p5.line(x_pos, y_pos, x_pos3, y_pos3);
      //p5.ellipseMode(CENTER);
      

 	    p5.bezier(x_pos, y_pos, x_pos/2, y_pos/2, x_pos+100, y_pos+100, x_pos-500, y_pos-500);
      p5.bezier(x_pos, y_pos, x_pos/4, y_pos/4, x_pos-100, y_pos-100, x_pos+500, y_pos+500);
      p5.bezier(x_pos-500, y_pos-500, x_pos/2, y_pos/2, x_pos-500, y_pos-500, x_pos, y_pos);
 	  
      var shift_point4 = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos4 = p5.map(shift_point4[1], x1, x2, 0, -256);
      var y_pos4 = p5.map(shift_point4[1], y1, y2 , 0, -256);
	    p5.line(x_pos, y_pos, x_pos4, y_pos4);

   //    var shift_point5 = getOffsetPoint(p5, x, y, z, 0.1);
   //    var x_pos5 = p5.map(shift_point5[1], x1, x2, 0, 256);
   //    var y_pos5 = p5.map(shift_point5[-1], y1, y2 , 0, 256);
	  // p5.line(x_pos, y_pos, x_pos5, y_pos5);
      
     
      //p5.line(x_pos2, y_pos2, x_pos4, y_pos4);
      
     
      p5.noFill();

      p5.bezier(x_pos, y_pos, x_pos/2, y_pos/2, x_pos+100, y_pos+100, x_pos-500, y_pos-500);
      p5.bezier(x_pos, y_pos, x_pos3, y_pos3, x_pos-100, y_pos-100, x_pos+500, y_pos+500);
      p5.bezier(x_pos4, y_pos4, x_pos3, y_pos3, x_pos2, y_pos2, x_pos, y_pos);

      p5.noStroke();

      /////////////////
     
    }
  }

  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {

    max_shift = max_thickness + max_movement;
    min_x = snap_to_grid(x1 - max_shift, grid_size);
    max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
    min_y = snap_to_grid(y1 - max_shift, grid_size);
    max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);


      var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      p5.noStroke();

      var shift_point2 = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);

      var shift_point3 = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos3 = p5.map(shift_point3[1], x1, x2, 0, 256);
      var y_pos3 = p5.map(shift_point3[1], y1, y2 , 0, 256);
        
      var shift_point4 = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos4 = p5.map(shift_point4[1], x1, x2, 0, -256);
      var y_pos4 = p5.map(shift_point4[1], y1, y2 , 0, -256);

      p5.fill(33, 83, 72);

      p5.ellipse(x_pos3, y_pos3, cur_ball_radius);
      p5.ellipse(x_pos4, y_pos4, cur_ball_radius);
      p5.ellipse(x_pos2, y_pos2, cur_ball_radius);
      p5.ellipse(x_pos-500, y_pos-500, cur_ball_radius/2);
      p5.ellipse(x_pos+500, y_pos+500, cur_ball_radius/3);
      p5.ellipse(x_pos-500, y_pos+500, cur_ball_radius/4);
      p5.ellipse(x_pos+500, y_pos-500, cur_ball_radius/2);
      p5.ellipse((p5.random(grid_size)), (p5.random(grid_size)), cur_ball_radius/10 + (p5.random(-4, 4)));
    }
  }


   for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {

   	max_shift = max_thickness + max_movement;
   	min_x = snap_to_grid(x1 - max_shift, grid_size);
   	max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
   	min_y = snap_to_grid(y1 - max_shift, grid_size);
   	max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

   	  var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);


      p5.fill(200, 60);
      p5.ellipse(x_pos, y_pos, cur_ball_radius*3.1);

      p5.fill(33, 83, 72, 100);
      p5.ellipse(x_pos, y_pos, cur_ball_radius*3);
      
      p5.fill(150, 100);
      p5.ellipse(x_pos, y_pos, cur_ball_radius*2.1);

      p5.fill(7, 41, 51, 100);
      p5.ellipse(x_pos, y_pos, cur_ball_radius*2);

      p5.fill(150, 100);
      p5.ellipse(x_pos, y_pos, cur_ball_radius*1.1);

      p5.fill(5, 53, 76, 100);
      p5.ellipse(x_pos, y_pos, cur_ball_radius);


      p5.fill(200, 100);
      p5.ellipse(x_pos, y_pos, cur_ball_radius*0.6);

      p5.fill(33, 83, 72, 100);
      p5.ellipse(x_pos, y_pos, cur_ball_radius*0.5);

    }
   }



}