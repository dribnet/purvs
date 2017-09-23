var slider1, slider2, slider3, slider4, slider5;

var curRandomSeed = 0;

//Terrian Variables
var tileWidth = 40;
var tileHeight = tileWidth/2;
var tileDepth = 30;
var boardSize = 4;
var waterChance = 0.5;
var landChance = 0.5;
var mountainChance = 0.2;

var grid_locations;

function setup () {
  createCanvas(960, 500);

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');

  draw();

  setupGrid();
  drawShapes();
}

function changeRandomSeed() {
  curRandomSeed += 1;
}

function mouseClicked(){
	changeRandomSeed();
	setupGrid();
	drawShapes();
	shapeSize = random(80,80);
}

function colorFromValue(v) {
  if (v < waterChance) {
  	color1 = color(28,58,103);
    color2 = color(71,126,207); 
    c = lerpColor(color1, color2, v*(1/waterChance)); //times v to be between 1 and 0
    return c;
  }
  else if(v < waterChance + (landChance/5)) {
    return color(100,169,74);
  }
  else {
    color1 = color(128, 128, 128);
    color2 = color(233);    
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

			var tileType = random(0,1);

			var loc = grid_locations[y2][x];
       	    var x1 = loc[0];
        	var y1 = loc[1];

			var x_noise = x1/100.0;
        	var y_noise = y1/100.0;
        	var noiseVal = noise(x_noise, y_noise);

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
			var tileType = random(0,1);

			var loc = grid_locations[y2][x2];
       	    var x1 = loc[0];
        	var y1 = loc[1];

			var x_noise = x1/100.0;
        	var y_noise = y1/100.0;
        	var noiseVal = noise(x_noise, y_noise);

			if(noiseVal > waterChance)
				drawGroundTile(startPos + x*tileWidth, y*tileHeight/2, noiseVal);
			else
				drawWaterTile(startPos + x*tileWidth, y*tileHeight/2, noiseVal);

			y2 -= 1
		}
		startPos += tileWidth/2;
		rowSize--;
	}
}

function drawWaterTile(x, y, noiseVal){

	var shade = colorFromValue(noiseVal);

	dy = -5;

	//Draw Dirt underneath

	//Draw left side
	fill(shade);

	beginShape();

	vertex(x - tileWidth/2, y-dy);

	vertex(x - tileWidth/2, y + tileDepth);
	vertex(x, y + tileHeight/2 + tileDepth);

	vertex(x, y-dy);

	endShape();


	//draw right side
	fill(39,81,143);

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

	var dy2 = map(noiseVal,waterChance, 1, 0, 1);

	dy = 80*dy2;

	//Draw Dirt underneath

	//Draw left side
	fill(206,104,64);

	beginShape();

	vertex(x - tileWidth/2, y-dy);

	vertex(x - tileWidth/2, y + tileDepth);
	vertex(x, y + tileHeight/2 + tileDepth);

	vertex(x, y-dy);

	endShape();


	//draw right side
	fill(170,66,52);

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
	//fill(100,169,74);
	fill(shade);
	
	beginShape();

	vertex(x - tileWidth/2 , y);
	vertex(x , y - tileHeight/2);
	vertex(x + tileWidth/2 , y);
	vertex(x , y + tileHeight/2);
	vertex(x - tileWidth/2 , y);

	endShape();

	//Draw extras on grass
	var mountain = random(0, 1);
	//if(mountain < mountainChance)
		//drawMountain(x, y-tileDepth);

	pop();
}

function drawMountain(x, y){

	var mountainWidth = tileWidth * 0.5;
	var mountainHeight = mountainWidth/2;
	var mountainSize = random(mountainHeight, mountainHeight*2);

	dy = random(0,10);

	//Draw Dirt underneath

	//Draw left side
	fill(122,72,60);

	beginShape();

	vertex(x - tileWidth/2, y-dy);

	vertex(x - tileWidth/2, y + tileDepth);
	vertex(x, y + tileHeight/2 + tileDepth);

	vertex(x, y-dy);

	endShape();


	//draw right side
	fill(86,54,40);

	beginShape();

	vertex(x + tileWidth/2, y-dy);

	vertex(x + tileWidth/2, y + tileDepth);
	vertex(x, y + tileHeight/2 + tileDepth);

	vertex(x, y-dy);

	endShape();

	push();

	//Translate grass to adjust for random height
	translate(0, -dy);

	//Draw Top
	fill(170,66,52);
	
	beginShape();

	vertex(x - tileWidth/2 , y);
	vertex(x , y - tileHeight/2);
	vertex(x + tileWidth/2 , y);
	vertex(x , y + tileHeight/2);
	vertex(x - tileWidth/2 , y);

	endShape();

	//Draw extras on grass
	var mountain = random(0, 1);
	if(mountain < mountainChance)
		drawMountain(x, y);

	pop();
}

function drawTree(x, y){



}

function drawCloud(){

	fill(233,233,233);

	rect(50,50, 75,45);
}

function draw(){

	var s1 = slider1.value();
    var s2 = slider2.value();
    var s3 = slider3.value();
    var s4 = slider4.value();
    var s5 = slider5.value();

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
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}