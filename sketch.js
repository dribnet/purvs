x=-170;
y=0;
function setup () {
  w = 960;
  h= 500;
  createCanvas(w, h);
  background(0);
}

function draw () {
  // if (mouseIsPressed) {
  //   fill(0);
  // }
  // else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
  rectMode(CENTER);
  
  stroke(220,200,80);
  noFill();
  
    x=x+170;
    y=y+100;
    myPattern(x);

    //y=y+170;
   // myPattern(x,y);
    //myPattern(x,y);

function myPattern(x) {
  translate(x, 0);
 rect(0,0,150,150);
  ellipse(0,0,120,120);
}
}
   
var curRandomSeed;

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

function draw () {
 background(0);
//    background(220,200,80);
    resetFocusedRandom(curRandomSeed);

//    stroke(0);
  var x_steps = 1 + Math.floor(width / 30);
  var y_steps = 1 + Math.floor(height / 20);

  var x_grid_locations = new Array(x_steps);
  var y_grid_locations = new Array(y_steps);
    
  for(var i=0;i<x_steps;i++) {
    var shift = focusedRandom(-10, 10, 2);
    var cur_x = i * 30 + shift;
    x_grid_locations[i] = cur_x;
  }

  for(var j=0;j<y_steps;j++) {
    var shift = focusedRandom(-10, 10, 2);
    var cur_y = j * 30 + shift;
    y_grid_locations[j] = cur_y;
  }

  for(var i=0;i<x_steps-1;i++) {
    for(var j=0;j<y_steps-1;j++) {
      fill(focusedRandom(0, 50, 3),100);
        stroke(220,200,80,focusedRandom(0, 100, 1));
      var x1 = x_grid_locations[i];
      var x2 = x_grid_locations[i+1];
      var y1 = y_grid_locations[j];
      var y2 = y_grid_locations[j+1];
         var ellipseW = focusedRandom(30,60,2);
        var ellipseH = focusedRandom(30, 60,2);
         var ellipseS = focusedRandom(10,60,2);
      //rect(x1, y1, x2, y2);
        ellipse(x1,y1,ellipseS,ellipseS);
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


