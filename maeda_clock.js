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


// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey

  var timeString = obj.hours + ":" + obj.hours + ":" + obj.seconds;
  text(timeString, width/2, height/2);

  console.log(String(obj.seconds))
  console.log(String(obj.seconds).slice(0, 1))

  

  var firstSecond = String(obj.seconds).slice(0, 1);
  var secondSecond = String(obj.seconds).slice(-1);

  var firstMat = numberMatrix[firstSecond];
  var secondMat = numberMatrix[secondSecond];

  drawNum(20, 20, firstMat);
  drawNum(120, 20, secondMat);
}

function drawNum(xOffSet, yOffset, numberMat) {
  const rows = 5;
  const cols = 3;


  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      
      if (numberMat[row][col]) {
        drawBox(25 * col + xOffSet, 25 * row + yOffset);
      }
    }
  }
}


function drawBox(x, y) {
  beginShape();
    vertex(x,y);
    vertex(x+20,y);
    vertex(x+20,y+20);
    vertex(x,y+20);
  endShape(CLOSE);
}

// edit the git config file so it doesnt matter when you commit