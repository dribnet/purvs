var max_thickness = 64;
var max_movement = 32;
var ball_radius = 32;
var line_width = 8;
var grid_size = 100;
var gap_size = 100;

function getOffsetPoint(p5, x, y, z, noiseScale) {
  var noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  var noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  var offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  var offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  //return [x+offsetX, y+offsetY]
  return [x,y];
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}


function set_grid_size(zoom){
  if(zoom == 0){
    gap_size = 100;
  }
  else if(zoom == 1){
    gap_size =200;
  }
  else if(zoom == 2){
    gap_size =400;
  }
  else if(zoom == 3){
    gap_size =800;
  }
  else if(zoom == 4){
    gap_size =1600;
  }
  else if(zoom == 5){
    gap_size =3200;
  }
  console.log(gap_size);
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
  console.log(zoom);
  set_grid_size(zoom);
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

  p5.background(255);
  p5.fill(0, 0, 128);
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      //var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos = p5.map(x, x1, x2, 0, 256);
      var y_pos = p5.map(y, y1, y2, 0, 256);

      //p5.strokeWeight(cur_line_width);
      p5.stroke(0, 0, 0);
      var shift_point2 = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
    //  p5.line(x_pos, y_pos, x_pos2, y_pos2);

     // p5.stroke(0, 128, 0);
      var shift_point2 = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
      var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
     // p5.line(x_pos, y_pos, x_pos2, y_pos2);

      console.log(y_pos2 - y_pos);

      //p5.noStroke();
      //p5.ellipse(x_pos, y_pos, cur_ball_radius);
      drawShape(p5, x_pos, y_pos, gap_size/2);
    }
  }
}

function drawShape(p5,xpos, ypos, size){
  //p5.ellipse(xpos, ypos, size);
  // p5.ellipse(xpos + size, ypos, size/2);
  // p5.ellipse(xpos - size, ypos, size/2);
  // p5.ellipse(xpos, ypos + size, size/2);
  // p5.ellipse(xpos, ypos - size, size/2);

  // p5.push();
  // //print("Draw shape was called at: " + xpos + " , " + ypos);
  // p5.translate(xpos - (size * 0.5), ypos - (size * 0.5));
  // p5.line(size*0.5, 0, size*0.5, size);
  // p5.line(0, size*0.5, size, size*0.5);
  // let middle = size * 0.5;
  // let step = size * 0.05;
  let top = ypos - size;
  let right = xpos + size;
  let left = xpos - size;
  let bottom = ypos + size;
  let step = size / 10;
  for(i = 0; i <= 10; i++){
    p5.line(xpos, top + (step*i), xpos + (step*i), ypos);
    p5.line(xpos, bottom - (step*i), xpos + (step*i), ypos);
    p5.line(xpos, top + (step*i), xpos - (step*i), ypos);
    p5.line(xpos, bottom - (step*i), xpos - (step*i), ypos);
  }
  // p5.pop();
}