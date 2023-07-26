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

//let customFrmaeCount = obj.seconds * 60;
let customFrameCount = 0;
let init = false;
var maxSize = 200;
var maxSizeConst = 200;
var minSize = 40;
var minSizeConst = 40;
var alramActive = false;

function draw_clock(obj) {
  //setup
  background(50);
  angleMode(DEGREES);
  fill(255)
  stroke(255);
  textSize(29)
  translate(width/2,height/2);
  // waiting for seconds to equal zero until starting
  if(init){
    text("The clock will start in "+ (60 - obj.seconds), -150, 0);
    if(obj.seconds == 0){
      init = false;
    }
    
  }else {
    textSize(20);
    text(obj.hours + " : " + obj.minutes +  " : " + obj.seconds + "   alarm -" + obj.seconds_until_alarm, -350, 0);
    noFill();
    strokeWeight(4);
    var highlight = true;
    var altSeconds = obj.seconds%2;
    
    var numberOfShapes = 8;
    var elements = 12;
    var rotation = customFrameCount / (10 * elements);
    
    var alramTimer = obj.seconds_until_alarm;
    if(alramTimer== 0){
      alramActive = true;
    }
      
    if(alramActive){
      maxSize+= 0.75;
      minSize-= 0.06;
      
    } else {
      if(maxSize > maxSizeConst){
        maxSize-= 0.5;
      }
      if(minSize < minSizeConst){
        minSize += 0.5;
      }
      
    }
    var bool = true;
    if(frameCount > 200){
      bool = true;
    }
    push();
    for(var i = 0; i < numberOfShapes; i++){
      strokeWeight(4);
      if(alramActive){
        if(highlight){
          stroke(255,255,50);
          highlight = false;
        } else {
          stroke(255,10+ i * 20 ,10 + i* 20);
        }
      } else {
        stroke(240);
      }
      
      beginShape();
      for(var j = 0; j < 360; j += 10){
        var rad = map(sin(j * elements + customFrameCount) , -1, 1, minSize , maxSize);
        var x = rad * cos(j);
        var y = rad * sin(j);
        vertex(x,y);
        // make alarm finish at perfect time 
        if(rad == minSize && alramTimer!= 0){
          alramActive = false;
        }
      }
      endShape(CLOSE);
      strokeWeight(32);
      ellipseMode(RADIUS);
      ellipse(0, 0, rad, rad);
      if(true){
        rotate(rotation);
  
      }
      
    }
    pop();
    strokeWeight(2);
    stroke(255);
    noFill(255);
    textSize(15);
    textAlign(CENTER, CENTER);
    // tune correction 
    var hours = obj.hours
    //make time 12 hour
    if(hours > 11){
      hours -=12;
    } 
    //rotate 90 degrees
    hours = hours -3;
    if(hours < 0){
      hours  = 12 + hours;
    } 
  for (var i = 0; i < 12; i++) {
    var angle = map(i, 0, 12, 0, 360);
    var x = rad * cos(angle);
    var y = rad * sin(angle);
    
    if(i == hours){
      fill(50);
    } else{
      noFill();
    }
    push();
    stroke(50);
    translate(x, y);
    ellipse(0, 0, 5, 5);
    pop();
}

    customFrameCount++;
  }
  
  
}
