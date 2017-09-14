function setup() {
curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
  background(0); 
  noStroke(); 

  var gridSize = 10;


}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

  function draw () {


  var x_steps = 1 + Math.floor(width / 30);
  var y_steps = 1 + Math.floor(height / 30);


  resetFocusedRandom(curRandomSeed);

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
    	//boxes being drawn
      fill(focusedRandom(0, 255, 3));
      var x1 = x_grid_locations[i];
      var x2 = x_grid_locations[i+1];
      var y1 = y_grid_locations[j];
      var y2 = y_grid_locations[j+1];

      rect(x1-15, y1-15, x2-15, y2-15);

     
      translate (width/4, height/4);
      noStroke();
      fill (120);
      rectMode(CENTER);
      translate(width/4, height/1.5);
      	//rotate(PI/0.9);
      	//rect (480, 250, 10, 50);
      	//translate(width/4, height/4);
      rotate(PI/2.0);
      	//rect (240, 250, 5, 55);
      translate(width/4, height/4);
      rotate(PI/3.0);
      	//rect (180, 250, 25, 25);
      	//translate(width/4, height/4);
      rotate(PI/4.0);
      	//rect (320, 250, 55, 55);
      translate(width/8, height/4);
      rotate(PI/5.0);
      ellipse (480, 250, 5, 15);

      fill(255);
      //rotate(PI/3.0);
      rect(x1+2, y1-5, 3, 10);
      //rotate(PI/3.0);
      rect(x1-2, y1-2, 10, 3);
      stroke(255, 50);
      line(x1, y1, width/2, height/2);

    	}
  	}



  // for (var x = gridSize; x <= width + gridSize; x += gridSize) {
  //   for (var y = gridSize; y <= height - gridSize; y += gridSize) {
  //     translate (width/4, height/4);
  //     noStroke();
  //     fill (120);
  //     rectMode(CENTER);
  //     translate(width/3.8, height/0.9);
  //     rotate(PI/0.9);
  //     //rect (480, 250, 10, 50);
  //     translate(width/4, height/4);
  //     rotate(PI/2.0);
  //     //rect (240, 250, 5, 55);
  //     translate(width/4, height/4);
  //     rotate(PI/3.0);
  //     //rect (180, 250, 25, 25);
  //     translate(width/4, height/4);
  //     rotate(PI/4.0);
  //     //rect (320, 250, 55, 55);
  //     translate(width/4, height/4);
  //     rotate(PI/5.0);
  //     rect (320, 250, 10, 50);

  //     fill(255);
  //     rotate(PI/3.0);
  //     rect(x+2, y-5, 3, 10);
  //     rotate(PI/3.0);
  //     rect(x-2, y-2, 10, 3);
  //     stroke(255, 50);
  //     line(x, y, width/2, height/2);
  //   }
  // }


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}