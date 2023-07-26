// Define an array of pixels to repesent each number
let numbers = [
  [
    [1, 1, 1],  // 0
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  [
    [0, 0, 1],  // 1
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1]
  ],
  [
    [1, 1, 1],  // 2
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1]
  ],
  [
    [1, 1, 1],  // 3
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ],
  [
    [1, 0, 1],  // 4
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1]
  ],
  [
    [1, 1, 1],  // 5
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ],
  [
    [1, 1, 1],  // 6
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  [
    [1, 1, 1],  // 7
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1]
  ],
  [
    [1, 1, 1],  // 8
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  [
    [1, 1, 1],  // 9
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ]
];

// Function to draw a number
function drawNumber(n, scale, x, y) {
  for (let i = 0; i < numbers[n].length; i++) {
    for (let j = 0; j < numbers[n][i].length; j++) {
      if (numbers[n][i][j] == 1) {
        rect(x + j*scale, y + i*scale, scale, scale);
      }
    }
  }
}

function draw_clock(obj) {
  background(50);
  fill(200);
  noStroke();
  // shift centre point to top left

  
  let scale = map(sin(TWO_PI * obj.millis / 1000), -1, 1, 10, 56);
  let scale2 = map(sin(TWO_PI * -obj.millis / 1000), -1, 1, 10, 56);
  
  scale = floor(scale);
  if (scale % 2 != 0) {
    scale = scale + 1;
  }
  scale2 = floor(scale2);
  if (scale2 % 2 != 0) {
    scale2 = scale2 + 1;
  }
  drawHours(scale);
  drawMinutes(scale2);
}
// height of numbers is scale * 5 so y pos = height/2-(scale*2.5)
function drawHours(scale){
  let hour = 11;
  let offset = 60;
  if(hour > 12){
    hour = hour - 12;
  }
  //display hours
  if(hour<9){
    drawNumber(hour, scale,  width/5 - offset,  height/2-(scale*2.5));
  } else{
    drawNumber(1, scale, width/5 -offset - (scale* 4), height/2-(scale*2.5));
    drawNumber(hour - 10, scale, width/5 - offset, height/2-(scale*2.5));
  }
}

function drawMinutes(scale){
  let minute = 55;
  //display minutes
    drawNumber(floor(minute / 10), scale,width - width/5 - (scale * 4), height/2-(scale*2.5));
    drawNumber(minute % 10, scale, width - width/5 , height/2-(scale*2.5));
}