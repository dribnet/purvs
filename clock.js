const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
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


let hr = obj.hours;
let mn = obj.minutes;
let sc = obj.seconds;
let ml = obj.millis;
let mx = mouseX;
let my = mouseY;
let mbg = map(mouseY, 0, 960, 50, 200);

// let x;
// let y;
// let easing = 0.05;

background(mbg, mbg, mbg);

fill(255);
textSize(75);
textAlign(CENTER);
text(hr, mx, my);
text(mn, mx, my);
text(sc, mx, my);

// let dx = mouseX - x;
// x+= dx * easing;
// fill(255);
// ellipse(x, y, 66, 66);
}

