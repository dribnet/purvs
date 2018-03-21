/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

  //time data
  var s = obj.seconds;
  var m = obj.minutes;
  var h = obj.hours;

  //setup
  translate(width/2,height/2)
  noFill();
  background(250);

  //debug
  // text("Hour: "   + h, 10, 22);
  // text("Minute: " + m, 10, 42);
  // text("Second: " + s, 10, 62);
  //text("Millis: " + m, 10, 82);

  rotate(180);
  //re-map time data to these values
  let arcH = map(h, 0, 23, 0, 360);
  let arcM = map(m, 0, 59, 0, 360);
  let arcS = map(s, 0, 59, 0, 360);

  //display hour large size white
  strokeWeight(50);
  stroke(200);
  arc(0, 0, 420, 420, 0, arcH);

  //display minutes med size gray
  strokeWeight(30);
  stroke(150);
  arc(0, 0, 320, 320, 0, arcM);


  //display seconds small size dark grey
  strokeWeight(25);
  stroke(100);
  arc(0, 0, 200, 200, 0, arcS);
}
