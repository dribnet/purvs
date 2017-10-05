//for debugging
var debug = false;

//global vars
var line_width = 2, noiseScale=1/16.0;
 
//array of hue ranges used for selecting colour of the hex outline
var huesArray = [0,30,60,90,120,150,180,210,240,270,300,330];

//array of co-ordinates used to draw the hexagon pattern at the highest zoom level
//each co-ordinate is the center of a hexagon
var highLevelCoOrdinates = [
	[272, 512],
	[512, 332],
	[752, 512],
	[512, 692],
	[272, 872],
	[32, 692],
	[32, 332],
	[272, 152],
	[752, 152],
	[992, 332],
	[992, 692],
	[752, 872],
	[512, 1052],
	[992, 1052],
	[1232, 872],
	[1232, 512],
	[1232, 152],
	[992, -28],
	[512, -28],
	[32, -28],
	[-208, 152],
	[-208, 512],
	[-208, 872],
	[32, 1052]
];

  /*
 * This is the funciton to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	p5.background(0);
	p5.colorMode(p5.HSB);
	p5.rectMode(p5.CENTER);

	if(debug){
		drawFrame(p5, x1, x2, y1, y2,);
	}
  
	var centerX = 512, centerY = 512;
	
	var c_p00 = p5.map(0, x1, x2, 0, 256);
	var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
	var weight = c_plwidth - c_p00;

    for(var i=0; i < highLevelCoOrdinates.length; i++){
		centerX = highLevelCoOrdinates[i][0];
		centerY = highLevelCoOrdinates[i][1];
		var colour = p5.color(huesArray[(i % 12)], 100, 100);
		//draw the hexagon outline that groups all the glyphs together
		for (var adjuster = -2; adjuster <= 2; adjuster++) {
			drawHexOutline(p5, centerX, centerY, x1, x2, y1, y2, weight, colour, adjuster * 2);
		}
		drawHexGlyphs(p5, centerX, centerY, x1, x2, y1, y2, z, weight);
    }
}

var bigHex = [
                
                [30, -30], [30, 30], [-30, 30], [-30, -30],
                [30, -90], [90, -30], [90, 30], [30, 90],
                [-30, 90], [-90, 30], [-90, -30], [-30, -90],
                [30,-150], [90, -90],[150, -30], [150, 30],
                [90, 90], [30,150],[-30,150], [-90, 90],
                [-150, 30], [-150, -30], [-90, -90], [-30, -150]
            ];



//draws the lines that connects the hexagons together
function drawHexOutline(p5, centerX, centerY, x1, x2, y1, y2, weight, colour, adjuster) {
    var xPos, yPos, cx, cy;
	//adjust the opacity of the colour
	colour._array[3] = 1 - (0.2 * Math.abs(adjuster));
	
    p5.stroke(colour);
	p5.strokeWeight(weight);
	p5.noFill();
	p5.beginShape();
    for (var pos = 12; pos < bigHex.length; pos++) {
        var xPos = bigHex[pos][0];
        var yPos = bigHex[pos][1];
		if(xPos > 60){
            xPos = xPos + (adjuster * 2);
        }
		else if(xPos > 0){
            xPos = xPos + adjuster;
        }
		else if(xPos > -60){
            xPos = xPos - adjuster;
        }
        else {
            xPos = xPos - (adjuster * 2);   
        }
		if(yPos > 90){
			yPos = yPos + (adjuster * 2);
		}
        else if(yPos > 0){
            yPos = yPos + adjuster;
        }
        else if(yPos > -120){
            yPos = yPos - adjuster;   
        }
		else {
			yPos = yPos - (adjuster * 2);   
		}
        cx = p5.map(centerX + xPos, x1, x2, 0, 256);
        cy = p5.map(centerY + yPos, y1, y2, 0, 256);
        p5.vertex(cx, cy);
    }
    p5.endShape(p5.CLOSE);
}

function drawHexGlyphs(p5, centerX, centerY, x1, x2, y1, y2, z, weight){
	var glyphWidth = 256 / ((x2-x1)/48);
	var innerShapeSize = glyphWidth / 2;
	p5.strokeWeight(weight * 2);
	for (var pos = 0; pos < bigHex.length; pos++) {
		var xPos = bigHex[pos][0];
		var yPos = bigHex[pos][1];
		cx = p5.map(centerX + xPos, x1, x2, 0, 256);
		cy = p5.map(centerY + yPos, y1, y2, 0, 256);
		p5.ellipse(cx, cy, glyphWidth);
		
		var noiseValue = p5.noise(centerX + xPos * noiseScale, centerY + yPos * noiseScale, z);
		if (noiseValue < 0.2) {
			p5.ellipse(cx, cy, innerShapeSize, innerShapeSize);
		}
		else if (noiseValue < 0.4) {
			p5.rect(cx, cy, innerShapeSize, innerShapeSize);
		}
		else if (noiseValue < 0.6) {
			octagon(p5, cx, cy, innerShapeSize);
		}
		else if (noiseValue < 0.8) {
			equilateral(p5, cx, cy, innerShapeSize);
		}
		else {
			hexagon(p5,cx, cy, innerShapeSize);
		}
	}
}

/*
 * function to draw an equilateral triangle with a set width
 * based on x, y co-oridinates that are the center of the triangle
 * @param {Number} x        - x-coordinate that is at the center of triangle
 * @param {Number} y        - y-coordinate that is at the center of triangle
 * @param {Number} width    - radius of the hexagon
 */
function equilateral(p5, x, y, width) {
  var x1 = x - (width/2);
  var y1 = y + (width/2);
  var x2 = x;
  var y2 = y - (width/2);
  var x3 = x + (width/2);
  var y3 = y + (width/2);
  p5.triangle(x1,y1,x2,y2,x3,y3);
}

/*
 * function to draw a hexagon shape
 * adapted from: https://p5js.org/examples/form-regular-polygon.html
 * @param {Number} x        - x-coordinate of the hexagon
 * @param {Number} y      - y-coordinate of the hexagon
 * @param {Number} radius   - radius of the hexagon
 */
function hexagon(p5, x, y, radius) {
    radius = radius / 2;
    p5.angleMode(p5.RADIANS);
    var angle = p5.TWO_PI / 6;
    p5.beginShape();
    for (var a = p5.TWO_PI/12; a < p5.TWO_PI + p5.TWO_PI/12; a += angle) {
        var sx = x + p5.cos(a) * radius;
        var sy = y + p5.sin(a) * radius;
        p5.vertex(sx, sy);
    }
    p5.endShape(p5.CLOSE);
}

/*
 * function to draw a octagon shape
 * adapted from: https://p5js.org/examples/form-regular-polygon.html
 * @param {Number} x        - x-coordinate of the octagon
 * @param {Number} y      - y-coordinate of the octagon
 * @param {Number} radius   - radius of the octagon
 */
function octagon(p5, x, y, radius) {
    radius = radius / 2;
    p5.angleMode(p5.RADIANS);
    var angle = p5.TWO_PI / 8;
    p5.beginShape();
    for (var a = p5.TWO_PI/16; a < p5.TWO_PI + p5.TWO_PI/16; a += angle) {
        var sx = x + p5.cos(a) * radius;
        var sy = y + p5.sin(a) * radius;
        p5.vertex(sx, sy);
    }
    p5.endShape(p5.CLOSE);
}


//red rectangle drawn to show the frame 
function drawFrame(p5, x1, x2, y1, y2,){
	var cx = p5.map(512-960/2, x1, x2, 0, 256);
	var cy = p5.map(512-720/2, y1, y2, 0, 256);
	var cx2 = p5.map(512+960/2, x1, x2, 0, 256);
	var cy2 = p5.map(512+720/2, y1, y2, 0, 256);
	p5.fill(0, 100, 100);
	p5.rect(cx, cy, cx2, cy2);
}	 