/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {

	let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    background(204);

    background(220); //  beige
    fill(50); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    angleMode(DEGREES);

    let SecondFraction = map(seconds, 0, 60, 0, 1);
    let MinuteFraction = map(minutes, 0, 60, 0, 1);
    let SecondAngle = map(seconds+(millis/1000), 0, 60, 0, 360);
    let MinuteAngle = map(minutes+SecondFraction, 0, 60, 0, 360);
    let HourAngle = map(hours+MinuteFraction, 0, 24, 0, 720);
    
    translate(width/2,height/2);

    textSize(20);
    text("12", 0, -220);
    
    push();
    rotate(30);
    text("1", 0, -220);
    pop();

    push();
    rotate(60);
    text("2", 0, -220);
    pop();

    push();
    rotate(90);
    text("3", 0, -220);
    pop();

    push();
    rotate(120);
    text("4", 0, -220);
    pop();

    push();
    rotate(150);
    text("5", 0, -220);
    pop();

    push();
    rotate(180);
    text("6", 0, -220);
    pop();

    push();
    rotate(210);
    text("7", 0, -220);
    pop();

    push();
    rotate(240);
    text("8", 0, -220);
    pop();

    push();
    rotate(270);
    text("9", 0, -220);
    pop();

    push();
    rotate(300);
    text("10", 0, -220);
    pop();

    push();
    rotate(330);
    text("11", 0, -220);
    pop();

    
    
    push();
    rotate(HourAngle);
    rect(-8,-140, 16, 140);
    pop();
    
    push();
    rotate(MinuteAngle);
    rect(-8,-200, 16, 200);
    pop();
    
    push();
    rotate(SecondAngle);
    rect(-5,-200, 10,200);
    pop();





    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off


}


// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }


}


