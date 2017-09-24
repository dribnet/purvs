//This code was modified from the example Hexagon grid code given by Tom White.


//Global Variables
var curRandomSeed;
var inMapMode = true;


function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

//Tile Colours
function colorFromValue(v) {
  if (v < 0.5) {
    color1 = color(0, 0, 100); 
    color2 = color(100, 100, 220);
    c = lerpColor(color1, color2, v*2);
    return c;
  }
  else if(v<0.7) {
    return color(0, 128, 0);
  }
  else if(v<0.8) {
    return color(128, 128, 128);
  }
  else {
    return color(255);    
  }
}

//Hexagon Tiles
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a+PI/6) * radius;
    var sy = y + sin(a+PI/6) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function draw () {
  background(255);
  resetFocusedRandom(curRandomSeed);
  noiseSeed(curRandomSeed);
  noStroke();

  
  //Landscape
  if(inMapMode) {

    var x_steps = 1 + Math.floor(width / 20);
    var y_steps = 1 + Math.floor(height / 20);

    // save grid locations
    var grid_locations = new Array(x_steps);
      for(var i=0;i<x_steps;i++) {
      grid_locations[i] = new Array(y_steps);
      for (var j = 0; j < y_steps; j++) {
        x_pos = i * 20;
        y_pos = j * 18;
        if((j % 2) == 0){
          x_pos = x_pos + 10;
        }
        grid_locations[i][j] = [x_pos, y_pos];
      }
    }

    // draw the map
    for(var i=0;i<x_steps-1;i++) {
      for(var j=0;j<y_steps-1;j++) {
        // var shade = map(noiseVal, 0, 1, 0, 255)
        var loc = grid_locations[i][j];
        var x1 = loc[0];
        var y1 = loc[1]

        var x_noise = x1/100.0;
        var y_noise = y1/100.0;
        var noiseVal = noise(x_noise, y_noise);
        var shade = colorFromValue(noiseVal);
        fill(shade);

        polygon(x1+10, y1+10, 12, 6);
      }
    } 
  }

  //Wallpaper Design
  else {

    var x_steps = 1 + Math.floor(width / 50);
    var y_steps = 1 + Math.floor(height / 50);

    // save grid locations
    var grid_locations = new Array(x_steps);
      for(var i=0;i<x_steps;i++) {
      grid_locations[i] = new Array(y_steps);
      for (var j = 0; j < y_steps; j++) {
        x_pos = i * 80;
        y_pos = j * 70;
        if((j % 2) == 0){
          x_pos = x_pos + 40;
        }
        grid_locations[i][j] = [x_pos, y_pos];
      }
    }

    // draw a circle at each location
    for(var i=0;i<x_steps;i++) {
      for(var j=0;j<y_steps;j++) {
        var loc = grid_locations[i][j];

        var rCol = focusedRandom(0,20);

        var rCol2 = focusedRandom(0,255, 2);
        var rCol3 = focusedRandom(0,50, 1);
        var rCol4 = focusedRandom(0,155, 2);

        //fill(rCol,rCol,rCol,60);

        fill(rCol2,rCol3,rCol4,40);

        strokeWeight(0.5);
        stroke(20);
        noStroke();

        ellipse(loc[0]-60, loc[1]-60, focusedRandom(100,300));

        fill(200);
        rect(loc[0]-60, loc[1]-60, 20, 600);


        fill(20);
        rect(loc[0]-60, loc[1]-60, 200, 58);

      }
    }
  }


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == ' ') {
    inMapMode = !inMapMode;
  }
}







