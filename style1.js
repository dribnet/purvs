let main_canvas = null;

let line1_Xstart = null;
let line1_Ystart = null;
let line1_Xdir = null;
let line1_Ydir = null;
let line2_Xstart = null;
let line2_Ystart = null;
let line2_Xdir = null;
let line2_Ydir = null;
let line3_Xstart = null;
let line3_Ystart = null;
let line3_Xdir = null;
let line3_Ydir = null;

let col = 0;
let	r = 255;
let	g = 0;
let	b = 0;

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
col = 0;
r = 255;
g = 0;
b = 0;
posVectorS = createVector(x1,y1); //start position vector
posVectorD = createVector(x2,y2);
//calculates directional vector going from positionS to positionD
directionVector = p5.Vector.sub(posVectorD, posVectorS); 
//normalize vector - obtains unit directional vector
directionVector.normalize();
DrawFromVectors(directionVector, posVectorS);
}

function DrawFromVectors(directionVector, posVectorS) {
	for (i = 0; i < 100; i++) {
		movementVector = p5.Vector.mult(directionVector,(2*i));
		posVectorN  = p5.Vector.add(posVectorS, movementVector); 
		xCompon = posVectorN.x;
		yCompon = posVectorN.y;
		drawFromComponents(xCompon, yCompon);
	}
}

function drawFromComponents(xCompon, yCompon) {
	if(col == 0){ 
		g = g + 10;
       if(g >= 255) {
           col = 1;
       }
   }
	if(col == 1){ 
		r = r - 10;
		if(r <= 0) {
			col = 2;
		}
	}
	if(col == 2){ 
		b = b + 10;
		if(b >= 255) {
			col = 3;
		}
	}
	if(col == 3){ 
		g = g - 10;
		if(g <= 0) {
			col = 4;
		}
	}
	if(col == 4){ 
		r = r + 10;
		if(r >= 255) {
			col = 5;
		}
	}
	if(col == 5){ 
		b = b - 10;
		if(b <= 0) {
			col = 0;
		}
	}
	fill (r, g, b); 
	ellipse(xCompon + (canvasWidth/2), yCompon + (canvasHeight/2), 30,30);
}


function drawFromSliders(xstart, ystart, xdir, ydir) {
	xs = xstart.value();
	ys = ystart.value();
	xd = xdir.value();
	yd = ydir.value();
	calculateVectors(xs,ys,xd,yd);
}

function draw () {
	background(colorBack);
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
