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
 var BGC = "#D963C9";
 var LC = "#E8A65F";

 var maxZoomLevel = 11;

 var max_thickness = 64;
 var max_movement = 32;
 var ball_radius = 32;
 var line_width = 8;

 function snap_to_grid(num, gsize) {
 	return (num - (num % gsize));
 }

 function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // debug - show border
  // p5.rect (0,)
  // p5.scale (zoom/10+1);
  p5.fill(BGC);
  p5.stroke (BGC);
  if (zoom >= 7){
  	p5.fill("#A62A85");

  	p5.stroke("#A62A85");
  }
  p5.rect(0, 0, 255, 255);

  p5.strokeWeight(1.5);

  var max_shift = 250;
  var grid_size = 50;
  var min_x = snap_to_grid(x1 - max_shift, grid_size);
  var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  var min_y = snap_to_grid(y1 - max_shift, grid_size);
  var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);


  p5.noFill();

  var noiseScale = 1;
  p5.noiseDetail (8,0.5);
  for(var i=min_x; i<max_x; i=i+grid_size) {
  	var n_x = p5.map(i, 0, 16, x1, x2);
  	for(var j=min_y; j<max_y; j=j+grid_size) {
  		var lx1 = p5.map (16, x1, x2, 0, 256);
  		var lx2 = p5.map (i, x1, x2, 0, 256);
  		var lx3 = p5.map (i+255, x1, x2, 0, 256);

  		var sx3 = p5.map (i+82, x1, x2, 0, 256);

  		var sy3 = p5.map (j+160, x1, x2, 0, 256);

  		var ly1 = p5.map (j+255, y1, y2, 0, 256);
  		var ly2 = p5.map (j, y1, y2, 0, 256);
  		var n_y = p5.map(j, 0, 16, y1, y2);
  		var noiseVal = p5.noise(n_x * noiseScale, n_y * noiseScale, z);

  		var c_p00 = p5.map(0, x1, x2, 0, 256);
  		var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  		var c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  		var cur_line_width = c_plwidth - c_p00;
  		var cur_ball_radius = c_pball - c_p00;
  		var x_pos = p5.map(i, x1, x2, 0, 256);
  		var y_pos = p5.map(j, y1, y2, 0, 256);

  		var x_pos2 = p5.map(i+255, x1, x2, 0, 256);
  		if (zoom == 3){
  			p5.strokeWeight (noiseVal*(zoom+6));
  			p5.stroke (158, 70, 90, 50);
  			p5.fill (158, 70, 90, 50);
  		}
  		 if (zoom >=3){

  	p5.stroke (158, 70, 90, 175);

  	p5.fill (158, 70, 90, 175);
  }
  	if (zoom <= 3){
  	p5.strokeWeight (noiseVal*(zoom*6+1));
  		p5.stroke(LC);
  		p5.line (lx2, ly2, lx3, ly1);
  		p5.line (lx2, ly1, lx3, ly2);
  	}
  	if (zoom >= 3 && zoom <= 7){

  		p5.line(x_pos, y_pos+10, x_pos2, y_pos);
  	}
  	if (zoom >=3 && zoom<= 6){
  		p5.strokeWeight(noiseVal*(zoom*2+6));
  		p5.ellipse (x_pos+10, y_pos+10, cur_ball_radius);
  	}

  	}
  } 
 

  if (zoom >=7){
  	p5.push();
  	p5.scale (zoom/7);
  	for (p=0; p<=p5.width; p=p+15){
  		for (q=0; q<=p5.height; q=q+15){
  			p5.stroke (60, 232, 230, zoom*15-50);
  			p5.fill (79, 211, 255, zoom*15-50);
  			p5.strokeWeight(noiseVal*(zoom+2));
  			p5.triangle (p, q, p+14, q, p+7.5, q+14);
  		}
  	}
  	p5.pop();
  
}



  }


