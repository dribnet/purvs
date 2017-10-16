var max_movement = 32;
var grid_size = 32;
var mt_count = 32;
var line_width = 8;

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
 * This is the function to implement to make your own abstract design.
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
  var max_shift = max_movement;
  var min_x = snap_to_grid(x1 - max_shift, grid_size);
  var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  var min_y = snap_to_grid(y1 - max_shift, grid_size);
  var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  // var bgColor = [30,135,140],
  var ellipseColor = [255,255,255],
      mtColor1 = p5.color(62,175,171),
      mtColor2 = p5.color(23,111,118),
      bgColor = p5.lerpColor(mtColor1,mtColor2,0.5);

  p5.background(bgColor);

  var vertices = [];

  // if(zoom >= 2) {
    for(var x=min_x; x<max_x; x+=grid_size) {
      for(var y=min_y; y<max_y; y+=grid_size) {
        var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
        var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
        var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
        vertices.push([x_pos,y_pos]);

        // using d3.js voronoi layout to calculate voronoi polygons
        var voronoi = d3.geom.voronoi()
        .clipExtent([
          [0, 0],
          [256, 256]
        ]);

        // create polygons using d3.js voronoi diagram
        var polygons = voronoi(vertices);

      }
    }

    // draw polygons
    for(var j=0; j<polygons.length; j++) {
      var apolygon = polygons[j];

      // pick a random color
      // var mtVal = p5.noise(x,y,z+10);
      var mtVal = p5.random(0,1);
      var mtColor = p5.lerpColor(mtColor1,mtColor2,mtVal);
      p5.fill(mtColor);
      p5.noStroke();

      p5.beginShape();
      for(var k=0; k<apolygon.length; k++) {
        var v = apolygon[k];
        p5.vertex(v[0], v[1]);
      }
      p5.endShape(p5.CLOSE);
    }
  // }

  // draw stars
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      var c_p00 = p5.map(0, x1, x2, 0, 256);
      var starSize = p5.noise(x, y, z+5);
      var ball_radius = p5.map(starSize, 0, 1, 2, 5);
      var c_pball = p5.map(ball_radius, x1, x2, 0, 256);
      var cur_ball_radius = c_pball - c_p00;

      p5.noStroke();
      p5.fill(ellipseColor);
      p5.ellipse(x_pos, y_pos, cur_ball_radius);
    }
  }
}
