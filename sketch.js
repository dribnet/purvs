 var  drawingMode;
 var gridSize = 10;

function setup() {
drawingMode = 'wallpaper';
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
  background(0); 
  noStroke(); 
  rectMode(CORNERS);

  var gridSize = 10;
  rectMode(CENTER);

}

function draw () {
    if(drawingMode === 'wallpaper'){
		noFill();
		drawPattern();
	}
	else if(drawingMode === 'landscape'){
		drawLandscape();
		drawBackground();
		blendMode(LIGHTEST);
		drawSky();
		blendMode(NORMAL);
	}
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed(){
    changeRandomSeed();
	redraw();
	
}

// Colour palette, selected from noise values.
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

// Altered version of Pattern, changing grid locations and shape dimensions to form peaks.

  function drawLandscape () {
  	colorMode(RGB);
	fill(0);

  	rect(0, 0, 2000, 2000);

	noiseSeed(curRandomSeed);
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

	    var x1 = x_grid_locations[i];
	    var x2 = x_grid_locations[i+1];
	    var y1 = y_grid_locations[j];
	    var y2 = y_grid_locations[j] + j*40;
	  

	    beginShape();
	    fill(focusedRandom(200,0,0));
	    fill(random(0, 255));
	    vertex(x1, y1);
	    var foo = Math.random() * (6 - 3) + 3   
	    for(var k = 0;k < foo;k++){
	      vertex(x1 + 5*k, y1 + 1*k);
	    }
	    triangle(x1 + k^2, y1 + k^2, x2, y2 , x1, y1);
	    triangle(x1 + 15, y1 + 15, x2, y2 , x1, y1);
		endShape();

	    } 
	    }
	}

// This is the basic shapes used to block out parts of the pattern to form the mountain skyline.
function drawBackground () {

	resetFocusedRandom(curRandomSeed);
	noiseSeed(curRandomSeed);
   	fill (0);
	blendMode(MULTIPLY);

// Main triangles

	triangle(0 + random(0, 100), 0, 160, 350 + random(0, 200), 300 + random(-200, 200), 0);
	triangle(480 + random(0, 200), 0, 660, 350 + random(0, 200), 760 + random(-200, 200), 0);
	triangle(-280 + random(0, 200), 0, -200 + random(-50, 200), 300 + random(-200, 200), 300 + random(-200, 200), 0); 
	triangle(420, 0, 510, 350, 600 + random(-50, 200), 0); 
	triangle(220 + random(0, 200), 0, 290, 350 + random(0, 200), 390 + random(-200, 200), 0); 
	triangle(-100 + random(0, 200), 0, -50, 350 + random(0, 200), 180 + random(-200, 200), 0);
	fill(150);
	triangle(-50 + random(0, 100), 0, 70, 350 + random(0, 200), 200 + random(-200, 200), 0);
	triangle(430 + random(0, 200), 0, 610, 350 + random(0, 200), 750 + random(-200, 200), 0);
	triangle(-180 + random(0, 200), 0, -50 + random(-50, 200), 250 + random(-200, 200), 300 + random(-200, 200), 0); 
	triangle(370 + random(0, 200), 0, 480, 350 + random(0, 200), 580 + random(-200, 200), 0); 
	triangle(170 + random(0, 200), 0, 250, 350 + random(0, 200), 340 + random(-200, 200), 0); 
	triangle(-50 + random(0, 200), 0, 50, 350 + random(0, 200), 130 + random(-200, 200), 0); 

// Main triangles

	triangle(0 + random(0, 100), 0, 160, 350 + random(0, 200), 300 + random(-200, 200), 0);
	triangle(480 + random(0, 200), 0, 660, 350 + random(0, 200), 760 + random(-200, 200), 0);
	triangle(-280 + random(0, 200), 0, -200 + random(-50, 200), 300 + random(-200, 200), 300 + random(-200, 200), 0); 
	triangle(420, 0, 510, 350, 600 + random(-50, 200), 0); 
	triangle(220 + random(0, 200), 0, 290, 350 + random(0, 200), 390 + random(-200, 200), 0); 
	triangle(-100 + random(0, 200), 0, -50, 350 + random(0, 200), 180 + random(-200, 200), 0);
	fill(150);
	triangle(-50 + random(0, 100), 0, 70, 350 + random(0, 200), 200 + random(-200, 200), 0);
	triangle(430 + random(0, 200), 0, 610, 350 + random(0, 200), 750 + random(-200, 200), 0);
	triangle(-180 + random(0, 200), 0, -50 + random(-50, 200), 250 + random(-200, 200), 300 + random(-200, 200), 0); 
	triangle(370 + random(0, 200), 0, 480, 350 + random(0, 200), 580 + random(-200, 200), 0); 
	triangle(170 + random(0, 200), 0, 250, 350 + random(0, 200), 340 + random(-200, 200), 0); 
	triangle(-50 + random(0, 200), 0, 50, 350 + random(0, 200), 130 + random(-200, 200), 0); 

// Bigger shapes to ensure angled ridge line.

	fill(0);
	quad(0,0, 960,0, 960,300 + random(-50, 50), 0, 250 + random(-50, 50));
	quad(0,0, 960,0, 960,150 + random(-30, 80), 0, 350 + random(-30, 80));
	blendMode(NORMAL);

// Shading

	fill (0, 150 + random(-30, 50));

	triangle(0, 0, 60, 500 + random(-50, 50), 500 + random(-100, 100), 0);
	triangle(480, 0, 760, 500 + random(-100, 50), 960 + random(-100, 100), 0);
	triangle(-280 + random(0, 50), 0, 100 + random(-50, 50), 500 + random(-200, 200), 400 + random(-50, 40), 0); 
	fill (0, 150 + random(-30, 50));
	triangle(420, 0, 500, 400 + random(0, 50), 600 + random(-200, 200), 0); 
	fill (0, 150 + random(-30, 50));
	triangle(220, 0, 150, 400 + random(0, 50), 290 + random(-200, 200), 0); 
	fill (0, 150 + random(-30, 50));
	triangle(520 + random(0, 50), 0, 650, 400 + random(0, 50), 890 + random(-200, 200), 0); 
	triangle(720 + random(0, 50), 0, 850, 500 + random(0, 50), 990 + random(-200, 200), 0); 
	triangle(180 + random(0, 50), 0, 300, 400 + random(0, 50), 490 + random(-200, 200), 0); 

	fill (0, 150 + random(-30, 50));

	triangle(0, 0, 60, 500 + random(-50, 50), 500 + random(-100, 100), 0);
	triangle(480, 0, 760, 500 + random(-100, 50), 960 + random(-100, 100), 0);
	triangle(-280 + random(0, 50), 0, 100 + random(-50, 50), 500 + random(-200, 200), 400 + random(-50, 40), 0); 
	fill (0, 150 + random(-30, 50));
	triangle(420, 0, 500, 400 + random(0, 50), 600 + random(-200, 200), 0); 
	fill (0, 150 + random(-30, 50));
	triangle(220, 0, 150, 400 + random(0, 50), 290 + random(-200, 200), 0); 
	fill (0, 150 + random(-30, 50));
	triangle(520 + random(0, 50), 0, 650, 400 + random(0, 50), 890 + random(-200, 200), 0); 
	triangle(720 + random(0, 50), 0, 850, 500 + random(0, 50), 990 + random(-200, 200), 0); 
	triangle(180 + random(0, 50), 0, 300, 400 + random(0, 50), 490 + random(-200, 200), 0); 
	
	fill(0);

// Draw wallpaper pattern as abstract skylines, representing wind patterns.
	
	drawPattern();


}

// Cloud pattern, using for loops to overlay lots of semi-transparent ellipses.
function drawSky(){

	
	noStroke();
	fill(180, 0 + random(0, 5));

	for(x = 0;x < 180 + random(-50, 50);x++){
	    ellipse(-150 + random(0, 1100), -130 + random(0, 360), 300 + random(0, 500), 100 + random(0, 100));
	} 
	for(x = 0;x < 130 + random(-30, 30);x++){
	    ellipse(-150 + random(0, 1100), -330 + random(0, 360), 300 + random(0, 500), 100 + random(0, 100));
	} 
}

/* Main wallpaper, using triangles and altered grid to form 
	pattern that plays with perspective and builds into different texture.*/

function drawPattern () {

  resetFocusedRandom(curRandomSeed);
  noiseSeed(curRandomSeed);
  background(10, 8);

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
      var x_noise = i / 10.0;
      var y_noise = j / 10.0;
      var noiseVal = noise(x_noise, y_noise);
      var shade = colorFromValue(noiseVal);
      fill(shade);

//boxes being drawn

      var x1 = x_grid_locations[i];
      var x2 = x_grid_locations[i+1];
      var y1 = y_grid_locations[j];
      var y2 = y_grid_locations[j+1];

      beginShape();
      fill(focusedRandom(200,0,0));
      fill(shade);
      vertex(x1, y1);
      var foo = Math.random() * (6 - 3) + 3   
      for(var k = 0;k < foo;k++){
        vertex(x1 + 1*k, y1 + 1*k);
        }
 //Triangles along grid       
      triangle(x1 + k, y1 + k, x2, y2 , x1, y1);
      endShape();
    } 
      }
}

// Function to save images.

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
// Function to change modes.

if (key == ' ') {
	
  if(drawingMode === 'wallpaper') {
			drawingMode = 'landscape';
	}
  else if(drawingMode === 'landscape'){ 
  			background(0); 		
  			drawingMode = 'wallpaper';	
  		}
	}
}