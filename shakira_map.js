/* Solution based on Toms 10 print example code. Zoomable landscape starts from the sky and flows into 
high level detail plants. */

var white = "#ffffff";
var blue = "#a4c6fc";
var skyBlue = "#90bbe5";
var green = "#50ad4c";
var lightGreen = "#6bc667";
var lightGreenAlph = "rgba(139, 206, 136, 0.1)";
var backgroundGreen = "#83ce80";
var landBaseGreen = "#71C66F";
var landBaseBrown = "#508E62";
var landBaseBrown2 = "#a58f61";
var darkSkyGrey = "#bcc6d6";
var lightSkyGrey = "rgba(204, 212, 226, 0.8)";
var whiteSky = "rgba(232, 236, 242, 0.5)";
var alphaOverlay = "rgba(255, 255, 255, 0.1)";
var varSkyCol = darkSkyGrey;

var noiseScale = 1/16.0;
var noiseScale2 = 16;

/* what is the initial zoom level (defaults to 0) */
var initialZoomLevel = 1;
/* what is the maximum zoom level (defaults to 16) */
var maxZoomLevel = 10;

/* the random number seed for the tour */
var tourSeed = 100;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [1, 313.250000000000, 614.000000000000],
  [3, 384.187500000000, 624.750000000000],
  [5, 349.765625000000, 538.125000000000],
  [8, 338.150390625000, 501.429687500000],
  [10, 335.360839843750, 504.305664062500]
]

// draws the top level cloud layer
function drawCloudLayer(p5, gridsize, x1, x2, y1, y2, z) {
  var startx = gridsize * (Math.floor(x1/gridsize) - 1);
  var starty = gridsize * (Math.floor(y1/gridsize) - 1);
  var endx = gridsize * (Math.floor(x2/gridsize) + 1);
  var endy = gridsize * (Math.floor(y2/gridsize) + 1);

  var grid_width = 256 / ((x2-x1)/gridsize);
  var grid_height = 256 / ((y2-y1)/gridsize);

  p5.rectMode(p5.CORNERS);

  for(var x=startx; x<endx; x+=gridsize) {
    var n_x = x / gridsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
      for(var y=starty; y<endy; y+=gridsize) {
      var n_y = y / gridsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
       	if (noiseValue < 0.6) {
  	        p5.noStroke();
  	        p5.fill(varSkyCol);
  	        p5.rect(x_pos, y_pos, x_pos+grid_width, y_pos+grid_height);
  		  }
        if (noiseValue < 0.3 & noiseValue > 0.1) {
            p5.noStroke();
            p5.fill(varSkyCol);
            p5.rect(x_pos, y_pos, x_pos+grid_width, y_pos+grid_height);
        }
	   }
  }
}

// draws the terrain map layer with varying zoom details
function drawMapLayer(p5, gridsize, x1, x2, y1, y2, z) {
  var startx = gridsize * (Math.floor(x1/gridsize) - 1);
  var starty = gridsize * (Math.floor(y1/gridsize) - 1);
  var endx = gridsize * (Math.floor(x2/gridsize) + 1);
  var endy = gridsize * (Math.floor(y2/gridsize) + 1);

  var grid_width = 256 / ((x2-x1)/gridsize);
  var grid_height = 256 / ((y2-y1)/gridsize);

  p5.rectMode(p5.CORNERS);

  for(var x=startx; x<endx; x+=gridsize) {
    var n_x = x / gridsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=gridsize) {
      var n_y = y / gridsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
      if (noiseValue < 0.5) {
          p5.noStroke();
          p5.fill(backgroundGreen);
          p5.rect(x_pos, y_pos, x_pos+grid_width, y_pos+grid_height);
      }
    }
  }

}

// draws the terrain map layer with varying zoom details
function drawLandLayer(p5, gridsize, x1, x2, y1, y2, z) {
  var startx = gridsize * (Math.floor(x1/gridsize) - 1);
  var starty = gridsize * (Math.floor(y1/gridsize) - 1);
  var endx = gridsize * (Math.floor(x2/gridsize) + 1);
  var endy = gridsize * (Math.floor(y2/gridsize) + 1);

  var grid_width = 256 / ((x2-x1)/gridsize);
  var grid_height = 256 / ((y2-y1)/gridsize);

  p5.rectMode(p5.CORNERS);

  for(var x=startx; x<endx; x+=gridsize) {
    var n_x = x / gridsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=gridsize) {
      var n_y = y / gridsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
      if (noiseValue < 0.6) {
          p5.noStroke();
          p5.fill(lightGreen);
          p5.rect(x_pos, y_pos, x_pos+grid_width, y_pos+grid_height);
      }
      if (noiseValue < 0.7) {
          p5.noStroke();
          p5.fill(lightGreenAlph);
          p5.rect(x_pos, y_pos, x_pos+grid_width, y_pos+grid_height);
      }
      if (noiseValue < 0.2) {
          p5.noStroke();
          p5.fill(alphaOverlay);
          p5.rect(x_pos, y_pos, x_pos+grid_width, y_pos+grid_height);
      }
    }
  }
}

// draws basic tree layer - circles only
function drawTreeLayer(p5, gridsize, x1, x2, y1, y2, z) {
  var startx = gridsize * (Math.floor(x1/gridsize) - 1);
  var starty = gridsize * (Math.floor(y1/gridsize) - 1);
  var endx = gridsize * (Math.floor(x2/gridsize) + 1);
  var endy = gridsize * (Math.floor(y2/gridsize) + 1);

  var grid_width = 256 / ((x2-x1)/gridsize);
  var grid_height = 256 / ((y2-y1)/gridsize);

  p5.ellipseMode(p5.CORNERS);
  

  for(var x=startx; x<endx; x+=gridsize) {
    var n_x = x / gridsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=gridsize) {
      var n_y = y / gridsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var noiseScaleCol = 2;
      var noiseValueCol = p5.noise(x * noiseScaleCol, y * noiseScaleCol, z);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
      var offset = p5.random(10, 20);
      if (noiseValue < 0.5) {
          p5.fill(80, noiseValueCol*242, 98);
          p5.ellipse(x_pos+offset, y_pos+offset, x_pos+grid_width, y_pos+grid_height);
      }
    }
  }
}

// draws high detail grass 
function drawZoomGrass(p5, gridsize, x1, x2, y1, y2, z) {
  var startx = gridsize * (Math.floor(x1/gridsize) - 1);
  var starty = gridsize * (Math.floor(y1/gridsize) - 1);
  var endx = gridsize * (Math.floor(x2/gridsize) + 1);
  var endy = gridsize * (Math.floor(y2/gridsize) + 1);

  var grid_width = 256 / ((x2-x1)/gridsize);
  var grid_height = 256 / ((y2-y1)/gridsize);

  p5.rectMode(p5.CORNERS); 

  for(var x=startx; x<endx; x+=gridsize) {
    var n_x = x / gridsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=gridsize) {
      var n_y = y / gridsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var noiseScaleCol = 2;
      var noiseValueCol = p5.noise(x * noiseScaleCol, y * noiseScaleCol, z);
      var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
      var offset = p5.random(10, 20);
      if (noiseValue < 0.5) {
          p5.fill(noiseValueCol*165, 143, 97);
          p5.rect(x_pos, y_pos, x_pos+grid_width, y_pos+grid_height);
      }
    }
  }
}


function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // light view of clouds only
  if(zoom >= 0) {
    p5.background(lightSkyGrey);
    varSkyCol = darkSkyGrey;
    varSkyCol = whiteSky;
    drawCloudLayer(p5, 16, x1, x2, y1, y2, z);
  }
  // detailed view of clouds only
  if(zoom >= 1) {
    p5.background(lightSkyGrey);
    varSkyCol = darkSkyGrey;
    drawCloudLayer(p5, 6, x1, x2, y1, y2, z);
    varSkyCol = whiteSky;
    drawCloudLayer(p5, 16, x1, x2, y1, y2, z);
  }

  // view of clouds with bits of land showing
  if(zoom >= 2) {
    p5.background(lightGreen);
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
    drawMapLayer(p5, 2, x1, x2, y1, y2, z);

  }

  // detail view of land terrain
  if(zoom >= 5) {
    p5.background(green);
    drawLandLayer(p5, 2, x1, x2, y1, y2, z);
    drawMapLayer(p5, 2, x1, x2, y1, y2, z);

  }

  // detail view of land terrain +1
  if(zoom >= 6) {
    p5.background(green);
    drawLandLayer(p5, 2, x1, x2, y1, y2, z);
    drawMapLayer(p5, 2, x1, x2, y1, y2, z);

  }

  // introduce trees
  if(zoom >= 7) {
    p5.background(landBaseGreen);
    drawLandLayer(p5, 2, x1, x2, y1, y2, z);
    drawTreeLayer(p5, 0.1, x1, x2, y1, y2, z);

  }


  // tree zoom 
  if(zoom >= 8) {
    p5.background(landBaseGreen);
    drawLandLayer(p5, 2, x1, x2, y1, y2, z);
    drawTreeLayer(p5, 0.2, x1, x2, y1, y2, z);

  }

  // tree zoom detail
  if(zoom >= 9) {
    p5.background(landBaseBrown);
    drawZoomGrass(p5, 0.01, x1, x2, y1, y2, z);
    drawTreeLayer(p5, 0.25, x1, x2, y1, y2, z);

  }

  // high level tree detail
  if(zoom >= 10) {
    p5.background(landBaseBrown);
    drawZoomGrass(p5, 0.01, x1, x2, y1, y2, z);
    drawTreeLayer(p5, 0.01, x1, x2, y1, y2, z);
  }
  
}