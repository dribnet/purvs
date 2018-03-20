//Made by Ben Spearman for MDDN 242
//March 2018 

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
    let hoursf = hours + (minutesm/60);
    let hoursm = map (hoursf, 0, 60, 0, 11);
    let fade = map (secondsm, 0, 59, 0,255);


    angleMode(DEGREES);

    translate(480,250);
    rotate(180);
   	textStyle(BOLD);
	textFont('Times New Roman');

	push();
		backdrop();
	pop();

		indicator();
		
	push();
	    rotate(-6*secondsm);
	    secondRing();
	    noStroke();
	    fill(153, 115, 0, 100);
	    ellipse(0,0,350);
	pop();

	push();
		rotate(-6*minutesm);
	    minuteRing();
	    noStroke();
	    fill(153, 115, 0, 100);
	    ellipse(0,0,230);
	pop();

	push();
		rotate(-30*hoursm);
	    hourRing();
	pop();

}




//Creates the outer ring for seconds
function secondRing(){

	push();
		fill(255, 201, 51);
		strokeWeight (3);
		ellipse(0,0,400);
		rotate(6);
		//Creating divisions for time
		beginShape();
			strokeWeight(2);
			for (i=1;i<=6;i++){
				rotate(-30);
				line(0,-200,0,200);
			}
		endShape();

		strokeWeight(1);
		beginShape();
			for (i=1;i<=30;i++){
				rotate(-6);
				line(0,-200,0,200);
			}
		endShape();


		//Adding in digits to read
		rotate(182);
		fill(0);
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
		fill(255, 201, 51);
		ellipse(0,0,300);
		rotate(6);
		//Creating divisions for time
		strokeWeight(2);
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
		endShape();

		//Adding in digits to read
		rotate(182);
		fill(0);
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
	rotate(60);
	fill(255, 201, 51);
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
		fill(0);
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

function indicator(){
	fill(255, 201, 51);
	beginShape();
		vertex(0,-250);
		vertex(250,0);
		vertex(0,250);
		vertex(-250,0);
	endShape(CLOSE);
	fill(0);
	triangle(0,200,10,210,-10,210);
}

function backdrop(){
	noStroke();
	background(102, 163, 255);
	fill(0, 153, 0);
	ellipse(0,-5100,10000);
	cloud1(200,100);
	push();
	scale(2);
		cloud1(-60,15);
	pop();
	cloud2(0,0);
}

function cloud1(x,y){
	push();
		scale(2);
		noStroke();
		fill(255);
		ellipse(x,y,20);
		ellipse(x+5,y-10,15);
		ellipse(x+10,y-5,20);
		ellipse(x-20,y-5,30);
		ellipse(x-10,y-10,20);
	pop();
}

function cloud2(x,y){
	push();
		rotate(180);
		noStroke();
		fill(255);
		ellipse(x,y,20);
		ellipse(x+5,y-10,15);
		ellipse(x+10,y-5,20);
		ellipse(x-20,y-5,30);
		ellipse(x-10,y-10,20);
		ellipse(x+20,y,15);
	pop();
}


//Audio clip from: http://soundbible.com/2171-Church-Bell-Chime.html
//Downloaded, edited, and used under creative commons by Ben Spearman