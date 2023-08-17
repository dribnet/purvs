const width = 960;
const height = 500;
/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

let bg = 0;
let orbitColour = 255;
const orbitX = width/2; // center of the orbits
const orbitY = height/2;
const orbitWidth = width*0.9; // width and height of the orbits
const orbitHeight = height*0.55;


function draw_clock(obj) {
	background(bg);
    // draw your own clock here based on the values of obj:
    let hours = obj.hours;	//    obj.hours goes from 0-23
    let minutes = obj.minutes;	//    obj.minutes goes from 0-59
    let seconds = obj.seconds;	//    obj.seconds goes from 0-59
  	let millis = obj.millis;    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

    // alarm
    if(obj.seconds_until_alarm>0) {

    }
    else if(obj.seconds_until_alarm<=0) {

    }
    
    // set the orbit colours
    noFill();
    stroke(orbitColour);

	// draws the planets and orbits in the correct order
	if(obj.hours>13 && obj.hours<22) {
		if(obj.minutes>35 && obj.minutes<55 && obj.seconds>35 && obj.seconds<55 && obj.millis>550 && obj.millis<900) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			milli_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			second_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			minute_planet();
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
			
		}
		else if(obj.minutes>35 && obj.minutes<55 && obj.seconds>35 && obj.seconds<55) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			second_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			minute_planet();
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
			milli_planet();
		}
		else if(obj.minutes>35 && obj.minutes<55 && obj.millis>550 && obj.millis<900) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			milli_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			minute_planet();
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			second_planet();
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
		}
		else if(obj.seconds>35 && obj.seconds<55 && obj.millis>550 && obj.millis<900) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			milli_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			second_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			minute_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
		}
		else if(obj.minutes>35 && obj.minutes<55) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			minute_planet();
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			second_planet();
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
			milli_planet();
		}
		else if(obj.seconds>35 && obj.seconds<55) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			second_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			minute_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
			milli_planet();
		}
		else if(obj.millis>550 && obj.millis<900) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			milli_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			minute_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			second_planet();
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
		}
		else {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			minute_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			second_planet();
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
			milli_planet();
		}
	}
	else if(obj.minutes>35 && obj.minutes<55) {
		if(obj.seconds>35 && obj.seconds<55 && obj.millis>550 && obj.millis<900) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			milli_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			second_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			minute_planet();
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
		}
		else if(obj.seconds>35 && obj.seconds<55) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			second_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			minute_planet();
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
			milli_planet();
		}
		else if(obj.millis>550 && obj.millis<900) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			milli_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			minute_planet();
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			second_planet();
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
		}
		else {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			minute_planet();
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			second_planet();
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
			milli_planet();
		}
	}
	else if(obj.seconds>35 && obj.seconds<55) {
		if(obj.millis>550 && obj.millis<900) {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			milli_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			second_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			minute_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
		}
		else {
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
			second_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
			sun();
			arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
			minute_planet();
			arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
			hour_planet();
			arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
			arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
			milli_planet();
		}
	}
	else if(obj.seconds>35 && obj.seconds<55) {
		arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
		milli_planet();
		arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
		arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
		arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
		sun();
		arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
		minute_planet();
		arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
		hour_planet();
		arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
		second_planet();
		arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
	}
	// all planets front
	else{
		arc(orbitX, orbitY, orbitWidth, orbitHeight-90, PI, 0);
		arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, PI, 0);
		arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, PI, 0);
		arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, PI, 0);
		sun();
		arc(orbitX, orbitY, orbitWidth-540, orbitHeight-180, 0, PI);
		minute_planet();
		arc(orbitX, orbitY, orbitWidth-360, orbitHeight-150, 0, PI);
		hour_planet();
		arc(orbitX, orbitY, orbitWidth-180, orbitHeight-120, 0, PI);
		second_planet();
		arc(orbitX, orbitY, orbitWidth, orbitHeight-90, 0, PI);
		milli_planet();
	}


	// debugging timers
	//noStroke();
	//fill(255);
	//text("hours: "+hours, 20, 30);
	//text("minutes: "+minutes, 20, 40);
	//text("seconds: "+seconds, 20, 50);
	//text("millis: "+millis, 20, 60);
	//text("seconds until alarm"+obj.seconds_until_alarm, 20, 70);
}

// function to calculate and draw the milliseconds planet 
// in the right position around the orbit
function milli_planet(){
	var angle;
	if(obj.seconds_until_alarm>=0 && obj.seconds_until_alarm<5){
		angle = (2*Math.PI/500)*obj.millis;
	}
	else{
		angle = (2*Math.PI/1000)*obj.millis;
	}

	let offsetX = orbitX + cos(angle)*(orbitWidth/2);
	let offsetY = orbitY + sin(angle)*(orbitHeight/2-45);

	push();
	translate(offsetX, offsetY);
	noStroke();
	for(i=0; i<5; i++){
		fill(200-(i*15), 0, 0);
		ellipse(0, 0, 20-(i*2.5), 20-(i*2.5));
	}
	pop();
	
}

// function to calculate and draw the seconds planet 
// in the right position around the orbit
function second_planet(){
	let smooth = obj.seconds + (obj.millis / 1000.0);
	let angle;
	if(obj.seconds_until_alarm>=0 && obj.seconds_until_alarm<5){
		angle = (2*Math.PI/1)*smooth;
	}
	else{
		angle = (2*Math.PI/59)*smooth;
	}

	let offsetX = orbitX + cos(angle)*(orbitWidth/2-90);
	let offsetY = orbitY + sin(angle)*(orbitHeight/2-60);

	push();
	translate(offsetX, offsetY);
	noStroke();
	for(i=0; i<5; i++) {
		fill(0, 180-(i*15), 0);
		ellipse(0, 0, 30-(i*2), 30-(i*2));
	}
	pop();

}

// function to calculate and draw the minutes planet 
// in the right position around the orbit
function minute_planet(){
	let smooth= obj.minutes + (obj.seconds / 60.0);
	let angle = (2*Math.PI/59)*smooth;

	let offsetX = orbitX + cos(angle)*(orbitWidth/2-270);
	let offsetY = orbitY + sin(angle)*(orbitHeight/2-90);

	push();
	translate(offsetX, offsetY);
	noStroke();
	for(i=0; i<5; i++) {
		fill(0, 120-(i*10), 120);
		ellipse(0, 0, 40-(i*2), 40-(i*2));
	}
	pop();
	
}

// function to calculate and draw the hours planet 
// in the right position around the orbit 
function hour_planet(){
	let smooth= obj.hours + (obj.minutes / 60.0);
	let angle = (2*Math.PI/23)*smooth;

	let offsetX = orbitX + cos(angle)*(orbitWidth/2-180);
	let offsetY = orbitY + sin(angle)*(orbitHeight/2-75);

	push();
	translate(offsetX, offsetY);
	noStroke();
	for(i=0; i<5; i++) {
		fill(0, 0, 180-(i*10));
		ellipse(0, 0, 60-(i*2), 60-(i*2));
	}
	pop();
	
}

// function to draw the sun
function sun(){

	if(obj.seconds_until_alarm==0 && obj.seconds%2==0){
		push();
		noStroke();
		fill(255, 240, 0, 5);
		for(let i=0; i<20; i++) {
			ellipse(orbitX, orbitY, (obj.millis/3)+(i*30), (obj.millis/3)+(i*30));
		}
	
		for(let i=0; i<4; i++) {
			fill(255, 250 - (i*50), 0)
			ellipse(orbitX, orbitY, (obj.millis/3)-(i*30), (obj.millis/3)-(i*30));
		}
		pop();
	}
	else if(obj.seconds_until_alarm==0 && obj.seconds%2==1){
		push();
		noStroke();
		fill(255, 240, 0, 5);
		for(let i=0; i<20; i++) {
			ellipse(orbitX, orbitY, 333-((obj.millis/3)-(i*30)), 333-((obj.millis/3)-(i*30)));
		}
		// 300 + (i*25), 300 + (i*25)
		// 200 - (i*15) , 200 - (i*15)
		for(let i=0; i<4; i++) {
			fill(255, 250 - (i*50), 0)
			ellipse(orbitX, orbitY, 333-((obj.millis/3)+(i*30)), 333-((obj.millis/3)+(i*30)));
		}
		pop();
	}
	else{
		push();
		noStroke();
		fill(255, 240, 0, 5);
		for(let i=0; i<9; i++) {
			ellipse(orbitX, orbitY, 150 + (i*25), 150 + (i*25));
		}
		
		for(let i=0; i<4; i++) {
			fill(255, 250 - (i*50), 0)
			ellipse(orbitX, orbitY, 125 - (i*5), 125 - (i*5));
		}
		pop();
	}
}