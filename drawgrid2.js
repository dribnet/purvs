var max_city_movement = 48;
var max_bldg_movement = 10;
var grid_size = 32;
var mt_count = 32;

function getOffsetPoint(p5, x, y, z, noiseScale, max_shift) {
  var noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  var noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  var offsetX = p5.map(noiseX, 0, 1, -max_shift, max_shift);
  var offsetY = p5.map(noiseY, 0, 1, -max_shift, max_shift);
  return [x+offsetX, y+offsetY]
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function drawCluster(p5, x1, x2, y1, y2, z, zoom, x_c, y_c, size, starSize) {
// function drawCluster(p5, x1, x2, y1, y2, z, zoom, x_c, y_c, size, citySize) {
  var bldgColor1 = p5.color(246,172,145),
      bldgColor2 = p5.color(233,137,111),
      bldgColor3 = p5.color(230,115,114);


  var noiseScale = 0.5;
  var noise_num_clusters = p5.noise(x_c * noiseScale, y_c * noiseScale, z+101);
  var num_bldgs = Math.floor(p5.map(starSize*9+noise_num_clusters, 0, 10, 0, 15));

  for(var i=0; i<num_bldgs; i++) {
    var off = getOffsetPoint(p5, x_c, y_c, z+33+i, 0.5, max_bldg_movement*starSize);
    var x_pos = p5.map(off[0], x1, x2, 0, 256);
    var y_pos = p5.map(off[1], y1, y2, 0, 256);

    var noiseBldg = p5.noise(x_c, y_c, z+73+i);
    var sizeBldg = Math.floor(p5.map(starSize+noiseBldg, 0, 2, 0, size));

    var bldgColor;
    if (noiseBldg < .4) {
      bldgColor = bldgColor1;
    } else if (noiseBldg > .7) {
      bldgColor = bldgColor3;
    } else {
      bldgColor = bldgColor2;
    }

    p5.fill(bldgColor);
    p5.rect(x_pos, y_pos, sizeBldg, sizeBldg);

    // if(zoom >=8) {
    //   p5.fill(0, 0, 100);
    //   p5.rect(x_pos - sizeBldg*0.2, y_pos, sizeBldg*0.1, sizeBldg*0.1);
    //   p5.rect(x_pos + sizeBldg*0.2, y_pos, sizeBldg*0.1, sizeBldg*0.1);
    // }
  }
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
  var max_shift = max_city_movement;
  var min_x = snap_to_grid(x1 - max_shift, grid_size);
  var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  var min_y = snap_to_grid(y1 - max_shift, grid_size);
  var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  // var bgColor = [30,135,140],
  var ellipseColor = [255,255,255],
      mtColor1 = p5.color(62,175,171),
      mtColor2 = p5.color(23,111,118),
      cityColor1 = p5.color(248,172,142),
      cityColor2 = p5.color(239,155,133),
      bgColor = p5.lerpColor(mtColor1,mtColor2,0.5);

  p5.background(bgColor);

  var vertices = [];
  var world_vertices = [];

  if(zoom >= 2) {
    for(var x=min_x; x<max_x; x+=grid_size) {
      for(var y=min_y; y<max_y; y+=grid_size) {
        var shift_point = getOffsetPoint(p5, x, y, z, 0.1, max_city_movement);
        var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
        var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
        vertices.push([x_pos,y_pos]);
        world_vertices.push([shift_point[0], shift_point[1]]);
      }
    }
    // using d3.js voronoi layout to calculate voronoi polygons
    var voronoi = d3.geom.voronoi();

    // create polygons using d3.js voronoi diagram
    var polygons = voronoi(vertices);

    // draw polygons
    for(var j=0; j<polygons.length; j++) {
      var apolygon = polygons[j];
      var avertex = world_vertices[j];

      // pick a random color
      var mtVal = p5.noise(avertex[0],avertex[1],z+17);
      var mtVal = p5.map(mtVal, 0.25, 0.75, 0, 1);
      if(mtVal < 0) {
        mtVal = 0;
      }
      if(mtVal > 1) {
        mtVal = 1;
      }

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
  }

  // draw stars/cities
  for(var x=min_x; x<max_x; x+=grid_size) {
    for(var y=min_y; y<max_y; y+=grid_size) {
      var shift_point = getOffsetPoint(p5, x, y, z, 0.1, max_city_movement);
      var x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      var y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      var c_p00 = p5.map(0, x1, x2, 0, 256);
      var starSize = p5.noise(x, y, z+5);
      var ball_radius = p5.map(starSize, 0, 1, 1, 7);
      var c_pball = p5.map(ball_radius, x1, x2, 0, 256);
      var cur_ball_radius = c_pball - c_p00;

      p5.noStroke();
      // stars
      if(zoom < 3.9){
        p5.fill(ellipseColor);
        p5.ellipse(x_pos, y_pos, cur_ball_radius);
      }

      // cities
      p5.rectMode(p5.RADIUS);
      if (zoom > 3.9){
        var cityVal = p5.map(cur_ball_radius, 40, 80, 0, 1);
        if(cityVal < 0) {
          cityVal = 0;
        }
        if(cityVal > 1) {
          cityVal = 1;
        }
        var cityColor = p5.lerpColor(cityColor1,cityColor2,cityVal),
            citySize = cur_ball_radius/8;

        drawCluster(p5, x1, x2, y1, y2, z, zoom, shift_point[0], shift_point[1], citySize, starSize);
        p5.fill(cityColor);
        p5.rect(x_pos, y_pos, citySize, citySize);
      }
    }
  }
  // debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);
}
