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
var tileWidth = 25;
var tileHeight = tileWidth/2;

var tileDepth = 310;

//Tile Type Chances
var biomeOffset = 40000;
var waterChance = 0.2;
var coastChance = waterChance + 0.025;
var landChance = 0.7;

var desertChance = 0.4;
//Biomes
var snowChance = 0.15; //snow at 0 - 0.15
var mountainChance = 0.3; //mountain at 0.15 - 0.3
var fieldChance = 0.5;
var forestChance = 0.6;
var beachChance = 0.63;
var oceanChance = 1;


var max_thickness = 256;
var max_movement = 32;

/* OPTIONAL VARIABLES */
/* what is the initial zoom level (defaults to 0) */
var initialZoomLevel = 1;
/* what is the maximum zoom level (make this at least 10. defaults to 16) */
var maxZoomLevel = 10;

//Array Variables
var boardSize = 5;
var grid_locations;
var gen = false;

var zoomLevel = 0;
 

/* the random number seed for the tour */
var tourSeed = 0;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 5421.000000000000, -2806.500000000000], //Water formation
  [2, 793.250000000000, -156.250000000000], //Camp site
  [3, 5185.125000000000, -2107.437500000000], //Rocks
  [2, 4895.500000000000, -3988.125000000000], //Graveyard
  [1, 3100.000000000000, -7540.750000000000] //snow top mountain
]

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.background(125,210,233);
  p5.rectMode(p5.CORNERS);
  p5.noStroke();
  
  var gridX = (x2 / (x2 - x1)); //no of grid being drawn
  var gridY = (y2 / (y2 - y1)); //amount of grids

  zoomLevel = zoom;

  var actualScale = (x2-x1)/255;

  var max_shift1 = 48;
  var max_shift2 = max_thickness + max_movement;

  var min_x = snap_to_grid(x1 - max_shift1, tileWidth);
  var max_x = snap_to_grid(x2 + max_shift1 + tileWidth, tileWidth);
  var min_y = snap_to_grid(y1 - max_shift1, tileHeight);
  var max_y = snap_to_grid(y2 + max_shift2 + tileHeight, tileHeight);

  var xOffset = 0;

  //noise step controls are much each tile will change 
  var noise_step = 0.4;

  //Get grid squaer biome
  var mid_x = snap_to_grid((max_x - min_x) + min_x, tileWidth);
  var mid_y = snap_to_grid((max_y - min_y) + min_y, tileHeight);

  //0-960 is the size of the overall canvas, have to map that to the size of the view square (x1,y1,x2,y2)
  for(var y = min_y; y < max_y; y += tileHeight/2) {
    for(var x = min_x; x < max_x; x += tileWidth) {

      var cy = p5.map(y, y1, y2, 0, 256); //Y pos of tile
      var cx = p5.map(x + xOffset, x1, x2, 0, 256); //X pos of tile
      var cx2 = p5.map(tileWidth + x + xOffset, x1, x2, 0, 256); //Used to get size of tile 

      var noise_val = getNoiseValue(p5, (y*0.1), (x*0.1)); //Determines random factors
      var bio_val = getNoiseValue(p5, (y*noise_step) + 10000, (x*noise_step) + 10000); //Determines the biome

      var dy;

      //Different heights for different tile types
      if(bio_val < beachChance){
        //Height of the land Tile
        dy = p5.map(y+ p5.map(bio_val, beachChance, 0, 0, tileDepth), y1, y2, 0, 256); 
      }
      else if(noise_val < desertChance && bio_val > beachChance){
        //Height of the land Tile
        dy = p5.map(y+ p5.map(noise_val, 0, 1, 0, 15), y1, y2, 0, 256); 
      }
      else{
        //Height of the water tile (which is always zero)
        dy = p5.map(y+ 0, y1, y2, 0, 256); 
      }
 

      //Terrian Variables
      var tileW = (cx2-cx); //Get relative width (+1 so you can't see the grid)
      var tileH = tileW/2;

      var shade = colorFromValue(p5, noise_val, bio_val);

      if(bio_val < beachChance) //If its a land tile or we are in a desert draw a ground tile
        drawGroundTile(p5, cx, cy, (dy - cy), tileW, tileH, shade, noise_val, bio_val);
      else
        drawWaterTile(p5, cx, cy, (dy - cy), tileW, tileH, shade, noise_val, bio_val);

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
  if(bv < mountainChance) {
    if(v > desertChance){
      //Mountain SHADE
      color1 = p5.color(122,122,122);
      color2 = p5.color(233,233,233); 
      c = p5.lerpColor(color2, color1, p5.map(bv,0, mountainChance, 0, 1)); 
      return c;
    }
    else {
      //Sandstone SHADE
      color2 = p5.color(135,134,94);
      color1 = p5.color(178,177,105); 
      c = p5.lerpColor(color2, color1, p5.map(bv,0, mountainChance, 0, 1)); 
      return c;
    }
      
    }
  else if(bv < forestChance){
    //Forest tile with no tree on it needs to be different from normal grass
    if(v > 0.5 && isForest(bv) && zoomLevel == 0){
      color2 = p5.color(32,116,42);
      color1 = p5.color(19,72,25); 
      c = p5.lerpColor(color1, color2, p5.map(bv,mountainChance, forestChance, 0, 1)); 
      return c;
    }
    //GRASS SHADE
    else if(v > desertChance){
      color2 = p5.color(100,169,74);
      color1 = p5.color(74,101,45); 
      c = p5.lerpColor(color1, color2, p5.map(bv,mountainChance, forestChance, 0, 1)); 
      return c;
    }
    else {
      //SAND SHADE
      color1 = p5.color(203,202,115);
      color2 = p5.color(178,177,105); 
      c = p5.lerpColor(color1, color2, p5.map(bv,forestChance, beachChance, 0, 0.6)); 
      return c;
    }
  }
  else{
    if(bv < beachChance || v < desertChance){
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

function isField(bv){

  return bv < fieldChance && bv > mountainChance;

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

  if(v > 0.5 && isForest(bv) && zoomLevel > 0)
    drawTree(p5, x, y, w, h, bv);
  else if(v > 0.5 && isField(bv) && zoomLevel >= 3)
    drawGrass(p5, x, y, w, h, bv, shade);
  else if(v < 0.5 && v > 0.499 && isField(bv) && zoomLevel >= 2)
    drawTent(p5, x, y, w, h, bv);
  else if(v < desertChance && zoomLevel >= 2 && v < 0.15)
    drawGrave(p5, x, y, w, h, bv);
 
  p5.pop();
 
}

function drawGrass(p5, x, y, w, h, val, shade){

  var treeWidth = w*0.2;
  var treeHeight = w/2;

  var v1 = p5.map(val, mountainChance, fieldChance, 0, 40);
  var v2 = p5.map(val, mountainChance, fieldChance, 40, 0);
  var v3 = p5.map(val, mountainChance, fieldChance, 40, 0);

  //draw Tree right side

  p5.fill(p5.red(shade) - v1, p5.green(shade) - v2, p5.blue(shade) - v3);

  p5.beginShape();

  p5.vertex(x + treeWidth/3, y);
  p5.vertex(x, y);
  p5.vertex(x, y - treeHeight/2);
  p5.vertex(x + treeWidth/3, y);
  
  p5.endShape();

  p5.push();
  p5.translate(w/9, h/10);
  p5.beginShape();

  p5.vertex(x + treeWidth/4, y);
  p5.vertex(x, y);
  p5.vertex(x, y - treeHeight/2);
  p5.vertex(x + treeWidth/4, y);
  
  p5.endShape();

  p5.pop();

  p5.push();
  p5.translate(-w/9, h/8);
  p5.beginShape();

  p5.vertex(x + treeWidth/3, y);
  p5.vertex(x, y);
  p5.vertex(x, y - treeHeight/2);
  p5.vertex(x + treeWidth/3, y);
  
  p5.endShape();
  p5.pop();

    p5.push();
  p5.translate(-w/6, h/6);
  p5.beginShape();

  p5.vertex(x + treeWidth/4, y);
  p5.vertex(x, y);
  p5.vertex(x, y - treeHeight/2);
  p5.vertex(x + treeWidth/4, y);
  
  p5.endShape();
  p5.pop();


  p5.push();
  p5.translate(w/20, h/4);
  p5.beginShape();

  p5.vertex(x + treeWidth/4, y);
  p5.vertex(x, y);
  p5.vertex(x, y - treeHeight/2);
  p5.vertex(x + treeWidth/4, y);
  
  p5.endShape();
  p5.pop();

}

function drawTent(p5, x, y, w, h, val){

  var campWidth = w*0.4;
  var campHeight = w/2;


  //draw Tent right side
  p5.fill(46,31,31);
  p5.push();

  p5.translate(0, h/3);

  p5.beginShape();

  p5.vertex(x, y);
  p5.vertex(x + campWidth/2, y - campHeight);
  p5.vertex(x + campWidth, y - campWidth/2);
  p5.vertex(x, y);
  
  p5.endShape();

  //draw Tent entry
  p5.fill(22,22,22);

  p5.beginShape();

  p5.vertex(x, y);
  p5.vertex(x + campWidth/2, y - campHeight/1.3);
  p5.vertex(x + campWidth, y - campWidth/2);
  p5.vertex(x, y);
  
  p5.endShape();

  //draw Tent Left Side
  p5.fill(67,43,43);

  p5.beginShape();

  p5.vertex(x, y);
  p5.vertex(x + campWidth/2, y - campHeight);
  p5.vertex(x  - campWidth/2, y - campHeight*1.5);
  p5.vertex(x - campWidth, y - campWidth/2);
  p5.vertex(x, y);
  
  p5.endShape();

  p5.pop();
}

function drawGrave(p5, x, y, w, h, val){
  w = w/4;
  h = w/2;
  graveHeight = w;

  p5.push();
  p5.translate(w/4, -graveHeight);

  //Draw bottom left side
  p5.fill(122,122,122);
 
  p5.beginShape();
 
  p5.vertex(x - w , y-h/4);
 
  p5.vertex(x - w, -h/2+y + graveHeight);
  p5.vertex(x, y + h/2 + graveHeight);
 
  p5.vertex(x, y+ h/7);
 
  p5.endShape();
 
 
  //draw bottom right side
  p5.fill(88,88,88);
 
  p5.beginShape();
 
  p5.vertex(x + w/4, y+w/7.5);
 
  p5.vertex(x + w/4, y + graveHeight+w/8);
  p5.vertex(x, y + h/2 + graveHeight);
 
  p5.vertex(x, y+h/8);
 
  p5.endShape();
 
  //Translate grass to adjust for random height
  //Draw top
  p5.fill(155,155,155);
   
  p5.beginShape();
 
  p5.vertex(x - w , y-h/4);
  p5.vertex(x - w + w/4 , y-h/2);
  p5.vertex(x + w/4 , y+w/8);
  p5.vertex(x , y + h/2);
 
  p5.endShape(); 
  p5.pop();
}

function drawRock(p5, x, y, w, h, val){
  w = w/4;
  h = w/2;
  rockdepth = w*2;

  p5.push();
  p5.translate(0, -h/4);

  //Draw foam
   //Draw Grass
  p5.fill(244,244,244);
   
  p5.beginShape();

  p5.push();
  p5.translate(0, h);
  w *= 1.5;
  h = w/2;

  p5.vertex(x - w/2 , y);
  p5.vertex(x , y - h/2);
  p5.vertex(x + w/2 , y);
  p5.vertex(x , y + h/2);
  p5.vertex(x - w/2 , y);
 
  p5.endShape(); 

  p5.pop();

  w /= 1.5;
  h = w/2;

  //Draw bottom left side
  p5.fill(122,122,122);
 
  p5.beginShape();
 
  p5.vertex(x - w/2, y);
 
  p5.vertex(x - w/2, y + h);
  p5.vertex(x, y + h/2 + h);
 
  p5.vertex(x+w/4, y);
 
  p5.endShape();
 
 
  //draw bottom right side
  p5.fill(88,88,88);
 
  p5.beginShape();
 
  p5.vertex(x + w/2, y);
 
  p5.vertex(x + w/2, y + h);
  p5.vertex(x, y + h/2 + h);
 
  p5.vertex(x+w/4, y);
 
  p5.endShape();
 
  //Translate grass to adjust for random height
  //Draw top
  p5.fill(155,155,155);
   
  p5.beginShape();
 
  p5.vertex(x - w/2 , y);
  p5.vertex(x+w/4 , y - h/2);
  p5.vertex(x + w/2 , y);
  p5.vertex(x+w/4 , y + h/2);
  p5.vertex(x - w/2 , y);
 
  p5.endShape(); 
  p5.pop();
}

function drawTree(p5, x, y, w, h, val){

  var treeWidth = w*0.8;
  var treeHeight = w/2;
  var trunkWidth = w/4;
  var trunkHeight = trunkWidth/2;
  var trunkDepth = trunkHeight;
  var treeDepth = trunkDepth*4;

  var v1 = p5.map(val, fieldChance, forestChance, 0, 40);
  var v2 = p5.map(val, fieldChance, forestChance, 0, 20);
  var v3 = p5.map(val, fieldChance, forestChance, 0, 20);

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
  p5.fill(0 + (v1),112 + (v2),52 + (v3));

  p5.beginShape();

  p5.vertex(x - treeWidth/2, y);
  p5.vertex(x, y + treeHeight/2);
  p5.vertex(x, y - treeHeight/2 - treeDepth);
  p5.vertex(x - treeWidth/2, y);
  
  p5.endShape();

  //draw Tree right side
  p5.fill(0 + (v1),98 + (v2),44 + (v3));

  p5.beginShape();

  p5.vertex(x + treeWidth/2, y);
  p5.vertex(x, y + treeHeight/2);
  p5.vertex(x, y - treeHeight/2 - treeDepth);
  p5.vertex(x + treeWidth/2, y);
  
  p5.endShape();

  p5.pop();
}

function drawWaterTile(p5, x, y, dy, w, h, shade, v, bv){
 
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

  if(v > desertChance && bv > beachChance && bv < beachChance + 0.01 && zoomLevel > 2)
    drawRock(p5, x, y, w, h, bv);
 
}