/*
 * us p5.js to draw a clock on a 960x500 canvas
 */
function setup(){
 	createCanvas(960,500);
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
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    background(30,144,255);


    background(135,206,250);
    strokeWeight(1); //  beige
    fill(0,0,139);
    text("Hour: "   + hours, 10, 142);
    text("Minute: " + minutes, 10, 162);
    text("Second: " + seconds, 10, 182);
    text("Millis: " + millis, 10, 202);

    let hourBarHeight = map(hours, 0, 23, 100, 400);
    let minuteBarHeight = map(minutes, 0, 59, 75, 425);
    let secondBarColor = map(seconds, 0, 59, 0, 255);
    let millisBarHeight = map(millis, 0, 1000, 130, 475);
    let millisBarHeight2 = map(millis, 0, 1000, 50, 500);
    let millisBarHeight3 = map(millis, 0, 1000, 100, 300);
    let millisBarHeight4 = map(millis, 0, 1000, 20, 400);
    let millisBarHeight5 = map(millis, 0, 1000, 70, 480);



    //Hour
    //strokeWeight(4);
    //stroke(255);
    //fill(220,20,60);
    //ellipse(480, hourBarHeight, 200, 200);

    //Minute
    //strokeWeight(4);
    //stroke(255);
    //fill(255,127,80);
    //ellipse(480, hourBarHeight, 150, 150);

    //millis
    //strokeWeight(4);
    //stroke(0,191,255);
    noStroke();
    fill(0,0,205);
    ellipse(80, millisBarHeight3, 25, 50);
    ellipse(280, millisBarHeight2, 25, 50);
    ellipse(480, millisBarHeight, 25, 50);//center
    ellipse(680, millisBarHeight4, 25, 50);
    ellipse(880, millisBarHeight5, 25, 50);


    //Second
    //cloud
    //strokeWeight(4);
    //stroke(0,191,255);
    //fill(0,0,205);
    noStroke();
    fill(secondBarColor);
    ellipse(870,0,200,200);
    ellipse(750,7,175,175);
    ellipse(670,10,100,100);
    ellipse(600,0,120,120);
    ellipse(480,0,260,260);//Center
    ellipse(300,0,200,200);
    ellipse(200,5,100,100);
    ellipse(50,5,250,250);
    //ellipse(480, secondBarHeight, 50, 100);

    
}

    
    