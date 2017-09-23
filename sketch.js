var slider1, slider2, slider3, slider4, slider5;

//Terrian Variables
var tileWidth = 40;
var tileHeight = tileWidth/2;
var tileDepth = 30;
var boardSize = 12;
var waterChance = 0.2;

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

  drawShapes();
}

function mouseClicked(){
	drawShapes();
	shapeSize = random(80,80);
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
		for(var x = 0; x <= rowSize; x++){

			var tileType = random(0,1);

			if(tileType > waterChance)
				drawGroundTile(startPos + x*tileWidth, y*tileHeight/2);
			else
				drawWaterTile(startPos + x*tileWidth, y*tileHeight/2);
		}
		startPos -= tileWidth/2;
		rowSize++;
	}

	//Draw second half of board
	for(var y = boardSize; y <= boardSize*2; y++){
		for(var x = 0; x <= rowSize; x++){

			var tileType = random(0,1);

			if(tileType > waterChance)
				drawGroundTile(startPos + x*tileWidth, y*tileHeight/2);
			else
				drawWaterTile(startPos + x*tileWidth, y*tileHeight/2);
		}
		startPos += tileWidth/2;
		rowSize--;
	}
}

function drawWaterTile(x, y){

	dy = -5;

	//Draw Dirt underneath

	//Draw left side
	fill(64,112,183);

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

	//Draw Grass
	fill(64,112,183);
	
	beginShape();

	vertex(x - tileWidth/2 , y);
	vertex(x , y - tileHeight/2);
	vertex(x + tileWidth/2 , y);
	vertex(x , y + tileHeight/2);
	vertex(x - tileWidth/2 , y);

	endShape();

	pop();
}

function drawGroundTile(x, y){

	dy = random(0,10);

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
	fill(100,169,74);
	
	beginShape();

	vertex(x - tileWidth/2 , y);
	vertex(x , y - tileHeight/2);
	vertex(x + tileWidth/2 , y);
	vertex(x , y + tileHeight/2);
	vertex(x - tileWidth/2 , y);

	endShape();

	pop();
}

function draw(){

	var s1 = slider1.value();
    var s2 = slider2.value();
    var s3 = slider3.value();
    var s4 = slider4.value();
    var s5 = slider5.value();

    //Board Size Changes
	tileWidth = map(s1, 0, 100, 35, 100);
	tileHeight = tileWidth/2;
	boardSize = Math.round(80/tileWidth * 8);
	tileDepth = 30 - boardSize;
	
	//Terrian Variety
	waterChance = map(s2, 0, 100, 0, 1);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}