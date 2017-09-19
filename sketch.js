var shapeOptions = ['rect', 'ellipse', 'equilateral', 'hexa', 'octa'], rotationOptions = [3,4,6,8,12];

var main_canvas , canvasSize = 1, canvasSelector;

var bigHex = [
				[280, 200], [280, 280], [200, 280], [200, 200], 
				[280, 120], [360, 200], [360, 280], [280, 360], 
                [200, 360], [120, 280], [120, 200], [200, 120], 
				[280,40], [360, 120],[440, 200], [440, 280], 
                [360, 360], [280,440],[200,440], [120, 360],
				[40, 280], [40, 200], [120, 120], [200, 40]
			];

function setup () {
    //set up the canvas
    main_canvas = createCanvas(960, 500);
    main_canvas.parent('canvas-container');

    canvasSelector = createSelect();
    canvasSelector.option(1);
    canvasSelector.option(2);
    canvasSelector.option(3);
    canvasSelector.value(1);
    canvasSelector.parent('canvas-selector-holder');
    canvasSelector.changed(changeCanvasSize);
	
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

function changeCanvasSize(){
    canvasSize = canvasSelector.value();
    if(canvasSize == 2){
        main_canvas = resizeCanvas(1920, 1000);
    }
    else if(canvasSize == 3){
        main_canvas = resizeCanvas(2880, 1500);  
    }
    else {
        main_canvas = resizeCanvas(960, 500);
    }
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
    var colour = "", xAxis = 0, yAxis = 0;
    hueRanges = shuffleArray(hueRanges);
    //iniitial translation to get the pattern started in the place
    translate(-480, -310);
    //loop through the y axis
    while(yAxis < canvasSize){
        //loop through the x axis
        while(xAxis < canvasSize){
            //this loop is used to draw a hexagon shaped collection of glyphs for every array in the hueRanges array
        	for(var hueIterator = 0; hueIterator <= 8; hueIterator++){		
                //find the values of fromColour and toColour for this iteration
        		var h = focusedRandom(hueRanges[hueIterator][0], hueRanges[hueIterator][1], 10, hueRanges[hueIterator][2]);
        		var fromColour = color(h, 100, 100);
        		var toPointer = hueIterator + 6;
        		if(toPointer > 8){
        			toPointer = toPointer - 9;
        		}
        		h = focusedRandom(hueRanges[toPointer][0], hueRanges[toPointer][1], 10, hueRanges[toPointer][2]);
        		var toColour = color(h, 100, 100);
        		
                strokeWeight(0.3);
        		var lerpAmount = 0.3333;

                //loop through the positions of the bigHex array
        		for (var pos = 0; pos < bigHex.length; pos++) {
                    //translate to the co-ordinates where the glyph will be drawn
        			translate(bigHex[pos][0], bigHex[pos][1]);
                    //set the shape, number of rotations and colour
                    shape = random(shapeOptions);
        			numOfRotations = random(rotationOptions);
        			colour = lerpColor(fromColour, toColour, lerpAmount);

                    //this is where the glyph is created
        			for (var i = 0; i < (numOfRotations * 2); i ++) {
                        //the shape is draw five times with different levels of opacity to create interesting textures
        				for (var j = 0; j <=5; j++) {
        					stroke(colour, 255 - (8*j));
        					//call the function as detemined by the variable shape
        					//rect and ellipse are built in p5.js
        					//tri,hexa & octa are defined in this file
        					window[shape](0, 20, 20 + (j*3), 20 + (j*3));
        				}
        				rotate(PI/numOfRotations);
        			}

                    //change the lerpAmount at certain points of the iteration
        			if(pos == 3){
        				lerpAmount = 0.6666;
        			}
        			if(pos == 11){
        				lerpAmount = 1;
        			}
        			//reset the translation from the beginnig of the loop
        			translate(-bigHex[pos][0], -bigHex[pos][1]);
        		}

        		//draw the hexagon outline that groups all the glyphs together
        		beginShape();
                strokeWeight(2);
				stroke(colour, 255);
        		for (var pos = 12; pos < bigHex.length; pos++) {
        			vertex(bigHex[pos][0], bigHex[pos][1]);
        		}
        		endShape(CLOSE);


                //translations required to draw the next iteration in the right place
                translate(480, 0);
        		if(hueIterator == 2 || hueIterator == 5){
        			translate(-1200, 320);
                    if(hueIterator == 5){
                        translate(-480, 0);
                    }
        		}
        	}
            //translations required to draw the next iteration in the right place
            translate(0, -640);
            xAxis++;
        }
        //translations required to draw the next iteration in the right place
        if(canvasSize == 2){
            translate(-3120, 960);    
        }
        if(canvasSize == 3){
            translate(-4080, 960);    
        }
        xAxis = 0;
        yAxis++;
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
