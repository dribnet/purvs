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
  background(255);
  resetFocusedRandom(curRandomSeed);

  var x_steps = 1 + Math.floor(width / 30);
  var y_steps = 1 + Math.floor(height / 30);

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
      var a = (focusedRandom(50, 255, 3));
	  var b = (focusedRandom(50, 200, 10));
	  var c = (focusedRandom(3, 150, 30));
	  fill(a,b,c);
      var x1 = x_grid_locations[i];
      var x2 = x_grid_locations[i+1];
      var y1 = y_grid_locations[j];
      var y2 = y_grid_locations[j+1];
      rect(x1, y1, x2, y2);
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}