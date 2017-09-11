function setup() {

  createCanvas(960, 500); 
  background(0); 
  noStroke(); 

  var gridSize = 10;

  function draw () {
   
  }

  for (var x = gridSize; x <= width + gridSize; x += gridSize) {
    for (var y = gridSize; y <= height - gridSize; y += gridSize) {
      noStroke();
      fill (120);
      rectMode(CENTER);
      translate(width/2, height/2);
      rotate(PI/0.75);
      rect (480, 250, 100, 100);
      translate(width/2, height/2);
      rotate(PI/2.0);
      rect (240, 250, 55, 55);
      translate(width/2, height/2);
      rotate(PI/3.0);
      rect (480, 250, 25, 25);
      translate(width/2, height/2);
      rotate(PI/4.0);
      rect (720, 250, 55, 55);
      rotate(PI/5.0);
      rect (960, 250, 100, 100);

      fill(255);
      rotate(PI/3.0);
      rect(x+2, y-5, 3, 10);
      rotate(PI/3.0);
      rect(x-2, y-2, 10, 3);
      stroke(255, 50);
      line(x, y, width/2, height/2);
    }
  }


}