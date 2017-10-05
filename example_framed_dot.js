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

var tileWidth = 40;
var tileHeight = tileWidth/2;
var grid_locations;
var gen = false;

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  console.log(y1, y2);
  p5.background(125,210,233);
  p5.rectMode(p5.CORNERS);
  p5.noStroke();

  if(!gen){
    generateArray(p5);
    gen = true;
  }

  var xOffset = 0;
  //0-960 is the size of the overall canvas, have to map that to the size of the view square (x1,y1,x2,y2)
  for(var j = 0; j < 5; j++){
    for(var i = 0; i < 5; i++){

      var cy = p5.map(212 + (tileHeight/2 * j), y1, y2, 0, 256);
      var cx = p5.map(tileWidth + (tileWidth * i) + xOffset, x1, x2, 0, 256);
      var cx2 = p5.map(tileWidth + (tileWidth * (i+1)) + xOffset, x1, x2, 0, 256);
      var dy = p5.map(212 + (tileHeight/2 * j) + grid_locations[j][i], y1, y2, 0, 256);

      //Terrian Variables
      var tileW = (cx2-cx)+1; //Get relative width (+1 so you can't see the grid)
      var tileH = tileW/2;

      drawGroundTile(p5, cx, cy, (dy - cy), tileW, tileH);
    }

    xOffset += tileWidth/2;

    if(xOffset == tileWidth)
      xOffset = 0;

  }
}

function generateArray(p5)
{
    grid_locations = new Array(5);
  for(var j = 0; j < 5; j++){

    grid_locations[j] = new Array(5);

    for(var i = 0; i < 5; i++){

      grid_locations[j][i] = p5.random(20);

    }
  }
}

function drawGroundTile(p5, x, y, dy, w, h){

  var shade = p5.color(100,169,74);
  var tileDepth = h/2;

  //Draw bottom left side
  p5.fill(p5.red(shade) - 10, p5.green(shade) - 10, p5.blue(shade) - 10);

  p5.beginShape();

  p5.vertex(x - w/2, y-dy);

  p5.vertex(x - w/2, y + tileDepth);
  p5.vertex(x, y + h/2 + tileDepth);

  p5.vertex(x, y-dy);

  p5.endShape();


  //draw bottom right side
  p5.fill(p5.red(shade) - 25, p5.green(shade) - 25, p5.blue(shade) - 25);

  p5.beginShape();

  p5.vertex(x + w/2, y-dy);

  p5.vertex(x + w/2, y + tileDepth);
  p5.vertex(x, y + h/2 + tileDepth);

  p5.vertex(x, y-dy);

  p5.endShape();


  p5.push();

  //Translate grass to adjust for random height
  p5.translate(0, -dy);

  //Draw Grass
  p5.fill(shade);
  
  p5.beginShape();

  p5.vertex(x - w/2 , y);
  p5.vertex(x , y - h/2);
  p5.vertex(x + w/2 , y);
  p5.vertex(x , y + h/2);
  p5.vertex(x - w/2 , y);

  p5.endShape(); 

  p5.pop();

}
