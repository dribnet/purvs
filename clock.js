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

	var SecondAngle = 0;
	var MinuteAngle = 0;
	var HourAngle = 0;

	var second_x = 0;
	var second_y = 0;
	var minute_x = 0
	var monute_y = 0;
	var hour_x = 0;
	var hour_y = 0;
    

  	let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    // let millis = obj.millis;

    let seconds_until_alarm = obj.seconds_until_alarm;

    if (seconds_until_alarm < 0) {
        background(200,200,255); //  beige
    }
    else if (seconds_until_alarm > 0) {
        background(255, 200, 200); //  red        
    }
    else {
        if(seconds % 2 == 0) {
            background(255, 0, 0); //  red
        }
        else {
            background(100, 100, 100); //  red
        }
    }

    // background(204);

    // background(255,255,200); //  beige
    // fill(128,100,100); // dark grey
    // text("Hour: "   + hours, 10, 22);
    // text("Minute: " + minutes, 10, 42);
    // text("Second: " + seconds, 10, 62);
    // text("Millis: " + millis, 10, 82);

    // background(0); //black
    translate(width / 2, height / 2); // origin at the middle
    // fill(240,70); // gray
    noFill();
    strokeWeight(1);
    stroke(255);
    // ellipse(0, 0, 400, 400); // clock
    ellipse(0, 0, 333, 333);
    ellipse(0, 0, 240, 240);
    ellipse(0, 0, 120, 120);

    SecondAngle = map(second(), 0, 59, 0, TWO_PI) - HALF_PI; // aling second to start at the top
    MinuteAngle = map(minute(), 0, 59, 0, TWO_PI) - HALF_PI; // aling minute to start at the top
    HourAngle = map(hour(), 0, 23, 0, TWO_PI * 2) - HALF_PI; // aling hour to start at the top

    second_x = cos(SecondAngle) * 165; // second x
    second_y = sin(SecondAngle) * 165; // second y
    minute_x = cos(MinuteAngle) * 120; // minute x
    monute_y = sin(MinuteAngle) * 120; // minute y
    hour_x = cos(HourAngle) * 60; // hour x
    hour_y = sin(HourAngle) * 60; // hour y

    noStroke();

    fill(color(231, 76, 60)); // red - second
    ellipse(second_x,second_y,30,30);
 
    fill(color(46, 204, 113)); // green - minute
    ellipse(minute_x,monute_y,20,20);

    fill(color(67, 103, 140)); // blue - hour
    ellipse(hour_x,hour_y,10,10);



}

