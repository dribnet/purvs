var max_thickness = 64;
var max_movement = 32;
var rectWidth = 20;
var rectWidth1 = 40;
var rectWidth2 = 60;
var line_width = 1;
var line_width2 = 0.3;
var line_width3 = 0.05;
var grid_size = 64;
var grid_size = 20;
var curve_edge_amount =10;
var curve_edge_amount2 =0.1;
/* TOUR VARIABLES (required)
/* the random number seed for the tour */
var tourSeed = 100;
/* triplets of locations: zoom, x, y */
var tourPath = [
    [0,854.000000000000,808.000000000000],
    [2,723.750000000000,910.000000000000],
    [3,724.000000000000,910.000000000000],
    [5,730.343750000000,856.6875000],
    [6,730.484375000000,855.25000000000],
    [8,730.054687500000,855.148437500000]
]

function getOffsetPoint(p5, x, y, z, noiseScale) {
  var noiseX = p5.noise(x*noiseScale,
                       y*noiseScale, z);
  var noiseY = p5.noise(x*noiseScale,
                        y*noiseScale, z+50);
  var offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  var offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function drawRectangles(p5, x1, x2, y1, y2, pos_x, pos_y, size, thickness) {
  var pixel_y = p5.map(pos_y, y1, y2, 0, 256);
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+size, x1, x2, 0, 256);
  var line_posx1 = p5.map(pos_x+thickness, x1, x2, 0, 256);
  var pixel_size = pixel_posx2 - pixel_posx1;
  var lineWeight = line_posx1 - pixel_posx1;
  p5.strokeWeight(lineWeight);

  p5.ellipse(pixel_posx1+pixel_size, pixel_y, pixel_size, pixel_size); 
  p5.ellipse(pixel_posx1, pixel_y, pixel_size, pixel_size);    
  p5.ellipse(pixel_posx1-pixel_size, pixel_y, pixel_size, pixel_size);

}

function drawDetail(p5, x1, x2, y1, y2, pos_x_start, pos_y_start, pos_x_end, pos_y_end, thickness) {
  var pixel_x_start = p5.map(pos_x_start, x1, x2, 0, 256);
  var pixel_x_end = p5.map(pos_x_end, x1, x2, 0, 256);
  var pixel_y_start = p5.map(pos_y_start, y1, y2, 0, 256);
  var pixel_y_end = p5.map(pos_y_end, y1, y2, 0, 256);
  var line_x_start_thick = p5.map(pos_x_start+thickness, x1, x2, 0, 256);
  var lineWeight = line_x_start_thick - pixel_x_start;
  p5.strokeWeight(lineWeight);
  p5.line(pixel_x_start, pixel_y_start, pixel_x_end, pixel_y_end);     
  p5.line(pixel_x_end, pixel_y_start, pixel_x_start, pixel_y_end);    
  p5.ellipse(pixel_x_start, pixel_y_start, lineWeight*15);     
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
    p5.background(0);
    var noiseScale=0.02; 
    //the higher the less grouped.
    var noiseScale=0.01; 
    p5.noiseDetail(8,0.5);
    p5.noiseDetail(1,0.9);
    p5.noStroke();
    p5.rectMode(p5.center);


    var max_shift = max_thickness + max_movement;
    var min_x = snap_to_grid(x1 - max_shift, grid_size);
    var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
    var min_y = snap_to_grid(y1 - max_shift, grid_size);
    var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

   
////the size of things   
    var c_p00 = p5.map(0, x1, x2, 0, 256);
    var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
    var c_plwidth2 = p5.map(line_width2, x1, x2, 0, 256);
    var c_plwidth3 = p5.map(line_width3, x1, x2, 0, 256);
    var c_prect = p5.map(rectWidth, x1, x2, 0, 256);
    var c_prect1 = p5.map(rectWidth1, x1, x2, 0, 256);
    var c_prect2 = p5.map(rectWidth2, x1, x2, 0, 256);
    var c_edge = p5.map(curve_edge_amount, x1, x2, 0, 256);
    var cur_line_width = c_plwidth - c_p00;
    var cur_line_width2 = c_plwidth2 - c_p00; 
    var cur_line_width3 = c_plwidth3 - c_p00;
    var cur_rectWidth = c_prect - c_p00; 
    var cur_rectWidth1 = c_prect1 - c_p00; 
    var cur_rectWidth2 = c_prect2 - c_p00;
    var rect_detail = c_edge - c_p00;

    if(zoom >= 3){
         rectangles(true,rect_detail/2,rect_detail,false,cur_line_width3);    
     }
    p5.fill(0, 0, 128);
    //clouds
    rectangles(true,0,0,false,cur_line_width2);

    rectangles(false,0,0,false,cur_line_width);
    
    function rectangles(buildings,xTrans, yTrans,grayScale,strkeWeight){
        p5.push();
        p5.translate(xTrans,yTrans);
        for(var x=min_x; x<max_x; x+=grid_size) {
        for(var y=min_y; y<max_y; y+=grid_size) {
            //clouds:
            var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
            var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
            var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

            var noiseValue = p5.noise(x * noiseScale,y*noiseScale);


            p5.fill(noiseValue*120,noiseValue*200);
            p5.stroke(noiseValue*150,noiseValue*100);

            p5.strokeWeight(strkeWeight);
             var rectSize = noiseValue*2;


            if (buildings == true){
                var x_pos = p5.map(x, x1, x2, 0, 256);
                var y_pos = p5.map(y, y1, y2, 0, 256);
                var rectSize = 1;
                var noiseValue = p5.noise(x,y);
                //looks cool
                //console.log(noiseValue);
                brightness=0.25;
                  if(zoom >= 2) {
                       brightness=0.5;
                  }
                 if(zoom >= 3) {
                       brightness=.75;
                  }
                if(noiseValue<0.05) {
           p5.noStroke();;
           p5.fill(0);
                    p5.noFill();

        } 
                else if(noiseValue<0.1) {
           p5.stroke(240,150,70,50*brightness); 
           p5.fill(240,150,70,5*brightness);

        }
  else if(noiseValue<0.25) {
    p5.stroke(230,175,75,75*brightness);
      p5.fill(230,175,75,10*brightness);
  }
  else {
      p5.stroke(220,190,80,20*brightness);
       p5.fill(220,190,80,2*brightness);
  }
         if(grayScale == true){
                 
                         brightness=1;
          
                if(noiseValue<0.05) {
           p5.noStroke();;
           p5.fill(0);
                    p5.noFill();

      } 
                else if(noiseValue<0.1) {
           p5.stroke(60,50*brightness); 
           p5.fill(80,5*brightness);

      }
      else if(noiseValue<0.25) {
        p5.stroke(30,75*brightness);
          p5.fill(100,10*brightness);
      }
      else {
          p5.stroke(15,20*brightness);
           p5.fill(120,2*brightness);
      }
        }

            var noiseValue = p5.noise(x,y);
           
            p5.rect(x_pos, y_pos, cur_rectWidth*rectSize, cur_rectWidth1*rectSize, rect_detail/2);
             p5.rectMode(p5.CORNER);
            p5.rect(x_pos, y_pos, cur_rectWidth*rectSize, cur_rectWidth1*rectSize, rect_detail/2);
            p5.rectMode(p5.CENTER);
        }
        else{
             p5.rect(x_pos, y_pos, cur_rectWidth2*rectSize, cur_rectWidth1*rectSize, rect_detail);
        }
      
    }
  }
        
        
        p5.pop();
        
        
    }

    
    
  var min_x0 = snap_to_grid(x1, grid_size);
  var max_x0 = snap_to_grid(x2 + grid_size, grid_size);
  var min_y0 = snap_to_grid(y1, grid_size);
  var max_y0 = snap_to_grid(y2 + grid_size, grid_size);

  if(zoom >= 5) {
      p5.noFill();
      p5.stroke(100,100);

      for(var x=min_x0; x<max_x0; x+=0.25*grid_size) {
        for(var y=min_y0; y<max_y0; y+=0.25*grid_size) {
      var noiseValue = p5.noise(x,y);
        p5.stroke(noiseValue*150,noiseValue*100);
            drawRectangles(p5, x1, x2, y1, y2, x, y, 0.035*rectWidth, 0.0015*rectWidth);
            drawRectangles(p5, x1, x2, y1, y2, x, y, 0.07*rectWidth, 0.0035*rectWidth);
             p5.stroke(noiseValue*80,noiseValue*100);
             p5.fill(noiseValue*80,noiseValue*200);
             p5.stroke(220,190,80,5);
             p5.fill(220,190,80,15*noiseValue);
             if(zoom >= 6) {
                  p5.stroke(220,190,80,10);
             p5.fill(220,190,80,30*noiseValue);
             }
            drawRectangles(p5, x1, x2, y1, y2, x, y, 0.13*rectWidth, 0.007*rectWidth);
        }
      }
   }
   if(zoom >= 5) {
      p5.noFill();
      p5.stroke(0, 255, 0)
           p5.stroke(100,100);
      var cur_grid_size = 0.050*grid_size;
      for(var x=min_x0; x<max_x0; x+=cur_grid_size) {
        for(var y=min_y0; y<max_y0; y+=cur_grid_size) {
            p5.fill(255, 0, 0);
            p5.stroke(0);
             var noiseValue = p5.noise(x,y);
             p5.stroke(noiseValue*100,noiseValue*255);
             p5.fill(noiseValue*100,noiseValue*255);
            drawDetail(p5, x1, x2, y1, y2, x, y, x+cur_grid_size, y, 0.0007*rectWidth);
            drawDetail(p5, x1, x2, y1, y2, x, y, x, y+cur_grid_size, 0.0007*rectWidth);
            drawDetail(p5, x1, x2, y1, y2, x, y, x+cur_grid_size, y+cur_grid_size, 0.0007*rectWidth);
        }
      }
   }
    
    //debug
//       p5.noFill();
//   p5.stroke(0, 0, 255)
//   p5.rect(0, 0, 255, 255);
}

