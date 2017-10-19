var max_thickness = 256;
var max_movement = 600;
var max_movement2 = 30;
var ball_radius = 32;
var line_width = 8;
var grid_size = 256;
var grid_size2 = 24;

function getOffsetPoint(p5, x, y, z, noiseScale) {
    var noiseX = p5.noise(x * noiseScale, y * noiseScale, z);

    var noiseY = p5.noise(x * noiseScale, y * noiseScale, z + 50);

  var offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  var offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}

function getOffsetPoint2(p5, x, y, z, noiseScale) {
    var noiseX = p5.noise(x * noiseScale, y * noiseScale, z);

    var noiseY = p5.noise(x * noiseScale, y * noiseScale, z + 50);

    var offsetX = p5.map(noiseX, 0, 1, -max_movement2, max_movement2);
    var offsetY = p5.map(noiseY, 0, 1, -max_movement2, max_movement2);
    return [x + offsetX, y + offsetY]
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


  
  var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  var cur_line_width = c_plwidth - c_p00;
  

  //p5.background(255);
  //p5.fill(0, 0, 128);
  //for(var x=min_x; x<max_x; x+=grid_size) {
  //  for(var y=min_y; y<max_y; y+=grid_size) {
  //    var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
  //    var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
  //    var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

  //    p5.strokeweight(cur_line_width);
  //    p5.stroke(0, 0, 128);
  //    var shift_point2 = getoffsetpoint(p5, x+grid_size, y, z, 0.1);
  //    var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
  //    var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
  //    p5.line(x_pos, y_pos, x_pos2, y_pos2);

  //    p5.stroke(0, 128, 0);
  //    var shift_point2 = getoffsetpoint(p5, x, y+grid_size, z, 0.1);
  //    var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
  //    var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
  //    p5.line(x_pos, y_pos, x_pos2, y_pos2);

  //    p5.noStroke();
  //    p5.ellipse(x_pos, y_pos, cur_ball_radius);
  //  }
    //}



  var noiseScale = 0.02;

  p5.background(5, 28, 38);
  p5.noiseDetail(8, 0.5);
  p5.noStroke();


  for (var i = 0; i < 16; i++) {
      var n_x = p5.map(i, 0, 16, x1, x2);

      for (var j = 0; j < 16; j++) {
          var n_y = p5.map(j, 0, 16, y1, y2);

          var noiseVal = p5.noise(n_x * noiseScale, n_y * noiseScale, z);
          p5.fill(noiseVal * 35 + (3 * zoom), noiseVal * 114 + (16 * zoom), noiseVal * 147 + (25 * zoom), 5 + (15 * zoom));

          p5.rect(i * 16, j * 16, 16, 16);
      }
  }


  var cx = p5.map(512, x1, x2, 0, 256);
  var cy = p5.map(512, y1, y2, 0, 256);
  var cx2 = p5.map(512 + 20, x1, x2, 0, 256);


  
  //p5.ellipse(cx, cy, (cx2 - cx));

  //p5.ellipse(cx, cy, (cx2 - cx));
    //p5.ellipse(cx + cx2, cy + cx2, (cx2 - cx));

  var img = p5.createImg('Final_Flare2.png');

  for (var x = min_x; x < max_x; x += grid_size) {
      for (var y = min_y; y < max_y; y += grid_size) {

          var c_p00 = p5.map(0, x1, x2, 0, 256);
          var starScaleOffset = p5.noise(x, y, z + 100);
          var starScale = p5.map(starScaleOffset, 0, 1, 3, 10);
          var c_pball = p5.map(starScale, x1, x2, 0, 256);
          var cur_ball_radius = c_pball - c_p00;

          var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
          var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
          var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

          var connectionLineChance = (p5.noise(x * noiseScale, y * noiseScale, z + 10));
          var cl = p5.map(connectionLineChance, 0, 1, 1, 100);

          var connectionLineChance2 = (p5.noise(x * noiseScale, y * noiseScale, z + 5));
          var cl2 = p5.map(connectionLineChance2, 0, 1, 1, 100);

          //console.log(cl);

          p5.strokeWeight(cur_line_width);
          p5.noStroke();
          if (cl >= 62) {
              p5.stroke(62, 160, 198, 200);
              var cl = p5.map(connectionLineChance, 0, 1, 1, 100);
          }

          else {
              p5.noStroke();
          }

          var shift_point2 = getOffsetPoint(p5, x + grid_size, y, z, 0.1);
          var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
          var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
          p5.line(x_pos, y_pos, x_pos2, y_pos2);

          if (cl2 >= 72, cl2 < 80) {
              p5.stroke(62, 160, 198, 200);
              var cl2 = p5.map(connectionLineChance2, 0, 1, 1, 100);
          }

          if (cl2 >= 80) {
              p5.stroke(255, 160, 198, 200);
              var cl2 = p5.map(connectionLineChance2, 0, 1, 1, 100);
          }

          else {
              p5.noStroke();
          }

          var shift_point2 = getOffsetPoint(p5, x, y + grid_size, z, 0.1);
          var x_pos2 = p5.map(shift_point2[0], x1, x2, 0, 256);
          var y_pos2 = p5.map(shift_point2[1], y1, y2, 0, 256);
          p5.line(x_pos, y_pos, x_pos2, y_pos2);

          p5.noStroke();

          if (zoom >= 3) {
              p5.strokeWeight(3 + (0.1 * zoom));
              p5.stroke(255);
              p5.noFill();
              p5.ellipse(x_pos, y_pos, cur_ball_radius * 60 * noiseScale);

              if (cl >= 45) {
                  p5.ellipse(x_pos, y_pos, cur_ball_radius * 90 * noiseScale);
              }

              if (cl >= 60) {
                  p5.ellipse(x_pos, y_pos, cur_ball_radius * 120 * noiseScale * noiseVal);
              }

              if (cl >= 72) {
                  p5.ellipse(x_pos, y_pos, cur_ball_radius * 150 * noiseScale * noiseVal);
              }

          }

          if (cl >= 50) {
              p5.fill(117, 238, 251,200);
          }

          else {
              p5.fill(255, 90, 147,200);
          } 
          
          p5.noStroke();
          p5.ellipse(x_pos, y_pos, cur_ball_radius/1.2);
          p5.imageMode(p5.CENTER);
          p5.image(img, x_pos, y_pos, cur_ball_radius * 4, cur_ball_radius * 4);



      }
  }

}
