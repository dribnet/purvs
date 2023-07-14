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

class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
  }

  append(item) {
    if (this.queue.length >= this.maxSize) {
      this.pop();
    }

    this.queue.push(item);
  }

  pop() {
    if (this.queue.length === 0) {
      console.log("Queue is empty");
      return;
    }

    return this.queue.shift();
  }
}

const rectWidth = 10;
const rectSpacing = 5;

const rows = 5;
const cols = 3;

const digitWidth = ((rectWidth + rectSpacing) * cols) - rectSpacing;
const digitHeight = ((rectWidth + rectSpacing) * rows) - rectSpacing;
const digitSpacing = rectWidth + (rectSpacing * 2)

const numberWidth = (digitWidth * 2) + digitSpacing;
const numberSpacing = rectWidth * 3

var count = 0;
var currentSecond = 0;

const listNumberSize = 5;

const queue = new Queue(listNumberSize);

// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {

  colorMode(HSB);
  noFill();
  background(0, 0, 12);

  var timeString = obj.hours + ":" + obj.minutes + ":" + obj.seconds;

  // Used for counting how many seconds have passed since start of execution
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

  // Draw the numbers in the queue

  // Reverse the queue with a shallow copy so that the actual time is in the top right
  var reverseQueue = queue.queue.slice().reverse();
  for (var i = queue.queue.length - 1; i >= 0; i--) {
    var time = reverseQueue[i];
    setStroke(time, i, 0);

    drawNumbers(20, 20 + ((digitHeight + digitSpacing) * i) * 2/3, time);
  }

  // Display time in the other directions since time has a past and future
  for (var i = 0; i < queue.queue.length; i++) {
    var time = queue.queue[i];
    setStroke(time, i, queue.queue.length - 1)
    
    drawShearNumbers(520, 20 + ((digitHeight + digitSpacing) * i) * 2/3, time, i);
  }
}

function setStroke(time, i, lastElement) {
  // Set the current time to white and the rest to rainbow
  if (i === lastElement) {
    stroke(0, 0, 100);
  } else {
    stroke(time.hue, 80, 100, 1 - (0.1) * i);
  }
}

function drawNumbers(x, y, time) {
  drawNumber(x, y, time.hours);

  drawBox(x + numberWidth + numberSpacing / 3, y + digitHeight / 2 - rectWidth - rectSpacing);
  drawBox(x + numberWidth + numberSpacing / 3, y + digitHeight / 2 + rectWidth);

  drawNumber(x + numberWidth + numberSpacing, y, time.minutes);

  drawBox(x + numberWidth * 2 + numberSpacing + numberSpacing / 3, y + digitHeight / 2 - rectWidth - rectSpacing);
  drawBox(x + numberWidth * 2 + numberSpacing + numberSpacing / 3, y + digitHeight / 2 + rectWidth);

  drawNumber(x + (numberWidth + numberSpacing) * 2, y, time.seconds);
}


function drawNumber(x, y, digits) {
  var firstDigit = String(digits).slice(0, 1);
  var secondDigit = String(digits).slice(-1);

  // Handles 01-09 cases
  if (digits < 10) {
    firstDigit = 0;
  }

  drawDigit(x, y, numberMatrix[firstDigit]);
  // Draws the second dight with a spacing of (rectWidth + rectSpacing * 2)
  drawDigit(x + digitWidth + digitSpacing, y, numberMatrix[secondDigit]);
  
}


function drawDigit(x, y, numberMat) {
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      
      if (numberMat[row][col]) {
        drawBox(x + (rectWidth + rectSpacing) * col, y + (rectWidth + rectSpacing) * row);
      }
    }
  }
}

function drawBox(x, y) {
  beginShape();
    vertex(x,y);
    vertex(x+rectWidth,y);
    vertex(x+rectWidth,y+rectWidth);
    vertex(x,y+rectWidth);
  endShape(CLOSE);
}

const yShear = 0.42;
const zShear = 0.42;

// Set default value for colon
function drawShearBox(x, y, i, col = 3) {
  const yOffset =  col * ((zShear - yShear) * rectWidth);
  beginShape();
  vertex(x + (zShear * rectWidth) * i, y - yOffset - (zShear * rectWidth) * i);
  vertex(x + (zShear * rectWidth) * i, y - yOffset + rectWidth - (zShear * rectWidth) * i);
  vertex(x + rectWidth + (zShear * rectWidth) * i, y - yOffset + rectWidth + (yShear * rectWidth) - (zShear * rectWidth) * i);
  vertex(x + rectWidth + (zShear * rectWidth) * i, y - yOffset + (yShear * rectWidth) - (zShear * rectWidth) * i);
  endShape(CLOSE);
}

function drawShearDigit(x, y, numberMat, index) {
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      
      if (numberMat[row][col]) {
        drawShearBox(x + (rectWidth + rectSpacing) * col, y + ((rectWidth + rectSpacing) * col * zShear) + (rectWidth + rectSpacing) * row, index, col);
      }
    }
  }
}

function generateOffset(leadingSpace) {
  return leadingSpace * (zShear);
}

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

function drawShearNumbers(x, y, time, index) {
  var leadingSpace = 0;
  drawShearNumber(x, y, time.hours, index);

  leadingSpace = numberWidth + numberSpacing / 3;

  drawShearBox(x + leadingSpace, y + digitHeight / 2 - rectWidth - rectSpacing + generateOffset(leadingSpace), index);
  drawShearBox(x + leadingSpace, y + digitHeight / 2 + rectWidth + generateOffset(leadingSpace), index);

  leadingSpace = numberWidth + numberSpacing;

  drawShearNumber(x + leadingSpace, y + generateOffset(leadingSpace), time.minutes, index);

  leadingSpace = numberWidth * 2 + numberSpacing + numberSpacing / 3;

  drawShearBox(x + leadingSpace, y + digitHeight / 2 - rectWidth - rectSpacing + generateOffset(leadingSpace), index);
  drawShearBox(x + leadingSpace, y + digitHeight / 2 + rectWidth + generateOffset(leadingSpace), index);

  leadingSpace = (numberWidth + numberSpacing) * 2;

  drawShearNumber(x + leadingSpace, y + generateOffset(leadingSpace), time.seconds, index);
}