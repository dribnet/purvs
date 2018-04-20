let main_canvas = null;

const ballCol   = "#FF7F66";
const speed = 1.2;
let countingUp = 1; 
let counter = 0;
let r = 0;
let g = 0;
let b = 0;
let ballSpeed = 6;

const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
	"A":
	{
		"box1": {
			"startX": 76,
			"startY": -120
		},
		"box2": {
			"dirX": 0,
			"dirY": 0
		},
		"box3": {
			"startX": 83,
			"startY": -117
		},
		"box4": {
			"dirX": 111,
			"dirY": 14
		},
		"box5": {
			"startX": -53,
			"startY": -36
		},
		"box6": {
			"dirX": 41,
			"dirY": -8
		}
	},
	"B":
	{
		"box1": {
			"startX": 76,
			"startY": -120
		},
		"box2": {
			"dirX": 0,
			"dirY": 0
		},
		"box3": {
			"startX": 83,
			"startY": -117
		},
		"box4": {
			"dirX": 111,
			"dirY": 14
		},
		"box5": {
			"startX": -53,
			"startY": -36
		},
		"box6": {
			"dirX": 41,
			"dirY": -8
		}
	},
	"C":
	{
		"box1": {
			"startX": 76,
			"startY": -120
		},
		"box2": {
			"dirX": 0,
			"dirY": 0
		},
		"box3": {
			"startX": 83,
			"startY": -117
		},
		"box4": {
			"dirX": 111,
			"dirY": 14
		},
		"box5": {
			"startX": -53,
			"startY": -36
		},
		"box6": {
			"dirX": 41,
			"dirY": -8
		}
	}
}

function setup () {
// create the drawing canvas, save the canvas element
main_canvas = createCanvas(canvasWidth, canvasHeight);

// rotation in degrees (more slider friendly)
angleMode(DEGREES);

// create two sliders
line1_Xstart = createSlider(-200, 200, 0);
line1_Ystart = createSlider(-200, 200, 0);
line1_Xdir = createSlider(-180, 180, 0);
line1_Ydir = createSlider(-180, 180, 0);
line2_Xstart = createSlider(-200, 200, 0);
line2_Ystart = createSlider(-200, 200, 0);
line2_Xdir = createSlider(-180, 180, 0);
line2_Ydir = createSlider(-180, 180, 0);
line3_Xstart = createSlider(-200, 200, 0);
line3_Ystart = createSlider(-200, 200, 0);
line3_Xdir = createSlider(-180, 180, 0);
line3_Ydir = createSlider(-180, 180, 0);

sel = createSelect();
sel.option('A');
sel.option('B');
sel.option('C');
sel.changed(letterChangedEvent);

button = createButton('show data');
button.mousePressed(buttonPressedEvent);

// position each element on the page
main_canvas.parent('canvasContainer');
line1_Xstart.parent('slider1Container');
line1_Ystart.parent('slider2Container');
line1_Xdir.parent('slider3Container');
line1_Ydir.parent('slider4Container');
line2_Xstart.parent('slider5Container');
line2_Ystart.parent('slider6Container');
line2_Xdir.parent('slider7Container');
line2_Ydir.parent('slider8Container');
line3_Xstart.parent('slider9Container');
line3_Ystart.parent('slider10Container');
line3_Xdir.parent('slider11Container');
line3_Ydir.parent('slider12Container');

sel.parent(selectorContainer);
button.parent(buttonContainer);
}

function sliderToDataObject() {
	let obj = {};
	obj["box1"] = {};
	obj["box1"]["startX"] = line1_Xstart.value();
	obj["box1"]["startY"] = line1_Ystart.value();
	obj["box2"] = {};
	obj["box2"]["dirX"] = line1_Xdir.value();
	obj["box2"]["dirY"] = line1_Ydir.value();
	obj["box3"] = {};
	obj["box3"]["startX"] = line2_Xstart.value();
	obj["box3"]["startY"] = line2_Ystart.value();
	obj["box4"] = {};
	obj["box4"]["dirX"] = line2_Xdir.value();
	obj["box4"]["dirY"] = line2_Ydir.value();
	obj["box5"] = {};
	obj["box5"]["startX"] = line3_Xstart.value();
	obj["box5"]["startY"] = line3_Ystart.value();
	obj["box6"] = {};
	obj["box6"]["dirX"] = line3_Xdir.value();
	obj["box6"]["dirY"] = line3_Ydir.value();
	return obj;
}

function dataObjectToSliders(obj) {
	line1_Xstart.value(obj["box1"]["startX"]);
	line1_Ystart.value(obj["box1"]["startY"]);
	line1_Xdir.value(obj["box2"]["dirX"]);
	line1_Ydir.value(obj["box2"]["dirY"]);
	line2_Xstart.value(obj["box3"]["startX"]);
	line2_Ystart.value(obj["box3"]["startY"]);
	line2_Xdir.value(obj["box4"]["dirX"]);
	line2_Ydir.value(obj["box4"]["dirY"]);
	line3_Xstart.value(obj["box5"]["startX"]);
	line3_Ystart.value(obj["box5"]["startY"]);
	line3_Xdir.value(obj["box6"]["dirX"]);
	line3_Ydir.value(obj["box6"]["dirY"]);
}




function letterChangedEvent() {
	let item = sel.value();
	dataObjectToSliders(savedValues[item]);
}

function buttonPressedEvent() {
	let obj = sliderToDataObject();
	json = JSON.stringify(obj, null, 2);
	alert(json);
}

//colour of the letters
const colorFront = [207, 222, 227];
//colour of the background
const colorBack = [29, 42, 46];


function calculateVectors(x1,y1,x2,y2) {
  //reset colour values
  r = 33;
  g = 133;
  b = 196;
  //start position vector
  posVectorS = createVector(x1,y1); 
  //the vector that sets the direction that the 'line' goes in
  posVectorD = createVector(x2,y2);
  //calculates directional vector going from positionS to positionD
  directionVector = p5.Vector.sub(posVectorD, posVectorS); 
  //normalize vector - obtains unit directional vector
  directionVector.normalize();
  DrawFromVectors(directionVector, posVectorS);
  DrawBall(directionVector, posVectorS);
}

function DrawFromVectors(directionVector, posVectorS) {
  for (i = 0; i < 100; i++) {
    //create a vector for the movement we will take (multiplication of i is the length of the line)
    movementVector = p5.Vector.mult(directionVector,(i*speed));
    //add the starting position vector to the movement vector to get it the right place
    posVectorN  = p5.Vector.add(posVectorS, movementVector); 
    //get the x & y components
    xCompon = posVectorN.x;
    yCompon = posVectorN.y;
    drawFromComponents(xCompon+500, yCompon+200);
  }
}

function DrawBall(directionVector, posVectorS, xpos, ypos) {

	//find out which direction the ball is going in, & switch it round if we're at the end of the line.
	if (countingUp == 1 ) {
		counter++;
	}
	else {
		counter--
	}
	if (counter >= (100*ballSpeed)) {
		countingUp = 0;
	}
	else if (counter < 0) {
		countingUp = 1;
	}

	fill('#FF7F66');
	xStart = posVectorS.x;
	yStart = posVectorS.y;
	xPos = directionVector.x*counter*speed/ballSpeed;
	yPos = directionVector.y*counter*speed/ballSpeed;
	xPosDraw = xStart + xPos;
	yPosDraw = yStart + yPos;
	posVectorCurrent = createVector(xPosDraw,yPosDraw);
	//draw the ball
	ellipse(xPosDraw+500, yPosDraw+200, 5,5);
}

function drawFromComponents(xCompon, yCompon) {
r++;
g++;
b++; 

fill (r, g, b); 
//draw the circle!
ellipse(xCompon, yCompon, 3,3);
}


function drawFromSliders(xstart, ystart, xdir, ydir) {
	xs = xstart.value();
	ys = ystart.value();
	xd = xdir.value();
	yd = ydir.value();
	calculateVectors(xs,ys,xd,yd);
}

function draw () {
	background(50);
	fill(0) 
	rect(500,200,100,200);
	fill(colorFront);
	strokeWeight(0.5);
	stroke('#222222');
	drawFromSliders(line1_Xstart, line1_Ystart, line1_Xdir, line1_Ydir);
	drawFromSliders(line2_Xstart, line2_Ystart, line2_Xdir, line2_Ydir);
	drawFromSliders(line3_Xstart, line3_Ystart, line3_Xdir, line3_Ydir);
}

function keyTyped() {
	if (key == '!') {
		saveBlocksImages();
	}
	else if (key == '@') {
		saveBlocksImages(true);
	}
}
