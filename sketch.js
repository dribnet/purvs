var slider1, slider2, slider3, slider4, slider5;
var faceSelector;

var mode;

var drawing = false;

var curRandomSeed = 0;

//Terrian Variables
var tileWidth = 40;
var tileHeight = tileWidth/2;
var tileDepth = 30;
var boardSize = 4;

var maxHeight = 1;

var waterChance = 0.5;
var landChance = 0.5;
var treeChance = 0.8;

var grid_locations;

function setup () {
  createCanvas(960, 500);

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');

  faceSelector = createSelect();
  faceSelector.option('Wallpaper');
  faceSelector.option('LandScape');
  faceSelector.value('LandScape');
  faceSelector.parent('selector1Container');

  drawing = true;
  draw();

  setupGrid();
  drawShapes();
}

function changeRandomSeed() {
  curRandomSeed += 1;
}

function mouseClicked(){

	if(!drawing){

		drawing = true;
		setupGrid();
		drawShapes();
		shapeSize = random(80,80);
	}
}

function colorFromValue(v) {
  if (v < waterChance) {
  	color1 = color(28,58,103);
    color2 = color(71,126,207); 
    c = lerpColor(color1, color2, v*(1/waterChance)); //times v to be between 1 and 0
    return c;
  }
  else if(v < waterChance + (landChance/5) ) {
    color1 = color(100,169,74);
    color2 = color(102,121,65); 
    c = lerpColor(color1, color2, map(v,waterChance, waterChance + (landChance/5), 0, 1)); //times v to be between 1 and 0
    return c;
  }
  else {
    color1 = color(128, 128, 128);
    color2 = color(255);    
    c = lerpColor(color1, color2, map(v,waterChance + (landChance/3), 1, 0, 1)); //times v to be between 1 and 0
    return c;
  }
}

function setupGrid(){

	resetFocusedRandom(curRandomSeed);
	noiseSeed(curRandomSeed);

	var rowSize = 0;
	var startPos = 0;

	grid_locations = new Array(boardSize);
	

	//Set up first half of board
	for(var y = 0; y < boardSize; y++){

		grid_locations[y] = new Array(boardSize);
		var y2 = y;

		for(var x = 0; x <= rowSize; x++){

			grid_locations[y2][x] = [startPos + x*tileWidth, y*tileHeight/2];
			y2 -= 1;
		}
		startPos -= tileWidth/2;
		rowSize++;
	}

	//Set up second half of board
	for(var y = boardSize; y <= boardSize*2; y++){

		var y2 = boardSize-1;

		for(var x = 0; x < rowSize; x++){

			var x2 = x + y - boardSize;

			grid_locations[y2][x2] = [startPos + x*tileWidth, y*tileHeight/2];
			y2 -= 1;
		}
		startPos += tileWidth/2;
		rowSize--;
	}
}

function getNoiseValue(y, x){

	var loc = grid_locations[y][x];
    var x1 = loc[0];
    var y1 = loc[1];

	var x_noise = x1/100.0;
    var y_noise = y1/100.0;

    return noise(x_noise, y_noise);
}

function drawShapes(){
	clear();
	noStroke();
	background(125,210,233);

	translate(width/2, 80);

	var rowSize = 0;
	var startPos = 0;

	//Draw first half of board
	for(var y = 0; y < boardSize; y++){

		var y2 = y;

		for(var x = 0; x <= rowSize; x++){

        	var noiseVal = getNoiseValue(y2, x);

			if(noiseVal > waterChance)
				drawGroundTile(startPos + x*tileWidth, y*tileHeight/2, noiseVal);
			else
				drawWaterTile(startPos + x*tileWidth, y*tileHeight/2, noiseVal);

			y2 -= 1;
		}
		startPos -= tileWidth/2;
		rowSize++;
	}

	startPos += tileWidth;
	rowSize--;

	//Draw second half of board
	for(var y = boardSize; y <= boardSize*2; y++){

		var y2 = boardSize-2;

		for(var x = 0; x < rowSize; x++){

			var x2 = x + y - boardSize;

			var noiseVal = getNoiseValue(y2, x2);

			if(noiseVal > waterChance)
				drawGroundTile(startPos + x*tileWidth, y*tileHeight/2, noiseVal);
			else
				drawWaterTile(startPos + x*tileWidth, y*tileHeight/2, noiseVal);

			y2 -= 1
		}
		startPos += tileWidth/2;
		rowSize--;
	}

	drawing = false;
}

function drawWaterTile(x, y, noiseVal){

	var shade = colorFromValue(noiseVal);

	dy = -5;

	//Draw Dirt underneath

	//Draw left side
	fill(red(shade) - 10, green(shade) - 10, blue(shade) - 10);

	beginShape();

	vertex(x - tileWidth/2, y-dy);

	vertex(x - tileWidth/2, y + tileDepth);
	vertex(x, y + tileHeight/2 + tileDepth);

	vertex(x, y-dy);

	endShape();


	//draw right side
	fill(red(shade) - 25, green(shade) - 25, blue(shade) - 25);
	beginShape();

	vertex(x + tileWidth/2, y-dy);

	vertex(x + tileWidth/2, y + tileDepth);
	vertex(x, y + tileHeight/2 + tileDepth);

	vertex(x, y-dy);

	endShape();

	push();

	//Translate grass to adjust for random height
	translate(0, -dy);

	//Draw Water
	fill(shade);
	
	beginShape();

	vertex(x - tileWidth/2 , y);
	vertex(x , y - tileHeight/2);
	vertex(x + tileWidth/2 , y);
	vertex(x , y + tileHeight/2);
	vertex(x - tileWidth/2 , y);

	endShape();

	pop();
}

function drawGroundTile(x, y, noiseVal){

	var shade = colorFromValue(noiseVal);

	//Get height from noiseVal
	var dy2 = map(noiseVal,waterChance, 1, 0, 1);

	dy = (80*dy2*maxHeight) - boardSize/10;

	//Draw Dirt underneath

	//Draw left side
	fill(red(shade) - 10, green(shade) - 10, blue(shade) - 10);

	beginShape();

	vertex(x - tileWidth/2, y-dy);

	vertex(x - tileWidth/2, y + tileDepth);
	vertex(x, y + tileHeight/2 + tileDepth);

	vertex(x, y-dy);

	endShape();


	//draw right side
	fill(red(shade) - 25, green(shade) - 25, blue(shade) - 25);

	beginShape();

	vertex(x + tileWidth/2, y-dy);

	vertex(x + tileWidth/2, y + tileDepth);
	vertex(x, y + tileHeight/2 + tileDepth);

	vertex(x, y-dy);

	endShape();

	push();

	//Translate grass to adjust for random height
	translate(0, -dy);

	//Draw Grass
	fill(shade);
	
	beginShape();

	vertex(x - tileWidth/2 , y);
	vertex(x , y - tileHeight/2);
	vertex(x + tileWidth/2 , y);
	vertex(x , y + tileHeight/2);
	vertex(x - tileWidth/2 , y);

	endShape();	

	//Draw extras on grass
	var tree = focusedRandom(0, 1);
	if(noiseVal < waterChance + (landChance/5) && tree < treeChance)
		drawTree(x, y);

	pop();
}

function drawTree(x, y){

	var treeWidth = tileWidth*0.8;
	var treeHeight = tileWidth/2;
	var trunkWidth = tileWidth/4;
	var trunkHeight = trunkWidth/2;
	var trunkDepth = trunkHeight;
	var treeDepth = trunkDepth*4;

	//Draw Shadow
	fill(0,0,0, 55);
	
	beginShape();

	vertex(x - tileWidth/3 , y);
	vertex(x , y - tileHeight/3);
	vertex(x + tileWidth/3 , y);
	vertex(x , y + tileHeight/3);
	vertex(x - tileWidth/3 , y);

	endShape();	

	//Draw trunk left side
	fill(122,72,60);

	beginShape();

	vertex(x - trunkWidth/2, y);
	vertex(x, y + trunkHeight/2);
	vertex(x, y - trunkHeight/2 - trunkDepth);
	vertex(x - trunkWidth/2, y - trunkHeight - trunkDepth);
	vertex(x - trunkWidth/2, y);

	endShape();

	//draw trunk right side
	fill(86,54,40);

	beginShape();

	vertex(x + trunkWidth/2, y);
	vertex(x, y + trunkHeight/2);
	vertex(x, y - trunkHeight/2 - trunkDepth);
	vertex(x + trunkWidth/2, y - trunkHeight - trunkDepth);
	vertex(x + trunkWidth/2, y);
	
	endShape();

	push();
	translate(0, -trunkDepth*2);

	//draw Tree left side
	fill(0 + random(0,10),142 + random(-10,10),82 + random(-10,10));

	beginShape();

	vertex(x - treeWidth/2, y);
	vertex(x, y + treeHeight/2);
	vertex(x, y - treeHeight/2 - treeDepth);
	vertex(x - treeWidth/2, y);
	
	endShape();

	//draw Tree right side
	fill(0 + random(0,10),128 + random(-10,10),74 + random(-10,10));

	beginShape();

	vertex(x + treeWidth/2, y);
	vertex(x, y + treeHeight/2);
	vertex(x, y - treeHeight/2 - treeDepth);
	vertex(x + treeWidth/2, y);
	
	endShape();

	pop();
}

function draw(){

	mode = faceSelector.value();

	var s1 = slider1.value();
    var s2 = slider2.value();
    var s3 = slider3.value();
    var s4 = slider4.value();

    //Board Size Changes
	tileWidth = map(s1, 0, 100, 15, 100);
	tileHeight = tileWidth/2;
	boardSize = Math.round(80/tileWidth * 8);
	tileDepth = 30 - boardSize/2;

	if(tileDepth < 1)
		tileDepth = 1;
	
	//Terrian Variety
	waterChance = map(s2, 0, 100, 0.33, 0.66);
	landChance = 1 - waterChance;
	treeChance = map(s3, 0, 100, 0, 1);

	maxHeight = map(s4, 0, 100, 0, 1.5);

	//Continue to update landscape if board isn't too big (To avoid lag)
	if(boardSize < 20)
		mouseClicked();
}

function keyTyped() {
  if (key == '!') {
      saveBlocksImages();
  }
  if(key == ' ' && !drawing){
  	    drawing = true;
  	    changeRandomSeed();
	    setupGrid();
	    drawShapes();
	    shapeSize = random(80,80);
  }
}