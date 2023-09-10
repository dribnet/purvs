var debug = true;

var blue = "#0000AA";
var light_blue = "#0088FF";

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.noiseDetail(8,0.5);
  p5.background('#000000');
  p5.stroke(light_blue);
  drawLayer(p5, 16, x1, x2, y1, y2, z);
}

function drawLayer(p5, slashsize, x1, x2, y1, y2, z, zoom) {
    var noiseScale=1/16.0;
    var startx = slashsize * Math.floor(x1/slashsize);
    var starty = slashsize * Math.floor(y1/slashsize);
    var endx = slashsize * (Math.floor(x2/slashsize));
    var endy = slashsize * (Math.floor(y2/slashsize));

    var char_width = 256 / ((x2-x1)/slashsize);
    var char_height = 256 / ((y2-y1)/slashsize);
    var pixel_width = char_width / slashsize;
    var pixel_height = char_height / slashsize;
    p5.strokeWeight(pixel_width);
    p5.rectMode(p5.CENTER);
    var columnPointer = 0;
    var rowPointer = 0;
    var coordsCount = 0;
    var coOrds = [];

    for(var x=startx; x<endx; x+=slashsize) {
        coOrds[columnPointer] = [];
        var n_x = x / slashsize;
        var x_pos = p5.map(x, x1, x2, 0, 256);
        for(var y=starty; y<endy; y+=slashsize) {
            var n_y = y / slashsize;
            var y_pos = p5.map(y, y1, y2, 0, 256);
            var noiseValue = p5.noise(x * noiseScale, y * noiseScale, z);
            var shapeSize = char_width/2;
            if (noiseValue < 0.2) {
                p5.ellipse(x_pos+(char_width/2), y_pos+(char_width/2), shapeSize, shapeSize);
            }
            else if (noiseValue < 0.4) {
                p5.rect(x_pos+(char_width/2), y_pos+(char_width/2), shapeSize, shapeSize);
            }
            else if (noiseValue < 0.6) {
                octa(p5, x_pos+(char_width/2), y_pos+(char_width/2), shapeSize);
            }
            else if (noiseValue < 0.8) {
                equilateral(p5, x_pos+(char_width/2), y_pos+(char_width/2), shapeSize);
            }
            else {
                hexa(p5, x_pos+(char_width/2), y_pos+(char_width/2), shapeSize);
            }
            coOrds[columnPointer][rowPointer] = [x_pos+(char_width/2), y_pos+(char_width/2)];
            coordsCount++;
            rowPointer++;
        }
        rowPointer = 0;
        columnPointer++;
    }

    //draw the larger hexagons
    if(coordsCount >= 16){
        var numOfHexLoops = columnPointer/4;
        var colStart = 1, colEnd = 4;
        for(var colLoop=0; colLoop < numOfHexLoops; colLoop++){
            var rowStart = 1, rowEnd = 4;
            for(var rowLoop=0; rowLoop < numOfHexLoops; rowLoop++){
                var hexCoOrds = [];
                for(var col=colStart; col <= colEnd; col++){
                    for(var row=rowStart; row <= rowEnd; row++){
                        if ((col % 4) == 1){
                            if ((row % 4) == 3){
                                hexCoOrds[0] = coOrds[col-1][row-1];
                            }
                            else if ((row % 4) == 2){
                                hexCoOrds[1] = coOrds[col-1][row-1];
                            }
                        }
                        else if ((col % 4) == 2){
                            if ((row % 4) == 1){
                                hexCoOrds[2] = coOrds[col-1][row-1];
                            }
                            else if ((row % 4) == 0){
                                hexCoOrds[7] = coOrds[col-1][row-1];
                            }
                        }
                        else if ((col % 4) == 3){
                            if ((row % 4) == 1){
                                hexCoOrds[3] = coOrds[col-1][row-1];
                            }
                            else if ((row % 4) == 0){
                                hexCoOrds[6] = coOrds[col-1][row-1];
                            }
                        }
                        else if ((col % 4) == 0){
                            if ((row % 4) == 2){
                                hexCoOrds[4] = coOrds[col-1][row-1];
                            }
                            else if ((row % 4) == 3){
                                hexCoOrds[5] = coOrds[col-1][row-1];
                            }
                        }
                    }
                }
                rowStart = rowStart + 4;
                rowEnd = rowEnd + 4;
                drawHexOutline(p5, hexCoOrds, pixel_width);
            }
            colStart = colStart + 4;
            colEnd = colEnd + 4;
        }
    }

    if(debug){
        // debug - show border
        p5.noFill();
        p5.stroke(255, 0, 0);
        p5.rectMode(p5.CORNER);
        p5.rect(0, 0, 255, 255);
    }
}

//array of hue ranges used for selecting colour of the hex outline
var hueRanges = [
                    [-22.5, 22.5, 0],
                    [22.5, 67.5, 45],
                    [67.5, 112.5, 90],
                    [112.5, 157.5, 135],
                    [157.5, 202.5, 180],
                    [202.5, 247.5, 225],
                    [247.5, 292.5, 270],
                    [292.5, 337.5, 315],
                ];


//draws the lines that connects the hexagons together
function drawHexOutline(p5, coOrds, weight) {
    var rand = Math.floor(p5.random(0,8));
    var h = focusedRandom(hueRanges[rand][0], hueRanges[rand][1], 10, hueRanges[rand][2]);
    p5.colorMode(p5.HSB);
    p5.stroke(h, 100, 100);
    p5.strokeWeight(weight * 2);
    p5.noFill();
    p5.beginShape();
    for (var i = 0; i < coOrds.length; i++) {
        var xPos = coOrds[i][0];
        var yPos = coOrds[i][1];
        p5.vertex(xPos, yPos);
    }
    p5.endShape(p5.CLOSE);
    p5.colorMode(p5.RGB);
}

/*
 * function to draw an equilateral triangle with a set width
 * based on x, y co-oridinates that are the center of the triangle
 * @param {Number} x        - x-coordinate that is at the center of triangle
 * @param {Number} y      	- y-coordinate that is at the center of triangle
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
function hexa(p5, x, y, radius) {
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
function octa(p5, x, y, radius) {
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
