//for debugging
var debug = true;
//global vars
var line_width = 2, noiseScale=1/16.0;
//array of hue ranges used for selecting colour of the hex outline
var huesArray = [0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,265,270,285,300,315,330,345];

//array of co-ordinates used to draw the hexagon pattern at the highest zoom level
//each co-ordinate is the center of a hexagon
var highLevelCoOrdinates = [
    [392, 512],
    [512, 422],
    [632, 512],
    [512, 602],
    [392, 692],
    [272, 602],
    [152, 512],
    [272, 422],
    [392, 332],
    [512, 242],
    [632, 332],
    [752, 422],
    [872, 512],
    [752, 602],
    [632, 692],
    [512, 782],
    [392, 872],
    [272, 782],
    [152, 692],
    [32, 602],
    [-92, 512],
    [32, 422],
    [152, 332],
    [272, 242],
    [392, 152],
    [512, 62],
    [632, 152],
    [752, 242],
    [872, 332],
    [992, 422],
    [1112, 512],
    [992, 602],
    [872, 692],
    [752, 782],
    [632, 872],
    [512, 962],
    [392, 1052],
    [272, 962],
    [152, 872],
    [32, 782],
    [-92, 692],
    [-212, 602],
    [-332, 512],
    [-212, 422],
    [-92, 332],
    [32, 242],
    [152, 152],
    [272, 62],
    [392, -32],
    [512, -122],
    [632, -32],
    [752, 62],
    [872, 152],
    [992, 242],
    [1112, 332],
    [1232, 422],
    [1352, 512],
    [1232, 602],
    [1112, 692],
    [992, 782],
    [872, 872],
    [752, 962],
    [632, 1052],
    [512, 1142],
];

//co-ordinates for each glyph within the hexagon
//drawn from the center to the outside - the last twelve co-ordinates can be used to draw the hexagon outline
// var bigHex = [
//     [30, -30], [30, 30], [-30, 30], [-30, -30],
//     [30, -90], [90, -30], [90, 30], [30, 90],
//     [-30, 90], [-90, 30], [-90, -30], [-30, -90],
//     [30,-150], [90, -90],[150, -30], [150, 30],
//     [90, 90], [30,150],[-30,150], [-90, 90],
//     [-150, 30], [-150, -30], [-90, -90], [-30, -150]
// ];
//
var bigHex = [
    [15, -15], [15, 15], [-15, 15], [-15, -15],
    [15, -45], [45, -15], [45, 15], [15, 45],
    [-15, 45], [-45, 15], [-45, -15], [-15, -45],
    [15,-75], [45, -45],[75, -15], [75, 15],
    [45, 45], [15,75],[-15,75], [-45, 45],
    [-75, 15], [-75, -15], [-45, -45], [-15, -75]
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
    p5.rectMode(p5.CORNERS);
    p5.noFill();
    if(debug){
        drawFrame(p5, x1, x2, y1, y2);
    }
    p5.rectMode(p5.CENTER);

    var centerX = 512, centerY = 512;

    var c_p00 = p5.map(0, x1, x2, 0, 256);
    var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
    var weight = c_plwidth - c_p00;
    for(var i=0; i < highLevelCoOrdinates.length; i++){
        centerX = highLevelCoOrdinates[i][0];
        centerY = highLevelCoOrdinates[i][1];
        var colour = p5.color(huesArray[(i % huesArray.length)], 100, 100);
        //draw the hexagon outline that groups all the glyphs together
        for (var adjuster = -2; adjuster <= 2; adjuster++) {
            drawHexOutline(p5, centerX, centerY, x1, x2, y1, y2, weight, colour, adjuster * 2);
        }
        colour._array[3] = 0.4;
        p5.stroke(colour);
        drawHexGlyphs(p5, centerX, centerY, x1, x2, y1, y2, z, weight);
    }
}


//draws the lines that connects the hexagons together
function drawHexOutline(p5, centerX, centerY, x1, x2, y1, y2, weight, colour, adjuster) {
    var xPos, yPos, cx, cy;
    //adjust the opacity of the colour
    colour._array[3] = 1 - (0.2 * Math.abs(adjuster));

    p5.stroke(colour);
    p5.strokeWeight(weight);
    p5.beginShape();
    for (var pos = 12; pos < bigHex.length; pos++) {
        var xPos = bigHex[pos][0];
        var yPos = bigHex[pos][1];
        if(xPos > 30){
            xPos = xPos + (adjuster * 2);
        }
        else if(xPos > 0){
            xPos = xPos + adjuster;
        }
        else if(xPos > -30){
            xPos = xPos - adjuster;
        }
        else {
            xPos = xPos - (adjuster * 2);
        }
        if(yPos > 45){
            yPos = yPos + (adjuster * 2);
        }
        else if(yPos > 0){
            yPos = yPos + adjuster;
        }
        else if(yPos > -60){
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
    var glyphWidth = 256 / ((x2-x1)/24);
    var innerShapeSize = glyphWidth / 2;
    p5.strokeWeight(weight);
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
    p5.stroke(0, 100, 100);
    p5.rect(cx, cy, cx2, cy2);
}
