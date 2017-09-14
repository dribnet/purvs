function setup() {

  createCanvas(960, 500); 
  background(0); 
  noStroke(); 

  var gridSize = 10;

 function draw () {
   
 }

 function keyTyped() {
  	if (key == '!') {
    saveBlocksImages();
 	}  
 }

  for (var x = gridSize; x <= width + gridSize; x += gridSize) {
    for (var y = gridSize; y <= height - gridSize; y += gridSize) {
      translate (width/4, height/4);
      noStroke();
      fill (120);
      rectMode(CENTER);
      translate(width/3.8, height/0.9);
      rotate(PI/0.9);
      //rect (480, 250, 10, 50);
      translate(width/4, height/4);
      rotate(PI/2.0);
      rect (240, 250, 5, 55);
      translate(width/4, height/4);
      rotate(PI/3.0);
      //rect (180, 250, 25, 25);
      translate(width/4, height/4);
      rotate(PI/4.0);
      //rect (320, 250, 55, 55);
      translate(width/4, height/4);
      rotate(PI/5.0);
      rect (320, 250, 10, 50);

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