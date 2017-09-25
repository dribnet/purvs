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
    color1 = color(0, 160, 176, 50);
    color2 = color(100, 100, 220, 40);
    c = lerpColor(color2, color1, v*2);
    return c;
  }
  else if (v < 0.65) {
      color3 = color(249, 212, 35, 70);
      color4 = color(232, 221, 203, 60);
      c2 = lerpColor(color4, color3, v);
      return c2;
  }
  else if(v<0.70) {
      return color(255, 119, 61, 40);
  }
  else {
      return color(204, 51, 63, 80);
  }
}

//Alternate Special Colours
function colorFromValue2(v) {
    if (v < 0.5) {
        color1 = color(205, 205, 205, 100);
        color2 = color(249, 242, 231, 150);
        c = lerpColor(color2, color1, v * 2);
        return c;
    }
    else if (v < 0.65) {
        return color(143, 190, 0, 130);
    }
    else if (v < 0.75) {
        return color(181, 172, 1, 100);
    }
    else {
        return color(0, 51, 63, 180);
    }
}

//Very Rare Alternate Colours
function colorFromValue3(v) {
    if (v < 0.5) {
        color1 = color(75, 17, 57, 200);
        color2 = color(59, 64, 88, 250);
        c = lerpColor(color2, color1, v * 2);
        return c;
    }
    else if (v < 0.7) {
        return color(255, 119, 61, 50);
    }
    else if (v < 0.80) {
        return color(251, 107, 65, 200);
    }
    else {
        return color(251, 107, 65, 255);
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

      // GRID RECT LANDSCAPE
      background(0);

    var x_steps = 1 + Math.floor(width / 20);
    var y_steps = 1 + Math.floor(height / 20);

    var grid_locations = new Array(x_steps);
    for (var i = 0; i < x_steps; i++) {
        grid_locations[i] = new Array(y_steps);
        for (var j = 0; j < y_steps; j++) {
            x_pos = i * 80;
            y_pos = j * 70;
            if ((j % 2) == 0) {
                x_pos = x_pos + 40;
            }
            grid_locations[i][j] = [x_pos, y_pos];
        }
    }

    var x_grid_locations = new Array(x_steps);
    var y_grid_locations = new Array(y_steps);
    for(var i=0;i<x_steps;i++) {
      var cur_x = i * 20;
      x_grid_locations[i] = cur_x;
    }

    for(var j=0;j<y_steps;j++) {
      var cur_y = j * 20;
      y_grid_locations[j] = cur_y;
    }

    for (var i = 0; i < x_steps; i++) {
        for (var j = 0; j < y_steps; j++) {
            var x_noise = i / 10.0;
            var y_noise = j / 10.0;
            var noiseVal = noise(x_noise, y_noise);

            var shade = colorFromValue(noiseVal);
            var shade2 = colorFromValue2(noiseVal);
            var shade3 = colorFromValue3(noiseVal);

            var ColType = focusedRandom(0, 100);
            var ColType2 = focusedRandom(0, 100);
            var ColType3 = focusedRandom(0, 100);
            var ColType4 = focusedRandom(0, 100);
            var ColType5 = focusedRandom(0, 100);
            var ColType6 = focusedRandom(0, 100);

            var AlternateChance = 97;
            var AlternateChance2 = 99;

            var loc = grid_locations[i][j];

            strokeWeight(noiseVal * 2);
            //stroke(shade);
            //noStroke();

            if (ColType < AlternateChance) {
                fill(shade);
                noStroke();
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(55, 105) * (noiseVal));
            }


            else{
                fill(shade2);
                stroke(shade2);
                strokeWeight(noiseVal * 5);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(55, 105) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(35, 85) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(15, 65) * noiseVal);
            }

            if (ColType4 > AlternateChance2) {
                fill(shade3);
                noStroke();
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(85, 125) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(65, 105) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(45, 85) * noiseVal);
            }
      
            noStroke();
            fill(shade);
            stroke(shade);
            rect(loc[0] - 60, loc[1] - 60, 20, 600);

            fill(20);
            rect(loc[0] - 60, loc[1] - 60, 200, 58);


            if (ColType2 <= AlternateChance) {
                fill(shade);
                noStroke();
                translate(15, 30);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(55, 105) * noiseVal);
                translate(-15, -30);
            }

            else{
                fill(shade2);
                stroke(shade2);
                strokeWeight(noiseVal * 5);
                translate(15, 30);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(55, 105) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(35, 85) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(15, 65) * noiseVal);
                translate(-15, -30);
            }

            if (ColType5 > AlternateChance2) {
                fill(shade3);
                noStroke();
                translate(15, 30);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(85, 125) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(65, 105) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(45, 85) * noiseVal);
                translate(-15, -30);
            }
            

            if (ColType3 <= AlternateChance) {
                fill(shade);
                noStroke();
                translate(-15, 30);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(55, 105) * noiseVal);
                translate(15, -30);
            }

            else{
                fill(shade2);
                stroke(shade2);
                strokeWeight(noiseVal*5);
                translate(-15, 30);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(55, 105) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(35, 85) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(15, 65) * noiseVal);
                translate(15, -30);
            }

            if (ColType6 > AlternateChance2) {
                fill(shade3);
                noStroke();
                translate(-15, 30);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(85, 125) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(65, 105) * noiseVal);
                ellipse(loc[0] - 60, loc[1] - 60, focusedRandom(45, 85) * noiseVal);
                translate(15, -30);
            }

            

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







