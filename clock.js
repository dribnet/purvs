const width = 960;
const height = 500;
/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

const orbitX = width/2; // center of the orbits
const orbitY = height/2;
const orbitWidth = width*0.9; // width and height of the orbits
const orbitHeight = height*0.6;


function draw_clock(obj) {
	background(0);
    // draw your own clock here based on the values of obj:
    let hours = obj.hours;	//    obj.hours goes from 0-23
    let minutes = obj.minutes;	//    obj.minutes goes from 0-59
    let seconds = obj.seconds;	//    obj.seconds goes from 0-59
  	let millis = obj.millis;    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
    
    // draws the orbits
    noFill();
    stroke(255);
	ellipse(orbitX, orbitY, orbitWidth, orbitHeight);
	ellipse(orbitX, orbitY, orbitWidth-180, orbitHeight-60);
	ellipse(orbitX, orbitY, orbitWidth-360, orbitHeight-120);
	ellipse(orbitX, orbitY, orbitWidth-540, orbitHeight-180);

	// draws the planets
	milli_planet();
	second_planet();
	minute_planet();
	hour_planet();


	// draws the sun
	push();
	noStroke();
	fill(255, 250, 0);
	ellipse(orbitX, orbitY, 120, 120);
	fill(255, 200, 0);
	ellipse(orbitX, orbitY, 115, 115);
	fill(255, 150, 0);
	ellipse(orbitX, orbitY, 110, 110);
	fill(255, 100, 0);
	ellipse(orbitX, orbitY, 105, 105);
	pop();

	// debugging timers
	noStroke();
	fill(255);
	text("hours: "+hours, 20, 30);
	text("minutes: "+minutes, 20, 40);
	text("seconds: "+seconds, 20, 50);
	text("millis: "+millis, 20, 60);
}

// function to calculate and draw the milliseconds planet 
// in the right position around the orbit
function milli_planet(){
	var angle = (2*Math.PI/1000)*obj.millis;

	let offsetX = orbitX + cos(angle)*(orbitWidth/2);
	let offsetY = orbitY + sin(angle)*(orbitHeight/2);

	push();
	translate(offsetX, offsetY);
	noStroke();
	fill(200, 0, 0);
	ellipse(0, 0, 20, 20);
	pop();
}

// function to calculate and draw the seconds planet 
// in the right position around the orbit
function second_planet(){
	let smooth = obj.seconds + (obj.millis / 1000.0);
	let angle = (2*Math.PI/60)*smooth;

	let offsetX = orbitX + cos(angle)*(orbitWidth/2-90);
	let offsetY = orbitY + sin(angle)*(orbitHeight/2-30);

	push();
	translate(offsetX, offsetY);
	noStroke();
	fill(0, 180, 0);
	ellipse(0, 0, 30, 30);
	pop();
}

// function to calculate and draw the minutes planet 
// in the right position around the orbit
function minute_planet(){
	let smooth = obj.minutes + (obj.seconds / 60.0);
	let angle = (2*Math.PI/60)*smooth;

	let offsetX = orbitX + cos(angle)*(orbitWidth/2-270);
	let offsetY = orbitY + sin(angle)*(orbitHeight/2-90);

	push();
	translate(offsetX, offsetY);
	noStroke();
	fill(0, 120, 120);
	ellipse(0, 0, 40, 40);
	pop();
}

// function to calculate and draw the hours planet 
// in the right position around the orbit
function hour_planet(){
	let smooth = obj.hours + (obj.minutes / 60.0);
	let angle = (2*Math.PI/60)*smooth;

	let offsetX = orbitX + cos(angle)*(orbitWidth/2-180);
	let offsetY = orbitY + sin(angle)*(orbitHeight/2-60);

	push();
	translate(offsetX, offsetY);
	noStroke();
	fill(0, 0, 180);
	ellipse(0, 0, 60, 60);
	pop();
}