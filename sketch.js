var canvasWidth = 960;
var canvasHeight = 500;

var slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8;
var faceSelector;
var button;

var squiggleMargin = 5;
var shapeMargin = 20;

var curRandomSeed;

var c =["#9effb8", "#89aee1", "#d46ce7", "#e9f259", "#7cf4d3"];

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(canvasWidth, canvasHeight);

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);
  slider6 = createSlider(0, 100, 50);
  slider7 = createSlider(0, 100, 50);
  slider8 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
  slider6.parent('slider6Container');
  slider7.parent('slider7Container');
  slider8.parent('slider8Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.option('all')
  faceSelector.value('all');
  faceSelector.parent('selector1Container');

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

  angleMode(DEGREES);
  rectMode(CENTER);

}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  c.sort(function(a, b){return 0.5 - Math.random()});
}

function draw () {
  resetFocusedRandom(curRandomSeed);

  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();
  var s6 = slider6.value();
  var s7 = slider7.value();
  var s8 = slider8.value();

  var lineWeight = map(s1, 0, 100, 4, 8);
  var numSquiggleRows = Math.floor(map(s2, 0, 100, 8, 12));
  var numSquiggleCols = Math.floor(map(s3, 0, 100, 18, 20));
  var lineLength = Math.floor(map(s4, 0, 100, 30, 80));
  var color =  Math.floor(map(s5, 0, 100, 0, 1));
  var numShapeRows = Math.floor(map(s6, 0, 100, 5, 8));
  var numShapeCols =  Math.floor(map(s7, 0, 100, 6, 10));
  var contentType =  Math.floor(map(s8, 0, 100, 0, 1));

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
  for(var i=0;i<numSquiggleRows;i++) {
    for(var j=0;j<numSquiggleCols;j++) {
      var x = (j * (dotDiameter + xMargin)) + squiggleMargin + (xMargin / 2) + dotRadius;
      var y = (i * (dotDiameter + yMargin)) + squiggleMargin + (yMargin / 2) + dotRadius;
      strokeCap(ROUND);
      drawSquiggle(x, y, dotRadius, color, lineWeight, squiggle_color, lineLength);
    }
  }

  if (contentType == 1) {
    for(var i=0;i<numShapeRows;i++) {
      for(var j=0;j<numShapeCols;j++) {
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

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}