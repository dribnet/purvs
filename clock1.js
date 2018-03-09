const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
const ZERO_SHAPE = [[0, 1, 1, 1, 0],
  				   [1, 0, 0, 0, 1],
  				   [1, 0, 0, 0, 1],
  				   [1, 0, 0, 0, 1],
  				   [1, 0, 0, 0, 1],
   				   [1, 0, 0, 0, 1],
  				   [0, 1, 1, 1, 0]];

const ONE_SHAPE = [[0, 0, 1, 0, 0],
  				   [0, 1, 1, 0, 0],
  				   [0, 0, 1, 0, 0],
  				   [0, 0, 1, 0, 0],
  				   [0, 0, 1, 0, 0],
  				   [0, 0, 1, 0, 0],
  				   [0, 0, 1, 0, 0]];

const TWO_SHAPE = [[0, 1, 1, 1, 0],
  				   [1, 0, 0, 0, 1],
  				   [0, 0, 0, 1, 0],
  				   [0, 0, 1, 0, 0],
  				   [0, 1, 0, 0, 0],
  				   [1, 0, 0, 0, 0],
  				   [1, 1, 1, 1, 1]];

const THREE_SHAPE = [[0, 1, 1, 1, 0],
  				   [1, 0, 0, 0, 1],
  				   [0, 0, 0, 0, 1],
  				   [0, 1, 1, 1, 0],
  				   [0, 0, 0, 0, 1],
  				   [1, 0, 0, 0, 1],
  				   [0, 1, 1, 1, 0]];

const FOUR_SHAPE = [[0, 0, 0, 1, 0],
  				   [0, 0, 1, 1, 0],
  				   [0, 1, 0, 1, 0],
  				   [1, 0, 0, 1, 0],
  				   [1, 1, 1, 1, 1],
  				   [0, 0, 0, 1, 0],
  				   [0, 0, 0, 1, 0]];

const FIVE_SHAPE = [[1, 1, 1, 1, 1],
  				   [1, 0, 0, 0, 1],
  				   [1, 1, 1, 1, 0],
  				   [0, 0, 0, 0, 1],
  				   [0, 0, 0, 0, 1],
  				   [0, 0, 0, 0, 1],
  				   [1, 1, 1, 1, 0]];

const SIX_SHAPE = [[0, 1, 1, 1, 0],
  				   [1, 0, 0, 0, 0],
  				   [1, 0, 0, 0, 0],
  				   [1, 1, 1, 1, 0],
  				   [1, 0, 0, 0, 1],
  				   [1, 0, 0, 0, 1],
  				   [0, 1, 1, 1, 0]];

const SEVEN_SHAPE = [[1, 1, 1, 1, 1],
  				   [0, 0, 0, 0, 1],
  				   [0, 0, 0, 1, 0],
  				   [0, 0, 1, 0, 0],
  				   [0, 0, 1, 0, 0],
  				   [0, 0, 1, 0, 0],
  				   [0, 0, 1, 0, 0]];

const EIGHT_SHAPE = [[0, 1, 1, 1, 0],
  				   [1, 0, 0, 0, 1],
  				   [1, 0, 0, 0, 1],
  				   [0, 1, 1, 1, 0],
  				   [1, 0, 0, 0, 1],
  				   [1, 0, 0, 0, 1],
  				   [0, 1, 1, 1, 0]];

const NINE_SHAPE = [[0, 1, 1, 1, 0],
  				   [1, 0, 0, 0, 1],
  				   [1, 0, 0, 0, 1],
  				   [0, 1, 1, 1, 0],
  				   [0, 0, 0, 0, 1],
  				   [0, 0, 0, 0, 1],
  				   [0, 1, 1, 1, 0]];

const COLON_SHAPE = [[0, 0, 0, 0, 0],
  				   [0, 0, 0, 0, 0],
  				   [0, 0, 1, 0, 0],
  				   [0, 0, 0, 0, 0],
  				   [0, 0, 1, 0, 0],
  				   [0, 0, 0, 0, 0],
  				   [0, 0, 0, 0, 0]];

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer'); 
  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  //draw background
  background(0);
  //draw time back to front as a series of rectangles
  //draw hour
  drawNumber(0, getShape(7));
  drawNumber(1, COLON_SHAPE);
  drawNumber(2, getShape(4));	
  drawNumber(3, getShape(1));
  drawNumber(4, COLON_SHAPE);
  drawNumber(5, getShape(0));
  drawSecond(6);
  
}

function getShape(num){
	if(num == 0){
		return ZERO_SHAPE;
	}
	if(num == 1){
		return ONE_SHAPE;
	}
	if(num == 2){
		return TWO_SHAPE;
	}
	if(num == 3){
		return THREE_SHAPE;
	}
	if(num == 4){
		return FOUR_SHAPE;
	}
	if(num == 5){
		return FIVE_SHAPE;
	}
	if(num == 6){
		return SIX_SHAPE;
	}
	if(num == 7){
		return SEVEN_SHAPE;
	}
	if(num == 8){
		return EIGHT_SHAPE;
	}
	if(num == 9){
		return NINE_SHAPE;
	}
}

function drawNumber(start, number){
	var rgb = createVector(255, 0, 0);
	for(j = 0; j < 9; j++){
	  	//draw each row of numbers
	  	stroke(rgb.x-(30*j), rgb.y+(30*j), rgb.z+(20*j));
	  	if(j==8){
	  		stroke(255);
	  	}
	  	noFill();
	  	var startPos = createVector(500-(j*20)+(start*55), 20+(j*15)+(start*15));
		
		var firstCorner = createVector(startPos.x, startPos.y);
		var secondCorner = createVector(startPos.x+10, startPos.y+3);
		var thirdCorner = createVector(startPos.x+10, startPos.y+13);
		var fourthCorner = createVector(startPos.x, startPos.y+10);
		
	  	for(r = 0; r<5; r++){
	  		for(c = 0; c<7; c++){
		  		if(number[c][r]==1){
		  			quad(firstCorner.x+(r*10), firstCorner.y+(c*10), secondCorner.x+(r*10), secondCorner.y+(c*10),
					thirdCorner.x+(r*10), thirdCorner.y+(c*10), fourthCorner.x+(r*10), fourthCorner.y+(c*10));
		  		}
		  	}	
		  	firstCorner.y+=3;
		  	secondCorner.y+=3;
		  	thirdCorner.y+=3;
		  	fourthCorner.y+=3;
	  	}
	}
}

function drawSecond(start){
	var rgb = createVector(255, 0, 0);
	for(j = 0; j < 9; j++){
		var number = getShape(j);
	  	//draw each row of numbers
	  	stroke(rgb.x-(30*j), rgb.y+(30*j), rgb.z+(20*j));
	  	if(j==8){
	  		stroke(255);
	  	}
	  	noFill();
	  	var startPos = createVector(500-(j*20)+(start*55), 20+(j*15)+(start*15));
		
		var firstCorner = createVector(startPos.x, startPos.y);
		var secondCorner = createVector(startPos.x+10, startPos.y+3);
		var thirdCorner = createVector(startPos.x+10, startPos.y+13);
		var fourthCorner = createVector(startPos.x, startPos.y+10);
		
	  	for(r = 0; r<5; r++){
	  		for(c = 0; c<7; c++){
		  		if(number[c][r]==1){
		  			quad(firstCorner.x+(r*10), firstCorner.y+(c*10), secondCorner.x+(r*10), secondCorner.y+(c*10),
					thirdCorner.x+(r*10), thirdCorner.y+(c*10), fourthCorner.x+(r*10), fourthCorner.y+(c*10));
		  		}
		  	}	
		  	firstCorner.y+=3;
		  	secondCorner.y+=3;
		  	thirdCorner.y+=3;
		  	fourthCorner.y+=3;
	  	}
	}
}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}





