/*
 * us p5.js to draw a clock on a 960x500 canvas
 */
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
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let myAlarm = obj.seconds_until_alarm;
    //myFont = loadFont('HoboStd.otf');
    //textFont(myFont);
 	

    angleMode(DEGREES);

    background(255);
    let cAM = map(minutes, 0, 59, 150, 200);
	let cPM = map(minutes, 0, 59, 96, 200);
   

    noFill();
    
    if (myAlarm > 0){
	stroke(150);
    rect(200, 10, 570, 460);
    stroke(204);
    rect(210, 20, 550, 440);

    stroke(0);
    fill(255, 241, 0);//yellow
    triangle(270, 30, 230, 100, 310, 100);
    fill(0);
    beginShape();
    vertex(265, 50);
    vertex(275, 50);
    vertex(273, 80);
    vertex(267, 80);
    vertex(265, 50);
    endShape();

    rect(267, 90, 6, 3);
    }else{
    	if (myAlarm === 0){
    		
    		stroke(240, 0, 0);
		    rect(200, 10, 570, 460);
		    stroke(204);
		    rect(210, 20, 550, 440);

    	}else{
    		stroke(150);
		    rect(200, 10, 570, 460);
		    stroke(204);
		    rect(210, 20, 550, 440);	
    	}
    
    }
   

	drawAFrame(width/2, height/2);
	drawDropletDevice((width/2) - 100, (height/2) - 120, 1, 1);
	push();
	scale(1, 0.6);
	translate(0, 47);
    drawDropletDevice((width/2) + 100, (height/2) - 120, 1, 1);
    pop();

    

    textSize(36);
    if (hours < 10){
    	if (minutes < 10){
    		text('0' + hours + " : " + "0" + minutes, 430, 430);
    	}else{
    		text('0' + hours + " : " + minutes, 430, 430);
    	}
    }else{
    	text(hours + " : " + minutes, 430, 430);
    }
  	hobofont= loadFont("HoboStd.otf");
 	textFont("HoboStd");
  	textSize(50);
  	if (hours < 12){
  		text('AM', 540, 350);
  	}else{
  		text('PM', 540, 350);
  	}
  	/*
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);*/
    //text(millis, 100, 100);

    let secondSmooth1  = map(millis, 0, 1000, 176, 470);
	let secondSmooth2  = map(millis, 0, 1000, 130, 370);

	let timeHour = 0, hourHeight = 0, minuteHeight = 0;
    let thisHour = 0, preHour = 0, flag = 1;
    let h1 = 0, h2 = 0, h3 = 0;
    
	
	if ((minutes == 59) && (seconds == 59)){
		text("millis = " + millis, 100, 500);
		push();
	    scale(0.8, 1);
	    drop(475, secondSmooth2);//hour
	    pop();
	}

    push();
    scale(0.6);
    drop(967, secondSmooth1);//minute
    pop();

    
	//fillInHour((width/2)-100, (height/2) + 120);
    if (hours >= 13){
    	timeHour = hours - 12;
    }else{
    	timeHour = hours;
    }
	noStroke();
	if (hours <= 12){
		fill(243, cAM, 0);//hour colour AM,150-220
	}else{
		fill(cPM, 25, 134);//hour colour PM
	}
	
    

    if (timeHour >= 1){
    	beginShape();//1hour
		vertex(380 + 55, 370);
		vertex(380  + 65, 370 - 10);
		vertex(380  - 55, 370 - 10);
	    vertex(380  - 45, 370);
	    vertex(380  + 55, 370);
	    endShape();
    	}
    	hourHeight = 360;

	if (timeHour >=2){
		rect(380  - 55, 370 - 20, 120, 10);//2hour, yf -20
		hourHeight = 350;
	}

	if (timeHour >= 3){
		for (let l = 0, h = 32; l < (timeHour - 2); l ++){
			rect(380  - 55, 370 - h, 120, 12);
			hourHeight = 370 - h;
			h = h + 12;
		}
	}

	
   
     //fillInMinute
     let colourRed = map(minutes, 0, 59, 150, 255);

    noStroke();
	fill(colourRed, 0, 0);//minute colour//9 each 5minutes
	if (minutes > 5){
		beginShape();
		vertex(510, 272);
		vertex(520, 282);
		vertex(640, 282);
		vertex(650, 272);
		endShape();

		h2 = (minutes-5)*(1.8)
		
		beginShape();// 1.8 per minute
		vertex(515 + (minutes-5), (282 - 10) - h2);
		vertex(580 - 70, 282 - 10);
		vertex(580 + 70, 282 - 10);
		vertex(645 - (minutes-5), (282 - 10) - h2);
		endShape();
		minuteHeight = (282 - 10) - h2;

		if (minutes > 45){
			h3 = (minutes-45)*(1.8)

			beginShape();
			vertex(555, 202);
			vertex(605, 202);
			vertex(605, 202 - h3);
			vertex(555, 202 - h3);
			endShape();
			minuteHeight = 202 - h3;
		}
	}else{
		h1 = minutes*2;
		beginShape();//2 per min
		vertex((580 - 60) - h1, 282 - h1);
		vertex(580 - 60, 282);
		vertex(580 + 60, 282);
		vertex((580 + 60) + h1, 282 - h1);
		endShape();
		minuteHeight = 282 - h1;
	}
    //drawBeaker

    drawHourBeaker((width/2)-100, (height/2) + 120);//380,370
    drawMinBeaker((width/2) + 100, (height/2) + 32);//580,282
   
}



function drop(xd, yd) {
	noStroke();
	fill(212, 248, 246);
	beginShape();

	curveVertex(xd, yd - 25);
	curveVertex(xd, yd - 25);

	curveVertex(xd - 5, yd - 5);
	curveVertex(xd + 5, yd - 5);

	curveVertex(xd, yd - 25);
	curveVertex(xd, yd - 25);
	endShape();
}

function drawHourBeaker(Xh, Yh){
	//hourBeaker
	stroke(0);
	strokeWeight(5);
	noFill();
	beginShape();
	vertex(Xh + 55, Yh);
	vertex(Xh + 65, Yh - 10);
    vertex(Xh + 65, Yh - 150);
    vertex(Xh + 65, Yh - 150);
    vertex(Xh + 55, Yh - 160);
    vertex(Xh - 55, Yh - 160);
    vertex(Xh - 70, Yh - 140);
    vertex(Xh - 55, Yh - 140);
    vertex(Xh - 55, Yh - 10);
    vertex(Xh - 45, Yh);
    vertex(Xh + 55, Yh);
	endShape();

	//gradations
	noStroke();
	fill(0);
	for (let j = 0, a = 24; j < 6; j ++){
		rect(Xh + 30, Yh - a, 35, 4);
		a = a + 24;
	}
	/*
	rect(Xh + 30, Yh - 20, 35, 4);
	rect(Xh + 30, Yh - 44, 35, 4);
	rect(Xh + 30, Yh - 68, 35, 4);
	rect(Xh + 30, Yh - 92, 35, 4);
	rect(Xh + 30, Yh - 116, 35, 4);
	rect(Xh + 30, Yh - 140, 35, 4);*/
}

function drawMinBeaker(Xm, Ym) {
	//minBeaker
	stroke(0);
	strokeWeight(5);
	noFill();
	beginShape();
	vertex(Xm - 25, Ym - 120);
	vertex(Xm - 25, Ym -80);
	vertex(Xm - 70, Ym - 10);
	vertex(Xm - 60, Ym);
	vertex(Xm + 60, Ym);
	vertex(Xm + 70, Ym - 10);
	vertex(Xm + 25, Ym - 80);
	vertex(Xm + 25, Ym - 120);
	vertex(Xm + 30, Ym - 125);
	vertex(Xm - 30, Ym - 125);
	vertex(Xm - 25, Ym - 120);
	endShape();

	//gradations
	noStroke();
	fill(0);
	

	for (let i = 0, k = 9; i < 12; i = i + 1 ) {
		rect(Xm - 8, (Ym-3) - k, 16, 2);
		k = k + 9;
	}
}

function drawAFrame(Xf, Yf){
	noStroke();
	fill(0);
	rect(Xf - 5, Yf - 180, 10, 300);
	ellipse(Xf, Yf - 180, 25, 25);
	ellipse(Xf + 180, Yf + 40, 10, 10);
	rect(Xf - 5, Yf + 110, 200, 10);
	rect(Xf - 5, Yf + 35, 185, 10);
	rect(Xf - 100, Yf - 180, 200, 3);
}

function drawDropletDevice(Xd, Yd, sx, sy){
	//ellipse(Xd, Yd, 4 ,4);
	stroke(0);
	strokeWeight(3);
	//noFill();
    fill(212, 248, 246);//blue
    //push();

    scale(sx, sy);
	beginShape();
	vertex(Xd - 2, Yd);
	vertex(Xd -10, Yd - 50);
	vertex(Xd - 7, Yd - 58);
	vertex(Xd + 7, Yd - 58);
	vertex(Xd + 10, Yd - 50);
	vertex(Xd + 2, Yd);
	endShape();
	ellipse(Xd, Yd, 4 ,4);

	fill(204);
    beginShape();
    //curveVertex
    curveVertex(Xd - 7, Yd - 58);
    curveVertex(Xd - 7, Yd - 58);
    curveVertex(Xd - 10, Yd - 70);
    curveVertex(Xd + 10, Yd - 70);
    curveVertex(Xd + 7, Yd - 58);
    curveVertex(Xd + 7, Yd - 58);
    endShape();

	noStroke();
	fill(0);
	rect(Xd - 7, Yd - 61, 14, 6);
	ellipse(Xd - 7, Yd - 58, 6 ,6);
	ellipse(Xd + 7, Yd - 58, 6 ,6);

	//pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
/*
function alarmGo(x, y, w){
	ellipse(x, y, w, w);
}*/