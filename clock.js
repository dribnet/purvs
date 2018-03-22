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
    
    angleMode(DEGREES);

    background(204);
	drawAFrame(width/2, height/2);
	drawDropletDevice((width/2) - 100, (height/2) - 120, 1, 1);
	push();
	scale(1, 0.6);
	translate(0, 47);
    drawDropletDevice((width/2) + 100, (height/2) - 120, 1, 1);
    pop();

    drawHourBeaker((width/2)-100, (height/2) + 120);
    drawMinBeaker((width/2) + 100, (height/2) + 32);
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
	rect(Xh + 30, Yh - 20, 35, 4);
	rect(Xh + 30, Yh - 44, 35, 4);
	rect(Xh + 30, Yh - 68, 35, 4);
	rect(Xh + 30, Yh - 92, 35, 4);
	rect(Xh + 30, Yh - 116, 35, 4);
	rect(Xh + 30, Yh - 140, 35, 4);
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
	noFill();
    
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
	fill(255, 0, 0);
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
