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
    background(204);

    background(0); //  beige
    fill(128,100,100); // dark grey
    textSize(25);
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text( millis, 10, 82);

    let hourBarWidth   = map(hours, 0, 23, 0, width);
    let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);
    let millisBarWidth = map(millis, 0, 1000, 0, width);



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

 


    
}
