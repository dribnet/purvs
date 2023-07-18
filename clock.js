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


/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(50); //  beige
  //fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
  
  noFill();
  stroke(255);
  //rotateX(sin(frameCount) * 20);
  rotateX(40);
  for(var i = 0; i < 20; i++){
    
    beginShape();
    for(var j = 0; j < 360; j+=10){
      var rad = i * 8;
      var x = rad*cos(j);
      var y = rad *sin(j);
      var z = sin(frameCount*2+i*10)*50;
      vertex(x,y,z);
      
    }
    endShape(CLOSE);
  }
  fill(200);
  noStroke();

  //let scale = map(sin(TWO_PI * obj.millis / 1000), -1, 1, 10, 50);
  //let scale2 = map(sin(TWO_PI * -obj.millis / 1000), -1, 1, 10, 50);
  let scale = 20;
  let scale2 = scale;
  scale = floor(scale);
  if (scale % 2 !== 0) {
    scale = scale + 1;
  }
  drawHours(obj, scale);
  drawMinutes(obj, scale2);

}


function drawNumber(n, scale, x, y) {
  for (let i = 0; i < numbers[n].length; i++) {
    for (let j = 0; j < numbers[n][i].length; j++) {
      if (numbers[n][i][j] == 1) {
        rect(x + j*scale - width / 2, y + i*scale - height / 2, scale, scale);
      }
    }
  }
}
// height of numbers is scale * 5 so y pos = height/2-(scale*2.5)
function drawHours(obj, scale){
  let hour = obj.hours ;
  //fix 00 time 
  if(hour == 0){
    hour = 12;
  }
  let offset = 60;
  let y = height/2;
  //let y = height/2-(scale*2.5)-130;
  if(hour > 12){
    hour = hour - 12;
  }
  //display hours
  if(hour<10){
    drawNumber(0, scale, width/2 - scale*4 - scale*13, y );
    drawNumber(hour, scale, width/2 - scale*4 - scale*8, y );
    //drawNumber(hour, scale, width/5 - offset, y );
  } else{
    drawNumber(1, scale, width/2 - scale*4 - scale*13, y);
    drawNumber(hour - 10, scale, width/2 - scale*4 - scale*8, y);
    //drawNumber(1, scale, width/5 - offset - (scale * 4), y);
    //drawNumber(hour - 10, scale, width/5 - offset, y);
  }
}

function drawMinutes(obj, scale){
  let minute = obj.minutes;
  let y = height/2;
  let offset = 20;
  //display minutes
  drawNumber(floor(minute / 10), scale, width/2 +offset + scale* 8 , y);
  drawNumber(minute % 10, scale, width/2 +offset + scale* 13 , y);
  //drawNumber(floor(minute / 10), scale, width - width/5 - (scale * 4), y);
  //drawNumber(minute % 10, scale, width - width/5 , y);
}
