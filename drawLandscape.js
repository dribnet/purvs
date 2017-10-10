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
 
 //Tile Variables
var tileWidth = 100;
var tileHeight = tileWidth/2;

//Tile Type Chances
var biomeOffset = 40000;
var waterChance = 0.4;
var landChance = 0.7;

var max_thickness = 64;
var max_movement = 32;

//Array Variables
var boardSize = 5;
var grid_locations;
var gen = false;

var zoomLevel = 0;
 

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.background(125,210,233);
  p5.rectMode(p5.CORNERS);
  p5.noStroke();
  
  //p5.floor((x2 - x1) / tileWidth) = tiles per grid
  var gridX = (x2 / (x2 - x1)); //no of grid being drawn
  var gridY = (y2 / (y2 - y1)); //amount of grids

  if(zoomLevel != zoom){

    if(zoomLevel < zoom){

      zoomLevel++;
      tileWidth /= 2;
      tileHeight = tileWidth/2;

    }
    else if (zoomLevel > zoom){

      zoomLevel--;
      tileWidth *= 2;
      tileHeight = tileWidth/2;

    }

  }

  var max_shift = max_thickness + max_movement;

  var min_x = snap_to_grid(x1 - max_shift, tileWidth);
  var max_x = snap_to_grid(x2 + max_shift + tileWidth, tileWidth);
  var min_y = snap_to_grid(y1 - max_shift, tileHeight);
  var max_y = snap_to_grid(y2 + max_shift + tileHeight, tileHeight);

  var xOffset = 0;

  //Get grid squaer biome
  var mid_x = snap_to_grid((max_x - min_x) + min_x, tileWidth);
  var mid_y = snap_to_grid((max_y - min_y) + min_y, tileHeight);

  

  //0-960 is the size of the overall canvas, have to map that to the size of the view square (x1,y1,x2,y2)
  for(var y = min_y; y < max_y; y += tileHeight/2) {
    for(var x = min_x; x < max_x; x += tileWidth) {

      var cy = p5.map(y, y1, y2, 0, 256); //Y pos of tile
      var cx = p5.map(x + xOffset, x1, x2, 0, 256); //X pos of tile
      var cx2 = p5.map(tileWidth + x + xOffset, x1, x2, 0, 256); //Used to get size of tile 

      var bio_val = 0;//getNoiseValue(p5, snap_to_grid(y, tileHeight) + biomeOffset, snap_to_grid(x, tileWidth) + biomeOffset);
      var noise_val = getNoiseValue(p5, (y/tileHeight)*(4-zoom), (x/tileWidth)*(4-zoom));

      var dy;

      //Different heights for different tile types
      if(noise_val > waterChance){
        //Height of the land Tile
        dy = p5.map(y+ p5.map(noise_val, waterChance, 1, 0, 300), y1, y2, 0, 256); 
      }
      else{
        //Height of the water tile (which is always zero)
        dy = p5.map(y+ 0, y1, y2, 0, 256); 
      }
 
      //console.log("x1: " + x1 + " x2: " + x2 + " size: " + (x2 / (x2 - x1)) );
      console.log("noise: " + noise_val);

      //Terrian Variables
      var tileW = (cx2-cx)+1; //Get relative width (+1 so you can't see the grid)
      var tileH = tileW/2;
 
      var shade = colorFromValue(p5, noise_val, bio_val);

      if(noise_val > waterChance || bio_val > 0.5)
        drawGroundTile(p5, cx, cy, (dy - cy), tileW, tileH, shade);
      else
        drawWaterTile(p5, cx, cy, (dy - cy), tileW, tileH, shade);
    }
 
    xOffset += tileWidth/2;
 
    if(xOffset == tileWidth)
      xOffset = 0;
 
  }
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function getNoiseValue(p5, y, x){

  var x_noise = x/100.0;
  var y_noise = y/100.0;

  return p5.noise(x_noise, y_noise);
}

function colorFromValue(p5, v, bv){

  if(v < waterChance){
    //WATER SHADE
    color1 = p5.color(28,58,103);
    color2 = p5.color(71,126,207); 
    c = p5.lerpColor(color1, color2, p5.map(v,0, waterChance, 0, 1)); 
    return c;
  }
  else if(v < waterChance + 0.025){
    //SAND SHADE
    color1 = p5.color(203,202,115);
    color2 = p5.color(144,143,86); 
    c = p5.lerpColor(color1, color2, p5.map(v,waterChance, 1, 0, 1)); 
    return c;
  }
  else if(v < landChance){
    //GRASS SHADE
    color1 = p5.color(100,169,74);
    color2 = p5.color(74,101,45); 
    c = p5.lerpColor(color1, color2, p5.map(v,waterChance, landChance, 0, 1)); 
    return c;
  }
  else{
    //Mountain SHADE
    color1 = p5.color(122,122,122);
    color2 = p5.color(233,233,233); 
    c = p5.lerpColor(color1, color2, p5.map(v,landChance, 1, 0, 1)); 
    return c;
  }
}
 
function drawGroundTile(p5, x, y, dy, w, h, shade){
 
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

function drawWaterTile(p5, x, y, dy, w, h, shade){
 
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