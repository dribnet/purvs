//canvas sizes
const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 600;

//constant width and height of the rectangles
const lBH = 10;
const lBW = 10;

//random hour and minute value calculator fields
let hFlip = true; //decides between hour or minutes are generated
let r = Math.random(0,1); //the random minute and hour value

//the minimum x and y values that will be constantly changing
x = 0; //defining x-axis value
let y = 0; //defining y-axis value

let fX = (CANVAS_WIDTH / 12); //the width of each number frame
let fY = (fX * 1.33); //the height of each frame based on the ratio of width

let cY = 0; //the constantly changing Y

//Time modifiers
let minute = 30; //the current minute
let hour = 6; //the current hour

//range modifier [minutes]
let minUR = (minute / 60); //upper range modifier for the maximum limit
let minLR = (minute / -1); //lower range modifier for the minimum limit

let mnuMod = minUR / 60; //the rate at which the minute Upper limit is increased
let mnlMod = minLR / 60; //the rate at which the minute lower limit is increased

//range modifier [hours]
let hourLR = (hour / 12); //the lower range modifier
let hourUR = (hour / 12); //the upper range modifier

let hrMod = hourLR / 30; //lower rate
let hruMd = hourUR / 30; //rate for upper

//The two values of minutes/hours
let fVal = 0;
let sVal = 0;

//range rage modifier
let minRate = 0; //increase to 60 to decrease range
let hrRate = 0; //limit of 30 to decrease range

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  // you can optionally add your own code here if you also have setup code
}

//Draws the function(s)
function draw(){
  background(0); // black background
  //let minute = obj.minutes;
  //let hour = obj.hours;
  //dRow();
  stroke(0);
  /*zero(0,100,100,100);
  one(100,100,100,100);
  two(200, 100,100,100);
  three(300, 100, 100, 100);
  four(400, 100, 100, 100);
  five(500, 100, 100, 100);
  seven(700, 100, 100, 100);
  nine(600, 100, 100, 100);*/
  dRow();
}


//generates a random value of time (rNum) and draws it
function dRow() {
	y = 0;
	while(y < CANVAS_HEIGHT){
		x = 0;
		while(x < CANVAS_WIDTH){
			rNum();
			x = x+fX;
		}
		y = y + fY;
	}
}

//Generates random value, r, and splits it into the first and second values
function nGen(){
	//increases the rate or chances of the actual time appearing by decreasing the range of the random numbers
	hrRate++;
	minRate++;

	//determines the value of the random number via the range
	if(hFlip == true){r = random(0+(hrMod*hrRate), 13*(hruMd*hrRate));}
	else{r = random(-1+(mnlMod*minRate), 60-(mnuMod*minRate));};
	r = Math.floor(r); //rounds the float to the nearest int
	console.log(r);

	//getting the two values of the current time in order to draw them correctly
	fVal = Math.floor(r/10);
	if(!(fVal < 1)){sVal = r - fVal*10}
	else{sVal = r};
}

//checks rate and numbers 
numCheck = function(){
	if(minRate == 61){minRate = 0;};
	if(hrRate == 31){hrRate = 0;};
}

function rNum(){ //generates a random number within an hour
	numCheck(); //checks the rate
	nGen(); //creates the random number to be generated based on the range of hours and minutes

	//determines if the random number is the current time and changes the color
	if(hFlip == true){
		if(r == hour){fill(255,0,0);}
		else{fill(255);};
	}
	else{
		if(r == minute){fill(255,0,0)}
		else{fill(255);};
	}
	dDraw();
	hFlip = !hFlip; //flips the hFlip value		
}

function aDraw(v, sX, sY, W, H){ //actually draws the values
	if(v == 0){
		zero(sX, sY, W, H);
	}
	else if(v == 1){
		one(sX, sY, W, H);
	}
	else if(v == 2){
		two(sX, sY, W, H);
	}
	else if(v == 3){
		three(sX, sY, W, H);
	}
	else if(v == 4){
		four(sX, sY, W, H);
	}
	else if(v == 5){
		five(sX, sY, W, H);			
	}
	else if(v == 6){
		six(sX, sY, W, H);
	}
	else if(v == 7){
		seven(sX, sY, W, H);
	}
	else if(v == 8){
		eight(sX, sY, W, H);
	}
	else if(v == 9){
		nine(sX, sY, W, H);
	};
}

function rDraw(val, sX, sY, W, H){
	if(val == true){
		aDraw(sX, sY, W/2, H);
		aDraw(sX+(W/2), sY, W/2, H);
	}
	else{
		aDraw(sX, sY, W, H);
	}
}

function dDraw(){ //determines the draw and whether or not the frame is split
	cY = map(minRate, 0-fY, CANVAS_HEIGHT+fY, 0, 100, false);
	if(fVal > 1){ //the value is larger than 10 so the frame is split
		rDraw(true, x, cY, fX, fY);
	}
	else{ //the value is smaller so full frame
		rDraw(false, x, y, fX, fY);
	};
}

let zero = function(sX, sY, W, H){
	//horizontal
	rect((sX + W*0.3), (sY - lBH*2), W*0.5, lBH)
	rect((sX + W*0.3), sY - (H-lBH), W*0.5, lBH)
	//vertical
	rect((sX + W*0.8), (sY - lBH*2), lBW, -H+(lBH*4));
	rect((sX + (W * 0.2)), (sY - lBH*2), lBW, -H+(lBH*4));
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
	//horizontal
	rect((sX + W*0.3), (sY - lBH*2), W*0.5, lBH);
	rect((sX + W*0.3), sY - (H*0.5) - lBH*0.5, W*0.5, lBH);
	rect((sX + W*0.3), sY - (H-lBH), W*0.5, lBH);
	//vertical
	rect((sX + W*0.8), (sY - lBH*2), lBW, -H+(lBH*7.5));
	rect((sX + W*0.3)-lBH, (sY - (H*0.5 + lBH*0.5)), lBW, -H+(lBH*7.5));
}

let six = function(sX, sY, W, H){
	//horizontal
	rect((sX + W*0.3), (sY - lBH*2), W*0.5, lBH);
	rect((sX + W*0.3), sY - (H*0.5) - lBH*0.5, W*0.5, lBH);
	rect((sX + W*0.3), sY - (H-lBH), W*0.5, lBH);
	//vertical
	rect((sX + W*0.8), (sY - lBH*2), lBW, -H+(lBH*7.5));
	rect((sX + W*0.3)-lBH, (sY - lBH*2), lBW, -H+(lBH*7.5));
	rect((sX + W*0.3)-lBH, (sY - (H*0.5 + lBH*0.5)), lBW, -H+(lBH*7.5));
}

let seven = function(sX, sY, W, H){
	//horizontal
	rect((sX + W*0.3), sY - (H-lBH), W*0.5, lBH)
	//vertical
	rect((sX + W*0.8), (sY - lBH), lBW, -H+(lBH*3));
}

let eight = function(sX, sY, W, H){
	//horizontal
	rect((sX + W*0.3), (sY - lBH*2), W*0.5, lBH);
	rect((sX + W*0.3), sY - (H*0.5) - lBH*0.5, W*0.5, lBH);
	rect((sX + W*0.3), sY - (H-lBH), W*0.5, lBH);
	//vertical
	rect((sX + W*0.8), (sY - lBH*2), lBW, -H+(lBH*7.5));
	rect((sX + W*0.8), (sY - (H*0.5 + lBH*0.5)), lBW, -H+(lBH*7.5));
	rect((sX + W*0.3)-lBH, (sY - lBH*2), lBW, -H+(lBH*7.5));
	rect((sX + W*0.3)-lBH, (sY - (H*0.5 + lBH*0.5)), lBW, -H+(lBH*7.5));
}

let nine = function(sX, sY, W, H){
	//horizontal
	rect((sX + W*0.3), (sY - lBH*2), W*0.5, lBH);
	rect((sX + W*0.3), sY - (H*0.5) - lBH*0.5, W*0.5, lBH);
	rect((sX + W*0.3), sY - (H-lBH), W*0.5, lBH);
	//vertical
	rect((sX + W*0.8), (sY - lBH*2), lBW, -H+(lBH*7.5));
	rect((sX + W*0.8), (sY - (H*0.5 + lBH*0.5)), lBW, -H+(lBH*7.5));
	rect((sX + W*0.3)-lBH, (sY - (H*0.5 + lBH*0.5)), lBW, -H+(lBH*7.5));
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
