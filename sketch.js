var curRandomSeed;
var inMapMode = true;

var locs = [];

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
  rectMode(CORNERS);

  var res = 30;
  var countX = ceil(width/res) + 1;
  var countY = ceil(height/res) + 1;

  for (var j = 0; j < countY; j++) {
    for (var i = 0; i < countX; i++) {
      locs.push( new p5.Vector(res*i, res*j) );
    }
  };

  noFill();
  stroke(249,78,128);

}

var counter = 1000;
var spacer = 50;

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}


//
//background colours
function colorFromValue(v) {
  if (v < 0.5) {
    color1 = color(248, 198, 207); 
    color2 = color(250, 185, 208, 80);
    c = lerpColor(color1, color2, v*2);
    return c;
  }
  else if(v<0.7) {
    return color(146, 179, 205);
  }
  else if(v<0.8) {
    return color(129, 164, 190,70);
  }
  else {
    return color(255, 255, 255, 20);    
  }
}
//noise shapes
function ellipse(x, y, radius, npoints) {
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
  background(146, 179, 205);
  resetFocusedRandom(curRandomSeed);
  noiseSeed(curRandomSeed);




  var x_steps = 1 + Math.floor(width / 20);
  var y_steps = 1 + Math.floor(height / 18);

  // grid of shapes
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

        ellipse(x1+10, y1+10, 12, 6);
      }
    }  
  
  // dots  
  for (i = 0; i < width; i+=spacer) {
    for (j = 0; j < height; j+=spacer) {
      
      fill(0);
    
      var maxDistance = dist(0,0,width,height);
      
      
      var size = dist(mouseX,mouseY,i,j);
      
      size = size / maxDistance * 7;
      
      stroke(255, 255,255, 100);
      //line(i, j, mouseX, mouseY);
      noStroke();
      fill(255,255,255);
      ellipse(i, j, size, size);

    }
  }
// dots again, code inspired by codepen found at https://codepen.io/amritmazumder/pen/ZYRPNz.
  for (i = 20; i < width; i+=spacer) {
    for (j = 50; j < height; j+=spacer) {
      
      fill(0);
    
      var maxDistance = dist(0,0,width,height);
      
      
      var size = dist(mouseX,mouseY,i,j);
      
      size = size / maxDistance * 5;
      
      stroke(255, 255,255, 100);
      //line(i, j, mouseX, mouseY);
      noStroke();
      fill(255,255,255);
      ellipse(i, j, size, size);

    }
  }

  ////////////

//translate(width/2, height/2);
  for (var i = 0; i < width; i++) {
    var circleAngle = random(0, TWO_PI);
    var circleRadius = 100 * sqrt(random(0,1));
    // Set colors
    var palette = ["#F8C6CF","#f6dce1","#eddde0 ","#f8dbe0","#92b3cd"];
    // Set dot sizes and position
    var x = -sin(circleAngle) * circleRadius; 
    var y = cos(circleAngle) * circleRadius; 
    var d = random(10);
    // Random color picking
    var color = round(random(4))
    noFill();
    stroke(palette[color]);
    ellipse(x,y,d);
  }

  translate(width/2, height/2);
  for (var i = 0; i < width; i++) {
    var circleAngle = random(0, TWO_PI);
    var circleRadius = 200 * sqrt(random(0,1));
    // Set colors
    var palette = ["#F8C6CF","#f6dce1","#eddde0 ","#f8dbe0","#92b3cd"];
    // Set dot sizes and position
    var x = -sin(circleAngle) * circleRadius; 
    var y = cos(circleAngle) * circleRadius; 
    var d = random(20);
    // Random color picking
    var color = round(random(4))
    noFill();
    stroke(palette[color]);
    ellipse(x,y,d);
  }

  translate(width/2, height/2);
  for (var i = 0; i < width; i++) {
    var circleAngle = random(0, TWO_PI);
    var circleRadius = 100 * sqrt(random(0,1));
    // Set colors
    var palette = ["#F8C6CF","#f6dce1","#eddde0 ","#f8dbe0","#92b3cd"];
    // Set dot sizes and position
    var x = -sin(circleAngle) * circleRadius; 
    var y = cos(circleAngle) * circleRadius; 
    var d = random(10);
    // Random color picking
    var color = round(random(4))
    noFill();
    stroke(palette[color]);
    ellipse(x,y,d);
  }



  }


  else {



  // 1st set of circles
  fill(248, 198, 207);
  noStroke();
  ellipse(100, 100, 160, 160);
  ellipse(260, 210, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(180, 160, 130, 130);
  ellipse(280, 110, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(130, 210, 120, 120);
  ellipse(200, 90, 20, 20);
  ellipse(210, 250, 5, 5);
  arc(50, 50, 80, 80, 50, PI+QUARTER_PI);
//


for (var i = locs.length - 1; i >= 0; i--) {
    var h = calcVec( locs[i].x, locs[i].y );
    strokeWeight(1);
    stroke(248, 198, 207);
    line(
      locs[i].x, 
      locs[i].y, 
      locs[i].x + 150, 
      locs[i].y + 50
    );
  };


  // 1st set of circles
  fill(248, 198, 207);
  noStroke();
  ellipse(100, 100, 160, 160);
  ellipse(260, 210, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(180, 160, 130, 130);
  ellipse(280, 110, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(130, 210, 120, 120);
  ellipse(200, 90, 20, 20);
  ellipse(210, 250, 5, 5);
  arc(50, 50, 80, 80, 50, PI+QUARTER_PI);
//

// 2nd set of circles
  fill(248, 198, 207);
  noStroke();
  ellipse(400, 100, 160, 160);
  ellipse(560, 210, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(480, 160, 130, 130);
  ellipse(580, 110, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(430, 210, 120, 120);
  ellipse(500, 90, 20, 20);
  ellipse(510, 250, 5, 5);
  arc(350, 50, 80, 80, 50, PI+QUARTER_PI);
//

// 3rd set of circles
  fill(248, 198, 207);
  noStroke();
  ellipse(700, 100, 160, 160);
  ellipse(860, 210, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(780, 160, 130, 130);
  ellipse(880, 110, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(730, 210, 120, 120);
  ellipse(800, 90, 20, 20);
  ellipse(810, 250, 5, 5);
  arc(650, 50, 80, 80, 50, PI+QUARTER_PI);
//

// 1st set 2nd row
  fill(248, 198, 207);
  noStroke();
  ellipse(300, 300, 160, 160);
  ellipse(460, 410, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(380, 360, 130, 130);
  ellipse(480, 310, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(330, 410, 120, 120);
  ellipse(400, 290, 20, 20);
  ellipse(410, 450, 5, 5);
  arc(250, 250, 80, 80, 50, PI+QUARTER_PI);
//

// 2nd set 2nd row
  fill(248, 198, 207);
  noStroke();
  ellipse(600, 300, 160, 160);
  ellipse(760, 410, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(680, 360, 130, 130);
  ellipse(780, 310, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(630, 410, 120, 120);
  ellipse(700, 290, 20, 20);
  ellipse(710, 450, 5, 5);
  arc(550, 250, 80, 80, 50, PI+QUARTER_PI);
//

// 3rd set 2nd row
  fill(248, 198, 207);
  noStroke();
  ellipse(900, 300, 160, 160);
  ellipse(1060, 410, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(980, 360, 130, 130);
  ellipse(1080, 310, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(930, 410, 120, 120);
  ellipse(1000, 290, 20, 20);
  ellipse(1010, 450, 5, 5);
  arc(850, 250, 80, 80, 50, PI+QUARTER_PI);

//

for (i = 50; i < width; i+=spacer) {
    for (j = 50; j < height; j+=spacer) {
      
      fill(0);
    
      var maxDistance = dist(0,0,width,height);
      
      
      var size = dist(mouseX,mouseY,i,j);
      
      size = size / maxDistance * 5;
      
      stroke(255, 255,255, 100);
      //line(i, j, mouseX, mouseY);
      noStroke();
      fill(255,255,255);
      ellipse(i, j, size, size);

    }
  }
   
  }
}

function calcVec(x, y) {
  return new p5.Vector(y - x, - x - y);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == ' ') {
    inMapMode = !inMapMode;
  }
}