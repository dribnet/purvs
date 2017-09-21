 var  drawingMode = 'wallpaper', modeSelector;

function setup() {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
  background(0); 
  noStroke(); 
  rectMode(CORNERS);

  var gridSize = 10;
	
  modeSelector = createSelect();
  modeSelector.option('wallpaper');
  modeSelector.option('landscape');
  modeSelector.value('wallpaper');
  modeSelector.parent('mode-selector-holder');
  modeSelector.changed(changeMode);

    noLoop();
    background(0);
    rectMode(CENTER);

}

  // henriFunShape = createShape();
  // henriFunShape.beginShape();
  //  //All vertexs go here
  //  star.vertex(10,40);
  //  star.vertex(20,60);
  //  star.vertex(30,30);
  // henriFunShape.endShape(CLOSE);

function draw () {
    if(drawingMode === 'wallpaper'){
		noFill();
		drawPattern();
	}
	else if(drawingMode === 'landscape'){
		drawLandscape();
	}
}

function changeMode(){

	drawingMode = modeSelector.value();
	clear();
	background(0);
	redraw();
}



function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed(){
    changeRandomSeed();
    //clear();
    //background(0);
    redraw();
	
}

function colorFromValue(v) {
  if (v < 0.3) {
    return color(55, 103, 255);
  }
  if (v < 0.5) {
    return color(116, 131, 178);
  }
  else if (v < 0.7) {
    return color(178, 130, 0);
  }
  else {
    return color(255, 193, 29);
  }
}


  function drawLandscape () {
	  //resed.getFocusedRandom(curRandomSeed);
	  noiseSeed(curRandomSeed);
	  resetFocusedRandom(curRandomSeed);

	  var x_steps = 1 + Math.floor(width / 30);
	  var y_steps = 1 + Math.floor(height / 30);


	  //resetFocusedRandom(curRandomSeed);

	  var x_grid_locations = new Array(x_steps);
	  var y_grid_locations = new Array(y_steps);

	  for(var i=0;i<x_steps;i++) {
	    var shift = focusedRandom(-10, 10, 2);
	    var cur_x = i * 30 + shift;
	    x_grid_locations[i] = cur_x;
	  }

	  for(var j=0;j<y_steps;j++) {
	    var shift = focusedRandom(-10, 10, 2);
	    shift = shift + 500/j;
	    var cur_y = j * 30 + shift;
	    y_grid_locations[j] = cur_y;
	  }

	  for(var i=0;i<x_steps-1;i++) {
	    for(var j=0;j<y_steps-1;j++) {
	      var x_noise = i / 10.0;
	      var y_noise = j / 10.0;
	      var noiseVal = noise(x_noise, y_noise);
	      var shade = colorFromValue(noiseVal);
	      fill(shade);
	      //boxes being drawn
	      //fill(focusedRandom(0, 255, 3));
	      var x1 = x_grid_locations[i];
	      var x2 = x_grid_locations[i+1];
	      var y1 = y_grid_locations[j];
	      var y2 = y_grid_locations[j+1] + j*10;

	      //rect(x1, y1, x2, y2);
	      //henriFunShape.display();
	     
	      //noStroke();
	     // fill (120);
	     /// rectMode(CENTER);
	      //translate(width, height);
	      // /rotate(PI/0.9);
	  
	     //for(var k = 0; k <= 10; k++){
	      beginShape();
	      fill(focusedRandom(200,0,0));
	      fill(shade);
	      vertex(x1, y1);
	      var foo = Math.random() * (6 - 3) + 3   
	      for(var k = 0;k < foo;k++){
	        vertex(x1 + 1*k, y1 + 1*k);
	        }
	    //vertex(x2, y2);
	    //vertex(x2 - 50, y2 - 50);
	    //vertex(x1 + 30 , y2 + 30);
	    //vertex(x1 + 40, y1 + 40);
	      //rotate(PI/Math.random());
	      //rotate(PI/0.5);
	      triangle(x1 + k, y1 + k, x2, y2 , x1, y1);
	      //triangle(x1 + 5, y1 + 5, x2, y2 , x1, y1);
	      //triangle(x1 + k, y1 + k, x1, y1 , x2, y1);
	      //triangle(x2+ k,  y1+ k, x1, y1, x1 + k, y2 + k);


	      endShape();
          fill(0)
	      triangle(0, 0, 200, 0, 0, 500);
		  triangle(400, 0, 560, 0, 480, 500);
	      triangle(960, 0, 960, 500, 760, 0);
	      //rotate(PI/0.3)
	    } 

	      //rotate(PI/2.0);
	      // rotate(PI/3.0);
	      //rotate(PI/4.0);
	      //ellipse (480, 250, 5, 15);

	      //fill(255);
	      // //rotate(PI/3.0);
	     // rect((x1/25, y1/25, x2/25, y2/25));
	      // //rotate(PI/3.0);
	      // rect(x1-2, y1-2, 10, 3);
	      // stroke(255, 50);
	      // line(x1, y1, width/2, height/2);

	      }
	    //}
	// void display () {
	//   pushMatrix();
	//   translate(x, y);
	//   fill(102);
	//   stroke(255);
	//   strokeWeight(2);
	//   beginShape();
	//   vertex(0, -50);
	//   vertex(14, -20);
	//   vertex(47, -15);
	//   vertex(23, 7);
	//   vertex(29, 40);
	//   vertex(0, 25);
	//   vertex(-29, 40);
	//   vertex(-23, 7);
	//   vertex(-47, -15);
	//   vertex(-14, -20);
	//   endShape(CLOSE);
	//   popMatrix();
	// }


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

function drawPattern () {
  resetFocusedRandom(curRandomSeed);
  noiseSeed(curRandomSeed);
  //resetFocusedRandom(curRandomSeed);

  var x_steps = 1 + Math.floor(width / 30);
  var y_steps = 1 + Math.floor(height / 30);


  //resetFocusedRandom(curRandomSeed);

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
      var x_noise = i / 10.0;
      var y_noise = j / 10.0;
      var noiseVal = noise(x_noise, y_noise);
      var shade = colorFromValue(noiseVal);
      fill(shade);
      //boxes being drawn
      //fill(focusedRandom(0, 255, 3));
      var x1 = x_grid_locations[i];
      var x2 = x_grid_locations[i+1];
      var y1 = y_grid_locations[j];
      var y2 = y_grid_locations[j+1];

      //rect(x1, y1, x2, y2);
      //henriFunShape.display();
     
      //noStroke();
     // fill (120);
     /// rectMode(CENTER);
      //translate(width, height);
      // /rotate(PI/0.9);
  
     //for(var k = 0; k <= 10; k++){
      beginShape();
      fill(focusedRandom(200,0,0));
      fill(shade);
      vertex(x1, y1);
      var foo = Math.random() * (6 - 3) + 3   
      for(var k = 0;k < foo;k++){
        vertex(x1 + 1*k, y1 + 1*k);
        }
    //vertex(x2, y2);
    //vertex(x2 - 50, y2 - 50);
    //vertex(x1 + 30 , y2 + 30);
    //vertex(x1 + 40, y1 + 40);
      //rotate(PI/Math.random());
      //rotate(PI/0.5);
      triangle(x1 + k, y1 + k, x2, y2 , x1, y1);
      //triangle(x1 + 5, y1 + 5, x2, y2 , x1, y1);
      //triangle(x1 + k, y1 + k, x1, y1 , x2, y1);
      //triangle(x2+ k,  y1+ k, x1, y1, x1 + k, y2 + k);


      endShape();
    } 

      }


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}