/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
var x
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
    let alarm = obj.seconds_until_alarm

    if (alarm == 0) {
    if (second % 2 == 0) {
      background(50, 50, 55, 100);      
    } else {
      background(222, 223, 239, 100);      
    }
  }
  else {
    background(50);
  }
  var x = 0;
  var speed = 5;
  noStroke();
  // is alarm going off in next 15 seconds
  if (alarm > 0 && alarm < 15.0) {
    //rotate(millisValue/60;
    noFill();
    stroke(255);
    ellipse(x, 250, 200, 200);
    if (x > width || x < 0) {
        speed = speed * -3
    }
    x = x + speed
  }
    //background(204);

    background(222,222,226,100); //  beige
    fill(17,17,17,100); // dark grey
    //text("Second: " + seconds, 10, 62);
    //text("Millis: " + millis, 10, 82);
    textSize(20);
    textStyle(BOLD);
    text( hours, 200, 250);
    text( minutes, 650, 250);

//
//    let hourBarWidth   = map(hours, 0, 23, 0, width);
//    let minuteBarWidth = map(minutes, 0, 59, 0, width);
//    let secondBarWidth = map(seconds, 0, 59, 0, width/3);
//    let millisBarWidth = map(millis, 0, 1000, 0, width/2);
	let millisValue = map(millis, 0, 1000, 0, 360); 
    let secondsValue = map(seconds, 0, 59, 0, 360);
    let minutesValue = map(minutes, 0, 59, 0, 360);
    let hoursValue = map(hours,0, 11, 0, 360);
    noStroke();
	fill(0);
	push();
	translate(width/2, height/2);
    rotate(millisValue/60);
    if (millisValue > 0 && millisValue < 180) {
        fill(0);
    } else {fill(255);   
    };
    ellipse(0, 30, 20, 20);
    pop();

    push();
    translate(width/2, height/2);
    rotate(secondsValue/60);
    if (secondsValue > 0 && secondsValue < 180) {
      fill(255);
    } else {fill(0);
    };
    ellipse(0, 60, 30, 30);
	pop();
    
    push();
    translate(width/2, height/2);
    rotate(minutesValue/60);
    if (minutesValue > 0 && minutesValue < 180) {
      fill(0);
    } else {fill(255);
    };
    ellipse(0, 100, 40, 40);
    pop();

    // push();
    // translate(width/2, height/2);
    // rotate(hoursValue/60);
    // fill(255, 0, 0, 100);
    // acr(0, 170, 120, 120, radians(0), radians(30));
    // pop();

//    arc(width/2, height/4, hourBarWidth, 50, PI, 0);
//    fill(0);
//    arc(width/2, height/4, minuteBarWidth, 50, 0, PI);
//    fill(0)
//    arc(width/2, height/2, secondBarWidth, 50, PI, 0);
//    fill(255)
//    arc(width/2, height/2, millisBarWidth, 50, 0, PI);

    // Make a bar which *smoothly* interpolates across 1 minute.
    // We calculate a version that goes from 0...60, 
    // but with a fractional remainder:
    //let secondBarWidthChunky  = map(seconds, 0, 60, 0, width);
    //let secondsWithFraction   = seconds + (millis / 1000.0);
    //let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, width);

    //fill(100, 100, 200)
    //rect(0, 350, secondBarWidthChunky, 50);
    //fill(120, 120, 240)
    //rect(0, 400, secondBarWidthSmooth, 50);
}
