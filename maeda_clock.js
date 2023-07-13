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

const numberWidth = (digitWidth * 2) + rectWidth + (rectSpacing * 2);
const numberSpacing = rectWidth * 3

var count = 0;
var currentSecond = 0;

const queue = new Queue(5);

// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {

  colorMode(HSB);
  background(0, 0, 19.6); //  beige
  //fill(0, 0, 78.4); // dark grey

  var timeString = obj.hours + ":" + obj.minutes + ":" + obj.seconds;
  //text(timeString, 800, height/2);
  //text(count, 800, height/2 + 50);

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
    fill(time.hue, 100, 100);
    drawNumbers(20, 20 + (digitHeight + digitSpacing) * i, time);
  }

  // Display time in the other directions since time has a past and future
  for (var i = 0; i < queue.queue.length; i++) {
    var time = queue.queue[i];
    fill(time.hue, 100, 100);
    drawNumbers(520, 20 + (digitHeight + digitSpacing) * i, time);
  }
}

function drawNumbers(x, y, time) {
  drawNumber(x, y, time.hours);
  drawNumber(x + numberWidth + numberSpacing, y, time.minutes);
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