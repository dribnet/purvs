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
var tileWidth = 50;
var tileHeight = tileWidth/2;

var tileDepth = 300;

//Tile Type Chances
var biomeOffset = 40000;
var waterChance = 0.2;
var coastChance = waterChance + 0.025;
var landChance = 0.7;

var desertChance = 0;
var snowChance = 0.15;
var mountainChance = 0.3;
var fieldChance = 0.4;
var forestChance = 0.6;
var beachChance = 0.63;
var oceanChance = 1;


var max_thickness = 256;
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

  // if(zoomLevel != zoom){

  //   if(zoomLevel < zoom){

  //     zoomLevel++;
  //     tileWidth /= 1.3;
  //     tileHeight = tileWidth/2;

  //   }
  //   else if (zoomLevel > zoom){

  //     zoomLevel--;
  //     tileWidth *= 1.3;
  //     tileHeight = tileWidth/2;

  //   }

  // }

  var actualScale = (x2-x1)/255;

  var max_shift1 = 48;
  var max_shift2 = max_thickness + max_movement;

  var min_x = snap_to_grid(x1 - max_shift1, tileWidth);
  var max_x = snap_to_grid(x2 + max_shift1 + tileWidth, tileWidth);
  var min_y = snap_to_grid(y1 - max_shift1, tileHeight);
  var max_y = snap_to_grid(y2 + max_shift2 + tileHeight, tileHeight);

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

      //var bio_val = 0;//getNoiseValue(p5, snap_to_grid(y, tileHeight) + biomeOffset, snap_to_grid(x, tileWidth) + biomeOffset);
      var noise_val = getNoiseValue(p5, (y*0.1), (x*0.1));
      var bio_val = getNoiseValue(p5, (y*0.1) + 10000, (x*0.1) + 10000);

      var dy;

      //Different heights for different tile types
      if(noise_val > waterChance && bio_val < beachChance){
        //Height of the land Tile
        dy = p5.map(y+ p5.map(bio_val, beachChance, 0, 0, tileDepth), y1, y2, 0, 256); 
      }
      else if(noise_val < waterChance && bio_val < beachChance){
        //Height of the land Tile
        dy = p5.map(y+ p5.map(noise_val, 0, 1, 0, 15), y1, y2, 0, 256); 
      }
      else{
        //Height of the water tile (which is always zero)
        dy = p5.map(y+ 0, y1, y2, 0, 256); 
      }
 
      console.log("x1: " + x1 + " x2: " + x2 + " size: " + (x2 / (x2 - x1)) );
      //console.log("noise: " + noise_val);

      //Terrian Variables
      var tileW = (cx2-cx)+1; //Get relative width (+1 so you can't see the grid)
      var tileH = tileW/2;
 
      var shade = colorFromValue(p5, noise_val, bio_val);

      if(noise_val > waterChance || bio_val < desertChance) //If its a land tile or we are in a desert draw a ground tile
        drawGroundTile(p5, cx, cy, (dy - cy), tileW, tileH, shade, noise_val, bio_val);
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
  if(bv < snowChance){
    //SNOW SHADE
    // color1 = p5.color(203,202,115);
    // color2 = p5.color(144,143,86); 
    color1 = p5.color(233,233,233);
    color2 = p5.color(188,188,188);
    c = p5.lerpColor(color1, color2, p5.map(v,waterChance, 1, 0, 1)); 
    return c;
  }
  else if(bv < mountainChance) {
      //Mountain SHADE
      color1 = p5.color(122,122,122);
      color2 = p5.color(233,233,233); 
      c = p5.lerpColor(color1, color2, p5.map(v,landChance, 1, 0, 1)); 
      return c;
    }
  else if(bv < forestChance){
    //GRASS AREA
    if(v < waterChance){
      //WATER SHADE
      color1 = p5.color(28,58,103);
      color2 = p5.color(71,126,207); 
      c = p5.lerpColor(color1, color2, p5.map(v,0, waterChance, 0, 1)); 
      return c;
    }
    else {
      //GRASS SHADE
      color1 = p5.color(100,169,74);
      color2 = p5.color(74,101,45); 
      c = p5.lerpColor(color1, color2, p5.map(v,waterChance, landChance, 0, 1)); 
      return c;
    }
  }
  else{
    if(bv < beachChance){
      //BEACH SHADE
      color1 = p5.color(203,202,115);
      color2 = p5.color(178,177,105); 
      c = p5.lerpColor(color1, color2, p5.map(bv,forestChance, beachChance, 0, 0.6)); 
      return c;
    }
    else{
      //WATER SHADE
      color2 = p5.color(28,58,103);
      color1 = p5.color(71,126,207); 
      c = p5.lerpColor(color1, color2, p5.map(bv,beachChance, oceanChance, 0, 2)); 
      return c;
    }
  }
}

function isForest(bv){

  return bv < forestChance && bv > fieldChance;

}
 
function drawGroundTile(p5, x, y, dy, w, h, shade, v, bv){
 
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

  if(v > coastChance && v < landChance - 0.1 && isForest(bv))
    drawTree(p5, x, y, w, h, v);
 
  p5.pop();
 
}

function drawTree(p5, x, y, w, h, val){

  var treeWidth = w*0.8;
  var treeHeight = w/2;
  var trunkWidth = w/4;
  var trunkHeight = trunkWidth/2;
  var trunkDepth = trunkHeight;
  var treeDepth = trunkDepth*4;
  var v = 0;

  //Draw trunk left side
  p5.fill(122,72,60);

  p5.beginShape();

  p5.vertex(x - trunkWidth/2, y);
  p5.vertex(x, y + trunkHeight/2);
  p5.vertex(x, y - trunkHeight/2 - trunkDepth);
  p5.vertex(x - trunkWidth/2, y - trunkHeight - trunkDepth);
  p5.vertex(x - trunkWidth/2, y);

  p5.endShape();

  //draw trunk right side
  p5.fill(86,54,40);

  p5.beginShape();

  p5.vertex(x + trunkWidth/2, y);
  p5.vertex(x, y + trunkHeight/2);
  p5.vertex(x, y - trunkHeight/2 - trunkDepth);
  p5.vertex(x + trunkWidth/2, y - trunkHeight - trunkDepth);
  p5.vertex(x + trunkWidth/2, y);
  
  p5.endShape();

  p5.push();
  p5.translate(0, -trunkDepth*2);

  //draw Tree left side
  //p5.fill(0 + p5.random(0,10),142 + p5.random(-10,10),82 + p5.random(-10,10));
  p5.fill(0 + (10*v),132 + (20*v),72 + (20*v));

  p5.beginShape();

  p5.vertex(x - treeWidth/2, y);
  p5.vertex(x, y + treeHeight/2);
  p5.vertex(x, y - treeHeight/2 - treeDepth);
  p5.vertex(x - treeWidth/2, y);
  
  p5.endShape();

  //draw Tree right side
  //p5.fill(0 + p5.random(0,10),128 + p5.random(-10,10),74 + p5.random(-10,10));
  p5.fill(0 + (10*v),118 + (20*v),64 + (20*v));

  p5.beginShape();

  p5.vertex(x + treeWidth/2, y);
  p5.vertex(x, y + treeHeight/2);
  p5.vertex(x, y - treeHeight/2 - treeDepth);
  p5.vertex(x + treeWidth/2, y);
  
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