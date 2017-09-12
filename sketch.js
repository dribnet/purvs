//global variables
var startX = 0, startY = 0, selector, shapeOptions = ['rect', 'ellipse', 'equilateral', 'hexa', 'octa'], h, s, b, FROM, TO, slider1, resetButton;

function setup () {
	//set up the canvas
	var main_canvas = createCanvas(960, 500);
	main_canvas.parent('canvas-container');

	// set up the interactive controls
	selector = createSelect();
	for(var i=0; i < shapeOptions.length; i++){
		selector.option(shapeOptions[i]);
	}
	selector.value(random(shapeOptions));
	selector.parent('shape-selector-holder');
	selector.changed(randomizeGlobalValues);
	
	slider1 = createSlider(5, 20, 10);
	slider1.parent("slider-1-holder");
	
	resetButton = createButton('reset');
	resetButton.mousePressed(resetDrawing);
	resetButton.parent('reset-button-holder');
	
	//set up some of the global options for p5.js
	background(0);
	noFill();
	rectMode(CENTER);
	colorMode(HSB);
	frameRate(5);
	
	randomizeGlobalValues();
}


	
function draw () {
	var to = color('#EF4623');
	var to = color('#f5ec25');
	var from = color('#1878B3');

	strokeWeight(0.01);
	translate(startX, startY);  
	var x = 0;
	var count = 0;
	var shape = selector.value();
	var shapeSize =  slider1.value();
	while(x < width){
		var colour = lerpColor(FROM, TO, count);
		for (var i = 0; i < 20; i ++) {
			for (var j = -2; j <=2; j++) {
				stroke(colour, random(15, 127));
				stroke(h,s,b, 127 - (j * 16));
				stroke(colour, 127 - (j * 16));
				var rand = random(0,100);
				if(rand < 0){
					stroke(random(255), random(255), random(255), random(15, 127));
				}
				//call the function as detemined by the variable shape
				//rect and ellipse are built in p5.js
				//tri,hexa & octa are defined in this file
				window[shape](x, 20, shapeSize + (j*3), shapeSize + (j*3));
				//window[shape](x, 20, 10 + j, (1 * x) + j);
			}
			rotate(PI/10);
		}
		x = x + width/6;
		count = count + 0.25;
	}
}

function mousePressed() {
print('sdfdf');
	if (mouseButton == LEFT){
		selector.value(random(shapeOptions));
		randomizeGlobalValues(mouseX, mouseY);
	}
}

function resetDrawing(){
	translate(-startX, -startY); 
	clear();
	background(0);
	randomizeGlobalValues();
}

var hueRanges = {
        1 : [-30, 30, 0],
        2 : [31, 90, 60],
        3 : [91, 150, 120],
        4 : [151, 210, 180],
        5 : [211, 270, 240],
        6 : [271, 330, 300]
    }
	
function randomizeGlobalValues(setX = false, setY = false){
	var randomPointer = floor(random(1, 7));
	h = focusedRandom(hueRanges[randomPointer][0], hueRanges[randomPointer][1], 10, hueRanges[randomPointer][2]);
	s = random(100, 100);
	b = random(100, 100);
	FROM = color(h, s, b);
	randomPointer = randomPointer + 3;
	if(randomPointer > 6){
		randomPointer = randomPointer -6;
	}
	h = focusedRandom(hueRanges[randomPointer][0], hueRanges[randomPointer][1], 10, hueRanges[randomPointer][2]);
	s = random(100, 100);
	b = random(100, 100);
	TO = color(h, s, b);
	startX = random(0, width); 
	if(setX){
		startX = setX;
	}
	startY = random(0, height);
	if(setY){
		startY = setY;
	}
}


/*
 * function to draw an equilateral triangle with a set width
 * based on x, y co-oridinates that are the center of the triangle
 * @param {Number} x        - x-coordinate that is at the center of triangle
 * @param {Number} y      	- y-coordinate that is at the center of triangle
 * @param {Number} width    - radius of the hexagon
 */
function equilateral(x, y, width) {
  var x1 = x - (width/2);
  var y1 = y + (width/2);
  var x2 = x;
  var y2 = y - (width/2);
  var x3 = x + (width/2);
  var y3 = y + (width/2);
  triangle(x1,y1,x2,y2,x3,y3);
}

/*
 * function to draw a hexagon shape
 * adapted from: https://p5js.org/examples/form-regular-polygon.html
 * @param {Number} x        - x-coordinate of the hexagon
 * @param {Number} y      - y-coordinate of the hexagon
 * @param {Number} radius   - radius of the hexagon
 */
function hexa(x, y, radius) {
	radius = radius / 2;
	angleMode(RADIANS);
	var angle = TWO_PI / 6;
	beginShape();
	for (var a = TWO_PI/12; a < TWO_PI + TWO_PI/12; a += angle) {
	var sx = x + cos(a) * radius;
	var sy = y + sin(a) * radius;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}

/*
 * function to draw a octagon shape
 * adapted from: https://p5js.org/examples/form-regular-polygon.html
 * @param {Number} x        - x-coordinate of the octagon
 * @param {Number} y      - y-coordinate of the octagon
 * @param {Number} radius   - radius of the octagon
 */
function octa(x, y, radius) {
	radius = radius / 2;
	angleMode(RADIANS);
	var angle = TWO_PI / 8;
	beginShape();
	for (var a = TWO_PI/16; a < TWO_PI + TWO_PI/16; a += angle) {
	var sx = x + cos(a) * radius;
	var sy = y + sin(a) * radius;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


