/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

let circle_diameter = 50;
let circle_spacing = 80;
let	shadowWidth = 35;
let shadowHeight = 8;
var circleColours = [0,1,2,3,4,5,6,7];
var circleShadows = [0,1,2,3,4,5,6,7];

// Here are the RGB values for the circles in an arraylist
circleColours [0] = [242, 95, 92];
circleColours [1] = [112, 193, 179];
circleColours [2] = [255, 224, 102];
circleColours [3] = [182,190,234];
circleColours [4] = [36, 123, 160];
circleColours [5] = [244, 162, 97];
circleColours [6] = [125,145,85];
circleColours [7] = [251,195,202];

circleShadows [0] = [212, 65, 62];
circleShadows [1] = [82, 163, 149];
circleShadows [2] = [225, 194, 72];
circleShadows [3] = [152,160,204];
circleShadows [4] = [6, 93, 130];
circleShadows [5] = [214, 132, 67];
circleShadows [6] = [95, 115, 55];
circleShadows [7] = [221, 165, 172];


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

	background(198,229,233); 
	textSize(22);

	//Converting the integers into strings
	let hours = obj.hours
	let minutes = obj.minutes
	let seconds = obj.seconds
	let millis = obj.millis
	hours = hours.toString();	
	minutes = minutes.toString();
	seconds = seconds.toString();


	for(let i =0;i<8;i++){
		var mil = millis+(1000/8)*i;	
		var sinWave = sin(map(mil,0,1000,0,TWO_PI));
		let y = map(sinWave, 0, 1, 200, 203);
		let bob = map(sinWave, 0, 1, 1, 3);
		noStroke();
		
		//circles
		fill(circleColours[i]);
		ellipse(190 + circle_spacing * i, y + 30, circle_diameter);	// circles	
		fill(circleShadows[i]);
		ellipse(190 + circle_spacing  *i, 270, shadowWidth + bob, shadowHeight + bob)	//circle shadows.

		//Testing SinWave inside for loop.
		text(hours[0], 184, 238 + bob);

	}

	console.log(sinWave);

	fill(255);

	//testing sin Wave outside For loop (CURRENTLY NOT IN SYNC WITH THE CIRCLE)
	let sinWave2 = sin(map(mil,0,1000,0,TWO_PI));
	let textBob = map(sinWave2, 0, 1, 1, 3);	

	text("Hours : " + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    push()
    textSize(30);
    text(":", 345, 237 + textBob);
    text(":", 585, 237 + textBob);
    pop();

    //if statements for the Time strings since they are in an ArrayList
    //and the index changes between 1 and 2 from 0-9 and 10-59
    if(hours.length = 1) {	//time is 1-9
    	text(hours[0], 264, 237 + textBob );
    	text("0", 184, 237 + textBob);
    }else{
    	text(hours[0], 184, 237 + textBob);
    	text(hours[1], 264, 237 + textBob);
    }

    if(minutes.length <= 1) {
    	text(minutes[0], 504, 237 + textBob);
    	text("0", 424, 237 + textBob);
    }else{
    	text(minutes[0], 424, 237 + textBob);
    	text(minutes[1], 504, 237 + textBob);
    }

    if(seconds.length <= 1){
    	text(seconds[0], 744, 237 + textBob);
    	text("0", 664, 237 + textBob);
    }else{
    	text(seconds[0], 664, 237 + textBob);
    	text(seconds[1], 744, 237 + textBob);
    }

}

