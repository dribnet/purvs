var canvasWidth = 960;
var canvasHeight = 500;

var button;

var squiggleMargin = 5;
var shapeMargin = 20;

var curRandomSeed;

var lastSwapTime = 0;
var millisPerSwap = 5000;

var c =["#9effb8", "#89aee1", "#d46ce7", "#e9f259", "#7cf4d3"];
var Y_AXIS = 1;
var X_AXIS = 2;
var sunColour, b1, b2, strokeColour, strokeAlpha;

var inPatternMode = true;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(canvasWidth, canvasHeight);

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  c.sort(function(a, b){return 0.5 - Math.random()});
  lastSwapTime = millis();
}

function draw () {

  // timer for seed change
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  resetFocusedRandom(curRandomSeed);

    if (inPatternMode) {

    var lineWeight = focusedRandom(5, 7);
    var numSquiggleRows = Math.floor(focusedRandom(8, 12));
    var numSquiggleCols = Math.floor(focusedRandom(18, 20));
    var lineLength = Math.floor(focusedRandom(50, 90));
    var setColor =  Math.floor(focusedRandom(0, 3));
    var numShapeRows = Math.floor(focusedRandom(6, 8));
    var numShapeCols =  Math.floor(focusedRandom(6, 10));
    var contentType =  Math.floor(focusedRandom(0, 2));

    if (setColor < 1) {
      bg_color = 255;
      squiggle_color = 0;
    } else {
      bg_color = c[0];
      squiggle_color = c[1];
    }

    background(bg_color);

    var circleFill = c[2];
    var squareFill = c[3];
    var zigzagFill = c[4];

    var dotWidth = ((canvasWidth - (2 * squiggleMargin)) / numSquiggleCols) - squiggleMargin;
    var dotHeight = ((canvasHeight - (2 * squiggleMargin)) / numSquiggleRows) - squiggleMargin;

    var shapeWidth = ((canvasWidth - (2 * shapeMargin)) / numShapeCols) - shapeMargin;
    var shapeHeight = ((canvasHeight - (2 * shapeMargin)) / numShapeRows) - shapeMargin;

    if( dotWidth > dotHeight ) {
      var dotDiameter = dotHeight;
      var xMargin = (canvasWidth - ((2 * squiggleMargin) + (numSquiggleCols * dotDiameter))) / numSquiggleCols;
      var yMargin = squiggleMargin;
    } else {
      var dotDiameter = dotWidth;
      var xMargin = squiggleMargin;
      var yMargin = (canvasHeight - ((2 * squiggleMargin) + (numSquiggleRows * dotDiameter))) / numSquiggleRows;
    }

    if( shapeWidth > shapeHeight ) {
      var shapeDiameter = shapeHeight;
      var shapeMarginX = (canvasWidth - ((2 * shapeMargin) + (numShapeCols * shapeDiameter))) / numShapeCols;
      var shapeMarginY = shapeMargin;
    } else {
      var shapeDiameter = shapeWidth;
      var shapeMarginX = shapeMargin;
      var shapeMarginY = (canvasHeight - ((2 * shapeMargin) + (numShapeRows * shapeDiameter))) / numShapeRows;
    }

    var dotRadius = dotDiameter * 0.5;

    var shapeRadius = shapeDiameter * 0.5;

    // draw a squiggle at each location
    for(var i = 0; i < numSquiggleRows; i++) {
      for(var j = 0; j < numSquiggleCols; j++) {
        var x = (j * (dotDiameter + xMargin)) + squiggleMargin + (xMargin / 2) + dotRadius;
        var y = (i * (dotDiameter + yMargin)) + squiggleMargin + (yMargin / 2) + dotRadius;
        strokeCap(ROUND);
        drawSquiggle(x, y, dotRadius, setColor, lineWeight, squiggle_color, lineLength);
      }
    }

    if (contentType >= 1) {
      for(var i = 0; i < numShapeRows; i++) {
        for(var j = 0; j < numShapeCols; j++) {
          var shapeX = (j * (shapeDiameter + shapeMarginX)) + shapeMargin + (shapeMarginX / 2) + shapeRadius;
          var shapeY = (i * (shapeDiameter + shapeMarginY)) + shapeMargin + (shapeMarginY / 2) + shapeRadius;
          
          if(i%2 == 0) {
            shapeX = shapeX + shapeMarginX / 2;
          }
          else {
            shapeX = shapeX - shapeMarginX / 2;
          }

          drawShape(shapeX, shapeY, shapeRadius, circleFill, squareFill, zigzagFill);

        }
      }
    }
  }
  else {
    background(0);

    var horizonLine = focusedRandom(350, 450);
    var colourSelect = Math.floor(focusedRandom(0, 4));
    var isStars = Math.floor(focusedRandom(0, 2));

    // Define colors
    if (colourSelect == 0) {
      b1 = color(24, 43, 73);
      b2 = color(97, 39, 132);
      sunColour = "#d05497";
      defineStroke(strokeColour, strokeAlpha, colourSelect);
    }
    else if (colourSelect == 1) {
      b1 = color(24, 43, 73);
      b2 = color(193, 43, 156);
      sunColour = "#ff1355";
      defineStroke(strokeColour, strokeAlpha, colourSelect);
    }
    else if (colourSelect == 2) {
      b1 = color(24, 43, 73);
      b2 = color(248, 41, 132);
      sunColour = "#f6c36e";
      defineStroke(strokeColour, strokeAlpha, colourSelect);
    }
    else if (colourSelect == 3) {
      b1 = color(0, 2, 53);
      b2 = color(182, 134, 254);
      sunColour = "#6271cb";
      defineStroke(strokeColour, strokeAlpha, colourSelect);
    }
    

    // draw background
    setGradient(0, 0, canvasWidth, horizonLine, b1, b2, Y_AXIS);

    // variables for stars
    var starGap = focusedRandom(2, 15);

    // draw stars
    if (isStars == 1) {
      for (var starX = 0; starX < canvasWidth; starX += starGap) {
          strokeWeight(random(0.5, 2.5));
          stroke(random(100, 220));
          point(starX, random(canvasHeight));
      }
    }
    else {

    }

    strokeWeight(2);

    // sun variables
    var sunRadius = Math.floor(focusedRandom(150, 300));
    var sunX = Math.floor(focusedRandom(canvasWidth / 3, 2 * (canvasWidth / 3)));
    var sunY = Math.floor(focusedRandom(height / 3, height / 2));

    // draw sun  
    noStroke();
    fill(sunColour);  
    ellipse(sunX, sunY, sunRadius, sunRadius);

    // variables for mountains  
    var mountainStart = horizonLine; // sets y value of mountain base
    var mountainPeak = focusedRandom(120, 180);
    var mountainHeight = mountainStart - mountainPeak; // sets y value of mountain peaks
    var totalMountains = Math.floor(focusedRandom(1, 4)); // sets total number of mountains
    var mountainDiff = 20; // sets difference in height of each mountain

    var startShade = 50;
    var mountainShade = startShade / totalMountains;

    startShade -= mountainShade;
    stroke(startShade);
    noFill();

    // draw mountains
    for (var numMountains = 1; numMountains <= totalMountains; numMountains++) {
      noiseSeed(int(random(50000)))
      for (x = 0; x < canvasWidth; x++) {
        stroke(startShade);
        line(x, mountainStart, x, mountainHeight + 100 * noise(x/100));
      }
      mountainHeight += mountainDiff; // decreases peak height of each new mountain iteration
      startShade -= mountainShade;
      stroke(startShade);
    }

    // varaibles and drawing of buildings
    var buildingXPos = random(canvasWidth / 3, (2 * canvasWidth / 3));
    drawBuildings(canvasWidth, canvasHeight, horizonLine, mountainHeight, buildingXPos);
    drawBuildings(canvasWidth, canvasHeight, horizonLine, mountainHeight, buildingXPos + random(60, 100));

    // variables for waves
    var waveStart = horizonLine; // makes waves start at base of mountains
    var totalWaves = Math.floor(focusedRandom(2, 5)); // sets total number of waves
    var waveDiff = (canvasHeight - waveStart) / totalWaves; // sets difference in space between waves
    var waveHeight = waveStart + waveDiff; // sets initial wave length

    // draw dark grey rect below waves
    noStroke()
    fill(30)
    rectMode(CORNER);
    rect(0, waveStart, width, height)

    // draw waves
    strokeAlpha = 20;
    for (var numWaves = 1; numWaves <= totalWaves; numWaves++) {
      noiseSeed(int(random(50000)))
      for (x = 0; x < width; x++) {
        defineStroke(strokeColour, strokeAlpha, colourSelect);
        line(x, waveStart, x, waveHeight + 30 *-noise(x / 100));
      }
      waveHeight += waveDiff; // increases depth of each new wave iteration
    }

    // variables for vertical lines
    var numVertLines = Math.floor(focusedRandom(20, 60));
    if (numVertLines%2 == 0) {
      numVertLines += 1;
    }
    var vertLineGap = canvasWidth / numVertLines;

    var startSlant = 1000;
    var slantOffset = startSlant / (numVertLines / 2);

    strokeAlpha = 255;
    defineStroke(strokeColour, strokeAlpha, colourSelect);

    // draw vertical lines
    for (x = 0; x <= canvasWidth; x += vertLineGap) {
      if (x <= canvasWidth / 2) {
        line(x, horizonLine, x - startSlant, canvasHeight);
        startSlant -= slantOffset;
      }
      else if (x >= canvasWidth / 2) {
        line(x, horizonLine, x - startSlant, canvasHeight);
        startSlant -= slantOffset;
      }
    }

    // variables for horizontal lines
    var numHorizLines = Math.floor(focusedRandom(4, 10));
    var horizLineGap = (canvasHeight - horizonLine) / numHorizLines;

    // draw horizontal lines
    for (horizLineY = mountainStart; horizLineY < canvasHeight; horizLineY += horizLineGap) {  
        strokeAlpha = 100; 
        defineStroke(strokeColour, strokeAlpha, colourSelect);
        line(0, horizLineY, canvasWidth, horizLineY)
    }
    
    // varaibles for mist      
    strokeAlpha = 0;
    var mistAmount = 255;
    var mistPeakOffset = 50;
    var mistDepthOffset = 50;

    strokeWeight(1);

    // draw mist
    for (var mistHeight = horizonLine - (mountainPeak - mistPeakOffset); mistHeight <= horizonLine; mistHeight++) {
        defineStroke(strokeColour, strokeAlpha, colourSelect);
        line(0, mistHeight, canvasWidth, mistHeight);
        strokeAlpha += mistAmount / (mountainPeak - mistPeakOffset);
    }

    strokeAlpha = mistAmount;
    for (var mistHeight = horizonLine; mistHeight <= horizonLine + mistDepthOffset; mistHeight++) {
        defineStroke(strokeColour, strokeAlpha, colourSelect);
        line(0, mistHeight, canvasWidth, mistHeight);
        strokeAlpha -= mistAmount / mistDepthOffset;
    }
  }
}


function drawSquiggle(x, y, radius, setColor, lineWeight, squiggleColor, lineLength) {
  var randAng = random(360);
  var xPos = x + random(-10, 10);
  var yPos = y + random(-10, 10);

  strokeWeight(lineWeight);

  if (setColor >= 1) {
    noFill();
    stroke(0);
    arc(xPos + 3, yPos + 3, radius, radius, randAng, randAng + lineLength);
  }

  noFill();
  stroke(squiggleColor);
  arc(xPos, yPos, radius, radius, randAng, randAng + lineLength);
}

function drawShape(x, y, radius, circleFill, squareFill, zigzagFill) {
  noStroke();
  var shapeType = Math.floor(random(1, 4));
  var xPos = x + random(0, 0);
  var yPos = y + random(0, 0);

  if (shapeType == 1) {
    fill(0);
    drawCircle(x + 5, y + 5, radius);

    fill(circleFill);
    drawCircle(x, y, radius);
  }
  else if (shapeType == 2) {
    fill(0);
    drawSquare(xPos + 5, yPos + 5, radius);

    fill(squareFill);
    drawSquare(xPos, yPos, radius);
  }
  else {
    strokeCap(SQUARE);
    noFill();
    strokeWeight(6 * radius / 20);

    stroke(0);
    drawZigZag(xPos + 5, yPos + 5, radius);

    stroke(zigzagFill);
    drawZigZag(xPos, yPos, radius);
  }

}

function drawCircle(xPos, yPos, radius) {
  ellipse(xPos, yPos, radius, radius);
}

function drawSquare(xPos, yPos, radius) {
  rect(xPos, yPos, radius, radius);
}

function drawZigZag(xPos, yPos, radius) {
    beginShape();
    vertex(xPos - radius / 4, yPos - radius / 1.5);
    vertex(xPos - radius / 4, yPos);
    vertex(xPos + radius / 4, yPos);
    vertex(xPos + radius / 4, yPos + radius / 1.5);
    endShape();
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x + w; i++) {
      var inter = map(i, x, x + w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function defineStroke(strokeColour, strokeAlpha, colourSelect, ) {
  if (colourSelect == 0) {
    strokeColour = color(153, 50, 204, strokeAlpha);
  }
  else if (colourSelect == 1) {
    strokeColour = color(255, 19, 152, strokeAlpha);
  }
  else if (colourSelect == 2) {
    strokeColour = color(25, 80, 160, strokeAlpha);
  }
  else if (colourSelect == 3) {
    strokeColour = color(22, 88, 188, strokeAlpha);
  }
  stroke(strokeColour);
}

function drawBuildings(canvasWidth, canvasHeight, horizonLine, mountainHeight, buildingXPos) {
  var buildingYPos = mountainHeight - random(20, 50);
  var buildingWidth = Math.floor(random(30, 50));

  var numWindows = Math.floor(random(4, 5));
  var windowMargin = buildingWidth / numWindows;

  var antennaXPos = random(buildingXPos, buildingXPos + buildingWidth);
  var antennaHeight = buildingYPos - random(20, 50);
  var antennaWidth = random(3, 8);

  noStroke();
  fill(0);

  // draw building
  rectMode(CORNER);
  // main body
  rect(buildingXPos, buildingYPos, buildingWidth, horizonLine);
  // antenna
  rect(random(antennaXPos - 20, antennaXPos), buildingYPos - 10, 20, buildingYPos);
  rect(antennaXPos, antennaHeight, 5, buildingYPos);
  // draw windows
  for (g = buildingXPos + windowMargin; g <= buildingXPos + buildingWidth - windowMargin; g += windowMargin) {
    for (h = buildingYPos + windowMargin; h <= horizonLine - windowMargin; h += windowMargin) {
      rectMode(CENTER);
      fill(255);
      rect(g, h, 4, 0.5);  
    }

  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == ' ') {
    inPatternMode = !inPatternMode;
  }
}