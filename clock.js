/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 


function setup () {
	angleMode(radians);
}

function draw_clock(obj) {
    background(0);
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;   
    let millis = obj.millis;
    let seconds_until_alarm = obj.seconds_until_alarm;


    let secondsf = seconds + (millis/1000);
    let secondsm = map (secondsf, 0, 59, 0, 59);
    let minutesf = minutes + (secondsm/60);
    let minutesm = map (minutesf, 0, 59, 0, 59);
    let hoursf = hours + (minutes/60);
    let hoursm = map (hoursf, 0, 11, 0, 11);


    translate(480,250);
    rotate(PI);


	push();
	    rotate(-(PI/60)*secondsm);
	    secondRing();
	pop();

	push();
		rotate(-(PI/60)*minutesm);
	    minuteRing();
	pop();

	push();
		rotate(-(PI/6)*hoursm);
	    hourRing();
	pop();
}




//Creates the outer ring for seconds
function secondRing(){

	push();
		ellipse(0,0,400);

		//Creating divisions for time

		
		beginShape();
			strokeWeight(2);
			for (i=1;i<=6;i++){
				rotate(-PI/6);
				line(0,-250,0,250);
			}
			strokeWeight(5);
			line(0,0,0-250);
		endShape();

		strokeWeight(1);
		beginShape();
			for (i=1;i<=30;i++){
				rotate(-PI/30);
				line(0,-250,0,250);
			}
		endShape();

		beginShape();
		j=1
		textSize(10);
		text(j,0,-250,10,15);

		// textSize(5);
		// 	rotate(PI/14);
		// for (j=1;j<=60;j++){
		// 	;
		// 	rotate(PI/6);
		// }
		endShape();

	pop();

}

//Creates the middle ring for minutes
function minuteRing(){

	push();
		strokeWeight (3);
		ellipse(0,0,300);
		
		//Creating divisions for time
		strokeWeight(2);
		beginShape();
			for (i=1;i<=6;i++){
				rotate(-PI/6);
				line(0,-150,0,150);
			}
		endShape();

		strokeWeight(1);
		beginShape();
			for (i=1;i<=30;i++){
				rotate(-PI/30);
				line(0,-150,0,150);
			}
			strokeWeight(5);
			line(0,0,0-250);
		endShape();
	pop();
}

//Creates the inner ring for hours
function hourRing(){

	//Creating the line divisions
	push();
		strokeWeight(3);

		ellipse(0,0,200);

		strokeWeight(2);
		beginShape();
			for (i=1;i<=6;i++){
				rotate(-PI/6);
				line(0,-100,0,100);
			}
			strokeWeight(5);
			line(0,0,0,100);
		endShape();

	//Putting in the numbers
		beginShape();
		textSize(15);
			rotate(-PI/11);
		for (j=1;j<=9;j++){
			text(j,0,-90,5,15);
			rotate(-PI/6);
		}
		for (j=1;j<=3;j++){
			text(j+9,-5,-90,5,15);
			rotate(-PI/6);
		}
		endShape();
	pop();
}