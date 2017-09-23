var tileWidth = 80;
var tileHeight = tileWidth/2;
var boardSize = 7;

//Tile Variables
var tileDepth = 30;

function setup () {
  createCanvas(960, 500);
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

	translate(width/2, tileHeight*2);

	var rowSize = 0;
	var startPos = 0;
	drawGroundTile(0, 0);

	//Draw first half of board
	for(var y = 0; y < boardSize; y++){
		for(var x = 0; x <= rowSize; x++){

			drawGroundTile(startPos + x*tileWidth, y*tileHeight/2 + random(0,5));

		}
		startPos -= tileWidth/2;
		rowSize++;
	}

	//Draw second half of board
	for(var y = boardSize; y <= boardSize*2; y++){
		for(var x = 0; x <= rowSize; x++){

			drawGroundTile(startPos + x*tileWidth, y*tileHeight/2 + random(0,5));
		}
		startPos += tileWidth/2;
		rowSize--;
	}
}

function drawGroundTile(x, y){

	//Draw Dirt underneath
	fill(206,104,64);

	beginShape();

	vertex(x - tileWidth/2, y);

	vertex(x - tileWidth/2, y + tileDepth);
	vertex(x, y + tileHeight/2 + tileDepth);

	vertex(x, y);

	endShape();

	beginShape();

	vertex(x + tileWidth/2, y);

	vertex(x + tileWidth/2, y + tileDepth);
	vertex(x, y + tileHeight/2 + tileDepth);

	vertex(x, y);

	endShape();

	//Draw Grass
	fill(100,169,74);
	
	beginShape();

	vertex(x - tileWidth/2 , y);
	vertex(x , y - tileHeight/2);
	vertex(x + tileWidth/2 , y);
	vertex(x , y + tileHeight/2);
	vertex(x - tileWidth/2 , y);

	endShape();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}