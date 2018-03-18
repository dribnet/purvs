//canvas sizes
const CANVAS_WIDTH = 1440;
const CANVAS_HEIGHT = 900;

//constant width and height of the rectangles
const lBH = 10;
const lBW = 10;

//random hour and minute value calculator fields
let hFlip = true;
let r = random(0,1);

//the minimum x and y values that will be constantly changing
let x = 0;
let y = 0;
let fX = (CANVAS_WIDTH / 10);
let fY = (fX * 1.33);

//range modifier

//Time modifiers

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

//Draws the function(s)
function draw () {
  background(0); // black background
  strokeWeight(2); // Stroke weight to 8 pixels
  //rect(0, 600, 960, -600);
  dRow();
}

function dRow() {
	 while(x < CANVAS_WIDTH){
	 	r = random(-1. 60);
	 	Math.round(r);

	 }
}

//generates a random values and draws it
let dRow = function(){
	let x = 0;
	while(x < CANVAS_WIDTH){
		rNum(x, y, 100, 100);
	}
}

let rNum = function(sX, sY, W, H){ //generates a random number within an hour and filles the 'frame' amd fills it
	if(hFlip == true){r = random(0, 13);}
	else{r = random(-1, 60);}
	hFlip = !hFlip;
	console.log(r);
}

let one = function(sX, sY, W, H){
	rect((sX + W/2), (sY - lBH), lBW, -H+(lBH*2));
}

let two = function(sX, sY, W, H){
	//horizontal
	rect((sX + lBW*1.8), (sY - lBH-(lBH * 0.5)), W-(lBW*4), lBH); //bottom width
	rect((sX + lBW*1.8), (sY - (H/2)-lBH*0.5), W-(lBW*4), lBH); //middle width
	rect((sX + lBW*1.8), (sY - H)+lBH/2, W-(lBW*4), lBH); //top width
	//vertical
	rect(sX+(0.5*lBW), sY-lBH, lBW, -(H/2-lBH)+3); //bottom height
	rect((sX + (W-lBW*1.75)), sY-H/2, lBW, -(H/2-lBH)+3); //upper height
}

let three = function(sX, sY, W, H){
	//horizontal
	rect((sX + lBW), (sY - lBH-(lBH * 0.5)), W-(lBW*3.5), lBH); //bottom width
	rect((sX + lBW), (sY - (H/2)-lBH*0.5), W-(lBW*3.5), lBH); //middle width
	rect((sX + lBW), (sY - H)+lBH/2, W-(lBW*3.5), lBH); //top width
	//vertical
	rect((sX + (W-lBW*2)), sY-lBH, lBW, -(H/2-lBH)+3); //bottom height
	rect((sX + (W-lBW*2)), sY-H/2, lBW, -(H/2-lBH)+3); //upper height
}

let four = function(sX, sY, W, H){
	//horizontal
	rect(sX+lBW*2, sY-(H/2), W-(lBW*4), lBH);
	//vertical
	rect(sX+lBW, (sY-H)+lBH, lBW, W/2-lBH);//left
	rect(sX+(W-(lBW*2)), (sY-H)+lBH, lBW, H/2-lBH); //top right
	rect(sX+(W-(lBW*2)), sY, lBW, -H/2+lBH); //bottom right
}

let five = function(sX, sY, W, H){
	rect((sX + W/2), (sY - lBH), lBW, -H+(lBH*2));
}

let six = function(sX, sY, W, H){
	rect((sX + W/2), (sY - lBH), lBW, -H+(lBH*2));
}

let seven = function(sX, sY, W, H){
	rect((sX + W/2), (sY - lBH), lBW, -H+(lBH*2));
}

let eight = function(sX, sY, W, H){
	rect((sX + W/2), (sY - lBH), lBW, -H+(lBH*2));
}

let nine = function(sX, sY, W, H){
	rect((sX + W/2), (sY - lBH), lBW, -H+(lBH*2));
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
