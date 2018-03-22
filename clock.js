var toggle = 1;
var x = 0;
var y = 0;
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
angleMode(DEGREES);

//toggle = toggle* -1;


// Basic timing code
    let seconds = obj.seconds;
    let hours = obj.hours;
    let minutes = obj.minutes;
    let millis = obj.millis;

    let fracsec = seconds + (millis/1000.0);
    let smoothsec = map(fracsec, 0, 59, height/2+45, height-75);

    let fracmin = minutes + (seconds/60.0);
    let smoothmin = map(fracmin, 0, 59,  height/2+45, height-75);

    let frachour = hours + (minutes/60.0);
    let smoothhour = map(frachour,  0, 24, height/2+45, height-75);


    //let secondspen = map(seconds, 0, 59, height/2+45, height-75);
    //let hourpen = map(hours, 0, 23, height/2+45, height-75);
    //let minutepen = map(minutes, 0, 59, height/2+45, height-75);

    let hourarm = map(hours % 12, 0, 12, 0, 360);
    let minarm = map(minutes, 0, 59, 0, 360);

//Alarm functions
    let alarm = obj.seconds_until_alarm;
if (alarm <0){
  x = 0;
  y = 0;
}
 if (alarm == 0){
    // bird appears
  }
  if(alarm >0){
    if (alarm <10){
      x = x -0.02;
      y = y +0.02;
    }
  }

// Text displaying time 
    text("S: " + seconds, 100, 22);
    text("H: " + hours, 10, 22);
    text("M: " + minutes, 50, 22);

// Pendulums 

    line(width/2-30, smoothsec, width/2-30, height/2);
    line(width/2+30, smoothhour, width/2+30, height/2);
    line(width/2, smoothmin, width/2, height/2);

        ellipse(width/2, smoothmin-120, 7, 7);
        ellipse(width/2+30, smoothhour-120, 7, 7);
        ellipse(width/2-30, smoothsec-120, 7, 7);

        ellipse(width/2, smoothmin-80, 7, 7);
        ellipse(width/2+30, smoothhour-80, 7, 7);
        ellipse(width/2-30, smoothsec-80, 7, 7);

    ellipse(width/2-30, smoothsec, 25, 90);
    ellipse(width/2+30, smoothhour, 25, 90);
    ellipse(width/2, smoothmin, 25, 90);
    


// Shape of clock
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
        vertex(410, 200);
        vertex(550, 200);
        vertex(580, 260);
        vertex(380, 260);
    endShape(CLOSE);

    beginShape();
      vertex(540, 260);
      vertex(530, 270);
      vertex(430, 270);
      vertex(420, 260);
    endShape(CLOSE);

    triangle(360, 200, 600, 200, 480, 80);
    triangle(380, 200, 580, 200, 480, 90);

//Alarm Birds nest
    rect(465,  110, 30, 29);
    fill(200);
    rect(465,  110, 15-y, 29);
    rect(495,  110, -15-x, 29);

//clock face
    ellipse(width/2, height/2-55, 100, 100);

    push();
    translate(width/2, height/2-55);
    rotate(hourarm);
    line(0, -40, 0, 0);
    translate(-width/2, -height/2-55);
    pop();

    push();
    translate(width/2, height/2-55);
    rotate(minarm);
    line(0, -30, 0, 0);
    translate(-width/2 -height/2-55);
    pop();

    ellipse(width/2+0.5, height/2-55, 5, 5);

    Text();
    fill(255);

}

function Text(){

// this is the numbers on the clockface,
// I thought of doing a for loop but
// because they arent actually an order I think I would neded an array.

push();
translate(width/2, height/2-55);
fill(5);

  rotate(360/12);
  textSize(11);
  text("I", -2, -35);

  rotate(360/12);
  textSize(11);
  text("II", -3, -35);

  rotate(360/12);
  textSize(11);
  text("III", -3, -35);

  rotate(360/12);
  textSize(11);
  text("IV", -3, -35);

  rotate(360/12);
  textSize(11);
  text("V", -3, -35);

  rotate(360/12);
  textSize(11);
  text("VI", -6, -35);

  rotate(360/12);
  textSize(11);
  text("VII", -6, -35);

  rotate(360/12);
  textSize(11);
  text("VIII", -9, -35);

  rotate(360/12);
  textSize(11);
  text("IX", -3, -35);

  rotate(360/12);
  textSize(11);
  text("X", -3, -35);

  rotate(360/12);
  textSize(11);
  text("XI", -6, -35);

  rotate(360/12);
  textSize(11);
  text("XII", -6, -35);

translate(-width/2, -height/2-55);
pop();
}
