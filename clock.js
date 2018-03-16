//Made by Ben Spearman for MDDN 242
//March 2018 


function setup () {
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
    let hoursf = hours + (minutesm);
    let hoursm = map (hoursf, 0, 11, 0, 11);

    angleMode(DEGREES);

    translate(480,250);
    rotate(180);
   	textStyle(BOLD);
	textFont('Times New Roman');

	push();
	    rotate(-6*secondsm);
	    secondRing();
	pop();

	push();
		rotate(-6*minutesm);
	    minuteRing();
	pop();

	push();
		rotate(-30*hoursm);
	    hourRing();
	pop();

	line(0,0,0,250);
}




//Creates the outer ring for seconds
function secondRing(){

	push();
		ellipse(0,0,400);

		//Creating divisions for time
		beginShape();
			strokeWeight(3);
			for (i=1;i<=6;i++){
				rotate(-30);
				line(0,-250,0,250);
			}
		endShape();

		strokeWeight(1);
		beginShape();
			for (i=1;i<=30;i++){
				rotate(-6);
				line(0,-250,0,250);
			}
		endShape();


		//Adding in digits to read
		rotate(182);
		textSize(10);
		for (k=1;k<=9;k++){
			text(k,0,-180,5,15);
			rotate(6);
		}
		rotate(-1);
		for (k=10;k<=60;k++){
			text(k,0,-180,5,15);
			rotate(6);
		}
	pop();

}

//Creates the middle ring for minutes
function minuteRing(){

	push();
		strokeWeight (3);
		ellipse(0,0,300);

		//Creating divisions for time
		strokeWeight(3);
		beginShape();
			for (i=1;i<=6;i++){
				rotate(-30);
				line(0,-150,0,150);
			}
		endShape();

		strokeWeight(1);
		beginShape();
			for (i=1;i<=30;i++){
				rotate(-6);
				line(0,-150,0,150);
			}
			strokeWeight(5);
			line(0,0,0-250);
		endShape();

		//Adding in digits to read
		rotate(182);
		textSize(8);
		for (k=1;k<=9;k++){
			text(k,0,-130,5,15);
			rotate(6);
		}
		rotate(-1);
		for (k=10;k<=60;k++){
			text(k,0,-130,5,15);
			rotate(6);
		}

	pop();
}

//Creates the inner ring for hours
function hourRing(){

	//Creating the line divisions
	push();
	rotate(30);
		strokeWeight(3);
		ellipse(0,0,200);
		strokeWeight(2);
		beginShape();
			for (i=1;i<=6;i++){
				rotate(-30);
				line(0,-100,0,100);
			}
		endShape();

	//Putting in the numbers
		beginShape();
		rotate (13);
		textSize(15);
		for (j=1;j<=9;j++){
			text(j,0,-90,5,15);
			rotate(30);
		}
		for (j=1;j<=3;j++){
			text(j+9,-5,-90,5,15);
			rotate(30);
		}
		endShape();
	pop();
}