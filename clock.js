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

  var theta = 0;
  var radius = 59;

  //Time Data Initials
  var s = obj.seconds;
  var m = obj.minutes;
  var h = obj.hours;

  //setup
  background(0);
  translate(width/2, height/2);

  //re-map time data to these values
  //let arcH = map(h, 0, 23, 0, 360);
  //let arcM = map(m, 0, 59, 0, 360);

  theta = map(s, 0, 59, 0, 360);
  var xS = cos(theta)*radius
  var yS = sin(theta)*radius

  ellipse(xS,yS,10,10);
}
