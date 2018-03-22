/*
 * us p5.js to draw a clock on a 960x500 canvas
 */
function setup(){
 	createCanvas(960,500);
    angleMode(DEGREES);
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

    background(221,160,221);

    let hourBarColor = map(hours, 0, 23, 0, 51);
    let hourBarColor2 = map(hours, 0, 23, 0, 255);
    let hourBarSize = map(hours, 0, 23, 5, 15);

    
    let minuteBarSize1 = map(minutes, 0, 59, 0, 15);
    let minuteBarSize2 = map(minutes, 0, 59, 0, 20);
    
    let secondBarHeight = map(seconds, 0, 59, 220, 150);
    let secondBarSize = map(seconds, 0, 59, 0, 15);


    
    let millisBarHeight = map(millis, 0, 1000, 90,350);
    let millisBarHeight2 = map(millis, 0, 1000, 100,210);
    let millisBarWidth = map(millis, 0, 1000, 377, 383);
    let millisBarWidth2 = map(millis, 0, 1000, 437, 443);

    //crystal ball
    strokeWeight(12);
    stroke(51);
    fill(222,184,135);
    quad(560,250,400,250,300,490,660,490);
    strokeWeight(12);
    stroke(51);
    fill(0,191,255);
    ellipse(480,210,400,400);

    //grass-character-second
    strokeWeight(6);
    stroke(34,139,34);
    noFill();
    line(410,250,410,secondBarHeight);
    noStroke();
    fill(34,139,34)
    arc(390,secondBarHeight,45,35,PI,0);
    arc(430,secondBarHeight,45,35,PI,0);

    //character
    noStroke();
    fill(222,184,135);
    arc(400,230,25,25,PI,0);//left ear
    arc(420,230,25,25,PI,0);//right ear

    noStroke();
    fill(222,184,135);
    ellipse(410,285,120,120);//big body

    noStroke();
    fill(255,235,205);
    ellipse(410,290,80,80);//small body

    noStroke();
    fill(51);
    ellipse(380,270,35,35);//left eye
    ellipse(440,270,35,35);//right eye

    noStroke();
    fill(255);
    ellipse(millisBarWidth,275,20,20);//left eyeball
    ellipse(millisBarWidth2,275,20,20);//right eyeball

    strokeWeight(3);
    stroke(51);
    noFill();
    arc(400,290,20,20,0,PI);
    arc(420,290,20,20,0,PI);

    //flower
    strokeWeight(6);
    stroke(34,139,34);
    line(530,280,530,350);
    noStroke();
    fill(225,hourBarColor2,hourBarColor);
    ellipse(530,245,minuteBarSize2,minuteBarSize2);//up
    ellipse(544,251,minuteBarSize1,minuteBarSize1);
    ellipse(510,265,minuteBarSize2,minuteBarSize2);//left
    ellipse(516,251,minuteBarSize1,minuteBarSize1);
    ellipse(550,265,minuteBarSize2,minuteBarSize2);//right
    ellipse(516,279,minuteBarSize1,minuteBarSize1);
    ellipse(530,285,minuteBarSize2,minuteBarSize2);//down
    ellipse(544,279,minuteBarSize1,minuteBarSize1);
    fill(255,255,0);
    ellipse(530,265,30,30);//center
    noStroke();
    fill(255,99,41);
    ellipse(530,265,hourBarSize,hourBarSize);
    fill(34,139,34)
    arc(515,305,30,30,0,PI);
    arc(545,305,30,30,0,PI);


    //millis-rain
    noStroke()
    fill(0,0,205);
    ellipse(520, millisBarHeight, 10, 30);
    ellipse(420, millisBarHeight2, 10, 30);

    //cloud
    noStroke();
    fill(255);
    ellipse(530,80,75,55);
    ellipse(490,80,100,95);
    ellipse(440,90,95,75);
    ellipse(400,110,30,25);
    ellipse(540,110,30,25);

    //colok
    strokeWeight(1); //  beige
    stroke(0,0,139);
    fill(0,0,139);
    textSize(35);
    textFont('Comic Sans MS');
    text(""   + hours, 420, 100);
    text(":",470,95);
    text("" + minutes, 490, 100);


    //ground
    noStroke();
    fill(144,238,144);
    arc(480,323,280,155,0,PI);

}





    
    