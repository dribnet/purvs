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

  getSize() {
    return this.queue.length;
  }
}

const rectWidth = 30;
const rectSpacing = 5;

const rows = 5;
const cols = 3;

const digitWidth = ((rectWidth + rectSpacing) * cols) - rectSpacing;
const digitSpacing = rectWidth + (rectSpacing * 2)

const numberWidth = (digitWidth * 2) + rectWidth + (rectSpacing * 2);
const numberSpacing = rectWidth * 3

var count = 0;
var currentSecond = obj.seconds;

const queue = new Queue(3);

// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey

  var timeString = obj.hours + ":" + obj.minutes + ":" + obj.seconds;
  text(timeString, width/2, height/2);
  text(count, width/2, height/2 + 50);

  // Used for counting how many seconds have passed since start of execution
  if (obj.seconds !== currentSecond) {
    count++;
    currentSecond = obj.seconds;
  }
  

  drawNumbers(20, 20);
}

function drawNumbers(x, y) {
  drawNumber(x, y, obj.hours);
  drawNumber(x + numberWidth + numberSpacing, 20, obj.minutes);
  drawNumber(x + (numberWidth + numberSpacing) * 2, 20, obj.seconds);
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