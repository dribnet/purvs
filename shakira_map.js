//Solution based on Toms 10 print example code

var white = "#ffffff";
var blue = "#a4c6fc";
var skyBlue = "#90bbe5";
var green = "#50ad4c";
var lightGreen = "#6bc667";
var lightGreenAlph = "rgba(139, 206, 136, 0.1)";
var backgroundGreen = "#83ce80";
var landBaseGreen = "#71C66F";
var landBaseBrown = "#bab15e";
var landBaseBrown2 = "#a58f61";
var darkSkyGrey = "#bcc6d6";
var lightSkyGrey = "rgba(204, 212, 226, 0.8)";
var whiteSky = "rgba(232, 236, 242, 0.5)";
var alphaOverlay = "rgba(255, 255, 255, 0.1)";
var varSkyCol = darkSkyGrey;

var noiseScale = 1/16.0;
var noiseScale2 = 16;

/* OPTIONAL VARIABLES */
/* what is the initial zoom level (defaults to 0) */
var initialZoomLevel = 1;
/* what is the maximum zoom level (make this at least 10. defaults to 16) */
var maxZoomLevel = 10;


/* TOUR VARIABLES (required)
/* the random number seed for the tour */
var tourSeed = 100;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [5, 510, 507],
  [7, 507, 506],
  [3, 512, 515],
  [1, 512, 512]
]

function drawCloudLayer(p5, slashsize, x1, x2, y1, y2, z) {

  // figure out top left and top right square then - 1 off grid
  var startx = slashsize * (Math.floor(x1/slashsize) - 1);
  var starty = slashsize * (Math.floor(y1/slashsize) - 1);
  // figure out where the slash should be
  var endx = slashsize * (Math.floor(x2/slashsize) + 1);
  var endy = slashsize * (Math.floor(y2/slashsize) + 1);

  var char_width = 256 / ((x2-x1)/slashsize);
  var char_height = 256 / ((y2-y1)/slashsize);
  var pixel_width = char_width / 7;
  var pixel_height = char_height / 7;
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
	        p5.fill(varSkyCol);
	        p5.rect(x_pos, y_pos, x_pos+char_width, y_pos+char_height);
		  }

      if (noiseValue < 0.3 & noiseValue > 0.1) {
          p5.noStroke();
          p5.fill(varSkyCol);
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
      if (noiseValue < 0.5) {
          p5.noStroke();
          p5.fill(backgroundGreen);
          p5.rect(x_pos, y_pos, x_pos+char_width, y_pos+char_height);
      }
  }
  }

}

function drawLandLayer(p5, slashsize, x1, x2, y1, y2, z) {
    // figure out top left and top right square then - 1 off grid
  var startx = slashsize * (Math.floor(x1/slashsize) - 1);
  var starty = slashsize * (Math.floor(y1/slashsize) - 1);
  // figure out where the slash should be
  var endx = slashsize * (Math.floor(x2/slashsize) + 1);
  var endy = slashsize * (Math.floor(y2/slashsize) + 1);

  var char_width = 256 / ((x2-x1)/slashsize);
  var char_height = 256 / ((y2-y1)/slashsize);
  var pixel_width = char_width / 7;
  var pixel_height = char_height / 7;
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
          p5.fill(lightGreen);
          p5.rect(x_pos, y_pos, x_pos+char_width, y_pos+char_height);
      }
      if (noiseValue < 0.7) {
          p5.noStroke();
          p5.fill(lightGreenAlph);
          p5.rect(x_pos, y_pos, x_pos+char_width, y_pos+char_height);
      }
      if (noiseValue < 0.2) {
          p5.noStroke();
          p5.fill(alphaOverlay);
          p5.rect(x_pos, y_pos, x_pos+char_width, y_pos+char_height);
      }
     }
  }
}

function drawTreeLayer(p5, slashsize, x1, x2, y1, y2, z) {
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
  p5.ellipseMode(p5.CORNERS);
  

  for(var x=startx; x<endx; x+=slashsize) {
    var n_x = x / slashsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=slashsize) {
      var n_y = y / slashsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var noiseScaleCol = 2;
      var noiseValueCol = p5.noise(x * noiseScaleCol, y * noiseScaleCol, z);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
      var offset = p5.random(10, 20);
      if (noiseValue < 0.5) {
          p5.fill(0, noiseValueCol*255, 0);
          p5.ellipse(x_pos+offset, y_pos+offset, x_pos+char_width, y_pos+char_height);
      }
    }
  }
}

function drawGrassLayer(p5, slashsize, x1, x2, y1, y2, z) {
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
  p5.ellipseMode(p5.CORNERS);
  

  for(var x=startx; x<endx; x+=slashsize) {
    var n_x = x / slashsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=slashsize) {
      var n_y = y / slashsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var noiseScaleCol = 2;
      var noiseValueCol = p5.noise(x * noiseScaleCol, y * noiseScaleCol, z);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
      var offset = p5.random(10, 20);
      if (noiseValue < 0.4) {
          p5.fill(0);
          p5.ellipse(x_pos+offset, y_pos+offset, x_pos+char_width, y_pos+char_height);
      }
    }
  }
}

function drawZoomGrass(p5, slashsize, x1, x2, y1, y2, z) {
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
      var noiseScaleCol = 2;
      var noiseValueCol = p5.noise(x * noiseScaleCol, y * noiseScaleCol, z);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
      var offset = p5.random(10, 20);
      if (noiseValue < 0.4) {
          p5.fill(noiseValueCol*255, 0, 0);
          p5.rect(x_pos, y_pos, x_pos+char_width, y_pos+char_height);
      }
    }
  }
}


function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  // view of clouds only
  if(zoom >= 0) {
    p5.noiseDetail(8,0.5);
    p5.background(lightSkyGrey);
    varSkyCol = darkSkyGrey;
    varSkyCol = whiteSky;
    drawCloudLayer(p5, 16, x1, x2, y1, y2, z);
  }

  if(zoom >= 1) {
    p5.noiseDetail(8,0.5);
    p5.background(lightSkyGrey);
    varSkyCol = darkSkyGrey;
    drawCloudLayer(p5, 6, x1, x2, y1, y2, z);
    varSkyCol = whiteSky;
    drawCloudLayer(p5, 16, x1, x2, y1, y2, z);
  }

  // view of clouds with bits of land showing
  if(zoom >= 2) {
    p5.background(lightGreen);
    p5.noiseDetail(8,0.5);
    varSkyCol = lightSkyGrey;
    drawMapLayer(p5, 2, x1, x2, y1, y2, z);
    drawCloudLayer(p5, 13, x1, x2, y1, y2, z);

  }

  // close view of clouds and land
  if(zoom >= 3) {
    p5.noiseDetail(8,0.5);
    p5.background(lightGreen);
    varSkyCol = whiteSky;
    drawMapLayer(p5, 2, x1, x2, y1, y2, z);
    drawCloudLayer(p5, 13, x1, x2, y1, y2, z);
}
  
  // zoomed out view of land
  if(zoom >= 4) {
    p5.background(lightGreen);
    p5.noiseDetail(8,0.5);
    drawMapLayer(p5, 2, x1, x2, y1, y2, z);

  }

  // detail view of land terrain
  if(zoom >= 5) {
    p5.background(green);
    p5.noiseDetail(8,0.5);
    drawLandLayer(p5, 2, x1, x2, y1, y2, z);
    drawMapLayer(p5, 2, x1, x2, y1, y2, z);

  }

  // detail view of land terrain +1
  if(zoom >= 6) {
    p5.background(green);
    p5.noiseDetail(8,0.5);
    drawLandLayer(p5, 2, x1, x2, y1, y2, z);
    drawMapLayer(p5, 2, x1, x2, y1, y2, z);

  }

  // introduce trees
  if(zoom >= 7) {
    p5.background(landBaseGreen);
    p5.noiseDetail(8,0.5);
    drawLandLayer(p5, 2, x1, x2, y1, y2, z);
    drawTreeLayer(p5, 0.5, x1, x2, y1, y2, z);

  }


  // tree zoom with second tree layer on top **
  if(zoom >= 8) {
    p5.background(landBaseBrown);
    p5.noiseDetail(8,0.5);
    drawTreeLayer(p5, 0.1, x1, x2, y1, y2, z);
    drawTreeLayer(p5, 0.5, x1, x2, y1, y2, z);

  }


  if(zoom >= 9) {
    p5.background(landBaseBrown2);
    p5.noiseDetail(8,0.5);
    drawTreeLayer(p5, 0.1, x1, x2, y1, y2, z);
    drawGrassLayer(p5, 0.1, x1, x2, y1, y2, z);

  }


  if(zoom >= 10) {
    p5.background(landBaseBrown2);
    p5.noiseDetail(8,0.5);
    drawZoomGrass(p5, 0.01, x1, x2, y1, y2, z);
    drawTreeLayer(p5, 0.01, x1, x2, y1, y2, z);
    drawGrassLayer(p5, 0.01, x1, x2, y1, y2, z);
  }
  
}



















