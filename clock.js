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

   

    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;
  
 background(0); //  black 

    let hourBarWidth   = map(hours, 0, 23, 0, width);
    let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);
    let millisBarWidth = map(millis, 0, 1000, 0, width);


//hour helix wave
 noStroke();
  for (var i = 0; i < 100; i++) {
    fill(hourBarWidth % 255,100,155);
    ellipse(
      250+(sin(hourBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      10,
      10);
  }
 
  noStroke();
  for (var i = 0; i < 100; i++) {
    fill(hourBarWidth % 255,100,155);
    ellipse(
      300+(-sin(hourBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      10,
      10);
  }
 
//mis helix wave
  noStroke();
  for (var i = 0; i < 100; i++) {
    fill(minuteBarWidth % 255,100,155);
    ellipse(
      400+(sin(minuteBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      10,
      10);
  }

  noStroke();
  for (var i = 0; i < 100; i++) {
    fill(minuteBarWidth % 255,100,155);
    ellipse(
      450+(-sin(minuteBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      10,
      10);
  }
 
//seconds helix wave 
  noStroke();
  for (var i = 0; i < 100; i++) {
    fill(secondBarWidth % 255,100,155);
    ellipse(
      550+(sin(secondBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      10,
      10);
  }

  noStroke();
  for (var i = 0; i < 100; i++) {
    fill(secondBarWidth % 255,100,155);
    ellipse(
      600+(-sin(secondBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      10,
      10);
  }
 

    ////milli helix wave 
  noStroke();
  for (var i = 0; i < 100; i++) {
    fill(millisBarWidth % 255,100,155);
    ellipse(
      700+(sin(millisBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      10,
      10);


  }
  
    noStroke();
  for (var i = 0; i < 100; i++) {
    fill(millisBarWidth % 255,100,155);
    ellipse(
      750+(-sin(millisBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      10,
      10);
  }


//text to show the time 
 fill(128,100,100, 150); 
    textSize(20);
    text( "Hours:  " + hours, 10, 22);
    text("Minutes:  " + minutes, 10, 42);
    text( "Seconds:  " + seconds, 10, 62);
    text( "Millis:  " + millis, 10, 82);


//ALARM function
if (alarm == 0) {

  var xwidth = map(millis, 0,1000,10,20); //millis 
    noStroke();
  for (var i = 0; i < 100; i++) {
    fill(millisBarWidth % 251,255,0);
    ellipse(
      750+(-sin(millisBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      xwidth,
      xwidth);
  }


if (alarm == 0) {

  var xwidth = map(millis, 0,1000,10,20); //millis
     noStroke();
  for (var i = 0; i < 100; i++) {
    fill(millisBarWidth % 251,255,0);
    ellipse(
      700+(sin(millisBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      xwidth,
      xwidth);
  }

if (alarm == 0) {

  var ywidth = map(seconds, 0,59,20,20); //seconds
noStroke();
  for (var i = 0; i < 100; i++) {
    fill(secondBarWidth % 251,255,0);
    ellipse(
      550+(sin(secondBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      ywidth,
      ywidth);
  }

if (alarm == 0) {

  var ywidth = map(seconds, 0,59,20,20); //seconds
 noStroke();
  for (var i = 0; i < 100; i++) {
    fill(secondBarWidth% 251,255,0);
    ellipse(
      600+(-sin(secondBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      ywidth,
      ywidth);
  }

if (alarm == 0) {

  var zwidth = map(minutes, 0,59,20,20); //minutes
noStroke();
  for (var i = 0; i < 100; i++) {
    fill(minuteBarWidth % 251,255,0);
    ellipse(
      450+(-sin(minuteBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      zwidth,
      zwidth);
  }


if (alarm == 0) {

  var zwidth = map(minutes, 0,59,20,20); //minutes
noStroke();
  for (var i = 0; i < 100; i++) {
    fill(minuteBarWidth % 251,255,0);
    ellipse(
      400+(sin(minuteBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      zwidth,
      zwidth);
  }

if (alarm == 0) {

  var awidth = map(hours, 0,23,20,20); //hours
  noStroke();
  for (var i = 0; i < 100; i++) {
    fill(hourBarWidth % 251,255,0);
    ellipse(
      250+(sin(hourBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      awidth,
      awidth);
  }

  if (alarm == 0) {

  var awidth = map(hours, 0,23,20,20); //hours 
  noStroke();
  for (var i = 0; i < 100; i++) {
    fill(hourBarWidth % 251,255,0);
    ellipse(
      300+(-sin(hourBarWidth/(i+10))*(i+0)),
      -250+(i*20),
      awidth,
      awidth);
  }

  }
}

}
 }
  } 
}
 } 
}
 }
