var max_thickness = 128;
var max_movement = 256;
var ball_radius = 64;
var line_width = 8;
var grid_size = 256;

var tourSeed = 301;
/* triplets of locations: zoom, x, y  the tour zooms into one cell, showing all the stages of design development*/
var tourPath = [
  [0, 512.000000000000, 512.000000000000],
  [1, 410.750000000000, 669.250000000000],
  [2, 221.625000000000, 656.625000000000],
  [3, 208.062500000000, 646.312500000000],
  [4, 207.718750000000, 644.781250000000],
  [7, 207.718750000000, 644.781250000000]
]

var initialZoomLevel = 0;
/* what is the maximum zoom level (make this at least 10. defaults to 16) */
var maxZoomLevel = 9;

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
 * This is the function to implement to make your own abstract design.
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

////// Noise generated green circles, showing energy in design. Reduce in size as zoomed into.

  if (zoom > 1) 
  	{
	  var noiseScale=0.02; 
	  p5.noiseDetail(8,0.5);
	  p5.noStroke();
	  for(var i=0; i<17; i++) {
	    var n_x = p5.map(i, 0, 16, x1, x2);
	    for(var j=0; j<17; j++) {
	      var n_y = p5.map(j, 0, 16, y1, y2);
	      var noiseVal = p5.noise(n_x * noiseScale,
	                              n_y * noiseScale, z);

	      p5.fill(33, 83, 72, noiseVal*120 + zoom * 100);
	      p5.ellipse(i*16, j*16, 16 - noiseVal*40, 16 - noiseVal*40);
	    }
	   }
	}
		else {
			p5.fill(33, 83, 72, noiseVal*255);
	      	p5.ellipse(i*16, j*16, 16 - noiseVal*40, 16 - noiseVal*40);
		}


  	p5.fill(33, 83, 72);


/////    Main Curved Lines connecting cells generating code

  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      p5.noLoop();
      var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      var shift_x = shift_point[0];
      var shift_y = shift_point[1];

      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
      var x_pos3 = p5.map(shift_x-300, x1, x2, 0, 256);
      var y_pos3 = p5.map(shift_y+300, y1, y2, 0, 256);
      var x_pos4 = p5.map(shift_x-450, x1, x2, 0, 256);
      var y_pos4 = p5.map(shift_y+150, y1, y2, 0, 256);
      var x_pos5 = p5.map(shift_x+700, x1, x2, 0, 256);
      var y_pos5 = p5.map(shift_y+700, y1, y2, 0, 256);

      
      var shift_point2 = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);



      p5.noStroke();
      p5.fill(255, 10 + zoom*5);
      
///////////// Triangles in back not too visible
      if (zoom > 2) {
      	p5.triangle(x_pos, y_pos, x_pos2, y_pos2, x_pos4, y_pos4); 	
      }
      
////////// Lines large main part, always visible


	    p5.strokeWeight(cur_line_width);
      p5.stroke(5, 53, 76);
      p5.noFill();
      p5.bezier(x_pos, y_pos, x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2);
      p5.bezier(x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2, x_pos, y_pos);
      p5.bezier(x_pos, y_pos, x_pos4, y_pos4, x_pos2, y_pos2, x_pos3, y_pos3);
      p5.noStroke();

////// Lines inner details green colour when zoomed into.

      if (zoom > 2) {
        p5.strokeWeight(cur_line_width/2);
        p5.stroke(33, 83, 72, 60 + zoom*5);
        p5.bezier(x_pos, y_pos, x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2);
        p5.bezier(x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2, x_pos, y_pos);
        p5.bezier(x_pos, y_pos, x_pos4, y_pos4, x_pos2, y_pos2, x_pos3, y_pos3);

      }

      if (zoom > 3) {
        p5.strokeWeight(cur_line_width/4);
        p5.stroke(33, 83, 72, 30 + zoom*5);
        p5.bezier(x_pos, y_pos, x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2);
        p5.bezier(x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2, x_pos, y_pos);
        p5.bezier(x_pos, y_pos, x_pos4, y_pos4, x_pos2, y_pos2, x_pos3, y_pos3);

      }
    }
  }

////// Smaller Curved Lines when zoomed into, blue colour, less strokeweight than main lines.


  if (zoom > 0){
	  for(var x=min_x; x<max_x; x+=grid_size) {
	    for(var y=min_y; y<max_y; y+=grid_size) {
	      p5.noLoop();
	      var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
	      var shift_x = shift_point[0];
	      var shift_y = shift_point[1];

	      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
	      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
	      var x_pos3 = p5.map(shift_x-500, x1, x2, 0, 256);
	      var y_pos3 = p5.map(shift_y+500, y1, y2, 0, 256);
	      var x_pos4 = p5.map(shift_x-150, x1, x2, 0, 256);
	      var y_pos4 = p5.map(shift_y+650, y1, y2, 0, 256);
	      var x_pos5 = p5.map(shift_x+500, x1, x2, 0, 256);
	      var y_pos5 = p5.map(shift_y+100, y1, y2, 0, 256);

	      
	      var shift_point2 = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
	      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
	      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);

	      p5.noStroke();
	      
		    p5.strokeWeight(cur_line_width/5);
	      p5.stroke(5, 53, 76);
	      p5.noFill();

	      p5.bezier(x_pos, y_pos, x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2);
	      p5.bezier(x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2, x_pos, y_pos);
	      p5.bezier(x_pos, y_pos, x_pos4, y_pos4, x_pos2, y_pos2, x_pos3, y_pos3);
	    
	      p5.noStroke();
    }
  }
}

///// Main circles/cells, always present

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
    var x_pos3 = p5.map(shift_x + 240, x1, x2, 0, 256);
    var y_pos3 = p5.map(shift_y + 120, y1, y2, 0, 256);
    var x_pos4 = p5.map(shift_x + 220, x1, x2, 0, 256);
    var y_pos4 = p5.map(shift_y + 70, y1, y2, 0, 256);
    var x_pos5 = p5.map(shift_x + 150, x1, x2, 0, 256);
    var y_pos5 = p5.map(shift_y + 100, y1, y2, 0, 256);


    p5.ellipse(x_pos, y_pos, cur_ball_radius*3.1);

    p5.fill(33, 83, 72, 100);
    p5.ellipse(x_pos, y_pos, cur_ball_radius*3);
      
    p5.fill(150, 100 - zoom*5);
    p5.ellipse(x_pos, y_pos, cur_ball_radius*2.1);

    p5.fill(7, 41, 51, 100 - zoom*5);
    p5.ellipse(x_pos, y_pos, cur_ball_radius*2);

    p5.fill(150, 50 + zoom*15);
    p5.ellipse(x_pos, y_pos, cur_ball_radius*1.1);

    p5.fill(5, 53, 76, 50 + zoom*15);
    p5.ellipse(x_pos, y_pos, cur_ball_radius);


    p5.fill(200, 50 + zoom*15);
    p5.ellipse(x_pos, y_pos, cur_ball_radius*0.6);

    p5.fill(33, 83, 72, 50 + zoom*15);
    }
   }


///// Main Circles Inner detail


   if (zoom > 2) {

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
	    var x_pos3 = p5.map(shift_x, x1, x2, 0, 256);
	    var y_pos3 = p5.map(shift_y, y1, y2, 0, 256);
	    var x_pos4 = p5.map(shift_x, x1, x2, 0, 256);
	    var y_pos4 = p5.map(shift_y, y1, y2, 0, 256);
	    var x_pos5 = p5.map(shift_x, x1, x2, 0, 256);
	    var y_pos5 = p5.map(shift_y, y1, y2, 0, 256);

/// Rings of the inner part of cells.

	    p5.fill(7, 41, 51, 50);
	    p5.noStroke();
	    p5.ellipse(x_pos, y_pos, cur_ball_radius*0.7);

	    p5.fill(33, 83, 72, 100);
	    p5.ellipse(x_pos, y_pos, cur_ball_radius*0.6);
	      
	    p5.fill(150, 100);
	    p5.ellipse(x_pos, y_pos, cur_ball_radius*0.5);

	    p5.fill(7, 41, 51, 100);
	    p5.ellipse(x_pos, y_pos, cur_ball_radius*0.4);

	    p5.fill(150, 50);
	    p5.ellipse(x_pos, y_pos, cur_ball_radius*0.3);

	    p5.fill(5, 53, 76, 50);
	    p5.ellipse(x_pos, y_pos, cur_ball_radius*0.2);


	    p5.fill(200, 50);
	    p5.ellipse(x_pos, y_pos, cur_ball_radius*0.1);

	    p5.strokeWeight(0.5);
	    p5.noFill();
	    p5.stroke(255);



//// Outer Nucleus white lines

      p5.ellipse(x_pos + cur_ball_radius/8, y_pos, cur_ball_radius*0.3); 
      p5.ellipse(x_pos  - cur_ball_radius/8, y_pos, cur_ball_radius*0.3);
      p5.ellipse(x_pos, y_pos  + cur_ball_radius/8, cur_ball_radius*0.3);
      p5.ellipse(x_pos, y_pos  - cur_ball_radius/8, cur_ball_radius*0.3);
    	
    	p5.ellipse(x_pos + cur_ball_radius/16, y_pos + cur_ball_radius/16, cur_ball_radius*0.3); 
      p5.ellipse(x_pos  - cur_ball_radius/16, y_pos - cur_ball_radius/16, cur_ball_radius*0.3);
      p5.ellipse(x_pos - cur_ball_radius/16, y_pos  + cur_ball_radius/16, cur_ball_radius*0.3);
      p5.ellipse(x_pos + cur_ball_radius/16, y_pos  - cur_ball_radius/16, cur_ball_radius*0.3);

      	
//// Inner Nucleus white lines and nucleus

      if (zoom > 3) {
	      	p5.strokeWeight(0.5);
		      p5.fill(7, 41, 51, 50);
		      p5.stroke(255);

	      	p5.ellipse(x_pos + cur_ball_radius/20, y_pos, cur_ball_radius*0.1); 
	      	p5.ellipse(x_pos  - cur_ball_radius/20, y_pos, cur_ball_radius*0.1);
	      	p5.ellipse(x_pos, y_pos  + cur_ball_radius/20, cur_ball_radius*0.1);
	      	p5.ellipse(x_pos, y_pos  - cur_ball_radius/20, cur_ball_radius*0.1);
	    	
	    	  p5.ellipse(x_pos + cur_ball_radius/32, y_pos + cur_ball_radius/32, cur_ball_radius*0.1); 
	      	p5.ellipse(x_pos  - cur_ball_radius/32, y_pos - cur_ball_radius/32, cur_ball_radius*0.1);
	      	p5.ellipse(x_pos - cur_ball_radius/32, y_pos  + cur_ball_radius/32, cur_ball_radius*0.1);
	      	p5.ellipse(x_pos + cur_ball_radius/32, y_pos  - cur_ball_radius/32, cur_ball_radius*0.1);


          p5.fill(255, 50);

          p5.ellipse(x_pos + cur_ball_radius/280, y_pos, cur_ball_radius*0.01); 
          p5.ellipse(x_pos  - cur_ball_radius/280, y_pos, cur_ball_radius*0.01);
          p5.ellipse(x_pos, y_pos  + cur_ball_radius/280, cur_ball_radius*0.01);
          p5.ellipse(x_pos, y_pos  - cur_ball_radius/280, cur_ball_radius*0.01);
        
          p5.ellipse(x_pos + cur_ball_radius/364, y_pos + cur_ball_radius/364, cur_ball_radius*0.01); 
          p5.ellipse(x_pos  - cur_ball_radius/364, y_pos - cur_ball_radius/364, cur_ball_radius*0.01);
          p5.ellipse(x_pos - cur_ball_radius/364, y_pos  + cur_ball_radius/364, cur_ball_radius*0.01);
          p5.ellipse(x_pos + cur_ball_radius/364, y_pos  - cur_ball_radius/364, cur_ball_radius*0.01);
	    }	
    	}
   		}
	}
}