var curRandomSeed;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
  ellipseMode(CORNERS);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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

  var shapes_to_draw = [];
  for(var i=0;i<x_steps-1;i++) {
    for(var j=0;j<y_steps-1;j++) {
      var x1 = x_grid_locations[i];
      var x2 = x_grid_locations[i+1];
      var y1 = y_grid_locations[j];
      var y2 = y_grid_locations[j+1];
      var growth = focusedRandom(3, 7, 4);
      shapes_to_draw.push([x1-growth, y1-growth, x2+growth, y2+growth])
    }
  }

  shuffleArray(shapes_to_draw);
  for(var i=0; i<shapes_to_draw.length; i++) {
    var cur_shape = shapes_to_draw[i];
	var a = (focusedRandom(50, 255, 3));
 	var b = (focusedRandom(50, 200, 10));
	var c = (focusedRandom(3, 150, 30));
	fill(a,b,c);
   rect(cur_shape[0], cur_shape[1], cur_shape[2], cur_shape[3]);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}