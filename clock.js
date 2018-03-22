var clockDiv = [0, 60, 60, 1000];
function draw_clock(obj) {
    background(0);
    angleMode(DEGREES);
    var hours = 0;


    fill(255);
    textStyle(NORMAL);
    textAlign(CENTER, CENTER);

    translate(width / 2, height / 2); 

    var time = new Date(); //time is new date on system
    var milliseconds = obj.millis;
    var seconds = obj.seconds + milliseconds / clockDiv[3]; //second cyle is based on millis
    var minutes = obj.minutes + seconds / clockDiv[2]; //minus cycle is based on second
    var hours = obj.hours;
    var alarm = obj.alarm;
    var clock = [hours, minutes, seconds]; //define clock order

//alarm set
 let seconds_until_alarm = obj.seconds_until_alarm;

    if (seconds_until_alarm > 0) {
        //draw the halo
    fill(255,255,255,5);
    noStroke();
    ellipse(20,0,960,500);
    beginShape();
        for(var a = 0; a <360; a += 0.1) {
            var r = 500 / 2 - 60;
            r = r + random(-50,50);
            var x = r * cos(a);
            var y = r * sin(a);
            vertex(x,y);
            //ellipse(x,y,4,4);
            fill(255, 255, 255,100);
        }
    endShape();
    beginShape();
        for(var a = 0; a >180; a += 0.1) {
            var r2 = 500 / 2 - 120;
            r2 = r2 + random(-80,80);
            var x = r2 * cos(a);
            var y = r2 * sin(a);
            vertex(x,y);
            //ellipse(x,y,4,4);
            fill(255, 255, 255,100);
        }
    endShape();    
    }

//gold color
    var c = color(198, 156, 109);


//draw rat
if(hours == 0 || hours==12){  
  //     center rat
    fill(255);
    textSize(90);
    text('Rat',-10,0);
    arc(-90, -75, 70, 70, 180 + 270, 0, CHORD);
    arc(70, -75, 70, 70, 360+180, 90, CHORD);
}
 if(hours > 0 && hours<12){    
    //left rat
    fill(c);
    textSize(30);
    text('Rat',-430,-210);
    arc(-455, -230, 20, 20, 180 + 270, 0, CHORD);
    arc(-405, -230, 20, 20, 360+180, 90, CHORD);
}

if (hours > 12) {
    fill(155);
    textSize(30);
    text('Rat',-430,-210);
    arc(-455, -230, 20, 20, 180 + 270, 0, CHORD);
    arc(-405, -230, 20, 20, 360+180, 90, CHORD);
}

if (hours ==1||hours ==13) {
//  center ox 
    fill(255);
    textSize(90);
    text('O X',-10,0);
    arc(-60, -80, 50, 180, 130, 180 + 80);
    arc(40, -80, 50, 180, 360-80, 50);}

if (hours > 1 && hours < 13) {
//left ox
    fill(c);
    textSize(30);
    text('O X',-360,-190);
    arc(-380, -210, 20, 60, 130, 180 + 80);
    arc(-340, -210, 20, 60, 360-80, 50);
}

if (hours > 13) {
    fill(155);
    textSize(30);
    text('O X',-360,-190);
    arc(-380, -210, 20, 60, 130, 180 + 80);
    arc(-340, -210, 20, 60, 360-80, 50);
}

if (hours == 2 || hours ==14) {
//center tiger
    fill(255);
    textSize(90);
    noStroke();
    text('Tiger',0,0);
    strokeWeight(7);
    stroke(255);
    line(-20, -110, 50, -110);
    line(-20, -80, 50, -80);
    line(-20, -50, 50, -50);
    line(15, -110, 15, -50); }

if (hours>2&&hours< 14) {
    //left tiger
    fill(c);
    textSize(30);
    text('Tiger',-300,-150);
    strokeWeight(4);
    stroke(c);
    line(-315, -190, -285, -190);
    line(-315, -180, -285, -180);
    line(-315, -170, -285, -170);
    line(-300, -190, -300, -170);
}

if (hours > 14) {
    fill(155);
    textSize(30);
    text('Tiger',-300,-150);
    strokeWeight(4);
    stroke(155);
    line(-315, -190, -285, -190);
    line(-315, -180, -285, -180);
    line(-315, -170, -285, -170);
    line(-300, -190, -300, -170);
}


if (hours == 3 || hours == 15) {
//center Rabbit
    fill(255);
    textSize(90);
    noStroke();
    text('Rabbit',-10,0);
    strokeWeight(7);
    stroke(255);
    quad(-10, -150, -50, -120, -30,-40, -20, -40);
    quad(30, -120, 60, -150, 30,-40, 10, -40);
}
if (hours > 3&&hours<15) { 
// //left rabbit
scale(0.3, 0.3);
translate(-780, -380);
    fill(c);
    textSize(90);
    noStroke();
    text('Rabbit',-20,0);
    strokeWeight(7);
    stroke(c);
    quad(-10, -170, -50, -140, -30,-40, -20, -40);
    quad(30, -120, 60, -150, 30,-40, 10, -40); 
    translate(780, 380);
    scale(3.331, 3.331);
}

if (hours > 15) { 
// //left rabbit
scale(0.3, 0.3);
translate(-780, -380);
    fill(155);
    textSize(90);
    noStroke();
    text('Rabbit',-20,0);
    strokeWeight(7);
    stroke(155);
    quad(-10, -170, -50, -140, -30,-40, -20, -40);
    quad(30, -120, 60, -150, 30,-40, 10, -40); 
    translate(780, 380);
    scale(3.331, 3.331);
}
//sheep
if (hours == 7 || hours ==19 ) {
    fill(255);
    textSize(90);
    noStroke();
    text('Sheep',0,0);

}
if (hours> 7&& hours<19 ) {
    fill(c);
    textSize(28);
    noStroke();
    text('Sheep',-250,90);

}
if (hours>19 ) {
    fill(155);
    textSize(28);
    noStroke();
    text('Sheep',-250,90);

}

//monkey
if (hours == 8 || hours ==20 ) {
    fill(255);
    textSize(80);
    noStroke();
    text('Monkey',10,0);

}
if (hours> 8&& hours<20 ) {
    fill(c);
    textSize(28);
    noStroke();
    text('Monkey',-285,130);

}
if (hours>20 ) {
    fill(155);
    textSize(28);
    noStroke();
    text('Monkey',-285,130);

}

//Rooster
if (hours == 9 || hours ==21 ) {
    fill(255);
    textSize(80);
    noStroke();
    text('Rooster',10,0);
    arc(-30, -40, 60, 65, 180, 0, CHORD);
    arc(0, -40, 40, 90, 180, 0, CHORD);
    arc(40, -40, 60, 120, 180, 0, CHORD);

}
if (hours> 9&& hours<21 ) {
    fill(c);
    textSize(28);
    noStroke();
    text('Rooster',-335,185);
    arc(-345,170, 30, 28, 180, 0, CHORD);
    arc(-332,170,20,50, 180, 0, CHORD);
    arc(-316,170, 30, 60, 180, 0, CHORD);

}
if (hours>21 ) {
    fill(155);
    textSize(28);
    noStroke();
    text('Rooster',-335,185);
        arc(-345,170, 30, 28, 180, 0, CHORD);
    arc(-332,170,20,50, 180, 0, CHORD);
    arc(-316,170, 30, 60, 180, 0, CHORD);

}

//Dog
if (hours == 10 || hours ==22 ) {
    fill(255);
    textSize(90);
    noStroke();
    text('Dog',0,0);
    triangle(40, -90, 70, -40, 106, -90);
    triangle(-55, -90, -25, -40, 10, -90);
}
if (hours>10&& hours<22 ) {
    fill(c);
    textSize(70);
    noStroke();
    text('Dog',-393,0);
    translate(-418,8);
    triangle(50, -70, 80, -40, 106, -70);
    triangle(-50, -70, -25, -40, 5, -70);
    translate(418,-8);

}
if (hours>22 ) {
    fill(155);
    textSize(70);
    noStroke();
    text('Dog',-393,0);
    translate(-418,8);
    triangle(50, -70, 80, -40, 106, -70);
    triangle(-50, -70, -25, -40, 5, -70);
    translate(418,-8);

}

//Pig
if (hours == 11 || hours ==23 ) {
    fill(255);
    textSize(90);
    noStroke();
    text('Pig',0,0);
    ellipse(0, 80, 80, 55);
    fill(0);
    ellipse(20, 80, 20, 30);
    ellipse(-20, 80, 20, 30);


}
if (hours>11&& hours<23 ) {
    fill(c);
    textSize(30);
    noStroke();
    text('Pig',-430,200);
    ellipse(-430, 230, 35, 20);
    fill(0);
    ellipse(-438, 230, 8, 13);
    ellipse(-423, 230, 8, 13);
}
if (hours>23 ) {
    fill(155);
    textSize(30);
    noStroke();
    text('Pig',-430,200);
    ellipse(-430, 230, 35, 20);
    fill(0);
    ellipse(-438, 230, 8, 13);
    ellipse(-423, 230, 8, 13);

}

// Dragon

if (hours == 4|| hours ==16) {
    fill(255);
    textSize(80);
    noStroke();
    text('Dragon',10,0);
    noFill();
    translate(-25,-90);
    fill(255);
    triangle(0, -20, -60, -20, 20, 50);
        fill(255);
        triangle(60, 50, 90, -20, 160, -20);
                fill(0);
                stroke(255);
                strokeWeight(20);
        ellipse(-20, 20, 35, 55);
        ellipse(105, 20, 35, 55);
            translate(25,90);
}
if (hours>4 && hours <16) {
    fill(c);
    textSize(30);
    noStroke();
    text('Dragon',-177,-66);
    fill(c);
    translate(-190,-94);
    scale(0.35, 0.35);
    triangle(0, -20, -60, -20, 20, 50);
        fill(c);
        triangle(60, 50, 90, -20, 160, -20);
                fill(0);
                stroke(c);
                strokeWeight(20);
        ellipse(-20, 20, 35, 55);
        ellipse(105, 20, 35, 55);
    scale(2.85, 2.85);
            translate(190,94);
}
if (hours>16) {
    fill(155);
    textSize(30);
    noStroke();
    text('Dragon',-177,-66);
    fill(155);
    translate(-190,-94);
    scale(0.35, 0.35);
    triangle(0, -20, -60, -20, 20, 50);
        fill(155);
        triangle(60, 50, 90, -20, 160, -20);
                fill(0);
                stroke(155);
                strokeWeight(20);
        ellipse(-20, 20, 35, 55);
        ellipse(105, 20, 35, 55);
    scale(2.85, 2.85);
            translate(190,94);
}
if (hours==5 || hours==17) {
    fill(255);
    textSize(90);
    noStroke();
    text('Snake',0,0);}
if (hours>5 && hours<17) {
    fill(c);
    textSize(30);
    noStroke();
    text('Snake',-180,-20);}
if (hours>17) {
    fill(155);
    textSize(30);
    noStroke();
    text('Snake',-180,-20);}

//Horse
if (hours==6 || hours==18) {
    fill(255);
    textSize(90);
    noStroke();
    text('Horse',0,0);
    noFill();
    strokeWeight(7);
    stroke(255);
    arc(0, 100, 120, 50, 10, 200);
    arc(56, 70, 10, 74, 0, 90);
    arc(-30,60, 50, 50, 130, 200);
    arc(-20, 80, 30, 30, 180, 360);
    arc(35, 95, 50, 80, 200, 300);


}
if (hours>6 && hours<18) {
    scale(0.35, 0.35);
     translate(-510, 90);
    fill(c);
    textSize(90);
    noStroke();
    text('Horse',0,0);
    noFill();
    strokeWeight(7);
    stroke(c);
    arc(0, 100, 120, 50, 10, 200);
    arc(56, 70, 10, 74, 0, 90);
    arc(-30,60, 50, 50, 130, 200);
    arc(-20, 80, 30, 30, 180, 360);
    arc(35, 95, 50, 80, 200, 300);
    translate(510,-90);
    scale(2.75, 2.75);

}
if (hours>18) {
    scale(0.35, 0.35);
     translate(-510, 90);
    fill(155);
    textSize(90);
    noStroke();
    text('Horse',0,0);
    noFill();
    strokeWeight(7);
    stroke(155);
    arc(0, 100, 120, 50, 10, 200);
    arc(56, 70, 10, 74, 0, 90);
    arc(-30,60, 50, 50, 130, 200);
    arc(-20, 80, 30, 30, 180, 360);
    arc(35, 95, 50, 80, 200, 300);
    translate(510,-90);
    scale(2.75, 2.75);
}


//min and seconds cycle

push();
    translate(500, 100);
     noStroke();
        textSize(48);
    textStyle(NORMAL);
    textAlign(CENTER, CENTER);

        clock.forEach(function (n, c) {
        push();
        var d = clockDiv[c];
        rotate(-n / d * 360);
        var c = color(198, 156, 109);
        for (var i = 0; i < d; i++) {
            if (i >= n) {
                fill(255, (1 - i / d) * 102.4 + 153.6);
            } else {
                fill(c);
            }
            var t = c === 0 ? i || d : i;
            text(t, -400, -200);
            rotate(360 / d);
        }
        pop();
        translate(150,80);
    });
}