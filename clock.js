//FIELDS AND VARIABLES THE REQUIRE BEING PRE-DEFINED

//Canvas Size via Height and Width
const CANVAS_WIDTH = 950;
const CANVAS_HEIGHT = 500;

//constant width and height of the rectangles
const lBH = 10;
const lBW = 10;

//random hour and minute value calculator fields
let r = Math.random(0,1); //the random minute and hour value

//the minimum x and y values that will be constantly changing
x = 0; //defining x-axis value
let y = 0; //defining y-axis value

let fX = (CANVAS_WIDTH / 10); //the width of each number frame
let fY = (fX * 1.33); //the height of each frame based on the ratio of width

let cX = 0; //the constantly changing Y

//Time modifiers
let minute = 0; //the current minute
let hour = 0; //the current hour
let sec = 0;
let sSec = 0;

//the alarm variables
tAlarm = 0; 

//The two values of minutes/hours in order to draw both digits correctly
let fVal = 0;
let sVal = 0;
let tVal = 0;
let fthVal = 0;

//Array
var fArray = [];
var have_setup = false;

function my_setup () {
  // create the drawing canvas, save the canvas element
  // let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  // main_canvas.parent('canvasContainer');
  
  console.log(fArray);
  for(z = 0; z < 40; z++){
  	fArray[z]=(Math.floor(random(0,10)));
  }
  console.log(fArray);
}

function draw_clock(obj) {
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
    //canvas sizes

  if (have_setup === false) {
  	my_setup();
  	have_setup = true;
  }
  hour = obj.hours;
  minute = obj.minutes;
  sec = obj.seconds;
  tAlarm = obj.seconds_until_alarm;
  sSec = sec;
  //defines background and stroke
  background(50,40,80); // black background
  stroke(0);
  cGen(); //starts the functions to draw the clock
  
}

function cTime(){ //defines the current time
	//getting the two values of the current hour in order to draw them correctly
	fVal = Math.floor(hour/10);
	if(!(fVal < 1)){sVal = hour - fVal*10}
	else{sVal = hour; fVal = 0;};

	//getting the two values of the current mintue in order to draw them correctly
	tVal = Math.floor(minute/10);
	if(!(tVal < 1)){fthVal = minute - tVal*10}
	else{fthVal = minute; tVal = 0;};
}

//Generates random value, r, and splits it into the first and second values
function cGen(){	
	cTime();

	if(tAlarm == 0){fill(255,66,66);}
	else{fill(85,90,120);};
	nGen();	

	fill(255);
	aDraw(fVal, CANVAS_WIDTH/2 - fX*2, CANVAS_HEIGHT/2 + fY*0.25, 100, 100);
	aDraw(sVal, CANVAS_WIDTH/2 - fX, CANVAS_HEIGHT/2 + fY*0.25, 100, 100);
	aDraw(tVal, CANVAS_WIDTH/2, CANVAS_HEIGHT/2 + fY*0.25, 100,100);
	aDraw(fthVal, CANVAS_WIDTH/2 + fX, CANVAS_HEIGHT/2 + fY*0.25, 100, 100);	
}

function nGen(){
	cY = map(sec, 0, 59, 0-fY, CANVAS_HEIGHT+fY, false);
	for(z = 0; z < 40; z++){
		aDraw(fArray[z], 50*z, cY, fX, fY);
	}
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


