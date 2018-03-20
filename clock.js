/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

let circle_diameter = 50;
let circle_spacing = 80;
let	shadowWidth = 35;
let shadowHeight = 8;
var circleColours = [0,1,2,3,4,5,6,7];

// Here are the RGB values for the circles in an arraylist
circleColours [0] = [242, 95, 92];
circleColours [1] = [112, 193, 179];
circleColours [2] = [255, 199, 102];
circleColours [3] = [182,190,234];
circleColours [4] = [36, 123, 160];
circleColours [5] = [244, 162, 97];
circleColours [6] = [125,200,125];
circleColours [7] = [251,195,202];


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

	let timeStrings = [];

    //if statements for the Time strings since they are in an ArrayList
    //and the index changes between 1 and 2 from 0-9 and 10-59
    if(hours.length <= 1) {
    	timeStrings.push ("0");
    	timeStrings.push (hours[0]);
    }else{
    	timeStrings.push (hours[0]);
    	timeStrings.push (hours[1]);
    }

    timeStrings.push (": ");

    if(minutes.length <= 1) {
    	timeStrings.push ("0");
    	timeStrings.push (minutes[0]);
    }else{
    	timeStrings.push (minutes[0]);
    	timeStrings.push (minutes[1]);
    }

    timeStrings.push (": ");

    if(seconds.length <= 1){
    	timeStrings.push ("0");
    	timeStrings.push (seconds[0]);
    }else{
    	timeStrings.push (seconds[0]);
    	timeStrings.push (seconds[1]);
    }


	for(let i =0;i<8;i++){
		let mil = millis+(1000/8)*i;	
		let sinWave = sin(map(mil,0,1000,0,TWO_PI));
		let y = map(sinWave, 0, 1, 200, 203);
		let bob = map(sinWave, 0, 1, 1, 3);
		noStroke();

		if(obj.seconds_until_alarm > 0 ){

		}	
		//circles
		fill(circleColours[i]);
		ellipse(190 + circle_spacing * i, y + 30, circle_diameter);	// circles	
		fill(179,209,230);
		ellipse(190 + circle_spacing  *i, 270, shadowWidth + bob, shadowHeight + bob)	//circle shadows.
		fill(255);
		text(timeStrings[i], 183 + circle_spacing * i, y + 37 );

	}


//alarm going off code.
	if(obj.seconds_until_alarm > 0){
		noFill();
		strokeWeight(40);
		stroke(251,195,202);
		ellipse(750,232,millis,millis);

		stroke(242, 95, 92);
		ellipse(190, 232, millis , millis);
	}

}

