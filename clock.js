/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

const position = [90, 285, 525, 720];

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


    fill('#fae');
    rect(465, 160, 30, 30);
    rect(465, 260, 30, 30);


    // noStroke();
    // fill(40);
    // rect(90, height-(50+minutesBarHeightSmooth), 180, minutesBarHeightSmooth);
    // fill(80);
    // rect(285, height-(50+minutesBarHeightSmooth), 180, minutesBarHeightSmooth);
    // fill(80);
    // rect(525, height-(50+secondBarheightSmooth), 180, secondBarheightSmooth);
    // fill(80);
    // rect(720, height-(50+secondBarheightSmooth), 180, secondBarheightSmooth);

    draw_one(minutesBarHeightSmooth, position[0]);
    draw_two(minutesBarHeightSmooth, position[1]);
    draw_two(secondBarheightSmooth, position[2]);
    draw_one(secondBarheightSmooth, position[3]);

}

function draw_one(h, p) {
	strokeWeight(2);
	stroke(0);

	fill(51);

beginShape();
	vertex(p+55, 350);
	vertex(p+15, 350);
	vertex(p+15, 390);
	vertex(p+30, 410);
	vertex(p+135, 390);
	vertex(p+150, 370);
	vertex(p+135, 350);
	vertex(p+105, 350);
	vertex(p+110, 80);
	vertex(p+95, 60);
	vertex(p+55, 60);
	vertex(p+15, 90);
	vertex(p+15, 120);
	vertex(p+30, 140);
	vertex(p+55, 120);
endShape(CLOSE);

	fill(255);

beginShape();
	vertex(p+70, 370);
	vertex(p+30, 370);
	vertex(p+30, 410);
	vertex(p+150, 410);
	vertex(p+150, 370);
	vertex(p+110, 370);
	vertex(p+110, 80);
	vertex(p+70, 80);
	vertex(p+30, 110);
	vertex(p+30, 140);
	vertex(p+70, 140);
endShape(CLOSE);

fill('#fae');
let fillHeight = map(h, 0, height-100, 410, 80);

if(h>0.0 && fillHeight>370.0){
beginShape();
	vertex(p+30, 410);
	vertex(p+150, 410);
	vertex(p+150, fillHeight);
	vertex(p+30, fillHeight);
endShape(CLOSE);
}else if(h>0.0 && fillHeight>140.0){
beginShape();
	vertex(p+30, 410);
	vertex(p+150, 410);
	vertex(p+150, 370);
	vertex(p+110, 370);
	vertex(p+110, fillHeight);
	vertex(p+70, fillHeight);
	vertex(p+70, 370);
	vertex(p+30, 370);
endShape(CLOSE);
}else if(h>0.0 && fillHeight>110.0){
beginShape();
	vertex(p+30, 410);
	vertex(p+150, 410);
	vertex(p+150, 370);
	vertex(p+110, 370);
	vertex(p+110, fillHeight);
	vertex(p+30, fillHeight);
	vertex(p+30, 140);
	vertex(p+70, 140);
	vertex(p+70, 370);
	vertex(p+30, 370);
endShape(CLOSE);
}else if(h>0.0 && fillHeight>80.0){
	var dig;
if(fillHeight>=80.0 && fillHeight<=110.0){
dig = fillHeight;
}else{
dig = -1;
}
let diagonalLine = map(dig, 110, 80, p+30, p+70);
beginShape();
	vertex(p+30, 410);
	vertex(p+150, 410);
	vertex(p+150, 370);
	vertex(p+110, 370);
	vertex(p+110, fillHeight);
	vertex(diagonalLine, fillHeight);
	vertex(p+30, 110);
	vertex(p+30, 140);
	vertex(p+70, 140);
	vertex(p+70, 370);
	vertex(p+30, 370);
endShape(CLOSE);
}

	line(p+55, 350, p+70, 370);
	line(p+15, 350, p+30, 370);
	line(p+55, 60, p+70, 80);
	line(p+15, 90, p+30, 110);
}

function draw_two(h, p) {
	strokeWeight(2);
	stroke(0);

	fill(51);

beginShape();
	vertex(p+15, 390);
	vertex(p+30, 410);
	vertex(p+150, 380);
	vertex(p+135, 360);
	vertex(p+45, 360);
	vertex(p+45, 330);
	vertex(p+135, 130);
	vertex(p+150, 110);
	vertex(p+105, 60);
	vertex(p+45, 60);
	vertex(p+15, 90);
	vertex(p+15, 130);
	vertex(p+30, 150);
	vertex(p+45, 130);
	vertex(p+45, 100);
	vertex(p+55, 90);
	vertex(p+95, 90);
	vertex(p+105, 100);
	vertex(p+105, 130);
	vertex(p+15, 330);
	vertex(p+15, 360);
endShape(CLOSE);

fill('#fae');

beginShape();
	vertex(p+30, 410);
	vertex(p+150, 410);
	vertex(p+150, 380);
	vertex(p+60, 380);
	vertex(p+60, 350);
	vertex(p+150, 150);
	vertex(p+150, 110);
	vertex(p+150, 110);
	vertex(p+120, 80);
	vertex(p+60, 80);
	vertex(p+30, 110);
	vertex(p+30, 150);
	vertex(p+60, 150);
	vertex(p+60, 120);
	vertex(p+70, 110);
	vertex(p+110, 110);
	vertex(p+120, 120);
	vertex(p+120, 150);
	vertex(p+30, 350);
	vertex(p+30, 380);
endShape(CLOSE);

}
