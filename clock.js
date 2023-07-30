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
  
  let backgroundColour = color(29, 62, 70)
  background(backgroundColour); //  dark blue
  noStroke();
 
  let hours = obj.hours;
  let mins = obj.minutes;
  let secs = obj.seconds;
  let millis = obj.millis;
  
  image(oilBack,0,0); //insert back of oil lamp

  oillamp(mins, secs, millis); //draw oil response to minutes

  image(baseImg,0,0); //draw main image

  hourglassSand(secs, millis);
  hourglassBlock(backgroundColour);

  candle(hours, mins, secs, millis); //draw candle in response to hours

  //hourglass(secs); //draw hourglass in response to seconds
  image(candleHolderGlass,0,0);
  wickPosition(hours, mins, secs, millis);
  
 
  textSize(40);
  textAlign(CENTER, CENTER);
  text("hours = " + hours, width / 2, 100);
  text("minutes = " + mins, width / 2, 150);
  text("seconds = " + secs, width / 2, 200);
  
  let jittermap = map(millis, 0, 500, -1,1);
  let jittermap2 = map(millis,501,999, 1, -1);
  candleFlame(hours, mins, secs, millis, jittermap, jittermap2);
  candleFlame(hours, mins, secs, millis, jittermap, jittermap2); //I found calling twice was the best way to brighten the glow of the flame

  oilFlame(millis, jittermap, jittermap2);
  oilFlame(millis, jittermap, jittermap2);
  

}

//add smooth fractions
//make sure candle respawns after 12
//make it glow?
//flames
//check image is uploaded properly - week 3 lecture 1

function preload() {
  baseImg = loadImage("assets/MiddleBase.png");
  oilBack = loadImage("assets/OilBack.png");
  candleHolderGlass = loadImage("assets/CandleHolderandGlass.png");
  wick = loadImage("assets/Wick.png");
}




//controls height of candle in response to hours
function candle(hours, mins, secs, millis){
  //if 1-12, if 12-23
  //const switchs = 272;

  fill(235,232,199) //cream

  let candleHeightday = map(hours+mins/60, 0, 11, -315, -58); //map mins to 'oil height' 
  let candleHeightnight = map(hours+ mins/60, 12, 23, -315, -58);
  let HeightAtTwelve = map(mins+secs/60, 0, 55,-36, -30);
  let returnHeight = map(secs+millis/1000, 55, 60, -30, -291);
  
  
  //conditional statements as clock starts at 0 rather than 1 (top of candle clock)
  if (hours == 0 ) {
    if (mins==59 && secs >=55) {
    rect(167.5, 430, 52.5, returnHeight, 8);
    } else {
    rect(167.5, 430, 52.5, HeightAtTwelve, 8);
    }
} else if  (hours == 12) {
  if (mins==59 && secs >=55) {
    rect(167.5, 430, 52.5, returnHeight, 8);
  } else {
  rect(167.5, 430, 52.5, HeightAtTwelve, 8);
  }
} else if (hours >= 1 && hours <= 11){

    rect(167.5, 430, 52.5, candleHeightday, 8);
} else
    rect(167.5, 430, 52.5, candleHeightnight, 8);

}
  


//controls position of wick on candle
function wickPosition(hours, mins, secs, millis){
  
  let wickHeightday = map(hours+mins/60, 0, 11, -278, -21); //map mins to 'oil height' 
  let wickHeightnight = map(hours+mins/60, 12, 23, -278, -21);
  let HeightAtTwelve = map(mins+secs/60, 0, 60, 1, 7);
  let returnHeight = map(secs+millis/1000,55,60, 7, -254);

  //conditional statements as clock starts at 0 rather than 1 (top of candle clock)
  if (hours == 0 ) {
    if (mins==59 && secs >=55) {
      image(wick, 0, returnHeight);
    } else {
      image(wick, 0, HeightAtTwelve);
    }
} else if (hours == 12) {
  if (mins==59 && secs >= 55) {
    image(wick, 0, returnHeight);
  } else {
    image(wick, 0, HeightAtTwelve);
  }
} else if (hours >= 1 && hours <= 11){
    image(wick, 0, wickHeightday);  
} else
    image(wick, 0, wickHeightnight);
}

function candleFlame(hours, mins, secs, millis, jitter, revjitter) {

  push();
  //let flameHeightDay = map(hours, 0, 11, 300, 100); //map mins to 'oil height' 
  let flameHeight;
  //let flameHeightNight = map(hours, 12, 23, 300, 100);
  let colorsList = [color(255, 100, 0, 150), color(255, 150, 0, 100), color(255, 200, 0, 50)];
  let x = 194; //x pos of flame
  let size = 25; //determines main flame size
  
    //glow effect via https://www.youtube.com/watch?v=iIWH3IUYHzM&t=88s
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(252,168,58);

//conditional statements as clock starts at 0 rather than 1 (top of candle clock)
  if (hours == 0 ) {
    if (mins==59 && secs >=55) {
      flameHeight = map(secs+millis/1000,55,60, 381, 120);
    } else {
      flameHeight = map(mins+secs/60, 0, 60, 375, 381);
    }
} else if  (hours == 12) {
    if (mins==59 && secs >=55) {
      flameHeight = map(secs+millis/1000,55,60, 381, 120);
    } else {
      flameHeight = map(mins+secs/60, 0, 60, 375, 381);
    }
} else if (hours >= 1 && hours <= 11){
    flameHeight = map(hours+mins/60, 0, 11, 98, 350);
} else
   flameHeight = map(hours+mins/60, 12, 23, 98, 350);   
    
  for (let i = 0; i < 3; i++) {

    if (millis >= 0 && millis <= 500) {
      size += jitter;
      flameHeight-= jitter/2;
    } else {
      size += revjitter;
      flameHeight-= revjitter/2;
    }
    
    fill(colorsList[i]);
    ellipse(x, flameHeight, size, size+5);
    size = size - 10;
    flameHeight+= 2;
}
pop()
}


//draws oil inside lamp in relation to minutes
function oillamp(mins, secs, millis){
  fill(252, 168, 58); //orange
  push();

  //glow effect via https://www.youtube.com/watch?v=iIWH3IUYHzM&t=88s
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(252,168,58);

  let oilHeight = map(mins+secs/60, 0, 59, -190, -2); //map mins to 'oil height' 
  let returnHeight = map(secs+millis/1000, 55, 59, -2, -155);


  if (mins==59 && secs >=55) {
    //return to 'full' height in last 5 secs on minute
    rect(450, 235, 60, returnHeight, 10);
  } else {
  rect(450, 235, 60, oilHeight, 10);
  }
  pop();
}


function oilFlame(millis, jitter, revjitter) {

  push();
  //let flameHeightDay = map(hours, 0, 11, 300, 100); //map mins to 'oil height' 
  let flameHeight = 225;
  //let flameHeightNight = map(hours, 12, 23, 300, 100);
  let colorsList = [color(255, 100, 0, 150), color(255, 150, 0, 100), color(255, 200, 0, 50)];
  let x = 605; //x pos of flame
  let size = 25; //determines main flame size
  
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(252,168,58);


  for (let i = 0; i < 3; i++) {

    if (millis >= 0 && millis <= 500) {
      size += jitter;
      flameHeight-= jitter/2;
    } else {
      size += revjitter;
      flameHeight-= revjitter/2;
    }
  
    fill(colorsList[i]);
    ellipse(x, flameHeight, size, size+7);
    size = size - 10;
    flameHeight+= 2;
}
pop()
}

function hourglassSand(secs, millis){

  let TopSandHeight = map(secs+millis/1000, 0, 55,-110, -1);
  let TopSandReturnHeight = map(secs+millis/1000, 56, 60, -1, -110);

  let TopSandWidth = map(secs+millis/1000, 0, 55, 114.5, 14);
  let TopSandReturnWidth = map(secs+millis/1000, 56, 60, 14, 114.5);

  let TopSandXPos = map(secs+millis/1000, 0, 55, 720, 770);
  let TopSandReturnXPos = map(secs+millis/1000, 56, 60, 770, 720)

  let BottomSandHeight = map(secs+millis/1000, 0, 55, 0, -80);
  let BottomSandReturnHeight = map(secs+millis/1000, 56, 60, -80, 0)

  let BottomSandXPos = map(secs+millis/1000, 0, 28, 728, 714.5);
  let BottomSandReturnXpos = map(secs+millis/1000, 56, 59, 714.5, 728);

  let BottomSandWidth = map(secs+millis/1000, 0, 28, 100, 124);
  let BottomSandReturnWidth = map(secs+millis/1000, 56, 59, 124, 100);

  let dropSandHeight = map(millis, 0, 999, 244, 434);  
  

  if (secs >= 56) {
    //gradual increase to full after 56 seconds
    rect(TopSandReturnXPos, 245, TopSandReturnWidth, TopSandReturnHeight, 10);
    rect(BottomSandReturnXpos, 434, BottomSandReturnWidth, BottomSandReturnHeight, 20);

  } else if (secs <= 28) {
    //increase top and bottom sand at normal rate but bottom sand expands to fill lower glass in first 28 seconds
    rect(TopSandXPos, 245, TopSandWidth, TopSandHeight, 10);
    rect(BottomSandXPos, 434, BottomSandWidth, BottomSandHeight, 20);

  } else {
    //increase everything at normal rate
    rect(TopSandXPos, 245, TopSandWidth, TopSandHeight, 10);
    rect(714.5, 434, 124, BottomSandHeight, 20);
  }


 // if (secs <= 28) {
    //lower sand
   // rect(BottomSandXPos, 434, BottomSandWidth, BottomSandHeight, 20);
  //} else {
    //lower sand
    //rect(714.5, 434, 124, BottomSandHeight, 20);
  //}


  //falling sand drop
  ellipse(777, dropSandHeight, 4, 6);


   
    
    


  

}

//draws 'sand' in hourglass in relation to seconds
function hourglassBlock(backgroundColour, mins,secs, millis){
  push();

  fill(backgroundColour); //block out the outside of the hourglass
  //left
  beginShape();
  vertex(720, 150);
  vertex(770, 245);
  vertex(770, 248);
  vertex(767, 260);
  vertex(755, 280);
  vertex(725, 335);
  vertex(720, 350);
  vertex(717, 370);
  vertex(715, 390);
  vertex(713, 425);
  vertex(708, 420);
  endShape(CLOSE);

  //right
  beginShape();
  vertex(834, 150);
  vertex(791, 230);
  vertex(786, 240);
  vertex(784, 245);
  vertex(784, 250);
  vertex(790, 265);
  vertex(797, 280);
  vertex(810, 300);
  vertex(824, 325);
  vertex(831, 340);
  vertex(835, 355);
  vertex(836, 370);
  vertex(838, 390);
  vertex(838, 425);
  vertex(845, 425);
  endShape(CLOSE);

  
  
  pop();
  //fill(252, 168, 58); //orange
  //let grow = map(secs, 0, 59 )
  //triangle(600, 200, 750, 230, 750, 100, 30)
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
