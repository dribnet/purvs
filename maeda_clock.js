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

const rectWidth = 30;
const rectSpacing = 5;

const rows = 5;
const cols = 3;

const digitWidth = ((rectWidth + rectSpacing) * cols) - rectSpacing;
const digitSpacing = rectWidth + (rectSpacing * 2)

const numberWidth = (digitWidth * 2) + rectWidth + (rectSpacing * 2);
const numberSpacing = rectWidth * 3

// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey

  var timeString = obj.hours + ":" + obj.hours + ":" + obj.seconds;
  text(timeString, width/2, height/2);

  drawNumber(20, 20, obj.hours);
  drawNumber(20 + numberWidth + numberSpacing, 20, obj.minutes);
  drawNumber(20 + (numberWidth + numberSpacing) * 2, 20, obj.seconds);
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