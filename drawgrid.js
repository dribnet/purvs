var max_thickness = 64;
var max_movement = 32;
var rectWidth = 20;
var rectWidth1 = 40;
var rectWidth2 = 60;
var line_width = 1;
var line_width2 = 0.8;
var grid_size = 64;
var grid_size = 20;
var curve_edge_amount =10;

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
          p5.rectMode(p5.CENTER);
    

  var max_shift = max_thickness + max_movement;
  var min_x = snap_to_grid(x1 - max_shift, grid_size);
  var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  var min_y = snap_to_grid(y1 - max_shift, grid_size);
  var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

   
////the size of things   
    var c_p00 = p5.map(0, x1, x2, 0, 256);
    var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
    var c_plwidth2 = p5.map(line_width2, x1, x2, 0, 256);
    var c_prect = p5.map(rectWidth, x1, x2, 0, 256);
    var c_prect1 = p5.map(rectWidth1, x1, x2, 0, 256);
    var c_prect2 = p5.map(rectWidth2, x1, x2, 0, 256);
    var c_edge = p5.map(curve_edge_amount, x1, x2, 0, 256);
    var cur_line_width = c_plwidth - c_p00;
    var cur_line_width2 = c_plwidth2 - c_p00;
    var cur_rectWidth = c_prect - c_p00; 
    var cur_rectWidth1 = c_prect1 - c_p00; 
    var cur_rectWidth2 = c_prect2 - c_p00;
    var rect_detail = c_edge - c_p00;

  p5.fill(0, 0, 128);
    //clouds
    rectangles(true);
    rectangles(false);
    
    function rectangles(buildings){
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
        //clouds:
        var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
        var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
        var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
        
        var noiseValue = p5.noise(x * noiseScale,y*noiseScale);

        p5.fill(noiseValue*180,noiseValue*255*1.5);
        p5.stroke(noiseValue*200,noiseValue*255);
        p5.fill(noiseValue*230,noiseValue*255*1.5);
        p5.stroke(noiseValue*255,noiseValue*255);
        p5.strokeWeight(cur_line_width);
         var rectSize = noiseValue*2;
              

        if (buildings == true){
            var x_pos = p5.map(x, x1, x2, 0, 256);
            var y_pos = p5.map(y, y1, y2, 0, 256);
            var rectSize = 1;
            var noiseValue = p5.noise(x,y);
            //looks cool
            //console.log(noiseValue);
            brightness=0.5;
             if(noiseValue<0.1) {
       p5.stroke(240,150,70,50*brightness);
  }
  else if(noiseValue<0.25) {
    p5.stroke(230,175,75,75*brightness);
  }
  else {
      p5.stroke(220,190,80,20*brightness);
  }

             //p5.stroke(240,150,70,50);
            //p5.fill(noiseValue*230); 
            p5.noFill();
            // p5.fill(p5.random(0,200),p5.random(0,200)); 
            //p5.stroke(noiseValue*200,noiseValue*255*2);
            var noiseValue = p5.noise(x,y);
            //p5.stroke(noiseValue*100,noiseValue*255*2);
            p5.strokeWeight(cur_line_width2);
            // p5.stroke(220,200,80,50);
           // var rect_detail=0;
            
             //p5.rect(x_pos, y_pos, cur_rectWidth/4*rectSize, cur_rectWidth*rectSize, rect_detail/3);
            p5.rect(x_pos, y_pos, cur_rectWidth*rectSize, cur_rectWidth1*rectSize, rect_detail/2);
        }
        else{
             p5.rect(x_pos, y_pos, cur_rectWidth2*rectSize, cur_rectWidth1*rectSize, rect_detail);
        }
      
    }
  }
  }
//    
//    p5.fill(255,0,0);
//    p5.rect(x1,x2, c_p00, c_p00);
//p5.rect(x1,x2, 200, 200);
    //debug - show border
//   p5.noFill();
//   p5.stroke(255, 0, 0)
//   p5.rect(0, 0, 255, 255);
}

