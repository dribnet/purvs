var white = "#ffffff"
var blue = "#a4c6fc"
var green = "#50ad4c"
var lightGrey = "#d3dae5"
var grey = "#bcc6d6"
var noiseScale = 1/16.0;
var noiseScale2 = 1/26.0;


function drawCloudLayer(p5, slashsize, x1, x2, y1, y2, z) {

  // figure out top left and top right square then - 1 off grid
  var startx = slashsize * (Math.floor(x1/slashsize) - 1);
  var starty = slashsize * (Math.floor(y1/slashsize) - 1);
  // figure out where the slash should be
  var endx = slashsize * (Math.floor(x2/slashsize) + 1);
  var endy = slashsize * (Math.floor(y2/slashsize) + 1);

  var char_width = 256 / ((x2-x1)/slashsize);
  var char_height = 256 / ((y2-y1)/slashsize);
  var pixel_width = char_width / 8;
  var pixel_height = char_height / 8;
  p5.strokeWeight(pixel_width);
  p5.rectMode(p5.CORNERS);

  for(var x=startx; x<endx; x+=slashsize) {
    var n_x = x / slashsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=slashsize) {
      var n_y = y / slashsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
     	if (noiseValue < 0.7) {
	        p5.noStroke();
	        p5.fill(grey);
	        p5.rect(x_pos, y_pos, x_pos+char_width, y_pos+char_height);
		  }
	   }
  }

}

function drawMapLayer(p5, slashsize, x1, x2, y1, y2, z) {

  // figure out top left and top right square then - 1 off grid
  var startx = slashsize * (Math.floor(x1/slashsize) - 1);
  var starty = slashsize * (Math.floor(y1/slashsize) - 1);
  // figure out where the slash should be
  var endx = slashsize * (Math.floor(x2/slashsize) + 1);
  var endy = slashsize * (Math.floor(y2/slashsize) + 1);

  var char_width = 256 / ((x2-x1)/slashsize);
  var char_height = 256 / ((y2-y1)/slashsize);
  var pixel_width = char_width / 8;
  var pixel_height = char_height / 8;
  p5.strokeWeight(pixel_width);
  p5.rectMode(p5.CORNERS);

  for(var x=startx; x<endx; x+=slashsize) {
    var n_x = x / slashsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=slashsize) {
      var n_y = y / slashsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
      if (noiseValue < 0.6) {
          p5.noStroke();
          p5.fill(blue);
          p5.rect(x_pos, y_pos, x_pos+char_width, y_pos+char_height);
    }
  }
  }

}

function drawLandLayer(p5, slashsize, x1, x2, y1, y2, z) {

  

}


function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  if(zoom >= 0){
    p5.noiseDetail(8,0.5);
    p5.background(lightGrey);
    drawCloudLayer(p5, 6, x1, x2, y1, y2, z);
  }

  if(zoom >= 1){
    p5.noiseDetail(8,0.5);
    p5.background(green);
    drawMapLayer(p5, 2, x1, x2, y1, y2, z);
    drawCloudLayer(p5, 6, x1, x2, y1, y2, z);
  }
  
  if(zoom >= 3) {
    p5.background(green);
    p5.noiseDetail(8,0.5);
    drawMapLayer(p5, 2, x1, x2, y1, y2, z);

  }

  if(zoom >= 6) {
    p5.background(green);
    p5.noiseDetail(8,0.5);
    drawLandLayer(p5, 5, x1, x2, y1, y2, z);

  }
  
}



















