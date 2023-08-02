/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

//change README, index.html, make some shadows


//initialise png names
var baseImg;
var oilBack;
var candleHolderGlass;
var wick;
var bgShadow;

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
  

  let hours = obj.hours;
  let mins = obj.minutes;
  let secs = obj.seconds;
  let millis = obj.millis;
  let SecsTillAlarm = obj.seconds_until_alarm;

  let nightBackground = color(18,33,43);
  let dayBackground = color(63,117,120);

  BackgroundGradient(hours, mins, nightBackground, dayBackground); //controls background gradient between day/night (changes btwn 7am-8am & 7pm-8pm)

  image(bgShadow,0,0); //insert png shadow for background

  noStroke();
  
  image(oilBack,0,0); //insert back of oil lamp

  oillamp(mins, secs, millis); //draw oil in response to minutes

  push();

  //add background shadow to base images: code idea from https://p5js.org/reference/#/p5/drawingContext
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = color(9,17,23);

  image(baseImg,0,0); //draw main image - candle clock backing, oil lamp body and hourglass body

  pop();

  hourglassSand(secs, millis); //draw hourglass sand in response to seconds

  hourglassBlock(nightBackground, dayBackground, hours, mins); //blocks the outside of the hourglass so sand looks like its contained in glass

  candle(hours, mins, secs, millis); //draw candle in response to hours

  image(candleHolderGlass,0,0); //another layer of the png - candle base holder, and glass for hourglass

  wickPosition(hours, mins, secs, millis); //controls height of candle wick
  
  //jittermaps helped me control the pulsing of the size and height of the flames (done every 500 milliseconds)
  let jittermap = map(millis, 0, 500, -1,1);
  let jittermap2 = map(millis,501,999, 1, -1);

  //I found calling candleFlame twice was the best way to brighten the glow of the flame
  let flameHeight = candleFlame(hours, mins, secs, millis, jittermap, jittermap2);
  candleFlame(hours, mins, secs, millis, jittermap, jittermap2); 

  //I found calling oilFlame twice was the best way to brighten the glow of the flame
  oilFlame(millis, jittermap, jittermap2);
  oilFlame(millis, jittermap, jittermap2);
  
  //alarm function
  alarm(SecsTillAlarm, flameHeight, millis);

}

//preload png images
function preload() {
  baseImg = loadImage("assets/MiddleBase.png");
  oilBack = loadImage("assets/OilBack.png");
  candleHolderGlass = loadImage("assets/CandleHolderandGlass.png");
  wick = loadImage("assets/Wick.png");
  bgShadow = loadImage("assets/ShadowBG.png")
}

//controls background gradient between day/night (changes btwn 7am-8am & 7pm-8pm)
function BackgroundGradient(hours, mins, nightBackground, dayBackground) {
  
  let hour_fraction = mins/60;
  let backgroundColour;

  if (hours >= 7 && hours < 8){
    //sunrise
    backgroundColour = lerpColor(nightBackground, dayBackground, hour_fraction);
    background(backgroundColour)
  } else if (hours >= 19 && hours < 20){
    //sunset
    backgroundColour = lerpColor(dayBackground, nightBackground, hour_fraction);
    background(backgroundColour)
  } else if (hours >= 8 && hours < 20){
    //day
    background(dayBackground);
  } else {
    //night
    background(nightBackground);
  }
}

//controls height of candle in response to hours
function candle(hours, mins, secs, millis){

  fill(235,232,199) //cream

  //maps for daytime hours, night hours and specific map for height of clock during 12am/12pm 
  //extra map to return the height of the candle to beginning
  let candleHeightday = map(hours+mins/60, 0, 11, -315, -58); 
  let candleHeightnight = map(hours+ mins/60, 12, 23, -315, -58);
  let HeightAtTwelve = map(mins+secs/60, 0, 55,-36, -30);
  let returnHeight = map(secs+millis/1000, 55, 60, -30, -291);
  
  //conditional statements for candle height as candle clock starts at 1 rather than 12
  //specific statments were needed for 12 am and 12pm
  if (hours == 0 ) {
    if (mins==59 && secs >=55) {
      //returns height of candle in last 5 seconds of the hour
      rect(167.5, 430, 52.5, returnHeight, 8);
    } else {
      //decreases height of candle during the hour
      rect(167.5, 430, 52.5, HeightAtTwelve, 8);
    }
  } else if  (hours == 12) {
    if (mins==59 && secs >=55) {
      //returns height of candle in last 5 seconds of the hour
      rect(167.5, 430, 52.5, returnHeight, 8);
    } else {
      //decreases height of candle during the hour
      rect(167.5, 430, 52.5, HeightAtTwelve, 8);
    }
  } else if (hours >= 1 && hours <= 11){
    //controls candle Height during day
    rect(167.5, 430, 52.5, candleHeightday, 8);
  } else
    //controls candle Height during night
    rect(167.5, 430, 52.5, candleHeightnight, 8);

}
  


//controls position of wick on candle
function wickPosition(hours, mins, secs, millis){
  
  //maps for daytime hours, night hours and specific map for position of wick during 12am/12pm 
  //extra map to return the position of wick to beginning
  let wickHeightday = map(hours+mins/60, 0, 11, -278, -21); //map mins to 'oil height' 
  let wickHeightnight = map(hours+mins/60, 12, 23, -278, -21);
  let HeightAtTwelve = map(mins+secs/60, 0, 60, 1, 7);
  let returnHeight = map(secs+millis/1000,55,60, 7, -254);

  //conditional statements for placement of wick as candle clock starts at 1 rather than 12
  //specific statments were needed for 12 am and 12pm
  if (hours == 0 ) {
    if (mins==59 && secs >=55) {
      //returns height of wick in last 5 seconds of the hour
      image(wick, 0, returnHeight);
    } else {
      //decreases height of wick during the hour
      image(wick, 0, HeightAtTwelve);
    }
  } else if (hours == 12) {
    if (mins==59 && secs >= 55) {
      //returns height of wick in last 5 seconds of the hour
      image(wick, 0, returnHeight);
    } else {
      //decreases height of wick during the hour
      image(wick, 0, HeightAtTwelve);
    }
  } else if (hours >= 1 && hours <= 11){
    //controls wick Height during day
    image(wick, 0, wickHeightday);  
  } else {
    //controls wick Height during night
    image(wick, 0, wickHeightnight);
  }
}

//draws candle flame pulsing at the correct height (follows the candle height)
function candleFlame(hours, mins, secs, millis, jitter, revjitter) {
  push();

  let flameHeight; // by 'height' i'm referring to the yPos which follows the height of the candle
  let colorsList = [color(241,115,0), color(255, 150, 0, 100), color(255,214,10, 50)]; //array for flame colours
  let xPos = 194; //x pos of flame
  let size = 25; //determines outer flame ellipse size
  
  //glow effect via https://www.youtube.com/watch?v=iIWH3IUYHzM&t=88s
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(252,168,58);

  //conditional statements for placement of flame as candle clock starts at 1 rather than 12
  //specific statments were needed for 12 am and 12pm
  if (hours == 0 ) {
    if (mins==59 && secs >=55) {
      //returns Ypos of flame in last 5 seconds of the hour
      flameHeight = map(secs+millis/1000,55,60, 381, 120);
    } else {
       //decreases Ypos of flame during the hour
      flameHeight = map(mins+secs/60, 0, 60, 375, 381);
    }
  } else if (hours == 12) {
    if (mins==59 && secs >=55) {
      //returns Ypos of flame in last 5 seconds of the hour
      flameHeight = map(secs+millis/1000,55,60, 381, 120);
    } else {
      //decreases Ypos of flame during the hour
      flameHeight = map(mins+secs/60, 0, 60, 375, 381);
    }
  } else if (hours >= 1 && hours <= 11){
    //controls flame Height during day
    flameHeight = map(hours+mins/60, 0, 11, 98, 350);
  } else {
    //controls flame Height during day
    flameHeight = map(hours+mins/60, 12, 23, 98, 350);   
  }

  //draws 3 rings to flame in a loop
  for (let i = 0; i < 3; i++) {
    //flame rings size and height pulse with jitter (every half second)
    if (millis >= 0 && millis <= 500) {
      size += jitter;
      flameHeight-= jitter/2;
    } else {
      size += revjitter;
      flameHeight-= revjitter/2;
    }
    //fill using array
    fill(colorsList[i]); 
    ellipse(xPos, flameHeight, size, size+5);
    size = size - 10;
    flameHeight+= 2;
  }

  pop()
  return flameHeight; //return to use for the alarm function
  
}


//draws oil inside lamp in relation to minutes
function oillamp(mins, secs, millis){

  fill(255,224,71); //yellow
  let oilHeight = map(mins+secs/60, 0, 59, -190, -2); //map mins to 'oil height' 
  let returnHeight = map(secs+millis/1000, 55, 59, -2, -155); //return map for 'refilling' the oil


  if (mins==59 && secs >=55) {
    //return to 'full' height in last 5 secs of minute
    rect(450, 235, 60, returnHeight, 10);
  } else {
    rect(450, 235, 60, oilHeight, 10);
  }

}

//draws flame for oil lamp which pulses 
function oilFlame(millis, jitter, revjitter) {
  push();

  let flameHeight = 225; //yPos of flame
  let colorsList = [color(241,115,0), color(255, 150, 0, 100), color(255,214,10, 50)];
  let xPos = 605; //x pos of flame
  let size = 25; //determines outer ring of flame size
  

  //glow effect via https://www.youtube.com/watch?v=iIWH3IUYHzM&t=88s
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(252,168,58);


  //draw rings of flame in loop, pulsing in size + height every 500 milliseconds
  for (let i = 0; i < 3; i++) {
    if (millis >= 0 && millis <= 500) {
      size += jitter;
      flameHeight-= jitter/2;
    } else {
      size += revjitter;
      flameHeight-= revjitter/2;
    }
  
    fill(colorsList[i]);
    ellipse(xPos, flameHeight, size, size+7);
    size = size - 10;
    flameHeight+= 2;
}
pop()
}

//determines hourglass sand size & position
function hourglassSand(secs, millis){

  //maps seconds to the height of the sand in top part of hourglass
  let TopSandHeight = map(secs+millis/1000, 0, 55,-110, -1);
  let TopSandReturnHeight = map(secs+millis/1000, 56, 60, -1, -110);

  //maps seconds to the width of the sand in top part of hourglass
  let TopSandWidth = map(secs+millis/1000, 0, 55, 114.5, 14);
  let TopSandReturnWidth = map(secs+millis/1000, 56, 60, 14, 114.5);

  //maps seconds to the x position of the sand in top part of hourglass
  let TopSandXPos = map(secs+millis/1000, 0, 55, 720, 770);
  let TopSandReturnXPos = map(secs+millis/1000, 56, 60, 770, 720)

  //maps seconds to the height of the sand in bottom part of hourglass
  let BottomSandHeight = map(secs+millis/1000, 0, 55, 0, -80);
  let BottomSandReturnHeight = map(secs+millis/1000, 56, 60, -80, 0)

  //maps seconds to the width of the sand in bottom part of hourglass
  let BottomSandWidth = map(secs+millis/1000, 0, 28, 100, 124);
  let BottomSandReturnWidth = map(secs+millis/1000, 56, 59, 124, 100);

  //maps seconds to the x position of the sand in bottom part of hourglass
  let BottomSandXPos = map(secs+millis/1000, 0, 28, 728, 714.5);
  let BottomSandReturnXpos = map(secs+millis/1000, 56, 59, 714.5, 728);

  //maps 1 second to the sand droplet y position
  let dropSandY = map(millis, 0, 999, 244, 434);  
  

  if (secs >= 56) {
    //gradual increase to full upper part of hourglass at 56 seconds
    rect(TopSandReturnXPos, 245, TopSandReturnWidth, TopSandReturnHeight, 10);
    rect(BottomSandReturnXpos, 434, BottomSandReturnWidth, BottomSandReturnHeight, 20);

  } else if (secs <= 28) {
    //decrease upper section at normal rate while bottom sand expands to fill lower section in first 28 seconds
    rect(TopSandXPos, 245, TopSandWidth, TopSandHeight, 10);
    rect(BottomSandXPos, 434, BottomSandWidth, BottomSandHeight, 20);

  } else {
    //increase bottom section, decrease upper section at normal rate
    rect(TopSandXPos, 245, TopSandWidth, TopSandHeight, 10);
    rect(714.5, 434, 124, BottomSandHeight, 20);
  }

  //falling sand drop
  ellipse(777, dropSandY, 4, 6);



}

//blocks the outside of the hourglass so sand looks like its contained in glass
function hourglassBlock(nightBackground, dayBackground, hours, mins){
  push();

  let hour_fraction = mins/60;
  let backgroundColour;

  //has to change colours in the same manner as the background gradient to blend in
  if (hours >= 7 && hours < 8){
    //sunrise
    backgroundColour = lerpColor(nightBackground, dayBackground, hour_fraction);
    fill(backgroundColour)
  } else if (hours >= 19 && hours < 20){
    //sunset
    backgroundColour = lerpColor(dayBackground, nightBackground, hour_fraction);
    fill(backgroundColour)
  } else if (hours >= 8 && hours < 20){
    //day
    fill(dayBackground);
  } else {
    //night
    fill(nightBackground);
  }

  //left of hourglass
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

  //right of hourglass
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
}

function alarm(SecsTillAlarm, CandleflameHeight, millis){
  push();
  //two maps to control the height/width of the glow that appears on the candle (starts growing 10 secs before alarm)
  let glowSizeWidth = map(SecsTillAlarm,10,0,0,40);
  let glowSizeHeight = map(SecsTillAlarm,10,0,0,50);

  //maps to sink the Xpos of the glow so that it stays in the correct position over the flames
  let CandleGlowXpos = map(SecsTillAlarm,10,0,CandleflameHeight,CandleflameHeight-15);
  let OilGlowXpos = map(SecsTillAlarm,10,0,228,217);

  let yellowFlame = color(255,224,71,60);
  let orangeFlame = color(252,168,58,120);
  

  //glow effect via https://www.youtube.com/watch?v=iIWH3IUYHzM&t=88s
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(255,255,255);

  if (SecsTillAlarm == 0){
    //alarm going off - flashes every odd/even millisecond
    if (millis%2==0){
      fill(yellowFlame);
    } else {
      fill(orangeFlame); 
    }
    //I liked the effect of layering the ellipses so I called them twice.
    ellipse(194, CandleflameHeight-15,40,50); //ellipse over candle flame
    ellipse(194, CandleflameHeight-15,40,50); //ellipse over candle flame

    ellipse(605,217,40,50); //ellipse over oil lamp flame
    ellipse(605,217,40,50); //ellipse over oil lamp flame
 

  } else if (SecsTillAlarm > 0 && SecsTillAlarm <= 10) {
    //10 seconds until alarm, light grows
    fill(yellowFlame);
    ellipse(194, CandleGlowXpos, glowSizeWidth, glowSizeHeight); //candle flame grows
    ellipse(605, OilGlowXpos, glowSizeWidth,glowSizeHeight);
  } else {
    //no alarm
  }

  pop();


}