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
//time variables
background(30);
var hours = obj.hours;
var mins = obj.minutes;
var secs = obj.seconds;
var mls = obj.millis;

textSize(60);
fill(120);
//text(hours+':'+mins+'.'+secs,700,250);
fill(255);
//rect(450,170,60,150);


//(midRect)rect(200,170,60,150);

//for(let y=320;secs<59;y-10){
//(progressiveRect)rect(100,320-secs*3,60,0+secs*3);
//}
stroke(180);
strokeWeight(0);
fill(255);
ellipse(480,250,60,60);
fill(90);
noStroke();
var inc = map(mls,0,1000,0,60,true);

ellipse(480,250,0+inc,0+inc);
console.log(inc + "mills" + mls);
}


