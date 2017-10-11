var max_thickness = 128;
var max_movement = 256;
var ball_radius = 64;
var line_width = 8;
var grid_size = 256;

function getOffsetPoint(p5, x, y, z, noiseScale) {
  //curRandomSeed = p5.int(p5.focusedRandom(0, 100));
  var noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  var noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  var offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  var offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  //console.log(noiseY); 
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
	      //p5.blendMode(DARKEN);
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

  	/////Curved Lines
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
      //p5.line(x_pos, y_pos, x_pos2, y_pos2);


      p5.noStroke();
      p5.fill(255, 10 + zoom*5);
      
      ///////////// Triangles in back
      // p5.triangle(x_pos, y_pos, x_pos2, y_pos2, x_pos4, y_pos4); 
      ////////////////

	  p5.strokeWeight(cur_line_width/* + 0.1 * shift_point[1]*/);
      p5.stroke(5, 53, 76);
      p5.noFill();
      p5.bezier(x_pos, y_pos, x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2);
      p5.bezier(x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2, x_pos, y_pos);
      p5.bezier(x_pos, y_pos, x_pos4, y_pos4, x_pos2, y_pos2, x_pos3, y_pos3);
    
      p5.noStroke();

      /////////////////
     


    }
  }

  //////Small Curved Lines
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
	      //p5.line(x_pos, y_pos, x_pos2, y_pos2);


	      p5.noStroke();
	      p5.fill(255, 10 + zoom*5);
	      
	      ///////////// Triangles in back
	      // p5.triangle(x_pos, y_pos, x_pos2, y_pos2, x_pos4, y_pos4); 
	      ////////////////

		  p5.strokeWeight(cur_line_width/5/* + 0.1 * shift_point[1]*/);
	      p5.stroke(5, 53, 76);
	      p5.noFill();
	      p5.bezier(x_pos, y_pos, x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2);
	      p5.bezier(x_pos3, y_pos3, x_pos4, y_pos4, x_pos2, y_pos2, x_pos, y_pos);
	      p5.bezier(x_pos, y_pos, x_pos4, y_pos4, x_pos2, y_pos2, x_pos3, y_pos3);
	    
	      p5.noStroke();
    }
  }
}

///////////////Little circles
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
      var x_pos2 = p5.map(shift_x/2, x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_y/2, y1, y2, 0, 256);
      var x_pos3 = p5.map(shift_x/2, x1, x2, 0, 256);
      var y_pos3 = p5.map(shift_y/2, y1, y2, 0, 256);
      var x_pos4 = p5.map(shift_x/2, x1, x2, 0, 256);
      var y_pos4 = p5.map(shift_y/2, y1, y2, 0, 256);
      var x_pos5 = p5.map(shift_x/2, x1, x2, 0, 256);
      var y_pos5 = p5.map(shift_y/2, y1, y2, 0, 256);


      // if (zoom > 1) { 

      //   p5.fill(33, 83, 72);
      // }

      // else {
      // 	p5.fill(33, 83, 72, 50);
      // }


      // p5.ellipse(x_pos4, y_pos4, cur_ball_radius/2);
      // p5.ellipse(x_pos2, y_pos2, cur_ball_radius/4);

      p5.fill(33, 83, 72);
      // p5.ellipse(x_pos/2, y_pos/2, cur_ball_radius);
      // p5.ellipse(x_pos2/2, y_pos2/2, cur_ball_radius/15);
      // p5.ellipse(x_pos3/2, y_pos3/2, cur_ball_radius/25);
      // p5.ellipse(x_pos4/2, y_pos4/2, cur_ball_radius/20);
      // p5.ellipse(x_pos3/4, y_pos3/4, cur_ball_radius/15);
  
    }
  }


///// Main Circles
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


    if (zoom > 4) { 
		p5.fill(4, 21, 31, 30);
    }

    	else {
      p5.fill(200, 60);
    	}

      //p5.fill(200, 60);
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
      // p5.ellipse(x_pos, y_pos, cur_ball_radius*0.5);
      

      // p5.ellipse(x_pos5, y_pos5, cur_ball_radius/2);
      // p5.ellipse(x_pos4, y_pos4, cur_ball_radius*0.2);
      // p5.ellipse(x_pos3, y_pos3, cur_ball_radius*0.7);
      // p5.ellipse(x_pos2, y_pos2, cur_ball_radius*0.5);

      

    }
   }


   ///// Main Circles Inner detail
   if (zoom > 3) {

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
    	 }
   		}
	}

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
 		
 		p5.strokeWeight(0.5);
	    p5.noFill();
	    p5.stroke(255);
	    p5.bezier(x_pos, y_pos, x_pos3, y_pos3, x_pos4, y_pos4, x_pos, y_pos);
	    p5.bezier(x_pos, y_pos, x_pos4, y_pos4, x_pos2, y_pos2, x_pos, y_pos);
	    p5.bezier(x_pos, y_pos, x_pos5, y_pos5, x_pos3, y_pos3, x_pos, y_pos);
		}
	}
}

// function drawPattern () {

//   for(var x=min_x; x<max_x; x+=grid_size) {
//     for(var y=min_y; y<max_y; y+=grid_size) {

//       p5.noLoop();
//       var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
//       var shift_x = shift_point[0];
//       var shift_y = shift_point[1];

//       var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
//       var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
//       var x_pos3 = p5.map(shift_x-300, x1, x2, 0, 256);
//       var y_pos3 = p5.map(shift_y+300, y1, y2, 0, 256);
//       var x_pos4 = p5.map(shift_x-450, x1, x2, 0, 256);
//       var y_pos4 = p5.map(shift_y+150, y1, y2, 0, 256);
//       var x_pos5 = p5.map(shift_x+700, x1, x2, 0, 256);
//       var y_pos5 = p5.map(shift_y+700, y1, y2, 0, 256);

      
//       var shift_point2 = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
//       var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
//       var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256)

//       triangle(x_pos, y_pos,x_pos2, y_pos2, x_pos3, x_pos3);



//       endShape();
//     } 
//    }
//	}







   // for(var x=min_x; x<max_x; x+=grid_size) {
   //  for(var y=min_y; y<max_y; y+=grid_size) {

   // 	max_shift = max_thickness + max_movement;
   // 	min_x = snap_to_grid(x1 - max_shift, grid_size);
   // 	max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
   // 	min_y = snap_to_grid(y1 - max_shift, grid_size);
   // 	max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

   // 	  var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
   //    var x_pos = p5.map(shift_point[0], x1, x2, 0, 128);
   //    var y_pos = p5.map(shift_point[1], y1, y2, 0, 128);
   //    var x_pos3 = p5.map(shift_x, x1, x2, 0, 128);
   //    var y_pos3 = p5.map(shift_y, y1, y2, 0, 128);
   //    var x_pos4 = p5.map(shift_x, x1, x2, 0, 128);
   //    var y_pos4 = p5.map(shift_y, y1, y2, 0, 128);
  


  	//   p5.fill(255, 17);
   //    p5.triangle(x_pos3, y_pos3, x_pos2, y_pos2, x_pos4, y_pos4); 
   //  	}
   // 	}


	  




  // debug - show border
  // p5.noFill();
  // p5.strokeWeight(1.0);
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);




}