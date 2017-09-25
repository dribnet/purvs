var canvasWidth = 960;
var canvasHeight = 500;

var faceSelector;
var button;

var squiggleMargin = 5;
var shapeMargin = 20;

var curRandomSeed;

var lastSwapTime = 0;
var millisPerSwap = 5000;

var c =["#9effb8", "#89aee1", "#d46ce7", "#e9f259", "#7cf4d3"];
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(canvasWidth, canvasHeight);

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.value('2');
  faceSelector.parent('selector1Container');

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

  angleMode(DEGREES);

  // Define colors
  b1 = color(0);
  b2 = color(97, 39, 132);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
  c.sort(function(a, b){return 0.5 - Math.random()});
}

function draw () {
  var mode = faceSelector.value();

  // timer for seed change
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  resetFocusedRandom(curRandomSeed);

  if (mode == '1') {
    rectMode(CENTER);

    var lineWeight = focusedRandom(5, 7);
    var numSquiggleRows = Math.floor(focusedRandom(8, 12));
    var numSquiggleCols = Math.floor(focusedRandom(18, 20));
    var lineLength = Math.floor(focusedRandom(50, 90));
    var color =  Math.floor(focusedRandom(0, 3));
    var numShapeRows = Math.floor(focusedRandom(6, 8));
    var numShapeCols =  Math.floor(focusedRandom(6, 10));
    var contentType =  Math.floor(focusedRandom(0, 2));

    if (color < 1) {
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
        drawSquiggle(x, y, dotRadius, color, lineWeight, squiggle_color, lineLength);
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

    // draw background
    setGradient(0, 0, width, height, b1, b2, Y_AXIS);

    // variables for stars
    var starGap = 5;

    // draw stars
    for (var starX = 0; starX < canvasWidth; starX += starGap) {
        strokeWeight(1.0);
        stroke(random(100, 220));
        point(starX, random(canvasHeight));
      }

    // draw sun  
    noStroke();
    fill(208, 84, 151);  
    ellipse(width/2, height/2, 200, 200);

    // variables for mountains  
    var mountainStart = 350; // sets y value of mountain base
    var mountainHeight = 200; // sets y value of mountain peaks
    var totalMountains = 1; // sets total number of mountains
    var mountainDiff = 20; // sets difference in height of each mountain

    var mountainAlpha = 300 / totalMountains;

    stroke(0, mountainAlpha);
    noFill();

    // draw mountains
    for (var numMountains = 1; numMountains <= totalMountains; numMountains++) {
      noiseSeed(int(random(50000)))
      for (x = 0; x < canvasWidth; x++) {
        line(x, mountainStart, x, mountainHeight + 100 * noise(x/100));
      }
      mountainHeight += mountainDiff; // decreases peak height of each new mountain iteration
      mountainAlpha += mountainAlpha;
      stroke(0, mountainAlpha);
    }

    // variables for waves
    var waveStart = mountainStart; // makes waves start at base of mountains
    var totalWaves = 5; // sets total number of waves
    var waveDiff = (canvasHeight - waveStart) / totalWaves; // sets difference in space between waves
    var waveHeight = waveStart + waveDiff; // sets initial wave length

    // draw dark grey rect below waves
    noStroke()
    fill(30)
    rectMode(CORNER);
    rect(0, waveStart, width, height)

    // draw waves
    for (var numWaves = 1; numWaves <= totalWaves; numWaves++) {
      noiseSeed(int(random(50000)))
      for (x = 0; x < width; x++) {
        stroke(153, 50, 204, 20);
        line(x, waveStart, x, waveHeight + 30 *-noise(x / 100));
      }
      waveHeight += waveDiff; // increases depth of each new wave iteration
    }

    // variables for vertical lines
    var numVertLines = 31;
    var vertLineGap = canvasWidth / numVertLines;

    var startSlant = 1000;
    var slantOffset = startSlant / (numVertLines / 2);

    stroke(153, 50, 204, 80);

    // draw vertical lines
    for (x = 0; x <= canvasWidth; x += vertLineGap) {
      if (x <= canvasWidth / 2) {
        line(x, mountainStart, x - startSlant, canvasHeight);
        startSlant -= slantOffset;
      }
      else if (x >= canvasWidth / 2) {
        line(x, mountainStart, x - startSlant, canvasHeight);
        startSlant -= slantOffset;
      }
    }

    // variables for horizontal lines
    var numHorizLines = 10;
    var horizLineGap = (canvasHeight - mountainStart) / numHorizLines;

    // draw horizontal lines
    for (horizLineY = mountainStart; horizLineY < canvasHeight; horizLineY += horizLineGap) {   
        stroke(153, 50, 204, 20)
        line(0, horizLineY, canvasWidth, horizLineY)
    }
    
    // varaibles for mist      
    var mistAlpha = 0;

    // draw mist
    for (var mistHeight = 310; mistHeight <= 350; mistHeight++) {
        stroke(153, 50, 204, mistAlpha);
        line(0, mistHeight, canvasWidth, mistHeight);
        mistAlpha += 3;
    }
  }

}

function drawSquiggle(x, y, radius, color, lineWeight, squiggleColor, lineLength) {
  var randAng = random(360);
  var xPos = x + random(-10, 10);
  var yPos = y + random(-10, 10);

  strokeWeight(lineWeight);

  if (color >= 1) {
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
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}