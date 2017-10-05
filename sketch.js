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
  console.log(y1, y2);
  p5.background(0);
  p5.rectMode(p5.CORNERS);

  // The first red rectangle fills the entire space
  var cx = p5.map(512-960/2, x1, x2, 0, 256);
  var cy = p5.map(512-720/2, y1, y2, 0, 256);
  var cx2 = p5.map(512+960/2, x1, x2, 0, 256);
  var cy2 = p5.map(512+720/2, y1, y2, 0, 256);
  p5.fill(255, 0, 0);
  p5.rect(cx, cy, cx2, cy2);

  // The second black rectangle is inset to form a frame inset by 20 units
  cx = p5.map(512-956/2, x1, x2, 0, 256);
  cy = p5.map(512-716/2, y1, y2, 0, 256);
  cx2 = p5.map(512+956/2, x1, x2, 0, 256);
  cy2 = p5.map(512+716/2, y1, y2, 0, 256);
  p5.fill(0);
  p5.rect(cx, cy, cx2, cy2);

  var centerX = 512;
  var centerY = 512;

  for(var j =-1; j <= 1; j++){
    centerY = 512  + (480 * j);
    for(var i =-1; i <= 2; i++){
      centerX = 512 -180 + (360 * i);
      p5.stroke(0, 255, 0);
      drawHexOutline(p5, centerX, centerY, x1, x2, y1, y2);  
      for (var pos = 0; pos < bigHex.length; pos++) {
          var xPos = bigHex[pos][0];
          var yPos = bigHex[pos][1];
          cx = p5.map(centerX + xPos, x1, x2, 0, 256);
          cy = p5.map(centerY+ yPos, y1, y2, 0, 256);
          p5.ellipse(cx, cy, 50);
      }
    }
  }

  for(var j =-1; j <= 2; j++){
    centerY = 512 - 240 + (480 * j);
    for(var i =-1; i <= 1; i++){
      centerX = 512 + (360 * i);
      p5.stroke(0, 255, 255);
      drawHexOutline(p5, centerX, centerY, x1, x2, y1, y2);  
      for (var pos = 0; pos < bigHex.length; pos++) {
          var xPos = bigHex[pos][0];
          var yPos = bigHex[pos][1];
          cx = p5.map(centerX + xPos, x1, x2, 0, 256);
          cy = p5.map(centerY+ yPos, y1, y2, 0, 256);
          p5.ellipse(cx, cy, 50);
      }
    }
  }
    
  

}

var homeLevelCoordinates

// var bigHex = [
                
//                 [40, -40], [40, 40], [-40, 40], [-40, -40],
//                 [40, -120], [120, -40], [120, 40], [40, 120],
//                 [-40, 120], [-120, 40], [-120, -40], [-40, -120],
//                 [40,-200], [120, -120],[200, -40], [200, 40],
//                 [120, 120], [40,200],[-40,200], [-120, 120],
//                 [-200, 40], [-200, -40], [-120, -120], [-40, -200]
//             ];

var bigHex = [
                
                [30, -30], [30, 30], [-30, 30], [-30, -30],
                [30, -90], [90, -30], [90, 30], [30, 90],
                [-30, 90], [-90, 30], [-90, -30], [-30, -90],
                [30,-150], [90, -90],[150, -30], [150, 30],
                [90, 90], [30,150],[-30,150], [-90, 90],
                [-150, 30], [-150, -30], [-90, -90], [-30, -150]
            ];
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
function drawHexOutline(p5, centerX, centerY, x1, x2, y1, y2) {
    p5.noFill();
    p5.beginShape();
    p5.strokeWeight(  2);
    var xPos, yPos, cx, cy, ad;
    for (var pos = 12; pos < bigHex.length; pos++) {
        var xPos = bigHex[pos][0];
        var yPos = bigHex[pos][1];
        cx = p5.map(centerX + xPos, x1, x2, 0, 256);
        cy = p5.map(centerY + yPos, y1, y2, 0, 256);
        p5.vertex(cx, cy);
    }
    p5.endShape(p5.CLOSE);
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
