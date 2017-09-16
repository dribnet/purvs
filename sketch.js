//default values for MODE and lastChange time
var MODE = 'auto', lastChange = 0, changeFrequency = 10;
//random variables variables
var startX = 0, startY = 0, fromColour, toColour;
//control options
var shapeOptions = ['rect', 'ellipse', 'equilateral', 'hexa', 'octa'], rotationOptions = [3,4,6,8,12];

var selector1, selector2, slider1, radio, resetButton;

var bigHex = [
				[200, 200], [280, 200], [280, 280], [200, 280], 
				[120, 120], [200, 120], [280, 120], [360, 120], 
				[360, 200], [360, 280], [360, 360], [280, 360], 
				[200, 360], [120, 360], [120, 280], [120, 200], 
				[200, 40], [280,40], [440, 200], [440, 280], 
				[280,440], [200,440], [40, 280], [40, 200]
			];
			


function setup () {
    //set up the canvas
    var main_canvas = createCanvas(960, 500);
    main_canvas.parent('canvas-container');

    selector2 = createSelect();
    selector2.option('auto');
    selector2.option('manual');
    selector2.value('auto');
    selector2.parent('mode-selector-holder');
    selector2.changed(changeMode);

    resetButton = createButton('reset');
    resetButton.mousePressed(resetDrawing);
    resetButton.parent('button-holder');

    resetButton = createButton('stop');
    resetButton.mousePressed(stopDrawing);
    resetButton.parent('button-holder');

    // set up the interactive controls
    selector1 = createSelect();
    for(var i=0; i < shapeOptions.length; i++){
        selector1.option(shapeOptions[i]);
    }
    selector1.value(random(shapeOptions));
    selector1.parent('shape-selector-holder');

    slider1 = createSlider(5, 20, 10);
    slider1.parent("slider-1-holder");

    radio1 = createRadio();
    for(var i=0; i < rotationOptions.length; i++){
        radio1.option(rotationOptions[i]);
    }
    radio1.value(random(rotationOptions));
    radio1.parent("radio-1-holder");


	
    //set up some of the global options for p5.js
    background(0);
    noFill();
    strokeWeight(0.2);
    rectMode(CENTER);
    colorMode(HSB);
    frameRate(60);
	noLoop();

    randomizeGlobalValues();
}



function draw () {
    //if the mode is auto the pattern will change every 10 seconds
    if(MODE === 'auto' && millis() > (lastChange + (changeFrequency * 1000))){
        lastChange = millis();
        changeFrequency = random(5, 10);
        randomizeGlobalValues();
    }
    drawPattern();
}

function mousePressed() {
    if (mouseButton == LEFT && mouseY <= 500 && mouseX <= 960){
        lastChange = millis();
        randomizeGlobalValues(mouseX, mouseY);
    }
}

function drawPattern(){
	translate(-480, -310);
    var x = 0;
    var lerpAmount = 0;
    var shape = selector1.value();
    var shapeSize =  slider1.value();
    var numOfRotations = radio1.value();

	for(var a = 0; a < 9; a++){		
		for (var pos = 0; pos < bigHex.length; pos++) {
			translate(bigHex[pos][0], bigHex[pos][1]);
			numOfRotations = random(rotationOptions);
			shape = random(shapeOptions);
			randomizeGlobalValues();
			var lerpAmount = 0;
			var colour = lerpColor(fromColour, toColour, lerpAmount);
			for (var i = 0; i < (numOfRotations * 2); i ++) {
				for (var j = 0; j <=5; j++) {
					stroke(colour, 255 - (8*j));
					//call the function as detemined by the variable shape
					//rect and ellipse are built in p5.js
					//tri,hexa & octa are defined in this file
					window[shape](0, 20, 20 + (j*3), 20 + (j*3));
				}
				rotate(PI/numOfRotations);
				lerpAmount = lerpAmount + (1/numOfRotations/2);
				colour = lerpColor(fromColour, toColour, lerpAmount);
			}
			translate(-bigHex[pos][0], -bigHex[pos][1]);
		}
		translate(480, 0);
		if(a == 2 || a == 5){
			translate(-1200, 320);
		}
	}
	lerpAmount = lerpAmount + (1/2);
	colour = lerpColor(fromColour, toColour, lerpAmount);
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

function randomizeGlobalValues(setX = false, setY = false){
    if(MODE === 'auto'){
        selector1.value(random(shapeOptions));
        slider1.value(random(5, 20));
        radio1.value(random(rotationOptions));
    }

    var hueRanges = {
        1 : [-30, 30, 0],
        2 : [31, 90, 60],
        3 : [91, 150, 120],
        4 : [151, 210, 180],
        5 : [211, 270, 240],
        6 : [271, 330, 300]
    }

    //set the from and to colours
    var randomPointer1 = floor(random(1, 7));
    var h = focusedRandom(hueRanges[randomPointer1][0], hueRanges[randomPointer1][1], 10, hueRanges[randomPointer1][2]);
    fromColour = color(h, 100, 100);
    var randomPointer2 = randomPointer1 +3;
    if(randomPointer2 > 6){
        randomPointer2 = randomPointer2 - 6;
    }
    h = focusedRandom(hueRanges[randomPointer2][0], hueRanges[randomPointer2][1], 10, hueRanges[randomPointer2][2]);
    toColour = color(h, 100, 100);

    //set the start position of next pattern
    startX = random(0, width);
    if(setX){
        startX = setX;
    }
    startY = random(0, height);
    if(setY){
        startY = setY;
    }
}


function resetDrawing(){
    translate(-startX, -startY);
    clear();
    background(0);
    randomizeGlobalValues();
    loop();
}

function stopDrawing(){
    noLoop();
}

function changeMode(){
    MODE = selector2.value();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
