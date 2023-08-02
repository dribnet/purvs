/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let bodyMain;
let backgroundMain;
let soulMain;
let soulVariable = 0;
let bodyMainValue = 0;
let backgroundMainValue = 0;
let _myVariable = 0;

function preload(){
  bodyMain = [
    loadImage("bodyMain1.png"),
    loadImage("bodyMain2.png")
  ]

  backgroundMain = [
    loadImage("background/backgroundMain1.jpg"),
    loadImage("background/backgroundMain2.png")
  ]

  soulMain = [
    loadImage("soul/soul_00.png"),
    loadImage("soul/soul_01.png"),
    loadImage("soul/soul_02.png"),
    loadImage("soul/soul_03.png"),
    loadImage("soul/soul_04.png"),
    loadImage("soul/soul_05.png"),
    loadImage("soul/soul_06.png"),
    loadImage("soul/soul_07.png"),
    loadImage("soul/soul_08.png"),
    loadImage("soul/soul_09.png"),
    loadImage("soul/soul_10.png"),
    loadImage("soul/soul_11.png"),
    loadImage("soul/soul_12.png"),
    loadImage("soul/soul_13.png"),
    loadImage("soul/soul_14.png"),
    loadImage("soul/soul_15.png"),
    loadImage("soul/soul_16.png"),
    loadImage("soul/soul_17.png"),
    loadImage("soul/soul_18.png"),
    loadImage("soul/soul_19.png"),
    loadImage("soul/soul_20.png"),
    loadImage("soul/soul_21.png"),
    loadImage("soul/soul_22.png"),
    loadImage("soul/soul_23.png"),
    loadImage("soul/soul_24.png"),


  ]
}

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

  let seconds = obj.seconds;
  let minutes = obj.minutes;
  let hours = obj.hours;
  let milliseconds = obj.millis;

  let soulMovement = map(milliseconds,0,999,5,10);

   function setMyVariable() {
    if (_myVariable !== seconds) {
      _myVariable = seconds;
      if (bodyMainValue === 0) {
        bodyMainValue = 1;
      } else if (bodyMainValue === 1) {
        bodyMainValue = 0;
      }
    }
  }

    function minuteNecklaceTimer (){
      textSize(20);
      fill(0);
      stroke(4);
      textFont('Georgia');
      text(minutes, 456, 182.5);
}

function soulVAR(){
  soulVariable = hours
}

function checkAM_PM (){
  if (hours < 12) {
    backgroundMainValue = 0;}

    if (hours > 12){
      backgroundMainValue = 1;
    }

    if (hours === 12){
      backgroundMainValue = 1;
    }
  }

print(soulVariable);
image(backgroundMain[backgroundMainValue],0,0);
image(bodyMain[bodyMainValue], 0, 0);
image(soulMain[soulVariable],0,soulMovement);

checkAM_PM();
setMyVariable(); // call lantern function
minuteNecklaceTimer(); // call minuteNecklaceTimer
soulVAR();

}