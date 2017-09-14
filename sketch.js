// var hexSize = 20;
// var hexWidth = hexSize * 2;
// var hexHoriz = hexWidth * 1.75;
// var hexHeight;
var a_colour;
var curRandomSeed;


function setup () {
  createCanvas(960, 500);
  // hexHeight = sqrt(3) / 2 * hexWidth;
  curRandomSeed = int(focusedRandom(0, 100));
}


function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function draw () {
  background(200);


  resetFocusedRandom(curRandomSeed);
  noStroke();

  a_colour = int(focusedRandom(20, 60));
  b_colour = int(focusedRandom(60,150));

  var a_amount = focusedRandom(150,250);
  var b_amount = focusedRandom(150,250);

  // var a_layer = new Array(a_amount);

  fill(a_colour, a_colour, a_colour + 10);

  for (var x = 0; x < a_amount; x++){
    var x_size = focusedRandom(40,120,1);
    var y_size = focusedRandom(40,120,1);
    rect(focusedRandom(0, width, 1),focusedRandom(0, height, 1),x_size,y_size);
  }

  fill(b_colour, b_colour, b_colour + 20);

  for (var x = 0; x < b_amount; x++){
    var x_size = focusedRandom(20,70,2);
    var y_size = focusedRandom(20,70,2);
    rect(focusedRandom(20, width-40, 2),focusedRandom(20, height-40, 2),x_size,y_size);
  }







  // background(35, 36, 39);

  // fill(66, 68, 71);
  // stroke(10, 74, 210);
  // strokeWeight(2);

  // for (var x = 0; x < 15; x ++){
  //   for (var y = 0; y < 15; y++){
  //     polygon(20 + x * hexHoriz, 20 + y * hexHeight, hexSize, 6);
  //   }
  // }


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
