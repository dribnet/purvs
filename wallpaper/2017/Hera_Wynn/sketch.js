var curRandomSeed;
var inMapMode = true;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
  rectMode(CORNERS);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

function colorFromValue(v) {
  if (v < 0.5) {
    color1 = color(240,139,175); //coral 
    color2 = color(6,255,255); //turquoise
    c = lerpColor(color1, color2, v*2); 
    return c;
  }
  else if(v<0.7) {
    color3 = color(4,248,215); //tealish
    color4 = color(240,139,175); //coral
    c1 = lerpColor(color3,color4);
    return c1;
  }
  else if(v<0.8) {
    return color(6,196,249); //blue
  }
  else {
    return color(235,93,244); //pink
  }
}


function draw () {
  background(255);
  resetFocusedRandom(curRandomSeed);
  noiseSeed(curRandomSeed);

  var x_steps = 1 + Math.floor(width / 10); 
  var y_steps = 1 + Math.floor(height / 10);

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

  noStroke();

  if(inMapMode) {
    for(var i=0;i<x_steps;i++) {
    grid_locations[i] = new Array(y_steps);
    for (var j = 0; j < y_steps; j++) {
      x_pos = i * 20;
      y_pos = j * 18;
      if((j % 2) == 0){
        x_pos = x_pos + 5;
      }
      grid_locations[i][j] = [x_pos, y_pos];
    }
  }
    // draw the landscape
    for(var i=0;i<x_steps-1;i++) {
      for(var j=0;j<y_steps-1;j++) {
      
        var loc = grid_locations[i][j];
        var x1 = loc[0];
        var y1 = loc[1]

        var x_noise = x1/200.0;
        var y_noise = y1/500.0;
        var noiseVal = noise(x_noise, y_noise);
        var shade = colorFromValue(noiseVal);
        fill(shade);
     
        ellipse(x1, y1, 20);
        
      }
    }    
  }
  else {
    background(240,139,175);
    k = int(focusedRandom(50,0));
    // draw a pattern
    for(var j=0;j<y_steps-1;j++) {
      for(var i=0;i<x_steps-1;i++) {
       
        var loc = grid_locations[i][j];
        var x1 = loc[0];
        var y1 = loc[1]

        var spot = (i+j+k) % 15;
        if(spot == 0 || spot == 3) {
          fill(4,248,215);
        }
        else if(spot == 8 || spot == 1) {
          fill(6,255,255); 
        }
        else if(spot == 11 || spot == 12) {
          fill(240,139,175); 
        }
        else if(spot == 7 ) {
          fill(235,93,244);
          rotate()
        }
        else { 
       var a = (focusedRandom(4,248,215));
       var b = (focusedRandom(240,139,175));
       var c = (focusedRandom(248,215));
       fill(a,b,c);  

        }
        //ellipse(x1, y1, 20);
       triangle(loc[0]-10, loc[1]+0, loc[0]+10, loc[1]+0, loc[0]+20, loc[1]+50);    
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
