/*
 * us p5.js to draw a clock on a 960x500 canvas
 */
var xbackground;
var ybackground;
var bg;

var t1 = 0;

function setup(){
    createCanvas(960, 500);
    imageMode(CENTER);

    bg = loadImage("test.png");
    xbackground = width/2;
    ybackground = height/2;
}

function draw(){
    //background(255);
    draw_clock();
    time_clock();
    

}

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
    
    let h = obj.hours;
    let min = obj.minutes;
    let sec = obj.seconds;
    let mil =  obj.millis;
    background(104);

     //  beige
    //background(155,255,200);
    fill(t1,t1,t1); // dark grey
    textSize(92);
    textFont('Impact');
    text(h + "   :",220, 250);
    text(min + "   :", 420, 250);
    text(sec + "", 620, 250);

    if(h == 0) {
        t1 = t1 + 255;
    }
    image(bg,50,50);

}

function time_clock() {

    

}
