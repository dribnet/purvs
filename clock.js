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
    
    background(255,255,200); //  beige
    fill(128,100,100); // dark grey
    
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82); 

    let hourBarWidth   = map(hours, 0, 23, 0, height-100);
    let minuteBarWidth = map(minutes, 0, 59, 0, height-100);
    let secondBarWidth = map(seconds, 0, 59, 0, height-100);
    let millisBarWidth = map(millis, 0, 1000, 0, height-100);

    let minutesWithFraction   = minutes + (seconds / 60.0) + (millis / 60000.0);
    let minutesBarHeightSmooth  = map(minutesWithFraction, 0, 60, 0, height-100);
    let secondsWithFraction   = seconds + (millis / 1000.0);
    let secondBarheightSmooth  = map(secondsWithFraction, 0, 60, 0, height-100);


    // noStroke();
    // fill(40);
    // rect(90, height-(50+minutesBarHeightSmooth), 180, minutesBarHeightSmooth);
    // fill(80);
    // rect(285, height-(50+minutesBarHeightSmooth), 180, minutesBarHeightSmooth);
    // fill(80);
    // rect(525, height-(50+secondBarheightSmooth), 180, secondBarheightSmooth);
    // fill(80);
    // rect(720, height-(50+secondBarheightSmooth), 180, secondBarheightSmooth);

    draw_one(secondBarheightSmooth);
}

function draw_one(h) {
	strokeWeight(3);
	stroke(0);

	fill(51);

beginShape();
	vertex(130, 330);
	vertex(100, 330);
	vertex(100, 390);
	vertex(120, 410)
	vertex(220, 390);
	vertex(240, 350);
	vertex(220, 330);
	vertex(190, 330);
	vertex(210, 80);
	vertex(190, 60);
	vertex(130, 60);
	vertex(100, 90);
	vertex(100, 130);
	vertex(120, 150);
	vertex(130, 130);
endShape(CLOSE);

	fill(255);

beginShape();
	vertex(150, 350);
	vertex(120, 350);
	vertex(120, 410);
	vertex(240, 410);
	vertex(240, 350);
	vertex(210, 350);
	vertex(210, 80);
	vertex(150, 80);
	vertex(120, 110);
	vertex(120, 150);
	vertex(150, 150);
endShape(CLOSE);

fill('#fae');
let fillHeight = map(h, 0, height-100, 410, 80);

if(h>0.0 && fillHeight>350.0){
beginShape();
	vertex(120, 410);
	vertex(240, 410);
	vertex(240, fillHeight);
	vertex(120, fillHeight);
endShape(CLOSE);
}else if(h>0.0 && fillHeight>150.0){
beginShape();
	vertex(120, 410);
	vertex(240, 410);
	vertex(240, 350);
	vertex(210, 350);
	vertex(210, fillHeight);
	vertex(150, fillHeight);
	vertex(150, 350);
	vertex(120, 350);
endShape(CLOSE);
}else if(h>0.0 && fillHeight>110.0){
beginShape();
	vertex(120, 410);
	vertex(240, 410);
	vertex(240, 350);
	vertex(210, 350);
	vertex(210, fillHeight);
	vertex(120, fillHeight);
	vertex(120, 150);
	vertex(150, 150);
	vertex(150, 350);
	vertex(120, 350);
endShape(CLOSE);
}else if(h>0.0 && fillHeight>80.0){
	var dig;
if(fillHeight>=80.0 && fillHeight<=110.0){
dig = fillHeight;
}else{
dig = -1;
}
let diagonalLine = map(dig, 110, 80, 120, 150);
beginShape();
	vertex(120, 410);
	vertex(240, 410);
	vertex(240, 350);
	vertex(210, 350);
	vertex(210, fillHeight);
	vertex(diagonalLine, fillHeight);
	vertex(120, 110);
	vertex(120, 150);
	vertex(150, 150);
	vertex(150, 350);
	vertex(120, 350);
endShape(CLOSE);
}

	line(130, 330, 150, 350);
	line(100, 330, 120, 350);
	line(130, 60, 150, 80);
	line(100, 90, 120, 110);
}

