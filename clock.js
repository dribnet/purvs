
var x = 100
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

background(200, 30, 56);

let seconds = obj.seconds;
let hours = obj.hours;
let minutes = obj.minutes;

let millis = obj.millis;



text("S: " + seconds, 100, 22);
text("H: " + hours, 10, 22);
text("M: " + minutes, 50, 22);

let secondspen = map(seconds, 0, 59, height/2+45, height-45);

let hourpen = map(hours, 0, 23, height/2+45, height-45);

let minutepen = map(minutes, 0, 59, height/2+45, height-45)

line(width/2-30, secondspen, width/2-30, height/2);
 line(width/2+30, hourpen, width/2+30, height/2);
 line(width/2, minutepen, width/2, height/2);

 ellipse(width/2-30, secondspen, 25, 90);
 ellipse(width/2+30, hourpen, 25, 90);
 ellipse(width/2, minutepen, 25, 90);

 


 //line(0, height/2, width, height/2);
 
 beginShape();
    vertex(400, 200);
    vertex(560, 200);
    vertex(590, 260);
        //vertex(540, 260);
        //vertex(540, 270);
        //vertex(480, 270);
        //vertex(420, 270);
        //vertex(420, 260);
    vertex(370, 260);
endShape(CLOSE);


beginShape();
  vertex(540, 260);
  vertex(530, 270);
  vertex(430, 270);
  vertex(420, 260);
endShape(CLOSE);

 triangle(360, 200, 600, 200, 480, 80);
 triangle(380, 200, 580, 200, 480, 90);

rect(465,  110, 30, 29);
line(width/2, 110, width/2, 139);


    ellipse(width/2, height/2-55, 100, 100);
line(width/2, height/2-55, 520, 180);

}
