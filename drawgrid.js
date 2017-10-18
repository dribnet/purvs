var max_thickness = 64;
var max_movement = 32;
var rectWidth = 20;
var rectWidth1 = 40;
var rectWidth2 = 60;
var line_width = 1;
var line_width2 = 0.3;
var grid_size = 64;
var grid_size = 20;
var curve_edge_amount =10;

/* TOUR VARIABLES (required)
/* the random number seed for the tour */
var tourSeed = 100;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 673, 1180],
  [1,800,1048],
  [1, 512, 512]
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
//    if(zoom <= 2){
        rectangles(false);
//    }
    
    
    function rectangles(buildings){
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
        //clouds:
        var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
        var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
        var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
        
        var noiseValue = p5.noise(x * noiseScale,y*noiseScale);


        p5.fill(noiseValue*120,noiseValue*200);
        p5.stroke(noiseValue*150,noiseValue*100);
//          if(noiseValue <0.1){
//             p5.fill(20, 2, 8,noiseValue*255);
//           p5.stroke(20, 2, 8,noiseValue*255*1.5);
//        }
//        else if(noiseValue <0.25){
//                p5.fill(3, 0, 3,noiseValue*255);
//           p5.stroke(3, 0, 3,noiseValue*255*1.5);
//        }
//      
        
        p5.strokeWeight(cur_line_width);
         var rectSize = noiseValue*2;
              

        if (buildings == true){
            var x_pos = p5.map(x, x1, x2, 0, 256);
            var y_pos = p5.map(y, y1, y2, 0, 256);
            var rectSize = 1;
            var noiseValue = p5.noise(x,y);
            //looks cool
            //console.log(noiseValue);
            brightness=0.25;
              if(zoom >= 1) {
                   brightness=0.25;
              }
             if(zoom >= 2) {
                   brightness=.3;
              }
             if(zoom >= 3) {
                   brightness=0.5;
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

            var noiseValue = p5.noise(x,y);

            p5.strokeWeight(cur_line_width2);
      
           
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

