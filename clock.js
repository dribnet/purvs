/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

var mainx=480;
var mainy=250;
var xoutfactor=1;

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
    let seconds = obj.seconds+(obj.millis/1000)
    let millis = obj.millis;


	if (mouseIsPressed) {
	  xoutfactor=lerp(xoutfactor,0,0.1);
	} else {
	  xoutfactor=lerp(xoutfactor, map(mouseX,0,900,-2,2),0.6);
	}
	background(204); // light gray background
	noStroke();

	//Seconds
	fill(58, 71, 89);
	ellipse(mainx-20*xoutfactor, mainy, 350, 400);
	rect(mainx-20*xoutfactor,mainy-200,20*xoutfactor,400);
	fill(63, 87, 124);
	ellipse(mainx, mainy, 350, 400);

	//ellipse(mainx+153.125*cos(radians(map(seconds,0,59,0,359))), mainy+175*sin(radians(map(seconds,0,59,0,359))),16,32)
	
	//Minutes back
	fill(58, 71, 89);
	ellipse(mainx, mainy, 262.5, 300);
	rect(mainx,mainy-150,20*xoutfactor,300);

	//Seconds Hand
	for (var i=0; i<=59; i+=2.5) {
		if (seconds>=i-5&&seconds<=i+5) {

			fill(58, 71, 89);
			ellipse(mainx+153.125*cos(radians(map(i,0,59,0,359))), mainy+175*sin(radians(map(i,0,59,0,359))),28,32)
			
			fill(lerpColor(color(63, 87, 124),color(255),map(abs(i-seconds),0,5,1,0)));

			var dista=map(abs(i-seconds),0,5,10,0)
			ellipse(mainx+153.125*cos(radians(map(i,0,59,0,359)))+dista*xoutfactor, mainy+175*sin(radians(map(i,0,59,0,359))),28,32)

		} else {
			fill(63, 87, 124);
			ellipse(mainx+153.125*cos(radians(map(i,0,59,0,359))), mainy+175*sin(radians(map(i,0,59,0,359))),28,32)
		}
	}

	//Minutes front
	fill(85, 129, 198);
	ellipse(mainx+20*xoutfactor, mainy, 262.5, 300);

	fill(255,255,0);
	ellipse(mainx+20*xoutfactor, mainy, 218.75, 250);
	
	//Hours
	fill(58, 71, 89);
	ellipse(mainx+20*xoutfactor, mainy, 175, 200);
	rect(mainx+20*xoutfactor,mainy-100,20*xoutfactor,200);
	fill(125, 168, 237);
	ellipse(mainx+40*xoutfactor, mainy, 175, 200);

	fill(0,255,255);
	ellipse(mainx+40*xoutfactor, mainy, 131.25, 150);
	
	//Alarm
	fill(58, 71, 89);
	ellipse(mainx+40*xoutfactor, mainy, 87.5, 100);
	rect(mainx+40*xoutfactor,mainy-50,20*xoutfactor,100);
	fill(168, 202, 255);
	ellipse(mainx+60*xoutfactor, mainy, 87.5, 100);
}
