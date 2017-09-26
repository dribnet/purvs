var canvasWidth = 960;
var canvasHeight = 500;

var button;

var curRandomSeed;

var lastSwapTime = 0;
var millisPerSwap = 5000;

var Y_AXIS = 1;
var X_AXIS = 2;
var sunColour, b1, b2, strokeColour, strokeAlpha;

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
  lastSwapTime = millis();
}

function draw () {

  // timer for seed change
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  resetFocusedRandom(curRandomSeed);

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
}