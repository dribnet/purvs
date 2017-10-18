var max_thickness = 64;
var max_movement = 32;
var ball_radius = 32;
var line_width = 10;
var grid_size = 64;
var y_pos;
var x_pos;
var num;
var ran_off_X; var ran_off_Y;

/* the random number seed for the tour */
var tourSeed = 0;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 1249.500000000000, -1322.000000000000],
  [2, 1249.875000000000, -1322.000000000000],
  [4, 1222.218750000000, -1345.437500000000],
  [6, 1224.257812500000, -1351.578125000000],
  [6, 1209.695312500000, -1292.250000000000],
  [2, 1196.625000000000, -1289.750000000000]
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


function newColor(p5, x, y, n, z){
      var noiseCol = p5.noise(x * n, y * n, z);

      var rancol = p5.map(noiseCol, 0, 1, 0, 10);
        if(rancol <= 4){
          if (rancol <= 2 ){
            p5.fill(164,64,1104,75);
          } 
          else if (rancol <= 3){
            p5.fill(164,64,1104,50);
          }
          else{
            p5.fill(164,64,1104,25);
          }
        } else {
          if (rancol <= 5 ){
            p5.fill(56,103,200,75);
          } 
          else if (rancol <= 6){
            p5.fill(56,103,200,50);
          }
          else{
            p5.fill(56,103,200,25);
          }
        }
      
}


function detailOne(p5, x1, x2, y1, y2, z, pos_x, pos_y, rad1, rad2 ,zoom) {
  var offsets = [
    [3,-1.5],[3,-0.5], [3,0.5],[3,1.5],
    [2,2],[2,1], [2,0], [2,-1], [2,-2],
    [1,2.5],[1,1.5], [1,0.5], [1,-0.5], [1,-1.5], [1,-2.5],
    [0,3],[0,2], [0,1], [0,0], [0,-1], [0,-2], [0,-3],
    [-1,2.5],[-1,1.5], [-1,0.5], [-1,-0.5], [-1,-1.5], [-1,-2.5],
    [-2,2],[-2,1], [-2,0], [-2,-1], [-2,-2],
    [-3,-1.5],[-3,-0.5], [-3,0.5],[-3,1.5]
  ]
  var offsets2 = [
    [2.55,-2],[2.55,-1],[2.55,0],[2.55,1],[2.55,2],
    [1.55,-2.5],[1.55,1.5], [1.55,0.5],[1.55,-0.5], [1.55,-1.5], [1.55,2.5],
    [0.55,-3],[0.55,2], [0.55,1], [0.55,0], [0.55,-1], [0.55,-2],[0.55,3],
    [-0.55,-3],[-0.55,2], [-0.55,1], [-0.5,0],[-0.55,-1], [-0.55,-2],[-0.55,3],
    [-1.55,-2.5],[-1.5,1.5], [-1.55,0.5], [-1.55,-0.5], [-1.55,-1.5],[-1.55,2.5],
    [-2.55,-2],[-2.55,-1],[-2.55,-0],[-2.55,1],[-2.55,2]
  ]
  var offsets3 = [
    [2.25,-1.5],[2.25,-0.5],[2.25,0.5],[2.25,1.5],
    [1.25,-1],[1.25,-2],[1.25,-0],[1.25,1],[1.25,2],
    [0.4,-1.5],[0.4,-2.5],[0.4,-0.5],[0.4,0.5],[0.4,1.5],[0.4,2.5],
    [-0.4,-1.5],[-0.4,-2.5],[-0.4,-0.5],[-0.4,0.5],[-0.4,1.5],[-0.4,2.5],
    [-1.25,-1],[-1.25,-2],[-1.25,-0],[-1.25,1],[-1.25,2],
    [-2.25,-1.5],[-2.25,-0.5],[-2.25,0.5],[-2.25,1.5]
  ]

  for(var i=0; i<offsets.length; i++) {
    var offset = offsets[i];
    sparks(p5, x1, x2, y1, y2, z, pos_x, pos_y, rad1, rad2 , zoom, offset)
  }

  for(var i=0; i<offsets2.length; i++) {
    var offset2 = offsets2[i];
    sparks(p5, x1, x2, y1, y2, z, pos_x, pos_y, rad1, rad2 , zoom, offset2)
  }

  for(var i=0; i<offsets3.length; i++) {
    var offset3 = offsets3[i];
    sparks(p5, x1, x2, y1, y2, z, pos_x, pos_y, rad1, rad2 , zoom, offset3)
  }
}

function sparks(p5, x1, x2, y1, y2, z, pos_x, pos_y, rad1, rad2 , zoom, offset){
  var pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  var pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  var pixel_radius = pixel_posx2 - pixel_posx1;
  var noiseScale = 1.0;

    ran_off_X = p5.noise(pos_x * noiseScale, pos_y * noiseScale, z+31);
    ran_off_Y = p5.noise(pos_x * noiseScale, pos_y * noiseScale, z+32);
    ran_off_X = p5.map(ran_off_X, 0, 1, -0.5, 0.5);
    ran_off_Y = p5.map(ran_off_Y, 0, 1, -0.5, 0.5);

    var pixel_x = p5.map(pos_x+0.5*rad1*offset[0], x1, x2, 0, 256);
    var pixel_y = p5.map(pos_y+0.5*rad1*offset[1], y1, y2, 0, 256);
    newColor(p5, pos_x , pos_y , noiseScale, z+10);
    p5.ellipse(pixel_x, pixel_y, pixel_radius/1.5);
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
  var noiseScale = 1.0;

  var c_p00 = p5.map(0, x1, x2, 0, 256);
  var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  var c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  var cur_line_width = c_plwidth - c_p00;
  var cur_ball_radius = c_pball - c_p00;

  p5.noStroke();
  p5.background(0);
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      if(zoom <= 1){
          newColor(p5, shift_point[0], shift_point[1] , noiseScale, z+10);
          p5.ellipse(x_pos, y_pos, cur_ball_radius*2);
          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.75);
          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.5);
          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.25);
       }
       if(zoom <= 2){
          newColor(p5, shift_point[0], shift_point[1] , noiseScale, z+10);
          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.75);
          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.5);
          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.25);
       }
       if(zoom <= 3){
          newColor(p5, shift_point[0], shift_point[1] , noiseScale, z+10);
          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.5);
          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.25);
       }
       if(zoom <= 4){
          newColor(p5, shift_point[0], shift_point[1] , noiseScale, z+10);
          p5.ellipse(x_pos, y_pos, cur_ball_radius*1.25);
       }

      if(zoom >= 4 && zoom <= 5){
          newColor(p5, shift_point[0], shift_point[1] , noiseScale, z+10);
          p5.ellipse(x_pos, y_pos, cur_ball_radius);
       }

      if(zoom >= 6) {
        detailOne(p5, x1, x2, y1, y2, z, shift_point[0], shift_point[1], ball_radius/3, line_width/2, zoom);  
      }   
    }
  }
}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }  
}

