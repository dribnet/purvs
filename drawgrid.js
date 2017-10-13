var max_thickness = 64;
var max_movement = 32;
var ball_radius = 40;
var line_width = 1;
var grid_size = 64;
var grid_size = 20;
var curve_edge_amount =10;

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
    p5.background(0);
//noise
  var noiseScale=0.02; 
    var noiseScale=0.01; 
    //the higher the less grouped.
    var noiseScale=0.01; 
  p5.noiseDetail(8,0.5);
    p5.noiseDetail(1,0.9);
  p5.noStroke();
//  for(var i=0; i<16; i++) {
//    var n_x = p5.map(i, 0, 16, x1, x2);
//    for(var j=0; j<16; j++) {
//      var n_y = p5.map(j, 0, 16, y1, y2);
//      var noiseVal = p5.noise(n_x * noiseScale,
//                              n_y * noiseScale, z);
//         console.log(noiseVal);
//        if(noiseVal > 0.3){
//      p5.fill(noiseVal*255);
//        }
//        else {
//           // p5.fill(0); 
//            p5.noFill();
//        }
//      p5.rect(i*16, j*16, 16, 16);
//    }
//  }
    
    //redsquares
//  p5.noFill();
//  p5.stroke(255, 0, 0)
//  p5.rect(0, 0, 255, 255);
    
    
////grid
  var max_shift = max_thickness + max_movement;
  var min_x = snap_to_grid(x1 - max_shift, grid_size);
  var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  var min_y = snap_to_grid(y1 - max_shift, grid_size);
  var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

   
  var c_p00 = p5.map(0, x1, x2, 0, 256);
  var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  var c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  var c_edge = p5.map(curve_edge_amount, x1, x2, 0, 256);
  var cur_line_width = c_plwidth - c_p00;
  var cur_ball_radius = c_pball - c_p00;
  var rect_detail = c_edge - c_p00;

  p5.background(255,100);
    p5.background(0);
  p5.fill(0, 0, 128);
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
        
var noiseValue = p5.noise(x * noiseScale, y * noiseScale);
         //if(noiseValue > 0.1){
      p5.fill(noiseValue*200,noiseValue*200);
        p5.fill(noiseValue*200,noiseValue*255);
        p5.fill(noiseValue*200,noiseValue*230);
         p5.stroke(noiseValue*200,noiseValue*255);
        p5.strokeWeight(0.1);
             var cloudSize = noiseValue*2;
      //  }
//        else {
//           // p5.fill(0); 
//            p5.noFill();
//            var cloudSize = 0;
//        }
      p5.strokeWeight(cur_line_width);
     // p5.stroke(0, 0, 128);
      var shift_point2 = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
      //p5.line(x_pos, y_pos, x_pos2, y_pos2);

      //p5.stroke(0, 128, 0);
      var shift_point2 = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
     // p5.line(x_pos, y_pos, x_pos2, y_pos2);

    //  p5.noStroke();
        p5.rectMode(p5.CENTER);
      //p5.ellipse(x_pos, y_pos, cur_ball_radius);
        p5.rect(x_pos, y_pos, cur_ball_radius*cloudSize, cur_ball_radius/1.5*cloudSize, rect_detail);
    }
  }
    
    
// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
//  p5.noStroke();
//  console.log(y1, y2);
//  p5.background(255);
//  p5.rectMode(p5.CORNERS);
//
//  // The first red rectangle fills the entire space
//  var cx = p5.map(512-960/2, x1, x2, 0, 256);
//  var cy = p5.map(512-720/2, y1, y2, 0, 256);
//  var cx2 = p5.map(512+960/2, x1, x2, 0, 256);
//  var cy2 = p5.map(512+720/2, y1, y2, 0, 256);
//  p5.fill(255, 0, 0);
//  p5.rect(cx, cy, cx2, cy2);
//
//  // The second black rectangle is inset to form a frame inset by 20 units
//  cx = p5.map(512-940/2, x1, x2, 0, 256);
//  cy = p5.map(512-700/2, y1, y2, 0, 256);
//  cx2 = p5.map(512+940/2, x1, x2, 0, 256);
//  cy2 = p5.map(512+700/2, y1, y2, 0, 256);
//  p5.fill(0);
//  p5.rect(cx, cy, cx2, cy2);
//
//  // Two ellipses with a radius of 50 units are then added.
//  var cx = p5.map(512, x1, x2, 0, 256);
//  var cy = p5.map(512, y1, y2, 0, 256);
//  var cx2 = p5.map(512+50, x1, x2, 0, 256);
//  p5.fill(0, 0, 255);
//  p5.ellipse(cx, cy, (cx2-cx));
//
//  // The second green ellipse is above and to the left of the first one.
//  var cx = p5.map(412, x1, x2, 0, 256);
//  var cy = p5.map(412, y1, y2, 0, 256);
//  var cx2 = p5.map(412+50, x1, x2, 0, 256);
//  p5.fill(0, 255, 0);
//  p5.ellipse(cx, cy, (cx2-cx));

}

