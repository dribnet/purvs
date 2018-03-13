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

background(199, 213, 237);
fill(0);
textSize(20);
text("hour: " + hr, 160, 270);
text("Minute: " + mn, 260, 270);
text("Second: " + sc, 380, 270);
text("Millis: " + ml, 560, 270);

let hrx = map(hr, 0, 23, 0, 50);
let hry = map(hr, 0, 23, 0, 50);

let mnx = map(mn, 0, 59, 0, 75);
let mny = map(mn, 0, 59, 0, 75);

let scx = map(sc, 0, 59, 0, 100);
let scy = map(sc, 0, 59, 0, 100);

let mlx = map(ml, 0, 1000, 0, 100);
let mly = map(ml, 0, 1000, 0, 100);

let colourhr = map(hr, 0, 23, 0, 255); 
let colourmn = map(mn, 0, 59, 0, 255);
let coloursc = map(sc, 0, 59, 0, 255);
let colourml = map(ml, 0, 1000, 0, 255);


noStroke();
fill(colourhr);
ellipse(200, 200, hrx, hry);

fill(colourmn);
ellipse(300, 200, mnx, mny);

fill(coloursc);
ellipse(430, 200, scx, scy);

fill(colourml);
ellipse(600, 200, mlx, mly);
}

