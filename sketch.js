var shapeOptions = ['rect', 'ellipse', 'equilateral', 'hexa', 'octa'], rotationOptions = [3,4,6,8,12];

var bigHex = [
				[200, 200], [280, 200], [280, 280], [200, 280], 
				[200, 120], [280, 120], [360, 200], [360, 280],
				[280, 360], [200, 360],  [120, 280], [120, 200], 
				[120, 120],[360, 120],[360, 360],[120, 360],
				[200, 40], [280,40], [440, 200], [440, 280], 
				[280,440], [200,440], [40, 280], [40, 200]
			];

function setup () {
    //set up the canvas
    var main_canvas = createCanvas(960, 500);
    main_canvas.parent('canvas-container');
	
    //set up some of the global options for p5.js
    noLoop();
    colorMode(HSB);
    background(0);
    noFill();
    rectMode(CENTER);
}



function draw () {
    drawPattern();
}

function mousePressed() {
    clear();
    background(0);
    redraw();
}

var hueRanges = [
                    [-20, 20, 0],
                    [21, 60, 40],
                    [61, 100, 80],
                    [101, 140, 120],
                    [141, 180, 160],
                    [181, 220, 200],
                    [221, 260, 240],
                    [261, 300, 280],
                    [301, 340, 320]
                ];

function drawPattern(){
    translate(-480, -310);
    hueRanges = shuffleArray(hueRanges);
	for(var a = 0; a <= 8; a++){		
		var h = focusedRandom(hueRanges[a][0], hueRanges[a][1], 10, hueRanges[a][2]);
		var fromColour = color(h, 100, 100);
		var toPointer = a + 5;
		if(toPointer > 8){
			toPointer = toPointer - 9;
		}
		h = focusedRandom(hueRanges[toPointer][0], hueRanges[toPointer][1], 10, hueRanges[toPointer][2]);
		var toColour = color(h, 100, 100);
		var colour = "";
		strokeWeight(0.3);
		var lerpAmount = 0;
		for (var pos = 0; pos < bigHex.length; pos++) {
			translate(bigHex[pos][0], bigHex[pos][1]);
			numOfRotations = random(rotationOptions);
			shape = random(shapeOptions);
			colour = lerpColor(fromColour, toColour, lerpAmount);
			var lerpStep = 0.3333 / numOfRotations / 2;
			for (var i = 0; i < (numOfRotations * 2); i ++) {
				for (var j = 0; j <=5; j++) {
					stroke(colour, 255 - (8*j));
					//call the function as detemined by the variable shape
					//rect and ellipse are built in p5.js
					//tri,hexa & octa are defined in this file
					window[shape](0, 20, 20 + (j*3), 20 + (j*3));
				}
				rotate(PI/numOfRotations);
				
			}
			if(pos == 3){
				lerpAmount = 0.3333;
				lerpAmount = 0.5;
			}
			if(pos == 11){
				lerpAmount = 0.6666;
				lerpAmount = 1;
			}
			
			translate(-bigHex[pos][0], -bigHex[pos][1]);
		}
		strokeWeight(2);
		beginShape();
		for (var pos = 16; pos < bigHex.length; pos++) {
			vertex(bigHex[pos][0], bigHex[pos][1]);
		}
		endShape(CLOSE);
		translate(480, 0);
		if(a == 2 || a == 5){
			translate(-1200, 320);
		}
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


/*
 * shuffles an array so that its elements are in a random order
 * thanks to stackoverflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param  {Array} array        - array to shuffle
 * @return {Array} array        - array after it has been shuffled
 */
function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
