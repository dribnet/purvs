var max_thickness = 64;
var max_movement = 32;
var ball_radius = 64;
var line_width = 8;
var grid_size = 64;

/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
    [3,328.187500000000,462.375000000000],
    [6,324.117187500000,456.515625000000],
    [7,321.402343750000,463.023437500000],


    [8,509.572265625000,511.597656250000]
    [8,513.916015625000,512.691406250000]
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



function drawDots_red(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2, drawLines) {
  var offsets = [
      
      //red grid
      [0.5,0.5],
      [1.5,0.5],
      [2.5,0.5],
      [3.5,0.5],
      [4.5,0.5],
      [5.5,0.5],
      
      [0.5,1.5],
      [1.5,1.5],
      [2.5,1.5],
      [3.5,1.5],
      [4.5,1.5],
      [5.5,1.5],
      
      [0.5,2.5],
      [1.5,2.5],
      [2.5,2.5],
      [3.5,2.5],
      [4.5,2.5],
      [5.5,2.5],
      
      [0.5,3.5],
      [1.5,3.5],
      [2.5,3.5],
      [3.5,3.5],
      [4.5,3.5],
      [5.5,3.5],
      
      [0.5,4.5],
      [1.5,4.5],
      [2.5,4.5],
      [3.5,4.5],
      [4.5,4.5],
      [5.5,4.5],
      
      [0.5,5.5],
      [1.5,5.5],
      [2.5,5.5],
      [3.5,5.5],
      [4.5,5.5],
      [5.5,5.5],
      
      
  ]



  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  for(var i=0; i<offsets.length; i++) {
   var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
      
    var pixel_x2 = p5.map(pos_x+0.6*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y2 = p5.map(pos_y+0.6*rad1*offset[1], y1, y2, 0, 256); 
      
    var pixel_x3 = p5.map(pos_x+0.4*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y3 = p5.map(pos_y+0.4*rad1*offset[1], y1, y2, 0, 256); 
   
    p5.strokeWeight(1);
    p5.stroke(255);  
      
    p5.ellipse(pixel_x, pixel_y, pixel_radius/3);



       if(drawLines) {
 
    p5.strokeWeight(3);
        p5.line(pixel_x-50, pixel_y-140, pixel_x+5, pixel_y+140);
        p5.line(pixel_x+50, pixel_y-140, pixel_x-5, pixel_y+140);

        p5.line(pixel_x, pixel_y-140, pixel_x-50, pixel_y+140);
        p5.line(pixel_x+50, pixel_y+140, pixel_x-5, pixel_y-140);

		
  	}


      }
}


function drawDots_black(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2, drawEllipses,drawEllipses_4,drawEllipses_8,drawEllipses_6) {
  var offsets = [
      

      //black grid
      [0.5,0.5],
      [1.6,0.9],
      [2.1,0.2],
      [3 ,0.9],
      [3.9,0.2],
      [5.1,0.9],
      
      [0.9,1.6],
      [2.3,1.6],
      [3.7,1.6],
      [5.2,1.6],
      
      [0.2,2.3],
      [1.6,2.3],
      [3,2.3],
      [4.4,2.3],
      [5.8,2.3],
      
      //center
      
      [0.7,3],
      [2.3,3],
      [3.7,3],
      [5.3,3],
      
      //center
      
      [0.2,3.7],
      [1.7,3.7],
      [3,3.7],
      [4.4,3.7],
      [5.8,3.7],
      
      [0.9,4.4],
      [2.3,4.4],
      [3.7,4.4],
      [5.1,4.4],
      
      [1.7,5.2],
      [3,5.2],
      [4.3,5.2],
      
      [0.5,5.5],
      [2.1,5.8],
      [3.9,5.8],
      [5.5,5.5],
      
  ]
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
      
    var pixel_x2 = p5.map(pos_x+0.6*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y2 = p5.map(pos_y+0.6*rad1*offset[1], y1, y2, 0, 256); 
      
    var pixel_x3 = p5.map(pos_x+0.4*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y3 = p5.map(pos_y+0.4*rad1*offset[1], y1, y2, 0, 256); 
   
      
   
    p5.strokeWeight(1);
    p5.stroke(255);  
      
    p5.ellipse(pixel_x, pixel_y, pixel_radius/3);


    if(drawEllipses) {
      //p5.strokeWeight(pixel_radius / 100);
      p5.noFill();
      p5.stroke(255);
      p5.strokeWeight(1);    
      p5.ellipse(pixel_x, pixel_y,110);
      p5.strokeWeight(1);
      p5.ellipse(pixel_x2, pixel_y2, 10);
      p5.ellipse(pixel_x3, pixel_y3, 10);
   
        p5.fill(0);
    } 

     if(drawEllipses_6) {
      //p5.strokeWeight(pixel_radius / 100);
      p5.noFill();
      p5.stroke(255);
      p5.strokeWeight(1);    
      p5.ellipse(pixel_x, pixel_y,50);
      p5.strokeWeight(1);
      p5.ellipse(pixel_x2, pixel_y2, 10);
      p5.ellipse(pixel_x3, pixel_y3, 10);
   
        p5.fill(0);
    }  

     if(drawEllipses_8) {
      //p5.strokeWeight(pixel_radius / 100);
      p5.noFill();
      p5.stroke(255);
      p5.strokeWeight(3);    
      p5.ellipse(pixel_x, pixel_y,250);
       p5.fill(0);
    }  
      
     if(drawEllipses_4) {
      //p5.strokeWeight(pixel_radius / 100);
      p5.noFill();
      p5.stroke(255);
      p5.strokeWeight(1);    
      p5.ellipse(pixel_x, pixel_y,10);
       p5.fill(0);
    }   

      
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

       var drawEllipses = false;
       var drawEllipses_4 = false;
       var drawEllipses_6 = false;
       var drawEllipses_8 = false;
        var drawLines = false;
        var drawDetail = false;


  	//grid
  p5.background(255);
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 0);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      p5.strokeWeight(cur_line_width);
          
        p5.fill(214, 183, 85);
        p5.stroke(255);   
        p5.strokeWeight(1);  
      p5.rect(x_pos, y_pos, cur_ball_radius,cur_ball_radius); 

  		//subtle circle pattern
      if(zoom == 2 || zoom == 3) {
      	p5.push();
      	p5.scale(0.4);
      	drawDots_red(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2, drawLines);
        p5.strokeWeight(3);
          
        p5.fill(0);
        drawDots_black(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2, drawEllipses,drawEllipses_4,drawEllipses_8,drawEllipses_6);
        p5.pop();
      }


      //circle pattern

      if(zoom == 4 || zoom == 5) {
   
          p5.fill(61);

           p5.fill(110,31,31);
        p5.strokeWeight(4);
        p5.stroke(255);  
          
        drawDots_red(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2, drawLines);
        p5.strokeWeight(4);
          
           p5.fill(0);
          drawDots_black(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2, drawEllipses, drawEllipses_4,drawEllipses_8,drawEllipses_6);
 		drawEllipses = false;
    	drawLines = false;
    	drawDetail = false;
    	drawEllipses_8 = false;
    	drawEllipses_4 = true;
    	
       
      }
      // Circle pattern + White Circles
          if (zoom == 6 || zoom == 7)   {
           p5.fill(110,31,31);
        p5.strokeWeight(5);
        p5.stroke(255);  
          
        drawDots_red(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2, drawLines);
        p5.strokeWeight(5);
          
           p5.fill(0);
          drawDots_black(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2, drawEllipses,drawEllipses_4,drawEllipses_8,drawEllipses_6);

          p5.strokeWeight(5);
          p5.stroke(255);  

             
        drawEllipses = false;
    	drawLines = false;
    	drawDetail = false;
    	drawEllipses_8 = false;
    	drawEllipses_6 = true;
    	drawEllipses_4 = false;
    	}


    	//Circle pattern + Lines + White Circles

        if (zoom == 8 || zoom == 9) {
        	 p5.fill(110,31,31);
        p5.strokeWeight(6);
        p5.stroke(255);  
          
   
    p5.strokeWeight(5);
        drawDots_red(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2, drawLines);
        p5.strokeWeight(6);
          
           p5.fill(0);
          drawDots_black(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2, drawEllipses,drawEllipses_4,drawEllipses_8,drawEllipses_6);
          


        drawEllipses = true;
        drawEllipses_8 = true;
        drawEllipses_4 = false;
   		drawLines = true;
   		drawDetail = true;
   	}

       
      
        



    }
  }
}