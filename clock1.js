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

//Time modifiers
let minute = 34; //the current minute
let hour = 1; //the current hour

//range modifier [minutes]
let minUR = (minute / 60); //upper range modifier for the maximum limit
let minLR = (minute / -1); //lower range modifier for the minimum limit

let mnuMod = minUR / 60; //the rate at which the minute Upper limit is increased
let mnlMod = minLR / 60; //the rate at which the minute lower limit is increased

//range modifier [hours]
let hourUR = (hour / 12); //the upper range modifier

let hrMod = 0.0333; //the constant for lower rate
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
function draw () {
  background(0); // black background
  strokeWeight(2); // Stroke weight to 8 pixels
  //rect(0, 600, 960, -600);
  dRow();
}

function nGen(){
	//increases the rate or chances of the actual time appearing by decreasing the range of the random numbers
	hrRate++;
	minRate++;

	//determines the value of the random number via the range
	if(hFlip == true){r = random(0+(hrMod*hrRate), 13*(hruMd*hrRate));}
	else{r = random(-1*(mnlMod*minRate), 60*(mnuMod*minRate));};
	Math.floor(r); //rounds the float to the nearest int

	//getting the two values of the current time in order to 
	fVal = Math.floor(r/10);
	if(!(fVal < 1)){sVal = r - fVal*10}
	else{sVal = r};
}

function rNum(sX, sY, W, H){ //generates a random number within an hour and filles the 'frame' amd fills it
	numCheck(); //checks the rate
	nGen(); //creates the random number to be generated based on the range of hours and minutes

	//determines if the random number is the current time and changes the color
	if(hFlip == true){
		if(r == hour){background(255,0,0);console.log("hour");}
		else{background(0);};
	}
	else{
		if(r == minute){background(255, 0, 0); console.log("minutes");}
		else{background(0)};
	}

	hFlip = !hFlip; //flips the hFlip value		
}

//generates a random value of time (rNum) and draws it
function dRow() {
	y = 0;
	while(y < CANVAS_HEIGHT){
		x = 0;
		while(x < CANVAS_WIDTH){
			rNum(x, y, fX, fY);
			x = x+fX;
		}
		y = y + fY;
	}
}

numCheck = function(){
	if(minRate == 60){minRate = 0;};
	if(hrRate == 30){hrRate = 0;};
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