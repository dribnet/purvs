/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

function preload(){

  EarthImg = loadImage("assets/Earth.png")
  MoonImg = loadImage("assets/Moon.png")
  SatImg = loadImage("assets/Satellite.png")
  SunImg = loadImage("assets/Sun.png")
  BackgroundImg = loadImage("assets/Background.png")
  MeteorImg = loadImage("assets/Meteor.png")
}

let alarmOffset = 0;

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



  background(0); //  black background
  angleMode(DEGREES);
  fill(200); // dark grey
  textSize(40);
  //textAlign(CENTER, CENTER);
  let Seconds = obj.seconds;
  let Minutes = obj.minutes;
  let Hours = obj.hours;
  let Milliseconds = obj.millis;
  let Alarm =  obj.seconds_until_alarm;
  
  image(BackgroundImg, 0,0,960,500);

  let rotMilli = map(Milliseconds, 0, 1000, 0, 360);
  let rotS = map(Seconds, 0, 60, -90, 270);
  let rotM = map(Minutes, 0, 60, -90, 270);
  let rotH = map(Hours, 0 , 12, 0, 360);

  push();
  translate(480,250);
  rotate(rotH);
  image(SunImg,-85, -85,170,170);
  pop();

  push();
  translate(480,250);
  rotate(rotM); // rotates on the minute
  image(EarthImg,125,-25,50); //Earth

  push();
  translate(150,0);
  rotate(rotMilli); 
  image(MoonImg,35,-15,30); //Moon
  pop();
  pop();

  push();
  translate(480,250);
  rotate(rotS);
  image(SatImg,225,0,20,40); //Satellite
  pop();

  
  //if statement for alarm countdown
  let ellipseSecs = map(Milliseconds/2,0,999,0,2300);
  if (Alarm>0){
    image(MeteorImg,ellipseSecs-20,50-20,35,35);
    image(MeteorImg,(ellipseSecs/1.2)-20,100-20,40,40);
    image(MeteorImg,(ellipseSecs/1.05)-25,150-25,50,50);
    image(MeteorImg,ellipseSecs*1.2-30,200-30,60,60);
    image(MeteorImg,(ellipseSecs/1.1)-20,275-20,35,35);
    image(MeteorImg,ellipseSecs-10,300-10,20,20);
    image(MeteorImg,ellipseSecs-25,350-25,50,50);
    image(MeteorImg,(ellipseSecs*1.2)-20,450-20,45,45);
    alarmOffset = 0;
   }

   
   let RocketUpSize = map(Seconds,0,60,50,150);
   let RocketDownSize = map(Seconds,0,60,150,50);
   
  let RocketSize = 100
  
   if(Alarm ==0){

     if(alarmOffset<460){
      rect(alarmOffset, 200, RocketUpSize, RocketUpSize/2);
      alarmOffset = alarmOffset + 3;
  
     }else {

      rect(alarmOffset, 200, RocketDownSize, RocketDownSize/2);
      alarmOffset = alarmOffset + 3;

     }
 
  }
  


}
