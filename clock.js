/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

var mainx=480;
var mainy=250;
var xoutfactor=1;
var bg = 204;
var flashstatus=0
var alarmout=0;

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

    let hours = obj.hours+(obj.minutes/60);
    let minutes = obj.minutes+(obj.seconds/60);
    let seconds = obj.seconds+(obj.millis/1000)
    let millis = obj.millis;
	let alarmtime = obj.seconds_until_alarm


	if (mouseIsPressed) {
	  xoutfactor=lerp(xoutfactor,0,0.1);
	} else {
	  xoutfactor=lerp(xoutfactor, map(mouseX,0,900,-2,2,1),0.6);
	}
	if (alarmtime<5 && alarmtime>0) { 
		bg=lerp(bg,25,0.01)
		alarmout=lerp(alarmout,0,0.5);
	} else {
		if (alarmtime<1 && alarmtime>-1) { 
			bg=(255)
			alarmout=lerp(alarmout,10,0.1);
		} else {
			bg=lerp(bg,204,0.1);
			alarmout=lerp(alarmout,1,0.2);
		}
	}
	
	background(bg); // light gray background
	noStroke();
	
	//Seconds
	fill(58, 71, 89);
	ellipse(mainx-20*xoutfactor*alarmout, mainy, 350, 400);
	rect(mainx-20*xoutfactor*alarmout,mainy-200,20*xoutfactor*alarmout,400);
	fill(63, 87, 124);
	ellipse(mainx, mainy, 350, 400);

	//ellipse(mainx+153.125*cos(radians(map(seconds,0,59,0,359))), mainy+175*sin(radians(map(seconds,0,59,0,359))),16,32)
	
	//Minutes back
	fill(58, 71, 89);
	ellipse(mainx, mainy, 262.5, 300);
	rect(mainx,mainy-150,20*xoutfactor*alarmout,300);

	//Seconds Hand
	for (var i=0; i<=59; i+=2.5) {
		if (seconds>=i-5&&seconds<=i+5) {

			fill(58, 71, 89);
			ellipse(mainx+153.125*cos(radians(map(i,0,59,0,359)-90)), mainy+175*sin(radians(map(i,0,59,0,359)-90)),28,32)
			fill(lerpColor(color(63, 87, 124),color(255),map(abs(i-seconds),0,5,1,0)));

			var dista=map(abs(i-seconds),0,5,10,0)
			ellipse(mainx+153.125*cos(radians(map(i,0,59,0,359)-90))+dista*xoutfactor*alarmout, mainy+175*sin(radians(map(i,0,59,0,359)-90)),28,32)
		}
	}

	//Minutes front
	fill(85, 129, 198);
	ellipse(mainx+20*xoutfactor*alarmout, mainy, 262.5, 300);
	
	//Hours Back
	fill(58, 71, 89);
	ellipse(mainx+20*xoutfactor*alarmout, mainy, 175, 200);
	rect(mainx+20*xoutfactor*alarmout,mainy-100,20*xoutfactor*alarmout,200);
	
	//Minutes Hand
	for (var i=0; i<=59; i+=5) {
		if (minutes>=i-10&&minutes<=i+10) {

			fill(63, 87, 124);
			ellipse(mainx+20*xoutfactor*alarmout+109.275*cos(radians(map(i,0,59,0,359)-90)), mainy+125*sin(radians(map(i,0,59,0,359)-90)),28,32)
			
			fill(lerpColor(color(85, 129, 198),color(255),map(abs(i-minutes),0,10,1,0)));

			var dista=map(abs(i-minutes),0,10,10,0)
			ellipse(mainx+20*xoutfactor*alarmout+109.375*cos(radians(map(i,0,59,0,359)-90))+dista*xoutfactor*alarmout, mainy+125*sin(radians(map(i,0,59,0,359)-90)),28,32)
		}
	}
	
	//Hours Front
	fill(125, 168, 237);
	ellipse(mainx+40*xoutfactor*alarmout, mainy, 175, 200);
	
	//Alarm Front
	fill(58, 71, 89);
	ellipse(mainx+40*xoutfactor*alarmout, mainy, 87.5, 100);
	rect(mainx+40*xoutfactor*alarmout,mainy-50,20*xoutfactor*alarmout,100);
	
	////Hours Hand
	var hrs;
	
	if (hours>=12) {
		hrs=hours-12
	} else {
		hrs=hours
	}
	
	for (var i=0; i<=11; i+=1) {
		if (hrs>=i-3&&hrs<=i+3) {

			fill(85, 129, 198);
			ellipse(mainx+40*xoutfactor*alarmout+65.625*cos(radians(map(i,0,12,0,359)-90)), mainy+75*sin(radians(map(i,0,12,0,359)-90)),28,32)
			
			fill(lerpColor(color(125, 168, 237),color(255),map(abs(i-hrs),0,3,1,0)));

			var dista=map(abs(i-hrs),0,3,10,0)
			ellipse(mainx+40*xoutfactor*alarmout+65.625*cos(radians(map(i,0,12,0,359)-90))+dista*xoutfactor*alarmout, mainy+75*sin(radians(map(i,0,12,0,359)-90)),28,32)
		}
	}
	
	
	fill(168, 202, 255);
	ellipse(mainx+60*xoutfactor*alarmout, mainy, 87.5, 100);
}
