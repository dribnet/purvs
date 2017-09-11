var hexSize = 20;
var hexWidth = hexSize * 2;
var hexHoriz = hexWidth * 1.75;
var hexHeight;


function setup () {
  createCanvas(960, 500);
  hexHeight = sqrt(3) / 2 * hexWidth;
}

function draw () {

  background(35, 36, 39);

  fill(66, 68, 71);
  stroke(10, 74, 210);
  strokeWeight(2);

  for (var x = 0; x < 15; x ++){
    for (var y = 0; y < 15; y++){
      polygon(20 + x * hexHoriz, 20 + y * hexHeight, hexSize, 6);
    }
  }




//   if (mouseIsPressed) {
//     fill(0);
//   }
//   else {
//     fill(255);
//   }
//   polygon(mouseX, mouseY, 10, 6);
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
