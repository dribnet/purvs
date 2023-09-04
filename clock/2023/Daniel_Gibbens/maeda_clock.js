// Matrix for storing all number shapes
const numberMatrix = [
  [[1,1,1],
  [1,0,1],
  [1,0,1],
  [1,0,1],
  [1,1,1]],

  [[1,1,0],
  [0,1,0],
  [0,1,0],
  [0,1,0],
  [1,1,1]],

  [[1,1,1],
  [0,0,1],
  [1,1,1],
  [1,0,0],
  [1,1,1]],

  [[1,1,1],
  [0,0,1],
  [0,1,1],
  [0,0,1],
  [1,1,1]],

  [[1,0,1],
  [1,0,1],
  [1,1,1],
  [0,0,1],
  [0,0,1]],

  [[1,1,1],
  [1,0,0],
  [1,1,1],
  [0,0,1],
  [1,1,1]],

  [[1,1,1],
  [1,0,0],
  [1,1,1],
  [1,0,1],
  [1,1,1]],

  [[1,1,1],
  [0,0,1],
  [0,0,1],
  [0,0,1],
  [0,0,1]],

  [[1,1,1],
  [1,0,1],
  [1,1,1],
  [1,0,1],
  [1,1,1]],

  [[1,1,1],
  [1,0,1],
  [1,1,1],
  [0,0,1],
  [1,1,1]]
  
];
// Queue class for storing time
class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
  }
  // Adds an item to the queue and remove the front element if full
  append(item) {
    if (this.queue.length >= this.maxSize) {
      this.pop();
    }
    this.queue.push(item);
  }
  // Removes the front element
  pop() {
    // Error prevention
    if (this.queue.length === 0) {
      console.log("Queue is empty");
      return;
    }

    return this.queue.shift();
  }
}

// Number grid constants
const rows = 5;
const cols = 3;

// Spacing constants
const rectWidth = 10;
const rectSpacing = 5;
const digitWidth = ((rectWidth + rectSpacing) * cols) - rectSpacing;
const digitHeight = ((rectWidth + rectSpacing) * rows) - rectSpacing;
const digitSpacing = rectWidth + (rectSpacing * 2)
const numberWidth = (digitWidth * 2) + digitSpacing;
const numberSpacing = rectWidth * 3

// Used for controling colours
var count = 0;
var currentSecond = 0;

// Time storage
const queueNumberSize = 9;
const queue = new Queue(queueNumberSize);

// Shearing constants
const yShear = 0.42;
const zShear = 0.42;

// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  colorMode(HSB);
  noFill();
  background(0, 0, 4);

  // Used for changing colours as time passes from the start of execution
  if (obj.seconds !== currentSecond) {
    // Increase count increment for hue change since no other feature needs a count
    count = count + 10;
    currentSecond = obj.seconds;

    // Store the current time
    var currentTime = {
      hours: obj.hours,
      minutes: obj.minutes,
      seconds: obj.seconds,
      hue: count % 360
    }
  
    queue.append(currentTime);
  }

  // Draw lists of time

  // Reverse the queue with a shallow copy so that the actual time is in the top right
  var reverseQueue = queue.queue.slice().reverse();
  for (var i = queue.queue.length - 1; i >= 0; i--) {
    var time = reverseQueue[i];
    setStroke(time, i, 0, true);
    drawShearNumbers(20, 20 + ((digitHeight + digitSpacing) * i) * 2/3, time, i);
  }
  // Display time in the other direction since time has a past and future
  for (var i = 0; i < queue.queue.length; i++) {
    var time = queue.queue[i];
    setStroke(time, i, queue.queue.length - 1, false)
    drawShearNumbers(220, -200 + ((digitHeight + digitSpacing) * i) * 2/3, time, i);
  }
  // Another two for aesthetic
  for (var i = queue.queue.length - 1; i >= 0; i--) {
    var time = reverseQueue[i];
    setStroke(time, i, 0, true);
    drawShearNumbers(580, 220 + ((digitHeight + digitSpacing) * i) * 2/3, time, i);
  }
  for (var i = 0; i < queue.queue.length; i++) {
    var time = queue.queue[i];
    setStroke(time, i, queue.queue.length - 1, false)
    
    drawShearNumbers(780, -20 + ((digitHeight + digitSpacing) * i) * 2/3, time, i);
  }
}

// Sets the stroke to be white for current time and a different coloured hue based on time
function setStroke(time, i, lastElement, reversed) {
  strokeWeight(1);
  if (i === lastElement) {
    stroke(0, 0, 180);
  } else {
    // Reduces alpha as time passes
    if (reversed) {
      stroke(time.hue, 80, 100, 1 - (0.1) * i);
    } else {
      stroke(time.hue, 80, 100, 1 - (0.1) * -(i - lastElement));
    }
  }
}

// Helper function for calculating coordinate with shear
function generateOffset(leadingSpace) {
  return leadingSpace * (zShear);
}

// Draws all the numbers associated with a time with a shear
function drawShearNumbers(x, y, time, index) {
  var leadingSpace = 0;
  // Hours
  drawShearNumber(x, y, time.hours, index);

  leadingSpace = numberWidth + numberSpacing / 3;
  // Colon
  drawShearBox(x + leadingSpace, y + digitHeight / 2 - rectWidth - rectSpacing + generateOffset(leadingSpace), index);
  drawShearBox(x + leadingSpace, y + digitHeight / 2 + rectWidth + generateOffset(leadingSpace), index);

  leadingSpace = numberWidth + numberSpacing;
  // Minutes
  drawShearNumber(x + leadingSpace, y + generateOffset(leadingSpace), time.minutes, index);

  leadingSpace = numberWidth * 2 + numberSpacing + numberSpacing / 3;
  // Colon
  drawShearBox(x + leadingSpace, y + digitHeight / 2 - rectWidth - rectSpacing + generateOffset(leadingSpace), index);
  drawShearBox(x + leadingSpace, y + digitHeight / 2 + rectWidth + generateOffset(leadingSpace), index);

  leadingSpace = (numberWidth + numberSpacing) * 2;
  // Seconds
  drawShearNumber(x + leadingSpace, y + generateOffset(leadingSpace), time.seconds, index);
}

// Draws a number (two digits) with a shear
function drawShearNumber(x, y, digits, index) {
  var firstDigit = String(digits).slice(0, 1);
  var secondDigit = String(digits).slice(-1);

  // Handles 01-09 cases
  if (digits < 10) {
    firstDigit = 0;
  }

  drawShearDigit(x, y, numberMatrix[firstDigit], index);
  // Draws the second dight with a spacing of (rectWidth + rectSpacing * 2)
  var leadingSpace = digitWidth + digitSpacing;
  drawShearDigit(x + leadingSpace, y + generateOffset(leadingSpace), numberMatrix[secondDigit], index);
}

// Draws a digit with a shear
function drawShearDigit(x, y, numberMat, index) {
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (numberMat[row][col]) {
        drawShearBox(x + (rectWidth + rectSpacing) * col, y + ((rectWidth + rectSpacing) * col * zShear) + (rectWidth + rectSpacing) * row, index, col);
      }
    }
  }
}

// Draws a single box for a digit with a shear. (Has a default value for drawing a colon)
function drawShearBox(x, y, i, col = 3) {
  const yOffset =  col * ((zShear - yShear) * rectWidth);
  beginShape();
  vertex(x + (zShear * rectWidth) * i, y - yOffset - (zShear * rectWidth) * i);
  vertex(x + (zShear * rectWidth) * i, y - yOffset + rectWidth - (zShear * rectWidth) * i);
  vertex(x + rectWidth + (zShear * rectWidth) * i, y - yOffset + rectWidth + (yShear * rectWidth) - (zShear * rectWidth) * i);
  vertex(x + rectWidth + (zShear * rectWidth) * i, y - yOffset + (yShear * rectWidth) - (zShear * rectWidth) * i);
  endShape(CLOSE);
}