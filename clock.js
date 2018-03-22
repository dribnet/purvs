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

let currentBall = 0;
let jump = 0;
let jumpcap = 120;
let jumpspeed = 7;
let isjumping = true;

let count  = 0;
let count2 = 0;

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
	textSize(24);



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

    timeStrings.push (":");

    if(minutes.length <= 1) {
    	timeStrings.push ("0");
    	timeStrings.push (minutes[0]);
    }else{
    	timeStrings.push (minutes[0]);
    	timeStrings.push (minutes[1]);
    }

    timeStrings.push (":");

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

		//When the alarm is turned on
		if(obj.seconds_until_alarm > 0 ){
			fill(circleColours[i]);
				if(currentBall == i){
				//adding on extra y to sin wave
				y = y - jump;
					//ball starts jumpings
					if(jump < jumpcap && isjumping){
						jump = jump + jumpspeed;

						jumpspeed -= 0.2;
					}
						//when the ball is at the jump cap reset the isJumping boolean.
					else if (jump >= jumpcap && isjumping){
						isjumping = false;
					}
					// when its at the cap start falling.
					else if(jump > 0 && !isjumping){
						jump = jump - jumpspeed;

						jumpspeed += 0.2;
					}
					// when its back to its start position set jump is true for the next ball
					else if(!isjumping && jump <= 0){
						isjumping = true;
						if(currentBall < 7){
							currentBall ++;
							jumpspeed = 7;
							}	//incrementing the current ball
						else{
							currentBall = 0;
							jumpspeed = 7;}	//resetting the current ball	
					}
				ellipse(190 + circle_spacing * i, y + 30, circle_diameter);
				//alter the shadow for when it drumps
				fill(179,209,230);
				ellipse(190 + circle_spacing  *i, 270, shadowWidth + (jumpspeed*1) - 9, shadowHeight + (jumpspeed*1)- 3);	//circle shadows.
				}
		else{
			//draws the circles that arnt jumping
			ellipse(190 + circle_spacing * i, y + 30, circle_diameter);
			fill(179,209,230);
			ellipse(190 + circle_spacing  *i, 270, shadowWidth + bob, shadowHeight + bob)	//circle shadows.
			}
		//drawing the text on the circle
		fill(255);
		//adding offsets to the Colons as they are offcenter
		if(i == 2 || i == 5){
			text(timeStrings[i], 186 + circle_spacing * i, y + 37 );
		
		}
		else{
		text(timeStrings[i], 183 + circle_spacing * i, y + 37 );
		}
	}
		//When alarm is off
		else if (obj.seconds_until_alarm < 0 || obj.seconds_until_alarm == 0){
		fill(circleColours[i]);
		ellipse(190 + circle_spacing * i, y + 30, circle_diameter);	// circles	
		fill(179,209,230);
		ellipse(190 + circle_spacing  *i, 270, shadowWidth + bob, shadowHeight + bob)	//circle shadows.
		fill(255);
		if(i == 2 || i == 5){
		text(timeStrings[i], 186 + circle_spacing * i, y + 37 );
		
		}
		else{
		text(timeStrings[i], 183 + circle_spacing * i, y + 37 );
		}

		//alarm going off code.
			if(obj.seconds_until_alarm == 0){
				if(count < 1800){			
					noFill();
					strokeWeight(40);
					stroke(251,195,202);
					ellipse(750,232,count*1.6,count*1.6);
					if(count > 200){					
					stroke(242, 95, 92);
					ellipse(190, 232, count2*1.6, count2*1.6);
					count2++;
					}
					count++;
				}else{
					count = 0;
					count2 = 0;
				}


			}	
		}	
	}
}

