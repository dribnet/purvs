function setup () {
  createCanvas(960, 500);
  smooth();
}

function draw () {

drawPattern();

}

function drawPattern(){
    stroke(0);
    strokeWeight(1);
    noFill();
    scale(2.0);

    beginShape();
    vertex(57.5, -10); // top point
    vertex(102, 20);   // right point
    vertex(57.5, 55); // bottom point
    vertex(32, 20);   // left point
    vertex(57.5, -10); // top point
    endShape();

    beginShape();
    vertex(57.5, 25); // top point
    vertex(92, 50);   // right point
    vertex(57.5, 85); // bottom point
    vertex(22, 50);   // left point
    vertex(57.5, 25); // top point
    endShape();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
