/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let bodyMain;
let backgroundMain;
let bodyMainValue = 0;
let _myVariable = 0;

function preload(){
  bodyMain = [
    loadImage("bodyMain1.png"),
    loadImage("bodyMain2.png")
  ]

  backgroundMain = [
    loadImage("backgroundMain1.jpg")

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
image(backgroundMain[0],0,0)
image(bodyMain[bodyMainValue], 0, 0);
setMyVariable(); // call lantern function
minuteNecklaceTimer(); // call minuteNecklaceTimer

}