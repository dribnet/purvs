//globle variables
var startX = 0, startY = 0, radio, shapeOptions = ['rect', 'ellipse', 'equilateral', 'hexa', 'octa'], h, s, b;

function setup () {
	//set up the canvas
	var main_canvas = createCanvas(960, 500);
	main_canvas.parent('canvas-container');

	// create radio button optionset for shape selection
	radio = createRadio();
	for(var i=0; i < shapeOptions.length; i++){
		radio.option(shapeOptions[i]);
	}
	radio.value(random(shapeOptions));
	radio.parent('shape-selector-holder');
	radio.changed(randomizeGlobalValues);
	
	//set up some of the global options for p5.js
	background(0);
	noFill();
	rectMode(CENTER);
	colorMode(HSB);
	frameRate(5);
	
	randomizeGlobalValues();
}

var hueRanges = {
        1 : [-20, 20, 0],
        2 : [21, 60, 40],
        3 : [61, 100, 80],
        4 : [101, 140, 120],
        5 : [141, 180, 160],
        6 : [181, 220, 200],
        7 : [221, 260, 240],
        8 : [261, 300, 280],
        9 : [301, 340, 320]
    }
	
function draw () {
	var to = color('#EF4623');
	var to = color('#f5ec25');
	var from = color('#1878B3');

	strokeWeight(0.02);
	translate(startX, startY);  
	var x = 0;
	var count = 0.05;
	var shape = radio.value();
	while(x < width){
		var colour = lerpColor(from, to, count);
		for (var i = 0; i < 16; i ++) {
			for (var j = -2; j <=2; j++) {
				stroke(colour, random(15, 127));
				stroke(h,s,b, 127 - (j * 16));
				var rand = random(0,100);
				if(rand < 0){
					stroke(random(255), random(255), random(255), random(15, 127));
				}
				//call the function as detemined by the variable shape
				//rect and ellipse are built in p5.js
				//tri,hexa & octa are defined in this file
				window[shape](x, 20, 10 + (j*2), 10 + (j*2));
				//window[shape](x, 20, 10 + j, (1 * x) + j);
			}
			rotate(PI/8);
		}
		x = x + width/24;
		count = count + 0.05;
	}
}

function mousePressed() {
	if (mouseButton == LEFT){
		radio.value(random(shapeOptions));
		randomizeGlobalValues(mouseX, mouseY);
	}
}

//set the values for startX and startY which determines where the pattern will begin drawing
function randomizeGlobalValues(setX = false, setY = false){
	var randomPointer = floor(random(1, 10));
	h = focusedRandom(hueRanges[randomPointer][0], hueRanges[randomPointer][1], 10, hueRanges[randomPointer][2]);
	s = random(50, 100);
	b = random(50, 100);
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


