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
	var MillisAngle = 0;

	var second_x = 0;
	var second_y = 0;
	var minute_x = 0
	var monute_y = 0;
	var hour_x = 0;
	var hour_y = 0;
	var millis_x = 0;
	var millis_y = 0;

    var totalPts = 100;
	var steps = totalPts + 1;

  	let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;

    let seconds_until_alarm = obj.seconds_until_alarm;


    // background(204);

    // background(255,255,200); //  beige
    // fill(128,100,100); // dark grey
    // text("Hour: "   + hours, 10, 22);
    // text("Minute: " + minutes, 10, 42);
    // text("Second: " + seconds, 10, 62);
    // text("Millis: " + millis, 10, 82);

    // background(0); //black
    translate(width / 2, height / 2); // origin at the middle

    col1 = map(millis, 0, 1000, 200, 255);
    r = map(millis, 0, 1000, 40, 70);
    r1 = map(millis, 0, 1000, 0, 90);
    r2 = map(millis, 0, 1000, 420, 550);
    r3 = map(millis, 0, 1000, 500, 700);
    r4 = map(millis, 0, 1000, 600, 850);
    r5 = map(millis, 0, 1000, 800, 1100);

    SecondAngle = map(seconds, 0, 59, 0, TWO_PI) - HALF_PI; // aling second to start at the top
    MinuteAngle = map(minutes, 0, 59, 0, TWO_PI) - HALF_PI; // aling minute to start at the top
    HourAngle = map(hours, 0, 23, 0, TWO_PI * 2) - HALF_PI; // aling hour to start at the top
    MillisAngle = map(millis, 0, 1000, 0, TWO_PI) - HALF_PI;// aling millis to start at the top

    second_x = cos(SecondAngle) * 167; // second x
    second_y = sin(SecondAngle) * 167; // second y
    minute_x = cos(MinuteAngle) * 130; // minute x
    monute_y = sin(MinuteAngle) * 130; // minute y
    hour_x = cos(HourAngle) * 100; // hour x
    hour_y = sin(HourAngle) * 100; // hour y
    mills_x = cos(MillisAngle) * 210; // mills x
    mills_y = sin(MillisAngle) * 210; // mills y
    mills_x1 = cos(MillisAngle-0.1) * 210; // mills x
    mills_y1 = sin(MillisAngle-0.1) * 210; // mills y

    col_second = map(seconds, 0,59, 0, 80);
    col_minute = map(minutes, 0, 59, 100, 255);
    col_hour = map(hours, 0,23, 100,255);
    col_millis = map(millis,0,1000, 0,255);



    if (seconds_until_alarm < 0) {

        background(20);
    
        noStroke();
        fill(col1);
        ellipse(0,0,r,r);

        stroke(255,70);
        noFill();
        ellipse(0,0,r1,r1);
        noFill();
        strokeWeight(1);
        stroke(255,70);
        ellipse(0,0,200,200);

        ellipse(0,0,260,260);
        stroke(255,80);
        ellipse(0,0,250,250);
        ellipse(0,0,270,270);

        stroke(255,80);
        ellipse(0,0,340,340);
        stroke(255,70);
        ellipse(0,0,330,330);

        ellipse(0,0,420,420);


        ellipse(0,0, r2, r2);
        ellipse(0,0,r3,r3);
        ellipse(0,0,r4,r4);
        ellipse(0,0,r5,r5);


        // noStroke()
        stroke(color(231, col_second, col_second));
        fill(color(231, col_second, col_second)); // second
        ellipse(second_x,second_y,10,10);
        noFill();
        ellipse(second_x,second_y,30,30);
        ellipse(second_x,second_y,45,45);
        ellipse(second_x,second_y,50,50);
        ellipse(second_x,second_y,55,55);
        ellipse(second_x,second_y,r,r);


        stroke(color(46, 204, col_minute));
        fill(color(46, 204, col_minute)); // minute
        ellipse(minute_x,monute_y,20,20);
        noFill();
        ellipse(minute_x,monute_y,30,30);
        ellipse(minute_x,monute_y,50,50);
        ellipse(minute_x,monute_y,55,55);
        ellipse(minute_x,monute_y,r,r);
      
        
        stroke(color(67, col_hour, 140));
        fill(color(67, col_hour, 140)); // hour
        ellipse(hour_x,hour_y,12,12);
        noFill();
        ellipse(hour_x,hour_y,30,30);   
        ellipse(hour_x,hour_y,35,35);
        ellipse(hour_x,hour_y,40,40);
        ellipse(hour_x,hour_y,55,55); 
        ellipse(hour_x,hour_y,r-5,r-5);

        
        stroke(color(col_millis, 221, 120));
        fill(color(col_millis, 221, 120)); // millis
        ellipse(mills_x,mills_y,15,15);
        ellipse(mills_x1,mills_y1,15,15);
        noFill();
        ellipse(mills_x,mills_y,38,38);
        ellipse(mills_x1,mills_y1,38,38);

    }
    

    else if (seconds_until_alarm > 0) {
        background(220);
        noStroke();
        fill(col1);
        ellipse(0,0,r,r);

        stroke(255,70);
        noFill();
        ellipse(0,0,r1,r1);


        stroke(10,70);
        Radius = map(millis, 0, 1000, 0, 1100);
        ellipse(0,0, Radius, Radius);

        stroke(color(231, col_second, col_second));
        fill(color(231, col_second, col_second)); // second
        ellipse(second_x,second_y,15,15);
        noFill();
        ellipse(second_x,second_y,r,r);


        stroke(color(46, 204, col_minute));
        fill(color(46, 204, col_minute)); // minute
        ellipse(minute_x,monute_y,20,20);
        noFill();
        ellipse(minute_x,monute_y,r,r);
      
        stroke(color(67, col_hour, 140));
        fill(color(67, col_hour, 140)); // hour
        ellipse(hour_x,hour_y,12,12);
        noFill();
        ellipse(hour_x,hour_y,r-5,r-5);

        stroke(color(col_millis, 221, 120));
        fill(color(col_millis, 221, 120)); // millis
        ellipse(mills_x,mills_y,15,15);
        ellipse(mills_x1,mills_y1,15,15);
        noFill();
        ellipse(mills_x,mills_y,38,38);
        ellipse(mills_x1,mills_y1,38,38);    
    }
    else {
        if(seconds % 2 == 0) {
        background(255);
        noStroke();
        fill(col1);
        ellipse(0,0,r,r);

        stroke(255,70);
        noFill();
        ellipse(0,0,r1,r1);


        stroke(10,70);
        Radius = map(millis, 0, 1000, 0, 1100);
        ellipse(0,0, Radius, Radius);

        stroke(color(231, col_second, col_second));
        fill(color(231, col_second, col_second)); // second
        ellipse(second_x,second_y,15,15);
        noFill();
        ellipse(second_x,second_y,25,25);
        ellipse(second_x,second_y,r,r);


        stroke(color(46, 204, col_minute));
        fill(color(46, 204, col_minute)); // minute
        ellipse(minute_x,monute_y,20,20);
        noFill();
        ellipse(minute_x,monute_y,30,30);
        ellipse(minute_x,monute_y,r,r);
      
        stroke(color(67, col_hour, 140));
        fill(color(67, col_hour, 140)); // hour
        ellipse(hour_x,hour_y,12,12);
        noFill();
        ellipse(hour_x,hour_y,25,25);
        ellipse(hour_x,hour_y,r-5,r-5);

        stroke(color(col_millis, 221, 120));
        fill(color(col_millis, 221, 120)); // millis
        ellipse(mills_x,mills_y,15,15);
        ellipse(mills_x1,mills_y1,15,15);
        noFill();
        ellipse(mills_x,mills_y,38,38);
        ellipse(mills_x1,mills_y1,38,38);     //  red
        }

        else {
        background(100); 
        noStroke();
        fill(col1);
        ellipse(0,0,r,r);

        stroke(255,70);
        noFill();
        ellipse(0,0,r1,r1);


        stroke(10,70);
        Radius = map(millis, 0, 1000, 0, 1100);
        ellipse(0,0, Radius, Radius);

        stroke(color(231, col_second, col_second));
        fill(color(231, col_second, col_second)); // second
        ellipse(second_x,second_y,15,15);
        noFill();
        ellipse(second_x,second_y,r,r);


        stroke(color(46, 204, col_minute));
        fill(color(46, 204, col_minute)); // minute
        ellipse(minute_x,monute_y,20,20);
        noFill();
        ellipse(minute_x,monute_y,r,r);
      
        stroke(color(67, col_hour, 140));
        fill(color(67, col_hour, 140)); // hour
        ellipse(hour_x,hour_y,12,12);
        noFill();
        ellipse(hour_x,hour_y,r-5,r-5);

        stroke(color(col_millis, 221, 120));
        fill(color(col_millis, 221, 120)); // millis
        ellipse(mills_x,mills_y,15,15);
        ellipse(mills_x1,mills_y1,15,15);
        noFill();
        ellipse(mills_x,mills_y,38,38);
        ellipse(mills_x1,mills_y1,38,38);    
        }
    }



	fill(255);
	ellipse(random(width)- width / 2, random(height)-height / 2, 3, 3);
    ellipse(random(width/2)+ width / 2, random(height)+height / 2, 3, 3);



}

