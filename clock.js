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
let sec1 = obj.seconds;
let min2 = obj.minutes;
let hor3 = obj.hours;
let ala4 = obj.seconds_until_alarm
let s = map(sec1, 0, 60, 0.5, 1.5);
angleMode(DEGREES);



// if (ala4 === 0) {
// 	// console.log("alarm going off")
// 	background(255);
// }

if (hor3 > 6 && hor3 < 18) {
noStroke();
fill(222, 225, 227);
rect(0, 0, 480, 500, 20);
fill(0, 0, 0);
rect(480, 0, 480, 500, 20);

textSize(80);
textStyle(BOLD);
fill(0, 0, 0);
text(hor3, width/2-320, height/2+5);
fill(255, 255, 255);
text(min2, width/2+240, height/2+5);

translate(width/2, height/2);
rotate(-90);
// let hor = hour();
// let min = minute();
// let sec = second();


let s = map(sec1, 0, 60, 0.5, 1.5);
scale(s);
noStroke()
fill(255);
arc(0, 0, 100, 100, 180, 360);
noFill();
strokeWeight(50);
stroke(255, 255, 255);
strokeCap(SQUARE);
arc(0, 0, 194, 194, 0, 180);
stroke(0);
arc(0, 0, 194, 194, 180, 360);

// fill(255, 255, 255);

noStroke();
let secondValue = map(sec1, 0, 60, 0, 360);
if (sec1 > 0 && sec1 < 180) {
  fill(255);
} else {fill(0);
};
arc(0, 0, 150, 150, 0, secondValue);


noFill();
strokeWeight(4);
//stroke(255, 255, 255);
let minuteValue = map(min2, 0, 60, 0, 360);
if (min2 > 0 && min2 < 174) {
  stroke(0);
} else {stroke(255);
};
arc(0, 0, 200, 200, 0, minuteValue);

strokeWeight(8);
// stroke(0, 0, 0);
let hourValue = map(hor3 % 12, 0, 12, 0, 360);
if (hor3 > 0 && hor3 < 180) {
  stroke(255, 255, 255);
} else {stroke(0, 0, 0);
};
arc(0, 0, 250, 250, 0, hourValue);

} else {
noStroke();
fill(0, 0, 0);
rect(0, 0, 480, 500, 20);
fill(222, 225, 227);
rect(480, 0, 480, 500, 20);

textSize(80);
textStyle(BOLD);
fill(255, 255, 255);
text(hor3, width/2-320, height/2+5);
fill(0, 0, 0);
text(min2, width/2+240, height/2+5);

translate(width/2, height/2);
rotate(-90);
scale(s);
noStroke()
fill(0);
arc(0, 0, 100, 100, 180, 360);
noFill();
strokeWeight(50);
stroke(0, 0, 0);
strokeCap(SQUARE);
arc(0, 0, 194, 194, 0, 180);
stroke(255);
arc(0, 0, 194, 194, 180, 360);


noStroke();
let secondValue = map(sec1, 0, 60, 0, 360);
if (sec1 > 0 && sec1 < 180) {
  fill(0);
} else {fill(255);
};
arc(0, 0, 150, 150, 0, secondValue);


noFill();
strokeWeight(4);
//stroke(255, 255, 255);
let minuteValue = map(min2, 0, 60, 0, 360);
if (min2 > 0 && min2 < 174) {
  stroke(255);
} else {stroke(0);
};
arc(0, 0, 200, 200, 0, minuteValue);

strokeWeight(8);
// stroke(255, 255, 255);
let hourValue = map(hor3 % 12, 0, 12, 0, 360);
if (hor3 > 0 && hor3 < 180) {
stroke(0, 0, 0);
} if (hor3 == 0 && hor3 == 360){stroke(0, 0, 0);
} else {stroke(255, 255, 255);
}
arc(0, 0, 250, 250, 0, hourValue);


}

if (ala4 === 0) {
 
  background(255, 255, 255, 240); 	
} 
if (ala4 > 0) {
 for (var i = 0; i < 960; i++) {
 	var r = random(-960, 960);
 	line(0, i, r, i);
 }
}
}
