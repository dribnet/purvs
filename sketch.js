var hexSize = 20;
var hexWidth = hexSize * 2;
var hexHoriz = hexWidth * 1.75;
var hexHeight;
var a_colour;
var curRandomSeed;

var drawMode = 'wallpaper', modeSelector;


function setup () {
  createCanvas(960, 500);
  hexHeight = sqrt(3) / 2 * hexWidth;
  curRandomSeed = int(focusedRandom(0, 100));
  rectMode(CENTER);

  modeSelector = createSelect();
  modeSelector.option('wallpaper');
  modeSelector.option('landscape');
  modeSelector.value('wallpaper');
  modeSelector.parent('mode-selector-holder');
  modeSelector.changed(changeMode);
}


function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function draw () {

  if(drawMode === 'wallpaper'){
    drawWallpaper();
  }
  else if(drawMode === 'landscape'){
    drawLandscape();
  }
}

function changeMode(){

  drawMode = modeSelector.value();
  clear();
  background(0);
  redraw();
}

function drawLandscape(){
  background(10);
  resetFocusedRandom(curRandomSeed);
  noStroke();

  a_colour = int(focusedRandom(30, 70));
  b_colour = int(focusedRandom(70,140));
  c_colour = int(focusedRandom(140,200));

  var a_amount = focusedRandom(150,250);
  var b_amount = focusedRandom(100,200);
  var c_amount = focusedRandom(40,80);
  var d_amount = focusedRandom(0,10);

  fill(a_colour, a_colour, a_colour + 10);

  for (var x = 0; x < a_amount; x++){
    var x_size = focusedRandom(60,100,1);
    var y_size = focusedRandom(60,100,1);
    rect(focusedRandom(0, width-60, 1),focusedRandom(0, height-60, 1),x_size,y_size,2);
  }

  fill(b_colour, b_colour, b_colour + 20);

  for (var x = 0; x < b_amount; x++){
    var x_size = focusedRandom(40,80,2);
    var y_size = focusedRandom(40,80,2);
    rect(focusedRandom(20, width-40, 2),focusedRandom(20, height-40, 2),x_size,y_size,random(2,4));
  }

  fill(c_colour, c_colour, c_colour + 20);

  for (var x = 0; x < c_amount; x++){
    var x_size = focusedRandom(20,50,2);
    var y_size = focusedRandom(20,50,2);
    rect(focusedRandom(40, width-40, 3),focusedRandom(40, height-40, 3),x_size,y_size,random(3,5));
  }
  for (var x = 0; x < d_amount; x++){
    var x_size = focusedRandom(20,25,2);
    var y_size = focusedRandom(20,25,2);
    ellipse(focusedRandom(40, width - 40, 5), focusedRandom(40, height-40, 5), x_size, y_size);
  }
}

function drawWallpaper(){

  background(35, 36, 39);

  fill(66, 68, 71);
  stroke(10, 74, 210);
  strokeWeight(2);

  for (var x = 0; x < 15; x ++){
    for (var y = 0; y < 15; y++){
      polygon(20 + x * hexHoriz, 20 + y * hexHeight, hexSize, 6);
    }
  }


  }




function mouseClicked(){
  changeRandomSeed();
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function polygon(x, y, radius, npoints){
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle){
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
