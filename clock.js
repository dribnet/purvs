/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

let diameter = 40;
let	shadowWidth = 35;
let shadowHeight = 8;
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
	let hours = obj.hours
	let minutes = obj.minutes
	let seconds = obj.seconds
	let millis = obj.millis
	background(200);

	//Converting the timing objects into strings that can be separated
	hours = hours.toString();	
	minutes = minutes.toString();
	seconds = seconds.toString();
	console.log(hours[1]);	// Logging 2nd number in hours string. 

    text("Hour: "   + hours[0], 10, 22);
    text(hours[1], 50, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

	
	




	//circles
	for(let i =0;i<8;i++){
		let mil = millis+(1000/8)*i;	
		let sinWave = sin(map(mil,0,1000,0,TWO_PI));
		let sinWave2 = sin(map(mil,0,1000,0,TWO_PI)+PI/2.0);
		let y = map(sinWave, 0, 1, 200, 203);
		let bob = map(sinWave, 0, 1, 1, 3);
		ellipse(235+60*i,y,diameter);	// circles		
		ellipse(235+60*i, 240, shadowWidth + bob, shadowHeight + bob)	//circle shadows.
	}

}
