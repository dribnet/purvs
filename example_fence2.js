var max_thickness = 64;
var max_movement = 150;
var ball_radius = 16;
var line_width = 8;
var grid_size = 64;


//tour locations 
 var tourSeed = 391;
// /* triplets of locations: zoom, x, y */
 var tourPath = [
   [0, 646.000000000000, 511.000000000000],
   [2, 491.000000000000, 632.625000000000],
   [3, 429.250000000000, 548.000000000000],
   [5, 431.312500000000, 559.656250000000],
   [6, 434.234375000000, 563.171875000000],
   [7, 434.765625000000, 567.054687500000],
   [8, 422.863281250000, 552.699218750000],
   [9, 423.494140625000, 552.466796875000],
   [10, 423.576171875000, 552.553710937500],
   [11, 423.897949218750, 552.244140625000]
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

// Bubbles insinde pink bubbles - seen on zoom 8

function drawInception(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
     [1, 1],
     [2 ,1],  
  ]

  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.ellipse(10,10,20,20,);    
  }

}
//

// White Bubbles insinde pink bubbles - seen on zoom 9

function drawInception2(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
     [1, 1],
     [2 ,1],
     
  ]
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.ellipse(15,15,10,10,);    
  }

}
//

// white bottom bubbles - seen on zoom 10

function drawInception3(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
     [1, 1],
     [2 ,1],
     
  ]
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  //var bubble_scale = p5.map(pos_x, x1, , 200);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.ellipse(15,35,10,10,);    
  }

}

// white bottom bubbles -  seen on zoom 11
function drawInception4(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
     [1, 1],
     [2 ,1],
     
  ]
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  //var bubble_scale = p5.map(pos_x, x1, , 200);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.ellipse(30,20,10,10);    
  }

}
//

// White bubbles - sen on zoom 6

function drawsmallCircles(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
     [3, 1],
     [2.5, 3],
     [4.5, 2.5],
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
//

//Outline Bubbles - seen on zoom 3
function drawBubbleOutline(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
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
//

// inner bubble outline - seen on zoom 7

function drawBubbleOutline2(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
    [-40, -40],
    [-40.5, -40],
    [-42,-30],
    [-42.5,-30],
    [-42,-38],
    [-42.5,-38],
    [-40, -36],
    [-40.5, -36],
    [-42, -34],
    [-42.5, -34],
    [-38, -42],
    [-38.5, -42],
    [-36, -43],
    [-36.5, -43],
    [-34, -43.5],
    [-34.5, -43.5],
    [-31, -43],
    [-31.5, -43]
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
//

// inner bubbles - seen on zoom 6
function drawBubbleOutline3(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
    [0, 0]
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
//

// Corner Bubble - seen on zoom 5
function drawCornerBubble(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
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
//

// inner bubbles - seen on zoom 6
function drawInnerBubbles(p5, x1, x2, y1, y2, pos_x, pos_y, rad1, rad2) {
  var offsets = [
    [-1, -2],
    [-0.3, -2.3],
    [-2.1, -0.8]
    
  ]
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  
  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    p5.strokeWeight(0);
    p5.ellipse(pixel_x, pixel_y, pixel_radius-100);
    
    
  }
}
//

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

// ellipses
  p5.fill(255, 214, 223);
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 1);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      p5.noStroke();
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
      
      // draw ellipse
      p5.fill(255, 214, 223);
      p5.ellipse(x_pos, y_pos, cur_ball_radius);

// start of level/zooms

      if (zoom >=2) {
          p5.fill(255);
          p5.ellipse(x_pos-cur_ball_radius, y_pos, cur_ball_radius/6);
          p5.ellipse(x_pos+cur_ball_radius, y_pos, cur_ball_radius/6);
}
     

      if(zoom >= 3) {
        p5.noFill();
        p5.stroke(232, 192, 201);
        p5.strokeWeight(2);
        drawBubbleOutline(p5, x1, x2, y1, y2, shift_point[0]+6, shift_point[1], ball_radius, line_width);
        
        }
      

      if(zoom >=5) {
        p5.fill(232, 192, 201);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
        p5.fill(255, 214, 223);
        p5.stroke(0, 0, 128);
        drawCornerBubble(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);
           
      }

      if(zoom >=6) {
        p5.fill(255);
        drawsmallCircles(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);
        p5.fill(255, 214, 223,50);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
        p5.fill(255, 214, 223);
        drawInnerBubbles(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);

        p5.noFill();
        p5.stroke(225, 186, 196,90);
        p5.strokeWeight(2);
        drawBubbleOutline3(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius, line_width);
        drawBubbleOutline3(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius, line_width/2);
        drawBubbleOutline3(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius, line_width/4);
        drawBubbleOutline3(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius, line_width/6);
        drawBubbleOutline3(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius, 10);
        drawBubbleOutline3(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius, 8);
        drawBubbleOutline3(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius, 15);
        drawBubbleOutline3(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius, 12);
        drawBubbleOutline3(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius, 20);
      }

      if (zoom >=7) {
        p5.noFill();
        p5.stroke(225, 186, 196,90);
        p5.strokeWeight(2);
        drawBubbleOutline2(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/50, line_width/10);
        p5.fill(127, 198, 206,80);
        drawsmallCircles(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/15);
        drawsmallCircles(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3.2, line_width/30);

      }

       if (zoom >=8) {
      p5.fill(186, 148, 157);
      p5.noStroke();
        drawInception(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);
      }

      if (zoom >=9) {
        p5.fill(255);
        drawInception2(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);

      }

      if (zoom >=10) {
        p5.fill(255);
        drawInception3(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);

      }

      if (zoom >=11) {
        p5.fill(127, 198, 206);
        drawInception4(p5, x1, x2, y1, y2, shift_point[0], shift_point[1], ball_radius/3, line_width/2);

      }
    }
  }
}
