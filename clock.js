/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
var baseImg;
var oilBack;
var candleHolderGlass;
var wick;


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
  
  background(29, 62, 70); //  dark blue
  noStroke();
 
  let hours = obj.hours;
  let mins = obj.minutes;
  let secs = obj.seconds;
  let millis = obj.millis;
  
  image(oilBack,0,0); //insert back of oil lamp

  oillamp(mins); //draw oil response to minutes

  image(baseImg,0,0); //draw main image

  candle(hours); //draw candle in response to hours

  //hourglass(secs); //draw hourglass in response to seconds
  image(candleHolderGlass,0,0);
  wickPosition(hours);
  
 
  textSize(40);
  textAlign(CENTER, CENTER);
  text("hours = " + hours, width / 2, 100);
  text("minutes = " + mins, width / 2, 150);
  text("seconds = " + secs, width / 2, 200);
  
  oilFlame(193, height/2, 30,millis, hours);
  

}

//add smooth fractions
//make sure candle respawns after 12
//make it glow?
//flames
//check image is uploaded properly - week 3 lecture 1






//controls height of candle in response to hours
function candle(hours){
  //if 1-12, if 12-23
  //const switchs = 272;

  fill(235,232,199) //cream

  let candleHeightday = map(hours, 0, 12, -315, -58); //map mins to 'oil height' 
  let candleHeightnight = map(hours, 12, 23, -315, -58);

  if (hours == 0 ) {
    rect(168, 430, 51, -38, 8);
} else if  (hours == 12) {
  rect(168, 430, 51, -38, 8);
} else if (hours >= 1 && hours <= 11){
  rect(168, 430, 51, candleHeightday, 8);
    //rect(168, 430, 51, candleHeightnight, 8);
} else
  rect(168, 430, 51, candleHeightnight, 8);

}
  


//controls position of wick on candle
function wickPosition(hours){
  
  let wickHeightday = map(hours, 0, 12, -278, -21); //map mins to 'oil height' 
  let wickHeightnight = map(hours, 12, 23, -278, -21);

  if (hours == 0 ) {
    image(wick, 0, 0);
} else if  (hours == 12) {
    image(wick, 0, 0);
} else if (hours >= 1 && hours <= 11){
    image(wick, 0, wickHeightday);  
    //rect(168, 430, 51, candleHeightnight, 8);
} else
    image(wick, 0, wickHeightnight);
  //let wickHeight = map(hours, 0, 12, -252, 0);
  //image(wick, 0, wickHeight);  
}







function oillamp(mins){
  fill(252, 168, 58); //orange
  push();

  //glow effect via https://www.youtube.com/watch?v=iIWH3IUYHzM&t=88s
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(252,168,58);

  let oilHeight = map(mins, 0, 59, -190, -2); //map mins to 'oil height' 
  rect(450, 235, 60, oilHeight, 10);
  pop();
}


function hourglass(secs){
  fill(252, 168, 58); //orange
  let grow = map(secs, 0, 59 )
  

  triangle(600, 200, 750, 230, 750, 100, 30)
}

function preload() {
  baseImg = loadImage("assets/MiddleBase.png");
  oilBack = loadImage("assets/OilBack.png");
  candleHolderGlass = loadImage("assets/CandleHolderandGlass.png");
  wick = loadImage("assets/Wick.png");
}



function oilFlame(x, y, size, millis, hours) {
  
  //spawn a new ball every millis
  //lit for a millisecond
  let flameHeightDay = map(hours, 0, 22, 100, 300);
  let numEllipse = map(millis, 0, 999, 1, 10);

  //for (let i = 0; i < numEllipse; i++) {
  //  let jitter = noise(millis * 0.05) * 10;

  //}

  //let flamePos = map(millis, 0, 999, 193, hours);

  let colorsList = [color(255, 100, 0, 200), color(255, 150, 0, 150), color(255, 200, 0, 100)];

  for (let i = 0; i < 3; i++) {
    let jitter = noise(millis+i);
    x = x + jitter;
    flameHeightDay = flameHeightDay + jitter;
    let ellipseSize = size + jitter;
    
    let alpha = map(i, 0, 2, 255, 50);

    

    fill(colorsList[i]);
    ellipse(x, flameHeightDay, ellipseSize, ellipseSize);
    size = size - 10;
    flameHeightDay+= 2;
   // y -= size * 0.6;
}


}
  //fill(200); // dark grey
  //textSize(40);
  //textAlign(CENTER, CENTER);
  //text("seconds = " + seconds, width / 2, 200);

  

  //fill(249, 140, 255);// pink
  //ellipse(width / 3, 350, 150);

  //let minRad = map(mins,0,59, 0,150)
  //fill(140, 255, 251) // blue
  //ellipse(width / 2, 350, minRad);

  //let secondsRadius = map(seconds,0,59, 0,150)
  //fill(175, 133, 255); // purple
  //ellipse(width / 3 * 2, secondsRadius, secondsRadius);
